import{a as Ze,b as Ue,c as qe,d as Ke,e as Je}from"./chunk-ITUL36IA.js";import"./chunk-33223N3R.js";import{a as y,b as He}from"./chunk-LBHJ2YMN.js";import{a as Oe}from"./chunk-MRQ4P2OL.js";import"./chunk-LHN7PELW.js";import{e as We,f as I,g as Ge,i as oe}from"./chunk-HGQV7UII.js";import{a as Ne,b as Qe}from"./chunk-XGYFPF6V.js";import{a as je}from"./chunk-WI4WS7PA.js";import{K as D,Q as Re,R as Ae,T as Ve,U as ze,W as Le,a as H,d as Ee,g as Ie,j as ae,m as Fe,t as Te,u as Be,y as Pe}from"./chunk-P46WO673.js";import"./chunk-T37KGJHM.js";import"./chunk-NU2QRRA4.js";import{$ as T,$a as A,A as F,Aa as ge,Ba as P,D as pe,E as ue,F as $,Fa as b,Ga as be,Hc as ye,Ib as E,Ic as xe,Jb as V,Jc as ke,Ka as R,Kb as Ce,Kc as Me,Lb as m,Lc as De,M as X,O as g,Pc as Se,Qa as ne,Sa as h,Ta as f,U as he,V as Y,X as d,Ya as l,Za as r,_a as o,aa as B,bc as G,da as ee,ea as fe,ga as z,gb as O,h as w,ha as L,ib as S,ja as _e,kb as _,lb as x,ma as N,mb as v,na as Q,nb as ie,oa as ve,ob as re,pb as k,qb as M,u as J,ub as we,va as c,vb as W,wb as C,xa as te,yb as s,z as me,zb as j}from"./chunk-PLKTGQJT.js";var q=["*"],it=["content"],rt=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],at=["mat-drawer","mat-drawer-content","*"];function ot(t,a){if(t&1){let e=O();r(0,"div",1),S("click",function(){T(e);let i=_();return B(i._onBackdropClicked())}),o()}if(t&2){let e=_();C("mat-drawer-shown",e._isShowingBackdrop())}}function st(t,a){t&1&&(r(0,"mat-drawer-content"),v(1,2),o())}var dt=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],ct=["mat-sidenav","mat-sidenav-content","*"];function lt(t,a){if(t&1){let e=O();r(0,"div",1),S("click",function(){T(e);let i=_();return B(i._onBackdropClicked())}),o()}if(t&2){let e=_();C("mat-drawer-shown",e._isShowingBackdrop())}}function mt(t,a){t&1&&(r(0,"mat-sidenav-content"),v(1,2),o())}var pt=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var ut=new Y("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ce=new Y("MAT_DRAWER_CONTAINER"),Z=(()=>{class t extends I{_platform=d(H);_changeDetectorRef=d(G);_container=d(de);constructor(){let e=d(Q),n=d(We),i=d(L);super(e,n,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:n}=this._container;return e!=null&&e.mode!=="over"&&e.opened||n!=null&&n.mode!=="over"&&n.opened}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=b({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(n,i){n&2&&(W("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),C("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[E([{provide:I,useExisting:t}]),R],ngContentSelectors:q,decls:1,vars:0,template:function(n,i){n&1&&(x(),v(0))},encapsulation:2,changeDetection:0})}return t})(),se=(()=>{class t{_elementRef=d(Q);_focusTrapFactory=d(Be);_focusMonitor=d(Fe);_platform=d(H);_ngZone=d(L);_renderer=d(ge);_interactivityChecker=d(Te);_doc=d(fe);_container=d(ce,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=D(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=D(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(D(e))}_opened=_e(!1);_openedVia=null;_animationStarted=new w;_animationEnd=new w;openedChange=new z(!0);_openedStream=this.openedChange.pipe(F(e=>e),J(()=>{}));openedStart=this._animationStarted.pipe(F(()=>this.opened),$(void 0));_closedStream=this.openedChange.pipe(F(e=>!e),J(()=>{}));closedStart=this._animationStarted.pipe(F(()=>!this.opened),$(void 0));_destroyed=new w;onPositionChanged=new z;_content;_modeChanged=new w;_injector=d(ee);_changeDetectorRef=d(G);constructor(){this.openedChange.pipe(g(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,n=this._elementRef.nativeElement;return[e.listen(n,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!Pe(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),e.listen(n,"transitionend",this._handleTransitionEvent),e.listen(n,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{p(),u(),e.removeAttribute("tabindex")},p=this._renderer.listen(e,"blur",i),u=this._renderer.listen(e,"mousedown",i)})),e.focus(n)}_focusByCssSelector(e,n){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,n)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":te(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,n){e&&n&&(this._openedVia=n);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,n,i){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&n&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(p=>{this.openedChange.pipe(ue(1)).subscribe(u=>p(u?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,i=n.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,n)),i.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}_handleTransitionEvent=e=>{let n=this._elementRef.nativeElement;e.target===n&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=b({type:t,selectors:[["mat-drawer"]],viewQuery:function(n,i){if(n&1&&re(it,5),n&2){let p;k(p=M())&&(i._content=p.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(n,i){n&2&&(ne("align",null)("tabIndex",i.mode!=="side"?"-1":null),W("visibility",!i._container&&!i.opened?"hidden":null),C("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:q,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,i){n&1&&(x(),r(0,"div",1,0),v(2),o())},dependencies:[I],encapsulation:2,changeDetection:0})}return t})(),de=(()=>{class t{_dir=d(Re,{optional:!0});_element=d(Q);_ngZone=d(L);_changeDetectorRef=d(G);_animationDisabled=Ie();_transitionsEnabled=!1;_allDrawers;_drawers=new ve;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=D(e)}_autosize=d(ut);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:D(e)}_backdropOverride=null;backdropClick=new z;_start=null;_end=null;_left=null;_right=null;_destroyed=new w;_doCheckSubject=new w;_contentMargins={left:null,right:null};_contentMarginChanges=new w;get scrollable(){return this._userContent||this._content}_injector=d(ee);constructor(){let e=d(H),n=d(Ge);this._dir?.change.pipe(g(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),n.change().pipe(g(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(X(this._allDrawers),g(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(X(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(pe(10),g(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,n=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();e+=i,n-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")n+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();n+=i,e-=i}}e=e||null,n=n||null,(e!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(g(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(g(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(g(this._drawers.changes)).subscribe(()=>{te({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(g(me(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let n=this._element.nativeElement.classList,i="mat-drawer-container-has-open";e?n.add(i):n.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=b({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(n,i,p){if(n&1&&ie(p,Z,5)(p,se,5),n&2){let u;k(u=M())&&(i._content=u.first),k(u=M())&&(i._allDrawers=u)}},viewQuery:function(n,i){if(n&1&&re(Z,5),n&2){let p;k(p=M())&&(i._userContent=p.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(n,i){n&2&&C("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[E([{provide:ce,useExisting:t}])],ngContentSelectors:at,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,i){n&1&&(x(rt),h(0,ot,1,2,"div",0),v(1),v(2,1),h(3,st,2,0,"mat-drawer-content")),n&2&&(f(i.hasBackdrop?0:-1),c(3),f(i._content?-1:3))},dependencies:[Z],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return t})(),U=(()=>{class t extends Z{static \u0275fac=(()=>{let e;return function(i){return(e||(e=N(t)))(i||t)}})();static \u0275cmp=b({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[E([{provide:I,useExisting:t}]),R],ngContentSelectors:q,decls:1,vars:0,template:function(n,i){n&1&&(x(),v(0))},encapsulation:2,changeDetection:0})}return t})(),le=(()=>{class t extends se{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=D(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=ae(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=ae(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=N(t)))(i||t)}})();static \u0275cmp=b({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(n,i){n&2&&(ne("tabIndex",i.mode!=="side"?"-1":null)("align",null),W("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),C("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[E([{provide:se,useExisting:t}]),R],ngContentSelectors:q,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,i){n&1&&(x(),r(0,"div",1,0),v(2),o())},dependencies:[I],encapsulation:2,changeDetection:0})}return t})(),$e=(()=>{class t extends de{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(i){return(e||(e=N(t)))(i||t)}})();static \u0275cmp=b({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(n,i,p){if(n&1&&ie(p,U,5)(p,le,5),n&2){let u;k(u=M())&&(i._content=u.first),k(u=M())&&(i._allDrawers=u)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(n,i){n&2&&C("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[E([{provide:ce,useExisting:t},{provide:de,useExisting:t}]),R],ngContentSelectors:ct,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,i){n&1&&(x(dt),h(0,lt,1,2,"div",0),v(1),v(2,1),h(3,mt,2,0,"mat-sidenav-content")),n&2&&(f(i.hasBackdrop?0:-1),c(3),f(i._content?-1:3))},dependencies:[U],styles:[pt],encapsulation:2,changeDetection:0})}return t})(),Xe=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=be({type:t});static \u0275inj=he({imports:[oe,Ae,oe]})}return t})();var ft=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","home"],_t=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","clientes"],vt=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","mascotas"],Ye=()=>["superadmin","admin","veterinario","asistente","recepcionista"],et=()=>["superadmin","admin","recepcionista"],gt=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","citas"],bt=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","conversaciones"],wt=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","nomina"],Ct=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","inventario"],yt=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","ventas"],xt=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","pedidos"],kt=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","configuracion"],Mt=t=>["/veterinaria",t,"admin"],Dt=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","recepcion"],St=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","hospitalizaciones"],Et=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","caja"],It=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","cartera"],Ft=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","tags"],Tt=(t,a)=>["/veterinaria",t,"sucursal",a,"dashboard","mi-plan"];function Bt(t,a){if(t&1&&(r(0,"a",6)(1,"mat-icon",7),s(2,"how_to_reg"),o(),r(3,"span",8),s(4,"Recepci\xF3n y atenci\xF3n"),o()()),t&2){let e=_();l("routerLink",m(1,Dt,e.veterinariaId,e.sucursalId))}}function Pt(t,a){if(t&1&&(r(0,"a",6)(1,"mat-icon",7),s(2,"local_hospital"),o(),r(3,"span",8),s(4,"Hospitalizaciones"),o()()),t&2){let e=_();l("routerLink",m(1,St,e.veterinariaId,e.sucursalId))}}function Rt(t,a){if(t&1&&(r(0,"a",6)(1,"mat-icon",7),s(2,"point_of_sale"),o(),r(3,"span",8),s(4,"Caja y ventas"),o()(),r(5,"a",6)(6,"mat-icon",7),s(7,"account_balance_wallet"),o(),r(8,"span",8),s(9,"Cartera"),o()()),t&2){let e=_();l("routerLink",m(2,Et,e.veterinariaId,e.sucursalId)),c(5),l("routerLink",m(5,It,e.veterinariaId,e.sucursalId))}}function At(t,a){if(t&1&&(r(0,"a",6)(1,"mat-icon",7),s(2,"nfc"),o(),r(3,"span",8),s(4,"Tags NFC"),o()()),t&2){let e=_();l("routerLink",m(1,Ft,e.veterinariaId,e.sucursalId))}}function Ot(t,a){if(t&1&&(r(0,"a",6)(1,"mat-icon",7),s(2,"workspace_premium"),o(),r(3,"span",8),s(4,"Mi plan"),o()()),t&2){let e=_();l("routerLink",m(1,Tt,e.veterinariaId,e.sucursalId))}}function jt(t,a){if(t&1){let e=O();r(0,"div",16)(1,"button",18),S("click",function(){T(e),_();let i=we(2);return B(i.toggle())}),r(2,"mat-icon"),s(3,"menu"),o()(),A(4,"app-product-brand",19),o()}t&2&&(c(4),l("compact",!0))}var K=class t{constructor(a,e,n,i){this.route=a;this.router=e;this.authService=n;this.breakpointObserver=i}route;router;authService;breakpointObserver;business=d(Oe);veterinariaId;sucursalId;canManagePlan=!1;isMobile=!1;sidenavOpened=!0;userName="";userRole="";ngOnInit(){this.veterinariaId=Number(this.route.snapshot.paramMap.get("veterinariaId")),this.sucursalId=Number(this.route.snapshot.paramMap.get("sucursalId"));try{let a=JSON.parse(localStorage.getItem("usuario")||"{}");this.canManagePlan=["superadmin","admin"].includes(a.tipo),this.userName=a.nombre||"Usuario",this.userRole=a.tipo||""}catch(a){this.canManagePlan=!1}this.breakpointObserver.observe("(max-width: 760px)").subscribe(({matches:a})=>{this.isMobile=a,this.sidenavOpened=!a})}logout(){this.authService.logout(),this.router.navigate(["/auth"])}static \u0275fac=function(e){return new(e||t)(P(ye),P(ke),P(je),P(Ee))};static \u0275cmp=b({type:t,selectors:[["app-sucursal-dashboard"]],decls:86,vars:59,consts:[["drawer",""],[1,"dashboard-container"],["fixedInViewport","false",1,"sidenav",3,"mode","opened"],[1,"sidenav-header"],[1,"brand-sub"],[1,"nav-list"],["mat-list-item","","routerLinkActive","active-link",3,"routerLink"],["matListItemIcon",""],["matListItemTitle",""],[1,"nav-divider"],[1,"sidenav-footer"],[1,"user-summary"],[1,"user-avatar"],["mat-list-item","",1,"back-link",3,"routerLink"],["mat-button","","type","button",1,"logout-button",3,"click"],[1,"main-content"],[1,"mobile-toolbar"],[1,"content-wrapper"],["mat-icon-button","","type","button","aria-label","Abrir men\xFA","title","Abrir men\xFA",3,"click"],[3,"compact"]],template:function(e,n){e&1&&(r(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"div",3),A(4,"app-product-brand"),r(5,"span",4),s(6),o()(),r(7,"mat-nav-list",5)(8,"a",6)(9,"mat-icon",7),s(10,"dashboard"),o(),r(11,"span",8),s(12,"Inicio"),o()(),r(13,"a",6)(14,"mat-icon",7),s(15,"people"),o(),r(16,"span",8),s(17,"Clientes"),o()(),r(18,"a",6)(19,"mat-icon",7),s(20,"pets"),o(),r(21,"span",8),s(22,"Mascotas"),o()(),h(23,Bt,5,4,"a",6),h(24,Pt,5,4,"a",6),h(25,Rt,10,8),h(26,At,5,4,"a",6),r(27,"a",6)(28,"mat-icon",7),s(29,"event"),o(),r(30,"span",8),s(31,"Citas"),o()(),r(32,"a",6)(33,"mat-icon",7),s(34,"forum"),o(),r(35,"span",8),s(36,"Conversaciones"),o()(),r(37,"a",6)(38,"mat-icon",7),s(39,"payments"),o(),r(40,"span",8),s(41,"N\xF3mina"),o()(),r(42,"a",6)(43,"mat-icon",7),s(44,"inventory"),o(),r(45,"span",8),s(46,"Inventario"),o()(),r(47,"a",6)(48,"mat-icon",7),s(49,"point_of_sale"),o(),r(50,"span",8),s(51,"Ventas"),o()(),r(52,"a",6)(53,"mat-icon",7),s(54,"shopping_cart"),o(),r(55,"span",8),s(56,"Pedidos"),o()(),A(57,"div",9),r(58,"a",6)(59,"mat-icon",7),s(60,"settings"),o(),r(61,"span",8),s(62,"Configuraci\xF3n"),o()(),h(63,Ot,5,4,"a",6),o(),r(64,"div",10)(65,"div",11)(66,"div",12),s(67),o(),r(68,"div")(69,"strong"),s(70),o(),r(71,"span"),s(72),o()()(),r(73,"a",13)(74,"mat-icon",7),s(75,"arrow_back"),o(),r(76,"span",8),s(77,"Volver a sucursales"),o()(),r(78,"button",14),S("click",function(){return n.logout()}),r(79,"mat-icon"),s(80,"logout"),o(),s(81," Cerrar sesi\xF3n "),o()()(),r(82,"mat-sidenav-content",15),h(83,jt,5,1,"div",16),r(84,"div",17),A(85,"router-outlet"),o()()()),e&2&&(c(),l("mode",n.isMobile?"over":"side")("opened",n.sidenavOpened),c(5),j(n.business.grooming?"Panel de est\xE9tica":"Panel de sucursal"),c(2),l("routerLink",m(23,ft,n.veterinariaId,n.sucursalId)),c(5),l("routerLink",m(26,_t,n.veterinariaId,n.sucursalId)),c(5),l("routerLink",m(29,vt,n.veterinariaId,n.sucursalId)),c(5),f(V(32,Ye).includes(n.userRole)?23:-1),c(),f(n.business.medical&&V(33,Ye).includes(n.userRole)?24:-1),c(),f(V(34,et).includes(n.userRole)?25:-1),c(),f(V(35,et).includes(n.userRole)?26:-1),c(),l("routerLink",m(36,gt,n.veterinariaId,n.sucursalId)),c(5),l("routerLink",m(39,bt,n.veterinariaId,n.sucursalId)),c(5),l("routerLink",m(42,wt,n.veterinariaId,n.sucursalId)),c(5),l("routerLink",m(45,Ct,n.veterinariaId,n.sucursalId)),c(5),l("routerLink",m(48,yt,n.veterinariaId,n.sucursalId)),c(5),l("routerLink",m(51,xt,n.veterinariaId,n.sucursalId)),c(6),l("routerLink",m(54,kt,n.veterinariaId,n.sucursalId)),c(5),f(n.canManagePlan?63:-1),c(4),j(n.userName.charAt(0).toUpperCase()),c(3),j(n.userName),c(2),j(n.userRole),c(),l("routerLink",Ce(57,Mt,n.veterinariaId)),c(10),f(n.isMobile?83:-1))},dependencies:[He,Se,xe,Me,De,Xe,le,$e,U,Je,Ke,qe,Ue,Ze,Qe,Ne,Le,ze,Ve],styles:[".dashboard-container[_ngcontent-%COMP%]{height:100vh;background:#edf4fb}.sidenav[_ngcontent-%COMP%]{width:260px;background:linear-gradient(180deg,#0b2d55,#104879 56%,#12608d)!important;border:none!important;border-radius:0!important;display:flex;flex-direction:column;overflow:hidden}.sidenav-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:10px;padding:20px;border-bottom:1px solid rgba(255,255,255,.12)}.brand-sub[_ngcontent-%COMP%]{font-size:12px;color:#fff9;font-weight:400}.nav-list[_ngcontent-%COMP%]{flex:1;padding-top:12px;background:transparent!important}  .sidenav .mat-mdc-list-item{margin:2px 12px;border-radius:10px;height:48px!important;color:#ffffffbf!important;transition:background-color .18s ease,color .18s ease}  .sidenav .mat-mdc-list-item:hover{background-color:#7ed3ff24!important;color:#fff!important}  .sidenav .mat-mdc-list-item .mat-icon{color:#fff9;margin-right:14px}  .sidenav .active-link{background-color:#7ed3ff38!important;box-shadow:inset 3px 0 #8ed8ff;color:#fff!important;font-weight:600}  .sidenav .active-link .mat-icon{color:#fff}  .sidenav .mat-mdc-list-item .mdc-list-item__primary-text{font-size:14px;font-weight:500}.nav-divider[_ngcontent-%COMP%]{height:1px;background:#ffffff1f;margin:12px 20px}.sidenav-footer[_ngcontent-%COMP%]{padding:12px 12px 16px;border-top:1px solid rgba(255,255,255,.12)}.user-summary[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:8px;color:#fff}.user-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{min-width:0;display:flex;flex-direction:column}.user-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.86rem}.user-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ffffff94;font-size:.72rem;text-transform:capitalize}.user-avatar[_ngcontent-%COMP%]{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;flex:0 0 auto;background:#8ed8ff38;font-weight:700}.logout-button[_ngcontent-%COMP%]{width:100%;justify-content:flex-start;color:#ffffffbf!important}.mobile-toolbar[_ngcontent-%COMP%]{height:82px;display:flex;align-items:center;gap:10px;padding:0 12px;color:#0b2d55;background:#fff;border-bottom:1px solid #dbe7f2}  .sidenav-footer .mat-mdc-list-item{margin:8px 12px;border-radius:10px;color:#fff9!important}.main-content[_ngcontent-%COMP%]{background:linear-gradient(135deg,#edf4fb,#f8fbff)!important;border-radius:0!important;padding:0!important}.content-wrapper[_ngcontent-%COMP%]{padding:28px;min-height:calc(100vh - 48px)}@media(max-width:760px){.sidenav[_ngcontent-%COMP%]{width:min(280px,86vw)}.content-wrapper[_ngcontent-%COMP%]{padding:16px}}"]})};var kn=[{path:"",component:K,children:[{path:"recepcion",canActivate:[y],data:{roles:["superadmin","admin","veterinario","asistente","recepcionista"]},loadComponent:()=>import("./chunk-6ECNFTPR.js").then(t=>t.RecepcionComponent)},{path:"cartera",canActivate:[y],data:{roles:["superadmin","admin","recepcionista"]},loadComponent:()=>import("./chunk-OGA5465N.js").then(t=>t.CarteraComponent)},{path:"hospitalizaciones",canActivate:[y],data:{roles:["superadmin","admin","veterinario","asistente","recepcionista"]},loadComponent:()=>import("./chunk-VVYW5DMH.js").then(t=>t.HospitalizacionesComponent)},{path:"punto-venta",redirectTo:"caja",pathMatch:"full"},{path:"caja",canActivate:[y],data:{roles:["superadmin","admin","recepcionista"]},loadComponent:()=>import("./chunk-C2BTS6GL.js").then(t=>t.CajaComponent)},{path:"tags",canActivate:[y],data:{roles:["superadmin","admin","recepcionista"]},loadComponent:()=>import("./chunk-EBR24SU3.js").then(t=>t.TagsComponent)},{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-RWM54P2V.js").then(t=>t.DashboardHomeComponent)},{path:"clientes",loadComponent:()=>import("./chunk-VQNYFHPU.js").then(t=>t.ClientesComponent)},{path:"clientes/:clienteId/detalle",loadComponent:()=>import("./chunk-QMWSVIUV.js").then(t=>t.ClienteDetalleComponent)},{path:"mascotas",loadComponent:()=>import("./chunk-LDU34ELH.js").then(t=>t.MascotasComponent)},{path:"mascotas/:mascotaId/detalle",loadComponent:()=>import("./chunk-NYVN22TB.js").then(t=>t.MascotaDetalleComponent)},{path:"citas",loadComponent:()=>import("./chunk-IRTJBENE.js").then(t=>t.CitasComponent)},{path:"conversaciones",loadComponent:()=>import("./chunk-EOUZB67P.js").then(t=>t.BranchConversationsComponent)},{path:"nomina",loadComponent:()=>import("./chunk-THCZE3IQ.js").then(t=>t.NominaComponent)},{path:"nomina/:nominaId/detalle",loadComponent:()=>import("./chunk-557FDP4Q.js").then(t=>t.DetalleNominaComponent)},{path:"inventario/:productoId/kardex",loadComponent:()=>import("./chunk-DSNKQJ6U.js").then(t=>t.KardexComponent)},{path:"inventario",loadComponent:()=>import("./chunk-WCP5RSYP.js").then(t=>t.InventarioComponent)},{path:"ventas",canActivate:[y],data:{roles:["superadmin","admin","recepcionista"]},loadComponent:()=>import("./chunk-PDKAJC55.js").then(t=>t.VentasComponent)},{path:"venta/:ventaId/detalle",canActivate:[y],data:{roles:["superadmin","admin","recepcionista"]},loadComponent:()=>import("./chunk-EUTO2JBW.js").then(t=>t.DetalleVentaComponent)},{path:"pedidos",loadComponent:()=>import("./chunk-2SVDUBU7.js").then(t=>t.PedidosComponent)},{path:"pedidos/:pedidoId/detalle",loadComponent:()=>import("./chunk-5H6FI5U7.js").then(t=>t.DetallePedidoComponent)},{path:"mi-plan",loadComponent:()=>import("./chunk-PUTRCWX4.js").then(t=>t.SubscriptionComponent)},{path:"aliados/:aliadoId/servicios",loadComponent:()=>import("./chunk-R2FWESRH.js").then(t=>t.ServiciosAliadoComponent)},{path:"configuracion",loadComponent:()=>import("./chunk-4ORJDTIW.js").then(t=>t.ConfiguracionComponent),children:[{path:"usuarios",loadComponent:()=>import("./chunk-ANWB3IX2.js").then(t=>t.UsuariosComponent)},{path:"empleados",loadComponent:()=>import("./chunk-KWIZICWL.js").then(t=>t.EmpleadosComponent)},{path:"aliados",loadComponent:()=>import("./chunk-NIP3WKCU.js").then(t=>t.AliadosComponent)},{path:"tratamientos",redirectTo:"",pathMatch:"full"},{path:"enfermedades",redirectTo:"",pathMatch:"full"},{path:"servicios",loadComponent:()=>import("./chunk-SWG47OKF.js").then(t=>t.ServiciosComponent)},{path:"proveedores",loadComponent:()=>import("./chunk-XY35QBL5.js").then(t=>t.ProveedoresComponent)},{path:"productos",loadComponent:()=>import("./chunk-GU5PPOO7.js").then(t=>t.ProductosComponent)},{path:"vacunas",loadComponent:()=>import("./chunk-HNQ5MDAM.js").then(t=>t.VacunasComponent)},{path:"desparasitantes",loadComponent:()=>import("./chunk-FODXTANT.js").then(t=>t.DesparasitantesComponent)}]}]}];export{kn as sucursalDashboardRoutes};
