"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[621606],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>y});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),m=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=m(e.components);return r.createElement(p.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(t),u=n,y=d["".concat(p,".").concat(u)]||d[u]||g[u]||o;return t?r.createElement(y,i(i({ref:a},s),{},{components:t})):r.createElement(y,i({ref:a},s))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},461192:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=t(58168),n=(t(296540),t(15680));const o={title:"Loading Overview",language:"en"},i=void 0,l={unversionedId:"data-operate/import/load-manual",id:"version-3.0/data-operate/import/load-manual",title:"Loading Overview",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/data-operate/import/load-manual.md",sourceDirName:"data-operate/import",slug:"/data-operate/import/load-manual",permalink:"/docs/3.0/data-operate/import/load-manual",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Loading Overview",language:"en"},sidebar:"docs",previous:{title:"Best Practices",permalink:"/docs/3.0/table-design/best-practice"},next:{title:"Stream Load",permalink:"/docs/3.0/data-operate/import/import-way/stream-load-manual"}},p={},m=[{value:"Quick Overview of Import Methods",id:"quick-overview-of-import-methods",level:3}],s={toc:m},d="wrapper";function g(e){let{components:a,...t}=e;return(0,n.yg)(d,(0,r.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Apache Doris offers various methods for importing and integrating data, allowing you to import data from diverse sources into the database. These methods can be categorized into four types:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Real-Time Writing"),": Data is written into Doris tables in real-time via HTTP or JDBC, suitable for scenarios requiring immediate analysis and querying."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"For small amounts of data (once every 5 minutes), you can use ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0/data-operate/import/import-way/insert-into-manual"},"JDBC INSERT"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"For higher concurrency or frequency (more than 20 concurrent writes or multiple writes per minute), you can enable enable ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0/data-operate/import/import-way/group-commit-manual"},"Group Commit")," and use JDBC INSERT or Stream Load.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"For high throughput, you can use ",(0,n.yg)("a",{parentName:"p",href:"./import-way/stream-load-manual"},"Stream Load")," via HTTP.")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Streaming Synchronization"),": Real-time data streams (e.g., Flink, Kafka, transactional databases) are imported into Doris tables, ideal for real-time analysis and querying."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"You can use ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0/ecosystem/flink-doris-connector"},"Flink Doris Connector")," to write Flink\u2019s real-time data streams into Doris.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"You can use ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0/data-operate/import/import-way/routine-load-manual"},"Routine Load")," or ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0/ecosystem/doris-kafka-connector"},"Doris Kafka Connector")," for Kafka\u2019s real-time data streams. Routine Load pulls data from Kafka to Doris and supports CSV and JSON formats, while Kafka Connector writes data to Doris, supporting Avro, JSON, CSV, and Protobuf formats.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"You can use ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0/ecosystem/flink-doris-connector"},"Flink CDC")," or ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0/ecosystem/datax"},"Datax")," to write transactional database CDC data streams into Doris.")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Batch Import"),": Data is batch-loaded from external storage systems (e.g., S3, HDFS, local files, NAS) into Doris tables, suitable for non-real-time data import needs."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"You can use ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0/data-operate/import/import-way/broker-load-manual"},"Broker Load")," to write files from S3 and HDFS into Doris.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"You can use ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0/data-operate/import/import-way/insert-into-manual"},"INSERT INTO SELECT")," to synchronously load files from S3, HDFS, and NAS into Doris, and you can perform the operation asynchronously using a ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0/data-operate/scheduler/job-scheduler"},"JOB"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"You can use ",(0,n.yg)("a",{parentName:"p",href:"./import-way/stream-load-manual"},"Stream Load")," or ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0/ecosystem/doris-streamloader"},"Doris Streamloader")," to write local files into Doris.")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"External Data Source Integration"),": Query and partially import data from external sources (e.g., Hive, JDBC, Iceberg) into Doris tables."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"You can create a ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.0/lakehouse/lakehouse-overview"},"Catalog")," to read data from external sources and use ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.0/data-operate/import/import-way/insert-into-manual"},"INSERT INTO SELECT")," to synchronize this data into Doris, with asynchronous writing via ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.0/data-operate/scheduler/job-scheduler"},"JOB"),"."),(0,n.yg)("li",{parentName:"ul"},"You can use ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.0/data-operate/import/migrate-data-from-other-olap"},"X2Doris")," to migrate data from other AP systems into Doris.")))),(0,n.yg)("p",null,"Each import method in Doris is an implicit transaction by default. For more information on transactions, refer to ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.0/data-operate/transaction"},"Transactions"),"."),(0,n.yg)("h3",{id:"quick-overview-of-import-methods"},"Quick Overview of Import Methods"),(0,n.yg)("p",null,"Doris's import process mainly involves various aspects such as data sources, data formats, import methods, error handling, data transformation, and transactions. You can quickly browse the scenarios suitable for each import method and the supported file formats in the table below."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Import Method"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Use Case"),(0,n.yg)("th",{parentName:"tr",align:null},"Supported File Formats"),(0,n.yg)("th",{parentName:"tr",align:null},"Single Import Volume"),(0,n.yg)("th",{parentName:"tr",align:null},"Import Mode"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"./import-way/stream-load-manual"},"Stream Load")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Importing local files or push data in applications via http."),(0,n.yg)("td",{parentName:"tr",align:null},"csv, json, parquet, orc"),(0,n.yg)("td",{parentName:"tr",align:null},"Less than 10GB"),(0,n.yg)("td",{parentName:"tr",align:null},"Synchronous")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/3.0/data-operate/import/import-way/broker-load-manual"},"Broker Load")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Importing from object storage, HDFS, etc."),(0,n.yg)("td",{parentName:"tr",align:null},"csv, json, parquet, orc"),(0,n.yg)("td",{parentName:"tr",align:null},"Tens of GB to hundreds of GB"),(0,n.yg)("td",{parentName:"tr",align:null},"Asynchronous")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/3.0/data-operate/import/import-way/insert-into-manual"},"INSERT INTO VALUES")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Writing data via JDBC."),(0,n.yg)("td",{parentName:"tr",align:null},"SQL"),(0,n.yg)("td",{parentName:"tr",align:null},"Simple testing"),(0,n.yg)("td",{parentName:"tr",align:null},"Synchronous")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/3.0/data-operate/import/import-way/insert-into-manual"},"INSERT INTO SELECT")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Importing from an external source like a table in a catalog or files in s3."),(0,n.yg)("td",{parentName:"tr",align:null},"SQL"),(0,n.yg)("td",{parentName:"tr",align:null},"Depending on memory size"),(0,n.yg)("td",{parentName:"tr",align:null},"Synchronous, Asynchronous via Job")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/3.0/data-operate/import/import-way/routine-load-manual"},"Routine Load")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Real-time import from Kafka"),(0,n.yg)("td",{parentName:"tr",align:null},"csv, json"),(0,n.yg)("td",{parentName:"tr",align:null},"Micro-batch import MB to GB"),(0,n.yg)("td",{parentName:"tr",align:null},"Asynchronous")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/3.0/data-operate/import/import-way/mysql-load-manual"},"MySQL Load")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Importing from local files."),(0,n.yg)("td",{parentName:"tr",align:null},"csv"),(0,n.yg)("td",{parentName:"tr",align:null},"Less than 1GB"),(0,n.yg)("td",{parentName:"tr",align:null},"Synchronous")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/docs/3.0/data-operate/import/import-way/group-commit-manual"},"Group Commit")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Writing with high frequency."),(0,n.yg)("td",{parentName:"tr",align:null},"Depending on the import method used"),(0,n.yg)("td",{parentName:"tr",align:null},"Micro-batch import KB"),(0,n.yg)("td",{parentName:"tr",align:null},"-")))))}g.isMDXComponent=!0}}]);