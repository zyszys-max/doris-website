"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[818293],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),p=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(a.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),f=i,y=u["".concat(a,".").concat(f)]||u[f]||g[f]||l;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=f;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<l;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7386:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(58168),i=(t(296540),t(15680));const l={title:"REGEXP",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/regexp/regexp",id:"version-1.2/sql-manual/sql-functions/string-functions/regexp/regexp",title:"REGEXP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/string-functions/regexp/regexp.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/regexp/",draft:!1,tags:[],version:"1.2",frontMatter:{title:"REGEXP",language:"zh-CN"},sidebar:"docs",previous:{title:"not like",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/like/not_like"},next:{title:"REGEXP_EXTRACT",permalink:"/zh-CN/docs/1.2/sql-manual/sql-functions/string-functions/regexp/regexp_extract"}},a={},p=[{value:"regexp",id:"regexp",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"regexp"},"regexp"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BOOLEAN regexp(VARCHAR str, VARCHAR pattern)")),(0,i.yg)("p",null,"\u5bf9\u5b57\u7b26\u4e32 str \u8fdb\u884c\u6b63\u5219\u5339\u914d\uff0c\u5339\u914d\u4e0a\u7684\u5219\u8fd4\u56de true\uff0c\u6ca1\u5339\u914d\u4e0a\u5219\u8fd4\u56de false\u3002pattern \u4e3a\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,i.yg)("p",null,"\u5b57\u7b26\u96c6\u5339\u914d\u9700\u8981\u4f7f\u7528 Unicode \u6807\u51c6\u5b57\u7b26\u7c7b\u578b\u3002\u4f8b\u5982\uff0c\u5339\u914d\u4e2d\u6587\u8bf7\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"\\p{Han}"),"\u3002"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"--- \u67e5\u627e k1 \u5b57\u6bb5\u4e2d\u4ee5 'billie' \u4e3a\u5f00\u5934\u7684\u6240\u6709\u6570\u636e\nmysql > select k1 from test where k1 regexp '^billie';\n+--------------------+\n| k1                 |\n+--------------------+\n| billie eillish     |\n+--------------------+\n\n--- \u67e5\u627e k1 \u5b57\u6bb5\u4e2d\u4ee5 'ok' \u4e3a\u7ed3\u5c3e\u7684\u6240\u6709\u6570\u636e\uff1a\nmysql > select k1 from test where k1 regexp 'ok$';\n+----------+\n| k1       |\n+----------+\n| It's ok  |\n+----------+\n\nmysql> select regexp('\u8fd9\u662f\u4e00\u6bb5\u4e2d\u6587This is a passage in English 1234567', '\\\\p{Han}');\n+-----------------------------------------------------------------------------+\n| ('\u8fd9\u662f\u4e00\u6bb5\u4e2d\u6587This is a passage in English 1234567' regexp '\\p{Han}')       |\n+-----------------------------------------------------------------------------+\n|                                                                           1 |\n+-----------------------------------------------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"REGEXP\n")))}g.isMDXComponent=!0}}]);