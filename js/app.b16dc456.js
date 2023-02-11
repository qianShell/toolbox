(()=>{"use strict";var e={4647:(e,r,t)=>{t(8964);var o=t(1957),n=t(1947),a=t(499),i=t(9835);function l(e,r,t,o,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});var c=t(1639);const u=(0,c.Z)(s,[["render",l]]),d=u;var f=t(3340),p=t(8339);const h=[{path:"/",component:()=>Promise.all([t.e(736),t.e(106)]).then(t.bind(t,1106))},{path:"/sseditor",component:()=>Promise.all([t.e(736),t.e(616)]).then(t.bind(t,2616))},{path:"/:catchAll(.*)*",redirect:"/"}],g=h,v=(0,f.BC)((function(){const e=p.PO,r=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:g,history:e("/")});return r}));async function b(e,r){const t=e(d);t.use(n.Z,r);const o=(0,a.Xl)("function"===typeof v?await v({}):v);return{app:t,router:o}}var m=t(2121),y=t(4328),w=t(3703);const P={config:{},plugins:{Dialog:m.Z,Notify:y.Z,LocalStorage:w.Z}},S="/";async function O({app:e,router:r},t){let o=!1;const n=e=>{try{return r.resolve(e).href}catch(t){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const r=n(e);null!==r&&(window.location.href=r)},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===o&&s<t.length;s++)try{await t[s]({app:e,router:r,ssrContext:null,redirect:a,urlPath:i,publicPath:S})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(r),e.mount("#q-app"))}b(o.ri,P).then((e=>{const[r,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[r]([Promise.resolve().then(t.bind(t,6288)),Promise.resolve().then(t.bind(t,1569))]).then((r=>{const t=o(r).filter((e=>"function"===typeof e));O(e,t)}))}))},1569:(e,r,t)=>{t.r(r),t.d(r,{api:()=>i,default:()=>l});var o=t(3340),n=t(9981),a=t.n(n);const i=a().create({baseURL:"https://api.example.com"}),l=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},6288:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});var o=t(3340),n=t(7712);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},l=(0,o.xr)((({app:e})=>{const r=(0,n.o)({locale:"en-US",globalInjection:!0,messages:i});e.config.globalProperties.$utils={getPreference(r,t){const o=e.config.globalProperties.$q.localStorage.getItem("preferences");return o?o[r]??t:(this.resetPreference(),this.getPreference(r,t))},setPreference(r,t){const o=e.config.globalProperties.$q.localStorage.getItem("preferences");o[r]=t,e.config.globalProperties.$q.localStorage.set("preferences",o)},resetPreference(){e.config.globalProperties.$q.localStorage.set("preferences",{hideHint:!1})}},e.use(r)}))}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=n();void 0!==c&&(r=c)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{106:"d0d102f3",616:"6aae2447"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{106:"166edccf",143:"31d6cfe0",616:"5b4313c8",736:"9bb93f6c"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="toolbox:";t.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==r+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",r+a),l.src=o),e[o]=[n];var f=(r,t)=>{l.onerror=l.onload=null,clearTimeout(p);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(t))),r)return r(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/"})(),(()=>{var e=(e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=a=>{if(n.onerror=n.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,n.parentNode.removeChild(n),o(s)}};return n.onerror=n.onload=a,n.href=r,document.head.appendChild(n),n},r=(e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=t[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===r))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===r)return n}},o=o=>new Promise(((n,a)=>{var i=t.miniCssF(o),l=t.p+i;if(r(i,l))return n();e(o,l,n,a)})),n={143:0};t.f.miniCss=(e,r)=>{var t={106:1,616:1};n[e]?r.push(n[e]):0!==n[e]&&t[e]&&r.push(n[e]=o(e).then((()=>{n[e]=0}),(r=>{throw delete n[e],r})))}})(),(()=>{var e={143:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=a);var i=t.p+t.u(r),l=new Error,s=o=>{if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};t.l(i,s,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[i,l,s]=o,c=0;if(i.some((r=>0!==e[r]))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(s)var u=s(t)}for(r&&r(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},o=globalThis["webpackChunktoolbox"]=globalThis["webpackChunktoolbox"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(4647)));o=t.O(o)})();