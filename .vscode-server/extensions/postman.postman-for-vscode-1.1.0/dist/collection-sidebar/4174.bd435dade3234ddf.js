/*! For license information please see 4174.bd435dade3234ddf.js.LICENSE.txt */
"use strict";(self.webpackChunkcollection_sidebar=self.webpackChunkcollection_sidebar||[]).push([[4174,7617],{54174:(e,r,o)=>{o.r(r),o.d(r,{InlineEditor:()=>p});var t=o(40540),n=o.n(t);const a=new Set(["Alt","Meta","Control","Shift"]),i=({ctrlKey:e,shiftKey:r,altKey:o,keys:n,callback:i})=>{const l=(0,t.useRef)([]),c=(0,t.useRef)(!1),s=(0,t.useRef)(!1),u=(0,t.useRef)(!1),d=(0,t.useRef)(null),f=(0,t.useRef)(i);f.current=i,(0,t.useEffect)((()=>{const t=t=>{if((t.ctrlKey||t.metaKey)&&(c.current=!0),t.shiftKey&&(s.current=!0),t.altKey&&(u.current=!0),!a.has(t.key)&&Array.isArray(n)){const e=n.findIndex((e=>e.toLowerCase()===t.key.toLowerCase()));-1!==e&&(l.current[e]=t.key)}const i=!e||c.current,v=!r||s.current,p=!o||u.current;if(d.current=setTimeout((()=>{c.current=!1,s.current=!1,u.current=!1,l.current=[]}),250),i&&v&&p){if(Array.isArray(n)&&((e,r)=>{let o=0;for(const n of e){var t;if(n.toLowerCase()!==(null==(t=r[o])?void 0:t.toLowerCase()))return!1;o++}return!0})(n,l.current))return f.current();if(n===t.key)return f.current()}};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t),d.current&&clearTimeout(d.current)}}),[e,r,o,n])};var l=o(59530),c=o.n(l),s=o(52322);const u=c().input.withConfig({displayName:"input__StyledInput",componentId:"sc-q7849h-0"})(["width:100%;font-size:var(--text-size-m);color:var(--content-color-primary);font-weight:inherit;line-height:var(--line-height-m);border-radius:var(--border-radius-default);background-color:var(--background-color-secondary);border:var(--border-width-default) var(--border-style-solid) var(--border-color-default);&:hover{border-color:var(--border-color-strong);background-color:var(--background-color-tertiary);}&:focus{border-color:var(--border-color-strong);background-color:var(--background-color-primary);}&:hover,&:focus,&:active{outline:none;}"]),d=e=>{const{value:r,type:o,placeholder:t,autoFocus:n,disabled:a,testId:i,onClick:l,ref:c,onBlur:d,onChange:f,readOnly:v,className:p}=e;return(0,s.jsx)("div",{className:"input-field",children:(0,s.jsx)(u,{className:p,ref:c,autoFocus:n,value:r,onBlur:d,onChange:e=>{f&&f(e.target.value)},onClick:l,type:o||"text",placeholder:t,disabled:a,readOnly:v,"data-testid":null!=i?i:"base-input-field"})})},f=c().div.withConfig({displayName:"inline-editor__InlineEditorWrapper",componentId:"sc-r9fg6l-0"})(["width:100%;padding-right:var(--spacing-m);"]),v=c().div.withConfig({displayName:"inline-editor__StyledDiv",componentId:"sc-r9fg6l-1"})(["margin-right:var(--spacing-xs);padding:var(--spacing-xs);padding-right:var(--spacing-s);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;:hover{background-color:var(--highlight-background-color-primary);border-radius:var(--border-radius-default);}"]),p=n().forwardRef(((e,r)=>{const[o,n]=(0,t.useState)(e.value);(0,t.useEffect)((()=>{n(e.value)}),[e.value]);const{placeholder:a,className:l,setIsEditMode:c,isEditMode:u,isDisabled:p,onSubmit:y,onCancel:h,onChange:g,onClick:b}=e;return i({keys:"Enter",callback:()=>{if(o!==e.value&&o.trim()){const e=o.trim();y(e),n(e),c&&c(!1)}}}),i({keys:"Escape",callback:()=>{c&&c(!1),n(e.value),h&&h()}}),u&&!p?(0,s.jsx)(f,{children:(0,s.jsx)(d,{autoFocus:!0,className:`inline-input ${null!=l?l:""}`,placeholder:a,ref:r,value:o,onBlur:()=>{if(o.trim()){const e=o.trim();y(e),n(e)}else n(e.value);c&&c(!1)},onChange:e=>{g&&g(e),n(e)},onClick:e=>{e.stopPropagation(),e.preventDefault(),b&&b()}})}):(0,s.jsx)(v,{role:"navigation",title:e.value,className:l||"",children:e.value})}))},11837:(e,r,o)=>{var t=o(40540),n=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),r.Fragment=a("react.fragment")}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,o){var t,a={},s=null,u=null;for(t in void 0!==o&&(s=""+o),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(u=r.ref),r)l.call(r,t)&&!c.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:n,type:e,key:s,ref:u,props:a,_owner:i.current}}r.jsx=s,r.jsxs=s},52322:(e,r,o)=>{e.exports=o(11837)}}]);
//# sourceMappingURL=4174.bd435dade3234ddf.js.map