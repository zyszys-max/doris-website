"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[26052],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>g});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),y=l,g=u["".concat(i,".").concat(y)]||u[y]||c[y]||r;return a?n.createElement(g,p(p({ref:t},m),{},{components:a})):n.createElement(g,p({ref:t},m))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:l,p[1]=o;for(var s=2;s<r;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},378359:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(58168),l=(a(296540),a(15680));const r={title:"BACKUP",language:"zh-CN"},p=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/BACKUP",id:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/BACKUP",title:"BACKUP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/BACKUP.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/BACKUP",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/BACKUP",draft:!1,tags:[],version:"current",frontMatter:{title:"BACKUP",language:"zh-CN"},sidebar:"docs",previous:{title:"DROP-REPOSITORY",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY"},next:{title:"CANCEL-BACKUP",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CANCEL-BACKUP"}},i={},s=[{value:"BACKUP",id:"backup",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,l.yg)(u,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"backup"},"BACKUP"),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"BACKUP"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5907\u4efd\u6307\u5b9a\u6570\u636e\u5e93\u4e0b\u7684\u6570\u636e\u3002\u8be5\u547d\u4ee4\u4e3a\u5f02\u6b65\u64cd\u4f5c\u3002"),(0,l.yg)("p",null,"\u4ec5 root \u6216 superuser \u7528\u6237\u53ef\u4ee5\u521b\u5efa\u4ed3\u5e93\u3002"),(0,l.yg)("p",null,"\u63d0\u4ea4\u6210\u529f\u540e\uff0c\u9700\u901a\u8fc7 SHOW BACKUP \u547d\u4ee4\u67e5\u770b\u8fdb\u5ea6\u3002\u4ec5\u652f\u6301\u5907\u4efd OLAP \u7c7b\u578b\u7684\u8868\u3002"),(0,l.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'BACKUP SNAPSHOT [db_name].{snapshot_name}\nTO `repository_name`\n[ON|EXCLUDE] (\n    `table_name` [PARTITION (`p1`, ...)],\n    ...\n)\nPROPERTIES ("key"="value", ...);\n')),(0,l.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u540c\u4e00\u6570\u636e\u5e93\u4e0b\u53ea\u80fd\u6709\u4e00\u4e2a\u6b63\u5728\u6267\u884c\u7684 BACKUP \u6216 RESTORE \u4efb\u52a1\u3002"),(0,l.yg)("li",{parentName:"ul"},"ON \u5b50\u53e5\u4e2d\u6807\u8bc6\u9700\u8981\u5907\u4efd\u7684\u8868\u548c\u5206\u533a\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u5206\u533a\uff0c\u5219\u9ed8\u8ba4\u5907\u4efd\u8be5\u8868\u7684\u6240\u6709\u5206\u533a"),(0,l.yg)("li",{parentName:"ul"},"EXCLUDE \u5b50\u53e5\u4e2d\u6807\u8bc6\u4e0d\u9700\u8981\u5907\u4efd\u7684\u8868\u548c\u5206\u533a\u3002\u5907\u4efd\u9664\u4e86\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a\u4e4b\u5916\u8fd9\u4e2a\u6570\u636e\u5e93\u4e2d\u6240\u6709\u8868\u7684\u6240\u6709\u5206\u533a\u6570\u636e\u3002"),(0,l.yg)("li",{parentName:"ul"},"PROPERTIES \u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u5c5e\u6027\uff1a",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},'"type" = "full"\uff1a\u8868\u793a\u8fd9\u662f\u4e00\u6b21\u5168\u91cf\u66f4\u65b0\uff08\u9ed8\u8ba4\uff09'),(0,l.yg)("li",{parentName:"ul"},'"timeout" = "3600"\uff1a\u4efb\u52a1\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a\u4e00\u5929\u3002\u5355\u4f4d\u79d2\u3002          ')))),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u5168\u91cf\u5907\u4efd example_db \u4e0b\u7684\u8868 example_tbl \u5230\u4ed3\u5e93 example_repo \u4e2d\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'BACKUP SNAPSHOT example_db.snapshot_label1\nTO example_repo\nON (example_tbl)\nPROPERTIES ("type" = "full");\n')),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u5168\u91cf\u5907\u4efd example_db \u4e0b\uff0c\u8868 example_tbl \u7684 p1, p2 \u5206\u533a\uff0c\u4ee5\u53ca\u8868 example_tbl2 \u5230\u4ed3\u5e93 example_repo \u4e2d\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"BACKUP SNAPSHOT example_db.snapshot_label2\nTO example_repo\nON \n(\n    example_tbl PARTITION (p1,p2),\n    example_tbl2\n);\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u5168\u91cf\u5907\u4efd example_db \u4e0b\u9664\u4e86\u8868 example_tbl \u7684\u5176\u4ed6\u6240\u6709\u8868\u5230\u4ed3\u5e93 example_repo \u4e2d\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"BACKUP SNAPSHOT example_db.snapshot_label3\nTO example_repo\nEXCLUDE (example_tbl);\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"\u5168\u91cf\u5907\u4efd example_db \u4e0b\u7684\u8868\u5230\u4ed3\u5e93 example_repo \u4e2d\uff1a")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"BACKUP SNAPSHOT example_db.snapshot_label3\nTO example_repo;\n")),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"BACKUP\n")),(0,l.yg)("h3",{id:"best-practice"},"Best Practice"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u4e0b\u53ea\u80fd\u8fdb\u884c\u4e00\u4e2a\u5907\u4efd\u64cd\u4f5c\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5907\u4efd\u64cd\u4f5c\u4f1a\u5907\u4efd\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u57fa\u7840\u8868\u53ca\u540c\u6b65\u7269\u5316\u89c6\u56fe",(0,l.yg)("a",{parentName:"p",href:"../../../../query-acceleration/materialized-view/sync-materialized-view"},"\u7269\u5316\u89c6\u56fe"),"\uff0c\u5e76\u4e14\u4ec5\u5907\u4efd\u4e00\u526f\u672c\uff0c",(0,l.yg)("a",{parentName:"p",href:"../../../../query-acceleration/materialized-view/async-materialized-view/overview"},"\u5f02\u6b65\u7269\u5316\u89c6\u56fe")," \u5f53\u524d\u672a\u652f\u6301\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5907\u4efd\u64cd\u4f5c\u7684\u6548\u7387"),(0,l.yg)("p",{parentName:"li"},"\u5907\u4efd\u64cd\u4f5c\u7684\u6548\u7387\u53d6\u51b3\u4e8e\u6570\u636e\u91cf\u3001Compute Node \u8282\u70b9\u6570\u91cf\u4ee5\u53ca\u6587\u4ef6\u6570\u91cf\u3002\u5907\u4efd\u6570\u636e\u5206\u7247\u6240\u5728\u7684\u6bcf\u4e2a Compute Node \u90fd\u4f1a\u53c2\u4e0e\u5907\u4efd\u64cd\u4f5c\u7684\u4e0a\u4f20\u9636\u6bb5\u3002\u8282\u70b9\u6570\u91cf\u8d8a\u591a\uff0c\u4e0a\u4f20\u7684\u6548\u7387\u8d8a\u9ad8\u3002"),(0,l.yg)("p",{parentName:"li"},"\u6587\u4ef6\u6570\u636e\u91cf\u53ea\u6d89\u53ca\u5230\u7684\u5206\u7247\u6570\uff0c\u4ee5\u53ca\u6bcf\u4e2a\u5206\u7247\u4e2d\u6587\u4ef6\u7684\u6570\u91cf\u3002\u5982\u679c\u5206\u7247\u975e\u5e38\u591a\uff0c\u6216\u8005\u5206\u7247\u5185\u7684\u5c0f\u6587\u4ef6\u8f83\u591a\uff0c\u90fd\u53ef\u80fd\u589e\u52a0\u5907\u4efd\u64cd\u4f5c\u7684\u65f6\u95f4\u3002"))))}c.isMDXComponent=!0}}]);