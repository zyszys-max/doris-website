"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[887327],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>m});var a=t(296540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),s=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return a.createElement(o.Provider,{value:r},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(t),g=n,m=c["".concat(o,".").concat(g)]||c[g]||y[g]||l;return t?a.createElement(m,i(i({ref:r},u),{},{components:t})):a.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=g;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},969522:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=t(58168),n=(t(296540),t(15680));const l={title:"Release 2.0.14",language:"zh-CN"},i=void 0,p={unversionedId:"releasenotes/v2.0/release-2.0.14",id:"version-2.0/releasenotes/v2.0/release-2.0.14",title:"Release 2.0.14",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/releasenotes/v2.0/release-2.0.14.md",sourceDirName:"releasenotes/v2.0",slug:"/releasenotes/v2.0/release-2.0.14",permalink:"/zh-CN/docs/2.0/releasenotes/v2.0/release-2.0.14",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Release 2.0.14",language:"zh-CN"},sidebar:"releasenotes",previous:{title:"Release 2.0.15",permalink:"/zh-CN/docs/2.0/releasenotes/v2.0/release-2.0.15"},next:{title:"Release 2.0.13",permalink:"/zh-CN/docs/2.0/releasenotes/v2.0/release-2.0.13"}},o={},s=[{value:"1 \u65b0\u529f\u80fd",id:"1-\u65b0\u529f\u80fd",level:2},{value:"2 \u6539\u8fdb\u548c\u4f18\u5316",id:"2-\u6539\u8fdb\u548c\u4f18\u5316",level:2},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",level:2}],u={toc:s},c="wrapper";function y(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,a.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"\u4eb2\u7231\u7684\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\uff0cApache Doris 2.0.14 \u7248\u672c\u5df2\u4e8e 2024 \u5e74 8 \u6708 6 \u65e5\u6b63\u5f0f\u4e0e\u5927\u5bb6\u89c1\u9762\uff0c\u8be5\u7248\u672c\u63d0\u4ea4\u4e86 110 \u4e2a\u6539\u8fdb\u9879\u4ee5\u53ca\u95ee\u9898\u4fee\u590d\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u4e86\u7cfb\u7edf\u7684\u6027\u80fd\u53ca\u7a33\u5b9a\u6027\uff0c\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f53\u9a8c\u3002"),(0,n.yg)("h2",{id:"1-\u65b0\u529f\u80fd"},"1 \u65b0\u529f\u80fd"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u589e\u52a0\u83b7\u53d6\u6700\u8fd1\u4e00\u4e2a\u67e5\u8be2 Profile \u7684 REST \u63a5\u53e3 ",(0,n.yg)("inlineCode",{parentName:"li"},"curl http://user:password@127.0.0.1:8030/api/profile/text")," \u3002",(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/38268"},"#38268"))),(0,n.yg)("h2",{id:"2-\u6539\u8fdb\u548c\u4f18\u5316"},"2 \u6539\u8fdb\u548c\u4f18\u5316"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4f18\u5316 MOW \u8868\u5e26\u6709 Sequence \u5217\u7684\u4e3b\u952e\u70b9\u67e5\u6027\u80fd\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/38287"},"#38287"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u4f18\u5316\u5012\u6392\u7d22\u5f15\u5728\u67e5\u8be2\u6761\u4ef6\u5f88\u591a\u65f6\u7684\u6027\u80fd\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35346"},"#35346"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u521b\u5efa\u5e26\u5206\u8bcd\u7684\u5012\u6392\u7d22\u5f15\u65f6\uff0c\u81ea\u52a8\u5f00\u542f ",(0,n.yg)("inlineCode",{parentName:"p"},"support_phrase")," \u9009\u9879\u52a0\u901f ",(0,n.yg)("inlineCode",{parentName:"p"},"match_phrase")," \u7cfb\u5217\u77ed\u8bed\u67e5\u8be2\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/37949"},"#37949"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u652f\u6301\u7b80\u5316\u7684 SQL Hint\uff0c\u4f8b\u5982 ",(0,n.yg)("inlineCode",{parentName:"p"},"SELECT /*+ query_timeout(3000) */ * FROM t;"),"\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/37720"},"#37720"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u8bfb\u5bf9\u8c61\u5b58\u50a8\u9047\u5230 429 \u9519\u8bef\u65f6\u81ea\u52a8\u91cd\u8bd5\u63d0\u5347\u7a33\u5b9a\u6027\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/35396"},"#35396"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"LEFT SEMI / ANTI JOIN \u5728\u5339\u914d\u5230\u7b26\u5408\u7684\u6570\u636e\u884c\u65f6\uff0c\u7ec8\u6b62\u540e\u7eed\u7684\u5339\u914d\u6267\u884c\u63d0\u5347\u6027\u80fd\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/34703"},"#34703"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u907f\u514d\u975e\u6cd5\u6570\u636e\u8fd4\u56de MySQL \u7ed3\u679c\u65f6\u51fa\u53d1 coredump\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/28069"},"#28069"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u8f93\u51fa\u7c7b\u578b\u540d\u5b57\u65f6\u7edf\u4e00\u4f7f\u7528\u5c0f\u5199\uff0c\u4fdd\u6301\u8ddf MySQL \u517c\u5bb9\u5bf9 BI \u5de5\u5177\u66f4\u52a0\u53cb\u597d\u3002",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/38521"},"#38521")))),(0,n.yg)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,n.yg)("p",null,"@924060929\u3001@BiteTheDDDDt\u3001@ByteYue\u3001@CalvinKirs\u3001@GoGoWen\u3001@HappenLee\u3001@Jibing-Li\u3001@Lchangliang\u3001@LiBinfeng-01\u3001@Mryange\u3001@XieJiann\u3001@Yukang-Lian\u3001@Yulei-Yang\u3001@airborne12\u3001@amorynan\u3001@biohazard4321\u3001@cambyzju\u3001@csun5285\u3001@eldenmoon\u3001@englefly\u3001@freemandealer\u3001@hello-stephen\u3001@hubgeter\u3001@kaijchen\u3001@liaoxin01\u3001@luwei16\u3001@morningman\u3001@morrySnow\u3001@mymeiyi\u3001@qidaye\u3001@sollhui\u3001@starocean999\u3001@w41ter\u3001@wuwenchi\u3001@xiaokang\u3001@xy720\u3001@yujun777\u3001@zclllyybb\u3001@zddr\u3001@zhangstar333\u3001@zhiqiang-hhhh\u3001@zy-kkk\u3001@zzzxl1993"))}y.isMDXComponent=!0}}]);