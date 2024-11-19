"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[132003],{15680:(n,e,t)=>{t.d(e,{xA:()=>p,yg:()=>d});var r=t(296540);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),u=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=u(n.components);return r.createElement(s.Provider,{value:e},n.children)},c="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),c=u(t),y=a,d=c["".concat(s,".").concat(y)]||c[y]||m[y]||o;return t?r.createElement(d,i(i({ref:e},p),{},{components:t})):r.createElement(d,i({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[c]="string"==typeof n?n:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},348754:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(58168),a=(t(296540),t(15680));const o={title:"AUTO_PARTITION_NAME",language:"zh-CN"},i=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/auto-partition-name",id:"sql-manual/sql-functions/string-functions/auto-partition-name",title:"AUTO_PARTITION_NAME",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/auto-partition-name.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/auto-partition-name",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/auto-partition-name",draft:!1,tags:[],version:"current",frontMatter:{title:"AUTO_PARTITION_NAME",language:"zh-CN"},sidebar:"docs",previous:{title:"ASCII",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/ascii"},next:{title:"CRC32",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/crc32"}},s={},u=[{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],p={toc:u},c="wrapper";function m(n){let{components:e,...t}=n;return(0,a.yg)(c,(0,r.A)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR AUTO_PARTITION_NAME('RANGE', 'VARCHAR unit', DATETIME datetime)")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR AUTO_PARTITION_NAME('LIST', VARCHAR,...)")),(0,a.yg)("p",null,"\u9075\u5faa RANGE \u7684\u5206\u533a\u540d\u89c4\u5219\u5c06 datetime \u6309\u7167 unit \u751f\u6210\u5206\u533a\u540d"),(0,a.yg)("p",null,"\u9075\u5faa LIST \u7684\u5206\u533a\u540d\u89c4\u5219\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5206\u533a\u540d"),(0,a.yg)("p",null,"datetime \u53c2\u6570\u662f\u5408\u6cd5\u7684\u65e5\u671f\u8868\u8fbe\u5f0f\u3002"),(0,a.yg)("p",null,"unit \u53c2\u6570\u662f\u60a8\u5e0c\u671b\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u53ef\u9009\u7684\u503c\u5982\u4e0b\uff1a","[",(0,a.yg)("inlineCode",{parentName:"p"},"second"),",",(0,a.yg)("inlineCode",{parentName:"p"},"minute"),",",(0,a.yg)("inlineCode",{parentName:"p"},"hour"),",",(0,a.yg)("inlineCode",{parentName:"p"},"day"),",",(0,a.yg)("inlineCode",{parentName:"p"},"month"),",",(0,a.yg)("inlineCode",{parentName:"p"},"year"),"]","\u3002\n\u5982\u679c unit \u4e0d\u7b26\u5408\u4e0a\u8ff0\u53ef\u9009\u503c\uff0c\u7ed3\u679c\u5c06\u8fd4\u56de\u8bed\u6cd5\u9519\u8bef\u3002 "),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> select auto_partition_name('range', 'years', '123');\nERROR 1105 (HY000): errCode = 2, detailMessage = range auto_partition_name must accept year|month|day|hour|minute|second for 2nd argument\n\nmysql> select auto_partition_name('range', 'year', '2022-12-12 19:20:30');\n+---------------------------------------------------------------+\n| auto_partition_name('range', 'year', '2022-12-12 19:20:30')   |\n+---------------------------------------------------------------+\n| p20220101000000                                               |\n+---------------------------------------------------------------+\n\nmysql> select auto_partition_name('range', 'month', '2022-12-12 19:20:30');\n+---------------------------------------------------------------+\n| auto_partition_name('range', 'month', '2022-12-12 19:20:30')  |\n+---------------------------------------------------------------+\n| p20221201000000                                               |\n+---------------------------------------------------------------+\n\nmysql> select auto_partition_name('range', 'day', '2022-12-12 19:20:30');\n+---------------------------------------------------------------+\n| auto_partition_name('range', 'day', '2022-12-12 19:20:30')    |\n+---------------------------------------------------------------+\n| p20221212000000                                               |\n+---------------------------------------------------------------+\n\nmysql> select auto_partition_name('range', 'hour', '2022-12-12 19:20:30');\n+---------------------------------------------------------------+\n| auto_partition_name('range', 'hour', '2022-12-12 19:20:30')   |\n+---------------------------------------------------------------+\n| p20221212190000                                               |\n+---------------------------------------------------------------+\n\nmysql> select auto_partition_name('range', 'minute', '2022-12-12 19:20:30');\n+---------------------------------------------------------------+\n| auto_partition_name('range', 'minute', '2022-12-12 19:20:30') |\n+---------------------------------------------------------------+\n| p20221212192000                                               |\n+---------------------------------------------------------------+\n\nmysql> select auto_partition_name('range', 'second', '2022-12-12 19:20:30');\n+---------------------------------------------------------------+\n| auto_partition_name('range', 'second', '2022-12-12 19:20:30') |\n+---------------------------------------------------------------+\n| p20221212192030                                               |\n+---------------------------------------------------------------+\n\nmysql> select auto_partition_name('list', 'helloworld');\n+-------------------------------------------+\n| auto_partition_name('list', 'helloworld') |\n+-------------------------------------------+\n| phelloworld10                             |\n+-------------------------------------------+\n\nmysql> select auto_partition_name('list', 'hello', 'world');\n+-----------------------------------------------+\n| auto_partition_name('list', 'hello', 'world') |\n+-----------------------------------------------+\n| phello5world5                                 |\n+-----------------------------------------------+\n\nmysql> select auto_partition_name('list', \"\u4f60\u597d\");\n+------------------------------------+\n| auto_partition_name('list', \"\u4f60\u597d\") |\n+------------------------------------+\n| p4f60597d2                         |\n+------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"AUTO_PARTITION_NAME,AUTO,PARTITION,NAME\n")))}m.isMDXComponent=!0}}]);