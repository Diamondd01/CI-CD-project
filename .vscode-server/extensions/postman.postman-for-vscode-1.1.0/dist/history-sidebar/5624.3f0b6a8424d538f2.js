"use strict";(self.webpackChunkhistory_sidebar=self.webpackChunkhistory_sidebar||[]).push([[5624,7560,2389,7397,730],{7560:(r,e,t)=>{function n(){return n=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},n.apply(this,arguments)}t.d(e,{Z:()=>n})},98283:(r,e,t)=>{function n(r,e){if(null==r)return{};var t,n,o={},s=Object.keys(r);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}t.d(e,{Z:()=>n})},730:(r,e,t)=>{t.r(e),t.d(e,{AwaitErrorBoundary:()=>y,CustomErrorBoundary:()=>x,GenericErrorMessage:()=>I,RouteErrorBoundary:()=>g,logError:()=>c}),t(40540);var n=t(60607),o=t(7560),s=t(98283),a=t(21466),i=t(70381);const l=["crash"],c=(r,e)=>{let{crash:t=!1}=e,n=(0,s.Z)(e,l);((r,e)=>{var t;null==(t=window)||null==(t=t.newrelic)||null==t.noticeError||t.noticeError(r,e)})(r,(0,o.Z)({crash:t},n)),((r,e)=>{i.withScope((t=>{t.setExtra("ErrorStack",e.stack),t.setExtra("ErrorAppId",e.appId),t.setExtra("ErrorElementId",e.errorElementId),i.captureException(r)}))})(r,(0,o.Z)({crash:t},n)),((r,e)=>{a.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:e.appId,error:(null==r.toString?void 0:r.toString())||r.message,info:e}})})(r,n)};var d=t(49437),p=t(80047);const u="Something Went Wrong",E="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var m=t(52322);const h=["title","description","message","illustration","error"],I=r=>{let{title:e=u,description:t=E,message:n,illustration:a="illustration-unable-to-load",error:i}=r,l=(0,s.Z)(r,h);const c=n||i&&i.message;return(0,m.jsxs)(d.Z,(0,o.Z)({title:e,description:t},l,{children:[c&&(0,m.jsx)("p",{children:(0,m.jsx)("i",{children:c})}),(0,m.jsx)(p.Z,{name:a})]}))},g=({children:r,title:e,description:t,message:o,appId:s,errorElementId:a})=>{const i=(0,n.useRouteError)();return c(i,{stack:i.stack,appId:s,errorElementId:a}),r||(0,m.jsx)(I,{title:e,description:t,error:i,message:o})};var k=t(56010);const b=["children","onError","appId","errorElementId","FallbackComponent"],f=(r,e,t,n)=>{c(r,{stack:e.componentStack,appId:t,crash:!0,errorElementId:n})},x=r=>{let{children:e,onError:t,appId:n,errorElementId:a,FallbackComponent:i=I}=r,l=(0,s.Z)(r,b);return(0,m.jsx)(k.ErrorBoundary,(0,o.Z)({FallbackComponent:null!=l&&l.fallback?void 0:i,onError:(r,e)=>(t||f)(r,e,n,a)},l,{children:e}))},y=({children:r,title:e,description:t,message:o,appId:s,errorElementId:a})=>{const i=(0,n.useAsyncError)();return c(i,{stack:i.stack,appId:s,errorElementId:a}),r||(0,m.jsx)(I,{title:e,description:t,error:i,message:o})}}}]);
//# sourceMappingURL=5624.3f0b6a8424d538f2.js.map