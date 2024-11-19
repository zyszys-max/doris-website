"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[492569],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>N});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,N=d["".concat(o,".").concat(u)]||d[u]||c[u]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},272876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"DROP-MATERIALIZED-VIEW",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW",id:"version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW",title:"DROP-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Drop",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW",draft:!1,tags:[],version:"3.0",frontMatter:{title:"DROP-MATERIALIZED-VIEW",language:"en"},sidebar:"docs",previous:{title:"DROP-INDEX",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-INDEX"},next:{title:"DROP-FUNCTION",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-FUNCTION"}},o={},p=[{value:"DROP-MATERIALIZED-VIEW",id:"drop-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"drop-materialized-view"},"DROP-MATERIALIZED-VIEW"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"DROP MATERIALIZED VIEW"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to drop a materialized view. Synchronous syntax"),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"DROP MATERIALIZED VIEW [IF EXISTS] mv_name ON table_name;\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"IF EXISTS:\nDo not throw an error if the materialized view does not exist. If this keyword is not declared, an error will be reported if the materialized view does not exist.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"mv_name:\nThe name of the materialized view to delete. Required.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"table_name:\nThe name of the table to which the materialized view to be deleted belongs. Required."))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"The table structure is"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> desc all_type_table all;\n+----------------+-------+----------+------+------ -+---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+----------------+-------+----------+------+------ -+---------+-------+\n| all_type_table | k1 | TINYINT | Yes | true | N/A | |\n| | k2 | SMALLINT | Yes | false | N/A | NONE |\n| | k3 | INT | Yes | false | N/A | NONE |\n| | k4 | BIGINT | Yes | false | N/A | NONE |\n| | k5 | LARGEINT | Yes | false | N/A | NONE |\n| | k6 | FLOAT | Yes | false | N/A | NONE |\n| | k7 | DOUBLE | Yes | false | N/A | NONE |\n| | | | | | | | |\n| k1_sumk2 | k1 | TINYINT | Yes | true | N/A | |\n| | k2 | SMALLINT | Yes | false | N/A | SUM |\n+----------------+-------+----------+------+------ -+---------+-------+\n")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Drop the materialized view named k1_sumk2 of the table all_type_table"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"drop materialized view k1_sumk2 on all_type_table;\n")),(0,r.yg)("p",{parentName:"li"},"The table structure after the materialized view is deleted"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"},"+----------------+-------+----------+------+------ -+---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+----------------+-------+----------+------+------ -+---------+-------+\n| all_type_table | k1 | TINYINT | Yes | true | N/A | |\n| | k2 | SMALLINT | Yes | false | N/A | NONE |\n| | k3 | INT | Yes | false | N/A | NONE |\n| | k4 | BIGINT | Yes | false | N/A | NONE |\n| | k5 | LARGEINT | Yes | false | N/A | NONE |\n| | k6 | FLOAT | Yes | false | N/A | NONE |\n| | k7 | DOUBLE | Yes | false | N/A | NONE |\n+----------------+-------+----------+------+------ -+---------+-------+\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Drop a non-existent materialized view in the table all_type_table"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"drop materialized view k1_k2 on all_type_table;\nERROR 1064 (HY000): errCode = 2, detailMessage = Materialized view [k1_k2] does not exist in table [all_type_table]\n")),(0,r.yg)("p",{parentName:"li"},"The delete request reports an error directly")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Delete the materialized view k1_k2 in the table all_type_table, if it does not exist, no error will be reported."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"drop materialized view if exists k1_k2 on all_type_table;\nQuery OK, 0 rows affected (0.00 sec)\n")),(0,r.yg)("p",{parentName:"li"}," If it exists, delete it, if it does not exist, no error is reported."))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"DROP, MATERIALIZED, VIEW\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);