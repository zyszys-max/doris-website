"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[242892],{15680:(e,t,a)=>{a.d(t,{xA:()=>N,yg:()=>m});var n=a(296540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},N=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,N=o(e,["components","mdxType","originalType","parentName"]),p=u(a),y=l,m=p["".concat(s,".").concat(y)]||p[y]||c[y]||i;return a?n.createElement(m,r(r({ref:t},N),{},{components:a})):n.createElement(m,r({ref:t},N))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},484593:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(58168),l=(a(296540),a(15680));const i={title:"PARTITIONS",language:"zh-CN"},r=void 0,o={unversionedId:"sql-manual/sql-functions/table-valued-functions/partitions",id:"version-3.0/sql-manual/sql-functions/table-valued-functions/partitions",title:"PARTITIONS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/table-valued-functions/partitions.md",sourceDirName:"sql-manual/sql-functions/table-valued-functions",slug:"/sql-manual/sql-functions/table-valued-functions/partitions",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/partitions",draft:!1,tags:[],version:"3.0",frontMatter:{title:"PARTITIONS",language:"zh-CN"},sidebar:"docs",previous:{title:"MV_INFOS",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/mv-infos"},next:{title:"TASKS",permalink:"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/tasks"}},s={},u=[{value:"<code>partitions</code>",id:"partitions",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],N={toc:u},p="wrapper";function c(e){let{components:t,...a}=e;return(0,l.yg)(p,(0,n.A)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"partitions"},(0,l.yg)("inlineCode",{parentName:"h2"},"partitions")),(0,l.yg)("h3",{id:"name"},"Name"),(0,l.yg)("p",null,"partitions"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210\u5206\u533a\u4e34\u65f6\u8868\uff0c\u53ef\u4ee5\u67e5\u770b\u67d0\u4e2a TABLE \u7684\u5206\u533a\u5217\u8868\u3002"),(0,l.yg)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8e From \u5b50\u53e5\u4e2d\u3002"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},'partitions("catalog"="","database"="","table"="")')),(0,l.yg)("p",null,"partitions()\u8868\u7ed3\u6784\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> desc function partitions("catalog"="internal","database"="zd","table"="user");\n+--------------------------+---------+------+-------+---------+-------+\n| Field                    | Type    | Null | Key   | Default | Extra |\n+--------------------------+---------+------+-------+---------+-------+\n| PartitionId              | BIGINT  | No   | false | NULL    | NONE  |\n| PartitionName            | TEXT    | No   | false | NULL    | NONE  |\n| VisibleVersion           | BIGINT  | No   | false | NULL    | NONE  |\n| VisibleVersionTime       | TEXT    | No   | false | NULL    | NONE  |\n| State                    | TEXT    | No   | false | NULL    | NONE  |\n| PartitionKey             | TEXT    | No   | false | NULL    | NONE  |\n| Range                    | TEXT    | No   | false | NULL    | NONE  |\n| DistributionKey          | TEXT    | No   | false | NULL    | NONE  |\n| Buckets                  | INT     | No   | false | NULL    | NONE  |\n| ReplicationNum           | INT     | No   | false | NULL    | NONE  |\n| StorageMedium            | TEXT    | No   | false | NULL    | NONE  |\n| CooldownTime             | TEXT    | No   | false | NULL    | NONE  |\n| RemoteStoragePolicy      | TEXT    | No   | false | NULL    | NONE  |\n| LastConsistencyCheckTime | TEXT    | No   | false | NULL    | NONE  |\n| DataSize                 | TEXT    | No   | false | NULL    | NONE  |\n| IsInMemory               | BOOLEAN | No   | false | NULL    | NONE  |\n| ReplicaAllocation        | TEXT    | No   | false | NULL    | NONE  |\n| IsMutable                | BOOLEAN | No   | false | NULL    | NONE  |\n| SyncWithBaseTables       | BOOLEAN | No   | false | NULL    | NONE  |\n| UnsyncTables             | TEXT    | No   | false | NULL    | NONE  |\n+--------------------------+---------+------+-------+---------+-------+\n20 rows in set (0.02 sec)\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"PartitionId\uff1a\u5206\u533aid"),(0,l.yg)("li",{parentName:"ul"},"PartitionName\uff1a\u5206\u533a\u540d\u5b57"),(0,l.yg)("li",{parentName:"ul"},"VisibleVersion\uff1a\u5206\u533a\u7248\u672c"),(0,l.yg)("li",{parentName:"ul"},"VisibleVersionTime\uff1a\u5206\u533a\u7248\u672c\u63d0\u4ea4\u65f6\u95f4"),(0,l.yg)("li",{parentName:"ul"},"State\uff1a\u5206\u533a\u72b6\u6001"),(0,l.yg)("li",{parentName:"ul"},"PartitionKey\uff1a\u5206\u533akey"),(0,l.yg)("li",{parentName:"ul"},"Range\uff1a\u5206\u533a\u8303\u56f4"),(0,l.yg)("li",{parentName:"ul"},"DistributionKey\uff1a\u5206\u5e03key"),(0,l.yg)("li",{parentName:"ul"},"Buckets\uff1a\u5206\u6876\u6570\u91cf"),(0,l.yg)("li",{parentName:"ul"},"ReplicationNum\uff1a\u526f\u672c\u6570"),(0,l.yg)("li",{parentName:"ul"},"StorageMedium\uff1a\u5b58\u50a8\u4ecb\u8d28"),(0,l.yg)("li",{parentName:"ul"},"CooldownTime\uff1acooldown\u65f6\u95f4"),(0,l.yg)("li",{parentName:"ul"},"RemoteStoragePolicy\uff1a\u8fdc\u7a0b\u5b58\u50a8\u7b56\u7565"),(0,l.yg)("li",{parentName:"ul"},"LastConsistencyCheckTime\uff1a\u4e0a\u6b21\u4e00\u81f4\u6027\u68c0\u67e5\u65f6\u95f4"),(0,l.yg)("li",{parentName:"ul"},"DataSize\uff1a\u6570\u636e\u5927\u5c0f"),(0,l.yg)("li",{parentName:"ul"},"IsInMemory\uff1a\u662f\u5426\u5b58\u5728\u5185\u5b58"),(0,l.yg)("li",{parentName:"ul"},"ReplicaAllocation\uff1a\u5206\u5e03\u7b56\u7565"),(0,l.yg)("li",{parentName:"ul"},"IsMutable\uff1a\u662f\u5426\u53ef\u53d8"),(0,l.yg)("li",{parentName:"ul"},"SyncWithBaseTables\uff1a\u662f\u5426\u548c\u57fa\u8868\u6570\u636e\u540c\u6b65\uff08\u9488\u5bf9\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u5206\u533a\uff09"),(0,l.yg)("li",{parentName:"ul"},"UnsyncTables\uff1a\u548c\u54ea\u4e2a\u57fa\u8868\u6570\u636e\u4e0d\u540c\u6b65\uff08\u9488\u5bf9\u5f02\u6b65\u7269\u5316\u89c6\u56fe\u7684\u5206\u533a\uff09")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> desc function partitions("catalog"="hive","database"="zdtest","table"="com2");\n+-----------+------+------+-------+---------+-------+\n| Field     | Type | Null | Key   | Default | Extra |\n+-----------+------+------+-------+---------+-------+\n| Partition | TEXT | No   | false | NULL    | NONE  |\n+-----------+------+------+-------+---------+-------+\n1 row in set (0.11 sec)\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Partition\uff1a\u5206\u533a\u540d\u5b57")),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},"\u67e5\u770b internal CATALOG \u4e0b db1 \u7684 table1 \u7684\u5206\u533a\u5217\u8868")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from partitions("catalog"="internal","database"="db1","table"="table1");\n')),(0,l.yg)("ol",{start:2},(0,l.yg)("li",{parentName:"ol"},"\u67e5\u770b table1 \u4e0b\u7684\u5206\u533a\u540d\u79f0\u4e3a partition1 \u7684\u5206\u533a\u4fe1\u606f")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select * from partitions("catalog"="internal","database"="db1","table"="table1") where PartitionName = "partition1";\n')),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"\u67e5\u770b table1 \u4e0b\u7684\u5206\u533a\u540d\u79f0\u4e3a partition1 \u7684\u5206\u533a id")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> select PartitionId from partitions("catalog"="internal","database"="db1","table"="table1") where PartitionName = "partition1";\n')),(0,l.yg)("h3",{id:"keywords"},"Keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"partitions\n")))}c.isMDXComponent=!0}}]);