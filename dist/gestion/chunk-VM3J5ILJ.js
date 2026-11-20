import{a as Ue,b as qe,c as Ke,d as Je,e as $e}from"./chunk-ITUL36IA.js";import{a as p,b as Xe,c as U}from"./chunk-TMXI3HYR.js";import"./chunk-33223N3R.js";import{a as l,b as Ze}from"./chunk-LBHJ2YMN.js";import{a as je}from"./chunk-MRQ4P2OL.js";import"./chunk-LHN7PELW.js";import{e as Ge,f as T,g as He,i as de}from"./chunk-HGQV7UII.js";import{a as Qe,b as We}from"./chunk-XGYFPF6V.js";import{a as Ve}from"./chunk-6NRJH3TR.js";import{K as D,Q as Re,R as Oe,T as ze,U as Le,W as Ne,a as Z,d as Ie,g as Fe,j as se,m as Te,t as Ae,u as Pe,y as Be}from"./chunk-P46WO673.js";import"./chunk-T37KGJHM.js";import"./chunk-NU2QRRA4.js";import{$ as P,$a as j,A,Aa as we,Ba as R,D as he,E as fe,F as Y,Fa as C,Ga as Ce,Hc as xe,Ib as F,Ic as ke,Jb as z,Jc as Me,Ka as O,Kc as Se,Lb as u,Lc as De,M as ee,O as w,Pc as Ee,Qa as ie,Sa as f,Ta as _,U as _e,V as te,X as c,Ya as m,Za as r,_a as o,aa as B,bc as H,da as ne,ea as ve,ga as L,gb as V,h as y,ha as N,ib as E,ja as ge,kb as v,lb as k,ma as Q,mb as b,na as W,nb as re,oa as be,ob as oe,pb as M,qb as S,u as X,ub as ye,va as d,vb as G,wb as x,xa as ae,yb as s,z as ue,zb as I}from"./chunk-PLKTGQJT.js";var J=["*"],rt=["content"],ot=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],st=["mat-drawer","mat-drawer-content","*"];function dt(t,i){if(t&1){let e=V();r(0,"div",1),E("click",function(){P(e);let a=v();return B(a._onBackdropClicked())}),o()}if(t&2){let e=v();x("mat-drawer-shown",e._isShowingBackdrop())}}function ct(t,i){t&1&&(r(0,"mat-drawer-content"),b(1,2),o())}var lt=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],mt=["mat-sidenav","mat-sidenav-content","*"];function pt(t,i){if(t&1){let e=V();r(0,"div",1),E("click",function(){P(e);let a=v();return B(a._onBackdropClicked())}),o()}if(t&2){let e=v();x("mat-drawer-shown",e._isShowingBackdrop())}}function ut(t,i){t&1&&(r(0,"mat-sidenav-content"),b(1,2),o())}var ht=`.mat-drawer-container {
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
`;var ft=new te("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),me=new te("MAT_DRAWER_CONTAINER"),q=(()=>{class t extends T{_platform=c(Z);_changeDetectorRef=c(H);_container=c(le);constructor(){let e=c(W),n=c(Ge),a=c(N);super(e,n,a)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:n}=this._container;return e!=null&&e.mode!=="over"&&e.opened||n!=null&&n.mode!=="over"&&n.opened}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=C({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(n,a){n&2&&(G("margin-left",a._container._contentMargins.left,"px")("margin-right",a._container._contentMargins.right,"px"),x("mat-drawer-content-hidden",a._shouldBeHidden()))},features:[F([{provide:T,useExisting:t}]),O],ngContentSelectors:J,decls:1,vars:0,template:function(n,a){n&1&&(k(),b(0))},encapsulation:2,changeDetection:0})}return t})(),ce=(()=>{class t{_elementRef=c(W);_focusTrapFactory=c(Pe);_focusMonitor=c(Te);_platform=c(Z);_ngZone=c(N);_renderer=c(we);_interactivityChecker=c(Ae);_doc=c(ve);_container=c(me,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=D(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=D(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(D(e))}_opened=ge(!1);_openedVia=null;_animationStarted=new y;_animationEnd=new y;openedChange=new L(!0);_openedStream=this.openedChange.pipe(A(e=>e),X(()=>{}));openedStart=this._animationStarted.pipe(A(()=>this.opened),Y(void 0));_closedStream=this.openedChange.pipe(A(e=>!e),X(()=>{}));closedStart=this._animationStarted.pipe(A(()=>!this.opened),Y(void 0));_destroyed=new y;onPositionChanged=new L;_content;_modeChanged=new y;_injector=c(ne);_changeDetectorRef=c(H);constructor(){this.openedChange.pipe(w(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,n=this._elementRef.nativeElement;return[e.listen(n,"keydown",a=>{a.keyCode===27&&!this.disableClose&&!Be(a)&&this._ngZone.run(()=>{this.close(),a.stopPropagation(),a.preventDefault()})}),e.listen(n,"transitionend",this._handleTransitionEvent),e.listen(n,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{h(),g(),e.removeAttribute("tabindex")},h=this._renderer.listen(e,"blur",a),g=this._renderer.listen(e,"mousedown",a)})),e.focus(n)}_focusByCssSelector(e,n){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,n)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ae(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,n){e&&n&&(this._openedVia=n);let a=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),a}_setOpen(e,n,a){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&n&&this._restoreFocus(a),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(h=>{this.openedChange.pipe(fe(1)).subscribe(g=>h(g?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,a=n.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),a.insertBefore(this._anchor,n)),a.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}_handleTransitionEvent=e=>{let n=this._elementRef.nativeElement;e.target===n&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=C({type:t,selectors:[["mat-drawer"]],viewQuery:function(n,a){if(n&1&&oe(rt,5),n&2){let h;M(h=S())&&(a._content=h.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(n,a){n&2&&(ie("align",null)("tabIndex",a.mode!=="side"?"-1":null),G("visibility",!a._container&&!a.opened?"hidden":null),x("mat-drawer-end",a.position==="end")("mat-drawer-over",a.mode==="over")("mat-drawer-push",a.mode==="push")("mat-drawer-side",a.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:J,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,a){n&1&&(k(),r(0,"div",1,0),b(2),o())},dependencies:[T],encapsulation:2,changeDetection:0})}return t})(),le=(()=>{class t{_dir=c(Re,{optional:!0});_element=c(W);_ngZone=c(N);_changeDetectorRef=c(H);_animationDisabled=Fe();_transitionsEnabled=!1;_allDrawers;_drawers=new be;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=D(e)}_autosize=c(ft);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:D(e)}_backdropOverride=null;backdropClick=new L;_start=null;_end=null;_left=null;_right=null;_destroyed=new y;_doCheckSubject=new y;_contentMargins={left:null,right:null};_contentMarginChanges=new y;get scrollable(){return this._userContent||this._content}_injector=c(ne);constructor(){let e=c(Z),n=c(He);this._dir?.change.pipe(w(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),n.change().pipe(w(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ee(this._allDrawers),w(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ee(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(he(10),w(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,n=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let a=this._left._getWidth();e+=a,n-=a}}if(this._right&&this._right.opened){if(this._right.mode=="side")n+=this._right._getWidth();else if(this._right.mode=="push"){let a=this._right._getWidth();n+=a,e-=a}}e=e||null,n=n||null,(e!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(w(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(w(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(w(this._drawers.changes)).subscribe(()=>{ae({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(w(ue(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let n=this._element.nativeElement.classList,a="mat-drawer-container-has-open";e?n.add(a):n.remove(a)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=C({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(n,a,h){if(n&1&&re(h,q,5)(h,ce,5),n&2){let g;M(g=S())&&(a._content=g.first),M(g=S())&&(a._allDrawers=g)}},viewQuery:function(n,a){if(n&1&&oe(q,5),n&2){let h;M(h=S())&&(a._userContent=h.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(n,a){n&2&&x("mat-drawer-container-explicit-backdrop",a._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[F([{provide:me,useExisting:t}])],ngContentSelectors:st,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,a){n&1&&(k(ot),f(0,dt,1,2,"div",0),b(1),b(2,1),f(3,ct,2,0,"mat-drawer-content")),n&2&&(_(a.hasBackdrop?0:-1),d(3),_(a._content?-1:3))},dependencies:[q],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return t})(),K=(()=>{class t extends q{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Q(t)))(a||t)}})();static \u0275cmp=C({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[F([{provide:T,useExisting:t}]),O],ngContentSelectors:J,decls:1,vars:0,template:function(n,a){n&1&&(k(),b(0))},encapsulation:2,changeDetection:0})}return t})(),pe=(()=>{class t extends ce{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=D(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=se(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=se(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(a){return(e||(e=Q(t)))(a||t)}})();static \u0275cmp=C({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(n,a){n&2&&(ie("tabIndex",a.mode!=="side"?"-1":null)("align",null),G("top",a.fixedInViewport?a.fixedTopGap:null,"px")("bottom",a.fixedInViewport?a.fixedBottomGap:null,"px"),x("mat-drawer-end",a.position==="end")("mat-drawer-over",a.mode==="over")("mat-drawer-push",a.mode==="push")("mat-drawer-side",a.mode==="side")("mat-sidenav-fixed",a.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[F([{provide:ce,useExisting:t}]),O],ngContentSelectors:J,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,a){n&1&&(k(),r(0,"div",1,0),b(2),o())},dependencies:[T],encapsulation:2,changeDetection:0})}return t})(),Ye=(()=>{class t extends le{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(a){return(e||(e=Q(t)))(a||t)}})();static \u0275cmp=C({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(n,a,h){if(n&1&&re(h,K,5)(h,pe,5),n&2){let g;M(g=S())&&(a._content=g.first),M(g=S())&&(a._allDrawers=g)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(n,a){n&2&&x("mat-drawer-container-explicit-backdrop",a._backdropOverride)},exportAs:["matSidenavContainer"],features:[F([{provide:me,useExisting:t},{provide:le,useExisting:t}]),O],ngContentSelectors:mt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,a){n&1&&(k(lt),f(0,pt,1,2,"div",0),b(1),b(2,1),f(3,ut,2,0,"mat-sidenav-content")),n&2&&(_(a.hasBackdrop?0:-1),d(3),_(a._content?-1:3))},dependencies:[K],styles:[ht],encapsulation:2,changeDetection:0})}return t})(),et=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=Ce({type:t});static \u0275inj=_e({imports:[de,Oe,de]})}return t})();var vt=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","home"],gt=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","clientes"],bt=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","mascotas"],tt=()=>["superadmin","admin","veterinario","asistente","recepcionista"],nt=()=>["superadmin","admin","recepcionista"],wt=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","citas"],Ct=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","conversaciones"],yt=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","inventario"],xt=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","pedidos"],kt=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","recepcion"],Mt=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","hospitalizaciones"],St=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","caja"],Dt=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","cartera"],Et=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","tags"],It=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","nomina"],Ft=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","ventas"],Tt=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","configuracion"],At=(t,i)=>["/veterinaria",t,"sucursal",i,"dashboard","mi-plan"];function Pt(t,i){if(t&1&&(r(0,"a",6)(1,"mat-icon",7),s(2,"how_to_reg"),o(),r(3,"span",8),s(4,"Recepci\xF3n y atenci\xF3n"),o()()),t&2){let e=v();m("routerLink",u(1,kt,e.veterinariaId,e.sucursalId))}}function Bt(t,i){if(t&1&&(r(0,"a",6)(1,"mat-icon",7),s(2,"local_hospital"),o(),r(3,"span",8),s(4,"Hospitalizaciones"),o()()),t&2){let e=v();m("routerLink",u(1,Mt,e.veterinariaId,e.sucursalId))}}function Rt(t,i){if(t&1&&(r(0,"a",6)(1,"mat-icon",7),s(2,"point_of_sale"),o(),r(3,"span",8),s(4,"Caja y ventas"),o()(),r(5,"a",6)(6,"mat-icon",7),s(7,"account_balance_wallet"),o(),r(8,"span",8),s(9,"Cartera"),o()()),t&2){let e=v();m("routerLink",u(2,St,e.veterinariaId,e.sucursalId)),d(5),m("routerLink",u(5,Dt,e.veterinariaId,e.sucursalId))}}function Ot(t,i){if(t&1&&(r(0,"a",6)(1,"mat-icon",7),s(2,"nfc"),o(),r(3,"span",8),s(4,"Tags NFC"),o()()),t&2){let e=v();m("routerLink",u(1,Et,e.veterinariaId,e.sucursalId))}}function jt(t,i){if(t&1&&(r(0,"a",6)(1,"mat-icon",7),s(2,"payments"),o(),r(3,"span",8),s(4,"N\xF3mina"),o()()),t&2){let e=v();m("routerLink",u(1,It,e.veterinariaId,e.sucursalId))}}function Vt(t,i){if(t&1&&(r(0,"a",6)(1,"mat-icon",7),s(2,"point_of_sale"),o(),r(3,"span",8),s(4,"Ventas"),o()()),t&2){let e=v();m("routerLink",u(1,Ft,e.veterinariaId,e.sucursalId))}}function zt(t,i){if(t&1&&(r(0,"a",6)(1,"mat-icon",7),s(2,"settings"),o(),r(3,"span",8),s(4,"Configuraci\xF3n"),o()()),t&2){let e=v();m("routerLink",u(1,Tt,e.veterinariaId,e.sucursalId))}}function Lt(t,i){if(t&1&&(r(0,"a",6)(1,"mat-icon",7),s(2,"workspace_premium"),o(),r(3,"span",8),s(4,"Mi plan"),o()()),t&2){let e=v();m("routerLink",u(1,At,e.veterinariaId,e.sucursalId))}}function Nt(t,i){if(t&1){let e=V();r(0,"div",16)(1,"button",18),E("click",function(){P(e),v();let a=ye(2);return B(a.toggle())}),r(2,"mat-icon"),s(3,"menu"),o()(),j(4,"app-product-brand",19),o()}t&2&&(d(4),m("compact",!0))}var $=class t{constructor(i,e,n,a){this.route=i;this.router=e;this.authService=n;this.breakpointObserver=a}route;router;authService;breakpointObserver;business=c(je);veterinariaId;sucursalId;canManagePlan=!1;isMobile=!1;sidenavOpened=!0;userName="";userRole="";get canUseCash(){return U(p.cash,this.userRole)}get canConfigure(){return U(p.inventoryManagement,this.userRole)}get workspaceLink(){return this.canManagePlan?["/veterinaria",this.veterinariaId,"admin"]:["/dashboard"]}ngOnInit(){this.veterinariaId=Number(this.route.snapshot.paramMap.get("veterinariaId")),this.sucursalId=Number(this.route.snapshot.paramMap.get("sucursalId"));try{let i=JSON.parse(localStorage.getItem("usuario")||"{}");this.userRole=Xe(),this.canManagePlan=U(p.administration,this.userRole),this.userName=i.nombre||"Usuario"}catch(i){this.canManagePlan=!1}this.breakpointObserver.observe("(max-width: 760px)").subscribe(({matches:i})=>{this.isMobile=i,this.sidenavOpened=!i})}logout(){this.authService.logout(),this.router.navigate(["/auth"])}static \u0275fac=function(e){return new(e||t)(R(xe),R(Me),R(Ve),R(Ie))};static \u0275cmp=C({type:t,selectors:[["app-sucursal-dashboard"]],decls:74,vars:49,consts:[["drawer",""],[1,"dashboard-container"],["fixedInViewport","false",1,"sidenav",3,"mode","opened"],[1,"sidenav-header"],[1,"brand-sub"],[1,"nav-list"],["mat-list-item","","routerLinkActive","active-link",3,"routerLink"],["matListItemIcon",""],["matListItemTitle",""],[1,"nav-divider"],[1,"sidenav-footer"],[1,"user-summary"],[1,"user-avatar"],["mat-list-item","",1,"back-link",3,"routerLink"],["mat-button","","type","button",1,"logout-button",3,"click"],[1,"main-content"],[1,"mobile-toolbar"],[1,"content-wrapper"],["mat-icon-button","","type","button","aria-label","Abrir men\xFA","title","Abrir men\xFA",3,"click"],[3,"compact"]],template:function(e,n){e&1&&(r(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"div",3),j(4,"app-product-brand"),r(5,"span",4),s(6),o()(),r(7,"mat-nav-list",5)(8,"a",6)(9,"mat-icon",7),s(10,"dashboard"),o(),r(11,"span",8),s(12,"Inicio"),o()(),r(13,"a",6)(14,"mat-icon",7),s(15,"people"),o(),r(16,"span",8),s(17,"Clientes"),o()(),r(18,"a",6)(19,"mat-icon",7),s(20,"pets"),o(),r(21,"span",8),s(22,"Mascotas"),o()(),f(23,Pt,5,4,"a",6),f(24,Bt,5,4,"a",6),f(25,Rt,10,8),f(26,Ot,5,4,"a",6),r(27,"a",6)(28,"mat-icon",7),s(29,"event"),o(),r(30,"span",8),s(31,"Citas"),o()(),r(32,"a",6)(33,"mat-icon",7),s(34,"forum"),o(),r(35,"span",8),s(36,"Conversaciones"),o()(),f(37,jt,5,4,"a",6),r(38,"a",6)(39,"mat-icon",7),s(40,"inventory"),o(),r(41,"span",8),s(42,"Inventario"),o()(),f(43,Vt,5,4,"a",6),r(44,"a",6)(45,"mat-icon",7),s(46,"shopping_cart"),o(),r(47,"span",8),s(48,"Pedidos"),o()(),j(49,"div",9),f(50,zt,5,4,"a",6),f(51,Lt,5,4,"a",6),o(),r(52,"div",10)(53,"div",11)(54,"div",12),s(55),o(),r(56,"div")(57,"strong"),s(58),o(),r(59,"span"),s(60),o()()(),r(61,"a",13)(62,"mat-icon",7),s(63,"arrow_back"),o(),r(64,"span",8),s(65),o()(),r(66,"button",14),E("click",function(){return n.logout()}),r(67,"mat-icon"),s(68,"logout"),o(),s(69," Cerrar sesi\xF3n "),o()()(),r(70,"mat-sidenav-content",15),f(71,Nt,5,1,"div",16),r(72,"div",17),j(73,"router-outlet"),o()()()),e&2&&(d(),m("mode",n.isMobile?"over":"side")("opened",n.sidenavOpened),d(5),I(n.business.grooming?"Panel de est\xE9tica":"Panel de sucursal"),d(2),m("routerLink",u(24,vt,n.veterinariaId,n.sucursalId)),d(5),m("routerLink",u(27,gt,n.veterinariaId,n.sucursalId)),d(5),m("routerLink",u(30,bt,n.veterinariaId,n.sucursalId)),d(5),_(z(33,tt).includes(n.userRole)?23:-1),d(),_(n.business.medical&&z(34,tt).includes(n.userRole)?24:-1),d(),_(z(35,nt).includes(n.userRole)?25:-1),d(),_(z(36,nt).includes(n.userRole)?26:-1),d(),m("routerLink",u(37,wt,n.veterinariaId,n.sucursalId)),d(5),m("routerLink",u(40,Ct,n.veterinariaId,n.sucursalId)),d(5),_(n.canManagePlan?37:-1),d(),m("routerLink",u(43,yt,n.veterinariaId,n.sucursalId)),d(5),_(n.canUseCash?43:-1),d(),m("routerLink",u(46,xt,n.veterinariaId,n.sucursalId)),d(6),_(n.canConfigure?50:-1),d(),_(n.canManagePlan?51:-1),d(4),I(n.userName.charAt(0).toUpperCase()),d(3),I(n.userName),d(2),I(n.userRole),d(),m("routerLink",n.workspaceLink),d(4),I(n.canManagePlan?"Volver a sucursales":"Mi espacio de trabajo"),d(6),_(n.isMobile?71:-1))},dependencies:[Ze,Ee,ke,Se,De,et,pe,Ye,K,$e,Je,Ke,qe,Ue,We,Qe,Ne,Le,ze],styles:[".dashboard-container[_ngcontent-%COMP%]{height:100vh;background:#edf4fb}.sidenav[_ngcontent-%COMP%]{width:260px;background:linear-gradient(180deg,#0b2d55,#104879 56%,#12608d)!important;border:none!important;border-radius:0!important;display:flex;flex-direction:column;overflow:hidden}.sidenav-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:10px;padding:20px;border-bottom:1px solid rgba(255,255,255,.12)}.brand-sub[_ngcontent-%COMP%]{font-size:12px;color:#fff9;font-weight:400}.nav-list[_ngcontent-%COMP%]{flex:1;padding-top:12px;background:transparent!important}  .sidenav .mat-mdc-list-item{margin:2px 12px;border-radius:10px;height:48px!important;color:#ffffffbf!important;transition:background-color .18s ease,color .18s ease}  .sidenav .mat-mdc-list-item:hover{background-color:#7ed3ff24!important;color:#fff!important}  .sidenav .mat-mdc-list-item .mat-icon{color:#fff9;margin-right:14px}  .sidenav .active-link{background-color:#7ed3ff38!important;box-shadow:inset 3px 0 #8ed8ff;color:#fff!important;font-weight:600}  .sidenav .active-link .mat-icon{color:#fff}  .sidenav .mat-mdc-list-item .mdc-list-item__primary-text{font-size:14px;font-weight:500}.nav-divider[_ngcontent-%COMP%]{height:1px;background:#ffffff1f;margin:12px 20px}.sidenav-footer[_ngcontent-%COMP%]{padding:12px 12px 16px;border-top:1px solid rgba(255,255,255,.12)}.user-summary[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:8px;color:#fff}.user-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{min-width:0;display:flex;flex-direction:column}.user-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.86rem}.user-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ffffff94;font-size:.72rem;text-transform:capitalize}.user-avatar[_ngcontent-%COMP%]{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;flex:0 0 auto;background:#8ed8ff38;font-weight:700}.logout-button[_ngcontent-%COMP%]{width:100%;justify-content:flex-start;color:#ffffffbf!important}.mobile-toolbar[_ngcontent-%COMP%]{height:82px;display:flex;align-items:center;gap:10px;padding:0 12px;color:#0b2d55;background:#fff;border-bottom:1px solid #dbe7f2}  .sidenav-footer .mat-mdc-list-item{margin:8px 12px;border-radius:10px;color:#fff9!important}.main-content[_ngcontent-%COMP%]{background:linear-gradient(135deg,#edf4fb,#f8fbff)!important;border-radius:0!important;padding:0!important}.content-wrapper[_ngcontent-%COMP%]{padding:28px;min-height:calc(100vh - 48px)}@media(max-width:760px){.sidenav[_ngcontent-%COMP%]{width:min(280px,86vw)}.content-wrapper[_ngcontent-%COMP%]{padding:16px}}"]})};var Fn=[{path:"",component:$,children:[{path:"recepcion",canActivate:[l],data:{roles:["superadmin","admin","veterinario","asistente","recepcionista"]},loadComponent:()=>import("./chunk-D54IZL7X.js").then(t=>t.RecepcionComponent)},{path:"cartera",canActivate:[l],data:{roles:["superadmin","admin","recepcionista"]},loadComponent:()=>import("./chunk-OGA5465N.js").then(t=>t.CarteraComponent)},{path:"hospitalizaciones",canActivate:[l],data:{roles:["superadmin","admin","veterinario","asistente","recepcionista"]},loadComponent:()=>import("./chunk-XRFXYK4Z.js").then(t=>t.HospitalizacionesComponent)},{path:"punto-venta",redirectTo:"caja",pathMatch:"full"},{path:"caja",canActivate:[l],data:{roles:["superadmin","admin","recepcionista"]},loadComponent:()=>import("./chunk-C2BTS6GL.js").then(t=>t.CajaComponent)},{path:"tags",canActivate:[l],data:{roles:["superadmin","admin","recepcionista"]},loadComponent:()=>import("./chunk-IPOJSH75.js").then(t=>t.TagsComponent)},{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-PWB3H5PM.js").then(t=>t.DashboardHomeComponent)},{path:"clientes",loadComponent:()=>import("./chunk-TMQ5EYZL.js").then(t=>t.ClientesComponent)},{path:"clientes/:clienteId/detalle",loadComponent:()=>import("./chunk-6HDB3CKB.js").then(t=>t.ClienteDetalleComponent)},{path:"mascotas",loadComponent:()=>import("./chunk-VZRT6E2Z.js").then(t=>t.MascotasComponent)},{path:"mascotas/:mascotaId/detalle",loadComponent:()=>import("./chunk-NYVN22TB.js").then(t=>t.MascotaDetalleComponent)},{path:"citas",loadComponent:()=>import("./chunk-H7U7JUXP.js").then(t=>t.CitasComponent)},{path:"conversaciones",loadComponent:()=>import("./chunk-EOUZB67P.js").then(t=>t.BranchConversationsComponent)},{path:"nomina",canActivate:[l],data:{roles:p.administration},loadComponent:()=>import("./chunk-THCZE3IQ.js").then(t=>t.NominaComponent)},{path:"nomina/:nominaId/detalle",canActivate:[l],data:{roles:p.administration},loadComponent:()=>import("./chunk-557FDP4Q.js").then(t=>t.DetalleNominaComponent)},{path:"inventario/:productoId/kardex",loadComponent:()=>import("./chunk-DSNKQJ6U.js").then(t=>t.KardexComponent)},{path:"inventario",loadComponent:()=>import("./chunk-JSTJUAKS.js").then(t=>t.InventarioComponent)},{path:"ventas",canActivate:[l],data:{roles:["superadmin","admin","recepcionista"]},loadComponent:()=>import("./chunk-PDKAJC55.js").then(t=>t.VentasComponent)},{path:"venta/:ventaId/detalle",canActivate:[l],data:{roles:["superadmin","admin","recepcionista"]},loadComponent:()=>import("./chunk-EUTO2JBW.js").then(t=>t.DetalleVentaComponent)},{path:"pedidos",loadComponent:()=>import("./chunk-X6RH7GIY.js").then(t=>t.PedidosComponent)},{path:"pedidos/:pedidoId/detalle",loadComponent:()=>import("./chunk-KFPZCKVZ.js").then(t=>t.DetallePedidoComponent)},{path:"mi-plan",canActivate:[l],data:{roles:p.administration},loadComponent:()=>import("./chunk-UM3D5FY5.js").then(t=>t.SubscriptionComponent)},{path:"aliados/:aliadoId/servicios",canActivate:[l],data:{roles:p.administration},loadComponent:()=>import("./chunk-R2FWESRH.js").then(t=>t.ServiciosAliadoComponent)},{path:"configuracion",canActivate:[l],data:{roles:p.inventoryManagement},loadComponent:()=>import("./chunk-JM3VHQZR.js").then(t=>t.ConfiguracionComponent),children:[{path:"usuarios",canActivate:[l],data:{roles:p.administration},loadComponent:()=>import("./chunk-IZGEAVM2.js").then(t=>t.UsuariosComponent)},{path:"empleados",canActivate:[l],data:{roles:p.administration},loadComponent:()=>import("./chunk-KWIZICWL.js").then(t=>t.EmpleadosComponent)},{path:"aliados",canActivate:[l],data:{roles:p.administration},loadComponent:()=>import("./chunk-JFIA7ZFA.js").then(t=>t.AliadosComponent)},{path:"tratamientos",redirectTo:"",pathMatch:"full"},{path:"enfermedades",redirectTo:"",pathMatch:"full"},{path:"servicios",canActivate:[l],data:{roles:p.administration},loadComponent:()=>import("./chunk-SWG47OKF.js").then(t=>t.ServiciosComponent)},{path:"proveedores",canActivate:[l],data:{roles:p.inventoryManagement},loadComponent:()=>import("./chunk-XY35QBL5.js").then(t=>t.ProveedoresComponent)},{path:"productos",canActivate:[l],data:{roles:p.inventoryManagement},loadComponent:()=>import("./chunk-GU5PPOO7.js").then(t=>t.ProductosComponent)},{path:"vacunas",canActivate:[l],data:{roles:p.administration},loadComponent:()=>import("./chunk-HNQ5MDAM.js").then(t=>t.VacunasComponent)},{path:"desparasitantes",canActivate:[l],data:{roles:p.administration},loadComponent:()=>import("./chunk-FODXTANT.js").then(t=>t.DesparasitantesComponent)}]}]}];export{Fn as sucursalDashboardRoutes};
