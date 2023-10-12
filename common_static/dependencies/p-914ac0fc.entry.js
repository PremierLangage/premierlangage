/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as i,d as t,h as o,H as n,f as s}from"./p-06ac429a.js";import{E as a,a as e}from"./p-7b021525.js";import{r}from"./p-63eb0acd.js";import{c as d}from"./p-53b2a46f.js";import{d as l,e as c,B as p,j as h,k as g,f as m,g as f,h as b}from"./p-63505fbb.js";import{g as x}from"./p-1d072d3d.js";import{c as u,b as v}from"./p-76378400.js";import{c as w}from"./p-446230d7.js";import"./p-b347cfd1.js";import"./p-b287ab05.js";import"./p-185e427e.js";import"./p-1b8e1d03.js";const y=i=>{const t=w(),o=w(),n=w();return o.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([o,n])},k=i=>{const t=w(),o=w(),n=w();return o.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([o,n])},j=i=>{const t=w(),o=w(),n=w();return o.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([o,n])},D=i=>{const t=w(),o=w(),n=w();return o.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([o,n])},L=class{constructor(o){i(this,o),this.didPresent=t(this,"ionLoadingDidPresent",7),this.willPresent=t(this,"ionLoadingWillPresent",7),this.willDismiss=t(this,"ionLoadingWillDismiss",7),this.didDismiss=t(this,"ionLoadingDidDismiss",7),this.didPresentShorthand=t(this,"didPresent",7),this.willPresentShorthand=t(this,"willPresent",7),this.willDismissShorthand=t(this,"willDismiss",7),this.didDismissShorthand=t(this,"didDismiss",7),this.delegateController=l(this),this.lockController=d(),this.triggerController=c(),this.customHTMLEnabled=u.get("innerHTMLTemplatesEnabled",a),this.presented=!1,this.onBackdropTap=()=>{this.dismiss(void 0,p)},this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.message=void 0,this.cssClass=void 0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.spinner=void 0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0}onIsOpenChange(i,t){!0===i&&!1===t?this.present():!1===i&&!0===t&&this.dismiss()}triggerChanged(){const{trigger:i,el:t,triggerController:o}=this;i&&o.addClickListener(t,i)}connectedCallback(){h(this.el),this.triggerChanged()}componentWillLoad(){if(void 0===this.spinner){const i=v(this);this.spinner=u.get("loadingSpinner",u.get("spinner","ios"===i?"lines":"crescent"))}g(this.el)}componentDidLoad(){!0===this.isOpen&&r((()=>this.present()))}disconnectedCallback(){this.triggerController.removeClickListener()}async present(){const i=await this.lockController.lock();await this.delegateController.attachViewToDom(),await m(this,"loadingEnter",y,j),this.duration>0&&(this.durationTimeout=setTimeout((()=>this.dismiss()),this.duration+10)),i()}async dismiss(i,t){const o=await this.lockController.lock();this.durationTimeout&&clearTimeout(this.durationTimeout);const n=await f(this,i,t,"loadingLeave",k,D);return n&&this.delegateController.removeViewFromDom(),o(),n}onDidDismiss(){return b(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return b(this.el,"ionLoadingWillDismiss")}renderLoadingMessage(i){const{customHTMLEnabled:t,message:n}=this;return t?o("div",{class:"loading-content",id:i,innerHTML:e(n)}):o("div",{class:"loading-content",id:i},n)}render(){const{message:i,spinner:t,htmlAttributes:s,overlayIndex:a}=this,e=v(this),r=`loading-${a}-msg`;return o(n,Object.assign({role:"dialog","aria-modal":"true","aria-labelledby":void 0!==i?r:null,tabindex:"-1"},s,{style:{zIndex:`${4e4+this.overlayIndex}`},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},x(this.cssClass)),{[e]:!0,"overlay-hidden":!0,"loading-translucent":this.translucent})}),o("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),o("div",{tabindex:"0"}),o("div",{class:"loading-wrapper ion-overlay-wrapper"},t&&o("div",{class:"loading-spinner"},o("ion-spinner",{name:t,"aria-hidden":"true"})),void 0!==i&&this.renderLoadingMessage(r)),o("div",{tabindex:"0"}))}get el(){return s(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}};L.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{-webkit-margin-start:16px;margin-inline-start:16px}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}ion-spinner.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{-webkit-margin-start:16px;margin-inline-start:16px}"};export{L as ion_loading}