"use strict";(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[1910],{8912:(n,e,a)=>{a.r(e),a.d(e,{CHANGE_LANGUAGE:()=>L,bootstrapI18n:()=>d,changeLanguage:()=>b,createInstance:()=>p,i18n:()=>s(),registerChangeLanguageListener:()=>A});var t=a(3398),s=a.n(t),c=a(1669),o=a.n(c),i=a(5352),u=a(6523),r=a.n(u);const l={lng:"en-US",fallbackLng:"en-US",load:"currentOnly",ns:["shell_core"],backend:{crossDomain:!0,loadPath:async(n,e)=>(n=>`%%basePath%%/${n}/locale/{{lng}}/{{ns}}.json`)(e[0].split("_")[0])},debug:["dev","beta"].includes(window.NX_RELEASE_CHANNEL),interpolation:{escapeValue:!1}},d=()=>{s().use(r()).use(o()).use(i.initReactI18next).init(l)};var g=a(7560),h=(a(540),a(8980)),E=a.n(h);const L="CHANGE_LANGUAGE";function b(n){const e=new CustomEvent("CHANGE_LANGUAGE",{detail:n});document.body.dispatchEvent(e)}function A(n){function e(e){n(e.detail)}return s().on("languageChanged",n),document.body.addEventListener(L,e),()=>{s().off("languageChanged",n),document.body.removeEventListener(L,e)}}var f=a(2322);function p(n){const e=s().createInstance();return e.use(r()),e.use(E()(((e,a,t)=>{n(`${e}/${a}`).then((({default:n})=>{t(null,n)})).catch((n=>{t(n,null)}))}))),e.init((0,g.Z)({},l,{ns:["core"]})),A((n=>{e.changeLanguage(n)})),{i18n:e,useTranslation:(n,a)=>(0,i.useTranslation)(n,(0,g.Z)({},a,{i18n:e})),Translation:n=>(0,f.jsx)(i.Translation,(0,g.Z)({},n,{i18n:e}))}}}}]);
//# sourceMappingURL=1910.5af8f32fc6ac9d42.js.map