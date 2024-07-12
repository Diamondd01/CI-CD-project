"use strict";(self.webpackChunkcollection_sidebar=self.webpackChunkcollection_sidebar||[]).push([[9304],{39304:(r,n,e)=>{var t;e.r(n),e.d(n,{NIL:()=>V,parse:()=>y,stringify:()=>f,v1:()=>h,v3:()=>R,v4:()=>k,v5:()=>M,validate:()=>u,version:()=>S});var o=new Uint8Array(16);function a(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(o)}const i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,u=function(r){return"string"==typeof r&&i.test(r)};for(var s=[],c=0;c<256;++c)s.push((c+256).toString(16).substr(1));const f=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(s[r[n+0]]+s[r[n+1]]+s[r[n+2]]+s[r[n+3]]+"-"+s[r[n+4]]+s[r[n+5]]+"-"+s[r[n+6]]+s[r[n+7]]+"-"+s[r[n+8]]+s[r[n+9]]+"-"+s[r[n+10]]+s[r[n+11]]+s[r[n+12]]+s[r[n+13]]+s[r[n+14]]+s[r[n+15]]).toLowerCase();if(!u(e))throw TypeError("Stringified UUID is invalid");return e};var l,v,p=0,d=0;const h=function(r,n,e){var t=n&&e||0,o=n||new Array(16),i=(r=r||{}).node||l,u=void 0!==r.clockseq?r.clockseq:v;if(null==i||null==u){var s=r.random||(r.rng||a)();null==i&&(i=l=[1|s[0],s[1],s[2],s[3],s[4],s[5]]),null==u&&(u=v=16383&(s[6]<<8|s[7]))}var c=void 0!==r.msecs?r.msecs:Date.now(),h=void 0!==r.nsecs?r.nsecs:d+1,y=c-p+(h-d)/1e4;if(y<0&&void 0===r.clockseq&&(u=u+1&16383),(y<0||c>p)&&void 0===r.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=c,d=h,v=u;var g=(1e4*(268435455&(c+=122192928e5))+h)%4294967296;o[t++]=g>>>24&255,o[t++]=g>>>16&255,o[t++]=g>>>8&255,o[t++]=255&g;var w=c/4294967296*1e4&268435455;o[t++]=w>>>8&255,o[t++]=255&w,o[t++]=w>>>24&15|16,o[t++]=w>>>16&255,o[t++]=u>>>8|128,o[t++]=255&u;for(var m=0;m<6;++m)o[t+m]=i[m];return n||f(o)},y=function(r){if(!u(r))throw TypeError("Invalid UUID");var n,e=new Uint8Array(16);return e[0]=(n=parseInt(r.slice(0,8),16))>>>24,e[1]=n>>>16&255,e[2]=n>>>8&255,e[3]=255&n,e[4]=(n=parseInt(r.slice(9,13),16))>>>8,e[5]=255&n,e[6]=(n=parseInt(r.slice(14,18),16))>>>8,e[7]=255&n,e[8]=(n=parseInt(r.slice(19,23),16))>>>8,e[9]=255&n,e[10]=(n=parseInt(r.slice(24,36),16))/1099511627776&255,e[11]=n/4294967296&255,e[12]=n>>>24&255,e[13]=n>>>16&255,e[14]=n>>>8&255,e[15]=255&n,e};function g(r,n,e){function t(r,t,o,a){if("string"==typeof r&&(r=function(r){r=unescape(encodeURIComponent(r));for(var n=[],e=0;e<r.length;++e)n.push(r.charCodeAt(e));return n}(r)),"string"==typeof t&&(t=y(t)),16!==t.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var i=new Uint8Array(16+r.length);if(i.set(t),i.set(r,t.length),(i=e(i))[6]=15&i[6]|n,i[8]=63&i[8]|128,o){a=a||0;for(var u=0;u<16;++u)o[a+u]=i[u];return o}return f(i)}try{t.name=r}catch(r){}return t.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",t.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",t}function w(r){return 14+(r+64>>>9<<4)+1}function m(r,n){var e=(65535&r)+(65535&n);return(r>>16)+(n>>16)+(e>>16)<<16|65535&e}function b(r,n,e,t,o,a){return m((i=m(m(n,r),m(t,a)))<<(u=o)|i>>>32-u,e);var i,u}function A(r,n,e,t,o,a,i){return b(n&e|~n&t,r,n,o,a,i)}function U(r,n,e,t,o,a,i){return b(n&t|e&~t,r,n,o,a,i)}function I(r,n,e,t,o,a,i){return b(n^e^t,r,n,o,a,i)}function C(r,n,e,t,o,a,i){return b(e^(n|~t),r,n,o,a,i)}const R=g("v3",48,(function(r){if("string"==typeof r){var n=unescape(encodeURIComponent(r));r=new Uint8Array(n.length);for(var e=0;e<n.length;++e)r[e]=n.charCodeAt(e)}return function(r){for(var n=[],e=32*r.length,t="0123456789abcdef",o=0;o<e;o+=8){var a=r[o>>5]>>>o%32&255,i=parseInt(t.charAt(a>>>4&15)+t.charAt(15&a),16);n.push(i)}return n}(function(r,n){r[n>>5]|=128<<n%32,r[w(n)-1]=n;for(var e=1732584193,t=-271733879,o=-1732584194,a=271733878,i=0;i<r.length;i+=16){var u=e,s=t,c=o,f=a;e=A(e,t,o,a,r[i],7,-680876936),a=A(a,e,t,o,r[i+1],12,-389564586),o=A(o,a,e,t,r[i+2],17,606105819),t=A(t,o,a,e,r[i+3],22,-1044525330),e=A(e,t,o,a,r[i+4],7,-176418897),a=A(a,e,t,o,r[i+5],12,1200080426),o=A(o,a,e,t,r[i+6],17,-1473231341),t=A(t,o,a,e,r[i+7],22,-45705983),e=A(e,t,o,a,r[i+8],7,1770035416),a=A(a,e,t,o,r[i+9],12,-1958414417),o=A(o,a,e,t,r[i+10],17,-42063),t=A(t,o,a,e,r[i+11],22,-1990404162),e=A(e,t,o,a,r[i+12],7,1804603682),a=A(a,e,t,o,r[i+13],12,-40341101),o=A(o,a,e,t,r[i+14],17,-1502002290),e=U(e,t=A(t,o,a,e,r[i+15],22,1236535329),o,a,r[i+1],5,-165796510),a=U(a,e,t,o,r[i+6],9,-1069501632),o=U(o,a,e,t,r[i+11],14,643717713),t=U(t,o,a,e,r[i],20,-373897302),e=U(e,t,o,a,r[i+5],5,-701558691),a=U(a,e,t,o,r[i+10],9,38016083),o=U(o,a,e,t,r[i+15],14,-660478335),t=U(t,o,a,e,r[i+4],20,-405537848),e=U(e,t,o,a,r[i+9],5,568446438),a=U(a,e,t,o,r[i+14],9,-1019803690),o=U(o,a,e,t,r[i+3],14,-187363961),t=U(t,o,a,e,r[i+8],20,1163531501),e=U(e,t,o,a,r[i+13],5,-1444681467),a=U(a,e,t,o,r[i+2],9,-51403784),o=U(o,a,e,t,r[i+7],14,1735328473),e=I(e,t=U(t,o,a,e,r[i+12],20,-1926607734),o,a,r[i+5],4,-378558),a=I(a,e,t,o,r[i+8],11,-2022574463),o=I(o,a,e,t,r[i+11],16,1839030562),t=I(t,o,a,e,r[i+14],23,-35309556),e=I(e,t,o,a,r[i+1],4,-1530992060),a=I(a,e,t,o,r[i+4],11,1272893353),o=I(o,a,e,t,r[i+7],16,-155497632),t=I(t,o,a,e,r[i+10],23,-1094730640),e=I(e,t,o,a,r[i+13],4,681279174),a=I(a,e,t,o,r[i],11,-358537222),o=I(o,a,e,t,r[i+3],16,-722521979),t=I(t,o,a,e,r[i+6],23,76029189),e=I(e,t,o,a,r[i+9],4,-640364487),a=I(a,e,t,o,r[i+12],11,-421815835),o=I(o,a,e,t,r[i+15],16,530742520),e=C(e,t=I(t,o,a,e,r[i+2],23,-995338651),o,a,r[i],6,-198630844),a=C(a,e,t,o,r[i+7],10,1126891415),o=C(o,a,e,t,r[i+14],15,-1416354905),t=C(t,o,a,e,r[i+5],21,-57434055),e=C(e,t,o,a,r[i+12],6,1700485571),a=C(a,e,t,o,r[i+3],10,-1894986606),o=C(o,a,e,t,r[i+10],15,-1051523),t=C(t,o,a,e,r[i+1],21,-2054922799),e=C(e,t,o,a,r[i+8],6,1873313359),a=C(a,e,t,o,r[i+15],10,-30611744),o=C(o,a,e,t,r[i+6],15,-1560198380),t=C(t,o,a,e,r[i+13],21,1309151649),e=C(e,t,o,a,r[i+4],6,-145523070),a=C(a,e,t,o,r[i+11],10,-1120210379),o=C(o,a,e,t,r[i+2],15,718787259),t=C(t,o,a,e,r[i+9],21,-343485551),e=m(e,u),t=m(t,s),o=m(o,c),a=m(a,f)}return[e,t,o,a]}(function(r){if(0===r.length)return[];for(var n=8*r.length,e=new Uint32Array(w(n)),t=0;t<n;t+=8)e[t>>5]|=(255&r[t/8])<<t%32;return e}(r),8*r.length))})),k=function(r,n,e){var t=(r=r||{}).random||(r.rng||a)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,n){e=e||0;for(var o=0;o<16;++o)n[e+o]=t[o];return n}return f(t)};function E(r,n,e,t){switch(r){case 0:return n&e^~n&t;case 1:case 3:return n^e^t;case 2:return n&e^n&t^e&t}}function D(r,n){return r<<n|r>>>32-n}const M=g("v5",80,(function(r){var n=[1518500249,1859775393,2400959708,3395469782],e=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof r){var t=unescape(encodeURIComponent(r));r=[];for(var o=0;o<t.length;++o)r.push(t.charCodeAt(o))}else Array.isArray(r)||(r=Array.prototype.slice.call(r));r.push(128);for(var a=r.length/4+2,i=Math.ceil(a/16),u=new Array(i),s=0;s<i;++s){for(var c=new Uint32Array(16),f=0;f<16;++f)c[f]=r[64*s+4*f]<<24|r[64*s+4*f+1]<<16|r[64*s+4*f+2]<<8|r[64*s+4*f+3];u[s]=c}u[i-1][14]=8*(r.length-1)/Math.pow(2,32),u[i-1][14]=Math.floor(u[i-1][14]),u[i-1][15]=8*(r.length-1)&4294967295;for(var l=0;l<i;++l){for(var v=new Uint32Array(80),p=0;p<16;++p)v[p]=u[l][p];for(var d=16;d<80;++d)v[d]=D(v[d-3]^v[d-8]^v[d-14]^v[d-16],1);for(var h=e[0],y=e[1],g=e[2],w=e[3],m=e[4],b=0;b<80;++b){var A=Math.floor(b/20),U=D(h,5)+E(A,y,g,w)+m+n[A]+v[b]>>>0;m=w,w=g,g=D(y,30)>>>0,y=h,h=U}e[0]=e[0]+h>>>0,e[1]=e[1]+y>>>0,e[2]=e[2]+g>>>0,e[3]=e[3]+w>>>0,e[4]=e[4]+m>>>0}return[e[0]>>24&255,e[0]>>16&255,e[0]>>8&255,255&e[0],e[1]>>24&255,e[1]>>16&255,e[1]>>8&255,255&e[1],e[2]>>24&255,e[2]>>16&255,e[2]>>8&255,255&e[2],e[3]>>24&255,e[3]>>16&255,e[3]>>8&255,255&e[3],e[4]>>24&255,e[4]>>16&255,e[4]>>8&255,255&e[4]]})),V="00000000-0000-0000-0000-000000000000",S=function(r){if(!u(r))throw TypeError("Invalid UUID");return parseInt(r.substr(14,1),16)}}}]);
//# sourceMappingURL=9304.c142b560f345455a.js.map