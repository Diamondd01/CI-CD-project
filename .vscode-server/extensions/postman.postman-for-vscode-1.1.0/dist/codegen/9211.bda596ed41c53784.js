"use strict";(self.webpackChunkcodegen=self.webpackChunkcodegen||[]).push([[9211],{20966:(e,n,t)=>{t.r(n),t.d(n,{DESKTOP_WINDOW_EVENT_CHANNEL:()=>f,INTERNAL_CHANNEL_BROADCAST_MAIN:()=>E,TOGGLE_WINDOW_MAXIMIZE_EVENT:()=>d,desktopCommunicationService:()=>m,useOpenNativeMenu:()=>a,useScreenParams:()=>_,useZoomFactor:()=>N});const r={invoke:()=>{throw new Error("Function not implemented.")},send:()=>{throw new Error("Function not implemented.")},subscribe:()=>{throw new Error("Function not implemented.")}},u=()=>r,c=(e,...n)=>u().invoke(e,...n);var o=t(7560),s=t(40540);function i(e){return[e.label,e.id,e.accelerator].filter(Boolean).join("_")}function l(e,n=new Map){return Array.isArray(e)?{menu:null==e?void 0:e.map((e=>{var t;return e.click&&n.set(i(e),e.click),(0,o.Z)({},e,{click:i(e),submenu:null==(t=l(e.submenu,n))?void 0:t.menu})})),clickHandlers:n}:{}}function a(e){const n=(0,s.useRef)();return(0,s.useEffect)((()=>u().subscribe("CLOSE_POPUP_MENU",(function(t,r){e&&"function"==typeof e&&!r&&e();const u=r&&n.current&&n.current.get(r);u&&u()}))),[]),e=>{const{menu:t,clickHandlers:r}=l(e);n.current=r,c("setNativeElectronMenuOpen",{menu:t})}}const m={send:(e,...n)=>u().send(e,...n),invoke:c,subscribe:(e,n)=>u().subscribe(e,n)||(()=>null)},E="PM_EB_INT_BROADCAST_MAIN",d="toggle-maximize",f="requester-window-events";function N(){const[e]=(0,s.useState)((()=>1));return(0,s.useEffect)((()=>{}),[]),e}function _(){const[e]=(0,s.useState)((()=>({isFullScreen:!1,isMaximized:!1,isBlurred:!1})));return(0,s.useEffect)((()=>{}),[]),e}}}]);
//# sourceMappingURL=9211.bda596ed41c53784.js.map