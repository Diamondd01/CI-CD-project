"use strict";(self.webpackChunkworkbench_import_entity=self.webpackChunkworkbench_import_entity||[]).push([[730],{730:(r,e,t)=>{t.r(e),t.d(e,{AwaitErrorBoundary:()=>w,CustomErrorBoundary:()=>S,GenericErrorMessage:()=>I,RouteErrorBoundary:()=>k,logError:()=>c}),t(40540);var o=t(60607),n=t(7560),s=t(98283),a=t(21466),i=t(70381);const l=["crash"],c=(r,e)=>{let{crash:t=!1}=e,o=(0,s.Z)(e,l);((r,e)=>{var t;null==(t=window)||null==(t=t.newrelic)||null==t.noticeError||t.noticeError(r,e)})(r,(0,n.Z)({crash:t},o)),((r,e)=>{i.withScope((t=>{t.setExtra("ErrorStack",e.stack),t.setExtra("ErrorAppId",e.appId),t.setExtra("ErrorElementId",e.errorElementId),i.captureException(r)}))})(r,(0,n.Z)({crash:t},o)),((r,e)=>{a.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:e.appId,error:(null==r.toString?void 0:r.toString())||r.message,info:e}})})(r,o)};var p=t(49437),d=t(80047);const E="Something Went Wrong",m="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var u=t(52322);const h=["title","description","message","illustration","error"],I=r=>{let{title:e=E,description:t=m,message:o,illustration:a="illustration-unable-to-load",error:i}=r,l=(0,s.Z)(r,h);const c=o||i&&i.message;return(0,u.jsxs)(p.Z,(0,n.Z)({title:e,description:t},l,{children:[c&&(0,u.jsx)("p",{children:(0,u.jsx)("i",{children:c})}),(0,u.jsx)(d.Z,{name:a})]}))},k=({children:r,title:e,description:t,message:n,appId:s,errorElementId:a})=>{const i=(0,o.useRouteError)();return c(i,{stack:i.stack,appId:s,errorElementId:a}),r||(0,u.jsx)(I,{title:e,description:t,error:i,message:n})};var g=t(56010);const x=["children","onError","appId","errorElementId","FallbackComponent"],b=(r,e,t,o)=>{c(r,{stack:e.componentStack,appId:t,crash:!0,errorElementId:o})},S=r=>{let{children:e,onError:t,appId:o,errorElementId:a,FallbackComponent:i=I}=r,l=(0,s.Z)(r,x);return(0,u.jsx)(g.ErrorBoundary,(0,n.Z)({FallbackComponent:null!=l&&l.fallback?void 0:i,onError:(r,e)=>(t||b)(r,e,o,a)},l,{children:e}))},w=({children:r,title:e,description:t,message:n,appId:s,errorElementId:a})=>{const i=(0,o.useAsyncError)();return c(i,{stack:i.stack,appId:s,errorElementId:a}),r||(0,u.jsx)(I,{title:e,description:t,error:i,message:n})}}}]);
//# sourceMappingURL=730.b844df50d42a8116.js.map