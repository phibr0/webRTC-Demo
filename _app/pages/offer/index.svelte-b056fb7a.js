import{S as z,i as B,s as F,e as d,c as k,a as $,d as f,b as P,f as m,n as y,o as Q,p as b,u as q,m as G,R as H,L as J,v as T,w as j,x as D,A,t as S,j as v,g as w,l as C,H as O,J as x,K as I,M as K}from"../../chunks/vendor-3dd79ec9.js";import{I as U,C as X,a as Z,S as V}from"../../chunks/static-e8c25dd6.js";function W(p){let s,n;return s=new X({props:{channel:p[0].channel}}),{c(){T(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,l){D(s,e,l),n=!0},p(e,l){const i={};l&1&&(i.channel=e[0].channel),s.$set(i)},i(e){n||(b(s.$$.fragment,e),n=!0)},o(e){y(s.$$.fragment,e),n=!1},d(e){A(s,e)}}}function Y(p){let s,n,e,l,i,o,_,t,a,u,h,R,E,g,L;return l=new Z({}),{c(){s=d("p"),n=S("Scan the QRCode of the other party,"),e=v(),T(l.$$.fragment),i=v(),o=d("p"),_=S("Or paste the key:"),t=v(),a=d("textarea"),u=v(),h=d("button"),R=S("Start")},l(r){s=k(r,"P",{});var c=$(s);n=w(c,"Scan the QRCode of the other party,"),c.forEach(f),e=C(r),j(l.$$.fragment,r),i=C(r),o=k(r,"P",{});var M=$(o);_=w(M,"Or paste the key:"),M.forEach(f),t=C(r),a=k(r,"TEXTAREA",{}),$(a).forEach(f),u=C(r),h=k(r,"BUTTON",{});var N=$(h);R=w(N,"Start"),N.forEach(f)},m(r,c){m(r,s,c),O(s,n),m(r,e,c),D(l,r,c),m(r,i,c),m(r,o,c),O(o,_),m(r,t,c),m(r,a,c),x(a,p[3]),m(r,u,c),m(r,h,c),O(h,R),E=!0,g||(L=[I(a,"input",p[5]),I(h,"click",p[6])],g=!0)},p(r,c){c&8&&x(a,r[3])},i(r){E||(b(l.$$.fragment,r),E=!0)},o(r){y(l.$$.fragment,r),E=!1},d(r){r&&f(s),r&&f(e),A(l,r),r&&f(i),r&&f(o),r&&f(t),r&&f(a),r&&f(u),r&&f(h),g=!1,K(L)}}}function ee(p){let s,n,e,l,i,o,_;return s=new V({props:{sdp:p[2]}}),{c(){T(s.$$.fragment),n=v(),e=d("p"),l=S("Done"),this.h()},l(t){j(s.$$.fragment,t),n=C(t),e=k(t,"P",{class:!0});var a=$(e);l=w(a,"Done"),a.forEach(f),this.h()},h(){P(e,"class","btn svelte-1eccz5j")},m(t,a){D(s,t,a),m(t,n,a),m(t,e,a),O(e,l),i=!0,o||(_=I(e,"click",p[4]),o=!0)},p(t,a){const u={};a&4&&(u.sdp=t[2]),s.$set(u)},i(t){i||(b(s.$$.fragment,t),i=!0)},o(t){y(s.$$.fragment,t),i=!1},d(t){A(s,t),t&&f(n),t&&f(e),o=!1,_()}}}function te(p){let s,n,e,l;const i=[ee,Y,W],o=[];function _(t,a){return t[1]==="offering"?0:t[1]==="scanning"?1:t[1]==="chatting"?2:-1}return~(n=_(p))&&(e=o[n]=i[n](p)),{c(){s=d("main"),e&&e.c(),this.h()},l(t){s=k(t,"MAIN",{class:!0});var a=$(s);e&&e.l(a),a.forEach(f),this.h()},h(){P(s,"class","svelte-1eccz5j")},m(t,a){m(t,s,a),~n&&o[n].m(s,null),l=!0},p(t,[a]){let u=n;n=_(t),n===u?~n&&o[n].p(t,a):(e&&(G(),y(o[u],1,1,()=>{o[u]=null}),Q()),~n?(e=o[n],e?e.p(t,a):(e=o[n]=i[n](t),e.c()),b(e,1),e.m(s,null)):e=null)},i(t){l||(b(e),l=!0)},o(t){y(e),l=!1},d(t){t&&f(s),~n&&o[n].d()}}}function ne(p,s,n){let e,l="offering",i,o;q(()=>{addEventListener("scan",async u=>{const h={type:"answer",sdp:u.detail.data};e.setRemoteDescription(h)}),n(0,e=new H(U,"offer",!0)),n(0,e.onOpen=()=>n(1,l="chatting"),e),n(0,e.onClose=()=>location.href="https://phibr0.de/webRTC-Demo",e),n(2,i=e.generateOffer(1e3))});const _=()=>n(1,l="scanning");function t(){o=this.value,n(3,o)}return[e,l,i,o,_,t,()=>dispatchEvent(new CustomEvent("scan",{detail:{data:J.decompressFromBase64(o)}}))]}class ae extends z{constructor(s){super();B(this,s,ne,te,F,{})}}export{ae as default};
