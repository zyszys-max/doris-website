"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[364868],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(296540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(t),f=s,m=p["".concat(c,".").concat(f)]||p[f]||y[f]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:s,a[1]=l;for(var i=2;i<o;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},110524:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=t(58168),s=(t(296540),t(15680));const o={title:"JSON_KEYS",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/json-functions/json-keys",id:"sql-manual/sql-functions/json-functions/json-keys",title:"JSON_KEYS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/json-functions/json-keys.md",sourceDirName:"sql-manual/sql-functions/json-functions",slug:"/sql-manual/sql-functions/json-functions/json-keys",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-keys",draft:!1,tags:[],version:"current",frontMatter:{title:"JSON_KEYS",language:"zh-CN"},sidebar:"docs",previous:{title:"JSON_SET",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-set"},next:{title:"MURMUR_HASH3_32",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/hash-functions/murmur-hash3-32"}},c={},i=[{value:"Json_keys",id:"json_keys",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],u={toc:i},p="wrapper";function y(e){let{components:n,...t}=e;return(0,s.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"json_keys"},"Json_keys"),(0,s.yg)("h3",{id:"description"},"Description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"ARRAY<STRING> json_keys(JSON, [VARCHAR path])")),(0,s.yg)("p",null,"JSON_KEYS() \u51fd\u6570\u7528\u4e8e\u4ece JSON \u5bf9\u8c61\u7684\u9876\u7ea7\u503c\u4e2d\u8fd4\u56de\u952e\u3002\u8fd9\u4e9b\u952e\u4f5c\u4e3a\u6570\u7ec4\u8fd4\u56de\uff0c\u6216\u8005\u5982\u679c\u7ed9\u5b9a\u4e86\u8def\u5f84\u53c2\u6570\uff0c\u5219\u8fd4\u56de\u6240\u9009\u8def\u5f84\u7684\u9876\u7ea7\u952e\u3002\u60a8\u9700\u8981\u5c06 JSON \u6587\u6863\u4f5c\u4e3a\u51fd\u6570\u7684\u53c2\u6570\u63d0\u4f9b\u3002\u60a8\u8fd8\u53ef\u4ee5\uff08\u53ef\u9009\u5730\uff09\u63d0\u4f9b\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u4ee5\u6307\u5b9a JSON \u6587\u6863\u4e2d\u201c\u9876\u7ea7\u201d\u8def\u5f84\u4ece\u4f55\u5904\u5f00\u59cb\u3002\n\u5176\u4e2d\uff0cjson_doc \u662f JSON \u6587\u6863\uff0cpath \u662f\u4e00\u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u7528\u4e8e\u786e\u5b9a JSON \u6587\u6863\u4e2d\u201c\u9876\u7ea7\u201d\u8def\u5f84\u4ece\u4f55\u5904\u5f00\u59cb\u3002"),(0,s.yg)("blockquote",null,(0,s.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f:"),(0,s.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u6240\u9009\u5bf9\u8c61\u4e3a\u7a7a\uff0c\u5219\u7ed3\u679c\u6570\u7ec4\u4e3a\u7a7a\u3002\u5982\u679c\u9876\u7ea7\u503c\u5305\u542b\u5d4c\u5957\u7684\u5b50\u5bf9\u8c61\uff0c\u8fd4\u56de\u503c\u4e0d\u5305\u62ec\u8fd9\u4e9b\u5b50\u5bf9\u8c61\u7684\u952e\u3002")),(0,s.yg)("h3",{id:"example"},"Example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-sql"},'\nmysql> SELECT JSON_KEYS(\'{"a": 1, "b": {"c": 30}}\');\n+-----------------------------------------------------+\n| json_keys(cast(\'{"a": 1, "b": {"c": 30}}\' as JSON)) |\n+-----------------------------------------------------+\n| ["a", "b"]                                          |\n+-----------------------------------------------------+\n1 row in set (0.35 sec)\n\nmysql> SELECT JSON_KEYS(\'{"a": 1, "b": {"c": 30}}\', \'$.b\');\n+------------------------------------------------------------+\n| json_keys(cast(\'{"a": 1, "b": {"c": 30}}\' as JSON), \'$.b\') |\n+------------------------------------------------------------+\n| ["c"]                                                      |\n+------------------------------------------------------------+\n1 row in set (0.07 sec)\n\nmysql> SELECT JSON_KEYS(\'{}\');\n+-------------------------------+\n| json_keys(cast(\'{}\' as JSON)) |\n+-------------------------------+\n| []                            |\n+-------------------------------+\n1 row in set (0.07 sec)\n\nmysql> SELECT JSON_KEYS(\'[1,2]\');\n+----------------------------------+\n| json_keys(cast(\'[1,2]\' as JSON)) |\n+----------------------------------+\n| NULL                             |\n+----------------------------------+\n1 row in set (0.07 sec)\n\nmysql> SELECT JSON_KEYS(\'[]\');\n+-------------------------------+\n| json_keys(cast(\'[]\' as JSON)) |\n+-------------------------------+\n| NULL                          |\n+-------------------------------+\n1 row in set (0.07 sec)\n')),(0,s.yg)("h3",{id:"keywords"},"Keywords"),(0,s.yg)("p",null,"json,json_keys"))}y.isMDXComponent=!0}}]);