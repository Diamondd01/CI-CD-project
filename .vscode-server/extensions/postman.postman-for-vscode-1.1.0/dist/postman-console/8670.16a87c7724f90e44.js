"use strict";(self.webpackChunkpostman_console=self.webpackChunkpostman_console||[]).push([[8670],{79951:(e,n,t)=>{t.r(n),t.d(n,{initSentry:()=>l,sentryRouter:()=>f});var r=t(7560),o=t(26663),a=t.n(o),s=t(70381);function i(e){var n;if(null!=e&&null!=(n=e.exception)&&n.values)for(const n of e.exception.values){var t;if(null!=n&&null!=(t=n.stacktrace)&&t.frames)for(const e of n.stacktrace.frames)null!=e&&e.filename&&e.filename.replace(/\\/g,"/").includes("/dist/")&&(e.filename=["/",e.filename.replace(/\\/g,"/").split("/dist/").pop()].join(""))}return e}function l(e){a().SENTRY_DSN&&s.init((0,r.Z)({},e,{dsn:a().SENTRY_DSN,sampleRate:.2,tracesSampleRate:0,environment:"prod",release:"prod.2024-06-25.07-12",ignoreErrors:["ResizeObserver loop limit exceeded"],beforeSend:i}))}var u=t(40540),c=t(60607);const f=e=>{if(a().SENTRY_DSN){var n;const t=null==(n=s.getCurrentHub())?void 0:n.getClient();if(null!=t&&t.addIntegration)return t.addIntegration(new s.BrowserTracing({routingInstrumentation:s.reactRouterV6Instrumentation(u.useEffect,c.useLocation,c.useNavigationType,c.createRoutesFromChildren,c.matchRoutes)})),s.wrapCreateBrowserRouter(e)}return e}}}]);
//# sourceMappingURL=8670.16a87c7724f90e44.js.map