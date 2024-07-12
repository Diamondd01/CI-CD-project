"use strict";(self.webpackChunkoauth2_manage_tokens=self.webpackChunkoauth2_manage_tokens||[]).push([[4776,7560,7397,25,2638,1403],{7560:(e,s,r)=>{function t(){return t=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},t.apply(this,arguments)}r.d(s,{Z:()=>t})},98283:(e,s,r)=>{function t(e,s){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],s.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(s,{Z:()=>t})},44776:(e,s,r)=>{r.r(s),r.d(s,{ENTITY_TYPE:()=>V,GROUP_ROLES:()=>N,OP:()=>K,ROLE_TYPE:()=>Y,VISIBILITY_STATUS:()=>C,WORKSPACE_ELEMENTS_TYPE:()=>G,WORKSPACE_ROLES_QUERY_KEY:()=>R,createWorkspace:()=>m,moveElementToWorkspace:()=>L,subscribeToWorkspaceEvents:()=>P,updateWorkspaceVisibility:()=>g,useActiveWorkspaceId:()=>a,useActiveWorkspaceInfo:()=>h,useNavigateToWorkspace:()=>k,useUpdateWorkspace:()=>I,useWorkspace:()=>E,useWorkspaceRoleConfig:()=>W,useWorkspaceRoles:()=>T,useWorkspaceSubscription:()=>S,workspaceInfoQuery:()=>p,workspaceRolesQuery:()=>_});var t=r(60607);const a=()=>{const{workspaceId:e}=(0,t.useParams)();return e?(e=>(null==e?void 0:e.split("~").pop())||"")(e):""};var o=r(7560),n=r(98283),i=r(97201),c=r(45860),u=r(26663),l=r.n(u);const p=(e,s)=>({queryKey:["workspace",e],queryFn:()=>(async(e,s)=>await c.postmanGateway.post({url:`${l().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${e}`,method:"GET",signal:s,service:"workspaces"}))(e),enabled:!!e,useErrorBoundary:null==s?void 0:s.useErrorBoundary,initialData:b(e)});function b(e){var s;if(e&&null!=(s=window)&&s.INITIAL_WORKSPACE)try{var r;const s=JSON.parse(null==(r=window)?void 0:r.INITIAL_WORKSPACE);if((null==s?void 0:s.id)===e)return{data:s}}catch(e){console.info("::workspace-service::getCachedWorkspaceData::",e)}}const d=["data"],E=e=>{const s=(0,i.useDataFetch)(p(e)),{data:r}=s,t=(0,n.Z)(s,d);return(0,o.Z)({data:null==r?void 0:r.data},t)},h=()=>{const e=a();return E(e)};var w=r(40540),y=r(39245),v=r(21466);const k=()=>{const e=(0,y.useNavigate)();return(0,w.useCallback)((s=>{(0,v.onWorkspaceChange)(s),s&&e("/workspace/"+s)}),[e])},R="workspace-roles",_=(e,s,r)=>({queryKey:[R,e],queryFn:()=>(async(e,s="guest",r)=>await c.postmanGateway.get({url:`${l().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${e}/roles?include=${s}`,signal:r,service:"workspaces"}))(e,s,r),enabled:!!e,useErrorBoundary:!1}),O=["data"],T=(e,s)=>{const r=(0,i.useDataFetch)(_(e,s)),{data:t}=r,a=(0,n.Z)(r,O);return(0,o.Z)({data:null==t?void 0:t.data},a)},A=["data"],W=e=>{const s=(0,i.useDataFetch)(((e,s)=>({queryKey:["workspace-role-config"],queryFn:()=>(async(e="",s)=>await c.postmanGateway.get({url:`${l().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces-role-config?include=partner,default,state,guest${e}`,signal:s,service:"workspaces"}))(e,undefined),useErrorBoundary:!1}))(e)),{data:r}=s,t=(0,n.Z)(s,A);return(0,o.Z)({data:null==r?void 0:r.data},t)},I=()=>{const e=(0,y.useNavigate)();return(0,w.useCallback)((e=>{(0,v.updateVSCodeWorkspace)(e)}),[e])},P=e=>{const s=new AbortController;return{asyncObserver:c.postmanWebsocketGateway.subscribe({signal:s.signal,subscribeRequest:{method:"GET",url:"/ws/proxy",body:{},path:`/workspaces/${e}/subscribe`,service:"workspaces"},subscriptionEvents:["update","update_roles","workspace_v1","create","destroy"],responseFilter:e=>{var s;return null==e||null==(s=e.body)||null==(s=s.data)?void 0:s.id},broadcastFilter:e=>{var s;return null==e||null==(s=e.meta)||null==(s=s.timeline)?void 0:s.model_id},unsubscribeRequest:{method:"delete",url:"/ws/proxy",body:{},path:`/workspaces/${e}/subscribe`,service:"workspaces"}}),abortController:s}},f=new class{constructor(){var e=this;this.observer=null,this.workspaceId="",this.abortController=null,this.asyncObserver=null,this.subscriptionsMap={},this.changeWorkspace=e=>{this.workspaceId&&this.unsubscribe(),this.workspaceId=e},this.publishEventToSubscriptions=(e,s)=>{for(const r of Object.values(this.subscriptionsMap))try{r(e,s)}catch(e){}},this.init=async function(s){const{asyncObserver:r,abortController:t}=P(s);e.abortController=t,e.asyncObserver=r,e.observer=await r,e.abortController=null,e.observer.subscribe({next:r=>{e.publishEventToSubscriptions(r,{workspaceId:s})},complete:()=>{e.unsubscribe()},error:async function(r){e.cleanup(),await e.init(s)}})},this.subscribe=({workspaceId:e=this.workspaceId,subscribingEntityId:s,subscriptionHandler:r})=>{if(""!==e&&(this.workspaceId!==e&&this.changeWorkspace(e),s))return this.subscriptionsMap[s]=r,this.observer&&this.asyncObserver||this.init(e),()=>{delete this.subscriptionsMap[s],0===Object.keys(this.subscriptionsMap).length&&this.unsubscribe()}},this.unsubscribe=()=>{var e,s;null==(e=this.abortController)||e.abort(),null==(s=this.observer)||s.unsubscribe(),this.cleanup()},this.cleanup=()=>{this.asyncObserver=null,this.observer=null,this.abortController=null,this.subscriptionsMap={}}}},S=(e,s)=>{const r=a();(0,w.useEffect)((()=>{if(r&&e){const t=f.subscribe({workspaceId:r,subscribingEntityId:e,subscriptionHandler:s});return()=>{t&&t()}}}),[r])},g=async(e,s,r)=>await c.postmanGateway.put({url:`${l().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${e}/visibility`,method:"PUT",data:{body:{visibilityStatus:s}},signal:r,service:"workspaces"}),m=async(e,s)=>(await c.postmanGateway.post({url:`${l().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,data:{body:e},service:"workspaces",path:"/workspaces",signal:s})).data;let C=function(e){return e.personal="personal",e.team="team",e.private="private",e.public="public",e.partner="partner",e}({}),K=function(e){return e.replace="replace",e.add="add",e.remove="remove",e}({}),G=function(e){return e.collection="collection",e.environment="environment",e.API="api",e.mock="mock",e.monitor="monitor",e.flow="flow",e.extensibleCollection="extensibleCollection",e}({});const L=async(e,s,r,t,a)=>(await c.postmanGateway.patch({url:`${l().HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,data:{body:{op:K.replace,value:{to:t,elementType:e}}},service:"workspaces",path:`/workspaces/${r}/elements/${s}`,signal:a})).data;let V=function(e){return e.user="user",e.team="team",e.group="group",e}({}),Y=function(e){return e.WORKSPACE_EDITOR="WORKSPACE_EDITOR",e.WORKSPACE_VIEWER="WORKSPACE_VIEWER",e.WORKSPACE_EDITOR_V9="WORKSPACE_EDITOR_V9",e.WORKSPACE_VIEWER_V9="WORKSPACE_VIEWER_V9",e.WORKSPACE_ANONYMOUS_EXPLORER="WORKSPACE_ANONYMOUS_EXPLORER",e.WORKSPACE_EXPLORER="WORKSPACE_EXPLORER",e}({}),N=function(e){return e.SIGNEDIN="signed-in",e.ANYBODY="anybody",e}({})}}]);
//# sourceMappingURL=4776.47133e40c2248b1b.js.map