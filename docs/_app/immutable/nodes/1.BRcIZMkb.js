import{s as h,e as d,t as m,c as g,a as v,b as p,d as f,i as b,f as c,g as u,n as _,h as $}from"../chunks/scheduler.XjEPMia4.js";import{S as x,i as E}from"../chunks/index.DpBGi0iO.js";import{p as S}from"../chunks/stores.CNWsjC7B.js";function q(n){let e,s=n[0].status+"",r,o,i=n[0].error.message+"",l;return{c(){e=d("h1"),r=m(s),o=m(": "),l=m(i)},l(a){e=g(a,"H1",{});var t=v(e);r=p(t,s),o=p(t,": "),l=p(t,i),t.forEach(f)},m(a,t){b(a,e,t),c(e,r),c(e,o),c(e,l)},p(a,[t]){t&1&&s!==(s=a[0].status+"")&&u(r,s),t&1&&i!==(i=a[0].error.message+"")&&u(l,i)},i:_,o:_,d(a){a&&f(e)}}}function y(n,e,s){let r;return $(n,S,o=>s(0,r=o)),[r]}class k extends x{constructor(e){super(),E(this,e,y,q,h,{})}}export{k as component};
