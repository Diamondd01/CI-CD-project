"use strict";(self.webpackChunkgrpc_workbench=self.webpackChunkgrpc_workbench||[]).push([[7204],{8137:(e,t,n)=>{n.r(t),n.d(t,{FeatureFlagsProvider:()=>b,useFeatureFlag:()=>r,withFeatureFlagsConsumer:()=>d});var l=n(78439),a=n(7560);const u=({options:e,allFlags:t,ldClient:n})=>{var l,u;const{flagName:r,defaultValue:s,requiredAttributesInContext:o=[]}="defaultValue"in e?e:(0,a.Z)({},e,{defaultValue:void 0}),i=null!=(l=null==n||null==(u=n.getContext())?void 0:u.custom)?l:{},d=(null==o?void 0:o.length)>0&&!o.every((e=>e in i))?s:t[r];return null!=d?d:t[r]};function r(e){const t=(0,l.useFlags)(),n=(0,l.useLDClient)();return{value:u({allFlags:t,ldClient:n,options:e})}}var s=n(40540),o=n(52322);const i={ldClient:void 0,flags:void 0};function d(e){return(0,l.withLDConsumer)()((t=>{const n=(0,l.useFlags)(),r=(0,l.useLDClient)();return(0,o.jsx)(e,(0,a.Z)({},t,i,{getFlagsValue:e=>u({options:e,ldClient:r,allFlags:n})}))}))}var c=n(26663),g=n.n(c),C=n(13101);const m=()=>(0,C.isLoggedIn)()?{kind:"user",key:(0,C.getUserId)(),custom:{platform:window.SDK_PLATFORM,appVersion:window.APP_VERSION,releaseChannel:window.NX_RELEASE_CHANNEL,analyticsEnabled:"browser"===window.SDK_PLATFORM,userCreatedAt:0,daysSinceUserCreate:0,emailDomain:"",isPaidPlanGrowth:!1,teamSize:0,roles:[],teamCreatedAt:0,daysSinceTeamCreate:0,webFnCustomPlanId:""}}:{kind:"anonymous",key:"0",custom:{platform:window.SDK_PLATFORM,appVersion:window.APP_VERSION,releaseChannel:window.NX_RELEASE_CHANNEL,analyticsEnabled:"browser"===window.SDK_PLATFORM}};var v=n(16669),w=n(88749);function F(e){return e&&+new Date(e)||0}function f(e){if(!e)return null;const t=new Date,n=new Date(e);return Math.floor(Math.abs(t.getTime()-n.getTime())/864e5)}const I=(0,s.createContext)(void 0),p=({passedInFeatureFlagContext:e,children:t,debounceInterval:n=200})=>{const[u,r]=(0,s.useState)([]),i=(0,s.useRef)(!1),d=(0,l.useLDClient)(),c=(0,s.useCallback)((e=>{r((t=>[...t,e]))}),[]),{loggedInUserCustomAttributes:g,isCustomAttributesLoading:m,externalUserId:p}=function(e){var t,n,u;const r=(0,C.getUserId)(),o=(0,C.isLoggedIn)(),i=(0,l.useLDClient)(),{data:d,isLoading:c}=(0,v.useTeamsByUserId)({overrideQueryParams:{billing:!0},enabled:o}),{data:g,isLoading:m}=(0,v.useExternalId)({userId:r,enabled:o}),{data:I,isLoading:p}=(0,v.useUserInfo)({userId:r,enabled:o}),{data:_,isLoading:x}=(0,w.useGetPlanFeatures)(r,o),b=null!=(t=null==d||null==(n=d.organizations)?void 0:n.find((e=>e.id===(0,C.getTeamId)())))?t:void 0,h=c||p||x||m,L=(0,s.useMemo)((()=>{var t,n,l,u,r,s,d,c,g,C,m;return h||!o?void 0:(0,a.Z)({},null==i?void 0:i.getContext().custom,null==e?void 0:e.custom,{userCreatedAt:F(null!=(t=null==I?void 0:I.created_at)?t:null),daysSinceUserCreate:f(null!=(n=null==I?void 0:I.created_at)?n:null)||0,emailDomain:null!=(l=null==I||null==(u=I.email)?void 0:u.split("@")[1])?l:"",teamSize:null!=(r=null==b?void 0:b.team_size)?r:0,roles:(null!=(s=null==b?void 0:b.roles)?s:"").split(","),teamCreatedAt:F(null!=(d=null==b?void 0:b.created_at)?d:null),daysSinceTeamCreate:f(null!=(c=null==b?void 0:b.created_at)?c:null)||0,webFnCustomPlanId:null!=(g=null==b?void 0:b.plan)?g:null,isPaidPlanGrowth:null!=(C=null==_||null==(m=_.data)||null==(m=m.features.is_paid_plan_growth)?void 0:m.value)&&C})}),[h,o,i,null==e?void 0:e.custom,null==I?void 0:I.created_at,null==I?void 0:I.email,null==b?void 0:b.team_size,null==b?void 0:b.roles,null==b?void 0:b.created_at,null==b?void 0:b.plan,null==_||null==(u=_.data)?void 0:u.features]);return{isCustomAttributesLoading:h,loggedInUserCustomAttributes:L,externalUserId:null!=g?g:(0,C.getUserId)()}}(e);(0,s.useEffect)((()=>{m||c(g)}),[c,m,g]);const x=((e,t)=>{const n=(0,s.useRef)(null);return(0,s.useCallback)((()=>{n.current&&clearTimeout(n.current),n.current=setTimeout(e,t)}),[e,t])})((0,s.useCallback)((async()=>{if(!i.current&&0!==u.length){const t=_({contextUpdateQueue:u,currentFeatureFlagsContext:null==d?void 0:d.getContext(),externalUserId:p,passedInFeatureFlagContext:e});i.current=!0;try{await(null==d?void 0:d.identify(t)),r([])}catch(e){throw new Error(`Error occurred while updating feature flags context: ${e}`)}finally{i.current=!1}}}),[u,d,p,e]),n);return(0,s.useEffect)((()=>{x()}),[x]),(0,o.jsx)(I.Provider,{value:{addCustomAttributesUpdateToQueue:c},children:t})},_=({contextUpdateQueue:e,currentFeatureFlagsContext:t,externalUserId:n,passedInFeatureFlagContext:l})=>e.reduce(((e,l)=>{const u=(0,a.Z)({},e.custom,l);return(0,a.Z)({},t,{key:n,custom:u})}),(0,a.Z)({},t,l,{custom:(null==t?void 0:t.custom)||{}})),x={useCamelCaseFlagKeys:!1};function b({children:e,featureFlagsContext:t}){const n=g().LAUNCH_DARKLY_CLIENT_SIDE_ID;return n?(0,o.jsx)(l.LDProvider,{clientSideID:n,context:m(),reactOptions:x,children:(0,o.jsx)(p,{passedInFeatureFlagContext:t,children:e})}):(0,o.jsx)(o.Fragment,{children:e})}}}]);
//# sourceMappingURL=7204.1466a4ea316658ed.js.map