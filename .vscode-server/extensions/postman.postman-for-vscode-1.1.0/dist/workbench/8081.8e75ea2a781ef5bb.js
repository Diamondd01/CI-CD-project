"use strict";(self.webpackChunkworkbench=self.webpackChunkworkbench||[]).push([[8081,7560,2389,2063],{7560:(e,t,n)=>{function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:()=>r})},23911:(e,t,n)=>{n.r(t),n.d(t,{Modals:()=>a});var r={};n.r(r),n.d(r,{ModalDialog:()=>m});var a={};n.r(a),n.d(a,{Ui:()=>r,getModals:()=>s});var i=n(21466);class o{async showWarningDialog(e){const{subject:t,message:n,options:r}=e;return i.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"UI_SHOW_MODAL_DIALOG",payload:{severity:"warning",subject:t,message:n,options:r}})}}function s(){return new o}var c=n(40540),l=n(35348),d=n(58560),p=n(80605),u=n(52322);const m=e=>{const[t,n]=(0,c.useState)(null),[r,a]=(0,c.useState)(!1);return(0,c.useEffect)((()=>{function t(t){const{detail:r}=t;e.uid===r.uid&&(n(r),a(!0))}return window.addEventListener("pm:modal:request",t),()=>{window.removeEventListener("pm:modal:request",t)}}),[e.uid]),t?(0,u.jsxs)(l.u_,{isOpen:r,size:"small",onClose:()=>a(!1),children:[(0,u.jsx)(l.xB,{heading:t.subject}),(0,u.jsx)(l.hz,{children:(0,u.jsx)("p",{children:t.message})}),(0,u.jsx)(l.mz,{children:(0,u.jsx)(d.Z,{justifyContent:"flex-end",grow:1,shrink:1,gap:"spacing-m",children:t.options.map((e=>(0,u.jsx)(p.Z,{type:!0===e.isPrimary?"primary":"secondary",text:e.title,onClick:()=>{t.callback(e),a(!1)}},e.title)))})})]}):null}},49627:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7560),a=n(40540),i=n.n(a),o=n(207),s=i().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i().createElement("path",{d:"M8.70711 8.00001L13.3536 3.35356L12.6465 2.64645L8.00001 7.2929L3.35356 2.64645L2.64645 3.35356L7.2929 8.00001L2.64645 12.6465L3.35356 13.3536L8.00001 8.70711L12.6465 13.3536L13.3536 12.6465L8.70711 8.00001Z",fill:"#6B6B6B"})),c=i().forwardRef((function(e,t){return i().createElement(o.Z,(0,r.Z)({},e,{svg:s,ref:t}))}));c.getName=function(){return"icon-action-close-stroke"};const l=c},74962:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(72247),a=n(54047),i=n(40540),o=n.n(i),s=n(1314),c=n.n(s),l=n(59530),d=n.n(l),p=n(43753),u=n(90265);function m(e,t){switch(e){case"h1":return"\n        font-size: ".concat(t["text-size-xxxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.72px;\n      ");case"h2":return"\n        font-size: ".concat(t["text-size-xxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.56px;\n      ");case"h3":return"\n        font-size: ".concat(t["text-size-xl"],";\n        line-height: 1.28;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h4":return"\n        font-size: ".concat(t["text-size-l"],";\n        line-height: 1.44;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h5":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-primary"],";\n      ");case"h6":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-secondary"],";\n      ");default:return null}}var h=d().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(function(e){return e.theme["spacing-zero"]}),(function(e){return e.theme["text-family-default"]}),(function(e){return e.theme["text-weight-medium"]}),(function(e){return e.wordBreak}),(function(e){return e.styleAs?m(e.styleAs,e.theme):m(e.as,e.theme)}),(function(e){return e.color&&"color: ".concat(e.theme[e.color],";")}),(function(e){return e.hasBottomSpacing&&function(e,t){switch(e){case"h1":return"margin-bottom: ".concat(t["spacing-l"]," !important");case"h2":return"margin-bottom: ".concat(t["spacing-m"]," !important");case"h3":return"margin-bottom: ".concat(t["spacing-s"]," !important");case"h4":case"h5":case"h6":return"margin-bottom: ".concat(t["spacing-xs"]," !important");default:return"margin: ".concat(t["spacing-zero"]," !important")}}(e.as,e.theme)}),(function(e){return t=e.isTruncated,n=e.maxLines,r="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(n,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(t?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(n?r:"","\n    ");var t,n,r}));function g(e){var t=e.text,n=e.type,r=e.styleAs,s=e.color,c=e._wordBreak,l=e.className,d=e.hasBottomSpacing,p=e.isTruncated,m=e.maxLines,g=e.tooltip,f=e["data-testid"],y=e["data-click"],w=(0,i.useState)(!1),x=(0,a.Z)(w,2),v=x[0],b=x[1],k=o().createElement(h,{as:n,styleAs:r,color:s,className:l,"data-aether-id":"aether-heading","data-testid":f,"data-click":y,hasBottomSpacing:d,isTruncated:p,maxLines:m,onMouseEnter:function(e){e.target&&e.target.scrollWidth>e.target.offsetWidth?b(!0):b(!1)},wordBreak:c},t);return v&&(0,u.LX)(e)?(0,u.Ur)(k,g||t):k}g.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},g.propTypes={type:c().oneOf(["h1","h2","h3","h4","h5","h6"]),text:c().string.isRequired,color:c().oneOf([""].concat((0,r.Z)(Object.keys(p.globals.colors)),(0,r.Z)(Object.keys(p.aliases.light.content)))),styleAs:c().oneOf(["h1","h2","h3","h4","h5","h6"]),className:c().string,hasBottomSpacing:c().bool,isTruncated:function(e){var t=e.isTruncated,n=e.maxLines;return"boolean"!=typeof t?new Error("Heading: expected a boolean value for isTruncated prop"):t&&n?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:c().number,tooltip:function(e){var t=e.tooltip,n=e.isTruncated,r=e.maxLines;return"string"!=typeof t?new Error("Heading: tooltip prop should only have a string value."):!t||n&&!r?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:c().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":c().string,"data-click":c().string}},35736:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(40540),a=n.n(r),i=n(1314),o=n.n(i),s=n(59530),c=n.n(s),l=n(9460),d=n(58560),p=(0,s.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),u=c().div.withConfig({displayName:"SpinnerSmall__StyledSpinnerSmall",componentId:"zpipva-0"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";& > div{height:100%;width:4px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["text-size-xs"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),p),m=c()(l.ZP).withConfig({displayName:"SpinnerSmall__StyledSmallSpinnerDescription",componentId:"zpipva-1"})(["display:inline-block;max-width:80ch;margin-left:",";word-break:break-word;"],(function(e){return e.theme["spacing-s"]}));function h(e){var t=e.description,n=e.className,r=e.type,i=e["data-testid"],o="bright"===r?"content-color-constant":"content-color-secondary";return a().createElement(d.Z,{justifyContent:"flex-start",alignItems:"center",className:n,type:r},a().createElement(u,{"data-testid":i},a().createElement("div",{className:"rect-one"}),a().createElement("div",{className:"rect-two"}),a().createElement("div",{className:"rect-three"})),t&&a().createElement(m,{color:o},t))}h.defaultProps={description:"",className:"","data-testid":"aether-spinner"},h.propTypes={description:o().string,className:o().string,type:o().oneOf(["default","bright"]).isRequired,"data-testid":o().string};var g=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLargeContainer",componentId:"sc-1v55r43-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;svg path,svg rect{fill:",";}"],(function(e){return"bright"===e.type?e.theme["content-color-constant"]:e.theme["content-color-tertiary"]})),f=c()(l.ZP).withConfig({displayName:"SpinnerLarge__StyledSpinnerDescription",componentId:"sc-1v55r43-1"})(["display:inline-block;max-width:80ch;word-break:break-word;text-align:center;font-size:",";"],(function(e){return e.theme["text-size-l"]})),y=(0,s.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),w=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLarge",componentId:"sc-1v55r43-2"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";margin-bottom:",";& > div{height:100%;width:8px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-m"]}),(function(e){return e.theme["size-m"]}),(function(e){return e.theme["text-size-s"]}),(function(e){return e.theme["spacing-l"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),y);function x(e){var t=e.className,n=e.description,r=e.type,i=e["data-testid"],o="bright"===r?"content-color-constant":"content-color-secondary";return a().createElement(g,{className:t,type:r},a().createElement(w,{"data-testid":i},a().createElement("div",{className:"rect-one"}),a().createElement("div",{className:"rect-two"}),a().createElement("div",{className:"rect-three"})),a().createElement(f,{color:o},n))}function v(e){var t=e.size,n=e.className,r=e.description,i=e.type,o=e["data-testid"];return"small"===t?a().createElement(h,{type:i,className:n,description:r,"data-testid":o}):"large"===t?a().createElement(x,{type:i,description:r||"Loading",className:n,"data-aether-id":"aether-spinner","data-testid":o}):null}x.defaultProps={className:"",description:"","data-testid":"aether-spinner"},x.propTypes={className:o().string,description:o().string,type:o().oneOf(["default","bright"]).isRequired,"data-testid":o().string},v.defaultProps={size:"small",className:"",description:"",type:"default","data-testid":"aether-spinner"},v.propTypes={size:o().oneOf(["small","large"]),className:o().string,type:o().oneOf(["default","bright"]),description:function(e){var t=e.description;return"string"!=typeof t?new Error("Spinner: description prop should have a string value"):t.length>80?new Error("Spinner: the description prop should not have a character length of more than 80."):null},"data-testid":o().string}}}]);
//# sourceMappingURL=8081.8e75ea2a781ef5bb.js.map