"use strict";(self.webpackChunkcookies_editor=self.webpackChunkcookies_editor||[]).push([[29],{8283:(e,t,s)=>{function n(e,t){if(null==e)return{};var s,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}s.d(t,{Z:()=>n})},29:(e,t,s)=>{s.r(t),s.d(t,{HTTPRequest:()=>R,PostmanGateway:()=>S,PostmanHTTPGateway:()=>S,httpRequest:()=>q,postmanGateway:()=>E,postmanHttpGateway:()=>E,postmanWebsocketGateway:()=>oe});var n=s(8283),o=s(3101),r=s(1466);s(1180);const i={url:"/_api/ws/proxy",method:"post",beforeRequest:[({request:e,options:t})=>{const s=(0,o.getAuthRequestOptions)();if(/localhost:(\d{2,6})|postman(-alpha|-beta|-preview|-stage)?.co(m)?/.test(e.url)){if(s.headers)for(const[t,n]of Object.entries(s.headers))e.headers.set(t,n);return s.credentials?(t.credentials=s.credentials,new Request(e.clone(),{credentials:s.credentials})):e}}],beforeError:[async e=>{var t;if(403===(null==(t=e.response)?void 0:t.status))try{"authenticationError"===(await e.response.json()).error.name&&r.VSCodeCommunicationsService.postMessageToExtension({type:"AUTH_TOKEN_REVOKED",payload:{}})}catch(e){}}],credentials:"include",timeout:1e4,headers:{"release-channel":"vscode"}},a={0:"Not Connected",100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required"},c=(e,t)=>{if(null==e)return t;if(null==t)return e;if("function"==typeof AbortController){const s=new AbortController;return e.addEventListener("abort",(()=>{null==s||s.abort(e.reason)})),t.addEventListener("abort",(()=>{null==s||s.abort(t.reason)})),s.signal}return null},u=(e={},t={})=>{const s=new Headers(e);return new Headers(t).forEach(((e,n)=>{t instanceof Headers&&"undefined"===e||void 0===e?s.delete(n):s.set(n,e)})),s},h=(e,...t)=>{if(e.constructor===Object&&(e=Object.assign({},e)),e.constructor===Array&&(e=[...e]),0===t.length)return e;for(const[n,o]of Object.entries(null!=(s=t.shift())?s:[])){var s;o&&(e[n]||Object.assign(e,{[n]:{}}),o.constructor===Object||o.constructor===Array&&o.find((e=>e.constructor===Object))?e[n]=h(e[n],o):o.constructor===Array?Object.assign(e,{[n]:o.find((e=>e.constructor===Array))?[...e[n],...o]:[...new Set([...e[n],...o])]}):Object.assign(e,{[n]:o}))}return e},l=(e,t)=>{if(void 0!==e||void 0!==t)return void 0===e?Object.assign({},t):void 0===t?Object.assign({},e):h(e,t)},d=e=>{return void 0===e?new URLSearchParams:e instanceof URLSearchParams?e:"object"==typeof e?new URLSearchParams((t=e,Object.fromEntries(Object.entries(t).filter((([e,t])=>void 0!==t))))):new URLSearchParams(e);var t},p=["headers","query","beforeError","afterResponse","beforeRequest","data","method","signal"],b=["headers","query","beforeError","afterResponse","beforeRequest","data","method","signal"],f=(e=[],t=[])=>[...new Set([...e,...t])],g=(e,t)=>{var s,o;const{headers:r,query:i,beforeError:a,afterResponse:h,beforeRequest:g,data:w,method:m,signal:y}=e,v=(0,n.Z)(e,p),{headers:R,query:q,beforeError:O,afterResponse:S,beforeRequest:E,data:T,method:j,signal:P}=t,k=(0,n.Z)(t,b);return Object.assign({url:null!=(s=t.url)?s:e.url},v,k,{headers:u(r,R),beforeError:f(a,O),beforeRequest:f(g,E),afterResponse:f(h,S),query:(x=i,A=q,d(void 0===x?A:void 0===A?x:Object.assign({},Object.fromEntries(d(x)),Object.fromEntries(d(A))))),data:l(w,T),method:null==(o=null!=j?j:m)?void 0:o.toUpperCase(),signal:c(y,P)});var x,A};class w extends Error{constructor({message:e="Request Error",request:t,response:s,options:n}){super(e),this.options=void 0,this.request=void 0,this.response=void 0,this.metadata=void 0,this.name="RequestError",this.request=t,this.response=s,this.options=n}}class m extends w{constructor({request:e,response:t,options:s}){super({message:t.statusText||a[t.status]||"HTTP Response Error",request:e,response:t,options:s}),this.statusCode=void 0,this.name="HTTPResponseError",this.statusCode=t.status}}class y{constructor(e,t={}){this.opts=void 0,this.defaultOpts={},this.abortController=void 0,this.abortController=new AbortController,this.defaultOpts=t,this.opts=g(Object.assign({},this.defaultOpts,{signal:this.abortController.signal}),e)}validateOptions(e){const{url:t,method:s,data:n,timeout:o}=e;if(!s)throw new Error("Method is required");if(!t)throw new Error("URL is required");if("string"!=typeof t&&!(t instanceof URL||t instanceof globalThis.Request))throw new TypeError("url must be a string/URL/Request. Found: ");if(o&&o>Number.MAX_SAFE_INTEGER)throw new RangeError(`timeout value must be less than ${Number.MAX_SAFE_INTEGER}`);if(n&&("get"===s||"delete"===s))throw new Error(`Cannot send data with ${s} request`)}async onBeforeRequest(e,t){for(const n of null!=(s=t.beforeRequest)?s:[]){var s;const o=await n({request:e,options:t});if(o instanceof globalThis.Response||o instanceof globalThis.Request)return o}}async onAfterResponse(e,t,s){for(const o of null!=(n=t.afterResponse)?n:[]){var n;const r=await o({request:e,options:t,response:s});if(r instanceof globalThis.Response)return r}}async onBeforeError(e,t){for(const n of null!=(s=t.beforeError)?s:[]){var s;const t=await n(e);if(t instanceof Error)return t}}post(e){return this.request(Object.assign({method:"post"},e))}put(e){return this.request(Object.assign({method:"put"},e))}get(e){return this.request(Object.assign({method:"get"},e))}patch(e){return this.request(Object.assign({method:"patch"},e))}delete(e){return this.request(Object.assign({method:"delete"},e))}}const v=["url","method","query","data","headers"];class R extends y{constructor(e,t={}){super(e,t),this.abortController=new AbortController,this.defaultOpts={}}async fetchViaExtension(e){const t={};let s;for(const[s,n]of e.headers)t[s]=n;try{"function"==typeof e.json&&(s=await e.json())}catch(e){}const n=await r.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"HTTP_REQUEST",payload:{requestOptions:{method:e.method,url:e.url,body:JSON.stringify(s),headers:Object.assign({},t,{connection:"keep-alive"})}}});return new Response(n.body,{status:n.status,statusText:n.statusText,headers:n.headers})}async fetch(e,t){globalThis.fetch.bind(globalThis);const s=await this.onBeforeRequest(e,t);return s instanceof globalThis.Request&&(e=s),s instanceof globalThis.Response?s:this.fetchViaExtension(e.clone())}async send(e,t){let s=await this.fetch(e,t);const n=await this.onAfterResponse(e,t,s);if(n instanceof globalThis.Response&&(s=n),!s.ok){let n=new m({request:e,response:s,options:t});const o=await this.onBeforeError(n,t);throw o instanceof Error&&(n=o),n}return s}async request(e){var t,s,o;const r=g(this.opts,e);this.validateOptions(r);const i=r,{url:a,method:c,query:u,data:h,headers:l}=i,d=(0,n.Z)(i,v);let p;"object"==typeof h&&(p=JSON.stringify(h));const b=a instanceof Request?new URL(a.url):new URL(a,globalThis.location.origin);if(u){const e="string"==typeof u?u.replace(/^\?/,""):new URLSearchParams(u).toString();b.search=e}const f=l instanceof Headers?l:new Headers(null!=(t=l)?t:{});f.set("content-type",null!=(s=f.get("content-type"))?s:"application/json");const w=new globalThis.Request(b,Object.assign({method:c,headers:f,body:p},d)),m=await this.send(w,r);return d.plainText||null!=(o=m.headers.get("content-type"))&&o.includes("text")?await m.text():await m.json()}extend(e){return new R(e,this.opts)}}const q=new R({}),O=["method","query","path","service","data"];class S extends R{constructor(e={},t=i){super(e,t)}sendProxyRequest(e){const{method:t,query:s={},path:o,service:r,data:i}=e,a=(0,n.Z)(e,O);if(!o)throw new Error("Path is required");const c=d(s),u=null!=c&&c.toString()?o+"?"+c.toString():o,h=Object.assign({path:u,service:r,method:t},i);return super.request(Object.assign({},a,{data:h,method:"post"}))}request(e){const t=g(this.opts,e);this.validateOptions(t);const{url:s}=t;return/\/ws\/proxy/.test(s.toString())?this.sendProxyRequest(t):super.request(t)}extend(e){return new S(e,this.opts)}}const E=new S({});var T=s(6777),j=s(8410);function P(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}var k=0;function x(e){return"__private_"+k+++"_"+e}var A=s(2154),C=s(4928),L=s.n(C),N=s(6663),U=s.n(N);const F=6e5,I="offline",M="connected",D="reconnected",_="regular",H="watchdog",G={transports:["websocket"],forceNew:!0,multiplex:!1,reconnection:!0,reconnectionDelay:1e4,reconnectionAttempts:Number.POSITIVE_INFINITY,timeout:5e3,path:"/socket.io",reconnectionDelayMax:6e4,randomizationFactor:0},V={[_]:Object.assign({},G,{transports:["websocket"],reconnectionAttempts:8,reconnectionDelay:1e4,randomizationFactor:.3}),[H]:Object.assign({},G,{transports:["websocket"],reconnection:!0,reconnectionDelay:F,reconnectionDelayMax:F,reconnectionAttempts:Number.POSITIVE_INFINITY,randomizationFactor:.3})},B={baseUrl:U().WEBSOCKET_GATEWAY_URL,url:"/ws/proxy",method:"post",headers:{"release-channel":"vscode"}};var W=x("connectionMode"),Z=x("connectionStatus"),z=x("socketId"),K=x("connectionEvents"),Y=x("socket"),$=x("connectionTelemetry"),J=x("defaultOpts"),X=x("watchdogSetupTimeout"),Q=x("attachListeners");class ee{set connectionStatus(e){P(this,Z)[Z]=e,P(this,K)[K].emit("status",e),this.debugLog("updated connection status",e)}get connectionStatus(){return P(this,Z)[Z]}constructor(e){Object.defineProperty(this,W,{writable:!0,value:_}),Object.defineProperty(this,Z,{writable:!0,value:I}),Object.defineProperty(this,z,{writable:!0,value:void 0}),Object.defineProperty(this,K,{writable:!0,value:new A.EventEmitter}),Object.defineProperty(this,Y,{writable:!0,value:null}),Object.defineProperty(this,$,{writable:!0,value:{connectionAttempt:0,lastDisconnectReason:"",lastDisconnectTime:0,socketOffineTime:0}}),Object.defineProperty(this,J,{writable:!0,value:void 0}),Object.defineProperty(this,X,{writable:!0,value:void 0}),this.debugLog=(...e)=>{var t;Object.assign({socketId:null==(t=P(this,Y)[Y])?void 0:t.id,connectionMode:P(this,W)[W],connectionStatus:this.connectionStatus},P(this,$)[$])},this.onAppOnline=()=>{var e;this.connectionStatus!==M&&this.connectionStatus!==D&&(null==(e=P(this,Y)[Y])||e.disconnect(),this.reconfigureSocket())},Object.defineProperty(this,Q,{writable:!0,value:()=>{if(!P(this,Y)[Y])return;const e={connect:()=>{var e;P(this,Y)[Y]&&(P(this,z)[z]?P(this,z)[z]!==(null==(e=P(this,Y)[Y])?void 0:e.id)&&(P(this,z)[z]=P(this,Y)[Y].id,this.connectionStatus!==D&&(this.connectionStatus=D)):(P(this,z)[z]=P(this,Y)[Y].id,this.connectionStatus=M),P(this,$)[$].socketOffineTime=P(this,$)[$].connectionAttempt<2?0:Date.now()-P(this,$)[$].lastDisconnectTime,P(this,W)[W]===H&&this.clearWatchdog())},reconnect:()=>{var e,t,s;this.connectionStatus!==D&&(P(this,z)[z]!==(null==(e=P(this,Y)[Y])?void 0:e.id)||null!=(t=P(this,Y)[Y])&&t.id)&&(this.connectionStatus=D,P(this,z)[z]=null==(s=P(this,Y)[Y])?void 0:s.id)},reconnecting:()=>{this.connectionStatus="reconnecting"},reconnect_failed:()=>{this.connectionStatus=I,P(this,W)[W]!==H&&this.setupWatchdog()},disconnect:e=>{P(this,$)[$].lastDisconnectReason=e,P(this,$)[$].lastDisconnectTime=Date.now(),this.connectionStatus=I},reconnect_attempt:e=>{P(this,$)[$].connectionAttempt=e}};for(const[t,s]of Object.entries(e))P(this,Y)[Y].on(t,s);globalThis.addEventListener("online",this.onAppOnline)}}),this.reconfigureSocket=(e=_)=>{if(!P(this,Y)[Y])return;P(this,W)[W]=e,this.debugLog("reconfiguring socket to mode ",e);const{reconnection:t,reconnectionAttempts:s,reconnectionDelay:n,reconnectionDelayMax:o,timeout:r}=Object.assign({},P(this,J)[J],V[e]);r&&P(this,Y)[Y].io.timeout(r),t&&P(this,Y)[Y].io.reconnection(t),s&&P(this,Y)[Y].io.reconnectionAttempts(s),n&&P(this,Y)[Y].io.reconnectionDelay(n),o&&P(this,Y)[Y].io.reconnectionDelayMax(o),P(this,Y)[Y].connect()},this.destroyConnection=()=>{var e,t;P(this,Y)[Y]&&(this.debugLog("destroying conenction "),null==(e=P(this,Y)[Y])||e.removeAllListeners(),null==(t=P(this,Y)[Y])||t.disconnect(),P(this,Y)[Y]=null),this.connectionStatus=I,globalThis.removeEventListener("online",this.onAppOnline)},this.createConnection=({connectionMode:e=P(this,W)[W],forceConnect:t=!1}={})=>{t&&this.destroyConnection(),P(this,W)[W]!==e&&(P(this,W)[W]=e),this.connectionStatus===M&&P(this,Y)[Y]||(P(this,$)[$].connectionAttempt++,P(this,Y)[Y]=L()(`${P(this,J)[J].baseUrl}`,Object.assign({},V[e],P(this,J)[J])),P(this,Q)[Q]())},this.clearWatchdog=()=>{clearInterval(P(this,X)[X]),P(this,X)[X]=void 0,this.reconfigureSocket()},this.setupWatchdog=()=>{P(this,X)[X]=setTimeout((()=>{this.connectionStatus===I&&this.reconfigureSocket(H)}),F)},this.waitForConnection=()=>new Promise(((e,t)=>{if(this.connectionStatus===M||this.connectionStatus===D)return e();this.subscribeToConnectionStatus((t=>{if(t===M||t===D)return e()}))})),P(this,W)[W]=e.connectionMode||_,P(this,J)[J]=e,this.createConnection()}subscribeToConnectionStatus(e){P(this,K)[K].on("status",e)}attachListener(e,t){var s;null==(s=P(this,Y)[Y])||s.on(e,t)}onReconnect(e){P(this,K)[K].on("status",(t=>{t===D&&e()}))}async emit(e){return await this.waitForConnection(),new Promise(((t,s)=>{var n;null==(n=P(this,Y)[Y])||n.emit(e.method,e,(e=>t(e)))}))}}class te extends Error{constructor(){super(),this.message="Cancelled Request"}}class se extends Error{constructor(){super(),this.message="Socket Disconnected"}}class ne extends y{constructor(e,t={}){super(e,t),this.websocket=null,this.options={},this.options=Object.assign({},e,t)}createSocket(){return this.websocket?this.websocket:new ee({baseUrl:this.options.baseUrl})}async request(e){return this.websocket||(this.websocket=this.createSocket()),this.websocket.emit(e)}async createSubscription(e){this.websocket||(this.websocket=this.createSocket());const{subscribeRequest:t,unsubscribeRequest:s,subscriptionEvents:n,responseFilter:o,broadcastFilter:r,signal:i}=e,a=new T.Subject,c=new Promise((e=>{const t=()=>{const t=new te;a.error(t),e(t)};null==i||i.addEventListener("abort",t),null!=i&&i.aborted&&t()})),u=await Promise.race([this.websocket.emit(t),c]),h=u instanceof te;for(const e of n)this.websocket.attachListener(e,(e=>{a.next(e)}));let l=a.asObservable();if(this.websocket.onReconnect((()=>{a.error(new se)})),!h&&o&&r){const e=o(u);l=l.pipe((0,j.filter)((t=>(r&&r(t))===e)))}return{subscribe:l.subscribe.bind(l),unsubscribe:()=>{var e;a.complete(),null==(e=this.websocket)||e.emit(s)}}}extend(e){return new ne(e,this.opts)}}const oe=new class extends ne{constructor(e,t=B){super(e,t)}constructRequestContext(e){if(e.url&&!/\/ws\/proxy/.test(e.url.toString())){let t=e.url;if(e.query&&!e.url.toString().includes("?")){const s=d(e.query).toString();t=t.toString()+"?"+s}const s=(0,o.getAuthRequestOptions)();return Object.assign({},e,{url:t,headers:Object.assign({},this.defaultOpts.headers,s.headers,e.headers)})}const{service:t,method:s,path:n,query:r,data:i,headers:a,body:c}=e;if(!n)throw new Error("Path is required");if(!t)throw new Error("Service is required");const u=d(r),h=null!=u&&u.toString()?n+"?"+u.toString():n,l=(0,o.getAuthRequestOptions)();return Object.assign({},this.defaultOpts,{headers:Object.assign({},this.defaultOpts.headers,l.headers,a),data:{service:t,method:s,path:h,data:i,body:c}})}request(e){const t=this.constructRequestContext(e);return super.request(t)}subscribe(e){const t={subscribeRequest:this.constructRequestContext(e.subscribeRequest),unsubscribeRequest:this.constructRequestContext(e.unsubscribeRequest),subscriptionEvents:e.subscriptionEvents,responseFilter:e.responseFilter,broadcastFilter:e.broadcastFilter,signal:e.signal};return super.createSubscription(t)}}({})}}]);
//# sourceMappingURL=29.ea6251f5c4be07a9.js.map