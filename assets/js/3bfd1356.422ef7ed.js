"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[814783],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>g});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,g=m["".concat(d,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},629357:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"Duplicate Key Model",language:"en"},o=void 0,i={unversionedId:"table-design/data-model/duplicate",id:"version-3.0/table-design/data-model/duplicate",title:"Duplicate Key Model",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/table-design/data-model/duplicate.md",sourceDirName:"table-design/data-model",slug:"/table-design/data-model/duplicate",permalink:"/docs/3.0/table-design/data-model/duplicate",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Duplicate Key Model",language:"en"},sidebar:"docs",previous:{title:"Model Overview",permalink:"/docs/3.0/table-design/data-model/overview"},next:{title:"Unique Key Model",permalink:"/docs/3.0/table-design/data-model/unique"}},d={},p=[{value:"<strong>Duplicate Model with Sort Columns </strong>",id:"duplicate-model-with-sort-columns-",level:2},{value:"<strong>Default Duplicate Model</strong>",id:"default-duplicate-model",level:2}],s={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In certain multidimensional analysis scenarios, it is necessary to retain all raw data records. For this requirement, the duplicated data model can be used. In the duplicated data model, the storage layer will preserve all written data. Even if two rows of data are identical, both will be retained. The Duplicate Key specified in the table creation statement is used to indicate the columns by which the data should be sorted, and it can be used to optimize common queries. It is recommended to choose the first 2-4 columns for the Duplicate Key."),(0,r.yg)("p",null,"For example, a table has the following data columns and requires the retention of all raw data records. There are two ways to create a duplicated data model table: by specifying sorting columns or by using the default duplicated data model."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"SortKey"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timstamp"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Log time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"type"),(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Log type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"error_code"),(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Error code")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Error_msg"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR (128)"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Error details")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"op_id"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Operator ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"op_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"Operation time")))),(0,r.yg)("h2",{id:"duplicate-model-with-sort-columns-"},(0,r.yg)("strong",{parentName:"h2"},"Duplicate Model with Sort Columns ")),(0,r.yg)("p",null,"In the table creation statement, the ",(0,r.yg)("inlineCode",{parentName:"p"},"Duplicate Key")," can be designated to indicate that data storage should be sorted according to these key columns. When choosing the ",(0,r.yg)("inlineCode",{parentName:"p"},"Duplicate Key"),", it is recommended to select the first 2-4 columns."),(0,r.yg)("p",null,"An example of a table creation statement is as follows, specifying sorting based on the ",(0,r.yg)("inlineCode",{parentName:"p"},"timestamp"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"type"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"error_code")," columns."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'CREATE TABLE IF NOT EXISTS example_tbl_duplicate\n(\n    `timestamp` DATETIME NOT NULL COMMENT "Log time",\n    `type` INT NOT NULL COMMENT "Log type",\n    `error_code` INT COMMENT "Error code",\n    `error_msg` VARCHAR(1024) COMMENT "Error detail message",\n    `op_id` BIGINT COMMENT "Operator ID",\n    `op_time` DATETIME COMMENT "Operation time"\n)\nDUPLICATE KEY(`timestamp`, `type`, `error_code`)\nDISTRIBUTED BY HASH(`type`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n\nMySQL> desc example_tbl_duplicate; \n+------------+---------------+------+-------+---------+-------+\n| Field      | Type          | Null | Key   | Default | Extra |\n+------------+---------------+------+-------+---------+-------+\n| timestamp  | datetime      | No   | true  | NULL    |       |\n| type       | int           | No   | true  | NULL    |       |\n| error_code | int           | Yes  | true  | NULL    |       |\n| error_msg  | varchar(1024) | Yes  | false | NULL    | NONE  |\n| op_id      | bigint        | Yes  | false | NULL    | NONE  |\n| op_time    | datetime      | Yes  | false | NULL    | NONE  |\n+------------+---------------+------+-------+---------+-------+\n')),(0,r.yg)("h2",{id:"default-duplicate-model"},(0,r.yg)("strong",{parentName:"h2"},"Default Duplicate Model")),(0,r.yg)("p",null,"When no data model (Unique, Aggregate, or Duplicate) is specified during table creation, a Duplicate model table is created by default, and the sort columns are automatically selected according to certain rules. For example, in the following table creation statement, if no data model is specified, a Duplicate model table will be established, and the system will automatically select the first three columns as the sort columns."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'CREATE TABLE IF NOT EXISTS example_tbl_by_default\n(\n    `timestamp` DATETIME NOT NULL COMMENT "Log time",\n    `type` INT NOT NULL COMMENT "Log type",\n    `error_code` INT COMMENT "Error code",\n    `error_msg` VARCHAR(1024) COMMENT "Error detail message",\n    `op_id` BIGINT COMMENT "Operator ID",\n    `op_time` DATETIME COMMENT "Operation time"\n)\nDISTRIBUTED BY HASH(`type`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n\nMySQL > desc example_tbl_by_default; \n+------------+---------------+------+-------+---------+-------+\n| Field      | Type          | Null | Key   | Default | Extra |\n+------------+---------------+------+-------+---------+-------+\n| timestamp  | datetime      | No   | true  | NULL    |       |\n| type       | int           | No   | true  | NULL    |       |\n| error_code | int           | Yes  | true  | NULL    |       |\n| error_msg  | varchar(1024) | Yes  | false | NULL    | NONE  |\n| op_id      | bigint        | Yes  | false | NULL    | NONE  |\n| op_time    | datetime      | Yes  | false | NULL    | NONE  |\n+------------+---------------+------+-------+---------+-------+\n')))}c.isMDXComponent=!0}}]);