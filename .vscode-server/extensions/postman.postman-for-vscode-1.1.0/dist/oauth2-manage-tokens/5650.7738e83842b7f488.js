"use strict";(self.webpackChunkoauth2_manage_tokens=self.webpackChunkoauth2_manage_tokens||[]).push([[5650],{25650:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a.Z});var a=n(52083)},75484:(e,t,n)=>{n.d(t,{m:()=>k}),n(40540);var a=n(59530),i=n.n(a),s=n(58560),o=n(80605),r=n(63622),d=n(87459),l=n(59713),c=n(18767),p=n(52322);const h=i()(s.Z).withConfig({displayName:"manage-tokens-sidebar__SidebarWrapper",componentId:"sc-1ad7od-0"})(["border-right:var(--border-width-default) var(--border-style-solid) var(--border-color-default);flex-direction:column;width:300px;"]),u=i()(s.Z).withConfig({displayName:"manage-tokens-sidebar__RowsWrapper",componentId:"sc-1ad7od-1"})(["overflow:auto;flex-direction:column;height:100%;"]),g=i().div.withConfig({displayName:"manage-tokens-sidebar__SideBarRowWrapper",componentId:"sc-1ad7od-2"})(["cursor:pointer;border-bottom:var(--border-width-default) solid var(--postman-vscode-border-color-default);background-color:",";"],(e=>e.isSelected?"var(--highlight-background-color-primary)":"null")),x=i().div.withConfig({displayName:"manage-tokens-sidebar__NameWrapper",componentId:"sc-1ad7od-3"})(["display:flex;align-items:center;min-height:var(--size-s);overflow:hidden;justify-content:space-between;width:100%;"]),m=i()(o.Z).withConfig({displayName:"manage-tokens-sidebar__StyledButton",componentId:"sc-1ad7od-4"})(["display:none;margin-left:var(--spacing-xs);& i{padding-top:var(--spacing-xs);}"]),f=i().div.withConfig({displayName:"manage-tokens-sidebar__SideBarContentWrapper",componentId:"sc-1ad7od-5"})(["cursor:pointer;display:flex;padding:var(--spacing-s) var(--spacing-s) var(--spacing-s) var(--spacing-l);justify-content:space-between;align-items:center;line-height:var(--line-height-l);&:hover{background-color:var(--background-color-secondary);&& ","{display:block;}}"],m),k=e=>{const{setActiveIndex:t,activeIndex:n}=e,{oAuth2Tokens:a,deleteOAuth2TokenById:i}=(0,c.useOAuth2Tokens)();return(0,p.jsx)(h,{children:(0,p.jsx)(u,{children:a&&Object.values(a).map((e=>(0,p.jsx)(g,{"data-testid":`manage-tokens-sidebar-element-${e.id}`,onClick:()=>{t(e.id)},isSelected:n===e.id,children:(0,p.jsxs)(f,{children:[(0,p.jsxs)(x,{children:[(0,p.jsx)(r.ZP,{isTruncated:!0,children:e.name}),(0,c.isTokenExpired)(e)&&(0,p.jsx)(d.Z,{status:"critical",text:"Expired"})]}),(0,p.jsx)(m,{"data-testid":`manage-tokens-sidebar-delete-icon-${e.id}`,size:"small",icon:(0,p.jsx)(l.Z,{}),onClick:t=>{var n;n=e.id,i(n),t.stopPropagation()}})]})},e.id)))})})}},52083:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(40540),i=n(59530),s=n.n(i),o=n(58560),r=n(48263),d=n(64691),l=n(80605),c=n(59824),p=n(17282),h=n(20347),u=n(49437),g=n(80047),x=n(29225),m=n(18767),f=n(39245),k=n(26246),w=n(34311),v=n(75484),b=n(52322);const y=s()(o.Z).withConfig({displayName:"oauth2-manage-tokens__HeaderWrapper",componentId:"sc-op8p9p-0"})(["border-bottom:var(--border-width-default) var(--border-style-solid) var(--border-color-default);height:48px;font-weight:var(--text-weight-medium);align-items:center;padding-left:var(--spacing-l);padding-right:var(--spacing-l);justify-content:space-between;"]),j=s()(o.Z).withConfig({displayName:"oauth2-manage-tokens__Header",componentId:"sc-op8p9p-1"})(["font-weight:var(--text-weight-medium);align-items:center;font-size:var(--text-size-l);"]),_=s()(r.Z).withConfig({displayName:"oauth2-manage-tokens__StyledMenuButton",componentId:"sc-op8p9p-2"})(["font-weight:var(--text-weight-medium);background:inherit;"]),T=s()(o.Z).withConfig({displayName:"oauth2-manage-tokens__TokenManagerWrapper",componentId:"sc-op8p9p-3"})(["flex-direction:column;height:100vh;width:100vw;"]),Z=s()(o.Z).withConfig({displayName:"oauth2-manage-tokens__BodyWrapper",componentId:"sc-op8p9p-4"})(["flex-direction:row;flex:1;overflow:auto hidden;"]),C=s()(o.Z).withConfig({displayName:"oauth2-manage-tokens__TokenDetailsWrapper",componentId:"sc-op8p9p-5"})(["flex:1;"]),I=()=>{const[e,t]=(0,a.useState)(""),{setTabTitle:n}=(0,f.useTabTitleMeta)(),i=k.Modals.getModals(),{oAuth2Tokens:s,deleteAllOAuth2Token:o,deleteAllExpiredOAuth2Token:r}=(0,m.useOAuth2Tokens)();(0,a.useEffect)((()=>{n("Manage Tokens","cookies-editor")}),[]),(0,a.useEffect)((()=>{(""===e||s&&!s[e])&&s&&Object.keys(s).length>0&&t(Object.keys(s)[0])}),[s]);const I=()=>!(!s||s&&0===Object.keys(s).length);return(0,b.jsxs)(T,{children:[(0,b.jsxs)(y,{children:[(0,b.jsx)(j,{children:"Manage Access Tokens"}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(_,{children:(0,b.jsx)(l.Z,{icon:(0,b.jsx)(x.Z,{}),"data-testid":"manage-tokens-sidebar-delete-icon-dropdown"})}),(0,b.jsxs)(c.Z,{placement:"bottom-end",children:[(0,b.jsx)(p.Z,{isDisabled:!I(),onClick:()=>{r()},"data-testid":"manage-tokens-delete-all-expired",children:"Delete Expired Tokens"}),(0,b.jsx)(h.Z,{}),(0,b.jsx)(p.Z,{isDisabled:!I(),onClick:async()=>{const e=await i.showWarningDialog({uid:"delete-Tokens",subject:"Delete all tokens?",message:"Are you sure you want to delete all the oauth2 tokens from Postman?",options:[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Delete",isPrimary:!0}]});e&&"Delete"===e.title&&o()},"data-testid":"manage-tokens-delete-all",children:"Delete All Tokens"})]})]})]}),!I()&&(0,b.jsx)(u.Z,{title:"No tokens available",children:(0,b.jsx)(g.Z,{name:"illustration-no-report"})}),I()&&(0,b.jsxs)(Z,{children:[(0,b.jsx)(v.m,{setActiveIndex:t,activeIndex:e}),(0,b.jsx)(C,{children:s&&(0,b.jsx)(w._,{token:s[e]})})]})]})}},34311:(e,t,n)=>{n.d(t,{_:()=>S});var a=n(40540),i=n(59530),s=n.n(i),o=n(58560),r=n(63622),d=n(80605),l=n(23468),c=n(37110),p=n(81397),h=n(57775),u=n(49584),g=n(35482),x=n(7246),m=n(18767),f=n(52322);const k=new Set(["result","id","name","access_token","token_type","isTokenRefreshEnabled","refreshRequestParams","data"]),w=s()(o.Z).withConfig({displayName:"token-details__BodyDataWrapper",componentId:"sc-1uw8ble-0"})(["box-sizing:border-box;display:flex;flex-direction:column;width:100%;"]),v=s()(o.Z).withConfig({displayName:"token-details__TokenDataWrapper",componentId:"sc-1uw8ble-1"})(["padding-bottom:var(--spacing-l);box-sizing:border-box;display:flex;flex-direction:column;width:100%;overflow:hidden auto;flex:1;"]),b=s()(o.Z).withConfig({displayName:"token-details__RowWrapper",componentId:"sc-1uw8ble-2"})(["max-width:528px;display:flex;flex-direction:row;padding:var(--spacing-s) 0;flex-shrink:0;line-height:var(line-height-s);width:100%;align-items:center;max-height:var(--controls-size-default);"]),y=s()(r.ZP).withConfig({displayName:"token-details__KeyWrapper",componentId:"sc-1uw8ble-3"})(["margin-left:var(--spacing-xxl);flex:0.4;color:var(--content-color-primary);font-weight:var(--text-weight-medium);"]),j=s()(r.ZP).withConfig({displayName:"token-details__ValueWrapper",componentId:"sc-1uw8ble-4"})(["margin-left:var(--spacing-xxl);flex:1;"]),_=s()(o.Z).withConfig({displayName:"token-details__AccessTokenValueWrapper",componentId:"sc-1uw8ble-5"})(["margin-left:var(--spacing-xxl);flex:1;overflow:hidden;align-items:center;"]),T=s().div.withConfig({displayName:"token-details__InputWrapper",componentId:"sc-1uw8ble-6"})(["margin-left:28px;flex:1 1 0%;word-break:break-all;align-items:center;text-overflow:ellipsis;overflow:",";white-space:nowrap;display:",";"],(e=>e.isEditMode?null:"hidden"),(e=>e.isEditMode?"flex":"block")),Z=s()(x.InlineEditor).withConfig({displayName:"token-details__Input",componentId:"sc-1uw8ble-7"})(["margin-right:0;word-break:break-all;flex:1;align-items:center;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;border:var(--border-width-default) var(--border-style-solid) var(--border-color-default);border-radius:var(--border-radius-default);padding-left:var(--spacing-s);display:",";"],(e=>e.isEditMode?"flex":"block")),C=s()(o.Z).withConfig({displayName:"token-details__WarningBanner",componentId:"sc-1uw8ble-8"})(["background-color:var(--background-color-error);height:48px;align-items:center;gap:var(--spacing-s);padding-left:var(--spacing-l);font-size:var(--text-size-m);line-height:var(--line-height-s);"]),I=s()(r.ZP).withConfig({displayName:"token-details__StyledHeading",componentId:"sc-1uw8ble-9"})(["display:flex;align-items:center;padding:var(--spacing-xxl) var(--spacing-l) var(--spacing-l) var(--spacing-xxl);font-weight:var(--text-weight-medium);font-size:var(--text-size-l);"]),N=s()(d.Z).withConfig({displayName:"token-details__CopyButton",componentId:"sc-1uw8ble-10"})(["margin-left:var(--spacing-s);background:inherit;height:var(--size-s);width:var(--size-s);"]),A=s().div.withConfig({displayName:"token-details__TableWrapper",componentId:"sc-1uw8ble-11"})(["padding-left:var(--spacing-xxl);max-width:520px;"]),W=e=>{const t=JSON.stringify(e);return t&&'"'===t[0]?t.replace(/"/g,""):t},E=e=>{if(!e)return"";switch(e){case"request_url":return"Request URL";case"request_body":return"Request Body";case"request_header":return"Request Header";default:return""}},S=e=>{var t;const{token:n}=e,{oAuth2Tokens:i,updateOAuth2Token:s}=(0,m.useOAuth2Tokens)(),[o,d]=(0,a.useState)(!1),[x,S]=(0,a.useState)(!1),[O,D]=(0,a.useState)(null);if((0,a.useEffect)((()=>{null!==O&&(clearTimeout(O),S(!1),D(null))}),[n]),!n)return null;const z=(e=>{const t={};for(const[n,a]of Object.entries(e))k.has(n)||(t[`${n}`]=a);for(const[n,a]of Object.entries(e.data))k.has(n)||(t[`${n}`]=a);return t})(n),P=!n.data.access_token&&!n.data.id_token,M=n.data.token_type&&"bearer"!==n.data.token_type.toString().toLowerCase(),R=null==(t=n.data)?void 0:t.refreshRequestParams;return(0,f.jsxs)(w,{children:[(0,m.isTokenExpired)(n)&&(0,f.jsxs)(C,{children:[(0,f.jsx)(g.Z,{color:"content-color-error"}),"This token has expired"]}),(0,f.jsxs)(v,{isTokenExpired:(0,m.isTokenExpired)(n),children:[(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(I,{children:"Token Details "}),(0,f.jsxs)(b,{children:[(0,f.jsx)(y,{children:(0,f.jsx)(c.Z,{text:"Token Name"})}),(0,f.jsx)(T,{onClick:()=>{o||d(!0)},isEditMode:o,children:(0,f.jsx)(Z,{onSubmit:e=>{((e,t)=>{const n=i&&i[e];n&&(n.name=t,s(e,n))})(n.id,e)},isEditMode:o,setIsEditMode:()=>{d(!1)},value:n.name})})]}),(0,f.jsxs)(b,{children:[(0,f.jsx)(y,{children:(0,f.jsx)(c.Z,{text:"Access Token",infoText:!!P&&"access_token or id_token not found in the response. If the access token value is present elsewhere in the response, you can copy and use that in the Access Token input field."})}),(0,f.jsxs)(_,{children:[(0,f.jsx)(r.ZP,{isTruncated:!0,children:n.data.access_token}),!P&&(0,f.jsx)(N,{icon:x?(0,f.jsx)(h.Z,{}):(0,f.jsx)(u.Z,{}),tooltip:(0,f.jsx)(p.Z,{content:x?"Copied":"Copy",placement:"top"}),onClick:async()=>{if(null!==O)return;S(!0),await navigator.clipboard.writeText(`${n.data.access_token}`);const e=setTimeout((()=>{S(!1),D(null)}),1500);D(e)}})]})]}),(null==n||null==(B=n.data)?void 0:B.token_type)&&(0,f.jsxs)(b,{children:[(0,f.jsx)(y,{children:(0,f.jsx)(c.Z,{text:"Token Type",infoText:!!M&&"This token type is only partially supported by Postman. Your authorization header will continue to be prefixed with Bearer."})}),(0,f.jsx)(j,{isTruncated:!0,children:n.data.token_type})]}),Object.keys(z).map((e=>(0,f.jsxs)(b,{children:[(0,f.jsx)(y,{isTruncated:!0,children:e}),(0,f.jsx)(j,{isTruncated:!0,children:W(z[`${e}`])})]},e)))]}),Array.isArray(R)&&null!=R&&R.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(I,{children:"Refresh Request Data "}),(0,f.jsx)(A,{children:(0,f.jsx)(l.Z,{data:R,columns:[{Header:"Key",accessor:"key",Cell:e=>(0,f.jsx)(r.ZP,{isTruncated:!0,children:e.value})},{Header:"Value",accessor:"value",Cell:e=>(0,f.jsx)(r.ZP,{isTruncated:!0,children:W(e.value)})},{Header:"Send In",accessor:"send_as",Cell:e=>(0,f.jsx)(r.ZP,{isTruncated:!0,children:E(e.value)})}]})})]}):null]})]});var B}}}]);
//# sourceMappingURL=5650.7738e83842b7f488.js.map