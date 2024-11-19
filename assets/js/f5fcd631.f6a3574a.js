"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[48075],{15680:(e,r,t)=>{t.d(r,{xA:()=>m,yg:()=>d});var a=t(296540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),s=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=s(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(t),g=n,d=u["".concat(l,".").concat(g)]||u[g]||c[g]||o;return t?a.createElement(d,i(i({ref:r},m),{},{components:t})):a.createElement(d,i({ref:r},m))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},109971:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=t(58168),n=(t(296540),t(15680));const o={title:"Apache Doris version 2.0.9 has been released",description:"Thanks to our community users and developers, about 68 improvements and bug fixes have been made in Doris 2.0.9 version.",date:"2024-04-23",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.9.png"},i=void 0,p={permalink:"/blog/release-note-2.0.9",source:"@site/blog/release-note-2.0.9.md",title:"Apache Doris version 2.0.9 has been released",description:"Thanks to our community users and developers, about 68 improvements and bug fixes have been made in Doris 2.0.9 version.",date:"2024-04-23T00:00:00.000Z",formattedDate:"April 23, 2024",tags:[{label:"Release Notes",permalink:"/blog/tags/release-notes"}],hasTruncateMarker:!1,authors:[{name:"Apache Doris"}],frontMatter:{title:"Apache Doris version 2.0.9 has been released",description:"Thanks to our community users and developers, about 68 improvements and bug fixes have been made in Doris 2.0.9 version.",date:"2024-04-23",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.9.png"},prevItem:{title:"Cross-cluster replication for read-write separation: story of a grocery store brand",permalink:"/blog/cross-cluster-replication-for-read-write"},nextItem:{title:"Arrow Flight SQL for 10X faster data transfer",permalink:"/blog/arrow-flight-sql-in-apache-doris-for-10x-faster-data-transfer"}},l={authorsImageUrls:[void 0]},s=[{value:"1 Behavior changes",id:"1-behavior-changes",level:2},{value:"2 New features",id:"2-new-features",level:2},{value:"3 Improvements",id:"3-improvements",level:2}],m={toc:s},u="wrapper";function c(e){let{components:r,...t}=e;return(0,n.yg)(u,(0,a.A)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Thanks to our community users and developers, about 68 improvements and bug fixes have been made in Doris 2.0.9 version."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Quick Download")," : ",(0,n.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"https://doris.apache.org/download/"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"GitHub")," : ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/releases"},"https://github.com/apache/doris/releases")))),(0,n.yg)("h2",{id:"1-behavior-changes"},"1 Behavior changes"),(0,n.yg)("p",null,"NA"),(0,n.yg)("h2",{id:"2-new-features"},"2 New features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support predicate apprear both on key and value mv column")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support mv with ",(0,n.yg)("inlineCode",{parentName:"p"},"bitmap_union(bitmap_from_array())"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Add a FE config to force replicate allocation for OLAP tables in the cluster")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support date literal support timezone in new optimizer Nereids")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Support slop in fulltext search ",(0,n.yg)("inlineCode",{parentName:"p"},"match_phrase")," to specify word distence")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Show index id in ",(0,n.yg)("inlineCode",{parentName:"p"},"SHOW PROC INDEXES")))),(0,n.yg)("h2",{id:"3-improvements"},"3 Improvements"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Sdd a secondary argument in ",(0,n.yg)("inlineCode",{parentName:"p"},"first_value")," / ",(0,n.yg)("inlineCode",{parentName:"p"},"last_value")," to ignore NULL values")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"the offset params in ",(0,n.yg)("inlineCode",{parentName:"p"},"LEAD"),"/ ",(0,n.yg)("inlineCode",{parentName:"p"},"LAG")," function could use 0")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Adjust priority of materialized view match rule")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"TopN opt reads only limit number of records for better performance")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Add profile for delete_bitmap get_agg function")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Refine the Meta cache to get better performance")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Add FE config ",(0,n.yg)("inlineCode",{parentName:"p"},"autobucket_max_buckets")))),(0,n.yg)("p",null,"See the complete list of improvements and bug fixes on ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/compare/2.0.8...2.0.9"},"GitHub")," ."))}c.isMDXComponent=!0}}]);