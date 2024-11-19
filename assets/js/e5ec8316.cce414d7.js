"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[775311],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},659135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(58168),r=(n(296540),n(15680));const o={title:"System Action",language:"en"},i=void 0,s={unversionedId:"admin-manual/open-api/fe-http/system-action",id:"version-3.0/admin-manual/open-api/fe-http/system-action",title:"System Action",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/admin-manual/open-api/fe-http/system-action.md",sourceDirName:"admin-manual/open-api/fe-http",slug:"/admin-manual/open-api/fe-http/system-action",permalink:"/docs/3.0/admin-manual/open-api/fe-http/system-action",draft:!1,tags:[],version:"3.0",frontMatter:{title:"System Action",language:"en"},sidebar:"docs",previous:{title:"Session Action",permalink:"/docs/3.0/admin-manual/open-api/fe-http/session-action"},next:{title:"Colocate Meta Action",permalink:"/docs/3.0/admin-manual/open-api/fe-http/colocate-meta-action"}},p={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"system-action"},"System Action"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"GET /rest/v1/system\n")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"System Action is used for information about the Proc system built in Doris."),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"path")),(0,r.yg)("p",{parentName:"li"},"  Optional parameter, specify the path of proc"))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("p",null,"Take ",(0,r.yg)("inlineCode",{parentName:"p"},"/dbs/10003/10054/partitions/10053/10055")," as an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "href_columns": ["TabletId", "MetaUrl", "CompactionStatus"],\n        "column_names": ["TabletId", "ReplicaId", "BackendId", "SchemaHash", "Version", "VersionHash", "LstSuccessVersion", "LstSuccessVersionHash", "LstFailedVersion", "LstFailedVersionHash", "LstFailedTime", "DataSize", "RowCount", "State", "LstConsistencyCheckTime", "CheckVersion", "CheckVersionHash", "VersionCount", "PathHash", "MetaUrl", "CompactionStatus"],\n        "rows": [{\n            "SchemaHash": "1294206575",\n            "LstFailedTime": "\\\\N",\n            "LstFailedVersion": "-1",\n            "MetaUrl": "URL",\n            "__hrefPaths": ["http://192.168.100.100:8030/rest/v1/system?path=/dbs/10003/10054/partitions/10053/10055/10056", "http://192.168.100.100:8043/api/meta/header/10056", "http://192.168.100.100:8043/api/compaction/show?tablet_id=10056"],\n            "CheckVersionHash": "-1",\n            "ReplicaId": "10057",\n            "VersionHash": "4611804212003004639",\n            "LstConsistencyCheckTime": "\\\\N",\n            "LstSuccessVersionHash": "4611804212003004639",\n            "CheckVersion": "-1",\n            "Version": "6",\n            "VersionCount": "2",\n            "State": "NORMAL",\n            "BackendId": "10032",\n            "DataSize": "776",\n            "LstFailedVersionHash": "0",\n            "LstSuccessVersion": "6",\n            "CompactionStatus": "URL",\n            "TabletId": "10056",\n            "PathHash": "-3259732870068082628",\n            "RowCount": "21"\n        }]\n    },\n    "count": 1\n}\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"column_names")," in the data part is the header information, and ",(0,r.yg)("inlineCode",{parentName:"p"},"href_columns")," indicates which columns in the table are hyperlink columns. Each element in the ",(0,r.yg)("inlineCode",{parentName:"p"},"rows")," array represents a row. Among them, ",(0,r.yg)("inlineCode",{parentName:"p"},"__hrefPaths")," is not the table data, but the link URL of the hyperlink column, which corresponds to the column in ",(0,r.yg)("inlineCode",{parentName:"p"},"href_columns")," one by one."))}m.isMDXComponent=!0}}]);