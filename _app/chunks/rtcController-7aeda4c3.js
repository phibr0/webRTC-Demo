import{S,i as k,s as N,k as R,f as E,d as u,e as f,j as P,t as O,c as p,a as g,l as T,g as V,b as _,H as v,L as j,M as q,I as y,N as G,O as H,u as L,P as D,h as Q,Q as J,R as U,T as B,U as K}from"./vendor-0fb0a8b3.js";/* empty css                                           */function F(o,e,t){const l=o.slice();return l[5]=e[t],l}function W(o){let e,t,l=o[5].data+"",s,n;return{c(){e=f("div"),t=f("span"),s=O(l),this.h()},l(a){e=p(a,"DIV",{class:!0});var c=g(e);t=p(c,"SPAN",{});var h=g(t);s=V(h,l),h.forEach(u),c.forEach(u),this.h()},h(){_(e,"class",n=""+(D(o[5].type)+" svelte-16ca9vt"))},m(a,c){E(a,e,c),v(e,t),v(t,s)},p(a,c){c&1&&l!==(l=a[5].data+"")&&Q(s,l),c&1&&n!==(n=""+(D(a[5].type)+" svelte-16ca9vt"))&&_(e,"class",n)},d(a){a&&u(e)}}}function X(o){let e,t,l=o[5].data+"",s,n;return{c(){e=f("div"),t=f("span"),s=O(l),this.h()},l(a){e=p(a,"DIV",{class:!0});var c=g(e);t=p(c,"SPAN",{});var h=g(t);s=V(h,l),h.forEach(u),c.forEach(u),this.h()},h(){_(e,"class",n=""+(D(o[5].type)+" svelte-16ca9vt"))},m(a,c){E(a,e,c),v(e,t),v(t,s)},p(a,c){c&1&&l!==(l=a[5].data+"")&&Q(s,l),c&1&&n!==(n=""+(D(a[5].type)+" svelte-16ca9vt"))&&_(e,"class",n)},d(a){a&&u(e)}}}function z(o){let e;function t(n,a){return n[5].type==="incoming"?X:W}let l=t(o),s=l(o);return{c(){s.c(),e=R()},l(n){s.l(n),e=R()},m(n,a){s.m(n,a),E(n,e,a)},p(n,a){l===(l=t(n))&&s?s.p(n,a):(s.d(1),s=l(n),s&&(s.c(),s.m(e.parentNode,e)))},d(n){s.d(n),n&&u(e)}}}function Y(o){let e,t,l,s,n,a,c,h,w,A,b=o[0],d=[];for(let i=0;i<b.length;i+=1)d[i]=z(F(o,b,i));return{c(){e=f("main"),t=f("div");for(let i=0;i<d.length;i+=1)d[i].c();l=P(),s=f("div"),n=f("input"),a=P(),c=f("div"),h=O("Send"),this.h()},l(i){e=p(i,"MAIN",{class:!0});var m=g(e);t=p(m,"DIV",{class:!0});var r=g(t);for(let I=0;I<d.length;I+=1)d[I].l(r);r.forEach(u),l=T(m),s=p(m,"DIV",{class:!0});var C=g(s);n=p(C,"INPUT",{type:!0,class:!0}),a=T(C),c=p(C,"DIV",{class:!0});var M=g(c);h=V(M,"Send"),M.forEach(u),C.forEach(u),m.forEach(u),this.h()},h(){_(t,"class","messages svelte-16ca9vt"),_(n,"type","text"),_(n,"class","svelte-16ca9vt"),_(c,"class","btn svelte-16ca9vt"),_(s,"class","input svelte-16ca9vt"),_(e,"class","svelte-16ca9vt")},m(i,m){E(i,e,m),v(e,t);for(let r=0;r<d.length;r+=1)d[r].m(t,null);v(e,l),v(e,s),v(s,n),j(n,o[1]),v(s,a),v(s,c),v(c,h),w||(A=[q(n,"input",o[4]),q(c,"click",o[2])],w=!0)},p(i,[m]){if(m&1){b=i[0];let r;for(r=0;r<b.length;r+=1){const C=F(i,b,r);d[r]?d[r].p(C,m):(d[r]=z(C),d[r].c(),d[r].m(t,null))}for(;r<d.length;r+=1)d[r].d(1);d.length=b.length}m&2&&n.value!==i[1]&&j(n,i[1])},i:y,o:y,d(i){i&&u(e),G(d,i),w=!1,H(A)}}}function Z(o,e,t){let{channel:l}=e,s=[],n="";L(()=>t(3,l.onmessage=({data:h})=>t(0,s=[...s,{type:"incoming",data:h}]),l));function a(){n&&(t(0,s=[...s,{type:"outgoing",data:n}]),l.send(n),t(1,n=""))}function c(){n=this.value,t(1,n)}return o.$$set=h=>{"channel"in h&&t(3,l=h.channel)},[s,n,a,l,c]}class le extends S{constructor(e){super();k(this,e,Z,Y,N,{channel:3})}}function x(o){let e;return{c(){e=f("video"),this.h()},l(t){e=p(t,"VIDEO",{}),g(e).forEach(u),this.h()},h(){e.autoplay=!0},m(t,l){E(t,e,l),o[2](e)},p:y,i:y,o:y,d(t){t&&u(e),o[2](null)}}}function $(o,e,t){let{type:l}=e,s;L(()=>{navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1}).then(a=>{t(0,s.srcObject=a,s),new J().decodeFromVideo(s).then(h=>{dispatchEvent(new CustomEvent("scan",{detail:{sdp:{sdp:h.data,type:l}}})),console.log(JSON.parse(h.data))})}).catch(a=>{console.error(a)})});function n(a){U[a?"unshift":"push"](()=>{s=a,t(0,s)})}return o.$$set=a=>{"type"in a&&t(1,l=a.type)},[s,l,n]}class oe extends S{constructor(e){super();k(this,e,$,x,N,{type:1})}}function ee(o){let e;return{c(){e=f("canvas"),this.h()},l(t){e=p(t,"CANVAS",{class:!0}),g(e).forEach(u),this.h()},h(){_(e,"class","svelte-ewlrv4")},m(t,l){E(t,e,l),o[2](e)},p:y,i:y,o:y,d(t){t&&u(e),o[2](null)}}}function te(o,e,t){let{data:l}=e,s;function n(a){U[a?"unshift":"push"](()=>{s=a,t(0,s)})}return o.$$set=a=>{"data"in a&&t(1,l=a.data)},o.$$.update=()=>{o.$$.dirty&3&&l&&(B.toCanvas(s,l,{margin:2,errorCorrectionLevel:"low"}),console.log(K.exports.compressToEncodedURIComponent(l)))},[s,l,n]}class ce extends S{constructor(e){super();k(this,e,te,ee,N,{data:1})}}const se={iceServers:[{urls:"stun:stun1.l.google.com:19302"}]};class ie{constructor(){this.localConnection=new RTCPeerConnection(se),this.channel=this.localConnection.createDataChannel("channel"),this.setup()}setup(){this.localConnection.onicecandidate=()=>{this.sdp=this.localConnection.localDescription.sdp},this.channel.onmessage=e=>{var t;return(t=this.onMessage)==null?void 0:t.call(this,e.data)},this.channel.onopen=()=>{var e;return(e=this.onOpen)==null?void 0:e.call(this)},this.channel.onclose=()=>{var e;return(e=this.onClose)==null?void 0:e.call(this)}}async generateOffer(e){return await this.localConnection.createOffer().then(t=>this.localConnection.setLocalDescription(t)),await this.delay(e),this.sdp}async generateAnswer(e){return await this.localConnection.createAnswer().then(t=>this.localConnection.setLocalDescription(t)),await this.delay(e),this.sdp}setRemoteDescription(e){this.localConnection.setRemoteDescription(e)}delay(e){return new Promise(t=>setTimeout(t,e))}}export{le as C,ce as Q,ie as R,oe as S};
