"use strict";(self.webpackChunkmimir_editor=self.webpackChunkmimir_editor||[]).push([[8670],{79951:(e,r,t)=>{t.r(r),t.d(r,{initSentry:()=>l,sentryRouter:()=>f});var n=t(7560),i=t(26663),a=t.n(i),o=t(70381);function s(e){var r;if(null!=e&&null!=(r=e.exception)&&r.values)for(const r of e.exception.values){var t;if(null!=r&&null!=(t=r.stacktrace)&&t.frames)for(const e of r.stacktrace.frames)null!=e&&e.filename&&e.filename.replace(/\\/g,"/").includes("/dist/")&&(e.filename=["/",e.filename.replace(/\\/g,"/").split("/dist/").pop()].join(""))}return e}function l(e){a().SENTRY_DSN&&o.init((0,n.Z)({},e,{dsn:a().SENTRY_DSN,sampleRate:.2,tracesSampleRate:0,environment:"prod",release:"prod.2024-06-25.07-12",ignoreErrors:["ResizeObserver loop limit exceeded"],beforeSend:s}))}var u=t(40540),c=t(60607);const f=e=>{if(a().SENTRY_DSN){var r;const t=null==(r=o.getCurrentHub())?void 0:r.getClient();if(null!=t&&t.addIntegration)return t.addIntegration(new o.BrowserTracing({routingInstrumentation:o.reactRouterV6Instrumentation(u.useEffect,c.useLocation,c.useNavigationType,c.createRoutesFromChildren,c.matchRoutes)})),o.wrapCreateBrowserRouter(e)}return e}}}]);
//# sourceMappingURL=8670.b8a43d544a4e8631.js.map