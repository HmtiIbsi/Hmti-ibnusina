(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{960:function(e,n,t){"use strict";t.r(n);var a=t(228),l=t(229),r=t(231),c=t(230),o=t(232),u=t(4),i=t.n(u),m=t(86),s=t(952),d=t(937),p=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:i.a.lazy(function(){return t.e(3).then(t.bind(null,955))})},{path:"/pengumuman",exact:!0,name:"Pengumuman",component:i.a.lazy(function(){return t.e(5).then(t.bind(null,956))})},{path:"/tentang",exact:!0,name:"Tentang",component:i.a.lazy(function(){return t.e(4).then(t.bind(null,957))})},{path:"/repository",exact:!0,name:"Repository",component:i.a.lazy(function(){return t.e(6).then(t.bind(null,958))})}],h=(i.a.lazy(function(){return t.e(9).then(t.bind(null,959))}),i.a.lazy(function(){return t.e(8).then(t.bind(null,953))})),f=i.a.lazy(function(){return t.e(11).then(t.bind(null,961))}),b=i.a.lazy(function(){return t.e(10).then(t.bind(null,954))}),y=function(e){function n(){var e,t;Object(a.a)(this,n);for(var l=arguments.length,o=new Array(l),u=0;u<l;u++)o[u]=arguments[u];return(t=Object(r.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(o)))).loading=function(){return i.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t}return Object(o.a)(n,e),Object(l.a)(n,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"app d-flex align-items-center"},i.a.createElement(d.b,{className:"size-body"},i.a.createElement(u.Suspense,{fallback:this.loading()},i.a.createElement(b,{onLogout:function(n){return e.signOut(n)}}))),i.a.createElement("div",{className:"app-body overflow-hidden size-body"},i.a.createElement("main",{className:"main"},i.a.createElement(s.a,{fluid:!0},i.a.createElement(u.Suspense,{fallback:this.loading()},i.a.createElement(m.d,null,p.map(function(e,n){return e.component?i.a.createElement(m.b,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return i.a.createElement(e.component,n)}}):null}),i.a.createElement(m.a,{from:"/",to:"/dashboard"})))))),i.a.createElement(d.a,{style:{width:"100%"}},i.a.createElement(u.Suspense,{fallback:this.loading()},i.a.createElement(h,null),i.a.createElement(f,null))))}}]),n}(u.Component);n.default=y}}]);
//# sourceMappingURL=12.1c2ad419.chunk.js.map