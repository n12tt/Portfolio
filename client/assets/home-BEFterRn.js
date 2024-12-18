import{w as vn}from"./with-props-BXkCMI4n.js";import{l as h,p as pt,q as xn,t as Ce,r as Jt}from"./chunk-D52XG6IA-B2emolDZ.js";const wn=()=>h.jsx("nav",{className:"p-4 bg-gray-800 text-white",children:h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx(pt,{to:"/",className:"text-2xl font-bold",children:"My 3D Portfolio"}),h.jsxs("div",{children:[h.jsx(pt,{to:"/",className:"mr-4 hover:text-gray-400",children:"Home"}),h.jsx(pt,{to:"/about",className:"hover:text-gray-400",children:"About"})]})]})}),An="modulepreload",Pn=function(t){return"/"+t},Zt={},kn=function(e,n,a){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),i=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(n.map(c=>{if(c=Pn(c),c in Zt)return;Zt[c]=!0;const f=c.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":An,f||(m.as="script"),m.crossOrigin="",m.href=c,i&&m.setAttribute("nonce",i),document.head.appendChild(m),f)return new Promise((p,y)=>{m.addEventListener("load",p),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(s){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s}return r.then(s=>{for(const i of s||[])i.status==="rejected"&&o(i.reason);return e().catch(o)})};/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Sn(t,e,n){return(e=En(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function te(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?te(Object(n),!0).forEach(function(a){Sn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function On(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function En(t){var e=On(t,"string");return typeof e=="symbol"?e:e+""}const ee=()=>{};let Wt={},Te={},_e=null,Fe={mark:ee,measure:ee};try{typeof window<"u"&&(Wt=window),typeof document<"u"&&(Te=document),typeof MutationObserver<"u"&&(_e=MutationObserver),typeof performance<"u"&&(Fe=performance)}catch{}const{userAgent:ne=""}=Wt.navigator||{},D=Wt,b=Te,ae=_e,tt=Fe;D.document;const j=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",je=~ne.indexOf("MSIE")||~ne.indexOf("Trident/");var Nn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,In=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Me={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Cn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},De=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],A="classic",lt="duotone",Tn="sharp",_n="sharp-duotone",Le=[A,lt,Tn,_n],Fn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},jn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Mn=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Dn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ln=["fak","fa-kit","fakd","fa-kit-duotone"],re={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Rn=["kit"],zn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Wn=["fak","fakd"],Un={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},oe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Yn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Hn=["fak","fa-kit","fakd","fa-kit-duotone"],$n={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Gn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Xn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},wt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Bn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],At=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Yn,...Bn],Vn=["solid","regular","light","thin","duotone","brands"],Re=[1,2,3,4,5,6,7,8,9,10],qn=Re.concat([11,12,13,14,15,16,17,18,19,20]),Kn=[...Object.keys(Xn),...Vn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY].concat(Re.map(t=>"".concat(t,"x"))).concat(qn.map(t=>"w-".concat(t))),Qn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const _="___FONT_AWESOME___",Pt=16,ze="fa",We="svg-inline--fa",W="data-fa-i2svg",kt="data-fa-pseudo-element",Jn="data-fa-pseudo-element-pending",Ut="data-prefix",Yt="data-icon",se="fontawesome-i2svg",Zn="async",ta=["HTML","HEAD","STYLE","SCRIPT"],Ue=(()=>{try{return!0}catch{return!1}})();function J(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[A]}})}const Ye=l({},Me);Ye[A]=l(l(l(l({},{"fa-duotone":"duotone"}),Me[A]),re.kit),re["kit-duotone"]);const ea=J(Ye),St=l({},Dn);St[A]=l(l(l(l({},{duotone:"fad"}),St[A]),oe.kit),oe["kit-duotone"]);const ie=J(St),Ot=l({},wt);Ot[A]=l(l({},Ot[A]),Un.kit);const Ht=J(Ot),Et=l({},Gn);Et[A]=l(l({},Et[A]),zn.kit);J(Et);const na=Nn,He="fa-layers-text",aa=In,ra=l({},Fn);J(ra);const oa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gt=Cn,sa=[...Rn,...Kn],V=D.FontAwesomeConfig||{};function ia(t){var e=b.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function la(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}b&&typeof b.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=la(ia(n));r!=null&&(V[a]=r)});const $e={styleDefault:"solid",familyDefault:A,cssPrefix:ze,replacementClass:We,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V.familyPrefix&&(V.cssPrefix=V.familyPrefix);const G=l(l({},$e),V);G.autoReplaceSvg||(G.observeMutations=!1);const u={};Object.keys($e).forEach(t=>{Object.defineProperty(u,t,{enumerable:!0,set:function(e){G[t]=e,q.forEach(n=>n(u))},get:function(){return G[t]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(t){G.cssPrefix=t,q.forEach(e=>e(u))},get:function(){return G.cssPrefix}});D.FontAwesomeConfig=u;const q=[];function fa(t){return q.push(t),()=>{q.splice(q.indexOf(t),1)}}const M=Pt,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ca(t){if(!t||!j)return;const e=b.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=b.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}return b.head.insertBefore(e,a),t}const ua="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function K(){let t=12,e="";for(;t-- >0;)e+=ua[Math.random()*62|0];return e}function X(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function $t(t){return t.classList?X(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ge(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function da(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ge(t[n]),'" '),"").trim()}function ft(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Gt(t){return t.size!==I.size||t.x!==I.x||t.y!==I.y||t.rotate!==I.rotate||t.flipX||t.flipY}function ma(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),i="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(o," ").concat(s," ").concat(i)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:f}}function pa(t){let{transform:e,width:n=Pt,height:a=Pt,startCentered:r=!1}=t,o="";return r&&je?o+="translate(".concat(e.x/M-n/2,"em, ").concat(e.y/M-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/M,"em), calc(-50% + ").concat(e.y/M,"em)) "):o+="translate(".concat(e.x/M,"em, ").concat(e.y/M,"em) "),o+="scale(".concat(e.size/M*(e.flipX?-1:1),", ").concat(e.size/M*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var ga=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Xe(){const t=ze,e=We,n=u.cssPrefix,a=u.replacementClass;let r=ga;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),i=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(i,".".concat(a))}return r}let le=!1;function ht(){u.autoAddCss&&!le&&(ca(Xe()),le=!0)}var ha={mixout(){return{dom:{css:Xe,insertCss:ht}}},hooks(){return{beforeDOMElementCreation(){ht()},beforeI2svg(){ht()}}}};const F=D||{};F[_]||(F[_]={});F[_].styles||(F[_].styles={});F[_].hooks||(F[_].hooks={});F[_].shims||(F[_].shims=[]);var C=F[_];const Be=[],Ve=function(){b.removeEventListener("DOMContentLoaded",Ve),ot=1,Be.map(t=>t())};let ot=!1;j&&(ot=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),ot||b.addEventListener("DOMContentLoaded",Ve));function ba(t){j&&(ot?setTimeout(t,0):Be.push(t))}function Z(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ge(t):"<".concat(e," ").concat(da(n),">").concat(a.map(Z).join(""),"</").concat(e,">")}function fe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var bt=function(e,n,a,r){var o=Object.keys(e),s=o.length,i=n,c,f,d;for(a===void 0?(c=1,d=e[o[0]]):(c=0,d=a);c<s;c++)f=o[c],d=i(d,e[f],f,e);return d};function ya(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Nt(t){const e=ya(t);return e.length===1?e[0].toString(16):null}function va(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function ce(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function It(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=ce(e);typeof C.hooks.addPack=="function"&&!a?C.hooks.addPack(t,ce(e)):C.styles[t]=l(l({},C.styles[t]||{}),r),t==="fas"&&It("fa",e)}const{styles:Q,shims:xa}=C,qe=Object.keys(Ht),wa=qe.reduce((t,e)=>(t[e]=Object.keys(Ht[e]),t),{});let Xt=null,Ke={},Qe={},Je={},Ze={},tn={};function Aa(t){return~sa.indexOf(t)}function Pa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Aa(r)?r:null}const en=()=>{const t=a=>bt(Q,(r,o,s)=>(r[s]=bt(o,a,{}),r),{});Ke=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(i=>typeof i=="number").forEach(i=>{a[i.toString(16)]=o}),a)),Qe=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(i=>typeof i=="string").forEach(i=>{a[i]=o}),a)),tn=t((a,r,o)=>{const s=r[2];return a[o]=o,s.forEach(i=>{a[i]=o}),a});const e="far"in Q||u.autoFetchSvg,n=bt(xa,(a,r)=>{const o=r[0];let s=r[1];const i=r[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:i}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:i}),a},{names:{},unicodes:{}});Je=n.names,Ze=n.unicodes,Xt=ct(u.styleDefault,{family:u.familyDefault})};fa(t=>{Xt=ct(t.styleDefault,{family:u.familyDefault})});en();function Bt(t,e){return(Ke[t]||{})[e]}function ka(t,e){return(Qe[t]||{})[e]}function z(t,e){return(tn[t]||{})[e]}function nn(t){return Je[t]||{prefix:null,iconName:null}}function Sa(t){const e=Ze[t],n=Bt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function L(){return Xt}const an=()=>({prefix:null,iconName:null,rest:[]});function Oa(t){let e=A;const n=qe.reduce((a,r)=>(a[r]="".concat(u.cssPrefix,"-").concat(r),a),{});return Le.forEach(a=>{(t.includes(n[a])||t.some(r=>wa[a].includes(r)))&&(e=a)}),e}function ct(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=A}=e,a=ea[n][t];if(n===lt&&!t)return"fad";const r=ie[n][t]||ie[n][a],o=t in C.styles?t:null;return r||o||null}function Ea(t){let e=[],n=null;return t.forEach(a=>{const r=Pa(u.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function ue(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ut(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=At.concat(Hn),o=ue(t.filter(m=>r.includes(m))),s=ue(t.filter(m=>!At.includes(m))),i=o.filter(m=>(a=m,!De.includes(m))),[c=null]=i,f=Oa(o),d=l(l({},Ea(s)),{},{prefix:ct(c,{family:f})});return l(l(l({},d),Ta({values:t,family:f,styles:Q,config:u,canonical:d,givenPrefix:a})),Na(n,a,d))}function Na(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?nn(r):{},s=z(a,r);return r=o.iconName||s||r,a=o.prefix||a,a==="far"&&!Q.far&&Q.fas&&!u.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ia=Le.filter(t=>t!==A||t!==lt),Ca=Object.keys(wt).filter(t=>t!==A).map(t=>Object.keys(wt[t])).flat();function Ta(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:s={}}=t,i=n===lt,c=e.includes("fa-duotone")||e.includes("fad"),f=s.familyDefault==="duotone",d=a.prefix==="fad"||a.prefix==="fa-duotone";if(!i&&(c||f||d)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ia.includes(n)&&(Object.keys(o).find(p=>Ca.includes(p))||s.autoFetchSvg)){const p=Mn.get(n).defaultShortPrefixId;a.prefix=p,a.iconName=z(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=L()||"fas"),a}class _a{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),r[o]),It(o,r[o]);const s=Ht[A][o];s&&It(s,r[o]),en()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:s,icon:i}=a[r],c=i[2];e[o]||(e[o]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[o][f]=i)}),e[o][s]=i}),e}}let de=[],Y={};const $={},Fa=Object.keys($);function ja(t,e){let{mixoutsTo:n}=e;return de=t,Y={},Object.keys($).forEach(a=>{Fa.indexOf(a)===-1&&delete $[a]}),de.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(s=>{Y[s]||(Y[s]=[]),Y[s].push(o[s])})}a.provides&&a.provides($)}),n}function Ct(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(Y[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function U(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(Y[t]||[]).forEach(o=>{o.apply(null,n)})}function R(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return $[t]?$[t].apply(null,e):void 0}function Tt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||L();if(e)return e=z(n,e)||e,fe(rn.definitions,n,e)||fe(C.styles,n,e)}const rn=new _a,Ma=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,U("noAuto")},Da={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(U("beforeI2svg",t),R("pseudoElements2svg",t),R("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,ba(()=>{Ra({autoReplaceSvgRoot:e}),U("watch",t)})}},La={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:z(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ct(t[0]);return{prefix:n,iconName:z(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(u.cssPrefix,"-"))>-1||t.match(na))){const e=ut(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||L(),iconName:z(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=L();return{prefix:e,iconName:z(e,t)||t}}}},S={noAuto:Ma,config:u,dom:Da,parse:La,library:rn,findIconDefinition:Tt,toHtml:Z},Ra=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=b}=t;(Object.keys(C.styles).length>0||u.autoFetchSvg)&&j&&u.autoReplaceSvg&&S.dom.i2svg({node:e})};function dt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Z(n))}}),Object.defineProperty(t,"node",{get:function(){if(!j)return;const n=b.createElement("div");return n.innerHTML=t.html,n.children}}),t}function za(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:s}=t;if(Gt(s)&&n.found&&!a.found){const{width:i,height:c}=n,f={x:i/c/2,y:.5};r.style=ft(l(l({},o),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Wa(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:s}),children:a}]}]}function Vt(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:s,title:i,maskId:c,titleId:f,extra:d,watchable:m=!1}=t,{width:p,height:y}=n.found?n:e,k=Wn.includes(a),O=[u.replacementClass,r?"".concat(u.cssPrefix,"-").concat(r):""].filter(E=>d.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(d.classes).join(" ");let v={children:[],attributes:l(l({},d.attributes),{},{"data-prefix":a,"data-icon":r,class:O,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(y)})};const w=k&&!~d.classes.indexOf("fa-fw")?{width:"".concat(p/y*16*.0625,"em")}:{};m&&(v.attributes[W]=""),i&&(v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(f||K())},children:[i]}),delete v.attributes.title);const x=l(l({},v),{},{prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:o,symbol:s,styles:l(l({},w),d.styles)}),{children:P,attributes:T}=n.found&&e.found?R("generateAbstractMask",x)||{children:[],attributes:{}}:R("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=P,x.attributes=T,s?Wa(x):za(x)}function me(t){const{content:e,width:n,height:a,transform:r,title:o,extra:s,watchable:i=!1}=t,c=l(l(l({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});i&&(c[W]="");const f=l({},s.styles);Gt(r)&&(f.transform=pa({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const d=ft(f);d.length>0&&(c.style=d);const m=[];return m.push({tag:"span",attributes:c,children:[e]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function Ua(t){const{content:e,title:n,extra:a}=t,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=ft(a.styles);o.length>0&&(r.style=o);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:yt}=C;function _t(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(gt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(gt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Ya={found:!1,width:512,height:512};function Ha(t,e){!Ue&&!u.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ft(t,e){let n=e;return e==="fa"&&u.styleDefault!==null&&(e=L()),new Promise((a,r)=>{if(n==="fa"){const o=nn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&yt[e]&&yt[e][t]){const o=yt[e][t];return a(_t(o))}Ha(t,e),a(l(l({},Ya),{},{icon:u.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}const pe=()=>{},jt=u.measurePerformance&&tt&&tt.mark&&tt.measure?tt:{mark:pe,measure:pe},B='FA "6.7.1"',$a=t=>(jt.mark("".concat(B," ").concat(t," begins")),()=>on(t)),on=t=>{jt.mark("".concat(B," ").concat(t," ends")),jt.measure("".concat(B," ").concat(t),"".concat(B," ").concat(t," begins"),"".concat(B," ").concat(t," ends"))};var qt={begin:$a,end:on};const at=()=>{};function ge(t){return typeof(t.getAttribute?t.getAttribute(W):null)=="string"}function Ga(t){const e=t.getAttribute?t.getAttribute(Ut):null,n=t.getAttribute?t.getAttribute(Yt):null;return e&&n}function Xa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(u.replacementClass)}function Ba(){return u.autoReplaceSvg===!0?rt.replace:rt[u.autoReplaceSvg]||rt.replace}function Va(t){return b.createElementNS("http://www.w3.org/2000/svg",t)}function qa(t){return b.createElement(t)}function sn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Va:qa}=e;if(typeof t=="string")return b.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild(sn(o,{ceFn:n}))}),a}function Ka(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const rt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(sn(n),e)}),e.getAttribute(W)===null&&u.keepOriginalSource){let n=b.createComment(Ka(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~$t(e).indexOf(u.replacementClass))return rt.replace(t);const a=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,i)=>(i===u.replacementClass||i.match(a)?s.toSvg.push(i):s.toNode.push(i),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>Z(o)).join(`
`);e.setAttribute(W,""),e.innerHTML=r}};function he(t){t()}function ln(t,e){const n=typeof e=="function"?e:at;if(t.length===0)n();else{let a=he;u.mutateApproach===Zn&&(a=D.requestAnimationFrame||he),a(()=>{const r=Ba(),o=qt.begin("mutate");t.map(r),o(),n()})}}let Kt=!1;function fn(){Kt=!0}function Mt(){Kt=!1}let st=null;function be(t){if(!ae||!u.observeMutations)return;const{treeCallback:e=at,nodeCallback:n=at,pseudoElementsCallback:a=at,observeMutationsRoot:r=b}=t;st=new ae(o=>{if(Kt)return;const s=L();X(o).forEach(i=>{if(i.type==="childList"&&i.addedNodes.length>0&&!ge(i.addedNodes[0])&&(u.searchPseudoElements&&a(i.target),e(i.target)),i.type==="attributes"&&i.target.parentNode&&u.searchPseudoElements&&a(i.target.parentNode),i.type==="attributes"&&ge(i.target)&&~oa.indexOf(i.attributeName))if(i.attributeName==="class"&&Ga(i.target)){const{prefix:c,iconName:f}=ut($t(i.target));i.target.setAttribute(Ut,c||s),f&&i.target.setAttribute(Yt,f)}else Xa(i.target)&&n(i.target)})}),j&&st.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Qa(){st&&st.disconnect()}function Ja(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),s=o[0],i=o.slice(1);return s&&i.length>0&&(a[s]=i.join(":").trim()),a},{})),n}function Za(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ut($t(t));return r.prefix||(r.prefix=L()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ka(r.prefix,t.innerText)||Bt(r.prefix,Nt(t.innerText))),!r.iconName&&u.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function tr(t){const e=X(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return u.autoA11y&&(n?e["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||K()):(e["aria-hidden"]="true",e.focusable="false")),e}function er(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ye(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Za(t),o=tr(t),s=Ct("parseNodeAttributes",{},t);let i=e.styleParser?Ja(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:i,attributes:o}},s)}const{styles:nr}=C;function cn(t){const e=u.autoReplaceSvg==="nest"?ye(t,{styleParser:!1}):ye(t);return~e.extra.classes.indexOf(He)?R("generateLayersText",t,e):R("generateSvgReplacementMutation",t,e)}function ar(){return[...Ln,...At]}function ve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();const n=b.documentElement.classList,a=d=>n.add("".concat(se,"-").concat(d)),r=d=>n.remove("".concat(se,"-").concat(d)),o=u.autoFetchSvg?ar():De.concat(Object.keys(nr));o.includes("fa")||o.push("fa");const s=[".".concat(He,":not([").concat(W,"])")].concat(o.map(d=>".".concat(d,":not([").concat(W,"])"))).join(", ");if(s.length===0)return Promise.resolve();let i=[];try{i=X(t.querySelectorAll(s))}catch{}if(i.length>0)a("pending"),r("complete");else return Promise.resolve();const c=qt.begin("onTree"),f=i.reduce((d,m)=>{try{const p=cn(m);p&&d.push(p)}catch(p){Ue||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise((d,m)=>{Promise.all(f).then(p=>{ln(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),d()})}).catch(p=>{c(),m(p)})})}function rr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cn(t).then(n=>{n&&ln([n],e)})}function or(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Tt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Tt(r||{})),t(a,l(l({},n),{},{mask:r}))}}const sr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,symbol:a=!1,mask:r=null,maskId:o=null,title:s=null,titleId:i=null,classes:c=[],attributes:f={},styles:d={}}=e;if(!t)return;const{prefix:m,iconName:p,icon:y}=t;return dt(l({type:"icon"},t),()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:e}),u.autoA11y&&(s?f["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(i||K()):(f["aria-hidden"]="true",f.focusable="false")),Vt({icons:{main:_t(y),mask:r?_t(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:p,transform:l(l({},I),n),symbol:a,title:s,maskId:o,titleId:i,extra:{attributes:f,styles:d,classes:c}})))};var ir={mixout(){return{icon:or(sr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ve,t.nodeCallback=rr,t}}},provides(t){t.i2svg=function(e){const{node:n=b,callback:a=()=>{}}=e;return ve(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:s,transform:i,symbol:c,mask:f,maskId:d,extra:m}=n;return new Promise((p,y)=>{Promise.all([Ft(a,s),f.iconName?Ft(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[O,v]=k;p([e,Vt({icons:{main:O,mask:v},prefix:s,iconName:a,transform:i,symbol:c,maskId:d,title:r,titleId:o,extra:m,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:s}=e;const i=ft(s);i.length>0&&(a.style=i);let c;return Gt(o)&&(c=R("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},lr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return dt({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},fr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return dt({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),Ua({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(u.cssPrefix,"-layers-counter"),...a]}})))}}}},cr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,title:a=null,classes:r=[],attributes:o={},styles:s={}}=e;return dt({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),me({content:t,transform:l(l({},I),n),title:a,extra:{attributes:o,styles:s,classes:["".concat(u.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let s=null,i=null;if(je){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/c,i=f.height/c}return u.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,me({content:e.innerHTML,width:s,height:i,transform:r,title:a,extra:o,watchable:!0})])}}};const ur=new RegExp('"',"ug"),xe=[1105920,1112319],we=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),jn),Qn),$n),Dt=Object.keys(we).reduce((t,e)=>(t[e.toLowerCase()]=we[e],t),{}),dr=Object.keys(Dt).reduce((t,e)=>{const n=Dt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function mr(t){const e=t.replace(ur,""),n=va(e,0),a=n>=xe[0]&&n<=xe[1],r=e.length===2?e[0]===e[1]:!1;return{value:Nt(r?e[0]:e),isSecondary:a||r}}function pr(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Dt[n]||{})[r]||dr[n]}function Ae(t,e){const n="".concat(Jn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=X(t.children).filter(p=>p.getAttribute(kt)===e)[0],i=D.getComputedStyle(t,e),c=i.getPropertyValue("font-family"),f=c.match(aa),d=i.getPropertyValue("font-weight"),m=i.getPropertyValue("content");if(s&&!f)return t.removeChild(s),a();if(f&&m!=="none"&&m!==""){const p=i.getPropertyValue("content");let y=pr(c,d);const{value:k,isSecondary:O}=mr(p),v=f[0].startsWith("FontAwesome");let w=Bt(y,k),x=w;if(v){const P=Sa(k);P.iconName&&P.prefix&&(w=P.iconName,y=P.prefix)}if(w&&!O&&(!s||s.getAttribute(Ut)!==y||s.getAttribute(Yt)!==x)){t.setAttribute(n,x),s&&t.removeChild(s);const P=er(),{extra:T}=P;T.attributes[kt]=e,Ft(w,y).then(E=>{const bn=Vt(l(l({},P),{},{icons:{main:E,mask:an()},prefix:y,iconName:x,extra:T,watchable:!0})),mt=b.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(mt,t.firstChild):t.appendChild(mt),mt.outerHTML=bn.map(yn=>Z(yn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function gr(t){return Promise.all([Ae(t,"::before"),Ae(t,"::after")])}function hr(t){return t.parentNode!==document.head&&!~ta.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(kt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Pe(t){if(j)return new Promise((e,n)=>{const a=X(t.querySelectorAll("*")).filter(hr).map(gr),r=qt.begin("searchPseudoElements");fn(),Promise.all(a).then(()=>{r(),Mt(),e()}).catch(()=>{r(),Mt(),n()})})}var br={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Pe,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=b}=e;u.searchPseudoElements&&Pe(n)}}};let ke=!1;var yr={mixout(){return{dom:{unwatch(){fn(),ke=!0}}}},hooks(){return{bootstrap(){be(Ct("mutationObserverCallbacks",{}))},noAuto(){Qa()},watch(t){const{observeMutationsRoot:e}=t;ke?Mt():be(Ct("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Se=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let s=r.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var vr={mixout(){return{parse:{transform:t=>Se(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Se(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(i," ").concat(c," ").concat(f)},m={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:d,path:m};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),p.path)}]}]}}}};const vt={x:0,y:0,width:"100%",height:"100%"};function Oe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function xr(t){return t.tag==="g"?t.children:[t]}var wr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ut(n.split(" ").map(r=>r.trim())):an();return a.prefix||(a.prefix=L()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:s,transform:i}=e;const{width:c,icon:f}=r,{width:d,icon:m}=o,p=ma({transform:i,containerWidth:d,iconWidth:c}),y={tag:"rect",attributes:l(l({},vt),{},{fill:"white"})},k=f.children?{children:f.children.map(Oe)}:{},O={tag:"g",attributes:l({},p.inner),children:[Oe(l({tag:f.tag,attributes:l(l({},f.attributes),p.path)},k))]},v={tag:"g",attributes:l({},p.outer),children:[O]},w="mask-".concat(s||K()),x="clip-".concat(s||K()),P={tag:"mask",attributes:l(l({},vt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,v]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:xr(m)},P]};return n.push(T,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(w,")")},vt)}),{children:n,attributes:a}}}},Ar={provides(t){let e=!1;D.matchMedia&&(e=D.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=l(l({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Pr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},kr=[ha,ir,lr,fr,cr,br,yr,vr,wr,Ar,Pr];ja(kr,{mixoutsTo:S});S.noAuto;S.config;S.library;S.dom;const Lt=S.parse;S.findIconDefinition;S.toHtml;const Sr=S.icon;S.layer;S.text;S.counter;var un={exports:{}},Or="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Er=Or,Nr=Er;function dn(){}function mn(){}mn.resetWarningCache=dn;var Ir=function(){function t(a,r,o,s,i,c){if(c!==Nr){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:mn,resetWarningCache:dn};return n.PropTypes=n,n};un.exports=Ir();var Cr=un.exports;const g=xn(Cr);function Ee(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ee(Object(n),!0).forEach(function(a){H(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function it(t){"@babel/helpers - typeof";return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},it(t)}function H(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Tr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function _r(t,e){if(t==null)return{};var n=Tr(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Rt(t){return Fr(t)||jr(t)||Mr(t)||Dr()}function Fr(t){if(Array.isArray(t))return zt(t)}function jr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Mr(t,e){if(t){if(typeof t=="string")return zt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zt(t,e)}}function zt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Dr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,s=t.shake,i=t.flash,c=t.spin,f=t.spinPulse,d=t.spinReverse,m=t.pulse,p=t.fixedWidth,y=t.inverse,k=t.border,O=t.listItem,v=t.flip,w=t.size,x=t.rotation,P=t.pull,T=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":s,"fa-flash":i,"fa-spin":c,"fa-spin-reverse":d,"fa-spin-pulse":f,"fa-pulse":m,"fa-fw":p,"fa-inverse":y,"fa-border":k,"fa-li":O,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},H(e,"fa-".concat(w),typeof w<"u"&&w!==null),H(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),H(e,"fa-pull-".concat(P),typeof P<"u"&&P!==null),H(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(E){return T[E]?E:null}).filter(function(E){return E})}function Rr(t){return t=t-0,t===t}function pn(t){return Rr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var zr=["style"];function Wr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ur(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=pn(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[Wr(r)]=o:e[r]=o,e},{})}function gn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(c){return gn(t,c)}),r=Object.keys(e.attributes||{}).reduce(function(c,f){var d=e.attributes[f];switch(f){case"class":c.attrs.className=d,delete e.attributes.class;break;case"style":c.attrs.style=Ur(d);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=d:c.attrs[pn(f)]=d}return c},{attrs:{}}),o=n.style,s=o===void 0?{}:o,i=_r(n,zr);return r.attrs.style=N(N({},r.attrs.style),s),t.apply(void 0,[e.tag,N(N({},r.attrs),i)].concat(Rt(a)))}var hn=!1;try{hn=!0}catch{}function Yr(){if(!hn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ne(t){if(t&&it(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Lt.icon)return Lt.icon(t);if(t===null)return null;if(t&&it(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function xt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?H({},t,e):{}}var Ie={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Qt=Ce.forwardRef(function(t,e){var n=N(N({},Ie),t),a=n.icon,r=n.mask,o=n.symbol,s=n.className,i=n.title,c=n.titleId,f=n.maskId,d=Ne(a),m=xt("classes",[].concat(Rt(Lr(n)),Rt((s||"").split(" ")))),p=xt("transform",typeof n.transform=="string"?Lt.transform(n.transform):n.transform),y=xt("mask",Ne(r)),k=Sr(d,N(N(N(N({},m),p),y),{},{symbol:o,title:i,titleId:c,maskId:f}));if(!k)return Yr("Could not find icon",d),null;var O=k.abstract,v={ref:e};return Object.keys(n).forEach(function(w){Ie.hasOwnProperty(w)||(v[w]=n[w])}),Hr(O[0],v)});Qt.displayName="FontAwesomeIcon";Qt.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};var Hr=gn.bind(null,Ce.createElement);/*!
 * Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const $r={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},nt=({modelPath:t,altText:e,solidWorksPath:n,drawingPath:a,annotations:r=[]})=>{Jt.useEffect(()=>{kn(()=>import("./model-viewer-D0X5m69S.js"),[])},[]);const[o,s]=Jt.useState(!1),i=()=>s(!o);return h.jsx("div",{className:"relative",children:h.jsxs("model-viewer",{src:t,alt:e,"auto-rotate":!0,"camera-controls":!0,className:"w-full h-[500px] bg-gray-200 dark:bg-gray-900","environment-image":"neutral","shadow-intensity":"1",children:[r.map((c,f)=>h.jsx("button",{slot:`hotspot-${f}`,"data-position":c.position,"data-normal":"0m 1m 0m","data-visibility-attribute":"visible",className:"annotation",children:c.label},f)),h.jsx("button",{className:"absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition",title:"Download Files",onClick:i,children:h.jsx(Qt,{icon:$r,size:"lg"})}),o&&h.jsxs("div",{className:"absolute bottom-16 right-4 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-10",children:[h.jsx("a",{href:n,download:!0,className:"block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-700",children:"Download SolidWorks File"}),h.jsx("a",{href:a,download:!0,className:"block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-700",children:"Download Drawing File"})]})]})})},Gr=()=>h.jsxs("div",{children:[h.jsx(wn,{}),h.jsxs("div",{className:"p-8",children:[h.jsx("h1",{className:"text-4xl font-bold mb-8",children:"My 3D models"}),h.jsx("section",{className:"space-y-12",children:h.jsxs("div",{children:[h.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Baseplate Model"}),h.jsx(nt,{modelPath:"/models/baseplate.glb",altText:"Baseplate 3D Model",solidWorksPath:"/models/baseplate.SLDPRT",drawingPath:"/models/baseplate_drawing.SLDDRW"})]})}),h.jsx("br",{}),h.jsx("section",{className:"space-y-12",children:h.jsxs("div",{children:[h.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Stairs Model"}),h.jsx(nt,{modelPath:"/models/Stairs/stairs.glb",altText:"3D Stairs Model",solidWorksPath:"/models/Stairs/Stairs.SLDPRT",drawingPath:"/models/Stairs/Stairs.SLDDRW"})]})}),h.jsx("br",{}),h.jsx("section",{className:"space-y-12",children:h.jsxs("div",{children:[h.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Dome Model"}),h.jsx(nt,{modelPath:"/models/Dome/assem5.glb",altText:"3D Stairs Model",solidWorksPath:"/models/Stairs/Stairs.SLDPRT",drawingPath:"/models/Stairs/Stairs.SLDDRW"})]})}),h.jsx("br",{}),h.jsx("section",{className:"space-y-12",children:h.jsxs("div",{children:[h.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Dome Model"}),h.jsx(nt,{modelPath:"/models/Roller/roller.glb",altText:"3D Stairs Model",solidWorksPath:"/models/Stairs/Roller.SLDPRT",drawingPath:"/models/Stairs/Stairs.SLDDRW"})]})})]})]}),Vr=vn(Gr);export{Vr as default};
