"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[955703],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=m(n),g=i,u=s["".concat(p,".").concat(g)]||s[g]||c[g]||o;return n?r.createElement(u,a(a({ref:t},d),{},{components:n})):r.createElement(u,a({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},482068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(58168),i=(n(296540),n(15680));const o={title:"SSD \u548c HDD \u5c42\u7ea7\u5b58\u50a8",language:"zh-CN"},a=void 0,l={unversionedId:"table-design/tiered-storage/diff-disk-medium-migration",id:"table-design/tiered-storage/diff-disk-medium-migration",title:"SSD \u548c HDD \u5c42\u7ea7\u5b58\u50a8",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/table-design/tiered-storage/diff-disk-medium-migration.md",sourceDirName:"table-design/tiered-storage",slug:"/table-design/tiered-storage/diff-disk-medium-migration",permalink:"/zh-CN/docs/dev/table-design/tiered-storage/diff-disk-medium-migration",draft:!1,tags:[],version:"current",frontMatter:{title:"SSD \u548c HDD \u5c42\u7ea7\u5b58\u50a8",language:"zh-CN"},sidebar:"docs",previous:{title:"Schema \u53d8\u66f4",permalink:"/zh-CN/docs/dev/table-design/schema-change"},next:{title:"\u8fdc\u7a0b\u5b58\u50a8",permalink:"/zh-CN/docs/dev/table-design/tiered-storage/remote-storage"}},p={},m=[],d={toc:m},s="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(s,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"\u53ef\u4ee5\u914d\u7f6e\u52a8\u6001\u5206\u533a\u53c2\u6570\uff0c\u5728\u4e0d\u540c\u7684\u78c1\u76d8\u7c7b\u578b\u4e0a\u521b\u5efa\u52a8\u6001\u5206\u533a\uff0cDoris \u4f1a\u6839\u636e\u914d\u7f6e\u53c2\u6570\u5c06\u51b7\u6570\u636e\u4eceSSD\u8fc1\u79fb\u5230HDD\u3002\u8fd9\u6837\u7684\u505a\u6cd5\u5728\u964d\u4f4e\u6210\u672c\u7684\u540c\u65f6\uff0c\u4e5f\u63d0\u5347\u4e86Doris\u7684\u8bfb\u5199\u6027\u80fd\u3002"),(0,i.yg)("p",null,"\u52a8\u6001\u5206\u533a\u53c2\u6570\u53ef\u4ee5\u53c2\u8003",(0,i.yg)("a",{parentName:"p",href:"../../table-design/data-partitioning/dynamic-partitioning"},"\u6570\u636e\u5212\u5206-\u52a8\u6001\u5206\u533a")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"dynamic_partition.hot_partition_num")),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"  \u6ce8\u610f\uff0cdynamic_partition.storage_medium \u5fc5\u987b\u8bbe\u7f6e\u4e3aHDD\uff0c\u5426\u5219 hot_partition_num \u5c06\u4e0d\u4f1a\u751f\u6548")),(0,i.yg)("p",null,"  \u6307\u5b9a\u6700\u65b0\u7684\u591a\u5c11\u4e2a\u5206\u533a\u4e3a\u70ed\u5206\u533a\u3002\u5bf9\u4e8e\u70ed\u5206\u533a\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u5176 ",(0,i.yg)("inlineCode",{parentName:"p"},"storage_medium")," \u53c2\u6570\u4e3a SSD\uff0c\u5e76\u4e14\u8bbe\u7f6e ",(0,i.yg)("inlineCode",{parentName:"p"},"storage_cooldown_time"),"\u3002"),(0,i.yg)("p",null,"  \u6ce8\u610f\uff1a\u82e5\u5b58\u50a8\u8def\u5f84\u4e0b\u6ca1\u6709 SSD \u78c1\u76d8\u8def\u5f84\uff0c\u914d\u7f6e\u8be5\u53c2\u6570\u4f1a\u5bfc\u81f4\u52a8\u6001\u5206\u533a\u521b\u5efa\u5931\u8d25\u3002"),(0,i.yg)("p",null,"  ",(0,i.yg)("inlineCode",{parentName:"p"},"hot_partition_num")," \u8868\u793a\u5f53\u524d\u65f6\u95f4\u6240\u5728\u5206\u533a\u53ca\u4e4b\u524d\u7684 hot_partition_num - 1 \u4e2a\u5206\u533a\uff0c\u4ee5\u53ca\u6240\u6709\u672a\u6765\u7684\u5206\u533a\uff0c\u5c06\u88ab\u5b58\u50a8\u5728 SSD \u4ecb\u8d28\u4e0a\u3002"),(0,i.yg)("p",null,"  \u6211\u4eec\u4e3e\u4f8b\u8bf4\u660e\u3002\u5047\u8bbe\u4eca\u5929\u662f 2021-05-20\uff0c\u6309\u5929\u5206\u533a\uff0c\u52a8\u6001\u5206\u533a\u7684\u5c5e\u6027\u8bbe\u7f6e\u4e3a\uff1ahot_partition_num=2, end=3, start=-3\u3002\u5219\u7cfb\u7edf\u4f1a\u81ea\u52a8\u521b\u5efa\u4ee5\u4e0b\u5206\u533a\uff0c\u5e76\u4e14\u8bbe\u7f6e ",(0,i.yg)("inlineCode",{parentName:"p"},"storage_medium")," \u548c ",(0,i.yg)("inlineCode",{parentName:"p"},"storage_cooldown_time")," \u53c2\u6570\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Plain"},'p20210517\uff1a["2021-05-17", "2021-05-18") storage_medium=HDD storage_cooldown_time=9999-12-31 23:59:59\np20210518\uff1a["2021-05-18", "2021-05-19") storage_medium=HDD storage_cooldown_time=9999-12-31 23:59:59\np20210519\uff1a["2021-05-19", "2021-05-20") storage_medium=SSD storage_cooldown_time=2021-05-21 00:00:00\np20210520\uff1a["2021-05-20", "2021-05-21") storage_medium=SSD storage_cooldown_time=2021-05-22 00:00:00\np20210521\uff1a["2021-05-21", "2021-05-22") storage_medium=SSD storage_cooldown_time=2021-05-23 00:00:00\np20210522\uff1a["2021-05-22", "2021-05-23") storage_medium=SSD storage_cooldown_time=2021-05-24 00:00:00\np20210523\uff1a["2021-05-23", "2021-05-24") storage_medium=SSD storage_cooldown_time=2021-05-25 00:00:00\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"dynamic_partition.storage_medium"))),(0,i.yg)("p",null,"\u6307\u5b9a\u521b\u5efa\u7684\u52a8\u6001\u5206\u533a\u7684\u9ed8\u8ba4\u5b58\u50a8\u4ecb\u8d28\u3002\u9ed8\u8ba4\u662f HDD\uff0c\u53ef\u9009\u62e9 SSD\u3002"),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"  \u6ce8\u610f\uff0c\u5f53\u8bbe\u7f6e\u4e3a SSD \u65f6\uff0c",(0,i.yg)("inlineCode",{parentName:"p"},"hot_partition_num")," \u5c5e\u6027\u5c06\u4e0d\u518d\u751f\u6548\uff0c\u6240\u6709\u5206\u533a\u5c06\u9ed8\u8ba4\u4e3a SSD \u5b58\u50a8\u4ecb\u8d28\u5e76\u4e14\u51b7\u5374\u65f6\u95f4\u4e3a 9999-12-31 23:59:59\u3002")))}c.isMDXComponent=!0}}]);