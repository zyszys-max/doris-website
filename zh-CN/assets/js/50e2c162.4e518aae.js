"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[116441],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var i=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),u=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return i.createElement(o.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,y=c["".concat(o,".").concat(d)]||c[d]||p[d]||a;return t?i.createElement(y,l(l({ref:n},m),{},{components:t})):i.createElement(y,l({ref:n},m))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<a;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},537739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=t(58168),r=(t(296540),t(15680));const a={title:"UNIX_TIMESTAMP",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/date-time-functions/unix-timestamp",id:"version-3.0/sql-manual/sql-functions/date-time-functions/unix-timestamp",title:"UNIX_TIMESTAMP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/date-time-functions/unix-timestamp.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/unix-timestamp",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/unix-timestamp",draft:!1,tags:[],version:"3.0",frontMatter:{title:"UNIX_TIMESTAMP",language:"zh-CN"},sidebar:"docs",previous:{title:"FROM_UNIXTIME",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/from-unixtime"},next:{title:"UTC_TIMESTAMP",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/utc-timestamp"}},o={},u=[{value:"unix_timestamp",id:"unix_timestamp",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:u},c="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,i.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"unix_timestamp"},"unix_timestamp"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"INT UNIX_TIMESTAMP([DATETIME date[, STRING fmt]])")),(0,r.yg)("p",null,"\u5c06 Date \u6216\u8005 Datetime \u7c7b\u578b\u8f6c\u5316\u4e3a unix \u65f6\u95f4\u6233\u3002"),(0,r.yg)("p",null,"\u5982\u679c\u6ca1\u6709\u53c2\u6570\uff0c\u5219\u662f\u5c06\u5f53\u524d\u7684\u65f6\u95f4\u8f6c\u5316\u4e3a\u65f6\u95f4\u6233\u3002"),(0,r.yg)("p",null,"\u53c2\u6570\u9700\u8981\u662f Date \u6216\u8005 Datetime \u7c7b\u578b\u3002"),(0,r.yg)("p",null,"\u5bf9\u4e8e\u5728 1970-01-01 00:00:00 \u4e4b\u524d\u6216 2038-01-19 03:14:07 \u4e4b\u540e\u7684\u65f6\u95f4\uff0c\u8be5\u51fd\u6570\u5c06\u8fd4\u56de 0\u3002"),(0,r.yg)("p",null,"Format \u7684\u683c\u5f0f\u8bf7\u53c2\u9605 ",(0,r.yg)("inlineCode",{parentName:"p"},"date_format")," \u51fd\u6570\u7684\u683c\u5f0f\u8bf4\u660e\u3002"),(0,r.yg)("p",null,"\u8be5\u51fd\u6570\u53d7\u65f6\u533a\u5f71\u54cd\u3002"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select unix_timestamp();\n+------------------+\n| unix_timestamp() |\n+------------------+\n|       1558589570 |\n+------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30:19');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30:19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30-19', '%Y-%m-%d %H:%i-%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30-19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('2007-11-30 10:30%3A19', '%Y-%m-%d %H:%i%%3A%s');\n+---------------------------------------+\n| unix_timestamp('2007-11-30 10:30%3A19') |\n+---------------------------------------+\n|                            1196389819 |\n+---------------------------------------+\n\nmysql> select unix_timestamp('1969-01-01 00:00:00');\n+---------------------------------------+\n| unix_timestamp('1969-01-01 00:00:00') |\n+---------------------------------------+\n|                                     0 |\n+---------------------------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"UNIX_TIMESTAMP,UNIX,TIMESTAMP\n")))}p.isMDXComponent=!0}}]);