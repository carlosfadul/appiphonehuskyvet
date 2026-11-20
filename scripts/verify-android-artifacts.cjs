// Read-only verification of the exact mobile distribution files; no signing keys needed.
// AAB XML field numbers: AOSP tools/aapt2/Resources.proto (XmlNode/XmlElement/XmlAttribute).
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const {execFileSync}=require('node:child_process');
const yauzl=require('yauzl');
const fingerprints={commercial:'BDCBECD27C55460668CAFEB89CCA7F0A30625B2130A5F2BF4598B2D0B2B41FE4',pilot:'FEB9E9D271E7A59A7D32FA70869E10AD55DCC6B7AE7DDDE95C1128856BDF2D2B'};
const sha=data=>crypto.createHash('sha256').update(data).digest('hex');
function assert(value,message){if(!value)throw Error(message);}
function readZip(file,wanted){return new Promise((resolve,reject)=>{
  yauzl.open(file,{lazyEntries:true},(error,zip)=>{
    if(error)return reject(error);const found=new Map();zip.on('error',reject);
    zip.on('entry',entry=>{
      if(!wanted.has(entry.fileName))return zip.readEntry();
      if(entry.uncompressedSize>100*1024*1024){zip.close();return reject(Error('Entrada demasiado grande'));}
      zip.openReadStream(entry,(error,stream)=>{if(error)return reject(error);const chunks=[];
        stream.on('data',chunk=>chunks.push(chunk));stream.on('error',reject);
        stream.on('end',()=>{found.set(entry.fileName,Buffer.concat(chunks));zip.readEntry();});
      });
    });zip.on('end',()=>resolve(found));zip.readEntry();
  });
});}
function binaryXml(data){
  assert(data.readUInt16LE(0)===3,'El manifiesto APK no es XML binario');let strings=[],elements=[];
  for(let offset=8;offset<data.length;){
    const type=data.readUInt16LE(offset),header=data.readUInt16LE(offset+2),size=data.readUInt32LE(offset+4);
    assert(size>=8&&offset+size<=data.length,'Chunk Android inválido');
    if(type===1){
      const count=data.readUInt32LE(offset+8),flags=data.readUInt32LE(offset+16),start=data.readUInt32LE(offset+20);
      const len8=p=>data[p]&128?[(data[p]&127)*256+data[p+1],p+2]:[data[p],p+1];
      const len16=p=>{const v=data.readUInt16LE(p);return v&32768?[(v&32767)*65536+data.readUInt16LE(p+2),p+4]:[v,p+2];};
      strings=Array.from({length:count},(_,i)=>{
        let p=offset+start+data.readUInt32LE(offset+header+i*4),length;
        if(flags&256){[,p]=len8(p);[length,p]=len8(p);return data.toString('utf8',p,p+length);}
        [length,p]=len16(p);return data.toString('utf16le',p,p+length*2);
      });
    }else if(type===0x102){
      const name=strings[data.readUInt32LE(offset+20)],start=data.readUInt16LE(offset+24),stride=data.readUInt16LE(offset+26),count=data.readUInt16LE(offset+28),attrs={};
      for(let i=0;i<count;i++){
        const p=offset+16+start+i*stride,key=strings[data.readUInt32LE(p+4)],raw=data.readUInt32LE(p+8),kind=data[p+15],value=data.readUInt32LE(p+16);
        attrs[key]=raw!==0xffffffff?strings[raw]:kind===3?strings[value]:kind===18?Boolean(value):value;
      }elements.push({name,attrs});
    }offset+=size;
  }return elements;
}
function fields(data){
  let p=0;const result=[];
  const variable=()=>{let n=0,m=1,byte;do{assert(p<data.length,'Protobuf truncado');byte=data[p++];n+=(byte&127)*m;m*=128;assert(m<=2**56,'Varint excesivo');}while(byte&128);return n;};
  while(p<data.length){const tag=variable(),field=Math.floor(tag/8),wire=tag%8;let value;
    if(wire===0)value=variable();else if(wire===2){const n=variable();assert(p+n<=data.length,'Protobuf truncado');value=data.subarray(p,p+n);p+=n;}
    else if(wire===1){value=data.subarray(p,p+8);p+=8;}else if(wire===5){value=data.subarray(p,p+4);p+=4;}else throw Error('Wire protobuf desconocido');
    result.push({field,wire,value});
  }return result;
}
const first=(data,n)=>fields(data).find(v=>v.field===n)?.value;
const str=value=>Buffer.isBuffer(value)?value.toString('utf8'):value;
function protoXml(data,result=[]){
  const element=first(data,1);if(!element)return result;const parts=fields(element),attrs={};
  for(const item of parts.filter(v=>v.field===4)){
    const name=str(first(item.value,2));let value=first(item.value,3);
    if(value===undefined||(Buffer.isBuffer(value)&&value.length===0)){const compiled=first(item.value,6),primitive=compiled&&first(compiled,7),string=compiled&&first(compiled,2);
      if(primitive){const values=fields(primitive),v=values.find(v=>[6,7,8].includes(v.field));value=v?.field===8?Boolean(v.value):v?.value;}
      else if(string)value=first(string,1);
    }attrs[name]=str(value);
  }
  result.push({name:str(parts.find(v=>v.field===3)?.value),attrs});
  for(const item of parts.filter(v=>v.field===5))protoXml(item.value,result);
  return result;
}
function runJava(name,args){const executable=path.join(process.env.JAVA_HOME||'', 'bin',name+(process.platform==='win32'?'.exe':''));return execFileSync(executable,['-J-Duser.language=en','-J-Duser.country=US',...args],{encoding:'utf8',windowsHide:true,stdio:['ignore','pipe','pipe']});}
function signature(file,expected,withoutSdk){
  const certificate=runJava('keytool',['-printcert','-jarfile',file]);
  const digest=certificate.match(/SHA256:\s*([0-9A-F:]+)/i)?.[1].replaceAll(':','').toUpperCase();
  assert(digest===expected,'Firma incorrecta en '+path.basename(file));
  const jar=runJava('jarsigner',['-verify',file]);assert(/jar verified\./i.test(jar),'La firma JAR no se verificó en '+path.basename(file));
  let apkVerifier='not-run';
  if(file.endsWith('.apk')&&!withoutSdk){
    const sdk=process.env.ANDROID_HOME||process.env.ANDROID_SDK_ROOT;
    assert(sdk,'Falta ANDROID_HOME para apksigner; usa --without-sdk sólo para revisión local adicional.');
    const buildTools=path.join(sdk,'build-tools'),version=fs.readdirSync(buildTools).filter(v=>/^\d+(?:\.\d+){1,2}$/.test(v)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})).at(-1);
    assert(version,'No hay Android Build Tools');
    const verifier=path.join(buildTools,version,'apksigner'+(process.platform==='win32'?'.bat':''));
    const output=execFileSync(verifier,['verify','--verbose','--print-certs',file],{encoding:'utf8',windowsHide:true,stdio:['ignore','pipe','pipe']});
    assert(output.toUpperCase().includes(expected),'apksigner no devolvió la firma esperada');apkVerifier='apksigner';
  }
  return {sha256:digest,jarVerified:true,apkVerifier};
}
function sourceFiles(folder,result={}){for(const entry of fs.readdirSync(folder,{withFileTypes:true})){const file=path.join(folder,entry.name);if(entry.isDirectory())sourceFiles(file,result);else result[file]=sha(fs.readFileSync(file));}return result;}
async function verify(folder,source,withoutSdk=false){
  const expectedFiles=sourceFiles(path.join(source,'dist')),results=[];
  for(const spec of [{name:'huskyvet-android.apk',channel:'commercial',version:'1.21'},{name:'huskyvet-android-pruebas.apk',channel:'pilot',version:'1.21-pruebas'},{name:'huskyvet-android.aab',channel:'commercial',version:'1.21'}]){
    const file=path.join(folder,spec.name),bundle=file.endsWith('.aab'),prefix=bundle?'base/assets/':'assets/',manifest=bundle?'base/manifest/AndroidManifest.xml':'AndroidManifest.xml';
    const expected=Object.fromEntries(Object.entries(expectedFiles).map(([name,hash])=>[prefix+'public/'+path.relative(path.join(source,'dist'),name).split(path.sep).join('/'),hash]));
    const entries=await readZip(file,new Set([manifest,prefix+'capacitor.config.json',...Object.keys(expected)]));
    assert(entries.has(manifest),'Falta manifiesto en '+spec.name);
    const nodes=bundle?protoXml(entries.get(manifest)):binaryXml(entries.get(manifest));
    const attrs=nodes.find(v=>v.name==='manifest')?.attrs,app=nodes.find(v=>v.name==='application')?.attrs,sdk=nodes.find(v=>v.name==='uses-sdk')?.attrs;
    assert(attrs?.package==='co.huskysoft.mascotas'&&Number(attrs.versionCode)===25&&attrs.versionName===spec.version,'Identificador o versión incorrecta: '+JSON.stringify(attrs));
    assert(app&&!['true',true,1,'1'].includes(app.debuggable),'El instalador habilita depuración');
    assert(Number(sdk?.targetSdkVersion)===35,'Target SDK distinto del canal APK revisado');
    for(const [name,hash]of Object.entries(expected))assert(entries.has(name)&&sha(entries.get(name))===hash,'Contenido distinto de la fuente preparada: '+spec.name+' '+name);
    const config=JSON.parse(entries.get(prefix+'capacitor.config.json')||'{}');assert(config.appId==='co.huskysoft.mascotas'&&!config.server?.url&&!config.server?.cleartext,'Configuración nativa de desarrollo o incompleta');
    results.push({file:spec.name,bytes:fs.statSync(file).size,sha256:sha(fs.readFileSync(file)),applicationId:attrs.package,versionName:attrs.versionName,versionCode:Number(attrs.versionCode),targetSdkVersion:Number(sdk.targetSdkVersion),debuggable:false,signature:signature(file,fingerprints[spec.channel],withoutSdk),bundledFilesVerified:Object.keys(expected).length});
  }
  return {version:'1.21',build:25,commit:process.env.GITHUB_SHA||null,checkedAt:new Date().toISOString(),source,results};
}
module.exports={binaryXml,protoXml,readZip,signature,verify};
if(require.main===module){const folder=path.resolve(process.argv[2]||'android-distribution'),source=path.resolve(process.argv.find(v=>v.startsWith('--source='))?.slice(9)||path.join(__dirname,'..'));
  verify(folder,source,process.argv.includes('--without-sdk')).then(result=>{fs.writeFileSync(path.join(folder,'verification.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));}).catch(error=>{console.error(error.message);process.exitCode=1;});
}
