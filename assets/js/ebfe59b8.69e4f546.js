"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[804853],{15680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>y});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),c=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?t.createElement(y,o(o({ref:n},s),{},{components:a})):t.createElement(y,o({ref:n},s))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},601698:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=a(58168),r=(a(296540),a(15680));const l={title:"Cancel Load Action",language:"en"},o=void 0,i={unversionedId:"admin-manual/open-api/fe-http/cancel-load-action",id:"admin-manual/open-api/fe-http/cancel-load-action",title:"Cancel Load Action",description:"\x3c!--",source:"@site/docs/admin-manual/open-api/fe-http/cancel-load-action.md",sourceDirName:"admin-manual/open-api/fe-http",slug:"/admin-manual/open-api/fe-http/cancel-load-action",permalink:"/docs/dev/admin-manual/open-api/fe-http/cancel-load-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Cancel Load Action",language:"en"},sidebar:"docs",previous:{title:"Bootstrap Action",permalink:"/docs/dev/admin-manual/open-api/fe-http/bootstrap-action"},next:{title:"Check Decommission Action",permalink:"/docs/dev/admin-manual/open-api/fe-http/check-decommission-action"}},p={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},u="wrapper";function d(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"cancel-load-action"},"Cancel Load Action"),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"POST /api/<db>/_cancel")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to cancel the load transaction of the specified label.\nRETURN VALUES\nReturn a JSON format string:\nStatus:\nSuccess: cancel succeed\nOthers: cancel failed\nMessage: Error message if cancel failed"),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db>")),(0,r.yg)("p",{parentName:"li"},"  Specify the database name"))),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<label>")),(0,r.yg)("p",{parentName:"li"},"  Specify the load label"))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"None"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Cancel success"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Cancel failed"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "Error msg...",\n    "code": 1,\n    "data": null,\n    "count": 0\n}\n')))),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Cancel the load transaction of the specified label"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'POST /api/example_db/_cancel?label=my_label1\n\nResponse:\n{\n    "msg": "OK",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')))))}d.isMDXComponent=!0}}]);