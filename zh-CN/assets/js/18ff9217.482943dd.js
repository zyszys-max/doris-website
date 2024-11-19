"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[59545],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,y=u["".concat(s,".").concat(m)]||u[m]||g[m]||i;return t?a.createElement(y,l(l({ref:n},c),{},{components:t})):a.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(58168),r=(t(296540),t(15680));const i={title:"\u4f18\u5316\u7d22\u5f15\u8bbe\u8ba1\u548c\u4f7f\u7528",language:"zh-CN"},l=void 0,o={unversionedId:"query-acceleration/tuning/tuning-plan/optimizing-table-index",id:"version-3.0/query-acceleration/tuning/tuning-plan/optimizing-table-index",title:"\u4f18\u5316\u7d22\u5f15\u8bbe\u8ba1\u548c\u4f7f\u7528",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/query-acceleration/tuning/tuning-plan/optimizing-table-index.md",sourceDirName:"query-acceleration/tuning/tuning-plan",slug:"/query-acceleration/tuning/tuning-plan/optimizing-table-index",permalink:"/zh-CN/docs/3.0/query-acceleration/tuning/tuning-plan/optimizing-table-index",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u4f18\u5316\u7d22\u5f15\u8bbe\u8ba1\u548c\u4f7f\u7528",language:"zh-CN"},sidebar:"docs",previous:{title:"\u4f18\u5316\u8868 Schema \u8bbe\u8ba1",permalink:"/zh-CN/docs/3.0/query-acceleration/tuning/tuning-plan/optimizing-table-schema"},next:{title:"\u4f7f\u7528 PrepareStatement \u52a0\u901f\u9ad8\u5e76\u53d1\u70b9\u67e5",permalink:"/zh-CN/docs/3.0/query-acceleration/tuning/tuning-plan/accelerating-point-query"}},s={},p=[{value:"\u6848\u4f8b 1\uff1a\u4f18\u5316 Key \u5217\u987a\u5e8f\u4ee5\u5229\u7528\u524d\u7f00\u7d22\u5f15\u52a0\u901f\u67e5\u8be2",id:"\u6848\u4f8b-1\u4f18\u5316-key-\u5217\u987a\u5e8f\u4ee5\u5229\u7528\u524d\u7f00\u7d22\u5f15\u52a0\u901f\u67e5\u8be2",level:2},{value:"\u6848\u4f8b 2\uff1a\u4f7f\u7528\u5012\u6392\u7d22\u5f15\u52a0\u901f\u67e5\u8be2",id:"\u6848\u4f8b-2\u4f7f\u7528\u5012\u6392\u7d22\u5f15\u52a0\u901f\u67e5\u8be2",level:2},{value:"\u6848\u4f8b 3: \u8c03\u6574\u5b57\u6bb5\u987a\u5e8f\u4ee5\u5229\u7528 ZoneMap \u7d22\u5f15\u8fc7\u6ee4\u6570\u636e",id:"\u6848\u4f8b-3-\u8c03\u6574\u5b57\u6bb5\u987a\u5e8f\u4ee5\u5229\u7528-zonemap-\u7d22\u5f15\u8fc7\u6ee4\u6570\u636e",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:p},u="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Doris \u76ee\u524d\u652f\u6301\u4e24\u7c7b\u7d22\u5f15\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5185\u7f6e\u7d22\u5f15\u3002\u5305\u62ec\u524d\u7f00\u7d22\u5f15\u548c ZoneMap \u7d22\u5f15\u7b49\uff1b")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4e8c\u7ea7\u7d22\u5f15\u3002\u5305\u62ec\u5012\u6392\u7d22\u5f15\u3001Bloomfilter \u7d22\u5f15\u3001N-Gram Bloomfilter \u7d22\u5f15\u548c Bitmap \u7d22\u5f15\u7b49"))),(0,r.yg)("p",null,"\u5728\u4e1a\u52a1\u4f18\u5316\u8fc7\u7a0b\u4e2d\uff0c\u5145\u5206\u5206\u6790\u4e1a\u52a1\u7279\u5f81\uff0c\u5e76\u6709\u6548\u5229\u7528\u7d22\u5f15\uff0c\u4f1a\u5927\u5927\u63d0\u5347\u67e5\u8be2\u548c\u5206\u6790\u7684\u6548\u679c\uff0c\u4ece\u800c\u8fbe\u5230\u6027\u80fd\u8c03\u4f18\u7684\u76ee\u7684\u3002"),(0,r.yg)("p",null,"\u5404\u7c7b\u7d22\u5f15\u7684\u8be6\u7ec6\u4ecb\u7ecd\u53ef\u4ee5\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"../../../table-design/index/index-overview"},"\u8868\u7d22\u5f15"),"\u7ae0\u8282\u8fdb\u884c\u4e86\u89e3\u3002\u672c\u7ae0\u5c06\u4ece\u5b9e\u9645\u6848\u4f8b\u7684\u89d2\u5ea6\u51fa\u53d1\uff0c\u5c55\u793a\u51e0\u79cd\u5178\u578b\u573a\u666f\u4e0b\u7684\u7d22\u5f15\u4f7f\u7528\u6280\u5de7\uff0c\u5e76\u603b\u7ed3\u4f18\u5316\u5efa\u8bae\uff0c\u4ee5\u4f9b\u4e1a\u52a1\u8c03\u4f18\u65f6\u53c2\u8003\u3002"),(0,r.yg)("h2",{id:"\u6848\u4f8b-1\u4f18\u5316-key-\u5217\u987a\u5e8f\u4ee5\u5229\u7528\u524d\u7f00\u7d22\u5f15\u52a0\u901f\u67e5\u8be2"},"\u6848\u4f8b 1\uff1a\u4f18\u5316 Key \u5217\u987a\u5e8f\u4ee5\u5229\u7528\u524d\u7f00\u7d22\u5f15\u52a0\u901f\u67e5\u8be2"),(0,r.yg)("p",null,"\u5728\u4f18\u5316\u8868 Schema \u8bbe\u8ba1\u4e2d\uff0c\u6211\u4eec\u5df2\u4ecb\u7ecd\u4e86\u5982\u4f55\u9009\u62e9\u5408\u9002\u7684\u5b57\u6bb5\u4f5c\u4e3a Key \u5b57\u6bb5\uff0c\u5e76\u5229\u7528 Doris \u7684 Key \u5217\u6392\u5e8f\u7279\u6027\u6765\u52a0\u901f\u67e5\u8be2\u3002\u672c\u6848\u4f8b\u5c06\u8fdb\u4e00\u6b65\u6269\u5c55\u8be5\u573a\u666f\u3002"),(0,r.yg)("p",null,"\u7531\u4e8e Doris \u5185\u7f6e\u4e86\u524d\u7f00\u7d22\u5f15\u529f\u80fd\uff0c\u5b83\u4f1a\u5728\u5efa\u8868\u65f6\u81ea\u52a8\u53d6\u8868 Key \u7684\u524d 36 \u5b57\u8282\u4f5c\u4e3a\u524d\u7f00\u7d22\u5f15\u3002\u5f53\u67e5\u8be2\u6761\u4ef6\u4e0e\u524d\u7f00\u7d22\u5f15\u7684\u524d\u7f00\u76f8\u5339\u914d\u65f6\uff0c\u53ef\u4ee5\u663e\u8457\u52a0\u5feb\u67e5\u8be2\u901f\u5ea6\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u8868\u5b9a\u4e49\u7684\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `t1` (\n  `c1` VARCHAR(10) NULL,\n  `c2` VARCHAR(10) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`c1`)\nDISTRIBUTED BY HASH(`c2`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,r.yg)("p",null,"\u76f8\u5e94\u7684\u4e1a\u52a1 SQL \u6a21\u5f0f\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select * from t1 where t1.c2 = '1';\nselect * from t1 where t1.c2 in ('1', '2', '3');\n")),(0,r.yg)("p",null,"\u5728\u4e0a\u8ff0 Schema \u5b9a\u4e49\u4e2d\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"c1"),"\u5728\u524d\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"c2"),"\u5728\u540e\u3002\u7136\u800c\uff0c\u67e5\u8be2\u5374\u662f\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"c2"),"\u5b57\u6bb5\u8fdb\u884c\u8fc7\u6ee4\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u65e0\u6cd5\u5229\u7528\u524d\u7f00\u7d22\u5f15\u7684\u52a0\u901f\u529f\u80fd\u3002\u4e3a\u4e86\u8fdb\u884c\u4f18\u5316\uff0c\u6211\u4eec\u53ef\u4ee5\u8c03\u6574",(0,r.yg)("inlineCode",{parentName:"p"},"c1"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"c2"),"\u5217\u7684\u5b9a\u4e49\u987a\u5e8f\uff0c\u5c06",(0,r.yg)("inlineCode",{parentName:"p"},"c2"),"\u5217\u7f6e\u4e8e\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u4f4d\u7f6e\uff0c\u4ece\u800c\u5229\u7528\u524d\u7f00\u7d22\u5f15\u7684\u52a0\u901f\u529f\u80fd\u3002"),(0,r.yg)("p",null,"\u8c03\u6574\u540e\u7684 Schema \u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `t1` (\n  `c2` VARCHAR(10) NULL,\n  `c1` VARCHAR(10) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`c2`)\nDISTRIBUTED BY HASH(`c1`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,r.yg)("admonition",{title:"\u4f18\u5316\u63d0\u793a",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u5728\u5b9a\u4e49 schema \u5217\u987a\u5e8f\u65f6\uff0c\u5e94\u53c2\u8003\u4e1a\u52a1\u67e5\u8be2\u8fc7\u6ee4\u4e2d\u7684\u9ad8\u9891\u9ad8\u4f18\u5217\uff0c\u4ee5\u4fbf\u5145\u5206\u5229\u7528 Doris \u7684\u524d\u7f00\u7d22\u5f15\u52a0\u901f\u529f\u80fd\u3002")),(0,r.yg)("h2",{id:"\u6848\u4f8b-2\u4f7f\u7528\u5012\u6392\u7d22\u5f15\u52a0\u901f\u67e5\u8be2"},"\u6848\u4f8b 2\uff1a\u4f7f\u7528\u5012\u6392\u7d22\u5f15\u52a0\u901f\u67e5\u8be2"),(0,r.yg)("p",null,"Doris \u652f\u6301\u5012\u6392\u7d22\u5f15\u4f5c\u4e3a\u4e8c\u7ea7\u7d22\u5f15\uff0c\u4ee5\u52a0\u901f\u7b49\u503c\u3001\u8303\u56f4\u53ca\u6587\u672c\u7c7b\u578b\u7684\u5168\u6587\u68c0\u7d22\u7b49\u4e1a\u52a1\u573a\u666f\u3002\u5012\u6392\u7d22\u5f15\u7684\u521b\u5efa\u548c\u7ba1\u7406\u662f\u72ec\u7acb\u7684\uff0c\u5b83\u80fd\u591f\u5728\u4e0d\u5f71\u54cd\u539f\u59cb\u8868 Schema \u548c\u65e0\u9700\u91cd\u65b0\u5bfc\u5165\u8868\u6570\u636e\u7684\u60c5\u51b5\u4e0b\uff0c\u4fbf\u6377\u5730\u8fdb\u884c\u4e1a\u52a1\u6027\u80fd\u4f18\u5316\u3002"),(0,r.yg)("p",null,"\u5173\u4e8e\u5178\u578b\u7684\u4f7f\u7528\u573a\u666f\u3001\u8bed\u6cd5\u53ca\u6848\u4f8b\uff0c\u53ef\u53c2\u8003\u8868\u7d22\u5f15 - \u5012\u6392\u7d22\u5f15\uff0c\u67e5\u770b\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u56e0\u6b64\u672c\u7ae0\u8282\u4e0d\u518d\u91cd\u590d\u9610\u8ff0\u3002"),(0,r.yg)("admonition",{title:"\u4f18\u5316\u5efa\u8bae",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u6587\u672c\u7c7b\u578b\u7684\u5168\u6587\u68c0\u7d22\uff0c\u4ee5\u53ca\u5b57\u7b26\u4e32\u3001\u6570\u503c\u3001\u65e5\u671f\u65f6\u95f4\u7c7b\u578b\u5b57\u6bb5\u4e0a\u7684\u7b49\u503c\u6216\u8303\u56f4\u67e5\u8be2\uff0c\u5747\u53ef\u5229\u7528\u5012\u6392\u7d22\u5f15\u6765\u52a0\u901f\u67e5\u8be2\u3002\u7279\u522b\u662f\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5982\u539f\u59cb\u8868\u7ed3\u6784\u548c Key \u5b9a\u4e49\u4e0d\u4fbf\u4f18\u5316\uff0c\u6216\u91cd\u65b0\u5bfc\u5165\u8868\u6570\u636e\u7684\u6210\u672c\u8f83\u9ad8\u65f6\uff0c\u5012\u6392\u7d22\u5f15\u63d0\u4f9b\u4e86\u4e00\u79cd\u7075\u6d3b\u7684\u52a0\u901f\u65b9\u6848\uff0c\u4ee5\u4f18\u5316\u4e1a\u52a1\u6267\u884c\u6027\u80fd\u3002")),(0,r.yg)("h2",{id:"\u6848\u4f8b-3-\u8c03\u6574\u5b57\u6bb5\u987a\u5e8f\u4ee5\u5229\u7528-zonemap-\u7d22\u5f15\u8fc7\u6ee4\u6570\u636e"},"\u6848\u4f8b 3: \u8c03\u6574\u5b57\u6bb5\u987a\u5e8f\u4ee5\u5229\u7528 ZoneMap \u7d22\u5f15\u8fc7\u6ee4\u6570\u636e"),(0,r.yg)("p",null,"ZoneMap \u7d22\u5f15\u662f\u4e00\u79cd\u5185\u7f6e\u7d22\u5f15\uff0c\u5b83\u5728\u5217\u5b58\u6570\u636e\u4e0a\u7ef4\u62a4\u4e86\u5982 Min/Max/Count \u7b49\u7edf\u8ba1\u4fe1\u606f\u3002\u5f53 Doris \u5bf9\u5b58\u50a8\u5c42\u8fdb\u884c\u6570\u636e\u626b\u63cf\u65f6\uff0c\u4f1a\u6839\u636e\u8fc7\u6ee4\u5b57\u6bb5\u7684 ZoneMap \u7edf\u8ba1\u4fe1\u606f\uff08\u5982 Min/Max\uff09\u5feb\u901f\u8fc7\u6ee4\u6389\u4e0d\u6ee1\u8db3\u8fc7\u6ee4\u6761\u4ef6\u7684\u6570\u636e\u5757\uff0c\u4ece\u800c\u6709\u6548\u51cf\u5c11\u626b\u8868\u91cf\u3002"),(0,r.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cZoneMap \u4f1a\u9009\u62e9 Schema \u7684\u7b2c\u4e00\u5217\u5efa\u7acb\u7d22\u5f15\u3002\u56e0\u6b64\uff0c\u901a\u8fc7\u5408\u7406\u8c03\u6574\u5b57\u6bb5\u987a\u5e8f\uff0c\u53ef\u4ee5\u5145\u5206\u5229\u7528\u8fd9\u4e00\u7279\u6027\u6765\u52a0\u901f\u5b58\u50a8\u5c42\u7684\u6570\u636e\u8fc7\u6ee4\u3002"),(0,r.yg)("p",null,"\u4ee5\u6807\u51c6\u6d4b\u8bd5\u96c6 TPC-DS \u4e2d\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"store_sales")," \u8868\u4e3a\u4f8b\uff0c\u5176\u539f\u59cb Schema \u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS store_sales (\n    ss_item_sk bigint not null,\n    ss_ticket_number bigint not null,\n    ss_sold_date_sk bigint,\n    ......\n    ss_net_paid_inc_tax decimalv3(7,2),\n    ss_net_profit decimalv3(7,2)\n)\nDUPLICATE KEY(ss_item_sk, ss_ticket_number)\nDISTRIBUTED BY HASH(ss_item_sk, ss_ticket_number) BUCKETS 32\nPROPERTIES (\n  "replication_num" = "1"\n);\n')),(0,r.yg)("p",null,"\u67e5\u8be2\u7247\u6bb5\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"select *\nfrom store_sales, date_dim dt\nwhere dt.d_date_sk = store_sales.ss_sold_date_sk\n      and ss_sold_date_sk between 2450816 and 2451000;\n")),(0,r.yg)("p",null,"\u4e3a\u4e86\u5229\u7528\u4e8b\u5b9e\u8868 ",(0,r.yg)("inlineCode",{parentName:"p"},"store_sales")," \u4e0a\u7684\u8303\u56f4\u8fc7\u6ee4\u6761\u4ef6\u8fdb\u884c\u5feb\u901f\u7684\u5b58\u50a8\u5c42\u8fc7\u6ee4\uff0c\u6211\u4eec\u53ef\u4ee5\u8003\u8651\u8c03\u6574\u5b57\u6bb5\u5b9a\u4e49\u987a\u5e8f\uff0c\u4ee5\u4fbf\u4f7f\u7528 ZoneMap \u7d22\u5f15\u3002\u7531\u4e8e ZoneMap \u9ed8\u8ba4\u5efa\u7acb\u5728\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u4e0a\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5c06\u8fc7\u6ee4\u5b57\u6bb5 ",(0,r.yg)("inlineCode",{parentName:"p"},"ss_sold_date_sk")," \u8c03\u6574\u81f3 Schema \u7684\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\u3002"),(0,r.yg)("p",null,"\u8c03\u6574\u540e\u7684 Schema \u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS store_sales (\n    ss_sold_date_sk bigint,\n    ss_item_sk bigint not null,\n    ss_ticket_number bigint not null,\n    ......\n    ss_net_paid_inc_tax decimalv3(7,2),\n    ss_net_profit decimalv3(7,2)\n)\nDUPLICATE KEY(ss_sold_date_sk, ss_item_sk, ss_ticket_number)\nDISTRIBUTED BY HASH(ss_sold_date_sk, ss_item_sk, ss_ticket_number) BUCKETS 32\nPROPERTIES (\n  "replication_num" = "1"\n);\n')),(0,r.yg)("admonition",{title:"\u4f18\u5316\u5efa\u8bae",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u5c06\u7b49\u503c\u6216\u8303\u56f4\u8fc7\u6ee4\u5b57\u6bb5\u8c03\u6574\u4e3a Schema \u7684\u7b2c\u4e00\u4e2a\u5217\uff0c\u4ee5\u4fbf\u5229\u7528 ZoneMap \u7d22\u5f15\u8fdb\u884c\u6570\u636e\u5757\u7ea7\u522b\u7684\u8fc7\u6ee4\u3002\u8fd9\u6837\u53ef\u4ee5\u52a0\u901f\u626b\u8868\u8fc7\u7a0b\uff0c\u4ece\u800c\u8fbe\u5230\u6027\u80fd\u8c03\u4f18\u7684\u76ee\u7684\u3002")),(0,r.yg)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.yg)("p",null,"\u5728 Schema \u8c03\u4f18\u4e2d\uff0c\u9664\u4e86\u8868\u7ea7 Schema \u4f18\u5316\u5916\uff0c\u7d22\u5f15\u4f18\u5316\u540c\u6837\u5360\u636e\u91cd\u8981\u5730\u4f4d\u3002Doris \u63d0\u4f9b\u4e86\u591a\u79cd\u7d22\u5f15\u7c7b\u578b\uff0c\u5305\u62ec\u524d\u7f00\u3001ZoneMap \u7b49\u5185\u7f6e\u7d22\u5f15\uff0c\u4ee5\u53ca\u5012\u6392\u7b49\u4e8c\u7ea7\u7d22\u5f15\uff0c\u8fd9\u4e9b\u7d22\u5f15\u4e3a\u6027\u80fd\u52a0\u901f\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u652f\u6301\u3002\u901a\u8fc7\u5408\u7406\u5229\u7528\u8fd9\u4e9b\u7d22\u5f15\uff0c\u6211\u4eec\u53ef\u4ee5\u663e\u8457\u63d0\u5347\u591a\u573a\u666f\u4e0b\u7684\u4e1a\u52a1\u67e5\u8be2\u548c\u5206\u6790\u901f\u5ea6\uff0c\u8fd9\u5bf9\u4e8e\u591a\u573a\u666f\u4e1a\u52a1\u67e5\u8be2\u548c\u5206\u6790\u5177\u6709\u91cd\u8981\u610f\u4e49\u3002"))}g.isMDXComponent=!0}}]);