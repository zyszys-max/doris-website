"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[7293],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(r),g=a,y=u["".concat(s,".").concat(g)]||u[g]||c[g]||i;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},874865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=r(58168),a=(r(296540),r(15680));const i={title:"user_privileges",language:"en"},l=void 0,o={unversionedId:"admin-manual/system-tables/information_schema/user_privileges",id:"version-3.0/admin-manual/system-tables/information_schema/user_privileges",title:"user_privileges",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/admin-manual/system-tables/information_schema/user_privileges.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/user_privileges",permalink:"/docs/3.0/admin-manual/system-tables/information_schema/user_privileges",draft:!1,tags:[],version:"3.0",frontMatter:{title:"user_privileges",language:"en"},sidebar:"docs",previous:{title:"triggers",permalink:"/docs/3.0/admin-manual/system-tables/information_schema/triggers"},next:{title:"views",permalink:"/docs/3.0/admin-manual/system-tables/information_schema/views"}},s={},m=[{value:"Overview",id:"overview",level:2},{value:"Database",id:"database",level:2},{value:"Table Information",id:"table-information",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,"View user authorization information."),(0,a.yg)("h2",{id:"database"},"Database"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,a.yg)("h2",{id:"table-information"},"Table Information"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Column Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"GRANTEE"),(0,a.yg)("td",{parentName:"tr",align:null},"varchar(81)"),(0,a.yg)("td",{parentName:"tr",align:null},"The user who is granted the privilege")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TABLE_CATALOG"),(0,a.yg)("td",{parentName:"tr",align:null},"varchar(512)"),(0,a.yg)("td",{parentName:"tr",align:null},"Always 'def'")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"PRIVILEGE_TYPE"),(0,a.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,a.yg)("td",{parentName:"tr",align:null},"Type of privilege")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"IS_GRANTABLE"),(0,a.yg)("td",{parentName:"tr",align:null},"varchar(3)"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether the privilege can be granted to others")))))}c.isMDXComponent=!0}}]);