(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9361)}])},9361:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return oe}});var t=r(5893),i=r(3236),o=r(5113),a=r(1664),u=r(7294);function c(e,n,r,t){return new(r||(r=Promise))((function(i,o){function a(e){try{c(t.next(e))}catch(n){o(n)}}function u(e){try{c(t.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,u)}c((t=t.apply(e,n||[])).next())}))}function l(e,n){var r,t,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,t&&(i=2&o[0]?t.return:o[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,o[1])).done)return i;switch(t=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,t=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(u){o=[6,u],t=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}var s,f=function(){},d=f(),h=Object,v=function(e){return e===d},p=function(e){return"function"==typeof e},g=function(e,n){return h.assign({},e,n)},b="undefined",m=function(){return typeof window!=b},y=new WeakMap,w=0,x=function(e){var n,r,t=typeof e,i=e&&e.constructor,o=i==Date;if(h(e)!==e||o||i==RegExp)n=o?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(n=y.get(e))return n;if(n=++w+"~",y.set(e,n),i==Array){for(n="@",r=0;r<e.length;r++)n+=x(e[r])+",";y.set(e,n)}if(i==h){n="#";for(var a=h.keys(e).sort();!v(r=a.pop());)v(e[r])||(n+=r+":"+x(e[r])+",");y.set(e,n)}}return n},j=!0,k=m(),C=typeof document!=b,E=k&&window.addEventListener?window.addEventListener.bind(window):f,A=C?document.addEventListener.bind(document):f,O=k&&window.removeEventListener?window.removeEventListener.bind(window):f,R=C?document.removeEventListener.bind(document):f,S={isOnline:function(){return j},isVisible:function(){var e=C&&document.visibilityState;return v(e)||"hidden"!==e}},T={initFocus:function(e){return A("visibilitychange",e),E("focus",e),function(){R("visibilitychange",e),O("focus",e)}},initReconnect:function(e){var n=function(){j=!0,e()},r=function(){j=!1};return E("online",n),E("offline",r),function(){O("online",n),O("offline",r)}}},I=!m()||"Deno"in window,V=function(e){return m()&&typeof window.requestAnimationFrame!=b?window.requestAnimationFrame(e):setTimeout(e,1)},D=I?u.useEffect:u.useLayoutEffect,W="undefined"!==typeof navigator&&navigator.connection,_=!I&&W&&(["slow-2g","2g"].includes(W.effectiveType)||W.saveData),P=function(e){if(p(e))try{e=e()}catch(r){e=""}var n=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?x(e):"",n,e?"$swr$"+e:""]},L=new WeakMap,F=function(e,n,r,t,i,o,a){void 0===a&&(a=!0);var u=L.get(e),c=u[0],l=u[1],s=u[3],f=c[n],d=l[n];if(a&&d)for(var h=0;h<d.length;++h)d[h](r,t,i);return o&&(delete s[n],f&&f[0])?f[0](2).then((function(){return e.get(n)})):e.get(n)},M=0,N=function(){return++M},H=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return c(void 0,void 0,void 0,(function(){var n,r,t,i,o,a,u,c,s,f,h,b,m,y,w,x,j,k,C,E,A;return l(this,(function(l){switch(l.label){case 0:if(n=e[0],r=e[1],t=e[2],i=e[3],a=!!v((o="boolean"===typeof i?{revalidate:i}:i||{}).populateCache)||o.populateCache,u=!1!==o.revalidate,c=!1!==o.rollbackOnError,s=o.optimisticData,f=P(r),h=f[0],b=f[2],!h)return[2];if(m=L.get(n),y=m[2],e.length<3)return[2,F(n,h,n.get(h),d,d,u,!0)];if(w=t,j=N(),y[h]=[j,0],k=!v(s),C=n.get(h),k&&(E=p(s)?s(C):s,n.set(h,E),F(n,h,E)),p(w))try{w=w(n.get(h))}catch(O){x=O}return w&&p(w.then)?[4,w.catch((function(e){x=e}))]:[3,2];case 1:if(w=l.sent(),j!==y[h][0]){if(x)throw x;return[2,w]}x&&k&&c&&(a=!0,w=C,n.set(h,C)),l.label=2;case 2:return a&&(x||(p(a)&&(w=a(w,C)),n.set(h,w)),n.set(b,g(n.get(b),{error:x}))),y[h][1]=N(),[4,F(n,h,w,x,d,u,!!a)];case 3:if(A=l.sent(),x)throw x;return[2,a?A:w]}}))}))},X=function(e,n){for(var r in e)e[r][0]&&e[r][0](n)},z=function(e,n){if(!L.has(e)){var r=g(T,n),t={},i=H.bind(d,e),o=f;if(L.set(e,[t,{},{},{},i]),!I){var a=r.initFocus(setTimeout.bind(d,X.bind(d,t,0))),u=r.initReconnect(setTimeout.bind(d,X.bind(d,t,1)));o=function(){a&&a(),u&&u(),L.delete(e)}}return[e,i,o]}return[e,L.get(e)[4]]},$=z(new Map),q=$[0],J=$[1],Y=g({onLoadingSlow:f,onSuccess:f,onError:f,onErrorRetry:function(e,n,r,t,i){var o=r.errorRetryCount,a=i.retryCount,u=~~((Math.random()+.5)*(1<<(a<8?a:8)))*r.errorRetryInterval;!v(o)&&a>o||setTimeout(t,u,i)},onDiscarded:f,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:_?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:_?5e3:3e3,compare:function(e,n){return x(e)==x(n)},isPaused:function(){return!1},cache:q,mutate:J,fallback:{}},S),B=function(e,n){var r=g(e,n);if(n){var t=e.use,i=e.fallback,o=n.use,a=n.fallback;t&&o&&(r.use=t.concat(o)),i&&a&&(r.fallback=g(i,a))}return r},G=(0,u.createContext)({}),U=function(e){return p(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},K=function(){return g(Y,(0,u.useContext)(G))},Q=function(e,n,r){var t=n[e]||(n[e]=[]);return t.push(r),function(){var e=t.indexOf(r);e>=0&&(t[e]=t[t.length-1],t.pop())}},Z={dedupe:!0},ee=(h.defineProperty((function(e){var n=e.value,r=B((0,u.useContext)(G),n),t=n&&n.provider,i=(0,u.useState)((function(){return t?z(t(r.cache||q),n):d}))[0];return i&&(r.cache=i[0],r.mutate=i[1]),D((function(){return i?i[2]:d}),[]),(0,u.createElement)(G.Provider,g(e,{value:r}))}),"default",{value:Y}),s=function(e,n,r){var t=r.cache,i=r.compare,o=r.fallbackData,a=r.suspense,s=r.revalidateOnMount,f=r.refreshInterval,h=r.refreshWhenHidden,b=r.refreshWhenOffline,m=L.get(t),y=m[0],w=m[1],x=m[2],j=m[3],k=P(e),C=k[0],E=k[1],A=k[2],O=(0,u.useRef)(!1),R=(0,u.useRef)(!1),S=(0,u.useRef)(C),T=(0,u.useRef)(n),W=(0,u.useRef)(r),_=function(){return W.current},M=function(){return _().isVisible()&&_().isOnline()},X=function(e){return t.set(A,g(t.get(A),e))},z=t.get(C),$=v(o)?r.fallback[C]:o,q=v(z)?$:z,J=t.get(A)||{},Y=J.error,B=!O.current,G=function(){return B&&!v(s)?s:!_().isPaused()&&(a?!v(q)&&r.revalidateIfStale:v(q)||r.revalidateIfStale)},U=!(!C||!n)&&(!!J.isValidating||B&&G()),K=function(e,n){var r=(0,u.useState)({})[1],t=(0,u.useRef)(e),i=(0,u.useRef)({data:!1,error:!1,isValidating:!1}),o=(0,u.useCallback)((function(e){var o=!1,a=t.current;for(var u in e){var c=u;a[c]!==e[c]&&(a[c]=e[c],i.current[c]&&(o=!0))}o&&!n.current&&r({})}),[]);return D((function(){t.current=e})),[t,i.current,o]}({data:q,error:Y,isValidating:U},R),ee=K[0],ne=K[1],re=K[2],te=(0,u.useCallback)((function(e){return c(void 0,void 0,void 0,(function(){var n,o,a,u,c,s,f,h,g,b,m,y,w;return l(this,(function(l){switch(l.label){case 0:if(n=T.current,!C||!n||R.current||_().isPaused())return[2,!1];u=!0,c=e||{},s=!j[C]||!c.dedupe,f=function(){return!R.current&&C===S.current&&O.current},h=function(){var e=j[C];e&&e[1]===a&&delete j[C]},g={isValidating:!1},b=function(){X({isValidating:!1}),f()&&re(g)},X({isValidating:!0}),re({isValidating:!0}),l.label=1;case 1:return l.trys.push([1,3,,4]),s&&(F(t,C,ee.current.data,ee.current.error,!0),r.loadingTimeout&&!t.get(C)&&setTimeout((function(){u&&f()&&_().onLoadingSlow(C,r)}),r.loadingTimeout),j[C]=[n.apply(void 0,E),N()]),w=j[C],o=w[0],a=w[1],[4,o];case 2:return o=l.sent(),s&&setTimeout(h,r.dedupingInterval),j[C]&&j[C][1]===a?(X({error:d}),g.error=d,m=x[C],!v(m)&&(a<=m[0]||a<=m[1]||0===m[1])?(b(),s&&f()&&_().onDiscarded(C),[2,!1]):(i(ee.current.data,o)?g.data=ee.current.data:g.data=o,i(t.get(C),o)||t.set(C,o),s&&f()&&_().onSuccess(o,C,r),[3,4])):(s&&f()&&_().onDiscarded(C),[2,!1]);case 3:return y=l.sent(),h(),_().isPaused()||(X({error:y}),g.error=y,s&&f()&&(_().onError(y,C,r),("boolean"===typeof r.shouldRetryOnError&&r.shouldRetryOnError||p(r.shouldRetryOnError)&&r.shouldRetryOnError(y))&&M()&&_().onErrorRetry(y,C,r,te,{retryCount:(c.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return u=!1,b(),f()&&s&&F(t,C,g.data,g.error,!1),[2,!0]}}))}))}),[C]),ie=(0,u.useCallback)(H.bind(d,t,(function(){return S.current})),[]);if(D((function(){T.current=n,W.current=r})),D((function(){if(C){var e=C!==S.current,n=te.bind(d,Z),r=0,t=Q(C,w,(function(e,n,r){re(g({error:n,isValidating:r},i(ee.current.data,e)?d:{data:e}))})),o=Q(C,y,(function(e){if(0==e){var t=Date.now();_().revalidateOnFocus&&t>r&&M()&&(r=t+_().focusThrottleInterval,n())}else if(1==e)_().revalidateOnReconnect&&M()&&n();else if(2==e)return te()}));return R.current=!1,S.current=C,O.current=!0,e&&re({data:q,error:Y,isValidating:U}),G()&&(v(q)||I?n():V(n)),function(){R.current=!0,t(),o()}}}),[C,te]),D((function(){var e;function n(){var n=p(f)?f(q):f;n&&-1!==e&&(e=setTimeout(r,n))}function r(){ee.current.error||!h&&!_().isVisible()||!b&&!_().isOnline()?n():te(Z).then(n)}return n(),function(){e&&(clearTimeout(e),e=-1)}}),[f,h,b,te]),(0,u.useDebugValue)(q),a&&v(q)&&C)throw T.current=n,W.current=r,R.current=!1,v(Y)?te(Z):Y;return{mutate:ie,get data(){return ne.data=!0,q},get error(){return ne.error=!0,Y},get isValidating(){return ne.isValidating=!0,U}}},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=K(),t=U(e),i=t[0],o=t[1],a=t[2],u=B(r,a),c=s,l=u.use;if(l)for(var f=l.length;f-- >0;)c=l[f](c);return c(i,o||u.fetcher,u)});function ne(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function re(e){return function(e){if(Array.isArray(e))return ne(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return ne(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ne(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var te=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return fetch.apply(void 0,re(n).concat([{mode:"cors",headers:{"Access-Control-Allow-Origin":"*"}}])).then((function(e){return e.json()}))},ie=function(e){var n=new Date,r="".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDate());9==r.length&&(r="".concat(n.getFullYear(),"-0").concat(n.getMonth()+1,"-").concat(n.getDate()));var o=ee("https://peoplecounterapi.azurewebsites.net/api/counted/"+r+"/peoplecount",te,{refreshInterval:3e4}),a=o.data;return o.error?(0,t.jsx)("div",{children:"Failed to load from api"}):a?(0,t.jsxs)(i.W2,{children:["current"==e.id&&(0,t.jsx)("a",{children:a.current}),"max"==e.id&&(0,t.jsx)("a",{children:a.maxAmount})]}):(0,t.jsx)("div",{children:"Loading..."})};function oe(){return(0,t.jsxs)(i.W2,{maxW:"auto",minH:"100vh",p:"2%",children:[(0,t.jsx)("header",{children:(0,t.jsx)("title",{children:"People Counter"})}),(0,t.jsx)(i.kC,{h:"10vh",children:(0,t.jsx)(i.gC,{w:"full",h:"full",p:10,spacing:10,alignItems:"center",children:(0,t.jsx)(i.X6,{color:"blueviolet",fontSize:"8vh",fontWeight:"600",m:"-3%",children:"People Counter p\xe5 Atea"})})}),(0,t.jsxs)(i.kC,{paddingBottom:"2.5rem",children:[(0,t.jsx)(i.gC,{w:"100px",marginTop:"5%",children:(0,t.jsx)(a.default,{href:"/history",children:(0,t.jsx)(o.zx,{size:"lg",color:"blueviolet",children:"Historik"})})}),(0,t.jsxs)(i.kC,{alignSelf:"center",w:"200vh",maxW:"200vh",display:"flex",direction:"column",gap:100,minH:"70vh",justifyContent:"center",alignItems:"center",children:[(0,t.jsxs)(i.xu,{p:10,maxW:"sm",borderRadius:"lg",borderWidth:"1px",overflow:"hidden",borderColor:"blue.600",children:[(0,t.jsx)(i.X6,{color:"blueviolet",textAlign:"center",children:(0,t.jsx)(ie,{id:"current"})}),(0,t.jsx)(i.xv,{color:"blackAlpha.800",textAlign:"center",children:"Antal m\xe4nniskor p\xe5 kontoret"})]}),(0,t.jsxs)(i.xu,{p:10,maxW:"sm",borderRadius:"lg",borderWidth:"1px",overflow:"hidden",borderColor:"blue.600",children:[(0,t.jsx)(i.X6,{color:"blueviolet",textAlign:"center",children:(0,t.jsx)(ie,{id:"max"})}),(0,t.jsx)(i.xv,{color:"blackAlpha.800",textAlign:"center",children:"H\xf6gsta antal p\xe5 kontoret f\xf6r dagen"})]})]})]}),(0,t.jsx)(i.gC,{w:"calc(100% - 4%)",height:"2.5rem",borderTop:"1px solid white",position:"absolute",bottom:"0"})]})}}},function(e){e.O(0,[708,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);