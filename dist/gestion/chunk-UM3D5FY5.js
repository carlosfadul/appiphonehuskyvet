import{l as Me}from"./chunk-E6OKACWN.js";import"./chunk-33223N3R.js";import{a as Pe,b as Se}from"./chunk-GWR2GRXR.js";import"./chunk-52FFTEJT.js";import"./chunk-HGQV7UII.js";import{a as ve,b as ye}from"./chunk-7ICXNM45.js";import{a as ue,c as ge}from"./chunk-Y3LK6MOH.js";import{a as fe,b as he}from"./chunk-XGYFPF6V.js";import{a as pe}from"./chunk-6NRJH3TR.js";import{R as ie,U as be,W as _e,f as ae}from"./chunk-P46WO673.js";import{a as Ce}from"./chunk-E2MRUQE2.js";import"./chunk-XFJLMDGR.js";import{a as xe}from"./chunk-KW2XS3RW.js";import"./chunk-XZS25QUF.js";import{D as de,g as oe,k as se,s as le,t as me,u as ce}from"./chunk-T37KGJHM.js";import{a as ne}from"./chunk-NU2QRRA4.js";import{$ as g,$a as _,Aa as D,Ab as v,Bb as y,Fa as x,Fb as $,Ga as F,Gb as q,Hb as W,Hc as te,Kc as re,Lb as Z,Pb as I,Qa as C,Rb as G,Sa as c,T as V,Ta as d,U as z,Ub as J,V as X,Wa as j,X as m,Xa as U,Ya as u,Za as i,_a as r,aa as b,ab as M,bb as P,bc as K,cb as f,ec as k,ga as A,gb as S,ha as R,ib as h,kb as p,na as N,pc as Q,rc as Y,va as s,vb as w,wb as L,xb as H,xc as B,yb as o,zb as O,zc as ee}from"./chunk-PLKTGQJT.js";function Be(a,n){a&1&&f(0,"div",2)}var Te=new X("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var we=(()=>{class a{_elementRef=m(N);_ngZone=m(R);_changeDetectorRef=m(K);_renderer=m(D);_cleanupTransitionEnd;constructor(){let e=ae(),t=m(Te,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=Oe(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Oe(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new A;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||a)};static \u0275cmp=x({type:a,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(t,l){t&2&&(C("aria-valuenow",l._isIndeterminate()?null:l.value)("mode",l.mode),H("mat-"+l.color),L("_mat-animation-noopable",l._isNoopAnimation)("mdc-linear-progress--animation-ready",!l._isNoopAnimation)("mdc-linear-progress--indeterminate",l._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",k],bufferValue:[2,"bufferValue","bufferValue",k],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(t,l){t&1&&(M(0,"div",0),f(1,"div",1),c(2,Be,1,0,"div",2),P(),M(3,"div",3),f(4,"span",4),P(),M(5,"div",5),f(6,"span",4),P()),t&2&&(s(),w("flex-basis",l._getBufferBarFlexBasis()),s(),d(l.mode==="buffer"?2:-1),s(),w("transform",l._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--mat-progress-bar-track-height, 4px), var(--mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--mat-progress-bar-track-height, 4px);
  border-radius: var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2,changeDetection:0})}return a})();function Oe(a,n=0,e=100){return Math.max(n,Math.min(e,a))}var Ie=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=F({type:a});static \u0275inj=z({imports:[ie]})}return a})();var E=class a{http=m(ee);apiUrl=`${ne.apiUrl}/suscripciones`;getBranches(n){return this.http.get(this.apiUrl+"/sedes",{params:{veterinaria_id:n}})}getCurrent(n,e){let t=new B().set("veterinaria_id",n).set("sucursal_id",e);return this.http.get(`${this.apiUrl}/actual`,{params:t})}getPayments(n,e){let t=new B().set("veterinaria_id",n);return this.http.get(`${this.apiUrl}/pagos`,{params:t})}createBoldCheckout(n,e){return this.http.post(`${this.apiUrl}/bold/checkout`,{veterinaria_id:n,sucursal_id:e})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=V({token:a,factory:a.\u0275fac,providedIn:"root"})};var ze=(a,n)=>[a,n,"symbol-narrow","1.0-0","es-CO"],Xe=(a,n)=>n.sucursal_id;function Ae(a,n){if(a&1&&(i(0,"option",7),o(1),r()),a&2){let e=n.$implicit;u("ngValue",e.sucursal_id),s(),O(e.sucursal_nombre)}}function Re(a,n){if(a&1){let e=S();i(0,"label"),o(1,"Sucursal"),i(2,"select",6),W("ngModelChange",function(l){g(e);let T=p();return q(T.sucursalId,l)||(T.sucursalId=l),b(l)}),h("ngModelChange",function(){g(e);let l=p();return b(l.load())}),j(3,Ae,2,2,"option",7,Xe),r()()}if(a&2){let e=p();s(2),$("ngModel",e.sucursalId),s(),U(e.branches)}}function Ne(a,n){a&1&&(i(0,"div",3),_(1,"mat-spinner",8),i(2,"span"),o(3,"Cargando plan..."),r()())}function De(a,n){if(a&1){let e=S();i(0,"mat-card",4)(1,"mat-icon"),o(2,"error_outline"),r(),i(3,"span"),o(4),r(),i(5,"button",9),h("click",function(){g(e);let l=p();return b(l.load())}),o(6,"Reintentar"),r()()}if(a&2){let e=p();s(4),O(e.error)}}function Fe(a,n){a&1&&(i(0,"mat-card",5)(1,"mat-icon"),o(2,"info"),r(),i(3,"div")(4,"h2"),o(5,"A\xFAn no hay un plan asignado"),r(),i(6,"p"),o(7,"Esta veterinaria no tiene una suscripci\xF3n registrada. Solicita al administrador de Huskyvet que revise y asigne el plan."),r(),i(8,"a",10),o(9,"Contactar con Huskyvet"),r()()())}function je(a,n){a&1&&(i(0,"p"),o(1,"Primer mes gratis. Este valor corresponde a la siguiente mensualidad."),r())}function Ue(a,n){if(a&1){let e=S();i(0,"mat-card",11)(1,"div")(2,"span",12),o(3),r(),i(4,"h2"),o(5),r(),i(6,"p"),o(7),I(8,"currency"),r()(),i(9,"div")(10,"p"),o(11),r(),c(12,je,2,0,"p"),r(),i(13,"div",13)(14,"mat-icon"),o(15,"event_repeat"),r(),i(16,"div")(17,"span"),o(18,"Periodo actual hasta"),r(),i(19,"strong"),o(20),I(21,"bogotaDate"),r()()()(),i(22,"div",14)(23,"mat-card",15)(24,"div",16)(25,"mat-icon"),o(26,"store"),r(),i(27,"span"),o(28,"Sucursales activas"),r(),i(29,"strong"),o(30),r()(),_(31,"mat-progress-bar",17),r(),i(32,"mat-card",15)(33,"div",16)(34,"mat-icon"),o(35,"group"),r(),i(36,"span"),o(37,"Usuarios activos"),r(),i(38,"strong"),o(39),r()(),_(40,"mat-progress-bar",17),r(),i(41,"mat-card",15)(42,"div",16)(43,"mat-icon"),o(44,"pets"),r(),i(45,"span"),o(46,"Mascotas"),r(),i(47,"strong"),o(48),r()(),_(49,"mat-progress-bar",17),r()(),i(50,"mat-card",5)(51,"mat-icon"),o(52,"info"),r(),i(53,"div")(54,"strong"),o(55,"Pago mensual con Bold"),r(),i(56,"p"),o(57,"El pago se realiza de forma segura en Bold y se reflejar\xE1 aqu\xED cuando sea confirmado."),r()(),i(58,"button",18),h("click",function(){g(e);let l=p();return b(l.payWithBold())}),o(59),r()(),i(60,"app-manual-payments",19),h("reviewed",function(){g(e);let l=p();return b(l.refreshPlan())}),r()}if(a&2){let e=n,t=p();s(2),C("data-status",e.suscripcion_estado),s(),v(" ",t.statusLabel(e.suscripcion_estado)," "),s(2),y("",e.sucursal_nombre," \xB7 ",e.plan_nombre),s(2),v("",J(8,22,Z(31,ze,e.mensualidad_total,e.moneda))," al mes"),s(4),v("",e.tarifa_sede==="base"?"Tarifa de sede principal":"Tarifa de sede adicional",". Este pago habilita \xFAnicamente esta sucursal."),s(),d(e.suscripcion_estado==="prueba"?12:-1),s(8),O(G(21,28,e.vencimiento_acceso,"dd/MM/yyyy")),s(10),y("",e.uso.sucursales," / ",e.max_sucursales??"Sin l\xEDmite"),s(),u("value",t.percentage(e.uso.sucursales,e.max_sucursales)),s(8),y("",e.uso.usuarios," / ",e.max_usuarios??"Sin l\xEDmite"),s(),u("value",t.percentage(e.uso.usuarios,e.max_usuarios)),s(8),y("",e.uso.mascotas," / ",e.max_mascotas??"Sin l\xEDmite"),s(),u("value",t.percentage(e.uso.mascotas,e.max_mascotas)),s(9),u("disabled",t.startingPayment),s(),v(" ",t.startingPayment?"Abriendo Bold\u2026":"Pagar con Bold"," "),s(),u("companyId",t.veterinariaId)("branchId",t.sucursalId)("monthly",e.mensualidad_total)}}var ke=class a{auth=m(pe);route=m(te);subscriptionService=m(E);snackBar=m(Pe);subscription=null;loading=!0;error="";veterinariaId=0;sucursalId=0;branches=[];startingPayment=!1;ngOnInit(){if(this.veterinariaId=this.findRouteParam("veterinariaId"),this.sucursalId=this.findRouteParam("sucursalId")||Number(this.route.snapshot.queryParamMap.get("sucursal_id")),!this.veterinariaId){this.auth.access().subscribe({next:n=>{this.veterinariaId=Number(n.usuario?.veterinariaId),this.veterinariaId?(this.sucursalId=Number(n.usuario?.sucursalId)||this.sucursalId,this.loadBranches()):(this.loading=!1,this.error="Selecciona una cl\xEDnica desde Clientes y mensualidades.")},error:()=>{this.loading=!1,this.error="No se pudo identificar tu negocio"}});return}this.loadBranches()}loadBranches(){this.subscriptionService.getBranches(this.veterinariaId).subscribe({next:n=>{this.branches=n,n.some(e=>e.sucursal_id===this.sucursalId)||(this.sucursalId=n[0]?.sucursal_id||0),this.sucursalId?this.load():(this.loading=!1,this.error="El negocio a\xFAn no tiene sucursales registradas")},error:()=>{this.loading=!1,this.error="No se pudieron cargar las sucursales"}})}load(){this.loading=!0,this.error="",this.subscription=null,this.subscriptionService.getCurrent(this.veterinariaId,this.sucursalId).subscribe({next:n=>{this.subscription=n,this.loading=!1},error:()=>{this.error="No fue posible cargar la informaci\xF3n del plan.",this.loading=!1}})}refreshPlan(){this.subscriptionService.getCurrent(this.veterinariaId,this.sucursalId).subscribe({next:n=>this.subscription=n,error:()=>this.snackBar.open("Actualiza la p\xE1gina para consultar la vigencia del plan","Cerrar",{duration:6e3})})}percentage(n,e){return!e||e<=0?0:Math.min(100,Math.round(n/e*100))}statusLabel(n){return{prueba:"Periodo de prueba",activa:"Activa",en_gracia:"Periodo de gracia",vencida:"Vencida",cancelada:"Cancelada",suspendida:"Suspendida"}[n]||n}paymentStatusLabel(n){return{pendiente:"Pendiente",pagado:"Pagado",fallido:"Fallido",reembolsado:"Reembolsado"}[n]||n}payWithBold(){this.startingPayment||!this.veterinariaId||(this.startingPayment=!0,this.subscriptionService.createBoldCheckout(this.veterinariaId,this.sucursalId).subscribe({next:({url:n})=>window.location.assign(n),error:n=>{this.startingPayment=!1,this.snackBar.open(n?.error?.message||"No fue posible iniciar el pago con Bold","Cerrar",{duration:6e3})}}))}findRouteParam(n){let e=this.route.snapshot;for(;e;){let t=e.paramMap.get(n);if(t)return Number(t);e=e.parent}return 0}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=x({type:a,selectors:[["app-subscription"]],decls:15,vars:5,consts:[[1,"plan-page"],[1,"eyebrow"],["routerLink","/dashboard"],[1,"state"],[1,"error-card"],[1,"billing-note"],["aria-label","Sucursal del plan",3,"ngModelChange","ngModel"],[3,"ngValue"],["diameter","42"],["mat-button","","type","button",3,"click"],["mat-stroked-button","","href","mailto:carlosfadul@gmail.com?subject=Solicitud%20de%20plan%20Huskyvet"],[1,"summary-card"],[1,"status"],[1,"renewal"],[1,"usage-grid"],[1,"usage-card"],[1,"usage-heading"],["mode","determinate",3,"value"],["mat-raised-button","","color","primary","type","button",3,"click","disabled"],[3,"reviewed","companyId","branchId","monthly"]],template:function(e,t){if(e&1&&(i(0,"section",0)(1,"header")(2,"p",1),o(3,"Suscripci\xF3n"),r(),i(4,"h1"),o(5,"Mi plan"),r(),i(6,"a",2),o(7,"Volver a mi espacio de trabajo"),r(),i(8,"p"),o(9,"Consulta el estado, los pagos y el vencimiento de esta sucursal."),r()(),c(10,Re,5,1,"label"),c(11,Ne,4,0,"div",3),c(12,De,7,1,"mat-card",4),c(13,Fe,10,0,"mat-card",5),c(14,Ue,61,34),r()),e&2){let l;s(10),d(t.branches.length?10:-1),s(),d(t.loading?11:-1),s(),d(t.error?12:-1),s(),d(!t.loading&&!t.error&&!t.subscription?13:-1),s(),d((l=t.subscription)?14:-1,l)}},dependencies:[de,me,ce,le,oe,se,Ce,re,Y,ge,ue,he,fe,Ie,we,ye,ve,Me,_e,be,Se,xe,Q],styles:[".plan-page[_ngcontent-%COMP%]{max-width:1100px;margin:0 auto;padding:8px;color:#17324d}header[_ngcontent-%COMP%]{margin-bottom:24px}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:2px 0 6px;font-size:clamp(1.8rem,4vw,2.4rem)}header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#60758a}.eyebrow[_ngcontent-%COMP%]{color:#12608d!important;font-size:.78rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.state[_ngcontent-%COMP%]{min-height:220px;display:grid;place-content:center;justify-items:center;gap:14px}.summary-card[_ngcontent-%COMP%]{padding:28px;display:flex;align-items:center;justify-content:space-between;gap:24px;border-radius:18px}.summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:12px 0 4px;font-size:1.8rem}.summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#60758a}.status[_ngcontent-%COMP%]{display:inline-flex;padding:5px 11px;border-radius:999px;background:#e7f7ee;color:#167348;font-size:.78rem;font-weight:700}.renewal[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:16px;border-radius:14px;background:#edf4fb}.renewal[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#12608d}.renewal[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.renewal[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#60758a;font-size:.78rem}.usage-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin-top:18px}.usage-card[_ngcontent-%COMP%]{padding:20px;border-radius:16px}.usage-heading[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:5px 10px;margin-bottom:16px}.usage-heading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{grid-row:span 2;color:#12608d}.usage-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#60758a;font-size:.82rem}.usage-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.05rem}.billing-note[_ngcontent-%COMP%], .error-card[_ngcontent-%COMP%]{display:flex;align-items:center;gap:14px;margin-top:18px;padding:18px;border-radius:16px}.billing-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .error-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:3px 0 0;color:#60758a}.billing-note[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex:1}.billing-note[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:nowrap}.error-card[_ngcontent-%COMP%]{color:#a82035}.payments-card[_ngcontent-%COMP%]{margin-top:18px;padding:0;border-radius:16px;overflow:hidden}.payments-heading[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 22px;border-bottom:1px solid #e2e9f0}.payments-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 4px}.payments-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#60758a}.payments-heading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#12608d}.payments-scroll[_ngcontent-%COMP%]{overflow-x:auto}.payments-card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;min-width:620px}.payment-status[_ngcontent-%COMP%]{display:inline-block;padding:4px 10px;border-radius:999px;font-size:.76rem;font-weight:700;background:#fff3cd;color:#8a5b00}.payment-status[data-status=pagado][_ngcontent-%COMP%]{background:#e7f7ee;color:#167348}.payment-status[data-status=fallido][_ngcontent-%COMP%]{background:#fee8eb;color:#a82035}.payment-status[data-status=reembolsado][_ngcontent-%COMP%]{background:#edf1f5;color:#52677a}.no-payments[_ngcontent-%COMP%]{min-height:140px;display:grid;place-content:center;justify-items:center;gap:6px;color:#718296}.no-payments[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:38px;height:38px;font-size:38px;color:#a2b2c2}.no-payments[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}@media(max-width:760px){.summary-card[_ngcontent-%COMP%]{align-items:stretch;flex-direction:column}.usage-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.billing-note[_ngcontent-%COMP%]{align-items:flex-start;flex-wrap:wrap}.billing-note[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}}"]})};export{ke as SubscriptionComponent};
