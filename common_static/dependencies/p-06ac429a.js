/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let e,t,n,l=!1,o=!1,s=!1,i=!1,c=!1;const r={isDev:!1,isBrowser:!0,isServer:!1,isTesting:!1},f=e=>{const t=new URL(e,De.t);return t.origin!==Te.location.origin?t.href:t.pathname},u="s-id",a="sty-id",$="c-id",d="http://www.w3.org/1999/xlink",h={},y=e=>"object"==(e=typeof e)||"function"===e;function m(e){var t,n,l;return null!==(l=null===(n=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===n?void 0:n.getAttribute("content"))&&void 0!==l?l:void 0}const p=(e,t,...n)=>{let l=null,o=null,s=null,i=!1,c=!1;const r=[],f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!y(l))&&(l+=""),i&&c?r[r.length-1].l+=l:r.push(i?v(null,l):l),c=i)};if(f(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,r,w);const u=v(e,null);return u.o=t,r.length>0&&(u.i=r),u.u=o,u.$=s,u},v=(e,t)=>({h:0,m:e,l:t,p:null,i:null,o:null,u:null,$:null}),b={},w={forEach:(e,t)=>e.map(g).forEach(t),map:(e,t)=>e.map(g).map(t).map(k)},g=e=>({vattrs:e.o,vchildren:e.i,vkey:e.u,vname:e.$,vtag:e.m,vtext:e.l}),k=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),p(e.vtag,t,...e.vchildren||[])}const t=v(e.vtag,e.vtext);return t.o=e.vattrs,t.i=e.vchildren,t.u=e.vkey,t.$=e.vname,t},j=(e,t,n,l,o,s,i)=>{let c,r,f,u;if(1===s.nodeType){for(c=s.getAttribute($),c&&(r=c.split("."),r[0]!==i&&"0"!==r[0]||(f={h:0,v:r[0],k:r[1],j:r[2],S:r[3],m:s.tagName.toLowerCase(),p:s,o:null,i:null,u:null,$:null,l:null},t.push(f),s.removeAttribute($),e.i||(e.i=[]),e.i[f.S]=f,e=f,l&&"0"===f.j&&(l[f.S]=f.p))),u=s.childNodes.length-1;u>=0;u--)j(e,t,n,l,o,s.childNodes[u],i);if(s.shadowRoot)for(u=s.shadowRoot.childNodes.length-1;u>=0;u--)j(e,t,n,l,o,s.shadowRoot.childNodes[u],i)}else if(8===s.nodeType)r=s.nodeValue.split("."),r[1]!==i&&"0"!==r[1]||(c=r[0],f={h:0,v:r[1],k:r[2],j:r[3],S:r[4],p:s,o:null,i:null,u:null,$:null,m:null,l:null},"t"===c?(f.p=s.nextSibling,f.p&&3===f.p.nodeType&&(f.l=f.p.textContent,t.push(f),s.remove(),e.i||(e.i=[]),e.i[f.S]=f,l&&"0"===f.j&&(l[f.S]=f.p))):f.v===i&&("s"===c?(f.m="slot",s["s-sn"]=r[5]?f.$=r[5]:"",s["s-sr"]=!0,l&&(f.p=Le.createElement(f.m),f.$&&f.p.setAttribute("name",f.$),s.parentNode.insertBefore(f.p,s),s.remove(),"0"===f.j&&(l[f.S]=f.p)),n.push(f),e.i||(e.i=[]),e.i[f.S]=f):"r"===c&&(l?s.remove():(o["s-cr"]=s,s["s-cn"]=!0))));else if(e&&"style"===e.m){const t=v(null,s.textContent);t.p=s,t.S="0",e.i=[t]}},S=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)S(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)S(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},O=e=>Pe.push(e),x=e=>ke(e).O,M=e=>ke(e).M,C=(e,t,n)=>{const l=M(e);return{emit:e=>R(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},R=(e,t,n)=>{const l=De.ce(t,n);return e.dispatchEvent(l),l},P=new WeakMap,T=(e,t,n)=>{let l=Re.get(e);Ue&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,Re.set(e,l)},L=(e,t,n)=>{var l;const o=D(t,n),s=Re.get(o);if(e=11===e.nodeType?e:Le,s)if("string"==typeof s){let t,n=P.get(e=e.head||e);if(n||P.set(e,n=new Set),!n.has(o)){if(e.host&&(t=e.querySelector(`[${a}="${o}"]`)))t.innerHTML=s;else{t=Le.createElement("style"),t.innerHTML=s;const n=null!==(l=De.C)&&void 0!==l?l:m(Le);null!=n&&t.setAttribute("nonce",n),e.insertBefore(t,e.querySelector("link"))}n&&n.add(o)}}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return o},D=(e,t)=>"sc-"+(t&&32&e.h?e.R+"-"+t:e.R),E=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),I=(e,t,n,l,o,s)=>{if(n!==l){let i=Oe(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=U(n),s=U(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const r=y(l);if((i||r&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{const o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}let f=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(d,t):e.removeAttribute(t)):(!i||4&s||o)&&!r&&(l=!0===l?"":l,f?e.setAttributeNS(d,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):Oe(Te,c)?c.slice(2):c[2]+t.slice(3),n&&De.rel(e,t,n,!1),l&&De.ael(e,t,l,!1)}},N=/\s/,U=e=>e?e.split(N):[],W=(e,t,n,l)=>{const o=11===t.p.nodeType&&t.p.host?t.p.host:t.p,s=e&&e.o||h,i=t.o||h;for(l in s)l in i||I(o,l,s[l],void 0,n,t.h);for(l in i)I(o,l,s[l],i[l],n,t.h)},A=(o,c,r,f)=>{const u=c.i[r];let a,$,d,h=0;if(l||(s=!0,"slot"===u.m&&(e&&f.classList.add(e+"-s"),u.h|=u.i?2:1)),null!==u.l)a=u.p=Le.createTextNode(u.l);else if(1&u.h)a=u.p=Le.createTextNode("");else{if(i||(i="svg"===u.m),a=u.p=Le.createElementNS(i?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&u.h?"slot-fb":u.m),i&&"foreignObject"===u.m&&(i=!1),W(null,u,i),null!=e&&a["s-si"]!==e&&a.classList.add(a["s-si"]=e),u.i)for(h=0;h<u.i.length;++h)$=A(o,u,h,a),$&&a.appendChild($);"svg"===u.m?i=!1:"foreignObject"===a.tagName&&(i=!0)}return a["s-hn"]=n,3&u.h&&(a["s-sr"]=!0,a["s-cr"]=t,a["s-sn"]=u.$||"",d=o&&o.i&&o.i[r],d&&d.m===u.m&&o.p&&F(o.p,!1)),a},F=(e,t)=>{De.h|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const o=l[e];o["s-hn"]!==n&&o["s-ol"]&&(_(o).insertBefore(o,V(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),t&&F(o,t)}De.h&=-2},B=(e,t,l,o,s,i)=>{let c,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===n&&(r=r.shadowRoot);s<=i;++s)o[s]&&(c=A(null,l,s,e),c&&(o[s].p=c,r.insertBefore(c,V(t))))},H=(e,t,n)=>{for(let l=t;l<=n;++l){const t=e[l];if(t){const e=t.p;X(t),e&&(o=!0,e["s-ol"]?e["s-ol"].remove():F(e,!0),e.remove())}}},q=(e,t)=>e.m===t.m&&("slot"===e.m?e.$===t.$:e.u===t.u),V=e=>e&&e["s-ol"]||e,_=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,z=(e,t)=>{const n=t.p=e.p,l=e.i,o=t.i,s=t.m,c=t.l;let r;null===c?(i="svg"===s||"foreignObject"!==s&&i,"slot"===s||W(e,t,i),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,c=0,r=0,f=0,u=t.length-1,a=t[0],$=t[u],d=l.length-1,h=l[0],y=l[d];for(;i<=u&&c<=d;)if(null==a)a=t[++i];else if(null==$)$=t[--u];else if(null==h)h=l[++c];else if(null==y)y=l[--d];else if(q(a,h))z(a,h),a=t[++i],h=l[++c];else if(q($,y))z($,y),$=t[--u],y=l[--d];else if(q(a,y))"slot"!==a.m&&"slot"!==y.m||F(a.p.parentNode,!1),z(a,y),e.insertBefore(a.p,$.p.nextSibling),a=t[++i],y=l[--d];else if(q($,h))"slot"!==a.m&&"slot"!==y.m||F($.p.parentNode,!1),z($,h),e.insertBefore($.p,a.p),$=t[--u],h=l[++c];else{for(r=-1,f=i;f<=u;++f)if(t[f]&&null!==t[f].u&&t[f].u===h.u){r=f;break}r>=0?(s=t[r],s.m!==h.m?o=A(t&&t[c],n,r,e):(z(s,h),t[r]=void 0,o=s.p),h=l[++c]):(o=A(t&&t[c],n,c,e),h=l[++c]),o&&_(a.p).insertBefore(o,V(a.p))}i>u?B(e,null==l[d+1]?null:l[d+1].p,n,l,c,d):c>d&&H(t,i,u)})(n,l,t,o):null!==o?(null!==e.l&&(n.textContent=""),B(n,null,t,o,0,o.length-1)):null!==l&&H(l,0,l.length-1),i&&"svg"===s&&(i=!1)):(r=n["s-cr"])?r.parentNode.textContent=c:e.l!==c&&(n.data=c)},G=e=>{const t=e.childNodes;for(const e of t)if(1===e.nodeType){if(e["s-sr"]){const n=e["s-sn"];e.hidden=!1;for(const l of t)if(l["s-hn"]!==e["s-hn"]||""!==n){if(1===l.nodeType&&n===l.getAttribute("slot")){e.hidden=!0;break}}else if(1===l.nodeType||3===l.nodeType&&""!==l.textContent.trim()){e.hidden=!0;break}}G(e)}},J=[],K=e=>{let t,n,l;for(const s of e.childNodes){if(s["s-sr"]&&(t=s["s-cr"])&&t.parentNode){n=t.parentNode.childNodes;const e=s["s-sn"];for(l=n.length-1;l>=0;l--)if(t=n[l],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==s["s-hn"])if(Q(t,e)){let n=J.find((e=>e.P===t));o=!0,t["s-sn"]=t["s-sn"]||e,n?n.T=s:J.push({T:s,P:t}),t["s-sr"]&&J.map((e=>{Q(e.P,t["s-sn"])&&(n=J.find((e=>e.P===t)),n&&!e.T&&(e.T=n.T))}))}else J.some((e=>e.P===t))||J.push({P:t})}1===s.nodeType&&K(s)}},Q=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,X=e=>{e.o&&e.o.ref&&e.o.ref(null),e.i&&e.i.map(X)},Y=(e,t)=>{t&&!e.L&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.L=t)))},Z=(e,t)=>{if(e.h|=16,!(4&e.h))return Y(e,e.D),_e((()=>ee(e,t)));e.h|=512},ee=(e,t)=>{const n=e.I;let l;return t&&(e.h|=256,e.N&&(e.N.map((([e,t])=>re(n,e,t))),e.N=void 0),l=re(n,"componentWillLoad")),l=te(l,(()=>re(n,"componentWillRender"))),te(l,(()=>le(e,n,t)))},te=(e,t)=>ne(e)?e.then(t):t(),ne=e=>e instanceof Promise||e&&e.then&&"function"==typeof e.then,le=async(e,t,n)=>{var l;const o=e.M,s=o["s-rc"];n&&(e=>{const t=e.U,n=e.M,l=t.h,o=L(n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.O);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"),2&l&&n.classList.add(o+"-s"))})(e);oe(e,t,o,n),s&&(s.map((e=>e())),o["s-rc"]=void 0);{const t=null!==(l=o["s-p"])&&void 0!==l?l:[],n=()=>se(e);0===t.length?n():(Promise.all(t).then(n),e.h|=4,t.length=0)}},oe=(i,c,r,f)=>{try{c=c.render&&c.render(),i.h&=-17,i.h|=2,((i,c,r=!1)=>{const f=i.M,u=i.U,a=i.W||v(null,null),$=(e=>e&&e.m===b)(c)?c:p(null,null,c);if(n=f.tagName,u.A&&($.o=$.o||{},u.A.map((([e,t])=>$.o[t]=f[e]))),r&&$.o)for(const e of Object.keys($.o))f.hasAttribute(e)&&!["key","ref","style","class"].includes(e)&&($.o[e]=f[e]);if($.m=null,$.h|=4,i.W=$,$.p=a.p=f.shadowRoot||f,e=f["s-sc"],t=f["s-cr"],l=0!=(1&u.h),o=!1,z(a,$),De.h|=1,s){let e,t,n,l,o,s;K($.p);let i=0;for(;i<J.length;i++)e=J[i],t=e.P,t["s-ol"]||(n=Le.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<J.length;i++)if(e=J[i],t=e.P,e.T){for(l=e.T.parentNode,o=e.T.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&G($.p),De.h&=-2,J.length=0})(i,c,f)}catch(e){xe(e,i.M)}return null},se=e=>{const t=e.M,n=e.I,l=e.D;re(n,"componentDidRender"),64&e.h?re(n,"componentDidUpdate"):(e.h|=64,fe(t),re(n,"componentDidLoad"),e.F(t),l||ce()),e.B(t),e.L&&(e.L(),e.L=void 0),512&e.h&&qe((()=>Z(e,!1))),e.h&=-517},ie=e=>{{const t=ke(e),n=t.M.isConnected;return n&&2==(18&t.h)&&Z(t,!1),n}},ce=()=>{fe(Le.documentElement),qe((()=>R(Te,"appload",{detail:{namespace:"ionic"}})))},re=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){xe(e)}},fe=e=>e.classList.add("hydrated"),ue=(e,t,n)=>{var l;if(t.H){e.watchers&&(t.q=e.watchers);const o=Object.entries(t.H),s=e.prototype;if(o.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>ke(this).V.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=ke(e),s=o.M,i=o.V.get(t),c=o.h,r=o.I;if(n=((e,t)=>null==e||y(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.H[t][0]),(!(8&c)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(o.V.set(t,n),r)){if(l.q&&128&c){const e=l.q[t];e&&e.map((e=>{try{r[e](n,i,t)}catch(e){xe(e,s)}}))}2==(18&c)&&Z(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=ke(this);return n._.then((()=>n.I[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,l,o){De.jmp((()=>{const i=n.get(e);if(this.hasOwnProperty(i))o=this[i],delete this[i];else{if(s.hasOwnProperty(i)&&"number"==typeof this[i]&&this[i]==o)return;if(null==i){const n=ke(this),s=null==n?void 0:n.h;if(!(8&s)&&128&s&&o!==l){const s=n.I,i=t.q[e];null==i||i.forEach((t=>{null!=s[t]&&s[t].call(s,o,l,e)}))}return}}this[i]=(null!==o||"boolean"!=typeof this[i])&&o}))},e.observedAttributes=Array.from(new Set([...Object.keys(null!==(l=t.q)&&void 0!==l?l:{}),...o.filter((([e,t])=>15&t[0])).map((([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.A.push([e,o]),o}))]))}}return e},ae=e=>{re(e,"connectedCallback")},$e=e=>{if(0==(1&De.h)){const t=ke(e),n=t.U,l=()=>{};if(1&t.h)me(e,t,n.G),(null==t?void 0:t.I)?ae(t.I):(null==t?void 0:t.J)&&t.J.then((()=>ae(t.I)));else{let l;if(t.h|=1,l=e.getAttribute(u),l){if(1&n.h){const t=L(e.shadowRoot,n,e.getAttribute("s-mode"));e.classList.remove(t+"-h",t+"-s")}((e,t,n,l)=>{const o=e.shadowRoot,s=[],i=o?[]:null,c=l.W=v(t,null);De.K||S(Le.body,De.K=new Map),e[u]=n,e.removeAttribute(u),j(c,s,[],i,e,e,n),s.map((e=>{const n=e.v+"."+e.k,l=De.K.get(n),s=e.p;l&&Ie&&""===l["s-en"]&&l.parentNode.insertBefore(s,l.nextSibling),o||(s["s-hn"]=t,l&&(s["s-ol"]=l,s["s-ol"]["s-nr"]=s)),De.K.delete(n)})),o&&i.map((e=>{e&&o.appendChild(e)}))})(e,n.R,l,t)}l||12&n.h&&de(e);{let n=e;for(;n=n.parentNode||n.host;)if(1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){Y(t,t.D=n);break}}n.H&&Object.entries(n.H).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n)=>{let l;if(0==(32&t.h)){t.h|=32;{if(l=Ce(n),l.then){const e=()=>{};l=await l,e()}l.isProxied||(n.q=l.watchers,ue(l,n,2),l.isProxied=!0);const e=()=>{};t.h|=8;try{new l(t)}catch(e){xe(e)}t.h&=-9,t.h|=128,e(),ae(t.I)}if(l.style){let o=l.style;"string"!=typeof o&&(o=o[t.O=(e=>Pe.map((t=>t(e))).find((e=>!!e)))(e)]);const s=D(n,t.O);if(!Re.has(s)){const e=()=>{};T(s,o,!!(1&n.h)),e()}}}const o=t.D,s=()=>Z(t,!0);o&&o["s-rc"]?o["s-rc"].push(s):s()})(e,t,n)}l()}},de=e=>{const t=e["s-cr"]=Le.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},he=e=>{re(e,"disconnectedCallback")},ye=(e,t={})=>{var n;const l=[],o=t.exclude||[],s=Te.customElements,i=Le.head,c=i.querySelector("meta[charset]"),r=Le.createElement("style"),f=[],u=Le.querySelectorAll(`[${a}]`);let $,d=!0,h=0;for(Object.assign(De,t),De.t=new URL(t.resourcesUrl||"./",Le.baseURI).href,De.h|=2;h<u.length;h++)T(u[h].getAttribute(a),E(u[h].innerHTML),!0);e.map((e=>{e[1].map((t=>{var n;const i={h:t[0],R:t[1],H:t[2],G:t[3]};i.H=t[2],i.G=t[3],i.A=[],i.q=null!==(n=t[4])&&void 0!==n?n:{};const c=i.R,r=class extends HTMLElement{constructor(e){super(e),Se(e=this,i),1&i.h&&e.attachShadow({mode:"open",delegatesFocus:!!(16&i.h)})}connectedCallback(){$&&(clearTimeout($),$=null),d?f.push(this):De.jmp((()=>$e(this)))}disconnectedCallback(){De.jmp((()=>(async()=>{if(0==(1&De.h)){const e=ke(this);e.X&&(e.X.map((e=>e())),e.X=void 0),(null==e?void 0:e.I)?he(e.I):(null==e?void 0:e.J)&&e.J.then((()=>he(e.I)))}})()))}componentOnReady(){return ke(this).J}};i.Y=e[0],o.includes(c)||s.get(c)||(l.push(c),s.define(c,ue(r,i,1)))}))}));{r.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles","");const e=null!==(n=De.C)&&void 0!==n?n:m(Le);null!=e&&r.setAttribute("nonce",e),i.insertBefore(r,c?c.nextSibling:i.firstChild)}d=!1,f.length?f.map((e=>e.connectedCallback())):De.jmp((()=>$=setTimeout(ce,30)))},me=(e,t,n)=>{n&&n.map((([n,l,o])=>{const s=ve(e,n),i=pe(t,o),c=be(n);De.ael(s,l,i,c),(t.X=t.X||[]).push((()=>De.rel(s,l,i,c)))}))},pe=(e,t)=>n=>{try{256&e.h?e.I[t](n):(e.N=e.N||[]).push([t,n])}catch(e){xe(e)}},ve=(e,t)=>4&t?Le:8&t?Te:16&t?Le.body:e,be=e=>0!=(2&e),we=e=>De.C=e,ge=new WeakMap,ke=e=>ge.get(e),je=(e,t)=>ge.set(t.I=e,t),Se=(e,t)=>{const n={h:0,M:e,U:t,V:new Map};return n._=new Promise((e=>n.B=e)),n.J=new Promise((e=>n.F=e)),e["s-p"]=[],e["s-rc"]=[],me(e,n,t.G),ge.set(e,n)},Oe=(e,t)=>t in e,xe=(e,t)=>(0,console.error)(e,t),Me=new Map,Ce=e=>{const t=e.R.replace(/-/g,"_"),n=e.Y,l=Me.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(Me.set(n,e),e[t])),xe)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},Re=new Map,Pe=[],Te="undefined"!=typeof window?window:{},Le=Te.document||{head:{}},De={h:0,t:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},Ee=e=>{Object.assign(De,e)},Ie=!0,Ne=e=>Promise.resolve(e),Ue=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),We=[],Ae=[],Fe=(e,t)=>n=>{e.push(n),c||(c=!0,t&&4&De.h?qe(He):De.raf(He))},Be=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){xe(e)}e.length=0},He=()=>{Be(We),Be(Ae),(c=We.length>0)&&De.raf(He)},qe=e=>Ne().then(e),Ve=Fe(We,!1),_e=Fe(Ae,!0);export{r as B,b as H,Ee as a,ye as b,O as c,C as d,Ve as e,M as f,x as g,p as h,ie as i,f as j,Ne as p,je as r,we as s,_e as w}