(function(c){function d(M){delete installedChunks[M]}function f(M){var N=document.getElementsByTagName("head")[0],O=document.createElement("script");O.type="text/javascript",O.charset="utf-8",O.src=t.p+""+M+"."+w+".hot-update.js",N.appendChild(O)}function g(){return new Promise(function(M,N){if("undefined"==typeof XMLHttpRequest)return N(new Error("No browser support"));try{var O=new XMLHttpRequest,P=t.p+""+w+".hot-update.json";O.open("GET",P,!0),O.timeout=1e4,O.send(null)}catch(Q){return N(Q)}O.onreadystatechange=function(){if(4===O.readyState)if(0===O.status)N(new Error("Manifest request to "+P+" timed out."));else if(404===O.status)M();else if(200!==O.status&&304!==O.status)N(new Error("Manifest request to "+P+" failed."));else{try{var Q=JSON.parse(O.responseText)}catch(R){return void N(R)}M(Q)}}})}function h(M){var N=L[M];if(!N)return t;var O=function(R){return N.hot.active?(L[R]?0>L[R].parents.indexOf(M)&&L[R].parents.push(M):(z=[M],y=R),0>N.children.indexOf(R)&&N.children.push(R)):(console.warn("[HMR] unexpected require("+R+") from disposed module "+M),z=[]),t(R)},P=function(S){return{configurable:!0,enumerable:!0,get:function(){return t[S]},set:function(T){t[S]=T}}};for(var Q in t)Object.prototype.hasOwnProperty.call(t,Q)&&"e"!=Q&&Object.defineProperty(O,Q,P(Q));return O.e=function(R){function S(){E--,"prepare"===C&&(!F[R]&&q(R),0===E&&0===D&&r())}return"ready"===C&&m("prepare"),E++,t.e(R).then(S,function(T){throw S(),T})},O}function k(M){var N={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:y!==M,active:!0,accept:function(O,P){if("undefined"==typeof O)N._selfAccepted=!0;else if("function"==typeof O)N._selfAccepted=O;else if("object"==typeof O)for(var Q=0;Q<O.length;Q++)N._acceptedDependencies[O[Q]]=P||function(){};else N._acceptedDependencies[O]=P||function(){}},decline:function(O){if("undefined"==typeof O)N._selfDeclined=!0;else if("object"==typeof O)for(var P=0;P<O.length;P++)N._declinedDependencies[O[P]]=!0;else N._declinedDependencies[O]=!0},dispose:function(O){N._disposeHandlers.push(O)},addDisposeHandler:function(O){N._disposeHandlers.push(O)},removeDisposeHandler:function(O){var P=N._disposeHandlers.indexOf(O);0<=P&&N._disposeHandlers.splice(P,1)},check:o,apply:s,status:function(O){return O?void B.push(O):C},addStatusHandler:function(O){B.push(O)},removeStatusHandler:function(O){var P=B.indexOf(O);0<=P&&B.splice(P,1)},data:x[M]};return y=void 0,N}function m(M){C=M;for(var N=0;N<B.length;N++)B[N].call(null,M)}function n(M){return+M+""===M?+M:M}function o(M){if("idle"!==C)throw new Error("check() is only allowed in idle status");return v=M,m("check"),g().then(function(N){if(!N)return m("idle"),null;G={},F={},H=N.c,K=N.h,m("prepare");var O=new Promise(function(Q,R){I={resolve:Q,reject:R}});J={};return q(0),"prepare"===C&&0===E&&0==D&&r(),O})}function p(M,N){if(H[M]&&G[M]){for(var O in G[M]=!1,N)Object.prototype.hasOwnProperty.call(N,O)&&(J[O]=N[O]);0==--D&&0===E&&r()}}function q(M){H[M]?(G[M]=!0,D++,f(M)):F[M]=!0}function r(){m("ready");var M=I;if(I=null,!!M)if(v)s(v).then(function(P){M.resolve(P)},function(P){M.reject(P)});else{var N=[];for(var O in J)Object.prototype.hasOwnProperty.call(J,O)&&N.push(n(O));M.resolve(N)}}function s(M){function N(na){for(var oa=[na],pa={},qa=oa.slice().map(function(xa){return{chain:[xa],id:xa}});0<qa.length;){var ra=qa.pop(),sa=ra.id,ta=ra.chain;if(S=L[sa],S&&!S.hot._selfAccepted){if(S.hot._selfDeclined)return{type:"self-declined",chain:ta,moduleId:sa};if(S.hot._main)return{type:"unaccepted",chain:ta,moduleId:sa};for(var ua=0;ua<S.parents.length;ua++){var va=S.parents[ua],wa=L[va];if(wa){if(wa.hot._declinedDependencies[sa])return{type:"declined",chain:ta.concat([va]),moduleId:sa,parentId:va};if(!(0<=oa.indexOf(va))){if(wa.hot._acceptedDependencies[sa]){pa[va]||(pa[va]=[]),O(pa[va],[sa]);continue}delete pa[va],oa.push(va),qa.push({chain:ta.concat([va]),id:va})}}}}}return{type:"accepted",moduleId:na,outdatedModules:oa,outdatedDependencies:pa}}function O(na,oa){for(var qa,pa=0;pa<oa.length;pa++)qa=oa[pa],0>na.indexOf(qa)&&na.push(qa)}if("ready"!==C)throw new Error("apply() is only allowed in ready status");M=M||{};var P,Q,R,S,T,U={},V=[],W={},X=function(){console.warn("[HMR] unexpected require("+Z.moduleId+") to disposed module")};for(var Y in J)if(Object.prototype.hasOwnProperty.call(J,Y)){T=n(Y);var Z=J[Y]?N(T):{type:"disposed",moduleId:Y};var $=!1,_=!1,aa=!1,ba="";switch(Z.chain&&(ba="\nUpdate propagation: "+Z.chain.join(" -> ")),Z.type){case"self-declined":M.onDeclined&&M.onDeclined(Z),M.ignoreDeclined||($=new Error("Aborted because of self decline: "+Z.moduleId+ba));break;case"declined":M.onDeclined&&M.onDeclined(Z),M.ignoreDeclined||($=new Error("Aborted because of declined dependency: "+Z.moduleId+" in "+Z.parentId+ba));break;case"unaccepted":M.onUnaccepted&&M.onUnaccepted(Z),M.ignoreUnaccepted||($=new Error("Aborted because "+T+" is not accepted"+ba));break;case"accepted":M.onAccepted&&M.onAccepted(Z),_=!0;break;case"disposed":M.onDisposed&&M.onDisposed(Z),aa=!0;break;default:throw new Error("Unexception type "+Z.type);}if($)return m("abort"),Promise.reject($);if(_)for(T in W[T]=J[T],O(V,Z.outdatedModules),Z.outdatedDependencies)Object.prototype.hasOwnProperty.call(Z.outdatedDependencies,T)&&(U[T]||(U[T]=[]),O(U[T],Z.outdatedDependencies[T]));aa&&(O(V,[Z.moduleId]),W[T]=X)}var ca=[];for(Q=0;Q<V.length;Q++)T=V[Q],L[T]&&L[T].hot._selfAccepted&&ca.push({module:T,errorHandler:L[T].hot._selfAccepted});m("dispose"),Object.keys(H).forEach(function(na){!1===H[na]&&d(na)});for(var da,ea=V.slice();0<ea.length;)if(T=ea.pop(),S=L[T],S){var fa={},ga=S.hot._disposeHandlers;for(R=0;R<ga.length;R++)P=ga[R],P(fa);for(x[T]=fa,S.hot.active=!1,delete L[T],R=0;R<S.children.length;R++){var ha=L[S.children[R]];ha&&(da=ha.parents.indexOf(T),0<=da&&ha.parents.splice(da,1))}}var ia,ja;for(T in U)if(Object.prototype.hasOwnProperty.call(U,T)&&(S=L[T],S))for(ja=U[T],R=0;R<ja.length;R++)ia=ja[R],da=S.children.indexOf(ia),0<=da&&S.children.splice(da,1);for(T in m("apply"),w=K,W)Object.prototype.hasOwnProperty.call(W,T)&&(c[T]=W[T]);var ka=null;for(T in U)if(Object.prototype.hasOwnProperty.call(U,T)){S=L[T],ja=U[T];var la=[];for(Q=0;Q<ja.length;Q++)ia=ja[Q],P=S.hot._acceptedDependencies[ia],0<=la.indexOf(P)||la.push(P);for(Q=0;Q<la.length;Q++){P=la[Q];try{P(ja)}catch(na){M.onErrored&&M.onErrored({type:"accept-errored",moduleId:T,dependencyId:ja[Q],error:na}),M.ignoreErrored||ka||(ka=na)}}}for(Q=0;Q<ca.length;Q++){var ma=ca[Q];T=ma.module,z=[T];try{t(T)}catch(na){if("function"==typeof ma.errorHandler)try{ma.errorHandler(na)}catch(oa){M.onErrored&&M.onErrored({type:"self-accept-error-handler-errored",moduleId:T,error:oa,orginalError:na}),M.ignoreErrored||ka||(ka=oa),ka||(ka=na)}else M.onErrored&&M.onErrored({type:"self-accept-errored",moduleId:T,error:na}),M.ignoreErrored||ka||(ka=na)}}return ka?(m("fail"),Promise.reject(ka)):(m("idle"),new Promise(function(na){na(V)}))}function t(M){if(L[M])return L[M].exports;var N=L[M]={i:M,l:!1,exports:{},hot:k(M),parents:(A=z,z=[],A),children:[]};return c[M].call(N.exports,N,N.exports,h(M)),N.l=!0,N.exports}var u=this.webpackHotUpdate;this.webpackHotUpdate=function(N,O){p(N,O),u&&u(N,O)};var y,I,J,K,v=!0,w="f57faa17093dca363c1d",x={},z=[],A=[],B=[],C="idle",D=0,E=0,F={},G={},H={},L={};return t.m=c,t.c=L,t.i=function(M){return M},t.d=function(M,N,O){t.o(M,N)||Object.defineProperty(M,N,{configurable:!1,enumerable:!0,get:O})},t.n=function(M){var N=M&&M.__esModule?function(){return M["default"]}:function(){return M};return t.d(N,"a",N),N},t.o=function(M,N){return Object.prototype.hasOwnProperty.call(M,N)},t.p="",t.h=function(){return w},h(5)(t.s=5)})([function(c,d){"use strict";function g(k,m){if(!(k instanceof m))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(d,"__esModule",{value:!0});d.default=function k(){g(this,k),this.jsonPath="./data/nav.json"}},function(c,d){"use strict";function g(m,n){if(!(m instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(d,"__esModule",{value:!0});var h=function(){function m(n,o){for(var q,p=0;p<o.length;p++)q=o[p],q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(n,q.key,q)}return function(n,o,p){return o&&m(n.prototype,o),p&&m(n,p),n}}(),k=function(){function m(){g(this,m)}return h(m,[{key:"getJson",value:async function(o){var p=await fetch(o),q=await p.json();if(200!==p.status)throw Error(q.message);return q}}]),m}();d.default=k},function(c,d){"use strict";function g(m,n){if(!(m instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(d,"__esModule",{value:!0});var h=function(){function m(n,o){for(var q,p=0;p<o.length;p++)q=o[p],q.enumerable=q.enumerable||!1,q.configurable=!0,"value"in q&&(q.writable=!0),Object.defineProperty(n,q.key,q)}return function(n,o,p){return o&&m(n.prototype,o),p&&m(n,p),n}}(),k=function(){function m(n){g(this,m),this.htmlData={root:document.querySelector(".main-nav-wrapper"),openClass:"navbar-toggle-open",closeClass:"navbar-toggle-close",childrenClass:"has-children",submenuClass:"submenu",data:n}}return h(m,[{key:"initHtmlElements",value:function(){return this.htmlData.nav=document.querySelector(".main-nav"),this.htmlData.toggleButtonOpen=document.querySelector(".navbar-toggle-open"),this.htmlData.toggleButtonClose=document.querySelector(".navbar-toggle-close"),this.htmlData.header=document.querySelector("header"),this.htmlData.overlay=document.querySelector(".overlay"),this.htmlData.allLinks=document.querySelectorAll("a"),this.htmlData.menuParents=document.querySelectorAll(".has-children"),this.htmlData}},{key:"buildNav",value:function(){var o=this;this.htmlData.root.innerHTML=this.htmlCode(this.htmlData.data),this.initHtmlElements(),this.addMenuListeners(),this.htmlData.toggleButtonOpen.addEventListener("click",function(){return o.buttonListener(event)}),this.htmlData.toggleButtonClose.addEventListener("click",function(){return o.buttonListener(event)})}},{key:"htmlCode",value:function(o){var p=this,q="";return o.items.map(function(r){if(0<r.items.length){var t=p.htmlChildren(r.items);q+="<li class="+p.htmlData.childrenClass+">\n        <a href="+r.url+">"+r.label+"</a>"+t+"</li>"}else q+="<li><a href="+r.url+" target=\"_blank\">"+r.label+"</a></li>"}),q+="<li class=\"footer\">&copy; 2017 Huge. All Rights Reserved</li>",q}},{key:"htmlChildren",value:function(o){var p="<ul class="+this.htmlData.submenuClass+">";return o.map(function(q){p+="<li><a href="+q.url+" target=\"_blank\">"+q.label+"</a></li>"}),p+="</ul>",p}},{key:"buttonListener",value:function(o){var p=o.target.closest("button");p.classList.contains(this.htmlData.openClass)?this.navOpen():this.navClose()}},{key:"clickOutside",value:function(o){var p=this,q=this.htmlData.nav.contains(o.target),r=this.htmlData.toggleButtonOpen.contains(o.target);q||r||(this.navClose(),this.closeAllMenus()),document.removeEventListener("click",function(){return p.clickOutside(o)})}},{key:"addOutsideListener",value:function(){var o=this;document.addEventListener("click",function(){return o.clickOutside(event)})}},{key:"navOpen",value:function(){this.htmlData.header.classList.add("open"),this.htmlData.overlay.classList.add("show")}},{key:"navClose",value:function(){this.htmlData.header.classList.remove("open"),this.htmlData.overlay.classList.remove("show"),this.closeAllMenus()}},{key:"addMenuListeners",value:function(){var o=this;this.htmlData.menuParents.forEach(function(p){p.addEventListener("click",function(){return o.submenuListener(event)})}),window.addEventListener("resize",function(){return o.checkScreenSize(event)}),this.addOutsideListener()}},{key:"submenuListener",value:function(o){o.target.parentNode.classList.contains("open")?(o.target.parentNode.classList.remove("open"),o.target.removeAttribute("aria-current","page")):(this.closeAllMenus(),o.target.setAttribute("aria-current","page"),o.target.parentNode.classList.add("open"))}},{key:"closeAllMenus",value:function(){this.htmlData.menuParents.forEach(function(o){o.classList.remove("open")}),this.htmlData.allLinks.forEach(function(o){o.removeAttribute("aria-current")})}},{key:"checkScreenSize",value:function(){768<window.innerWidth&&this.navClose()}}]),m}();d.default=k},function(c,d,f){"use strict";function g(t){return t&&t.__esModule?t:{default:t}}function h(t,u){if(!(t instanceof u))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(d,"__esModule",{value:!0});var k=function(){function t(u,v){for(var x,w=0;w<v.length;w++)x=v[w],x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(u,x.key,x)}return function(u,v,w){return v&&t(u.prototype,v),w&&t(u,w),u}}(),m=f(0),n=g(m),o=f(2),p=g(o),q=f(1),r=g(q),s=function(){function t(){h(this,t)}return k(t,[{key:"init",value:async function(){var v=new r.default,w=new n.default;v.getJson(w.jsonPath).then(function(x){var y=new p.default(x);y.buildNav()}).catch(function(){console.error()})}}]),t}();d.default=s},function(){},function(c,d,f){"use strict";function g(v){return v&&v.__esModule?v:{default:v}}var h=f(0),k=g(h),m=f(2),n=g(m),o=f(1),p=g(o),q=f(3),r=g(q),s=f(4),t=g(s),u=new r.default;u.init()}]);