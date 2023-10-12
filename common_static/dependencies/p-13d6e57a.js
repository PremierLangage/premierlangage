/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{MENU_BACK_BUTTON_PRIORITY as t}from"./p-185e427e.js";import{c as n}from"./p-63eb0acd.js";import{b as r}from"./p-76378400.js";import{c as e}from"./p-446230d7.js";const a=t=>e().duration(t?400:300),s=t=>{let n,s;const o=t.width+8,i=e(),c=e();t.isEndSide?(n=o+"px",s="0px"):(n=-o+"px",s="0px"),i.addElement(t.menuInnerEl).fromTo("transform",`translateX(${n})`,`translateX(${s})`);const p="ios"===r(t),u=p?.2:.25;return c.addElement(t.backdropEl).fromTo("opacity",.01,u),a(p).addAnimation([i,c])},o=t=>{let n,s;const o=r(t),i=t.width;t.isEndSide?(n=-i+"px",s=i+"px"):(n=i+"px",s=-i+"px");const c=e().addElement(t.menuInnerEl).fromTo("transform",`translateX(${s})`,"translateX(0px)"),p=e().addElement(t.contentEl).fromTo("transform","translateX(0px)",`translateX(${n})`),u=e().addElement(t.backdropEl).fromTo("opacity",.01,.32);return a("ios"===o).addAnimation([c,p,u])},i=t=>{const n=r(t),s=t.width*(t.isEndSide?-1:1)+"px",o=e().addElement(t.contentEl).fromTo("transform","translateX(0px)",`translateX(${s})`);return a("ios"===n).addAnimation(o)},c=(()=>{const r=new Map,e=[],a=async t=>{if(await y(),"start"===t||"end"===t){return w((n=>n.side===t&&!n.disabled))||w((n=>n.side===t))}if(null!=t)return w((n=>n.menuId===t));return w((t=>!t.disabled))||(e.length>0?e[0].el:void 0)},c=async()=>(await y(),m()),p=(t,n)=>{r.set(t,n)},u=t=>{const n=t.side;e.filter((r=>r.side===n&&r!==t)).forEach((t=>t.disabled=!0))},m=()=>w((t=>t._isOpen)),l=()=>e.some((t=>t.isAnimating)),w=t=>{const n=e.find(t);if(void 0!==n)return n.el},y=()=>Promise.all(Array.from(document.querySelectorAll("ion-menu")).map((t=>new Promise((r=>n(t,r))))));return p("reveal",i),p("push",o),p("overlay",s),"undefined"!=typeof document&&document.addEventListener("ionBackButton",(n=>{const r=m();r&&n.detail.register(t,(()=>r.close()))})),{registerAnimation:p,get:a,getMenus:async()=>(await y(),e.map((t=>t.el))),getOpen:c,isEnabled:async t=>{const n=await a(t);return!!n&&!n.disabled},swipeGesture:async(t,n)=>{const r=await a(n);return r&&(r.swipeGesture=t),r},isAnimating:async()=>(await y(),l()),isOpen:async t=>{if(null!=t){const n=await a(t);return void 0!==n&&n.isOpen()}return void 0!==await c()},enable:async(t,n)=>{const r=await a(n);return r&&(r.disabled=!t),r},toggle:async t=>{const n=await a(t);return!!n&&n.toggle()},close:async t=>{const n=await(void 0!==t?a(t):c());return void 0!==n&&n.close()},open:async t=>{const n=await a(t);return!!n&&n.open()},_getOpenSync:m,_createAnimation:(t,n)=>{const e=r.get(t);if(!e)throw new Error("animation not registered");return e(n)},_register:t=>{e.indexOf(t)<0&&(t.disabled||u(t),e.push(t))},_unregister:t=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},_setOpen:async(t,n,r)=>{if(l())return!1;if(n){const n=await c();n&&t.el!==n&&await n.setOpen(!1,!1)}return t._setOpen(n,r)},_setActiveMenu:u}})();export{c as m}