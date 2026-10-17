import{a as tt}from"./chunk-O3UONVCF.js";import{a as Y}from"./chunk-KFKKY3TM.js";import{a as Q}from"./chunk-3T4OULXR.js";import{a as ie,b as ne}from"./chunk-PEBLCXD6.js";import{a as te,b as ee}from"./chunk-JREY62I5.js";import{a as Ht,b as Vt,c as Nt,d as jt,e as $t,f as Gt,g as Ut,h as Qt,i as Yt,j as qt,k as Zt,l as Kt,m as Wt}from"./chunk-E6OKACWN.js";import"./chunk-33223N3R.js";import{c as Jt,h as Xt}from"./chunk-GNEHRPBW.js";import{c as It}from"./chunk-6IYAQ34L.js";import"./chunk-LHN7PELW.js";import"./chunk-52FFTEJT.js";import"./chunk-HGQV7UII.js";import{c as Ot}from"./chunk-Y3LK6MOH.js";import{a as Rt,b as Ft}from"./chunk-XGYFPF6V.js";import{b as At,c as Bt}from"./chunk-EZZNJH3R.js";import{a as Et,e as Tt,h as $,i as kt}from"./chunk-FVPM35I6.js";import"./chunk-UDAIKRUW.js";import{A as wt,D as Pt,P as Dt,R as zt,T as G,U as Lt,W as U,g as xt,m as yt,o as Mt}from"./chunk-P46WO673.js";import"./chunk-KW2XS3RW.js";import"./chunk-T37KGJHM.js";import"./chunk-NU2QRRA4.js";import{$ as f,$a as h,Ab as P,Ba as w,Fa as I,Ga as V,Ha as st,Hc as bt,Jb as ht,Jc as vt,Kc as St,La as v,Lb as ft,Pa as lt,Pc as Ct,Qa as S,Sa as g,T as q,Ta as _,U as R,V as F,Va as dt,Wa as ct,X as u,Xa as mt,Ya as c,Za as o,_a as r,aa as b,ab as N,ba as M,bb as O,bc as j,ca as nt,cb as pt,db as x,dc as C,eb as y,ec as T,ga as H,gb as z,h as B,ib as m,j as L,ja as at,kb as p,la as ot,lb as ut,mb as K,na as rt,ob as gt,pb as W,qb as J,ta as Z,ub as _t,va as l,wb as X,yb as s,z as it,zb as E}from"./chunk-PLKTGQJT.js";function ce(e,a){if(e&1&&(o(0,"mat-option",17),s(1),r()),e&2){let t=a.$implicit;c("value",t),l(),P(" ",t," ")}}function me(e,a){if(e&1){let t=z();o(0,"mat-form-field",14)(1,"mat-select",16,0),m("selectionChange",function(i){f(t);let d=p(2);return b(d._changePageSize(i.value))}),ct(3,ce,2,2,"mat-option",17,dt),r(),o(5,"div",18),m("click",function(){f(t);let i=_t(2);return b(i.open())}),r()()}if(e&2){let t=p(2);c("appearance",t._formFieldAppearance)("color",t.color),l(),c("value",t.pageSize)("disabled",t.disabled),lt("aria-labelledby",t._pageSizeLabelId),c("panelClass",t.selectConfig.panelClass||"")("disableOptionCentering",t.selectConfig.disableOptionCentering),l(2),mt(t._displayedPageSizeOptions)}}function pe(e,a){if(e&1&&(o(0,"div",15),s(1),r()),e&2){let t=p(2);l(),E(t.pageSize)}}function ue(e,a){if(e&1&&(o(0,"div",3)(1,"div",13),s(2),r(),g(3,me,6,7,"mat-form-field",14),g(4,pe,2,1,"div",15),r()),e&2){let t=p();l(),S("id",t._pageSizeLabelId),l(),P(" ",t._intl.itemsPerPageLabel," "),l(),_(t._displayedPageSizeOptions.length>1?3:-1),l(),_(t._displayedPageSizeOptions.length<=1?4:-1)}}function ge(e,a){if(e&1){let t=z();o(0,"button",19),m("click",function(){f(t);let i=p();return b(i._buttonClicked(0,i._previousButtonsDisabled()))}),M(),o(1,"svg",8),h(2,"path",20),r()()}if(e&2){let t=p();c("matTooltip",t._intl.firstPageLabel)("matTooltipDisabled",t._previousButtonsDisabled())("disabled",t._previousButtonsDisabled())("tabindex",t._previousButtonsDisabled()?-1:null),S("aria-label",t._intl.firstPageLabel)}}function _e(e,a){if(e&1){let t=z();o(0,"button",21),m("click",function(){f(t);let i=p();return b(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),M(),o(1,"svg",8),h(2,"path",22),r()()}if(e&2){let t=p();c("matTooltip",t._intl.lastPageLabel)("matTooltipDisabled",t._nextButtonsDisabled())("disabled",t._nextButtonsDisabled())("tabindex",t._nextButtonsDisabled()?-1:null),S("aria-label",t._intl.lastPageLabel)}}var he=(()=>{class e{changes=new B;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(t,n,i)=>{if(i==0||n==0)return`0 of ${i}`;i=Math.max(i,0);let d=t*n,D=d<i?Math.min(d+n,i):d+n;return`${d+1} \u2013 ${D} of ${i}`};static \u0275fac=function(n){return new(n||e)};static \u0275prov=q({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),fe=50;var be=new F("MAT_PAGINATOR_DEFAULT_OPTIONS"),k=(()=>{class e{_intl=u(he);_changeDetectorRef=u(j);_formFieldAppearance;_pageSizeLabelId=u(wt).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new L(1);color;get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(n=>T(n,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new H;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let t=this._intl,n=u(be,{optional:!0});if(this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),n){let{pageSize:i,pageSizeOptions:d,hidePageSize:D,showFirstLastButtons:et}=n;i!=null&&(this._pageSize=i),d!=null&&(this._pageSizeOptions=d),D!=null&&(this.hidePageSize=D),et!=null&&(this.showFirstLastButtons=et)}this._formFieldAppearance=n?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let n=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(n/t)||0,this.pageSize=t,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:fe),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,n)=>t-n),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(t){let n=this.pageIndex;t!==n&&(this.pageIndex=t,this._emitPageEvent(n))}_buttonClicked(t,n){n||this._navigate(t)}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=I({type:e,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",T],length:[2,"length","length",T],pageSize:[2,"pageSize","pageSize",T],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",C],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",C],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",C]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(n,i){n&1&&(o(0,"div",1)(1,"div",2),g(2,ue,5,4,"div",3),o(3,"div",4)(4,"div",5),s(5),r(),g(6,ge,3,5,"button",6),o(7,"button",7),m("click",function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),M(),o(8,"svg",8),h(9,"path",9),r()(),nt(),o(10,"button",10),m("click",function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),M(),o(11,"svg",8),h(12,"path",11),r()(),g(13,_e,3,5,"button",12),r()()()),n&2&&(l(2),_(i.hidePageSize?-1:2),l(3),P(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),l(),_(i.showFirstLastButtons?6:-1),l(),c("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("disabled",i._previousButtonsDisabled())("tabindex",i._previousButtonsDisabled()?-1:null),S("aria-label",i._intl.previousPageLabel),l(3),c("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("disabled",i._nextButtonsDisabled())("tabindex",i._nextButtonsDisabled()?-1:null),S("aria-label",i._intl.nextPageLabel),l(3),_(i.showFirstLastButtons?13:-1))},dependencies:[$,te,It,G,Q],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return e})(),oe=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=V({type:e});static \u0275inj=R({imports:[U,ee,Y,k]})}return e})();var Se=["mat-sort-header",""],Ce=["*",[["","matSortHeaderIcon",""]]],xe=["*","[matSortHeaderIcon]"];function ye(e,a){e&1&&(M(),N(0,"svg",3),pt(1,"path",4),O())}function Me(e,a){e&1&&(N(0,"div",2),K(1,1,null,ye,2,0),O())}var re=new F("MAT_SORT_DEFAULT_OPTIONS"),A=(()=>{class e{_defaultOptions;_initializedStream=new L(1);sortables=new Map;_stateChanges=new B;active;start="asc";get direction(){return this._direction}set direction(t){this._direction=t}_direction="";disableClear;disabled=!1;sortChange=new H;initialized=this._initializedStream;constructor(t){this._defaultOptions=t}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){if(!t)return"";let n=t?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,i=we(t.start||this.start,n),d=i.indexOf(this.direction)+1;return d>=i.length&&(d=0),i[d]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static \u0275fac=function(n){return new(n||e)(w(re,8))};static \u0275dir=st({type:e,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{active:[0,"matSortActive","active"],start:[0,"matSortStart","start"],direction:[0,"matSortDirection","direction"],disableClear:[2,"matSortDisableClear","disableClear",C],disabled:[2,"matSortDisabled","disabled",C]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[ot]})}return e})();function we(e,a){let t=["asc","desc"];return e=="desc"&&t.reverse(),a||t.push(""),t}var se=(()=>{class e{_sort=u(A,{optional:!0});_columnDef=u(Ht,{optional:!0});_changeDetectorRef=u(j);_focusMonitor=u(yt);_elementRef=u(rt);_ariaDescriber=u(Pt,{optional:!0});_renderChanges;_animationsDisabled=xt();_recentlyCleared=at(null);_sortButton;id;arrowPosition="after";start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(t){this._updateSortActionDescription(t)}_sortActionDescription="Sort";disableClear;constructor(){u(Mt).load(Dt);let t=u(re,{optional:!0});this._sort,t?.arrowPosition&&(this.arrowPosition=t?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=it(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let t=this._isSorted(),n=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(t&&!this._isSorted()?n:null)}}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(t.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(t){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,t)),this._sortActionDescription=t}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=I({type:e,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(n,i){n&1&&m("click",function(){return i._toggleOnInteraction()})("keydown",function(D){return i._handleKeydown(D)})("mouseleave",function(){return i._recentlyCleared.set(null)}),n&2&&(S("aria-sort",i._getAriaSortAttribute()),X("mat-sort-header-disabled",i._isDisabled()))},inputs:{id:[0,"mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",disabled:[2,"disabled","disabled",C],sortActionDescription:"sortActionDescription",disableClear:[2,"disableClear","disableClear",C]},exportAs:["matSortHeader"],attrs:Se,ngContentSelectors:xe,decls:4,vars:17,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],[1,"mat-sort-header-arrow"],["viewBox","0 -960 960 960","focusable","false","aria-hidden","true"],["d","M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"]],template:function(n,i){n&1&&(ut(Ce),N(0,"div",0)(1,"div",1),K(2),O(),g(3,Me,3,0,"div",2),O()),n&2&&(X("mat-sort-header-sorted",i._isSorted())("mat-sort-header-position-before",i.arrowPosition==="before")("mat-sort-header-descending",i._sort.direction==="desc")("mat-sort-header-ascending",i._sort.direction==="asc")("mat-sort-header-recently-cleared-ascending",i._recentlyCleared()==="asc")("mat-sort-header-recently-cleared-descending",i._recentlyCleared()==="desc")("mat-sort-header-animations-disabled",i._animationsDisabled),S("tabindex",i._isDisabled()?null:0)("role",i._isDisabled()?null:"button"),l(3),_(i._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: solid 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--mat-sort-arrow-color, var(--mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2,changeDetection:0})}return e})(),le=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=V({type:e});static \u0275inj=R({imports:[zt]})}return e})();var De=()=>[5,10,20],Ie=(e,a)=>["/veterinaria",e,"sucursal",a,"dashboard","home"];function ze(e,a){e&1&&(o(0,"th",33),s(1,"Logo"),r())}function Oe(e,a){if(e&1&&h(0,"img",36),e&2){let t=p().$implicit;c("src",t.sucursal_logo,Z)("alt","Logo de "+t.sucursal_nombre)}}function Ee(e,a){e&1&&(o(0,"div",37)(1,"mat-icon"),s(2,"store"),r()())}function Te(e,a){if(e&1&&(o(0,"td",34)(1,"div",35),g(2,Oe,1,2,"img",36),g(3,Ee,3,0,"div",37),r()()),e&2){let t=a.$implicit;l(2),_(t.sucursal_logo?2:-1),l(),_(t.sucursal_logo?-1:3)}}function ke(e,a){e&1&&(o(0,"th",38),s(1,"Nombre"),r())}function Ae(e,a){if(e&1&&(o(0,"td",34)(1,"a",39)(2,"span",40),s(3),r()()()),e&2){let t=a.$implicit,n=p(2);l(),c("routerLink",ft(2,Ie,n.veterinariaId,t.sucursal_id)),l(2),E(t.sucursal_nombre)}}function Be(e,a){e&1&&(o(0,"th",38),s(1,"NIT"),r())}function Le(e,a){if(e&1&&(o(0,"td",34),s(1),r()),e&2){let t=a.$implicit;l(),E(t.sucursal_nit||"No especificado")}}function Re(e,a){e&1&&(o(0,"th",33),s(1,"Direccion"),r())}function Fe(e,a){if(e&1&&(o(0,"td",41),s(1),r()),e&2){let t=a.$implicit;c("title",t.sucursal_direccion),l(),P(" ",t.sucursal_direccion," ")}}function He(e,a){e&1&&(o(0,"th",33),s(1,"Telefono"),r())}function Ve(e,a){if(e&1&&(o(0,"td",34)(1,"a",42),s(2),r()()),e&2){let t=a.$implicit;l(),c("href","tel:"+t.sucursal_telefono,Z),l(),P(" ",t.sucursal_telefono," ")}}function Ne(e,a){e&1&&(o(0,"th",38),s(1,"Estado de acceso"),r())}function je(e,a){if(e&1&&(o(0,"td",34),h(1,"app-branch-access-status",43),r()),e&2){let t=a.$implicit;l(),c("branch",t)}}function $e(e,a){e&1&&(o(0,"th",44),s(1,"Acciones"),r())}function Ge(e,a){if(e&1){let t=z();o(0,"td",45)(1,"button",46),m("click",function(){let i=f(t).$implicit,d=p(2);return b(d.abrirPanelSucursal(i))}),o(2,"mat-icon"),s(3,"dashboard"),r(),o(4,"span"),s(5,"Abrir Panel"),r()(),o(6,"button",47),m("click",function(){let i=f(t).$implicit,d=p(2);return b(d.editarSucursal(i))}),o(7,"mat-icon"),s(8,"edit"),r()(),o(9,"button",48),m("click",function(){let i=f(t).$implicit,d=p(2);return b(d.eliminarSucursal(i))}),o(10,"mat-icon"),s(11,"delete"),r()()()}}function Ue(e,a){e&1&&h(0,"tr",49)}function Qe(e,a){e&1&&h(0,"tr",50)}function Ye(e,a){if(e&1&&(o(0,"p",13),s(1,"Desliza la tabla hacia los lados para ver todos los datos y las acciones."),r(),o(2,"div",14)(3,"div",15)(4,"table",16),x(5,17),v(6,ze,2,0,"th",18)(7,Te,4,2,"td",19),y(),x(8,20),v(9,ke,2,0,"th",21)(10,Ae,4,5,"td",19),y(),x(11,22),v(12,Be,2,0,"th",21)(13,Le,2,1,"td",19),y(),x(14,23),v(15,Re,2,0,"th",18)(16,Fe,2,2,"td",24),y(),x(17,25),v(18,He,2,0,"th",18)(19,Ve,3,2,"td",19),y(),x(20,26),v(21,Ne,2,0,"th",21)(22,je,2,1,"td",19),y(),x(23,27),v(24,$e,2,0,"th",28)(25,Ge,12,0,"td",29),y(),v(26,Ue,1,0,"tr",30)(27,Qe,1,0,"tr",31),r()(),h(28,"mat-paginator",32),r()),e&2){let t=p();l(4),c("dataSource",t.dataSource),l(22),c("matHeaderRowDef",t.displayedColumns),l(),c("matRowDefColumns",t.displayedColumns),l(),c("pageSizeOptions",ht(4,De))}}function qe(e,a){e&1&&(o(0,"div",12)(1,"mat-icon"),s(2,"store"),r(),o(3,"p"),s(4,"No hay sucursales registradas."),r(),o(5,"span"),s(6,"Crea una nueva sucursal para comenzar."),r()())}var de=class e{constructor(a,t,n,i){this.sucursalService=a;this.dialog=t;this.route=n;this.router=i}sucursalService;dialog;route;router;displayedColumns=["sucursal_logo","sucursal_nombre","sucursal_nit","sucursal_direccion","sucursal_telefono","sucursal_estado","acciones"];dataSource=new Wt([]);veterinariaId;paginator;sort;ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}ngOnInit(){this.route.paramMap.subscribe(a=>{this.veterinariaId=Number(a.get("veterinariaId")),this.obtenerSucursales()})}obtenerSucursales(){this.veterinariaId&&this.sucursalService.getSucursalesPorVeterinaria(this.veterinariaId).subscribe({next:a=>{this.dataSource.data=a||[]},error:a=>{console.error("Error al obtener sucursales",a)}})}nuevaSucursal(){this.dialog.open(tt,{width:"600px",data:{veterinariaId:this.veterinariaId}}).afterClosed().subscribe(t=>{t==="created"&&this.obtenerSucursales()})}editarSucursal(a){this.dialog.open(tt,{width:"600px",data:{sucursal:a,veterinariaId:this.veterinariaId}}).afterClosed().subscribe(n=>{n==="updated"&&this.obtenerSucursales()})}eliminarSucursal(a){confirm(`\xBFArchivar la sucursal ${a.sucursal_nombre}?`)&&this.sucursalService.deleteSucursal(a.sucursal_id).subscribe({next:()=>this.obtenerSucursales(),error:n=>console.error("Error al archivar sucursal",n)})}volverAlPanelVeterinaria(){this.router.navigate(["/veterinarias"])}abrirPanelSucursal(a){console.log("Navegando a dashboard home:",{veterinariaId:this.veterinariaId,sucursalId:a.sucursal_id,ruta:`/veterinaria/${this.veterinariaId}/sucursal/${a.sucursal_id}/dashboard/home`}),this.router.navigate(["/veterinaria",this.veterinariaId,"sucursal",a.sucursal_id,"dashboard","home"]).then(t=>{console.log("Navegaci\xF3n exitosa:",t)}).catch(t=>{console.error("Error en navegaci\xF3n:",t)})}applyFilter(a){let t=a.target.value;this.dataSource.filter=t.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}static \u0275fac=function(t){return new(t||e)(w(ne),w(Jt),w(bt),w(vt))};static \u0275cmp=I({type:e,selectors:[["app-sucursales"]],viewQuery:function(t,n){if(t&1&&gt(k,5)(A,5),t&2){let i;W(i=J())&&(n.paginator=i.first),W(i=J())&&(n.sort=i.first)}},decls:28,vars:2,consts:[["input",""],[1,"page-container"],[1,"page-header"],[1,"page-title-group"],[1,"back-row"],["mat-stroked-button","",1,"btn-back",3,"click"],[1,"page-subtitle"],["mat-raised-button","",1,"btn-primary",3,"click"],[1,"search-container"],["appearance","outline",1,"search-field"],["matInput","","placeholder","Escribe para buscar",3,"keyup"],["matSuffix",""],[1,"empty-state"],[1,"table-scroll-hint"],[1,"table-card"],["role","region","aria-label","Sucursales: datos y acciones","tabindex","0",1,"table-scroll"],["mat-table","","matSort","",1,"full-width-table",3,"dataSource"],["matColumnDef","sucursal_logo"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","sucursal_nombre"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","sucursal_nit"],["matColumnDef","sucursal_direccion"],["mat-cell","","class","truncate-cell",3,"title",4,"matCellDef"],["matColumnDef","sucursal_telefono"],["matColumnDef","sucursal_estado"],["matColumnDef","acciones"],["mat-header-cell","","class","actions-header",4,"matHeaderCellDef"],["mat-cell","","class","actions-cell",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[1,"logo-cell"],[1,"suc-logo",3,"src","alt"],[1,"logo-placeholder"],["mat-header-cell","","mat-sort-header",""],[1,"cell-link",3,"routerLink"],[1,"cell-strong"],["mat-cell","",1,"truncate-cell",3,"title"],[1,"phone-link",3,"href"],[3,"branch"],["mat-header-cell","",1,"actions-header"],["mat-cell","",1,"actions-cell"],["mat-raised-button","","color","primary","matTooltip","Abrir panel de control",3,"click"],["mat-icon-button","","color","primary","matTooltip","Editar","aria-label","Editar",3,"click"],["mat-icon-button","","color","warn","matTooltip","Archivar","aria-label","Archivar sucursal",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,n){t&1&&(o(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"button",5),m("click",function(){return n.volverAlPanelVeterinaria()}),o(5,"mat-icon"),s(6,"arrow_back"),r(),o(7,"span"),s(8,"Volver a Veterinarias"),r()()(),o(9,"h2"),s(10,"Sucursales"),r(),o(11,"p",6),s(12,"Administra las sucursales de la veterinaria"),r()(),o(13,"button",7),m("click",function(){return n.nuevaSucursal()}),o(14,"mat-icon"),s(15,"add"),r(),o(16,"span"),s(17,"Nueva Sucursal"),r()()(),o(18,"div",8)(19,"mat-form-field",9)(20,"mat-label"),s(21,"Buscar sucursal"),r(),o(22,"input",10,0),m("keyup",function(d){return n.applyFilter(d)}),r(),o(24,"mat-icon",11),s(25,"search"),r()()(),g(26,Ye,29,5),g(27,qe,7,0,"div",12),r()),t&2&&(l(26),_(n.dataSource.data.length?26:-1),l(),_(n.dataSource.data.length===0?27:-1))},dependencies:[ie,Ct,St,Kt,Vt,jt,Qt,$t,Nt,Yt,Gt,Ut,qt,Zt,oe,k,le,A,se,Bt,At,$,Et,Tt,kt,Ft,Rt,U,Lt,G,Y,Q,Xt,Ot],styles:[".page-container[_ngcontent-%COMP%]{padding:24px;min-height:100vh;background-color:#edf4fb}.page-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:28px;gap:16px;flex-wrap:wrap}.page-title-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.page-title-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:24px;font-weight:700;color:#111827;letter-spacing:-.01em}.page-title-group[_ngcontent-%COMP%]   .page-subtitle[_ngcontent-%COMP%]{margin:0;font-size:14px;color:#6b7280;font-weight:400}.back-row[_ngcontent-%COMP%]{margin-bottom:12px}.btn-back[_ngcontent-%COMP%]{border-radius:10px!important;border-color:#d1d5db!important;color:#4b5563!important;height:38px!important;display:flex;align-items:center;gap:6px;font-weight:500}.btn-back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:4px;font-size:20px}.btn-primary[_ngcontent-%COMP%]{background-color:#2878d8!important;color:#fff!important;border-radius:10px!important;padding:0 20px!important;height:42px!important;font-weight:600;display:flex;align-items:center;gap:8px}.btn-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{margin-right:4px}.search-container[_ngcontent-%COMP%]{margin-bottom:20px}.search-container[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]{width:100%;max-width:400px}.table-card[_ngcontent-%COMP%]{background:#fff;border-radius:14px;box-shadow:0 2px 12px #0000000f;border:1px solid #d9e4f0;overflow:hidden}.full-width-table[_ngcontent-%COMP%]{width:100%}.logo-cell[_ngcontent-%COMP%]{display:flex;align-items:center}.suc-logo[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:10px;object-fit:cover;border:1px solid #d9e4f0}.logo-placeholder[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:10px;background:#eef6ff;display:flex;align-items:center;justify-content:center}.logo-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#9ca3af;font-size:22px}.cell-strong[_ngcontent-%COMP%]{font-weight:600;color:#1f2937}.actions-header[_ngcontent-%COMP%]{width:120px;text-align:right}.actions-cell[_ngcontent-%COMP%]{display:flex;gap:4px;justify-content:flex-end}.phone-link[_ngcontent-%COMP%]{color:#4b5563;text-decoration:none}.phone-link[_ngcontent-%COMP%]:hover{color:#1764bf;text-decoration:underline}.truncate-cell[_ngcontent-%COMP%]{max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.empty-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:64px 20px;text-align:center}.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:56px;width:56px;height:56px;color:#d1d5db;margin-bottom:16px}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 4px;font-size:18px;font-weight:600;color:#374151}.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#9ca3af}.table-card[_ngcontent-%COMP%]{min-width:0;max-width:100%}.table-scroll[_ngcontent-%COMP%]{width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;touch-action:pan-x pan-y}.table-scroll[_ngcontent-%COMP%]:focus-visible{outline:2px solid #2878d8;outline-offset:-2px}.full-width-table[_ngcontent-%COMP%]{min-width:720px}.table-scroll-hint[_ngcontent-%COMP%]{display:none}@media(max-width:760px){.table-scroll-hint[_ngcontent-%COMP%]{display:block;font-size:13px;color:#536c7c;margin:0 0 10px}}"]})};export{de as SucursalesComponent};
