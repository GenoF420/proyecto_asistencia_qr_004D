"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3342],{2726:(le,z,b)=>{b.d(z,{Uw:()=>S,fo:()=>R,ur:()=>Z,xz:()=>W});var d=b(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var Z=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}(Z||{});class W extends Error{constructor(e,n,o){super(e),this.message=e,this.code=n,this.data=o}}const L=r=>{var e,n,o,c,i;const u=r.CapacitorCustomPlatform||null,a=r.Capacitor||{},P=a.Plugins=a.Plugins||{},f=r.CapacitorPlatforms,$=(null===(e=null==f?void 0:f.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==u?u.name:(r=>{var e,n;return null!=r&&r.androidBridge?"android":null!==(n=null===(e=null==r?void 0:r.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==n&&n.bridge?"ios":"web"})(r)),de=(null===(n=null==f?void 0:f.currentPlatform)||void 0===n?void 0:n.isNativePlatform)||(()=>"web"!==$()),fe=(null===(o=null==f?void 0:f.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(h=>{const p=B.get(h);return!!(null!=p&&p.platforms.has($())||ie(h))}),ie=(null===(c=null==f?void 0:f.currentPlatform)||void 0===c?void 0:c.getPluginHeader)||(h=>{var p;return null===(p=a.PluginHeaders)||void 0===p?void 0:p.find(M=>M.name===h)}),B=new Map,Pe=(null===(i=null==f?void 0:f.currentPlatform)||void 0===i?void 0:i.registerPlugin)||((h,p={})=>{const M=B.get(h);if(M)return console.warn(`Capacitor plugin "${h}" already registered. Cannot register plugins twice.`),M.proxy;const N=$(),I=ie(h);let U;const ve=function(){var v=(0,d.Z)(function*(){return!U&&N in p?U=U="function"==typeof p[N]?yield p[N]():p[N]:null!==u&&!U&&"web"in p&&(U=U="function"==typeof p.web?yield p.web():p.web),U});return function(){return v.apply(this,arguments)}}(),ee=v=>{let C;const O=(...D)=>{const x=ve().then(E=>{const j=((v,C)=>{var O,D;if(!I){if(v)return null===(D=v[C])||void 0===D?void 0:D.bind(v);throw new W(`"${h}" plugin is not implemented on ${N}`,Z.Unimplemented)}{const x=null==I?void 0:I.methods.find(E=>C===E.name);if(x)return"promise"===x.rtype?E=>a.nativePromise(h,C.toString(),E):(E,j)=>a.nativeCallback(h,C.toString(),E,j);if(v)return null===(O=v[C])||void 0===O?void 0:O.bind(v)}})(E,v);if(j){const G=j(...D);return C=null==G?void 0:G.remove,G}throw new W(`"${h}.${v}()" is not implemented on ${N}`,Z.Unimplemented)});return"addListener"===v&&(x.remove=(0,d.Z)(function*(){return C()})),x};return O.toString=()=>`${v.toString()}() { [capacitor code] }`,Object.defineProperty(O,"name",{value:v,writable:!1,configurable:!1}),O},oe=ee("addListener"),ae=ee("removeListener"),Ce=(v,C)=>{const O=oe({eventName:v},C),D=function(){var E=(0,d.Z)(function*(){const j=yield O;ae({eventName:v,callbackId:j},C)});return function(){return E.apply(this,arguments)}}(),x=new Promise(E=>O.then(()=>E({remove:D})));return x.remove=(0,d.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield D()}),x},te=new Proxy({},{get(v,C){switch(C){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return I?Ce:oe;case"removeListener":return ae;default:return ee(C)}}});return P[h]=te,B.set(h,{name:h,proxy:te,platforms:new Set([...Object.keys(p),...I?[N]:[]])}),te});return a.convertFileSrc||(a.convertFileSrc=h=>h),a.getPlatform=$,a.handleError=h=>r.console.error(h),a.isNativePlatform=de,a.isPluginAvailable=fe,a.pluginMethodNoop=(h,p,M)=>Promise.reject(`${M} does not have an implementation of "${p}".`),a.registerPlugin=Pe,a.Exception=W,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},_=(r=>r.Capacitor=L(r))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),R=_.registerPlugin;class S{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,n){var o=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(n);const i=this.windowListeners[e];i&&!i.registered&&this.addWindowListener(i);const u=function(){var P=(0,d.Z)(function*(){return o.removeListener(e,n)});return function(){return P.apply(this,arguments)}}(),a=Promise.resolve({remove:u});return Object.defineProperty(a,"remove",{value:(P=(0,d.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield u()}),function(){return P.apply(this,arguments)})}),a;var P}removeAllListeners(){var e=this;return(0,d.Z)(function*(){e.listeners={};for(const n in e.windowListeners)e.removeWindowListener(e.windowListeners[n]);e.windowListeners={}})()}notifyListeners(e,n){const o=this.listeners[e];o&&o.forEach(c=>c(n))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:o=>{this.notifyListeners(n,o)}}}unimplemented(e="not implemented"){return new _.Exception(e,Z.Unimplemented)}unavailable(e="not available"){return new _.Exception(e,Z.Unavailable)}removeListener(e,n){var o=this;return(0,d.Z)(function*(){const c=o.listeners[e];if(!c)return;const i=c.indexOf(n);o.listeners[e].splice(i,1),o.listeners[e].length||o.removeWindowListener(o.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const t=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),w=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class y extends S{getCookies(){return(0,d.Z)(function*(){const e=document.cookie,n={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[c,i]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");c=w(c).trim(),i=w(i).trim(),n[c]=i}),n})()}setCookie(e){return(0,d.Z)(function*(){try{const n=t(e.key),o=t(e.value),c=`; expires=${(e.expires||"").replace("expires=","")}`,i=(e.path||"/").replace("path=",""),u=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${o||""}${c}; path=${i}; ${u};`}catch(n){return Promise.reject(n)}})()}deleteCookie(e){return(0,d.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}})()}clearCookies(){return(0,d.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,d.Z)(function*(){try{yield e.clearCookies()}catch(n){return Promise.reject(n)}})()}}R("CapacitorCookies",{web:()=>new y});const m=function(){var r=(0,d.Z)(function*(e){return new Promise((n,o)=>{const c=new FileReader;c.onload=()=>{const i=c.result;n(i.indexOf(",")>=0?i.split(",")[1]:i)},c.onerror=i=>o(i),c.readAsDataURL(e)})});return function(n){return r.apply(this,arguments)}}();class H extends S{request(e){return(0,d.Z)(function*(){const n=((r,e={})=>{const n=Object.assign({method:r.method||"GET",headers:r.headers},e),c=((r={})=>{const e=Object.keys(r);return Object.keys(r).map(c=>c.toLocaleLowerCase()).reduce((c,i,u)=>(c[i]=r[e[u]],c),{})})(r.headers)["content-type"]||"";if("string"==typeof r.data)n.body=r.data;else if(c.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[u,a]of Object.entries(r.data||{}))i.set(u,a);n.body=i.toString()}else if(c.includes("multipart/form-data")){const i=new FormData;if(r.data instanceof FormData)r.data.forEach((a,P)=>{i.append(P,a)});else for(const a of Object.keys(r.data))i.append(a,r.data[a]);n.body=i;const u=new Headers(n.headers);u.delete("content-type"),n.headers=u}else(c.includes("application/json")||"object"==typeof r.data)&&(n.body=JSON.stringify(r.data));return n})(e,e.webFetchExtra),o=((r,e=!0)=>r?Object.entries(r).reduce((o,c)=>{const[i,u]=c;let a,P;return Array.isArray(u)?(P="",u.forEach(f=>{a=e?encodeURIComponent(f):f,P+=`${i}=${a}&`}),P.slice(0,-1)):(a=e?encodeURIComponent(u):u,P=`${i}=${a}`),`${o}&${P}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),c=o?`${e.url}?${o}`:e.url,i=yield fetch(c,n),u=i.headers.get("content-type")||"";let P,f,{responseType:a="text"}=i.ok?e:{};switch(u.includes("application/json")&&(a="json"),a){case"arraybuffer":case"blob":f=yield i.blob(),P=yield m(f);break;case"json":P=yield i.json();break;default:P=yield i.text()}const K={};return i.headers.forEach(($,V)=>{K[V]=$}),{data:P,headers:K,status:i.status,url:i.url}})()}get(e){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var n=this;return(0,d.Z)(function*(){return n.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}R("CapacitorHttp",{web:()=>new H})},3342:(le,z,b)=>{b.r(z),b.d(z,{ClassPageModule:()=>se});var d=b(6814),J=b(95),g=b(3582),k=b(6685),T=b(5861);const L=(0,b(2726).fo)("BarcodeScanner",{web:()=>b.e(7338).then(b.bind(b,7338)).then(t=>new t.BarcodeScannerWeb)});var s=b(6689),_=b(4414);function R(t,w){if(1&t&&(s.TgZ(0,"ion-item")(1,"ion-label",10),s._uU(2),s.qZA(),s.TgZ(3,"ion-label",11),s._uU(4),s.qZA()()),2&t){const y=w.$implicit;s.xp6(2),s.Oqu(y.fecha),s.xp6(1),s.Q6J("ngClass",y.asistente?"asistente":"inasistente"),s.xp6(1),s.hij(" ",y.asistente?"Asistente":"Inasistente"," ")}}const re=[{path:"",component:(()=>{var t;class w{constructor(l,m,A){this.router=l,this.alertController=m,this.toastController=A,this.isSupported=!1,this.barcodes=[],this.nombreRamo="",this.listaAsistencia=[]}goToPage(l){this.router.navigate([l])}isGoogleBarcodeScannerModuleAvailable(){return(0,T.Z)(function*(){return(yield L.isGoogleBarcodeScannerModuleAvailable()).available})()}installGoogleBarcodeScannerModule(){return(0,T.Z)(function*(){return new Promise(l=>{L.addListener("googleBarcodeScannerModuleInstallProgress",A=>{console.log("Installation Progress:",A),"completed"===A.status&&(L.removeAllListeners(),l())}),L.installGoogleBarcodeScannerModule()})})()}scan(){var l=this;return(0,T.Z)(function*(){if(!(yield l.requestPermissions()))return void l.presentAlert();const{barcodes:A}=yield L.scan();if("TokenSecreto"===A[A.length-1].displayValue){const H=(new Date).toISOString().split("T")[0];let X={fecha:H,asistente:!0};l.listaAsistencia.some(r=>r.fecha===X.fecha&&r.asistente)?l.createToast("Asistencia ya registrada.","La asistencia de la fecha: "+H+" ya se encuentra registrada.","top",3e3):(l.createToast("Asistencia Registrada.","Fecha: "+H+" registrada.","top",3e3),l.listaAsistencia.push(X)),l.listaAsistencia.push()}})()}createToast(l,m,A,q){this.toastController.create({header:l,message:m,position:A,duration:q,cssClass:"custom-toast"}).then(F=>{F.present()})}requestPermissions(){return(0,T.Z)(function*(){const{camera:l}=yield L.requestPermissions();return console.log("Camera Permission Status:",l),"granted"===l||"limited"===l})()}presentAlert(){var l=this;return(0,T.Z)(function*(){yield(yield l.alertController.create({header:"Permission denied",message:"Please grant camera permission to use the barcode scanner.",buttons:["OK"]})).present()})()}ngOnInit(){var l=this;return(0,T.Z)(function*(){try{const m=yield l.isGoogleBarcodeScannerModuleAvailable();console.log("Is Module Available:",m),m||(console.log("Module not available. Installing."),yield l.installGoogleBarcodeScannerModule(),console.log("Module installation complete."))}catch(m){console.error("Error in ngOnInit:",m)}l.nombreRamo="Matem\xe1ticas",l.listaAsistencia=[{fecha:"2023-09-10",asistente:!0},{fecha:"2023-09-12",asistente:!1},{fecha:"2023-09-15",asistente:!0}],L.isSupported().then(m=>{l.isSupported=m.supported})})()}}return(t=w).\u0275fac=function(l){return new(l||t)(s.Y36(k.F0),s.Y36(_.Br),s.Y36(_.yF))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-class"]],decls:30,vars:3,consts:[["slot","start"],["defaultHref","/dashboard/classes"],[1,"ramo-title"],[1,"asistencia-card"],["size","8"],["size","4",1,"asistencia-porcentaje"],[4,"ngFor","ngForOf"],["slot","fixed","vertical","bottom","horizontal","end"],[3,"disabled","click"],["name","scan"],[1,"fecha-label"],[1,"estado-label",3,"ngClass"]],template:function(l,m){1&l&&(s.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),s._UZ(3,"ion-back-button",1),s.qZA(),s.TgZ(4,"ion-title"),s._uU(5,"Detalles del Ramo"),s.qZA()()(),s.TgZ(6,"ion-content")(7,"ion-card")(8,"ion-card-header")(9,"ion-card-title",2),s._uU(10),s.qZA()()(),s.TgZ(11,"ion-card")(12,"ion-card-content",3)(13,"ion-row")(14,"ion-col",4)(15,"p"),s._uU(16,"Asistencia"),s.qZA()(),s.TgZ(17,"ion-col",5)(18,"ion-text"),s._uU(19,"25%"),s.qZA()()()()(),s.TgZ(20,"ion-card")(21,"ion-card-header")(22,"ion-card-title"),s._uU(23,"Lista de Asistencia"),s.qZA()(),s.TgZ(24,"ion-card-content")(25,"ion-list"),s.YNc(26,R,5,3,"ion-item",6),s.qZA()()(),s.TgZ(27,"ion-fab",7)(28,"ion-fab-button",8),s.NdJ("click",function(){return m.scan()}),s._UZ(29,"ion-icon",9),s.qZA()()()),2&l&&(s.xp6(10),s.Oqu(m.nombreRamo),s.xp6(16),s.Q6J("ngForOf",m.listaAsistencia),s.xp6(2),s.Q6J("disabled",!m.isSupported))},dependencies:[d.mk,d.sg,g.Sm,g.PM,g.FN,g.Zi,g.Dq,g.wI,g.W2,g.IJ,g.W4,g.Gu,g.gu,g.Ie,g.Q$,g.q_,g.Nd,g.yW,g.wd,g.sr,g.oU],styles:['@charset "UTF-8";.ramo-title[_ngcontent-%COMP%]{font-size:24px;text-align:center;padding:20px}.asistencia-col[_ngcontent-%COMP%]{text-align:center;padding:20px}.asistencia-label[_ngcontent-%COMP%]{font-size:12px;color:gray}.asistencia-porcentaje[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;font-size:32px;font-weight:700}.fecha-label[_ngcontent-%COMP%]{font-size:12px;color:gray}.asistente[_ngcontent-%COMP%]{color:green;font-weight:700}.inasistente[_ngcontent-%COMP%]{color:red;font-weight:700}']}),w})()}];let S=(()=>{var t;class w{}return(t=w).\u0275fac=function(l){return new(l||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[k.Bz.forChild(re),k.Bz]}),w})(),se=(()=>{var t;class w{}return(t=w).\u0275fac=function(l){return new(l||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[d.ez,J.u5,g.Pc,S]}),w})()}}]);