"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[143579],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>g});var t=n(296540);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,g=m["".concat(s,".").concat(u)]||m[u]||y[u]||r;return n?t.createElement(g,l(l({ref:a},d),{},{components:n})):t.createElement(g,l({ref:a},d))}));function g(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},647733:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=n(58168),i=(n(296540),n(15680));const r={title:"Overview",language:"en"},l=void 0,o={unversionedId:"query-acceleration/materialized-view/async-materialized-view/overview",id:"version-3.0/query-acceleration/materialized-view/async-materialized-view/overview",title:"Overview",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/query-acceleration/materialized-view/async-materialized-view/overview.md",sourceDirName:"query-acceleration/materialized-view/async-materialized-view",slug:"/query-acceleration/materialized-view/async-materialized-view/overview",permalink:"/docs/3.0/query-acceleration/materialized-view/async-materialized-view/overview",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Overview",language:"en"},sidebar:"docs",previous:{title:"Sync-Materialized View",permalink:"/docs/3.0/query-acceleration/materialized-view/sync-materialized-view"},next:{title:"Functions and Demands",permalink:"/docs/3.0/query-acceleration/materialized-view/async-materialized-view/functions-and-demands"}},s={},p=[{value:"Create Async-Materialized View",id:"create-async-materialized-view",level:2},{value:"Manual Partition",id:"manual-partition",level:3},{value:"Auto Partition Based on the Base Table",id:"auto-partition-based-on-the-base-table",level:3},{value:"Refresh Async-Materialized View",id:"refresh-async-materialized-view",level:2},{value:"Manual Refresh",id:"manual-refresh",level:3},{value:"Scheduled Refresh",id:"scheduled-refresh",level:3},{value:"Auto Refresh",id:"auto-refresh",level:3},{value:"Transparent Rewrite",id:"transparent-rewrite",level:2},{value:"Flow Chart",id:"flow-chart",level:3},{value:"Transparent Rewrite Based on Structural Information",id:"transparent-rewrite-based-on-structural-information",level:3}],d={toc:p},m="wrapper";function y(e){let{components:a,...r}=e;return(0,i.yg)(m,(0,t.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"create-async-materialized-view"},"Create Async-Materialized View"),(0,i.yg)("p",null,"There are two ways to partition materialized views: manual partition and auto partition based on the base table."),(0,i.yg)("h3",{id:"manual-partition"},"Manual Partition"),(0,i.yg)("p",null,"When creating a materialized view without specifying partition information, the materialized view will default to creating a single partition where all data is stored."),(0,i.yg)("h3",{id:"auto-partition-based-on-the-base-table"},"Auto Partition Based on the Base Table"),(0,i.yg)("p",null,"Materialized views can be created through joins with multiple base tables and can choose to follow the partitioning of one of the base tables (it is recommended to choose the fact table)."),(0,i.yg)("p",null,"For example, the table creation statements for base tables ",(0,i.yg)("inlineCode",{parentName:"p"},"t1")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"t2")," are as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `t1` (  \n  `user_id` LARGEINT NOT NULL,  \n  `o_date` DATE NOT NULL,  \n  `num` SMALLINT NOT NULL  \n) ENGINE=OLAP  \nCOMMENT 'OLAP'  \nPARTITION BY RANGE(`o_date`)  \n(  \nPARTITION p20170101 VALUES [('2017-01-01'), ('2017-01-02')),  \nPARTITION p20170102 VALUES [('2017-01-02'), ('2017-01-03')),  \nPARTITION p20170201 VALUES [('2017-02-01'), ('2017-02-02'))  \n)  \nDISTRIBUTED BY HASH(`user_id`) BUCKETS 2  \nPROPERTIES ('replication_num' = '1');  \n  \nCREATE TABLE `t2` (  \n  `user_id` LARGEINT NOT NULL,  \n  `age` SMALLINT NOT NULL  \n) ENGINE=OLAP  \nPARTITION BY LIST(`age`)  \n(  \n    PARTITION `p1` VALUES IN ('1'),  \n    PARTITION `p2` VALUES IN ('2')  \n)  \nDISTRIBUTED BY HASH(`user_id`) BUCKETS 2  \nPROPERTIES ('replication_num' = '1');\n")),(0,i.yg)("p",null,"If the materialized view creation statement is as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1  \nBUILD DEFERRED REFRESH AUTO ON MANUAL  \npartition by(`order_date`)  \nDISTRIBUTED BY RANDOM BUCKETS 2  \nPROPERTIES (  \n'replication_num' = '1'  \n)  \nAS  \nSELECT t1.o_date as order_date, t1.user_id as user_id, t1.num, t2.age FROM t1 join t2 on t1.user_id=t2.user_id;\n")),(0,i.yg)("p",null,"Then the materialized view ",(0,i.yg)("inlineCode",{parentName:"p"},"mv1")," will have the same three partitions as ",(0,i.yg)("inlineCode",{parentName:"p"},"t1"),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"[('2017-01-01'), ('2017-01-02'))"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"[('2017-01-02'), ('2017-01-03'))"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"[('2017-02-01'), ('2017-02-02'))")))),(0,i.yg)("p",null,"If the materialized view creation statement is as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv2  \nBUILD DEFERRED REFRESH AUTO ON MANUAL  \npartition by(`age`)  \nDISTRIBUTED BY RANDOM BUCKETS 2  \nPROPERTIES (  \n'replication_num' = '1'  \n)  \nAS  \nSELECT t1.o_date as order_date, t1.user_id as user_id, t1.num, t2.age FROM t1 join t2 on t1.user_id=t2.user_id;\n")),(0,i.yg)("p",null,"Then the materialized view ",(0,i.yg)("inlineCode",{parentName:"p"},"mv2")," will have the same two partitions as ",(0,i.yg)("inlineCode",{parentName:"p"},"t2"),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"('1')"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"('2')")))),(0,i.yg)("p",null,"When creating materialized views that depend on base table partitions, different partition strategies need to be designed appropriately for different scenarios. Below are examples illustrating multi-column partitioning, partial partitioning, and partition roll-up."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"1. Base Table with Multi-Column Partitioning")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Supported since Doris 2.1.0")),(0,i.yg)("p",null,"Currently, only Hive external tables support multi-column partitioning. Hive external tables often have multi-level partitioning, for example, one level by date and another by region. The materialized view can choose one of the partitioning columns from Hive as its partitioning column."),(0,i.yg)("p",null,"For example, the Hive table creation statement is as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE hive1 (\n`k1` int)\nPARTITIONED BY (\n`year` int,\n`region` string)\nSTORED AS ORC;\n\nalter table hive1 add if not exists\npartition(year=2020,region="bj")\npartition(year=2020,region="sh")\npartition(year=2021,region="bj")\npartition(year=2021,region="sh")\npartition(year=2022,region="bj")\npartition(year=2022,region="sh")\n')),(0,i.yg)("p",null,"When the materialized view creation statement is as follows, the materialized view ",(0,i.yg)("inlineCode",{parentName:"p"},"mv_hive")," will have three partitions: ",(0,i.yg)("inlineCode",{parentName:"p"},"('2020'), ('2021'), ('2022')")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv_hive\nBUILD DEFERRED REFRESH AUTO ON MANUAL\npartition by(`year`)\nDISTRIBUTED BY RANDOM BUCKETS 2\nPROPERTIES ('replication_num' = '1')\nAS\nSELECT k1,year,region FROM hive1;\n")),(0,i.yg)("p",null,"When the materialized view creation statement is as follows, the materialized view ",(0,i.yg)("inlineCode",{parentName:"p"},"mv_hive2")," will have two partitions: ",(0,i.yg)("inlineCode",{parentName:"p"},"('bj'), ('sh')"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv_hive2\nBUILD DEFERRED REFRESH AUTO ON MANUAL\npartition by(`region`)\nDISTRIBUTED BY RANDOM BUCKETS 2\nPROPERTIES ('replication_num' = '1')\nAS\nSELECT k1,year,region FROM hive1;\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"2. Using Partial Base Table Partitioning")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Supported since Doris 2.1.1")),(0,i.yg)("p",null,'Some base tables have many partitions, but the materialized view only focuses on the "hot" data from a recent period. This feature can be used in such scenarios.'),(0,i.yg)("p",null,"The base table creation statement is as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE t1 (  \n    `k1` INT,  \n    `k2` DATE NOT NULL  \n) ENGINE=OLAP  \nDUPLICATE KEY(`k1`)  \nCOMMENT \'OLAP\'  \nPARTITION BY range(`k2`)  \n(  \nPARTITION p26 VALUES [("2024-03-26"),("2024-03-27")),  \nPARTITION p27 VALUES [("2024-03-27"),("2024-03-28")),  \nPARTITION p28 VALUES [("2024-03-28"),("2024-03-29"))  \n)  \nDISTRIBUTED BY HASH(`k1`) BUCKETS 2  \nPROPERTIES (  \n\'replication_num\' = \'1\'  \n);\n')),(0,i.yg)("p",null,"The materialized view creation statement, representing that the materialized view only focuses on the data from the last day, is as follows. If the current time is 2024-03-28 xx:xx:xx, the materialized view will only have one partition ",(0,i.yg)("inlineCode",{parentName:"p"},'[("2024-03-28"),("2024-03-29")]'),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1  \nBUILD DEFERRED REFRESH AUTO ON MANUAL  \npartition by(`k2`)  \nDISTRIBUTED BY RANDOM BUCKETS 2  \nPROPERTIES (  \n'replication_num' = '1',  \n'partition_sync_limit'='1',  \n'partition_sync_time_unit'='DAY'  \n)  \nAS  \nSELECT * FROM t1;\n")),(0,i.yg)("p",null,"If the time passes by another day, and the current time becomes ",(0,i.yg)("inlineCode",{parentName:"p"},"2024-03-29 xx:xx:xx"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"t1")," will add a new partition ",(0,i.yg)("inlineCode",{parentName:"p"},'[("2024-03-29"),("2024-03-30")]'),". If the materialized view is refreshed at this point, after the refresh, the materialized view will only have one partition ",(0,i.yg)("inlineCode",{parentName:"p"},'[("2024-03-29"),("2024-03-30")]'),"."),(0,i.yg)("p",null,"Additionally, if the partition field is of string type, you can set the materialized view property ",(0,i.yg)("inlineCode",{parentName:"p"},"partition_date_format"),", such as ",(0,i.yg)("inlineCode",{parentName:"p"},"%Y-%m-%d"),"."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"3. Partition Roll-Up")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Supported since Doris 2.1.5")),(0,i.yg)("p",null,"When the base table data is aggregated, the data volume in each partition may significantly decrease. In such cases, a partition roll-up strategy can be adopted to reduce the number of partitions in the materialized view."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"List Partitioning"),(0,i.yg)("p",{parentName:"li"},"  Note that partitions in Hive correspond to the list partitions in Doris."),(0,i.yg)("p",{parentName:"li"},"  Assuming the base table creation statement is as follows:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `t1` (  \n`k1` INT NOT NULL,  \n`k2` DATE NOT NULL  \n) ENGINE=OLAP  \nDUPLICATE KEY(`k1`)  \nCOMMENT 'OLAP'  \nPARTITION BY list(`k2`)  \n(  \nPARTITION p_20200101 VALUES IN (\"2020-01-01\"),  \nPARTITION p_20200102 VALUES IN (\"2020-01-02\"),  \nPARTITION p_20200201 VALUES IN (\"2020-02-01\")  \n)  \nDISTRIBUTED BY HASH(`k1`) BUCKETS 2  \nPROPERTIES ('replication_num' = '1');\n")),(0,i.yg)("p",{parentName:"li"},"  If the materialized view creation statement is as follows, the materialized view will have two partitions: ",(0,i.yg)("inlineCode",{parentName:"p"},'("2020-01-01","2020-01-02")')," and ",(0,i.yg)("inlineCode",{parentName:"p"},'("2020-02-01")')),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1  \n    BUILD DEFERRED REFRESH AUTO ON MANUAL  \n    partition by (date_trunc(`k2`,'month'))  \n    DISTRIBUTED BY RANDOM BUCKETS 2  \n    PROPERTIES (  \n    'replication_num' = '1'  \n    )  \n    AS  \n    SELECT * FROM t1;\n")),(0,i.yg)("p",{parentName:"li"},"  If the materialized view creation statement is as follows, the materialized view will have only one partition: ",(0,i.yg)("inlineCode",{parentName:"p"},'("2020-01-01","2020-01-02","2020-02-01")')),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1  \n    BUILD DEFERRED REFRESH AUTO ON MANUAL  \n    partition by (date_trunc(`k2`,'year'))  \n    DISTRIBUTED BY RANDOM BUCKETS 2  \n    PROPERTIES (  \n    'replication_num' = '1'  \n    )  \n    AS  \n    SELECT * FROM t1;\n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Range Partitioning"),(0,i.yg)("p",{parentName:"li"},"  Assuming the base table creation statement is as follows:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `t1` (  \n`k1` LARGEINT NOT NULL,  \n`k2` DATE NOT NULL  \n) ENGINE=OLAP  \nDUPLICATE KEY(`k1`)  \nCOMMENT \'OLAP\'  \nPARTITION BY range(`k2`)  \n(  \nPARTITION p_20200101 VALUES [("2020-01-01"),("2020-01-02")),  \nPARTITION p_20200102 VALUES [("2020-01-02"),("2020-01-03")),  \nPARTITION p_20200201 VALUES [("2020-02-01"),("2020-02-02"))  \n)  \nDISTRIBUTED BY HASH(`k1`) BUCKETS 2  \nPROPERTIES (\'replication_num\' = \'1\');\n')),(0,i.yg)("p",{parentName:"li"},"  If the materialized view creation statement is as follows, the materialized view will have two partitions: ",(0,i.yg)("inlineCode",{parentName:"p"},'[("2020-01-01","2020-02-01")]')," and ",(0,i.yg)("inlineCode",{parentName:"p"},'[("2020-02-01","2020-03-01")]')),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1  \n    BUILD DEFERRED REFRESH AUTO ON MANUAL  \n    partition by (date_trunc(`k2`,'month'))  \n    DISTRIBUTED BY RANDOM BUCKETS 2  \n    PROPERTIES (  \n    'replication_num' = '1'  \n    )  \n    AS  \n    SELECT * FROM t1;\n")),(0,i.yg)("p",{parentName:"li"},"  If the materialized view creation statement is as follows, the materialized view will have only one partition: ",(0,i.yg)("inlineCode",{parentName:"p"},'[("2020-01-01","2021-01-01")]')),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1  \n    BUILD DEFERRED REFRESH AUTO ON MANUAL  \n    partition by (date_trunc(`k2`,'year'))  \n    DISTRIBUTED BY RANDOM BUCKETS 2  \n    PROPERTIES (  \n    'replication_num' = '1'  \n    )  \n    AS  \n    SELECT * FROM t1;\n")),(0,i.yg)("p",{parentName:"li"},"  Additionally, if the partition field is of string type, you can specify the date format by setting the ",(0,i.yg)("inlineCode",{parentName:"p"},"partition_date_format")," property of the materialized view, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"'%Y-%m-%d'"),"."))),(0,i.yg)("h2",{id:"refresh-async-materialized-view"},"Refresh Async-Materialized View"),(0,i.yg)("p",null,"Materialized views are refreshed on a per-partition basis. If no specific partition is designated for the materialized view, its default partition will be refreshed during each refresh operation, effectively refreshing all data within the materialized view."),(0,i.yg)("p",null,"There are three trigger mechanisms for refreshing materialized views:"),(0,i.yg)("h3",{id:"manual-refresh"},"Manual Refresh"),(0,i.yg)("p",null,"Users can trigger the refresh of materialized views through SQL statements. Currently, there are three strategies:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Refresh without concern for specific partitions, requiring that the data in the materialized view synchronizes with the base table upon completion."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW mvName AUTO;\n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Refresh all partitions of the materialized view, regardless of its current data."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW mvName COMPLETE;\n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Refresh only specified partitions of the materialized view, regardless of its current data."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"REFRESH MATERIALIZED VIEW mvName partitions(partitionName1,partitionName2);\n")))),(0,i.yg)("p",null,"::: tip\n",(0,i.yg)("inlineCode",{parentName:"p"},"partitionName")," can be retrieved through ",(0,i.yg)("inlineCode",{parentName:"p"},"SHOW PARTITIONS FROM mvName"),".\n:::"),(0,i.yg)("h3",{id:"scheduled-refresh"},"Scheduled Refresh"),(0,i.yg)("p",null,"The interval for refreshing data can be specified through the materialized view creation statement."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If the materialized view creation statement is as follows, requiring a full refresh (",(0,i.yg)("inlineCode",{parentName:"p"},"REFRESH COMPLETE"),"), the materialized view will refresh every 10 hours, refreshing all partitions."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1  \nREFRESH COMPLETE ON SCHEDULE EVERY 10 HOUR  \nPARTITION BY(`xxx`)  \nAS  \nSELECT ...;\n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If the materialized view creation statement is as follows, requiring automatic calculation of partitions to refresh (",(0,i.yg)("inlineCode",{parentName:"p"},"REFRESH AUTO"),"), the materialized view will refresh every 10 hours (since version 2.1.3, it can automatically calculate partitions to refresh for Hive)."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1  \nREFRESH AUTO ON SCHEDULE EVERY 10 HOUR  \nPARTITION BY(`xxx`)  \nAS  \nSELECT ...;\n")))),(0,i.yg)("h3",{id:"auto-refresh"},"Auto Refresh"),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Supported since Apache Doris version 2.1.4.")),(0,i.yg)("p",null,"After data in the base table changes, the related materialized views are automatically triggered for refresh, with the same partition scope as scheduled triggers."),(0,i.yg)("p",null,"If the materialized view creation statement is as follows, when data in ",(0,i.yg)("inlineCode",{parentName:"p"},"t1")," changes, it will automatically trigger the refresh of the materialized view."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW mv1  \nREFRESH ON COMMIT  \nPARTITION BY(`xxx`)  \nAS  \nSELECT ... FROM t1;\n")),(0,i.yg)("h2",{id:"transparent-rewrite"},"Transparent Rewrite"),(0,i.yg)("p",null,"Doris's async-materialized views employ an algorithm based on SPJG (SELECT-PROJECT-JOIN-GROUP-BY) pattern structural information for transparent rewrite. Doris can analyze the structural information of query SQL, automatically search for materialized views that meet the requirements, and attempt transparent rewrite, using the optimal materialized view to express the query SQL."),(0,i.yg)("h3",{id:"flow-chart"},"Flow Chart"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Transparent Rewrite",src:n(945592).A,width:"1920",height:"3506"})),(0,i.yg)("h3",{id:"transparent-rewrite-based-on-structural-information"},"Transparent Rewrite Based on Structural Information"),(0,i.yg)("p",null,"As shown in the flowchart, after obtaining the query structure corresponding to the materialization, transparent rewrite will be based on structural information. At this point, the following verifications are required:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"1. Verify if the materialized view contains all rows required for the query")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"For the query: ",(0,i.yg)("inlineCode",{parentName:"p"},"SELECT * FROM T1, T2, \u2026, Tm WHERE Wq"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"For the materialized view: ",(0,i.yg)("inlineCode",{parentName:"p"},"SELECT * FROM T1, T2, \u2026, Tm WHERE Wv")))),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"The query conditions must be stronger than or equal to the materialized conditions.")),(0,i.yg)("p",null,"Where T1, T2 are tables, Wq represents the WHERE filter condition of the query, and Wv represents the WHERE filter condition of the materialized view. To ensure that the view contains all rows required by the query, the filter condition Wq must be able to derive Wv, i.e., ",(0,i.yg)("inlineCode",{parentName:"p"},"Wq -> Wv")," (for example, if ",(0,i.yg)("inlineCode",{parentName:"p"},"Wq > 20")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Wv > 10"),", Wq can derive Wv)."),(0,i.yg)("p",null,"The expression W can be further refined, with filter expressions divisible into three parts: PE \u2227 PR \u2227 PU."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"PE represents equal expressions;")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'PR represents range filter expressions, using operators such as "<", "\u2264", "=", "\u2265", ">";')),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"PU represents residual expressions excluding the aforementioned."))),(0,i.yg)("p",null,"Therefore, based on ",(0,i.yg)("inlineCode",{parentName:"p"},"Wq -> Wv"),", we can derive ",(0,i.yg)("inlineCode",{parentName:"p"},"(PEq \u2227 PRq \u2227 PUq \u2192 PEv \u2227 PRv \u2227 PUv)"),". Where q represents the query, and v represents the materialized view."),(0,i.yg)("p",null,"Since A -> C, then AB -> C. The above expression can be further derived as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Plain"},"(PEq\u2227 PRq\u2227PUq\u21d2 PEv )\u2227  \n(PEq\u2227 PRq\u2227PUq\u21d2 PRv)\u2227  \n(PEq\u2227 PRq\u2227PUq\u21d2 PUv)\n")),(0,i.yg)("p",null,"Which can be further simplified to:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Plain"},"(PEq \u21d2 PEv ) (Equijoin subsumption test - Equivalence condition verification)  \n(PEq \u2227 PRq \u21d2 PRv) (Range subsumption test - Range condition verification)  \n(PEq \u2227 PUq \u21d2 PUv ) (Residual subsumption test - Residual condition verification)\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Equivalence condition verification: The general principle is that the equal expressions of the materialized view are a subset of the query's equal expressions. Equivalent expressions are transitive and should maintain correctness.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The range expressions of the view should encompass those of the query. For example, T=constant can be converted to T>=constant AND T<=constant.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Using Expression Equals, verify if the residual expressions appearing in the materialized view are a subset of those in the query."))),(0,i.yg)("p",null,"Next, we will further explain the verification steps through examples:"),(0,i.yg)("p",null,"Materialized view definition:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT l_orderkey, o_custkey, l_partkey,  \nl_shipdate, o_orderdate,  \nl_quantity*l_extendedprice AS gross_revenue  \nFROM dbo.lineitem, dbo.orders, dbo.part  \nWHERE l_orderkey = o_orderkey  \nAND l_partkey = p_partkey  \nAND p_partkey >= 150  \nAND o_custkey >= 50 AND o_custkey <= 500  \nAND p_name LIKE '%abc%'\n")),(0,i.yg)("p",null,"Query definition:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT l_orderkey, o_custkey, l_partkey,  \nl_quantity*l_extendedprice  \nFROM lineitem, orders, part  \nWHERE l_orderkey = o_orderkey  \nAND l_partkey = p_partkey  \nAND l_partkey >= 150 AND l_partkey <= 160  \nAND o_custkey = 123  \nAND o_orderdate = l_shipdate  \nAND p_name LIKE '%abc%'  \nAND l_quantity*l_extendedprice > 100\n")),(0,i.yg)("p",null,"Step 1: Calculate equivalence classes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"View equivalence classes: ",(0,i.yg)("inlineCode",{parentName:"p"},"{l_orderkey, o_orderkey},{l_partkey, p_partkey}, {o_orderdate}, {l_shipdate}"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Query equivalence classes: ",(0,i.yg)("inlineCode",{parentName:"p"},"{l_orderkey, o_orderkey},{l_partkey, p_partkey}, {o_orderdate, l_shipdate}")))),(0,i.yg)("p",null,"Step 2: verify equivalence equivalence classes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If the view equivalence expression is a subset of the query equivalence expression, the verification passes.")),(0,i.yg)("p",null,"Step 3: Calculate range expressions"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"View range expressions: ",(0,i.yg)("inlineCode",{parentName:"p"},"{l_partkey, p_partkey} \u2208 (150, +\u221e), {o_custkey} \u2208 (50, 500)"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Query range expressions: ",(0,i.yg)("inlineCode",{parentName:"p"},"{l_partkey, p_partkey} \u2208 (150, 160), {o_custkey} \u2208 (123, 123)")))),(0,i.yg)("p",null,"Step 4: Verify range expressions"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"View range expressions: (150, 160) falls within (150, +\u221e)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Query range expressions: (123, 123) falls within (50, 500)"))),(0,i.yg)("p",null,"Step 5: Verify residual expressions"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"View residual expression: p_name LIKE '%abc%'")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Query residual expression: p_name LIKE '%abc%'"))),(0,i.yg)("p",null,"Since ",(0,i.yg)("inlineCode",{parentName:"p"},"l_quantity*l_extendedprice > 100"),", the view's residual expression is a subset of the query's. After verifying the above steps, we can ensure all rows are retrieved from the view, and compensation conditions need to be added to the view:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"(o_orderdate = l_shipdate),   \n({p_partkey,l_partkey} <= 160),   \n(o_custkey = 123), and  \n(l_quantity*l_extendedprice > 100.00).\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"2. Verify if the compensation conditions can be obtained from the materialized view")),(0,i.yg)("p",null,"To ensure the final data obtained is consistent with the original query, compensation conditions need to be added to the view. Verification is required to confirm if the columns or expressions selected in the compensation conditions can be obtained from the view."),(0,i.yg)("p",null,"This involves verifying if columns ",(0,i.yg)("inlineCode",{parentName:"p"},"o_orderdate"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"l_shipdate"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"p_partkey"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"{p_partkey, l_partkey}"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"o_custkey"),", and expression ",(0,i.yg)("inlineCode",{parentName:"p"},"l_quantity*l_extendedprice")," can be obtained from the view."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"3. Verify if expressions and columns can be obtained from the materialized view")),(0,i.yg)("p",null,"Similar to verifying compensation conditions, if the output expression is a constant, it can be directly copied from the view. If it's a simple column reference, verify if it can be obtained from the view. For expressions, if the columns in the expression can be obtained from the materialized view, obtain them directly; otherwise, the verification fails."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"4. Verify consistency in output data duplication")),(0,i.yg)("p",null,"For data obtained through queries and materialized views, the number of duplicate rows must be the same. If the tables referenced by the query and materialized view are the same, this issue will not arise. Duplicates and their counts may differ only when the tables referenced by the query and materialized view are different, especially in star schema queries with an additional join that is not a primary-foreign key relationship, potentially leading to data expansion and inconsistent duplication factors."),(0,i.yg)("p",null,"Usually, it's necessary to verify the JOIN types of the materialized view and query for the same tables and whether JOIN elimination is satisfied for different tables."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"5. Aggregation verification")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Verify if the materialized dimensions are finer than those of the query and if they encompass the query's dimensions.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Verify if the aggregation functions used in the query can be obtained from the materialized view or derived through roll-up of the materialized view's functions."))))}y.isMDXComponent=!0},945592:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/transparency-rewriting-011a673a27b3d576537fcd5a1244f45b.jpg"}}]);