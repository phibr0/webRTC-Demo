import{S as P,i as Q,s as T,e as b,c as $,a as g,d as m,b as C,f as k,n as d,o as S,p as h,u as U,m as D,v,w,x as y,A as E,I as f,k as N,J as O,K as F,t as R,j,g as q,l as L,H as M,M as G}from"../../chunks/vendor-12ffae65.js";import{R as H,I as J,C as K,S as z,Q as B}from"../../chunks/static-68113e36.js";function V(c){let t,n;return t=new K({props:{channel:c[0].channel}}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,l){y(t,e,l),n=!0},p(e,l){const r={};l&1&&(r.channel=e[0].channel),t.$set(r)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function W(c){let t,n;return t=new z({}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,l){y(t,e,l),n=!0},p:f,i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function X(c){let t,n,e,l,r,s,u,i,p,a=c[2]&&A(c);return{c(){t=b("p"),n=R("Let the other User scan this Code"),e=j(),a&&a.c(),l=j(),r=b("p"),s=R("Done"),this.h()},l(o){t=$(o,"P",{class:!0});var _=g(t);n=q(_,"Let the other User scan this Code"),_.forEach(m),e=L(o),a&&a.l(o),l=L(o),r=$(o,"P",{class:!0});var I=g(r);s=q(I,"Done"),I.forEach(m),this.h()},h(){C(t,"class","svelte-phd96k"),C(r,"class","btn svelte-phd96k")},m(o,_){k(o,t,_),M(t,n),k(o,e,_),a&&a.m(o,_),k(o,l,_),k(o,r,_),M(r,s),u=!0,i||(p=G(r,"click",c[3]),i=!0)},p(o,_){o[2]?a?(a.p(o,_),_&4&&h(a,1)):(a=A(o),a.c(),h(a,1),a.m(l.parentNode,l)):a&&(D(),d(a,1,1,()=>{a=null}),S())},i(o){u||(h(a),u=!0)},o(o){d(a),u=!1},d(o){o&&m(t),o&&m(e),a&&a.d(o),o&&m(l),o&&m(r),i=!1,p()}}}function A(c){let t,n,e,l={ctx:c,current:null,token:null,hasCatch:!1,pending:x,then:Z,catch:Y,value:4,blocks:[,,,]};return O(n=c[2],l),{c(){t=N(),l.block.c()},l(r){t=N(),l.block.l(r)},m(r,s){k(r,t,s),l.block.m(r,l.anchor=s),l.mount=()=>t.parentNode,l.anchor=t,e=!0},p(r,s){c=r,l.ctx=c,s&4&&n!==(n=c[2])&&O(n,l)||F(l,c,s)},i(r){e||(h(l.block),e=!0)},o(r){for(let s=0;s<3;s+=1){const u=l.blocks[s];d(u)}e=!1},d(r){r&&m(t),l.block.d(r),l.token=null,l=null}}}function Y(c){return{c:f,l:f,m:f,p:f,i:f,o:f,d:f}}function Z(c){let t,n;return t=new B({props:{data:c[4].sdp}}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,l){y(t,e,l),n=!0},p(e,l){const r={};l&4&&(r.data=e[4].sdp),t.$set(r)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){d(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function x(c){return{c:f,l:f,m:f,p:f,i:f,o:f,d:f}}function ee(c){let t,n,e,l;const r=[X,W,V],s=[];function u(i,p){return i[1]==="offering"?0:i[1]==="scanning"?1:i[1]==="chatting"?2:-1}return~(n=u(c))&&(e=s[n]=r[n](c)),{c(){t=b("main"),e&&e.c(),this.h()},l(i){t=$(i,"MAIN",{class:!0});var p=g(t);e&&e.l(p),p.forEach(m),this.h()},h(){C(t,"class","svelte-phd96k")},m(i,p){k(i,t,p),~n&&s[n].m(t,null),l=!0},p(i,[p]){let a=n;n=u(i),n===a?~n&&s[n].p(i,p):(e&&(D(),d(s[a],1,1,()=>{s[a]=null}),S()),~n?(e=s[n],e?e.p(i,p):(e=s[n]=r[n](i),e.c()),h(e,1),e.m(t,null)):e=null)},i(i){l||(h(e),l=!0)},o(i){d(e),l=!1},d(i){i&&m(t),~n&&s[n].d()}}}function te(c,t,n){let e,l="offering",r;return U(()=>{addEventListener("scan",async u=>{const i={type:"answer",sdp:u.detail.data};e.setRemoteDescription(i)}),n(0,e=new H(J,"offer",!0)),n(0,e.onOpen=()=>n(1,l="chatting"),e),n(0,e.onClose=()=>location.href="https://phibr0.de/webRTC-Demo",e),n(2,r=e.generateOffer(1e3))}),[e,l,r,()=>n(1,l="scanning")]}class re extends P{constructor(t){super();Q(this,t,te,ee,T,{})}}export{re as default};
