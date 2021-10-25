(()=>{"use strict";var e={402:(e,r,o)=>{o.d(r,{Z:()=>f});var a=o(81),n=o.n(a),t=o(645),i=o.n(t),s=o(667),c=o.n(s),l=new URL(o(360),o.b),d=new URL(o(857),o.b),p=i()(n()),u=c()(l),h=c()(d);p.push([e.id,"body {\r\n    background: url("+u+") no-repeat center center fixed;\r\n    -webkit-background-size: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n}\r\n\r\nh1 {\r\n    font-weight: 300;\r\n    font-style: italic;\r\n}\r\n\r\np {\r\n    font-weight: 300;\r\n    font-size: 18px;\r\n}\r\n\r\n.paragraph-info span {\r\n    font-weight: 400;\r\n}\r\n\r\n.input-group-text {\r\n    background: url("+h+") no-repeat center;\r\n    padding: 20px;\r\n}\r\n\r\n.paragraph-info-show {\r\n    display: block;\r\n}\r\n\r\n.paragraph-info-hide {\r\n    display: none;\r\n}\r\n\r\n.err-paragraph-show {\r\n    display: block;\r\n}\r\n\r\n.err-paragraph-hide {\r\n    display: none;\r\n}\r\n/*\r\n.form-control {\r\n    font-weight: 300;\r\n}\r\n*/\r\n.button {\r\n    font-weight: 400;\r\n}\r\n\r\n.aqi-color-good {\r\n    background-color: #198754;\r\n    color: #f0f8ff;\r\n    padding: 5px 10px;\r\n    border-radius: 6px;\r\n    box-shadow: 0px 2px 3px 2px #3D3D3D;\r\n}\r\n\r\n.aqi-color-moderate {\r\n    background-color: #f1dc1f;\r\n    color: #272727;\r\n    padding: 5px 10px;\r\n    border-radius: 6px;\r\n    box-shadow: 0px 2px 3px 2px #3D3D3D;\r\n}\r\n\r\n.aqi-color-unhealthy-for-sensitive-groups {\r\n    background-color: #f58b34;\r\n    color: #f0f8ff;\r\n    padding: 5px 10px;\r\n    border-radius: 6px;\r\n    box-shadow: 0px 2px 3px 2px #3D3D3D;\r\n}\r\n\r\n.aqi-color-unhealthy {\r\n    background-color: #c21b45;\r\n    color: #272727;\r\n    padding: 5px 10px;\r\n    border-radius: 6px;\r\n    box-shadow: 0px 2px 3px 2px #3D3D3D;\r\n}\r\n\r\n.aqi-color-very-unhealthy {\r\n    background-color: #7b26db;\r\n    color: #f0f8ff;\r\n    padding: 5px 10px;\r\n    border-radius: 6px;\r\n    box-shadow: 0px 2px 3px 2px #3D3D3D;\r\n}\r\n\r\n.aqi-color-hazardous {\r\n    background-color: #772338;\r\n    color: #f0f8ff;\r\n    padding: 5px 10px;\r\n    border-radius: 6px;\r\n    box-shadow: 0px 2px 3px 2px #3D3D3D;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    body {\r\n        margin: 0px 20px;\r\n    }\r\n    .container {\r\n        margin: 45% 0px;\r\n        padding: 10px 10px;\r\n    }\r\n    .paragraph-info-show {\r\n        display: block;\r\n    }\r\n    .aqi-color-good, \r\n    .aqi-color-moderate, \r\n    .aqi-color-unhealthy-for-sensitive-groups,\r\n    .aqi-color-unhealthy,\r\n    .aqi-color-very-unhealthy,\r\n    .aqi-color-hazardous {\r\n        display: block;\r\n    }\r\n}",""]);const f=p},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var o="",a=void 0!==r[5];return r[4]&&(o+="@supports (".concat(r[4],") {")),r[2]&&(o+="@media ".concat(r[2]," {")),a&&(o+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),o+=e(r),a&&(o+="}"),r[2]&&(o+="}"),r[4]&&(o+="}"),o})).join("")},r.i=function(e,o,a,n,t){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&i[d[0]]||(void 0!==t&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=t),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),r.push(d))}},r}},667:e=>{e.exports=function(e,r){return r||(r={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),r.hash&&(e+=r.hash),/["'() \t\n]|(%20)/.test(e)||r.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function o(e){for(var o=-1,a=0;a<r.length;a++)if(r[a].identifier===e){o=a;break}return o}function a(e,a){for(var t={},i=[],s=0;s<e.length;s++){var c=e[s],l=a.base?c[0]+a.base:c[0],d=t[l]||0,p="".concat(l," ").concat(d);t[l]=d+1;var u=o(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(h);else{var f=n(h,a);a.byIndex=s,r.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function n(e,r){var o=r.domAPI(r);return o.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;o.update(e=r)}else o.remove()}}e.exports=function(e,n){var t=a(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<t.length;i++){var s=o(t[i]);r[s].references--}for(var c=a(e,n),l=0;l<t.length;l++){var d=o(t[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}t=c}}},569:e=>{var r={};e.exports=function(e,o){var a=function(e){if(void 0===r[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}r[e]=o}return r[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(o)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,o)=>{e.exports=function(e){var r=o.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(o){!function(e,r,o){var a="";o.supports&&(a+="@supports (".concat(o.supports,") {")),o.media&&(a+="@media ".concat(o.media," {"));var n=void 0!==o.layer;n&&(a+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),a+=o.css,n&&(a+="}"),o.media&&(a+="}"),o.supports&&(a+="}");var t=o.sourceMap;t&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),r.styleTagTransform(a,e,r.options)}(r,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},360:(e,r,o)=>{e.exports=o.p+"92eb5eb9cb47f96d4611.svg"},857:(e,r,o)=>{e.exports=o.p+"77470f6b397a9385fba5.svg"}},r={};function o(a){var n=r[a];if(void 0!==n)return n.exports;var t=r[a]={id:a,exports:{}};return e[a](t,t.exports,o),t.exports}o.m=e,o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var a in r)o.o(r,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var r=o.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var a=r.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),o.b=document.baseURI||self.location.href,(()=>{var e=o(379),r=o.n(e),a=o(795),n=o.n(a),t=o(569),i=o.n(t),s=o(565),c=o.n(s),l=o(216),d=o.n(l),p=o(589),u=o.n(p),h=o(402),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=d(),r()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=document.querySelector(".container"),y=document.createElement("h1");y.innerText="Check your Air Pollution:",m.appendChild(y);const g=document.querySelector(".coord-input-container");g.classList.add(".coord-input-container"),m.appendChild(g);const v=document.createElement("input");v.classList.add("form-control"),v.placeholder="Your current latitude",g.appendChild(v);const x=document.createElement("input");x.classList.add("form-control"),x.placeholder="Your current longitude",g.appendChild(x);const q=document.querySelector(".get-position-btn");m.appendChild(q);const b=document.createElement("span");b.classList.add("input-group-text"),q.appendChild(b);const L=document.createElement("button");L.classList.add("form-control","button"),L.innerText="Get your current position",q.appendChild(L);const w=document.querySelector(".city-input-container");m.appendChild(w);const T=document.createElement("input");T.classList.add("form-control"),T.placeholder="Look for a city",w.appendChild(T);const C=document.querySelector(".paragraph-info");C.classList.add("paragraph-info-show"),m.appendChild(C);const E=document.createElement("p"),k=document.createElement("p"),$=document.createElement("span"),z=document.createElement("p"),D=document.createElement("span"),S=document.createElement("p"),A=(document.createElement("span"),document.createElement("p")),M=document.createElement("span"),P=document.createElement("span");function j(){C.classList.contains("paragraph-info-show")&&(C.classList.remove("paragraph-info-show"),C.classList.add("paragraph-info-hide"),E.classList.add("err-paragraph-show"),E.innerText="Please enable your geolocation",m.appendChild(E))}function I(e){C.classList.contains("paragraph-info-hide")&&(C.classList.remove("paragraph-info-hide"),E.classList.remove("err-paragraph-show"),C.classList.add("paragraph-info-show"),E.classList.add("err-paragraph-hide"));const r=e.coords;v.value=r.latitude,x.value=r.longitude,async function(){const e=await fetch(`https://api.waqi.info/feed/geo:${v.value};${x.value}/?token=c2554421637d86cf799eb20429c81d88c99331d3`),r=await e.json(),o=r.data.city.name,a=r.data.aqi,n=r.data.iaqi.t.v,t=r.data.iaqi.pm25.v;k.innerText="Your location is: ",$.innerText=`${o}`,k.appendChild($),C.appendChild(k),S.innerText="Air Quality: ",S.appendChild(P),C.appendChild(S),a<=50?(P.classList.remove("aqi-color-moderate","aqi-color-unhealthy-for-sensitive-groups","aqi-color-unhealthy","aqi-color-very-unhealthy","aqi-color-hazardous"),P.classList.add("aqi-color-good"),P.innerText=`${a}. Air quality is considered satisfactory 👍🏼`):a>50&&a<=100?(P.classList.remove("aqi-color-good","aqi-color-unhealthy-for-sensitive-groups","aqi-color-unhealthy","aqi-color-very-unhealthy","aqi-color-hazardous"),P.classList.add("aqi-color-moderate"),P.innerText=`${a}. Air quality is acceptable 👌🏼`):a>100&&a<=150?(P.classList.remove("aqi-color-good","aqi-color-moderate","aqi-color-unhealthy","aqi-color-very-unhealthy","aqi-color-hazardous"),P.classList.add("aqi-color-unhealthy-for-sensitive-groups"),P.innerText=`${aqis}. Members of sensitive groups may experience health effects. 👎🏼`):a>150&&a<=200?(P.classList.remove("aqi-color-good","aqi-color-moderate","aqi-color-unhealthy-for-sensitive-groups","aqi-color-very-unhealthy","aqi-color-hazardous"),P.classList.add("aqi-color-unhealthy"),P.innerText=`${aqis}. Everyone may begin to experience health effects. 👎🏼`):a>200&&a<=300?(P.classList.remove("aqi-color-good","aqi-color-moderate","aqi-color-unhealthy-for-sensitive-groups","aqi-color-unhealthy","aqi-color-hazardous"),P.classList.add("aqi-color-very-unhealthy"),P.innerText=`${a}. Health warnings of emergency conditions. 👎🏼`):a>300&&(P.classList.remove("aqi-color-good","aqi-color-moderate","aqi-color-unhealthy-for-sensitive-groups","aqi-color-unhealthy","aqi-color-very-unhealthy"),P.classList.add("aqi-color-hazardous"),P.innerText=`${a}. Health alert: everyone may experience more serious health effects. 👎🏼`),A.innerText="Airborne particulate matter(PM2.5): ",M.innerText=`${t}`,A.appendChild(M),C.appendChild(A),z.innerText="Temperature: ",D.innerText=`${n} °C`,z.appendChild(D),C.appendChild(z)}()}L.addEventListener("click",(()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition(I,j)})),T.addEventListener("keyup",(e=>{"Enter"==e.key&&""!=T.value&&async function(e){const r=await fetch(`https://api.waqi.info/feed/${e}/?token=c2554421637d86cf799eb20429c81d88c99331d3`),o=await r.json();"error"==o.status?(C.classList.remove("paragraph-info-show"),C.classList.remove("err-paragraph-hide"),C.classList.add("paragraph-info-hide"),E.classList.add("err-paragraph-show"),alert(`Sorry, ${o.data}`),m.appendChild(E)):"ok"==o.status&&(C.classList.remove("paragraph-info-hide"),E.classList.remove("err-paragraph-show"),C.classList.add("paragraph-info-show"),E.classList.add("err-paragraph-hide"));const a=o.data.city.name,n=o.data.aqi,t=o.data.iaqi.t.v,i=o.data.iaqi.pm25.v;k.innerText="Your location is: ",$.innerText=`${a}`,k.appendChild($),C.appendChild(k),S.innerText="Air Quality: ",S.appendChild(P),C.appendChild(S),n<=50?(P.classList.remove("aqi-color-moderate","aqi-color-unhealthy-for-sensitive-groups","aqi-color-unhealthy","aqi-color-very-unhealthy","aqi-color-hazardous"),P.classList.add("aqi-color-good"),P.innerText=`${n}. Air quality is considered satisfactory 👍🏼`):n>50&&n<=100?(P.classList.remove("aqi-color-good","aqi-color-unhealthy-for-sensitive-groups","aqi-color-unhealthy","aqi-color-very-unhealthy","aqi-color-hazardous"),P.classList.add("aqi-color-moderate"),P.innerText=`${n}. Air quality is acceptable 👌🏼`):n>100&&n<=150?(P.classList.remove("aqi-color-good","aqi-color-moderate","aqi-color-unhealthy","aqi-color-very-unhealthy","aqi-color-hazardous"),P.classList.add("aqi-color-unhealthy-for-sensitive-groups"),P.innerText=`${n}. Members of sensitive groups may experience health effects. 👎🏼`):n>150&&n<=200?(P.classList.remove("aqi-color-good","aqi-color-moderate","aqi-color-unhealthy-for-sensitive-groups","aqi-color-very-unhealthy","aqi-color-hazardous"),P.classList.add("aqi-color-unhealthy"),P.innerText=`${n}. Everyone may begin to experience health effects. 👎🏼`):n>200&&n<=300?(P.classList.remove("aqi-color-good","aqi-color-moderate","aqi-color-unhealthy-for-sensitive-groups","aqi-color-unhealthy","aqi-color-hazardous"),P.classList.add("aqi-color-very-unhealthy"),P.innerText=`${n}. Health warnings of emergency conditions. 👎🏼`):n>300&&(P.classList.remove("aqi-color-good","aqi-color-moderate","aqi-color-unhealthy-for-sensitive-groups","aqi-color-unhealthy","aqi-color-very-unhealthy"),P.classList.add("aqi-color-hazardous"),P.innerText=`${n}. Health alert: everyone may experience more serious health effects. 👎🏼`),A.innerText="Airborne particulate matter(PM2.5): ",M.innerText=`${i}`,A.appendChild(M),C.appendChild(A),z.innerText="Temperature: ",D.innerText=`${t} °C`,z.appendChild(D),C.appendChild(z)}(T.value)}))})()})();