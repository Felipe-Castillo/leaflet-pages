"use strict";(self.webpackChunktest_angular=self.webpackChunktest_angular||[]).push([[520],{520:(fe,G,g)=>{g.d(G,{JF:()=>ue});var P=g(9808),c=g(1223),W=g(9646),$=g(8306),V=g(4351),Y=g(9300),T=g(4004);class S{}class D{}class y{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(t=>{const r=t.indexOf(":");if(r>0){const n=t.slice(0,r),o=n.toLowerCase(),l=t.slice(r+1).trim();this.maybeSetNormalizedName(n,o),this.headers.has(o)?this.headers.get(o).push(l):this.headers.set(o,[l])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let r=e[t];const n=t.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(n,r),this.maybeSetNormalizedName(t,n))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof y?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new y;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof y?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,t);const n=("a"===e.op?this.headers.get(t):void 0)||[];n.push(...r),this.headers.set(t,n);break;case"d":const o=e.value;if(o){let l=this.headers.get(t);if(!l)return;l=l.filter(h=>-1===o.indexOf(h)),0===l.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,l)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class q{encodeKey(e){return L(e)}encodeValue(e){return L(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const Z=/%(\d[a-f0-9])/gi,ee={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function L(s){return encodeURIComponent(s).replace(Z,(e,t)=>{var r;return null!==(r=ee[t])&&void 0!==r?r:e})}function J(s){return`${s}`}class E{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new q,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function Q(s,e){const t=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(n=>{const o=n.indexOf("="),[l,h]=-1==o?[e.decodeKey(n),""]:[e.decodeKey(n.slice(0,o)),e.decodeValue(n.slice(o+1))],i=t.get(l)||[];i.push(h),t.set(l,i)}),t}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const r=e.fromObject[t];this.map.set(t,Array.isArray(r)?r:[r])})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(r=>{const n=e[r];Array.isArray(n)?n.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:n,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new E({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(J(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let r=this.map.get(e.param)||[];const n=r.indexOf(J(e.value));-1!==n&&r.splice(n,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class te{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function I(s){return"undefined"!=typeof ArrayBuffer&&s instanceof ArrayBuffer}function A(s){return"undefined"!=typeof Blob&&s instanceof Blob}function F(s){return"undefined"!=typeof FormData&&s instanceof FormData}class C{constructor(e,t,r,n){let o;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function se(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||n?(this.body=void 0!==r?r:null,o=n):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new y),this.context||(this.context=new te),this.params){const l=this.params.toString();if(0===l.length)this.urlWithParams=t;else{const h=t.indexOf("?");this.urlWithParams=t+(-1===h?"?":h<t.length-1?"&":"")+l}}else this.params=new E,this.urlWithParams=t}serializeBody(){return null===this.body?null:I(this.body)||A(this.body)||F(this.body)||function ne(s){return"undefined"!=typeof URLSearchParams&&s instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof E?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||F(this.body)?null:A(this.body)?this.body.type||null:I(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof E?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){var t;const r=e.method||this.method,n=e.url||this.url,o=e.responseType||this.responseType,l=void 0!==e.body?e.body:this.body,h=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,i=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let p=e.headers||this.headers,b=e.params||this.params;const w=null!==(t=e.context)&&void 0!==t?t:this.context;return void 0!==e.setHeaders&&(p=Object.keys(e.setHeaders).reduce((m,a)=>m.set(a,e.setHeaders[a]),p)),e.setParams&&(b=Object.keys(e.setParams).reduce((m,a)=>m.set(a,e.setParams[a]),b)),new C(r,n,l,{params:b,headers:p,context:w,reportProgress:i,responseType:o,withCredentials:h})}}var d=(()=>((d=d||{})[d.Sent=0]="Sent",d[d.UploadProgress=1]="UploadProgress",d[d.ResponseHeader=2]="ResponseHeader",d[d.DownloadProgress=3]="DownloadProgress",d[d.Response=4]="Response",d[d.User=5]="User",d))();class k{constructor(e,t=200,r="OK"){this.headers=e.headers||new y,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class N extends k{constructor(e={}){super(e),this.type=d.ResponseHeader}clone(e={}){return new N({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class O extends k{constructor(e={}){super(e),this.type=d.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new O({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class j extends k{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function x(s,e){return{body:e,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials}}let re=(()=>{class s{constructor(t){this.handler=t}request(t,r,n={}){let o;if(t instanceof C)o=t;else{let i,p;i=n.headers instanceof y?n.headers:new y(n.headers),n.params&&(p=n.params instanceof E?n.params:new E({fromObject:n.params})),o=new C(t,r,void 0!==n.body?n.body:null,{headers:i,context:n.context,params:p,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const l=(0,W.of)(o).pipe((0,V.b)(i=>this.handler.handle(i)));if(t instanceof C||"events"===n.observe)return l;const h=l.pipe((0,Y.h)(i=>i instanceof O));switch(n.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return h.pipe((0,T.U)(i=>{if(null!==i.body&&!(i.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return i.body}));case"blob":return h.pipe((0,T.U)(i=>{if(null!==i.body&&!(i.body instanceof Blob))throw new Error("Response is not a Blob.");return i.body}));case"text":return h.pipe((0,T.U)(i=>{if(null!==i.body&&"string"!=typeof i.body)throw new Error("Response is not a string.");return i.body}));default:return h.pipe((0,T.U)(i=>i.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:(new E).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,n={}){return this.request("PATCH",t,x(n,r))}post(t,r,n={}){return this.request("POST",t,x(n,r))}put(t,r,n={}){return this.request("PUT",t,x(n,r))}}return s.\u0275fac=function(t){return new(t||s)(c.LFG(S))},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac}),s})();class B{constructor(e,t){this.next=e,this.interceptor=t}handle(e){return this.interceptor.intercept(e,this.next)}}const U=new c.OlP("HTTP_INTERCEPTORS");let oe=(()=>{class s{intercept(t,r){return r.handle(t)}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac}),s})();const ie=/^\)\]\}',?\n/;let z=(()=>{class s{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new $.y(r=>{const n=this.xhrFactory.build();if(n.open(t.method,t.urlWithParams),t.withCredentials&&(n.withCredentials=!0),t.headers.forEach((a,u)=>n.setRequestHeader(a,u.join(","))),t.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const a=t.detectContentTypeHeader();null!==a&&n.setRequestHeader("Content-Type",a)}if(t.responseType){const a=t.responseType.toLowerCase();n.responseType="json"!==a?a:"text"}const o=t.serializeBody();let l=null;const h=()=>{if(null!==l)return l;const a=n.statusText||"OK",u=new y(n.getAllResponseHeaders()),v=function ae(s){return"responseURL"in s&&s.responseURL?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null}(n)||t.url;return l=new N({headers:u,status:n.status,statusText:a,url:v}),l},i=()=>{let{headers:a,status:u,statusText:v,url:K}=h(),f=null;204!==u&&(f=void 0===n.response?n.responseText:n.response),0===u&&(u=f?200:0);let H=u>=200&&u<300;if("json"===t.responseType&&"string"==typeof f){const he=f;f=f.replace(ie,"");try{f=""!==f?JSON.parse(f):null}catch(pe){f=he,H&&(H=!1,f={error:pe,text:f})}}H?(r.next(new O({body:f,headers:a,status:u,statusText:v,url:K||void 0})),r.complete()):r.error(new j({error:f,headers:a,status:u,statusText:v,url:K||void 0}))},p=a=>{const{url:u}=h(),v=new j({error:a,status:n.status||0,statusText:n.statusText||"Unknown Error",url:u||void 0});r.error(v)};let b=!1;const w=a=>{b||(r.next(h()),b=!0);let u={type:d.DownloadProgress,loaded:a.loaded};a.lengthComputable&&(u.total=a.total),"text"===t.responseType&&!!n.responseText&&(u.partialText=n.responseText),r.next(u)},m=a=>{let u={type:d.UploadProgress,loaded:a.loaded};a.lengthComputable&&(u.total=a.total),r.next(u)};return n.addEventListener("load",i),n.addEventListener("error",p),n.addEventListener("timeout",p),n.addEventListener("abort",p),t.reportProgress&&(n.addEventListener("progress",w),null!==o&&n.upload&&n.upload.addEventListener("progress",m)),n.send(o),r.next({type:d.Sent}),()=>{n.removeEventListener("error",p),n.removeEventListener("abort",p),n.removeEventListener("load",i),n.removeEventListener("timeout",p),t.reportProgress&&(n.removeEventListener("progress",w),null!==o&&n.upload&&n.upload.removeEventListener("progress",m)),n.readyState!==n.DONE&&n.abort()}})}}return s.\u0275fac=function(t){return new(t||s)(c.LFG(P.JF))},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac}),s})();const R=new c.OlP("XSRF_COOKIE_NAME"),M=new c.OlP("XSRF_HEADER_NAME");class X{}let le=(()=>{class s{constructor(t,r,n){this.doc=t,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,P.Mx)(t,this.cookieName),this.lastCookieString=t),this.lastToken}}return s.\u0275fac=function(t){return new(t||s)(c.LFG(P.K0),c.LFG(c.Lbi),c.LFG(R))},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac}),s})(),_=(()=>{class s{constructor(t,r){this.tokenService=t,this.headerName=r}intercept(t,r){const n=t.url.toLowerCase();if("GET"===t.method||"HEAD"===t.method||n.startsWith("http://")||n.startsWith("https://"))return r.handle(t);const o=this.tokenService.getToken();return null!==o&&!t.headers.has(this.headerName)&&(t=t.clone({headers:t.headers.set(this.headerName,o)})),r.handle(t)}}return s.\u0275fac=function(t){return new(t||s)(c.LFG(X),c.LFG(M))},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac}),s})(),ce=(()=>{class s{constructor(t,r){this.backend=t,this.injector=r,this.chain=null}handle(t){if(null===this.chain){const r=this.injector.get(U,[]);this.chain=r.reduceRight((n,o)=>new B(n,o),this.backend)}return this.chain.handle(t)}}return s.\u0275fac=function(t){return new(t||s)(c.LFG(D),c.LFG(c.zs3))},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac}),s})(),de=(()=>{class s{static disable(){return{ngModule:s,providers:[{provide:_,useClass:oe}]}}static withOptions(t={}){return{ngModule:s,providers:[t.cookieName?{provide:R,useValue:t.cookieName}:[],t.headerName?{provide:M,useValue:t.headerName}:[]]}}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=c.oAB({type:s}),s.\u0275inj=c.cJS({providers:[_,{provide:U,useExisting:_,multi:!0},{provide:X,useClass:le},{provide:R,useValue:"XSRF-TOKEN"},{provide:M,useValue:"X-XSRF-TOKEN"}]}),s})(),ue=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=c.oAB({type:s}),s.\u0275inj=c.cJS({providers:[re,{provide:S,useClass:ce},z,{provide:D,useExisting:z}],imports:[[de.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),s})()}}]);