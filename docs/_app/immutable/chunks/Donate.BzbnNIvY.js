import{s as B,e as o,j as I,c,a as _,o as V,k as x,d as i,p as l,q as T,i as b,f as h,n as L,h as j,m as R,r as W,u as E}from"./scheduler.XjEPMia4.js";import{S as z,i as P}from"./index.DpBGi0iO.js";import{p as $}from"./stores.CNWsjC7B.js";function J(m){let e,a;return{c(){e=o("iframe"),this.h()},l(t){e=c(t,"IFRAME",{src:!0,style:!0,title:!0}),_(e).forEach(i),this.h()},h(){T(e.src,a="https://act.stand.earth/page/74842/donate/1")||l(e,"src",a),E(e,"width","100%"),E(e,"height","1450px"),l(e,"title","Make a donation")},m(t,r){b(t,e,r)},p:L,d(t){t&&i(e)}}}function K(m){let e,a;return{c(){e=o("iframe"),this.h()},l(t){e=c(t,"IFRAME",{src:!0,style:!0,title:!0}),_(e).forEach(i),this.h()},h(){T(e.src,a="https://act.stand.earth/page/74842/donate/1?transaction.donationAmt="+m[0])||l(e,"src",a),E(e,"width","100%"),E(e,"height","1450px"),l(e,"title","Make a donation")},m(t,r){b(t,e,r)},p(t,r){r&1&&!T(e.src,a="https://act.stand.earth/page/74842/donate/1?transaction.donationAmt="+t[0])&&l(e,"src",a)},d(t){t&&i(e)}}}function N(m){let e,a,t,r='<div class="wordmark col-4 col-sm-2 svelte-k1ny6l"><a href="https://stand.earth" aria-label="Stand.earth" target="_self" class="svelte-k1ny6l"><img src="/assets/fracking/stand_logo_black.png" alt="Stand.earth" class="svelte-k1ny6l"/></a></div> <div class="logo col-4 col-sm-8 svelte-k1ny6l"><a href="/" aria-label="The Fracking Truth" target="_self" class="svelte-k1ny6l"><img src="/assets/fracking/logo_frackingtruth.png" alt="Fracking Truth"/></a></div> <div class="wordmark-right col-4 col-sm-2 svelte-k1ny6l"><a href="https://dogwoodbc.ca" aria-label="Dogwood BC" target="_self"><img src="/assets/dogwood.png" alt="Dogwood BC" class="svelte-k1ny6l"/></a></div>',k,p,S='<div class="col-8 mx-auto"><h1 class="svelte-k1ny6l">Help stop gas industry misinformation</h1></div>',C,u,v,q='<p class="svelte-k1ny6l"><strong>Gas industry misinformation is getting in the way of climate action.</strong></p> <p class="svelte-k1ny6l">We’re doing everything we can to dispel myths and encourage climate-friendly policies at all levels of government – municipal, provincial, and federal.</p> <p class="svelte-k1ny6l">But we need your help. Gas companies and associations have a lot of money and power. It takes a lot to debunk their misinformation, counter their lobbying efforts, and lead campaigns for a transition to clean energy.</p> <p class="svelte-k1ny6l">With your help, we can do more to challenge industry lies and reach more people with accurate information. More awareness leads to more action.</p> <p class="svelte-k1ny6l">Together we can take on corporate gas giants and relegate them to the dustbin of history - where they belong.</p> <h2 class="svelte-k1ny6l">Give today to create a path to a clean, healthy, and livable future!</h2> <img src="/assets/fracking/cmo_bg.webp" alt="Monster Squad"/>',H,f,w,g,A;function F(s,d){return s[0]!=""?K:J}let M=F(m),n=M(m);return{c(){e=o("div"),a=o("div"),t=o("div"),t.innerHTML=r,k=I(),p=o("div"),p.innerHTML=S,C=I(),u=o("div"),v=o("div"),v.innerHTML=q,H=I(),f=o("div"),n.c(),w=I(),g=o("img"),this.h()},l(s){e=c(s,"DIV",{class:!0});var d=_(e);a=c(d,"DIV",{class:!0});var y=_(a);t=c(y,"DIV",{class:!0,"data-svelte-h":!0}),V(t)!=="svelte-4rmtlh"&&(t.innerHTML=r),k=x(y),p=c(y,"DIV",{class:!0,"data-svelte-h":!0}),V(p)!=="svelte-1tzidl3"&&(p.innerHTML=S),C=x(y),u=c(y,"DIV",{class:!0});var D=_(u);v=c(D,"DIV",{class:!0,"data-svelte-h":!0}),V(v)!=="svelte-ymo81j"&&(v.innerHTML=q),H=x(D),f=c(D,"DIV",{class:!0});var G=_(f);n.l(G),G.forEach(i),D.forEach(i),y.forEach(i),d.forEach(i),w=x(s),g=c(s,"IMG",{src:!0,alt:!0}),this.h()},h(){l(t,"class","top-header row svelte-k1ny6l"),l(p,"class","row heading svelte-k1ny6l"),l(v,"class","col-lg-7 col-md-7 col-sm-12 mx-auto"),l(f,"class","col-lg-5 col-md-5 col-sm-12 iframewrap svelte-k1ny6l"),l(u,"class","row form svelte-k1ny6l"),l(a,"class","container-xxl"),l(e,"class","action svelte-k1ny6l"),T(g.src,A="/assets/fracking/bubbles.png")||l(g,"src",A),l(g,"alt","bubbles")},m(s,d){b(s,e,d),h(e,a),h(a,t),h(a,k),h(a,p),h(a,C),h(a,u),h(u,v),h(u,H),h(u,f),n.m(f,null),b(s,w,d),b(s,g,d)},p(s,[d]){M===(M=F(s))&&n?n.p(s,d):(n.d(1),n=M(s),n&&(n.c(),n.m(f,null)))},i:L,o:L,d(s){s&&(i(e),i(w),i(g)),n.d()}}}function O(m,e,a){let t;j(m,$,k=>a(1,t=k)),R("copy");let r="";return W(()=>{a(0,r=t.url.searchParams.get("amount")||"")}),[r]}class Y extends z{constructor(e){super(),P(this,e,O,N,B,{})}}export{Y as D};
