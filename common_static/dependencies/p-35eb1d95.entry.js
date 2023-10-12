/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as t,h as o,H as i,f as n,d as e,e as r,i as s,w as a}from"./p-06ac429a.js";import{b as l,c as d,a as c}from"./p-76378400.js";import{m as p,c as h,l as b,i as g,s as u}from"./p-63eb0acd.js";import{i as m}from"./p-6dbfe5d4.js";import{c as f,h as x}from"./p-1d072d3d.js";import{a as v,p as w,g as k}from"./p-b24aa895.js";import{c as y}from"./p-d1de1188.js";import{g as z}from"./p-7c2bac85.js";import{a as j,d as C}from"./p-b287ab05.js";import{c as S}from"./p-53b2a46f.js";import{t as T}from"./p-65a5761f.js";import"./p-1b8e1d03.js";import"./p-b347cfd1.js";import"./p-419eb426.js";import"./p-cc196b34.js";const Z=class{constructor(o){t(this,o)}componentDidLoad(){E((async()=>{const t=c(window,"hybrid");if(d.getBoolean("_testing")||import("./p-81c818e7.js").then((t=>t.startTapClick(d))),d.getBoolean("statusTap",t)&&import("./p-8e24ebbc.js").then((t=>t.startStatusTap())),d.getBoolean("inputShims",$())){const t=c(window,"ios")?"ios":"android";import("./p-9f2e0db9.js").then((o=>o.startInputShims(d,t)))}const o=await import("./p-185e427e.js");d.getBoolean("hardwareBackButton",t)?o.startHardwareBackButton():o.blockHardwareBackButton(),"undefined"!=typeof window&&import("./p-8cf94fc1.js").then((t=>t.startKeyboardAssist(window))),import("./p-76fce40e.js").then((t=>this.focusVisible=t.startFocusVisible()))}))}async setFocus(t){this.focusVisible&&this.focusVisible.setFocus(t)}render(){const t=l(this);return o(i,{class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":d.getBoolean("_forceStatusbarPadding")}})}get el(){return n(this)}},$=()=>!(!c(window,"ios")||!c(window,"mobile"))||!(!c(window,"android")||!c(window,"mobileweb")),E=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)};Z.style="html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}html.plt-mobile ion-app [contenteditable]{-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";const L=class{constructor(o){t(this,o),this.collapse=!1}render(){const t=l(this);return o(i,{class:{[t]:!0,"buttons-collapse":this.collapse}})}};L.style={ios:".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-ios-s ion-button{--padding-top:3px;--padding-bottom:3px;--padding-start:5px;--padding-end:5px;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;min-height:32px}.sc-ion-buttons-ios-s .button-has-icon-only{--padding-top:0;--padding-bottom:0}.sc-ion-buttons-ios-s ion-button:not(.button-round){--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button{--color:initial;--border-color:initial;--background-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-solid,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-solid{--background:var(--ion-color-contrast);--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12;--background-hover:var(--ion-color-base);--background-hover-opacity:0.45;--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-clear,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-clear{--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s .button-outline,.ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s .button-outline{--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast);--background-activated:var(--ion-color-contrast)}.sc-ion-buttons-ios-s .button-clear,.sc-ion-buttons-ios-s .button-outline{--background-activated:transparent;--background-focused:currentColor;--background-hover:transparent}.sc-ion-buttons-ios-s .button-solid:not(.ion-color){--background-focused:#000;--background-focused-opacity:.12;--background-activated:#000;--background-activated-opacity:.12}.sc-ion-buttons-ios-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:24px;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:24px;line-height:0.67}.sc-ion-buttons-ios-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:28px;line-height:0.67}",md:".sc-ion-buttons-md-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s ion-button{--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-buttons-md-s ion-button{--padding-top:3px;--padding-bottom:3px;--padding-start:8px;--padding-end:8px;--box-shadow:none;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px;min-height:32px}.sc-ion-buttons-md-s .button-has-icon-only{--padding-top:0;--padding-bottom:0}.sc-ion-buttons-md-s ion-button:not(.button-round){--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button{--color:initial;--color-focused:var(--ion-color-contrast);--color-hover:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-contrast);--background-hover:var(--ion-color-contrast)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-solid,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-solid{--background:var(--ion-color-contrast);--background-activated:transparent;--background-focused:var(--ion-color-shade);--background-hover:var(--ion-color-base);--color:var(--ion-color-base);--color-focused:var(--ion-color-base);--color-hover:var(--ion-color-base)}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s .button-outline,.ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s .button-outline{--border-color:var(--ion-color-contrast)}.sc-ion-buttons-md-s .button-has-icon-only.button-clear{--padding-top:12px;--padding-end:12px;--padding-bottom:12px;--padding-start:12px;--border-radius:50%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;width:48px;height:48px}.sc-ion-buttons-md-s .button{--background-hover:currentColor}.sc-ion-buttons-md-s .button-solid{--color:var(--ion-toolbar-background, var(--ion-background-color, #fff));--background:var(--ion-toolbar-color, var(--ion-text-color, #424242));--background-activated:transparent;--background-focused:currentColor}.sc-ion-buttons-md-s .button-outline{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--border-color:currentColor}.sc-ion-buttons-md-s .button-clear{--color:initial;--background:transparent;--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor}.sc-ion-buttons-md-s ion-icon[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-end:0.3em;margin-inline-end:0.3em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=end]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-margin-start:0.4em;margin-inline-start:0.4em;font-size:1.4em}.sc-ion-buttons-md-s ion-icon[slot=icon-only]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:1.8em}"};const O=class{constructor(o){t(this,o),this.ionScrollStart=e(this,"ionScrollStart",7),this.ionScroll=e(this,"ionScroll",7),this.ionScrollEnd=e(this,"ionScrollEnd",7),this.watchDog=null,this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.isMainContent=!0,this.resizeTimeout=null,this.tabsElement=null,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:void 0,isScrolling:!0},this.color=void 0,this.fullscreen=!1,this.forceOverscroll=void 0,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}connectedCallback(){if(this.isMainContent=null===this.el.closest("ion-menu, ion-popover, ion-modal"),p(this.el)){const t=this.tabsElement=this.el.closest("ion-tabs");null!==t&&(this.tabsLoadCallback=()=>this.resize(),t.addEventListener("ionTabBarLoaded",this.tabsLoadCallback))}}disconnectedCallback(){if(this.onScrollEnd(),p(this.el)){const{tabsElement:t,tabsLoadCallback:o}=this;null!==t&&void 0!==o&&t.removeEventListener("ionTabBarLoaded",o),this.tabsElement=null,this.tabsLoadCallback=void 0}}onResize(){this.resizeTimeout&&(clearTimeout(this.resizeTimeout),this.resizeTimeout=null),this.resizeTimeout=setTimeout((()=>{null!==this.el.offsetParent&&this.resize()}),100)}shouldForceOverscroll(){const{forceOverscroll:t}=this,o=l(this);return void 0===t?"ios"===o&&c("ios"):t}resize(){this.fullscreen?r((()=>this.readDimensions())):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,s(this))}readDimensions(){const t=_(this.el),o=Math.max(this.el.offsetTop,0),i=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||i!==this.cBottom)&&(this.cTop=o,this.cBottom=i,s(this))}onScroll(t){const o=Date.now(),i=!this.isScrolling;this.lastScroll=o,i&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,r((o=>{this.queued=!1,this.detail.event=t,B(this.detail,this.scrollEl,o,i),this.ionScroll.emit(this.detail)})))}async getScrollElement(){return this.scrollEl||await new Promise((t=>h(this.el,t))),Promise.resolve(this.scrollEl)}async getBackgroundElement(){return this.backgroundContentEl||await new Promise((t=>h(this.el,t))),Promise.resolve(this.backgroundContentEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}async scrollToBottom(t=0){const o=await this.getScrollElement();return this.scrollToPoint(void 0,o.scrollHeight-o.clientHeight,t)}async scrollByPoint(t,o,i){const n=await this.getScrollElement();return this.scrollToPoint(t+n.scrollLeft,o+n.scrollTop,i)}async scrollToPoint(t,o,i=0){const n=await this.getScrollElement();if(i<32)return null!=o&&(n.scrollTop=o),void(null!=t&&(n.scrollLeft=t));let e,r=0;const s=new Promise((t=>e=t)),a=n.scrollTop,l=n.scrollLeft,d=null!=o?o-a:0,c=null!=t?t-l:0,p=t=>{const o=Math.min(1,(t-r)/i)-1,s=Math.pow(o,3)+1;0!==d&&(n.scrollTop=Math.floor(s*d+a)),0!==c&&(n.scrollLeft=Math.floor(s*c+l)),s<1?requestAnimationFrame(p):e()};return requestAnimationFrame((t=>{r=t,p(t)})),s}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval((()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()}),100)}onScrollEnd(){this.watchDog&&clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}render(){const{isMainContent:t,scrollX:n,scrollY:e,el:r}=this,s=m(r)?"rtl":"ltr",a=l(this),d=this.shouldForceOverscroll(),c="ios"===a,p=t?"main":"div";return this.resize(),o(i,{class:f(this.color,{[a]:!0,"content-sizing":x("ion-popover",this.el),overscroll:d,[`content-${s}`]:!0}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}},o("div",{ref:t=>this.backgroundContentEl=t,id:"background-content",part:"background"}),o(p,{class:{"inner-scroll":!0,"scroll-x":n,"scroll-y":e,overscroll:(n||e)&&d},ref:t=>this.scrollEl=t,onScroll:this.scrollEvents?t=>this.onScroll(t):void 0,part:"scroll"},o("slot",null)),c?o("div",{class:"transition-effect"},o("div",{class:"transition-cover"}),o("div",{class:"transition-shadow"})):null,o("slot",{name:"fixed"}))}get el(){return n(this)}},_=t=>{const o=t.closest("ion-tabs");if(o)return o;return t.closest("ion-app, ion-page, .ion-page, page-inner, .popover-content")||(t=>{var o;return t.parentElement?t.parentElement:(null===(o=t.parentNode)||void 0===o?void 0:o.host)?t.parentNode.host:null})(t)},B=(t,o,i,n)=>{const e=t.currentX,r=t.currentY,s=o.scrollLeft,a=o.scrollTop,l=i-t.currentTime;if(n&&(t.startTime=i,t.startX=s,t.startY=a,t.velocityX=t.velocityY=0),t.currentTime=i,t.currentX=t.scrollLeft=s,t.currentY=t.scrollTop=a,t.deltaX=s-t.startX,t.deltaY=a-t.startY,l>0&&l<100){const o=(a-r)/l;t.velocityX=(s-e)/l*.7+.3*t.velocityX,t.velocityY=.7*o+.3*t.velocityY}};O.style=':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;-ms-touch-action:pan-x pan-y pinch-zoom;touch-action:pan-x pan-y pinch-zoom}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{overflow-x:var(--overflow);overscroll-behavior-x:contain}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-height:0;contain:none}:host(.content-sizing) .inner-scroll{position:relative;top:0;bottom:0;margin-top:calc(var(--offset-top) * -1);margin-bottom:calc(var(--offset-bottom) * -1)}.transition-effect{display:none;position:absolute;width:100%;height:100vh;opacity:0;pointer-events:none}:host(.content-ltr) .transition-effect{left:-100%;}:host(.content-rtl) .transition-effect{right:-100%;}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;width:100%;height:100%;-webkit-box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03);box-shadow:inset -9px 0 9px 0 rgba(0, 0, 100, 0.03)}:host(.content-ltr) .transition-shadow{right:0;}:host(.content-rtl) .transition-shadow{left:0;-webkit-transform:scaleX(-1);transform:scaleX(-1)}::slotted([slot=fixed]){position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0)}';const M=(t,o)=>{r((()=>{const i=b(0,1-(t.scrollTop-(t.scrollHeight-t.clientHeight-10))/10,1);a((()=>{o.style.setProperty("--opacity-scale",i.toString())}))}))},D=class{constructor(o){t(this,o),this.keyboardCtrl=null,this.checkCollapsibleFooter=()=>{if("ios"!==l(this))return;const{collapse:t}=this,o="fade"===t;if(this.destroyCollapsibleFooter(),o){const t=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),o=t?v(t):null;if(!o)return void w(this.el);this.setupFadeFooter(o)}},this.setupFadeFooter=async t=>{const o=this.scrollEl=await k(t);this.contentScrollCallback=()=>{M(o,this.el)},o.addEventListener("scroll",this.contentScrollCallback),M(o,this.el)},this.keyboardVisible=!1,this.collapse=void 0,this.translucent=!1}componentDidLoad(){this.checkCollapsibleFooter()}componentDidUpdate(){this.checkCollapsibleFooter()}async connectedCallback(){this.keyboardCtrl=await y((async(t,o)=>{!1===t&&void 0!==o&&await o,this.keyboardVisible=t}))}disconnectedCallback(){this.keyboardCtrl&&this.keyboardCtrl.destroy()}destroyCollapsibleFooter(){this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0)}render(){const{translucent:t,collapse:n}=this,e=l(this),r=this.el.closest("ion-tabs"),s=null==r?void 0:r.querySelector(":scope > ion-tab-bar");return o(i,{role:"contentinfo",class:{[e]:!0,[`footer-${e}`]:!0,"footer-translucent":t,[`footer-translucent-${e}`]:t,"footer-toolbar-padding":!(this.keyboardVisible||s&&"bottom"===s.slot),[`footer-collapse-${n}`]:void 0!==n}},"ios"===e&&t&&o("div",{class:"footer-background"}),o("slot",null))}get el(){return n(this)}};D.style={ios:"ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-ios ion-toolbar:first-of-type{--border-width:0.55px 0 0}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.footer-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8}}.footer-ios.ion-no-border ion-toolbar:first-of-type{--border-width:0}.footer-collapse-fade ion-toolbar{--opacity-scale:inherit}",md:"ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer.footer-toolbar-padding ion-toolbar:last-of-type{padding-bottom:var(--ion-safe-area-bottom, 0)}.footer-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.footer-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}"};const A=t=>{const o=document.querySelector(`${t}.ion-cloned-element`);if(null!==o)return o;const i=document.createElement(t);return i.classList.add("ion-cloned-element"),i.style.setProperty("display","none"),document.body.appendChild(i),i},I=t=>{if(!t)return;const o=t.querySelectorAll("ion-toolbar");return{el:t,toolbars:Array.from(o).map((t=>{const o=t.querySelector("ion-title");return{el:t,background:t.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:o,innerTitleEl:o?o.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(t.querySelectorAll("ion-buttons"))}}))}},P=(t,o)=>{"fade"!==t.collapse&&(void 0===o?t.style.removeProperty("--opacity-scale"):t.style.setProperty("--opacity-scale",o.toString()))},H=(t,o=!0)=>{const i=t.el;o?(i.classList.remove("header-collapse-condense-inactive"),i.removeAttribute("aria-hidden")):(i.classList.add("header-collapse-condense-inactive"),i.setAttribute("aria-hidden","true"))},X=(t,o,i)=>{r((()=>{const n=t.scrollTop,e=o.clientHeight,r=i?i.clientHeight:0;if(null!==i&&n<r)return o.style.setProperty("--opacity-scale","0"),void t.style.setProperty("clip-path",`inset(${e}px 0px 0px 0px)`);const s=b(0,(n-r)/10,1);a((()=>{t.style.removeProperty("clip-path"),o.style.setProperty("--opacity-scale",s.toString())}))}))},W=class{constructor(o){t(this,o),this.inheritedAttributes={},this.setupFadeHeader=async(t,o)=>{const i=this.scrollEl=await k(t);this.contentScrollCallback=()=>{X(this.scrollEl,this.el,o)},i.addEventListener("scroll",this.contentScrollCallback),X(this.scrollEl,this.el,o)},this.collapse=void 0,this.translucent=!1}componentWillLoad(){this.inheritedAttributes=g(this.el)}componentDidLoad(){this.checkCollapsibleHeader()}componentDidUpdate(){this.checkCollapsibleHeader()}disconnectedCallback(){this.destroyCollapsibleHeader()}async checkCollapsibleHeader(){if("ios"!==l(this))return;const{collapse:t}=this,o="condense"===t,i="fade"===t;if(this.destroyCollapsibleHeader(),o){const t=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),o=t?v(t):null;a((()=>{A("ion-title").size="large",A("ion-back-button")})),await this.setupCondenseHeader(o,t)}else if(i){const t=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),o=t?v(t):null;if(!o)return void w(this.el);const i=o.querySelector('ion-header[collapse="condense"]');await this.setupFadeHeader(o,i)}}destroyCollapsibleHeader(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0),this.collapsibleMainHeader&&(this.collapsibleMainHeader.classList.remove("header-collapse-main"),this.collapsibleMainHeader=void 0)}async setupCondenseHeader(t,o){if(!t||!o)return void w(this.el);if("undefined"==typeof IntersectionObserver)return;this.scrollEl=await k(t);const i=o.querySelectorAll("ion-header");if(this.collapsibleMainHeader=Array.from(i).find((t=>"condense"!==t.collapse)),!this.collapsibleMainHeader)return;const n=I(this.collapsibleMainHeader),e=I(this.el);n&&e&&(H(n,!1),P(n.el,0),this.intersectionObserver=new IntersectionObserver((t=>{((t,o,i,n)=>{a((()=>{const e=n.scrollTop;((t,o,i)=>{if(!t[0].isIntersecting)return;const n=t[0].intersectionRatio>.9||i<=0?0:100*(1-t[0].intersectionRatio)/75;P(o.el,1===n?void 0:n)})(t,o,e);const r=t[0],s=r.intersectionRect,a=s.width*s.height,l=0===a&&0==r.rootBounds.width*r.rootBounds.height,d=Math.abs(s.left-r.boundingClientRect.left),c=Math.abs(s.right-r.boundingClientRect.right);l||a>0&&(d>=5||c>=5)||(r.isIntersecting?(H(o,!1),H(i)):(0===s.x&&0===s.y||0!==s.width&&0!==s.height)&&e>0&&(H(o),H(i,!1),P(o.el)))}))})(t,n,e,this.scrollEl)}),{root:t,threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1]}),this.intersectionObserver.observe(e.toolbars[e.toolbars.length-1].el),this.contentScrollCallback=()=>{((t,o,i)=>{r((()=>{const n=b(1,1+-t.scrollTop/500,1.1);null===i.querySelector("ion-refresher.refresher-native")&&a((()=>{((t=[],o=1,i=!1)=>{t.forEach((t=>{const n=t.ionTitleEl,e=t.innerTitleEl;n&&"large"===n.size&&(e.style.transition=i?"all 0.2s ease-in-out":"",e.style.transform=`scale3d(${o}, ${o}, 1)`)}))})(o.toolbars,n)}))}))})(this.scrollEl,e,t)},this.scrollEl.addEventListener("scroll",this.contentScrollCallback),a((()=>{void 0!==this.collapsibleMainHeader&&this.collapsibleMainHeader.classList.add("header-collapse-main")})))}render(){const{translucent:t,inheritedAttributes:n}=this,e=l(this),r=this.collapse||"none",s=x("ion-menu",this.el)?"none":"banner";return o(i,Object.assign({role:s,class:{[e]:!0,[`header-${e}`]:!0,"header-translucent":this.translucent,[`header-collapse-${r}`]:!0,[`header-translucent-${e}`]:this.translucent}},n),"ios"===e&&t&&o("div",{class:"header-background"}),o("slot",null))}get el(){return n(this)}};W.style={ios:"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:1px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}ion-header:not(.header-collapse-main):has(~ion-content ion-header[collapse=condense]){opacity:0}",md:"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.header-collapse-condense{display:none}.header-md.ion-no-border{-webkit-box-shadow:none;box-shadow:none}"};const F=class{constructor(o){t(this,o),this.ionNavWillLoad=e(this,"ionNavWillLoad",7),this.ionNavWillChange=e(this,"ionNavWillChange",3),this.ionNavDidChange=e(this,"ionNavDidChange",3),this.lockController=S(),this.gestureOrAnimationInProgress=!1,this.mode=l(this),this.delegate=void 0,this.animated=!0,this.animation=void 0,this.swipeHandler=void 0}swipeHandlerChanged(){this.gesture&&this.gesture.enable(void 0!==this.swipeHandler)}async connectedCallback(){const t=()=>{this.gestureOrAnimationInProgress=!0,this.swipeHandler&&this.swipeHandler.onStart()};this.gesture=(await import("./p-e627ed84.js")).createSwipeBackGesture(this.el,(()=>!this.gestureOrAnimationInProgress&&!!this.swipeHandler&&this.swipeHandler.canStart()),(()=>t()),(t=>{var o;return null===(o=this.ani)||void 0===o?void 0:o.progressStep(t)}),((t,o,i)=>{if(this.ani){this.ani.onFinish((()=>{this.gestureOrAnimationInProgress=!1,this.swipeHandler&&this.swipeHandler.onEnd(t)}),{oneTimeCallback:!0});let n=t?-.001:.001;t?n+=z([0,0],[.32,.72],[0,1],[1,1],o)[0]:(this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),n+=z([0,0],[1,0],[.68,.28],[1,1],o)[0]),this.ani.progressEnd(t?1:0,n,i)}else this.gestureOrAnimationInProgress=!1})),this.swipeHandlerChanged()}componentWillLoad(){this.ionNavWillLoad.emit()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async commit(t,o,i){const n=await this.lockController.lock();let e=!1;try{e=await this.transition(t,o,i)}catch(t){console.error(t)}return n(),e}async setRouteId(t,o,i,n){return{changed:await this.setRoot(t,o,{duration:"root"===i?0:void 0,direction:"back"===i?"back":"forward",animationBuilder:n}),element:this.activeEl}}async getRouteId(){const t=this.activeEl;return t?{id:t.tagName,element:t,params:this.activeParams}:void 0}async setRoot(t,o,i){if(this.activeComponent===t&&u(o,this.activeParams))return!1;const n=this.activeEl,e=await j(this.delegate,this.el,t,["ion-page","ion-page-invisible"],o);return this.activeComponent=t,this.activeEl=e,this.activeParams=o,await this.commit(e,n,i),await C(this.delegate,n),!0}async transition(t,o,i={}){if(o===t)return!1;this.ionNavWillChange.emit();const{el:n,mode:e}=this,r=this.animated&&d.getBoolean("animated",!0),s=i.animationBuilder||this.animation||d.get("navAnimation");return await T(Object.assign(Object.assign({mode:e,animated:r,enteringEl:t,leavingEl:o,baseEl:n,deepWait:p(n),progressCallback:i.progressAnimation?t=>{void 0===t||this.gestureOrAnimationInProgress?this.ani=t:(this.gestureOrAnimationInProgress=!0,t.onFinish((()=>{this.gestureOrAnimationInProgress=!1,this.swipeHandler&&this.swipeHandler.onEnd(!1)}),{oneTimeCallback:!0}),t.progressEnd(0,0,0))}:void 0},i),{animationBuilder:s})),this.ionNavDidChange.emit(),!0}render(){return o("slot",null)}get el(){return n(this)}static get watchers(){return{swipeHandler:["swipeHandlerChanged"]}}};F.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;z-index:0}";const Y=class{constructor(o){t(this,o),this.ionStyle=e(this,"ionStyle",7),this.color=void 0,this.size=void 0}sizeChanged(){this.emitStyle()}connectedCallback(){this.emitStyle()}emitStyle(){const t=this.getSize();this.ionStyle.emit({[`title-${t}`]:!0})}getSize(){return void 0!==this.size?this.size:"default"}render(){const t=l(this),n=this.getSize();return o(i,{class:f(this.color,{[t]:!0,[`title-${n}`]:!0,"title-rtl":"rtl"===document.dir})},o("div",{class:"toolbar-title"},o("slot",null)))}get el(){return n(this)}static get watchers(){return{size:["sizeChanged"]}}};Y.style={ios:":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{top:0;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.title-small){-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}:host(.title-large){-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:0;-webkit-transform-origin:left center;transform-origin:left center;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;font-size:34px;font-weight:700;text-align:start}:host(.title-large.title-rtl){-webkit-transform-origin:right center;transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000);font-family:var(--ion-font-family)}:host(.title-large) .toolbar-title{-webkit-transform-origin:inherit;transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}@supports selector(:dir(rtl)){:host(.title-large) .toolbar-title:dir(rtl){-webkit-transform-origin:calc(100% - inherit);transform-origin:calc(100% - inherit)}}",md:":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}"};const R=class{constructor(o){t(this,o),this.childrenStyles=new Map,this.color=void 0}componentWillLoad(){const t=Array.from(this.el.querySelectorAll("ion-buttons")),o=t.find((t=>"start"===t.slot));o&&o.classList.add("buttons-first-slot");const i=t.reverse(),n=i.find((t=>"end"===t.slot))||i.find((t=>"primary"===t.slot))||i.find((t=>"secondary"===t.slot));n&&n.classList.add("buttons-last-slot")}childrenStyle(t){t.stopPropagation();const o=t.target.tagName,i=t.detail,n={},e=this.childrenStyles.get(o)||{};let r=!1;Object.keys(i).forEach((t=>{const o=`toolbar-${t}`,s=i[t];s!==e[o]&&(r=!0),s&&(n[o]=!0)})),r&&(this.childrenStyles.set(o,n),s(this))}render(){const t=l(this),n={};return this.childrenStyles.forEach((t=>{Object.assign(n,t)})),o(i,{class:Object.assign(Object.assign({},n),f(this.color,{[t]:!0,"in-toolbar":x("ion-toolbar",this.el)}))},o("div",{class:"toolbar-background"}),o("div",{class:"toolbar-container"},o("slot",{name:"start"}),o("slot",{name:"secondary"}),o("div",{class:"toolbar-content"},o("slot",null)),o("slot",{name:"primary"}),o("slot",{name:"end"})))}get el(){return n(this)}};R.style={ios:":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-color-step-50, #f7f7f7));--color:var(--ion-toolbar-color, var(--ion-text-color, #000));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment) .toolbar-content{display:-ms-inline-flexbox;display:inline-flex}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large){padding-bottom:7px}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}",md:":host{--border-width:0;--border-style:solid;--opacity:1;--opacity-scale:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;width:100%;padding-right:var(--ion-safe-area-right);padding-left:var(--ion-safe-area-left);color:var(--color);font-family:var(--ion-font-family, inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:calc(var(--opacity) * var(--opacity-scale));z-index:-1;pointer-events:none}::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background, var(--ion-background-color, #fff));--color:var(--ion-toolbar-color, var(--ion-text-color, #424242));--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, var(--ion-color-step-150, #c1c4cd)));--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--min-height:56px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:3;order:3;min-width:0;max-width:100%}::slotted(.buttons-first-slot){-webkit-margin-start:4px;margin-inline-start:4px}::slotted(.buttons-last-slot){-webkit-margin-end:4px;margin-inline-end:4px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:4;order:4}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}"};export{Z as ion_app,L as ion_buttons,O as ion_content,D as ion_footer,W as ion_header,F as ion_router_outlet,Y as ion_title,R as ion_toolbar}