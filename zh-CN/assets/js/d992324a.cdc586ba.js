"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[623157],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(t),y=a,d=p["".concat(s,".").concat(y)]||p[y]||u[y]||i;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},733972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=t(58168),a=(t(296540),t(15680));const i={title:"\u6982\u8ff0",language:"zh-CN"},o=void 0,l={unversionedId:"admin-manual/system-tables/overview",id:"version-2.1/admin-manual/system-tables/overview",title:"\u6982\u8ff0",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/system-tables/overview.md",sourceDirName:"admin-manual/system-tables",slug:"/admin-manual/system-tables/overview",permalink:"/zh-CN/docs/admin-manual/system-tables/overview",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u6982\u8ff0",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7528\u6237\u914d\u7f6e\u9879",permalink:"/zh-CN/docs/admin-manual/config/user-property"},next:{title:"active_queries",permalink:"/zh-CN/docs/admin-manual/system-tables/information_schema/active_queries"}},s={},m=[{value:"information_schema",id:"information_schema",level:2},{value:"mysql",id:"mysql",level:2},{value:"__internal_schema",id:"__internal_schema",level:2}],c={toc:m},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Doris \u96c6\u7fa4\u5185\u7f6e\u591a\u4e2a\u7cfb\u7edf\u6570\u636e\u5e93\uff0c\u7528\u4e8e\u5b58\u50a8 Doris \u7cfb\u7edf\u672c\u8eab\u7684\u4e00\u4e9b\u5143\u6570\u636e\u4fe1\u606f\u3002"),(0,a.yg)("h2",{id:"information_schema"},"information_schema"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"information_schema")," \u5e93\u4e0b\u7684\u6240\u6709\u8868\u90fd\u662f\u865a\u62df\u8868\uff0c\u672c\u8eab\u5e76\u4e0d\u5b58\u5728\u7269\u7406\u5b9e\u4f53\u3002\u8fd9\u4e9b\u7cfb\u7edf\u8868\u5305\u542b\u4e86\u5173\u4e8e Doris \u96c6\u7fa4\u53ca\u5176\u6240\u6709\u6570\u636e\u5e93\u5bf9\u8c61\u7684\u5143\u6570\u636e\u3002\u8fd9\u4e9b\u5bf9\u8c61\u5305\u62ec\u6570\u636e\u5e93\u3001\u8868\u3001\u5217\u3001\u6743\u9650\u7b49\u3002\n\u4e5f\u5305\u542b\u5982 Workload Group\u3001Task \u7b49\u529f\u80fd\u72b6\u6001\u4fe1\u606f\u3002"),(0,a.yg)("p",null,"\u6bcf\u4e2a Catalog \u4e0b\u90fd\u5b58\u5728\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"information_schema")," \u5e93\u3002\u5176\u4e2d\u53ea\u5305\u542b\u5bf9\u5e94 Catalog \u4e0b\u7684\u5e93\u8868\u7684\u5143\u6570\u636e\u3002"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"information_schema")," \u5e93\u4e2d\u5f97\u6240\u6709\u8868\u90fd\u662f\u53ea\u8bfb\u72b6\u6001\uff0c\u7528\u6237\u65e0\u6cd5\u5728\u8fd9\u4e2a\u5e93\u4e2d\u4fee\u6539\u3001\u5220\u9664\u6216\u521b\u5efa\u8868\u3002"),(0,a.yg)("p",null,"\u6240\u6709\u7528\u6237\u9ed8\u8ba4\u5bf9\u8fd9\u4e2a\u5e93\u4e0b\u7684\u6240\u6709\u8868\u62e5\u6709\u8bfb\u6743\u9650\uff0c\u4f46\u53ef\u67e5\u8be2\u7684\u5185\u5bb9\u4f1a\u6839\u636e\u7528\u6237\u5b9e\u9645\u7684\u6743\u9650\u8303\u56f4\u800c\u4e0d\u540c\u3002\u6bd4\u5982\u7528\u6237 A \u53ea\u62e5\u6709 ",(0,a.yg)("inlineCode",{parentName:"p"},"db1.table1")," \u7684\u6743\u9650\u3002\u5219\u7528\u6237\u67e5\u8be2 ",(0,a.yg)("inlineCode",{parentName:"p"},"information_schema.tables")," \u8868\u65f6\uff0c\u53ea\u4f1a\u8fd4\u56de ",(0,a.yg)("inlineCode",{parentName:"p"},"db1.table1")," \u76f8\u5173\u7684\u4fe1\u606f\u3002"),(0,a.yg)("h2",{id:"mysql"},"mysql"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"mysql")," \u5e93\u4e0b\u7684\u6240\u6709\u8868\u90fd\u662f\u865a\u62df\u8868\uff0c\u672c\u8eab\u5e76\u4e0d\u5b58\u5728\u7269\u7406\u5b9e\u4f53\u3002\u8fd9\u4e9b\u7cfb\u7edf\u8868\u5305\u542b\u5982\u6743\u9650\u7b49\u4fe1\u606f\uff0c\u4e3b\u8981\u7528\u4e8e\u517c\u5bb9 MySQL \u751f\u6001\u3002"),(0,a.yg)("p",null,"\u6bcf\u4e2a Catalog \u4e0b\u90fd\u5b58\u5728\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"mysql")," \u5e93\u3002\u4f46\u5176\u4e2d\u7684\u8868\u7684\u5185\u5bb9\u5b8c\u5168\u4e00\u6837\u3002"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"mysql")," \u5e93\u4e2d\u5f97\u6240\u6709\u8868\u90fd\u662f\u53ea\u8bfb\u72b6\u6001\uff0c\u7528\u6237\u65e0\u6cd5\u5728\u8fd9\u4e2a\u5e93\u4e2d\u4fee\u6539\u3001\u5220\u9664\u6216\u521b\u5efa\u8868\u3002"),(0,a.yg)("h2",{id:"__internal_schema"},"__internal_schema"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"__internal_schema")," \u5e93\u4e0b\u7684\u6240\u6709\u8868\u90fd\u662f Doris \u7684\u5b9e\u4f53\u8868\uff0c\u5176\u5b58\u50a8\u65b9\u5f0f\u548c\u7528\u6237\u521b\u5efa\u7684\u6570\u636e\u8868\u65e0\u5f02\u3002\nDoris \u4f1a\u5728\u96c6\u7fa4\u521b\u5efa\u65f6\uff0c\u81ea\u52a8\u521b\u5efa\u8fd9\u4e2a\u5e93\u4e0b\u7684\u6240\u6709\u7cfb\u7edf\u8868\u3002"),(0,a.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u666e\u901a\u7528\u6237\u5bf9\u8fd9\u4e2a\u5e93\u4e0b\u7684\u8868\u62e5\u6709\u53ea\u8bfb\u6743\u9650\u3002\u4f46\u88ab\u6388\u6743\u540e\uff0c\u53ef\u4ee5\u5bf9\u8fd9\u4e2a\u5e93\u4e0b\u7684\u8868\u8fdb\u884c\u4fee\u6539\u3001\u5220\u9664\u6216\u521b\u5efa\u3002"))}u.isMDXComponent=!0}}]);