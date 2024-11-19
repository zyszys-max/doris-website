"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[155035],{15680:(A,e,n)=>{n.d(e,{xA:()=>s,yg:()=>y});var t=n(296540);function r(A,e,n){return e in A?Object.defineProperty(A,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[e]=n,A}function a(A,e){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.push.apply(n,t)}return n}function l(A){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(A,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(n,e))}))}return A}function o(A,e){if(null==A)return{};var n,t,r=function(A,e){if(null==A)return{};var n,t,r={},a=Object.keys(A);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||(r[n]=A[n]);return r}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(r[n]=A[n])}return r}var i=t.createContext({}),p=function(A){var e=t.useContext(i),n=e;return A&&(n="function"==typeof A?A(e):l(l({},e),A)),n},s=function(A){var e=p(A.components);return t.createElement(i.Provider,{value:e},A.children)},u="mdxType",c={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},g=t.forwardRef((function(A,e){var n=A.components,r=A.mdxType,a=A.originalType,i=A.parentName,s=o(A,["components","mdxType","originalType","parentName"]),u=p(n),g=r,y=u["".concat(i,".").concat(g)]||u[g]||c[g]||a;return n?t.createElement(y,l(l({ref:e},s),{},{components:n})):t.createElement(y,l({ref:e},s))}));function y(A,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var a=n.length,l=new Array(a);l[0]=g;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=A,o[u]="string"==typeof A?A:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},895660:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var t=n(58168),r=(n(296540),n(15680));const a={title:"Table Query Plan Action",language:"zh-CN"},l=void 0,o={unversionedId:"admin-manual/fe/table-query-plan-action",id:"version-2.0/admin-manual/fe/table-query-plan-action",title:"Table Query Plan Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/fe/table-query-plan-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/table-query-plan-action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/table-query-plan-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Table Query Plan Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Statement Execution Action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/statement-execution-action"},next:{title:"Table Row Count Action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/table-row-count-action"}},i={},p=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:p},u="wrapper";function c(A){let{components:e,...n}=A;return(0,r.yg)(u,(0,t.A)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /api/<db>/<table>/_query_plan")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a SQL\uff0c\u7528\u4e8e\u83b7\u53d6\u8be5 SQL \u5bf9\u5e94\u7684\u67e5\u8be2\u8ba1\u5212\u3002"),(0,r.yg)("p",null,"\u8be5\u63a5\u53e3\u76ee\u524d\u7528\u4e8e Spark-Doris-Connector \u4e2d\uff0cSpark \u83b7\u53d6 Doris \u7684\u67e5\u8be2\u8ba1\u5212\u3002"),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u6570\u636e\u5e93\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<table>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u8868"))),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "sql": "select * from db1.tbl1;"\n}\n')),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "partitions": {\n            "10039": {\n                "routings": ["10.81.85.89:9062"],\n                "version": 2,\n                "versionHash": 982459448378619656,\n                "schemaHash": 1294206575\n            }\n        },\n        "opaqued_query_plan": "DAABDAACDwABDAAAAAEIAAEAAAAACAACAAAAAAgAAwAAAAAKAAT//////////w8ABQgAAAABAAAAAA8ABgIAAAABAAIACAAMABIIAAEAAAAADwACCwAAAAIAAAACazEAAAACazIPAAMIAAAAAgAAAAUAAAAFAgAEAQAAAA8ABAwAAAACDwABDAAAAAEIAAEAAAAQDAACDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABAAAAAAMAA8IAAEAAAAACAACAAAAAAAIABT/////CAAX/////wAADwABDAAAAAEIAAEAAAAQDAACDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABAAAAAAMAA8IAAEAAAABCAACAAAAAAAIABT/////CAAX/////wAADAAFCAABAAAABgwACAAADAAGCAABAAAAAA8AAgwAAAAAAAoABwAAAAAAAAAACgAIAAAAAAAAAAAADQACCgwAAAABAAAAAAAAJzcKAAEAAAAAAAAnNwoAAgAAAAAAAAACCgADDaJlqbrVdwgIAARNJAZvAAwAAw8AAQwAAAACCAABAAAAAAgAAgAAAAAMAAMPAAEMAAAAAQgAAQAAAAAMAAIIAAEAAAAFAAAACAAE/////wgABQAAAAQIAAYAAAAACAAHAAAAAAsACAAAAAJrMQgACQAAAAACAAoBAAgAAQAAAAEIAAIAAAAADAADDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABP////8IAAUAAAAICAAGAAAAAAgABwAAAAELAAgAAAACazIIAAkAAAABAgAKAQAPAAIMAAAAAQgAAQAAAAAIAAIAAAAMCAADAAAAAQoABAAAAAAAACc1CAAFAAAAAgAPAAMMAAAAAQoAAQAAAAAAACc1CAACAAAAAQgAAwAAAAIIAAQAAAAACwAHAAAABHRibDELAAgAAAAADAALCwABAAAABHRibDEAAAAMAAQKAAFfL5rpxl1I4goAArgs6f+h6eMxAAA=",\n        "status": 200\n    },\n    "count": 0\n}\n')),(0,r.yg)("p",null,"\u5176\u4e2d ",(0,r.yg)("inlineCode",{parentName:"p"},"opaqued_query_plan")," \u4e3a\u67e5\u8be2\u8ba1\u5212\u7684\u4e8c\u8fdb\u5236\u683c\u5f0f\u3002"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u83b7\u53d6\u6307\u5b9a sql \u7684\u67e5\u8be2\u8ba1\u5212"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'POST /api/db1/tbl1/_query_plan\n{\n    "sql": "select * from db1.tbl1;"\n}\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "partitions": {\n            "10039": {\n                "routings": ["192.168.1.1:9060"],\n                "version": 2,\n                "versionHash": 982459448378619656,\n                "schemaHash": 1294206575\n            }\n        },\n        "opaqued_query_plan": "DAABDAACDwABD...",\n        "status": 200\n    },\n    "count": 0\n}\n')))))}c.isMDXComponent=!0}}]);