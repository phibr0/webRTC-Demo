import{S as D,i as L,s as M,e as k,c as $,a as b,d as p,b as N,f as m,n as d,o as B,p as h,u as F,m as q,R as G,L as H,v as y,w,x as C,A as v,j as E,t as O,l as S,g as R,H as x,J as I,K as j,M as J}from"../../chunks/vendor-3dd79ec9.js";import{I as K,C as P,S as U,a as X}from"../../chunks/static-e8c25dd6.js";function Z(c){let n,t;return n=new P({props:{channel:c[0].channel}}),{c(){y(n.$$.fragment)},l(e){w(n.$$.fragment,e)},m(e,l){C(n,e,l),t=!0},p(e,l){const o={};l&1&&(o.channel=e[0].channel),n.$set(o)},i(e){t||(h(n.$$.fragment,e),t=!0)},o(e){d(n.$$.fragment,e),t=!1},d(e){v(n,e)}}}function z(c){let n,t;return n=new U({props:{sdp:c[2]}}),{c(){y(n.$$.fragment)},l(e){w(n.$$.fragment,e)},m(e,l){C(n,e,l),t=!0},p(e,l){const o={};l&4&&(o.sdp=e[2]),n.$set(o)},i(e){t||(h(n.$$.fragment,e),t=!0)},o(e){d(n.$$.fragment,e),t=!1},d(e){v(n,e)}}}function Q(c){let n,t,e,l,o,r,_,a,i,u,g,A;return n=new X({}),{c(){y(n.$$.fragment),t=E(),e=k("p"),l=O("Or paste the key:"),o=E(),r=k("textarea"),_=E(),a=k("button"),i=O("Start")},l(s){w(n.$$.fragment,s),t=S(s),e=$(s,"P",{});var f=b(e);l=R(f,"Or paste the key:"),f.forEach(p),o=S(s),r=$(s,"TEXTAREA",{}),b(r).forEach(p),_=S(s),a=$(s,"BUTTON",{});var T=b(a);i=R(T,"Start"),T.forEach(p)},m(s,f){C(n,s,f),m(s,t,f),m(s,e,f),x(e,l),m(s,o,f),m(s,r,f),I(r,c[3]),m(s,_,f),m(s,a,f),x(a,i),u=!0,g||(A=[j(r,"input",c[4]),j(a,"click",c[5])],g=!0)},p(s,f){f&8&&I(r,s[3])},i(s){u||(h(n.$$.fragment,s),u=!0)},o(s){d(n.$$.fragment,s),u=!1},d(s){v(n,s),s&&p(t),s&&p(e),s&&p(o),s&&p(r),s&&p(_),s&&p(a),g=!1,J(A)}}}function V(c){let n,t,e,l;const o=[Q,z,Z],r=[];function _(a,i){return a[1]==="scanning"?0:a[1]==="offering"?1:a[1]==="chatting"?2:-1}return~(t=_(c))&&(e=r[t]=o[t](c)),{c(){n=k("main"),e&&e.c(),this.h()},l(a){n=$(a,"MAIN",{class:!0});var i=b(n);e&&e.l(i),i.forEach(p),this.h()},h(){N(n,"class","svelte-6uxsi8")},m(a,i){m(a,n,i),~t&&r[t].m(n,null),l=!0},p(a,[i]){let u=t;t=_(a),t===u?~t&&r[t].p(a,i):(e&&(q(),d(r[u],1,1,()=>{r[u]=null}),B()),~t?(e=r[t],e?e.p(a,i):(e=r[t]=o[t](a),e.c()),h(e,1),e.m(n,null)):e=null)},i(a){l||(h(e),l=!0)},o(a){d(e),l=!1},d(a){a&&p(n),~t&&r[t].d()}}}function W(c,n,t){let e,l="scanning",o,r;F(()=>{addEventListener("scan",async i=>{t(1,l="offering");const u={type:"offer",sdp:i.detail.data};console.log(u),t(0,e=new G(K,"answer",!0)),t(0,e.onOpen=()=>t(1,l="chatting"),e),t(0,e.onClose=()=>location.href="https://phibr0.de/webRTC-Demo",e),await e.setRemoteDescription(u),t(2,o=e.generateAnswer(1e3))})});function _(){r=this.value,t(3,r)}return[e,l,o,r,_,()=>dispatchEvent(new CustomEvent("scan",{detail:{data:H.decompressFromBase64(r)}}))]}class te extends D{constructor(n){super();L(this,n,W,V,M,{})}}export{te as default};