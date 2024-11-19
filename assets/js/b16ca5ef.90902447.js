"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[453670],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},755691:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(58168),o=(t(296540),t(15680));const a={title:"EXPLODE_NUMBERS_OUTER",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-functions/table-functions/explode-numbers-outer",id:"version-3.0/sql-manual/sql-functions/table-functions/explode-numbers-outer",title:"EXPLODE_NUMBERS_OUTER",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/table-functions/explode-numbers-outer.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/explode-numbers-outer",permalink:"/docs/3.0/sql-manual/sql-functions/table-functions/explode-numbers-outer",draft:!1,tags:[],version:"3.0",frontMatter:{title:"EXPLODE_NUMBERS_OUTER",language:"en"},sidebar:"docs",previous:{title:"EXPLODE_NUMBERS",permalink:"/docs/3.0/sql-manual/sql-functions/table-functions/explode-numbers"},next:{title:"S3",permalink:"/docs/3.0/sql-manual/sql-functions/table-valued-functions/s3"}},s={},u=[{value:"outer combinator",id:"outer-combinator",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"outer-combinator"},"outer combinator"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"explode_numbers(INT x)")),(0,o.yg)("p",null,"Adding the ",(0,o.yg)("inlineCode",{parentName:"p"},"_outer")," suffix after the function name of the table function changes the function behavior from ",(0,o.yg)("inlineCode",{parentName:"p"},"non-outer")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"outer"),", and adds a row of ",(0,o.yg)("inlineCode",{parentName:"p"},"Null")," data when the table function generates 0 rows of data."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select e1 from (select 1 k1) as t lateral view explode_numbers(0) tmp1 as e1;\nEmpty set\n\nmysql> select e1 from (select 1 k1) as t lateral view explode_numbers_outer(0) tmp1 as e1;\n+------+\n| e1   |\n+------+\n| NULL |\n+------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"outer\n")))}d.isMDXComponent=!0}}]);