"use strict";(self.webpackChunkenvironment_workbench=self.webpackChunkenvironment_workbench||[]).push([[966,9211],{20966:(e,n,t)=>{t.r(n),t.d(n,{DESKTOP_WINDOW_EVENT_CHANNEL:()=>f,INTERNAL_CHANNEL_BROADCAST_MAIN:()=>m,TOGGLE_WINDOW_MAXIMIZE_EVENT:()=>E,desktopCommunicationService:()=>a,useOpenNativeMenu:()=>l,useScreenParams:()=>b,useZoomFactor:()=>_});const r={invoke:()=>{throw new Error("Function not implemented.")},send:()=>{throw new Error("Function not implemented.")},subscribe:()=>{throw new Error("Function not implemented.")}},u=()=>r,c=(e,...n)=>u().invoke(e,...n);var o=t(40540);function i(e){return[e.label,e.id,e.accelerator].filter(Boolean).join("_")}function s(e,n=new Map){return Array.isArray(e)?{menu:null==e?void 0:e.map((e=>{var t;return e.click&&n.set(i(e),e.click),Object.assign({},e,{click:i(e),submenu:null==(t=s(e.submenu,n))?void 0:t.menu})})),clickHandlers:n}:{}}function l(e){const n=(0,o.useRef)();return(0,o.useEffect)((()=>u().subscribe("CLOSE_POPUP_MENU",(function(t,r){e&&"function"==typeof e&&!r&&e();const u=r&&n.current&&n.current.get(r);u&&u()}))),[]),e=>{const{menu:t,clickHandlers:r}=s(e);n.current=r,c("setNativeElectronMenuOpen",{menu:t})}}const a={send:(e,...n)=>u().send(e,...n),invoke:c,subscribe:(e,n)=>u().subscribe(e,n)||(()=>null)},m="PM_EB_INT_BROADCAST_MAIN",E="toggle-maximize",f="requester-window-events";function _(){const[e]=(0,o.useState)((()=>1));return(0,o.useEffect)((()=>{}),[]),e}function b(){const[e]=(0,o.useState)((()=>({isFullScreen:!1,isMaximized:!1,isBlurred:!1})));return(0,o.useEffect)((()=>{}),[]),e}}}]);
//# sourceMappingURL=966.e94d8ece6a826c22.js.map