"use strict";(self.webpackChunkfull_documentation_view=self.webpackChunkfull_documentation_view||[]).push([[8210],{128210:(e,t,n)=>{n.r(t),n.d(t,{ArgumentOutOfRangeError:()=>J.W,AsyncSubject:()=>y.c,BehaviorSubject:()=>p.X,ConnectableObservable:()=>i.c,EMPTY:()=>ve.E,EmptyError:()=>K.K,NEVER:()=>Ze,NotFoundError:()=>Y.d,Notification:()=>P.P_,NotificationKind:()=>P.W7,ObjectUnsubscribedError:()=>G.N,Observable:()=>r.y,ReplaySubject:()=>m.t,Scheduler:()=>z.b,SequenceError:()=>H.c,Subject:()=>v.x,Subscriber:()=>M.Lv,Subscription:()=>a.w0,TimeoutError:()=>$.W,UnsubscriptionError:()=>ee.B,VirtualAction:()=>O,VirtualTimeScheduler:()=>j,animationFrame:()=>Z,animationFrameScheduler:()=>C,animationFrames:()=>l,asap:()=>I,asapScheduler:()=>k,async:()=>q.P,asyncScheduler:()=>q.z,audit:()=>Ge.U,auditTime:()=>He.e,bindCallback:()=>ue,bindNodeCallback:()=>ce,buffer:()=>$e.f,bufferCount:()=>et.j,bufferTime:()=>tt.e,bufferToggle:()=>nt.P,bufferWhen:()=>rt.R,catchError:()=>it.K,combineAll:()=>ot.c,combineLatest:()=>ae.a,combineLatestAll:()=>ut.h,combineLatestWith:()=>ct.V,concat:()=>se.z,concatAll:()=>at.u,concatMap:()=>st.b,concatMapTo:()=>lt.w,concatWith:()=>ft.T,config:()=>Ye.v,connect:()=>dt.$,connectable:()=>he,count:()=>ht.Q,debounce:()=>vt.D,debounceTime:()=>pt.b,defaultIfEmpty:()=>mt.d,defer:()=>fe,delay:()=>yt.g,delayWhen:()=>bt.j,dematerialize:()=>wt.D,distinct:()=>gt.E,distinctUntilChanged:()=>xt.x,distinctUntilKeyChanged:()=>At.g,elementAt:()=>Et.T,empty:()=>ve.c,endWith:()=>Tt.l,every:()=>Ft.y,exhaust:()=>_t.b,exhaustAll:()=>kt.Y,exhaustMap:()=>It.z,expand:()=>qt.j,filter:()=>Ve.h,finalize:()=>Wt.x,find:()=>Lt.s,findIndex:()=>St.c,first:()=>Rt.P,firstValueFrom:()=>Q,flatMap:()=>Nt.V,forkJoin:()=>we,from:()=>ge.D,fromEvent:()=>_e,fromEventPattern:()=>Ie,generate:()=>We,groupBy:()=>Ct.v,identity:()=>U.y,ignoreElements:()=>Zt.l,iif:()=>Le,interval:()=>Se.F,isEmpty:()=>jt.x,isObservable:()=>D,last:()=>Ot.Z,lastValueFrom:()=>B,map:()=>zt.U,mapTo:()=>Mt.h,materialize:()=>Pt.i,max:()=>Vt.F,merge:()=>Ce,mergeAll:()=>Re.J,mergeMap:()=>xe.z,mergeMapTo:()=>Ut.j,mergeScan:()=>Xt.f,mergeWith:()=>Dt.b,min:()=>Kt.V,multicast:()=>Bt.O,never:()=>je,noop:()=>N.Z,observable:()=>o.L,observeOn:()=>ie.Q,of:()=>Oe.of,onErrorResumeNext:()=>ze.h,onErrorResumeNextWith:()=>Qt.n,pairs:()=>Me,pairwise:()=>Jt.G,partition:()=>Ne,pipe:()=>V.z,pluck:()=>Yt.j,publish:()=>Gt.n,publishBehavior:()=>Ht.n,publishLast:()=>$t.C,publishReplay:()=>en._,queue:()=>S,queueScheduler:()=>L,race:()=>Ue.S,raceWith:()=>tn.Q,range:()=>Xe,reduce:()=>nn.u,refCount:()=>an.x,repeat:()=>rn.r,repeatWhen:()=>on.a,retry:()=>un.X,retryWhen:()=>cn.a,sample:()=>sn.U,sampleTime:()=>ln.b,scan:()=>fn.R,scheduled:()=>Je.x,sequenceEqual:()=>dn.N,share:()=>hn.B,shareReplay:()=>vn.d,single:()=>pn.Z,skip:()=>mn.T,skipLast:()=>yn.W,skipUntil:()=>bn.u,skipWhile:()=>wn.n,startWith:()=>gn.O,subscribeOn:()=>ne.R,switchAll:()=>xn.B,switchMap:()=>An.w,switchMapTo:()=>En.c,switchScan:()=>Tn.w,take:()=>Fn.q,takeLast:()=>_n.h,takeUntil:()=>kn.R,takeWhile:()=>In.o,tap:()=>qn.b,throttle:()=>Wn.P,throttleTime:()=>Ln.p,throwError:()=>De._,throwIfEmpty:()=>Sn.T,timeInterval:()=>Rn.J,timeout:()=>$.V,timeoutWith:()=>Cn.L,timer:()=>Ke.H,timestamp:()=>Zn.A,toArray:()=>jn.q,using:()=>Be,window:()=>On.u,windowCount:()=>zn.r,windowTime:()=>Mn.I,windowToggle:()=>Pn.j,windowWhen:()=>Vn.Q,withLatestFrom:()=>Nn.M,zip:()=>Qe.$,zipAll:()=>Un.h,zipWith:()=>Xn.y});var r=n(183845),i=n(780169),o=n(34105),u={now:function(){return(u.delegate||performance).now()},delegate:void 0},c=n(305163),a=n(421118),s={schedule:function(e){var t=requestAnimationFrame,n=cancelAnimationFrame,r=s.delegate;r&&(t=r.requestAnimationFrame,n=r.cancelAnimationFrame);var i=t((function(t){n=void 0,e(t)}));return new a.w0((function(){return null==n?void 0:n(i)}))},requestAnimationFrame:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=s.delegate;return((null==n?void 0:n.requestAnimationFrame)||requestAnimationFrame).apply(void 0,(0,c.ev)([],(0,c.CR)(e)))},cancelAnimationFrame:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=s.delegate;return((null==n?void 0:n.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,(0,c.ev)([],(0,c.CR)(e)))},delegate:void 0};function l(e){return e?f(e):h}function f(e){return new r.y((function(t){var n=e||u,r=n.now(),i=0,o=function(){t.closed||(i=s.requestAnimationFrame((function(u){i=0;var c=n.now();t.next({timestamp:e?c:u,elapsed:c-r}),o()})))};return o(),function(){i&&s.cancelAnimationFrame(i)}}))}var d,h=f(),v=n(636076),p=n(756130),m=n(951221),y=n(958913),b=n(633274),w=1,g={};function x(e){return e in g&&(delete g[e],!0)}var A=function(e){var t=w++;return g[t]=!0,d||(d=Promise.resolve()),d.then((function(){return x(t)&&e()})),t},E=function(e){x(e)},T={setImmediate:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=T.delegate;return((null==n?void 0:n.setImmediate)||A).apply(void 0,(0,c.ev)([],(0,c.CR)(e)))},clearImmediate:function(e){var t=T.delegate;return((null==t?void 0:t.clearImmediate)||E)(e)},delegate:void 0},F=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r}return(0,c.ZT)(t,e),t.prototype.requestAsyncId=function(t,n,r){return void 0===r&&(r=0),null!==r&&r>0?e.prototype.requestAsyncId.call(this,t,n,r):(t.actions.push(this),t._scheduled||(t._scheduled=T.setImmediate(t.flush.bind(t,void 0))))},t.prototype.recycleAsyncId=function(t,n,r){var i;if(void 0===r&&(r=0),null!=r?r>0:this.delay>0)return e.prototype.recycleAsyncId.call(this,t,n,r);var o=t.actions;null!=n&&(null===(i=o[o.length-1])||void 0===i?void 0:i.id)!==n&&(T.clearImmediate(n),t._scheduled===n&&(t._scheduled=void 0))},t}(b.o),_=n(537967),k=new(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,c.ZT)(t,e),t.prototype.flush=function(e){this._active=!0;var t=this._scheduled;this._scheduled=void 0;var n,r=this.actions;e=e||r.shift();do{if(n=e.execute(e.state,e.delay))break}while((e=r[0])&&e.id===t&&r.shift());if(this._active=!1,n){for(;(e=r[0])&&e.id===t&&r.shift();)e.unsubscribe();throw n}},t}(_.v))(F),I=k,q=n(25937),W=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r}return(0,c.ZT)(t,e),t.prototype.schedule=function(t,n){return void 0===n&&(n=0),n>0?e.prototype.schedule.call(this,t,n):(this.delay=n,this.state=t,this.scheduler.flush(this),this)},t.prototype.execute=function(t,n){return n>0||this.closed?e.prototype.execute.call(this,t,n):this._execute(t,n)},t.prototype.requestAsyncId=function(t,n,r){return void 0===r&&(r=0),null!=r&&r>0||null==r&&this.delay>0?e.prototype.requestAsyncId.call(this,t,n,r):(t.flush(this),0)},t}(b.o),L=new(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,c.ZT)(t,e),t}(_.v))(W),S=L,R=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r}return(0,c.ZT)(t,e),t.prototype.requestAsyncId=function(t,n,r){return void 0===r&&(r=0),null!==r&&r>0?e.prototype.requestAsyncId.call(this,t,n,r):(t.actions.push(this),t._scheduled||(t._scheduled=s.requestAnimationFrame((function(){return t.flush(void 0)}))))},t.prototype.recycleAsyncId=function(t,n,r){var i;if(void 0===r&&(r=0),null!=r?r>0:this.delay>0)return e.prototype.recycleAsyncId.call(this,t,n,r);var o=t.actions;null!=n&&(null===(i=o[o.length-1])||void 0===i?void 0:i.id)!==n&&(s.cancelAnimationFrame(n),t._scheduled=void 0)},t}(b.o),C=new(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,c.ZT)(t,e),t.prototype.flush=function(e){this._active=!0;var t=this._scheduled;this._scheduled=void 0;var n,r=this.actions;e=e||r.shift();do{if(n=e.execute(e.state,e.delay))break}while((e=r[0])&&e.id===t&&r.shift());if(this._active=!1,n){for(;(e=r[0])&&e.id===t&&r.shift();)e.unsubscribe();throw n}},t}(_.v))(R),Z=C,j=function(e){function t(t,n){void 0===t&&(t=O),void 0===n&&(n=1/0);var r=e.call(this,t,(function(){return r.frame}))||this;return r.maxFrames=n,r.frame=0,r.index=-1,r}return(0,c.ZT)(t,e),t.prototype.flush=function(){for(var e,t,n=this.actions,r=this.maxFrames;(t=n[0])&&t.delay<=r&&(n.shift(),this.frame=t.delay,!(e=t.execute(t.state,t.delay))););if(e){for(;t=n.shift();)t.unsubscribe();throw e}},t.frameTimeFactor=10,t}(_.v),O=function(e){function t(t,n,r){void 0===r&&(r=t.index+=1);var i=e.call(this,t,n)||this;return i.scheduler=t,i.work=n,i.index=r,i.active=!0,i.index=t.index=r,i}return(0,c.ZT)(t,e),t.prototype.schedule=function(n,r){if(void 0===r&&(r=0),Number.isFinite(r)){if(!this.id)return e.prototype.schedule.call(this,n,r);this.active=!1;var i=new t(this.scheduler,this.work);return this.add(i),i.schedule(n,r)}return a.w0.EMPTY},t.prototype.requestAsyncId=function(e,n,r){void 0===r&&(r=0),this.delay=e.frame+r;var i=e.actions;return i.push(this),i.sort(t.sortActions),1},t.prototype.recycleAsyncId=function(e,t,n){void 0===n&&(n=0)},t.prototype._execute=function(t,n){if(!0===this.active)return e.prototype._execute.call(this,t,n)},t.sortActions=function(e,t){return e.delay===t.delay?e.index===t.index?0:e.index>t.index?1:-1:e.delay>t.delay?1:-1},t}(b.o),z=n(118516),M=n(117080),P=n(842737),V=n(648219),N=n(115562),U=n(769676),X=n(159126);function D(e){return!!e&&(e instanceof r.y||(0,X.m)(e.lift)&&(0,X.m)(e.subscribe))}var K=n(497465);function B(e,t){var n="object"==typeof t;return new Promise((function(r,i){var o,u=!1;e.subscribe({next:function(e){o=e,u=!0},error:i,complete:function(){u?r(o):n?r(t.defaultValue):i(new K.K)}})}))}function Q(e,t){var n="object"==typeof t;return new Promise((function(r,i){var o=new M.Hp({next:function(e){r(e),o.unsubscribe()},error:i,complete:function(){n?r(t.defaultValue):i(new K.K)}});e.subscribe(o)}))}var J=n(882141),Y=n(662158),G=n(915245),H=n(58274),$=n(472512),ee=n(268913),te=n(786670),ne=n(795675),re=n(456536),ie=n(770575);function oe(e,t,n,i){if(n){if(!(0,te.K)(n))return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return oe(e,t,i).apply(this,r).pipe((0,re.Z)(n))};i=n}return i?function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return oe(e,t).apply(this,n).pipe((0,ne.R)(i),(0,ie.Q)(i))}:function(){for(var n=this,i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];var u=new y.c,a=!0;return new r.y((function(r){var o=u.subscribe(r);if(a){a=!1;var s=!1,l=!1;t.apply(n,(0,c.ev)((0,c.ev)([],(0,c.CR)(i)),[function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(e){var r=t.shift();if(null!=r)return void u.error(r)}u.next(1<t.length?t:t[0]),l=!0,s&&u.complete()}])),l&&u.complete(),s=!0}return o}))}}function ue(e,t,n){return oe(!1,e,t,n)}function ce(e,t,n){return oe(!0,e,t,n)}var ae=n(143588),se=n(736910),le=n(497674);function fe(e){return new r.y((function(t){(0,le.Xf)(e()).subscribe(t)}))}var de={connector:function(){return new v.x},resetOnDisconnect:!0};function he(e,t){void 0===t&&(t=de);var n=null,i=t.connector,o=t.resetOnDisconnect,u=void 0===o||o,c=i(),a=new r.y((function(e){return c.subscribe(e)}));return a.connect=function(){return n&&!n.closed||(n=fe((function(){return e})).subscribe(c),u&&n.add((function(){return c=i()}))),n},a}var ve=n(200020),pe=n(921118),me=n(426932),ye=n(967394),be=n(618376);function we(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=(0,me.jO)(e),i=(0,pe.D)(e),o=i.args,u=i.keys,c=new r.y((function(e){var t=o.length;if(t)for(var n=new Array(t),r=t,i=t,c=function(t){var c=!1;(0,le.Xf)(o[t]).subscribe((0,ye.x)(e,(function(e){c||(c=!0,i--),n[t]=e}),(function(){return r--}),void 0,(function(){r&&c||(i||e.next(u?(0,be.n)(u,n):n),e.complete())})))},a=0;a<t;a++)c(a);else e.complete()}));return n?c.pipe((0,re.Z)(n)):c}var ge=n(360835),xe=n(426289),Ae=n(409361),Ee=["addListener","removeListener"],Te=["addEventListener","removeEventListener"],Fe=["on","off"];function _e(e,t,n,i){if((0,X.m)(n)&&(i=n,n=void 0),i)return _e(e,t,n).pipe((0,re.Z)(i));var o=(0,c.CR)(function(e){return(0,X.m)(e.addEventListener)&&(0,X.m)(e.removeEventListener)}(e)?Te.map((function(r){return function(i){return e[r](t,i,n)}})):function(e){return(0,X.m)(e.addListener)&&(0,X.m)(e.removeListener)}(e)?Ee.map(ke(e,t)):function(e){return(0,X.m)(e.on)&&(0,X.m)(e.off)}(e)?Fe.map(ke(e,t)):[],2),u=o[0],a=o[1];if(!u&&(0,Ae.z)(e))return(0,xe.z)((function(e){return _e(e,t,n)}))((0,le.Xf)(e));if(!u)throw new TypeError("Invalid event target");return new r.y((function(e){var t=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.next(1<t.length?t:t[0])};return u(t),function(){return a(t)}}))}function ke(e,t){return function(n){return function(r){return e[n](t,r)}}}function Ie(e,t,n){return n?Ie(e,t).pipe((0,re.Z)(n)):new r.y((function(n){var r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.next(1===e.length?e[0]:e)},i=e(r);return(0,X.m)(t)?function(){return t(r,i)}:void 0}))}var qe=n(788240);function We(e,t,n,r,i){var o,u,a,s;function l(){var e;return(0,c.Jh)(this,(function(r){switch(r.label){case 0:e=s,r.label=1;case 1:return t&&!t(e)?[3,4]:[4,a(e)];case 2:r.sent(),r.label=3;case 3:return e=n(e),[3,1];case 4:return[2]}}))}return 1===arguments.length?(s=(o=e).initialState,t=o.condition,n=o.iterate,u=o.resultSelector,a=void 0===u?U.y:u,i=o.scheduler):(s=e,!r||(0,te.K)(r)?(a=U.y,i=r):a=r),fe(i?function(){return(0,qe.Q)(l(),i)}:l)}function Le(e,t,n){return fe((function(){return e()?t:n}))}var Se=n(372121),Re=n(884309);function Ce(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=(0,me.yG)(e),r=(0,me._6)(e,1/0),i=e;return i.length?1===i.length?(0,le.Xf)(i[0]):(0,Re.J)(r)((0,ge.D)(i,n)):ve.E}var Ze=new r.y(N.Z);function je(){return Ze}var Oe=n(235120),ze=n(14047);function Me(e,t){return(0,ge.D)(Object.entries(e),t)}var Pe=n(134214),Ve=n(799054);function Ne(e,t,n){return[(0,Ve.h)(t,n)((0,le.Xf)(e)),(0,Ve.h)((0,Pe.f)(t,n))((0,le.Xf)(e))]}var Ue=n(976075);function Xe(e,t,n){if(null==t&&(t=e,e=0),t<=0)return ve.E;var i=t+e;return new r.y(n?function(t){var r=e;return n.schedule((function(){r<i?(t.next(r++),this.schedule()):t.complete()}))}:function(t){for(var n=e;n<i&&!t.closed;)t.next(n++);t.complete()})}var De=n(83746),Ke=n(214834);function Be(e,t){return new r.y((function(n){var r=e(),i=t(r);return(i?(0,le.Xf)(i):ve.E).subscribe(n),function(){r&&r.unsubscribe()}}))}var Qe=n(311846),Je=n(783722),Ye=n(164020),Ge=n(936656),He=n(833070),$e=n(228786),et=n(45995),tt=n(614240),nt=n(780468),rt=n(681533),it=n(947009),ot=n(369090),ut=n(266256),ct=n(64498),at=n(489738),st=n(533705),lt=n(289252),ft=n(949721),dt=n(497182),ht=n(684106),vt=n(437796),pt=n(718871),mt=n(99136),yt=n(647697),bt=n(712876),wt=n(502549),gt=n(133886),xt=n(739369),At=n(435023),Et=n(338565),Tt=n(717756),Ft=n(780046),_t=n(108864),kt=n(936040),It=n(292934),qt=n(609962),Wt=n(990705),Lt=n(137510),St=n(998404),Rt=n(481176),Ct=n(59802),Zt=n(872503),jt=n(250680),Ot=n(835890),zt=n(977984),Mt=n(666311),Pt=n(507028),Vt=n(900957),Nt=n(168676),Ut=n(678191),Xt=n(712222),Dt=n(769785),Kt=n(300636),Bt=n(826764),Qt=n(195671),Jt=n(758788),Yt=n(436794),Gt=n(794140),Ht=n(720536),$t=n(285682),en=n(887868),tn=n(277584),nn=n(202035),rn=n(128837),on=n(490958),un=n(3679),cn=n(385854),an=n(455563),sn=n(768948),ln=n(728694),fn=n(465083),dn=n(421182),hn=n(176619),vn=n(713977),pn=n(339771),mn=n(258121),yn=n(478660),bn=n(747337),wn=n(699010),gn=n(816981),xn=n(822121),An=n(912335),En=n(518714),Tn=n(692232),Fn=n(256718),_n=n(496590),kn=n(720114),In=n(161590),qn=n(611348),Wn=n(436871),Ln=n(826469),Sn=n(205663),Rn=n(697134),Cn=n(614335),Zn=n(839832),jn=n(923301),On=n(213640),zn=n(974341),Mn=n(537610),Pn=n(296943),Vn=n(346026),Nn=n(358795),Un=n(970523),Xn=n(775855)}}]);
//# sourceMappingURL=8210.c845f34bbe5e6c21.js.map