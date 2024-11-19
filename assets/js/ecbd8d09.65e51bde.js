"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[756368],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>p});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=l(t),y=a,p=f["".concat(d,".").concat(y)]||f[y]||u[y]||i;return t?r.createElement(p,s(s({ref:n},c),{},{components:t})):r.createElement(p,s({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=y;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[f]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},995418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(58168),a=(t(296540),t(15680));const i={title:"days_diff",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/days_diff",id:"version-1.2/sql-manual/sql-functions/date-time-functions/days_diff",title:"days_diff",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/date-time-functions/days_diff.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/days_diff",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/days_diff",draft:!1,tags:[],version:"1.2",frontMatter:{title:"days_diff",language:"en"},sidebar:"docs",previous:{title:"days_add",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/days_add"},next:{title:"days_sub",permalink:"/docs/1.2/sql-manual/sql-functions/date-time-functions/days_sub"}},d={},l=[{value:"days_diff",id:"days_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:l},f="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(f,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"days_diff"},"days_diff"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"INT days_diff(DATETIME enddate, DATETIME startdate)")),(0,a.yg)("p",null,'The difference between the start time and the end time is a few days, the date judgment is accurate to seconds and rounded down to an integer. This is different from date_diff function, which only provides accuracy up to days."'),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select days_diff('2020-12-25 22:00:00','2020-12-24 22:00:00');\n+---------------------------------------------------------+\n| days_diff('2020-12-25 22:00:00', '2020-12-24 22:00:00') |\n+---------------------------------------------------------+\n|                                                       1 |\n+---------------------------------------------------------+\n\nmysql> select days_diff('2020-12-25 22:00:00','2020-12-24 22:00:01');\n+---------------------------------------------------------+\n| days_diff('2020-12-24 22:00:01', '2020-12-25 22:00:00') |\n+---------------------------------------------------------+\n|                                                       0 |\n+---------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"days_diff\n")))}u.isMDXComponent=!0}}]);