"use strict";(self.webpackChunkws_workbench=self.webpackChunkws_workbench||[]).push([[3528],{83528:(o,l,n)=>{n.r(l),n.d(l,{LazyModalsContainer:()=>i,PostmanModalFactory:()=>p});var e=n(7560),a=n(40540),s=n(35348),t=n(35736);const d="modalmanager.toggleModal";var c=n(52322);const r={isOpen:!1,modalComponent:s.u_,lazyModalContent:()=>(0,c.jsx)("div",{}),modalProps:void 0,childProps:void 0,fallback:(0,c.jsx)(s.hz,{children:(0,c.jsx)(t.Z,{size:"large"})})},i=()=>{const[o,l]=(0,a.useState)(r);return(0,a.useEffect)((()=>{const n=n=>{const{fallback:a,customModalComponent:t,lazyModalContent:d,childProps:c,modalProps:i}=n.detail;l(null!==d?{modalProps:i,childProps:c,isOpen:!0,modalComponent:t||s.u_,lazyModalContent:d,fallback:a||r.fallback}:(0,e.Z)({},o,{isOpen:!1}))};return document.addEventListener(d,n),()=>{document.removeEventListener(d,n)}}),[o]),(0,c.jsx)(o.modalComponent,(0,e.Z)({},o.modalProps,{isOpen:o.isOpen,onClose:()=>{var n,e;null==(n=o.modalProps)||null==(e=n.onClose)||e.call(n),l(r)},children:(0,c.jsx)(a.Suspense,{fallback:o.fallback,children:(0,c.jsx)(o.lazyModalContent,(0,e.Z)({},o.childProps,{onClose:()=>{var n,e;null==o||null==(n=o.childProps)||null==(e=n.onClose)||e.call(n),l(r)}}))})}))},p=Object.freeze({openModal(o){const l=new CustomEvent(d,{detail:o});document.dispatchEvent(l)},closeModal(){const o=new CustomEvent(d,{detail:{lazyModalContent:null}});document.dispatchEvent(o)}})}}]);
//# sourceMappingURL=3528.b2e90b3a8c486d9f.js.map