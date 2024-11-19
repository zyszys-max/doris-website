"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[926921],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>y});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(y,i(i({ref:t},g),{},{components:a})):n.createElement(y,i({ref:t},g))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},800521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const o={title:"Beats Doris Output Plugin",language:"zh-CN"},i=void 0,l={unversionedId:"ecosystem/beats",id:"version-2.0/ecosystem/beats",title:"Beats Doris Output Plugin",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/ecosystem/beats.md",sourceDirName:"ecosystem",slug:"/ecosystem/beats",permalink:"/zh-CN/docs/2.0/ecosystem/beats",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Beats Doris Output Plugin",language:"zh-CN"},sidebar:"ecosystem",previous:{title:"Logstash Doris Output Plugin",permalink:"/zh-CN/docs/2.0/ecosystem/logstash"},next:{title:"AutoMQ Load",permalink:"/zh-CN/docs/2.0/ecosystem/automq-load"}},s={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4ece\u5b98\u7f51\u4e0b\u8f7d",id:"\u4ece\u5b98\u7f51\u4e0b\u8f7d",level:3},{value:"\u4ece\u6e90\u7801\u7f16\u8bd1",id:"\u4ece\u6e90\u7801\u7f16\u8bd1",level:3},{value:"\u53c2\u6570\u914d\u7f6e",id:"\u53c2\u6570\u914d\u7f6e",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"TEXT \u65e5\u5fd7\u91c7\u96c6\u793a\u4f8b",id:"text-\u65e5\u5fd7\u91c7\u96c6\u793a\u4f8b",level:3},{value:"JSON \u65e5\u5fd7\u91c7\u96c6\u793a\u4f8b",id:"json-\u65e5\u5fd7\u91c7\u96c6\u793a\u4f8b",level:3}],g={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"beats-doris-output-plugin"},"Beats Doris output plugin"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats"},"Beats")," \u662f\u4e00\u4e2a\u6570\u636e\u91c7\u96c6 Agent\uff0c\u5b83\u652f\u6301\u81ea\u5b9a\u4e49\u8f93\u51fa\u63d2\u4ef6\u5c06\u6570\u636e\u5199\u5165\u5b58\u50a8\u7cfb\u7edf\uff0cBeats Doris output plugin \u662f\u8f93\u51fa\u5230 Doris \u7684\u63d2\u4ef6\u3002"),(0,r.yg)("p",null,"Beats Doris output plugin \u652f\u6301 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/filebeat"},"Filebeat"),", ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/metricbeat"},"Metricbeat"),", ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/packetbeat"},"Packetbeat"),", ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/winlogbeat"},"Winlogbeat"),", ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/auditbeat"},"Auditbeat"),", ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/elastic/beats/tree/master/heartbeat"},"Heartbeat")," \u3002"),(0,r.yg)("p",null,"Beats Doris output plugin \u8c03\u7528 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.0/data-operate/import/stream-load-manual"},"Doris Stream Load")," HTTP \u63a5\u53e3\u5c06\u6570\u636e\u5b9e\u65f6\u5199\u5165 Doris\uff0c\u63d0\u4f9b\u591a\u7ebf\u7a0b\u5e76\u53d1\uff0c\u5931\u8d25\u91cd\u8bd5\uff0c\u81ea\u5b9a\u4e49 Stream Load \u683c\u5f0f\u548c\u53c2\u6570\uff0c\u8f93\u51fa\u5199\u5165\u901f\u5ea6\u7b49\u80fd\u529b\u3002"),(0,r.yg)("p",null,"\u4f7f\u7528 Beats Doris output plugin \u4e3b\u8981\u6709\u4e09\u4e2a\u6b65\u9aa4\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6216\u7f16\u8bd1\u5305\u542b Doris output plugin \u7684 Beats\u4e8c\u8fdb\u5236\u7a0b\u5e8f"),(0,r.yg)("li",{parentName:"ol"},"\u914d\u7f6e Beats \u8f93\u51fa\u5730\u5740\u548c\u5176\u4ed6\u53c2\u6570"),(0,r.yg)("li",{parentName:"ol"},"\u542f\u52a8 Beats \u5c06\u6570\u636e\u5b9e\u65f6\u5199\u5165 Doris")),(0,r.yg)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.yg)("h3",{id:"\u4ece\u5b98\u7f51\u4e0b\u8f7d"},"\u4ece\u5b98\u7f51\u4e0b\u8f7d"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/filebeat-doris-2.0.0"},"https://apache-doris-releases.oss-accelerate.aliyuncs.com/filebeat-doris-2.0.0")),(0,r.yg)("h3",{id:"\u4ece\u6e90\u7801\u7f16\u8bd1"},"\u4ece\u6e90\u7801\u7f16\u8bd1"),(0,r.yg)("p",null,"\u5728 extension/beats/ \u76ee\u5f55\u4e0b\u6267\u884c"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd doris/extension/beats\n\ngo build -o filebeat-doris filebeat/filebeat.go\ngo build -o metricbeat-doris metricbeat/metricbeat.go\ngo build -o winlogbeat-doris winlogbeat/winlogbeat.go\ngo build -o packetbeat-doris packetbeat/packetbeat.go\ngo build -o auditbeat-doris auditbeat/auditbeat.go\ngo build -o heartbeat-doris heartbeat/heartbeat.go\n")),(0,r.yg)("h2",{id:"\u53c2\u6570\u914d\u7f6e"},"\u53c2\u6570\u914d\u7f6e"),(0,r.yg)("p",null,"Beats Doris output plugin \u7684\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,r.yg)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"http_hosts")),(0,r.yg)("td",{parentName:"tr",align:null},"Stream Load HTTP \u5730\u5740\uff0c\u683c\u5f0f\u662f\u5b57\u7b26\u4e32\u6570\u7ec4\uff0c\u53ef\u4ee5\u6709\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5143\u7d20\uff0c\u6bcf\u4e2a\u5143\u7d20\u662f host:port\u3002 \u4f8b\u5982\uff1a",'["http://fe1:8030", "http://fe2:8030"]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"user")),(0,r.yg)("td",{parentName:"tr",align:null},"Doris \u7528\u6237\u540d\uff0c\u8be5\u7528\u6237\u9700\u8981\u6709doris\u5bf9\u5e94\u5e93\u8868\u7684\u5bfc\u5165\u6743\u9650")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"password")),(0,r.yg)("td",{parentName:"tr",align:null},"Doris \u7528\u6237\u7684\u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"database")),(0,r.yg)("td",{parentName:"tr",align:null},"\u8981\u5199\u5165\u7684 Doris \u5e93\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"table")),(0,r.yg)("td",{parentName:"tr",align:null},"\u8981\u5199\u5165\u7684 Doris \u8868\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"label_prefix")),(0,r.yg)("td",{parentName:"tr",align:null},"Doris Stream Load Label \u524d\u7f00\uff0c\u6700\u7ec8\u751f\u6210\u7684 Label \u4e3a ",(0,r.yg)("em",{parentName:"td"},"{label",(0,r.yg)("em",{parentName:"em"},"prefix}"),"{db}",(0,r.yg)("em",{parentName:"em"},"{table}"),"{yyyymmdd",(0,r.yg)("em",{parentName:"em"},"hhmmss}"),"{uuid}")," \uff0c\u9ed8\u8ba4\u503c\u662f beats")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"headers")),(0,r.yg)("td",{parentName:"tr",align:null},"Doris Stream Load \u7684 headers \u53c2\u6570\uff0c\u8bed\u6cd5\u683c\u5f0f\u4e3a YAML map")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"codec_format_string")),(0,r.yg)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u5230 Doris Stream Load \u7684format string\uff0c%{","[a][b]","} \u4ee3\u8868\u8f93\u5165\u4e2d\u7684 a.b \u5b57\u6bb5\uff0c\u53c2\u8003\u540e\u7eed\u7ae0\u8282\u7684\u4f7f\u7528\u793a\u4f8b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"bulk_max_size")),(0,r.yg)("td",{parentName:"tr",align:null},"Doris Stream Load \u7684 batch size\uff0c\u9ed8\u8ba4\u4e3a100000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"max_retries")),(0,r.yg)("td",{parentName:"tr",align:null},"Doris Stream Load \u8bf7\u6c42\u5931\u8d25\u91cd\u8bd5\u6b21\u6570\uff0c\u9ed8\u8ba4\u4e3a -1 \u65e0\u9650\u91cd\u8bd5\u4fdd\u8bc1\u6570\u636e\u53ef\u9760\u6027")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"log_request")),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u4e2d\u662f\u5426\u8f93\u51fa Doris Stream Load \u8bf7\u6c42\u548c\u54cd\u5e94\u5143\u6570\u636e\uff0c\u7528\u4e8e\u6392\u67e5\u95ee\u9898\uff0c\u9ed8\u8ba4\u4e3a true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"log_progress_interval")),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u4e2d\u8f93\u51fa\u901f\u5ea6\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u662f\u79d2\uff0c\u9ed8\u8ba4\u4e3a 10\uff0c\u8bbe\u7f6e\u4e3a 0 \u53ef\u4ee5\u5173\u95ed\u8fd9\u79cd\u65e5\u5fd7")))),(0,r.yg)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.yg)("h3",{id:"text-\u65e5\u5fd7\u91c7\u96c6\u793a\u4f8b"},"TEXT \u65e5\u5fd7\u91c7\u96c6\u793a\u4f8b"),(0,r.yg)("p",null,"\u8be5\u793a\u4f8b\u4ee5 Doris FE \u7684\u65e5\u5fd7\u4e3a\u4f8b\u5c55\u793a TEXT \u65e5\u5fd7\u91c7\u96c6\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. \u6570\u636e")),(0,r.yg)("p",null,"FE \u65e5\u5fd7\u6587\u4ef6\u4e00\u822c\u4f4d\u4e8e Doris \u5b89\u88c5\u76ee\u5f55\u4e0b\u7684 fe/log/fe.log \u6587\u4ef6\uff0c\u662f\u5178\u578b\u7684 Java \u7a0b\u5e8f\u65e5\u5fd7\uff0c\u5305\u62ec\u65f6\u95f4\u6233\uff0c\u65e5\u5fd7\u7ea7\u522b\uff0c\u7ebf\u7a0b\u540d\uff0c\u4ee3\u7801\u4f4d\u7f6e\uff0c\u65e5\u5fd7\u5185\u5bb9\u7b49\u5b57\u6bb5\u3002\u4e0d\u4ec5\u6709\u6b63\u5e38\u7684\u65e5\u5fd7\uff0c\u8fd8\u6709\u5e26 stacktrace \u7684\u5f02\u5e38\u65e5\u5fd7\uff0cstacktrace \u662f\u8de8\u884c\u7684\uff0c\u65e5\u5fd7\u91c7\u96c6\u5b58\u50a8\u9700\u8981\u628a\u4e3b\u65e5\u5fd7\u548c stacktrace \u7ec4\u5408\u6210\u4e00\u6761\u65e5\u5fd7\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"2024-07-08 21:18:01,432 INFO (Statistics Job Appender|61) [StatisticsJobAppender.runAfterCatalogReady():70] Stats table not available, skip\n2024-07-08 21:18:53,710 WARN (STATS_FETCH-0|208) [StmtExecutor.executeInternalQuery():3332] Failed to run internal SQL: OriginStatement{originStmt='SELECT * FROM __internal_schema.column_statistics WHERE part_id is NULL  ORDER BY update_time DESC LIMIT 500000', idx=0}\norg.apache.doris.common.UserException: errCode = 2, detailMessage = tablet 10031 has no queryable replicas. err: replica 10032's backend 10008 does not exist or not alive\n        at org.apache.doris.planner.OlapScanNode.addScanRangeLocations(OlapScanNode.java:931) ~[doris-fe.jar:1.2-SNAPSHOT]\n        at org.apache.doris.planner.OlapScanNode.computeTabletInfo(OlapScanNode.java:1197) ~[doris-fe.jar:1.2-SNAPSHOT]\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. \u5efa\u8868")),(0,r.yg)("p",null,"\u8868\u7ed3\u6784\u5305\u62ec\u65e5\u5fd7\u7684\u4ea7\u751f\u65f6\u95f4\uff0c\u91c7\u96c6\u65f6\u95f4\uff0c\u4e3b\u673a\u540d\uff0c\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84\uff0c\u65e5\u5fd7\u7c7b\u578b\uff0c\u65e5\u5fd7\u7ea7\u522b\uff0c\u7ebf\u7a0b\u540d\uff0c\u4ee3\u7801\u4f4d\u7f6e\uff0c\u65e5\u5fd7\u5185\u5bb9\u7b49\u5b57\u6bb5\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'CREATE TABLE `doris_log` (\n  `log_time` datetime NULL COMMENT \'log content time\',\n  `collect_time` datetime NULL COMMENT \'log agent collect time\',\n  `host` text NULL COMMENT \'hostname or ip\',\n  `path` text NULL COMMENT \'log file path\',\n  `type` text NULL COMMENT \'log type\',\n  `level` text NULL COMMENT \'log level\',\n  `thread` text NULL COMMENT \'log thread\',\n  `position` text NULL COMMENT \'log code position\',\n  `message` text NULL COMMENT \'log message\',\n  INDEX idx_host (`host`) USING INVERTED COMMENT \'\',\n  INDEX idx_path (`path`) USING INVERTED COMMENT \'\',\n  INDEX idx_type (`type`) USING INVERTED COMMENT \'\',\n  INDEX idx_level (`level`) USING INVERTED COMMENT \'\',\n  INDEX idx_thread (`thread`) USING INVERTED COMMENT \'\',\n  INDEX idx_position (`position`) USING INVERTED COMMENT \'\',\n  INDEX idx_message (`message`) USING INVERTED PROPERTIES("parser" = "unicode", "support_phrase" = "true") COMMENT \'\'\n) ENGINE=OLAP\nDUPLICATE KEY(`log_time`)\nCOMMENT \'OLAP\'\nPARTITION BY RANGE(`log_time`) ()\nDISTRIBUTED BY RANDOM BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-7",\n"dynamic_partition.end" = "1",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "10",\n"dynamic_partition.create_history_partition" = "true",\n"compaction_policy" = "time_series"\n);\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3. \u914d\u7f6e")),(0,r.yg)("p",null,"filebeat \u65e5\u5fd7\u91c7\u96c6\u7684\u914d\u7f6e\u6587\u4ef6\u5982 filebeat_doris_log.yml \u662f YAML \u683c\u5f0f\uff0c\u4e3b\u8981\u7531 4 \u90e8\u5206\u7ec4\u6210\uff0c\u5206\u522b\u5bf9\u5e94 ETL \u7684\u5404\u4e2a\u90e8\u5206\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"input \u8d1f\u8d23\u8bfb\u53d6\u539f\u59cb\u6570\u636e"),(0,r.yg)("li",{parentName:"ol"},"processor \u8d1f\u8d23\u505a\u6570\u636e\u8f6c\u6362"),(0,r.yg)("li",{parentName:"ol"},"queue.mem \u914d\u7f6e filebeat \u5185\u90e8\u7684\u7f13\u51b2\u961f\u5217"),(0,r.yg)("li",{parentName:"ol"},"output \u8d1f\u8d23\u5c06\u6570\u636e\u8f93\u51fa")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# 1. input \u8d1f\u8d23\u8bfb\u53d6\u539f\u59cb\u6570\u636e\n# type: log \u662f\u4e00\u4e2a log input plugin\uff0c\u53ef\u4ee5\u914d\u7f6e\u8bfb\u53d6\u7684\u65e5\u5fd7\u6587\u4ef6\u8def\u5f84\uff0c\u901a\u8fc7 multiline \u529f\u80fd\u5c06\u975e\u65f6\u95f4\u5f00\u5934\u7684\u884c\u62fc\u63a5\u5230\u4e0a\u4e00\u884c\u540e\u9762\uff0c\u5b9e\u73b0 stacktrace \u548c\u4e3b\u65e5\u5fd7\u5408\u5e76\u7684\u6548\u679c\u3002log input \u4f1a\u5c06\u65e5\u5fd7\u5185\u5bb9\u4fdd\u5b58\u5728 message \u5b57\u6bb5\u4e2d\uff0c\u53e6\u5916\u8fd8\u6709\u4e00\u4e9b\u5143\u6570\u636e\u5b57\u6bb5\u6bd4\u5982 agent.host\uff0clog.file.path\u3002\nfilebeat.inputs:\n- type: log\n  enabled: true\n  paths:\n    - /path/to/your/log\n  # multiline \u53ef\u4ee5\u5c06\u8de8\u884c\u7684\u65e5\u5fd7\uff08\u6bd4\u5982Java stacktrace\uff09\u62fc\u63a5\u8d77\u6765\n  multiline:\n    type: pattern\n    # \u6548\u679c\uff1a\u4ee5 yyyy-mm-dd HH:MM:SS \u5f00\u5934\u7684\u884c\u8ba4\u4e3a\u662f\u4e00\u6761\u65b0\u7684\u65e5\u5fd7\uff0c\u5176\u4ed6\u90fd\u62fc\u63a5\u5230\u4e0a\u4e00\u6761\u65e5\u5fd7\n    pattern: \'^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}\'\n    negate: true\n    match: after\n    skip_newline: true\n\n# 2. processors \u90e8\u5206\u8d1f\u8d23\u6570\u636e\u8f6c\u6362\nprocessors:\n# \u7528 js script \u63d2\u4ef6\u5c06\u65e5\u5fd7\u4e2d\u7684 \\t \u66ff\u6362\u6210\u7a7a\u683c\uff0c\u907f\u514dJSON\u89e3\u6790\u62a5\u9519\n- script:\n    lang: javascript\n    source: >\n        function process(event) {\n            var msg = event.Get("message");\n            msg = msg.replace(/\\t/g, "  ");\n            event.Put("message", msg);\n        }\n# \u7528 dissect \u63d2\u4ef6\u505a\u7b80\u5355\u7684\u65e5\u5fd7\u89e3\u6790\n- dissect:\n    # 2024-06-08 18:26:25,481 INFO (report-thread|199) [ReportHandler.cpuReport():617] begin to handle\n    tokenizer: "%{day} %{time} %{log_level} (%{thread}) [%{position}] %{content}"\n    target_prefix: ""\n    ignore_failure: true\n    overwrite_keys: true\n\n# 3. \u5185\u90e8\u7684\u7f13\u51b2\u961f\u5217\u603b\u6761\u6570\uff0cflush batch \u6761\u6570\uff0cflush \u65f6\u95f4\u95f4\u9694\nqueue.mem:\n  events: 1000000\n  flush.min_events: 100000\n  flush.timeout: 10s\n\n# 4. output \u90e8\u5206\u8d1f\u8d23\u6570\u636e\u8f93\u51fa\n# doris output \u5c06\u6570\u636e\u8f93\u51fa\u5230 Doris\uff0c\u4f7f\u7528\u7684\u662f Stream Load HTTP \u63a5\u53e3\u3002\u901a\u8fc7 headers \u53c2\u6570\u6307\u5b9a\u4e86 Stream Load \u7684\u6570\u636e\u683c\u5f0f\u4e3a JSON\uff0c\u901a\u8fc7 codec_format_string \u53c2\u6570\u7528\u7c7b\u4f3c printf \u7684\u65b9\u5f0f\u683c\u5f0f\u5316\u8f93\u51fa\u5230 Doris \u7684\u6570\u636e\u3002\u6bd4\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\u57fa\u4e8e filebeat \u5185\u90e8\u7684\u5b57\u6bb5 format \u51fa\u4e00\u4e2a JSON\uff0c\u8fd9\u4e9b\u5b57\u6bb5\u53ef\u4ee5\u662f filebeat \u5185\u7f6e\u5b57\u6bb5\u5982 agent.hostname\uff0c\u4e5f\u53ef\u4ee5\u662f processor \u6bd4\u5982 dissect \u751f\u4ea7\u7684\u5b57\u6bb5\u5982 day\uff0c\u901a\u8fc7 %{[a][b]} \u7684\u65b9\u5f0f\u5f15\u7528\uff0c\uff0cStream Load \u4f1a\u81ea\u52a8\u5c06 JSON \u5b57\u6bb5\u5199\u5165\u5bf9\u5e94\u7684 Doris \u8868\u7684\u5b57\u6bb5\u3002\noutput.doris:\n  fenodes: [ "http://fehost1:http_port", "http://fehost2:http_port", "http://fehost3:http_port" ]\n  user: "your_username"\n  password: "your_password"\n  database: "your_db"\n  table: "your_table"\n  # output string format\n  ## %{[agent][hostname]} %{[log][file][path]} \u662ffilebeat\u81ea\u5e26\u7684metadata\n  ## \u5e38\u7528\u7684 filebeat metadata \u8fd8\u662f\u6709\u91c7\u96c6\u65f6\u95f4\u6233 %{[@timestamp]}\n  ## %{[day]} %{[time]} \u662f\u4e0a\u9762 dissect \u89e3\u6790\u5f97\u5230\u5b57\u6bb5\n  codec_format_string: \'{"ts": "%{[day]} %{[time]}", "host": "%{[agent][hostname]}", "path": "%{[log][file][path]}", "message": "%{[message]}"}\'\n  headers:\n    format: "json"\n    read_json_by_line: "true"\n    load_to_single_tablet: "true"\n\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"4. \u8fd0\u884c Filebeat")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'\n./filebeat-doris -f config/filebeat_doris_log.yml\n\n# log_request \u4e3a true \u65f6\u65e5\u5fd7\u4f1a\u8f93\u51fa\u6bcf\u6b21 Stream Load \u7684\u8bf7\u6c42\u53c2\u6570\u548c\u54cd\u5e94\u7ed3\u679c\n\ndoris stream load response:\n{\n    "TxnId": 45464,\n    "Label": "logstash_log_db_doris_log_20240708_223532_539_6c20a0d1-dcab-4b8e-9bc0-76b46a929bd1",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 452,\n    "NumberLoadedRows": 452,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 277230,\n    "LoadTimeMs": 1797,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 18,\n    "ReadDataTimeMs": 9,\n    "WriteDataTimeMs": 1758,\n    "CommitAndPublishTimeMs": 18\n}\n\n# \u9ed8\u8ba4\u6bcf\u9694 10s \u4f1a\u65e5\u5fd7\u8f93\u51fa\u901f\u5ea6\u4fe1\u606f\uff0c\u5305\u62ec\u81ea\u542f\u52a8\u4ee5\u6765\u7684\u6570\u636e\u91cf\uff08MB \u548c ROWS\uff09\uff0c\u603b\u901f\u5ea6\uff08MB/s \u548c R/S\uff09\uff0c\u6700\u8fd1 10s \u901f\u5ea6\ntotal 11 MB 18978 ROWS, total speed 0 MB/s 632 R/s, last 10 seconds speed 1 MB/s 1897 R/s\n')),(0,r.yg)("h3",{id:"json-\u65e5\u5fd7\u91c7\u96c6\u793a\u4f8b"},"JSON \u65e5\u5fd7\u91c7\u96c6\u793a\u4f8b"),(0,r.yg)("p",null,"\u8be5\u6837\u4f8b\u4ee5 github events archive \u7684\u6570\u636e\u4e3a\u4f8b\u5c55\u793a JSON \u65e5\u5fd7\u91c7\u96c6\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. \u6570\u636e")),(0,r.yg)("p",null,"github events archive \u662f github \u7528\u6237\u64cd\u4f5c\u4e8b\u4ef6\u7684\u5f52\u6863\u6570\u636e\uff0c\u683c\u5f0f\u662f JSON\uff0c\u53ef\u4ee5\u4ece ",(0,r.yg)("a",{parentName:"p",href:"https://www.gharchive.org/"},"https://www.gharchive.org/")," \u4e0b\u8f7d\uff0c\u6bd4\u5982\u4e0b\u8f7d 2024\u5e741\u67081\u65e515\u70b9\u7684\u6570\u636e\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"wget https://data.gharchive.org/2024-01-01-15.json.gz\n\n")),(0,r.yg)("p",null,"\u4e0b\u9762\u662f\u4e00\u6761\u6570\u636e\u6837\u4f8b\uff0c\u5b9e\u9645\u4e00\u6761\u6570\u636e\u4e00\u884c\uff0c\u8fd9\u91cc\u4e3a\u4e86\u65b9\u4fbf\u5c55\u793a\u8fdb\u884c\u4e86\u683c\u5f0f\u5316\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n  "id": "37066529221",\n  "type": "PushEvent",\n  "actor": {\n    "id": 46139131,\n    "login": "Bard89",\n    "display_login": "Bard89",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/Bard89",\n    "avatar_url": "https://avatars.githubusercontent.com/u/46139131?"\n  },\n  "repo": {\n    "id": 780125623,\n    "name": "Bard89/talk-to-me",\n    "url": "https://api.github.com/repos/Bard89/talk-to-me"\n  },\n  "payload": {\n    "repository_id": 780125623,\n    "push_id": 17799451992,\n    "size": 1,\n    "distinct_size": 1,\n    "ref": "refs/heads/add_mvcs",\n    "head": "f03baa2de66f88f5f1754ce3fa30972667f87e81",\n    "before": "85e6544ede4ae3f132fe2f5f1ce0ce35a3169d21"\n  },\n  "public": true,\n  "created_at": "2024-04-01T23:00:00Z"\n}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. Doris \u5efa\u8868")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'CREATE DATABASE log_db;\nUSE log_db;\n\n\nCREATE TABLE github_events\n(\n  `created_at` DATETIME,\n  `id` BIGINT,\n  `type` TEXT,\n  `public` BOOLEAN,\n  `actor` VARIANT,\n  `repo` VARIANT,\n  `payload` TEXT,\n  INDEX `idx_id` (`id`) USING INVERTED,\n  INDEX `idx_type` (`type`) USING INVERTED,\n  INDEX `idx_actor` (`actor`) USING INVERTED,\n  INDEX `idx_host` (`repo`) USING INVERTED,\n  INDEX `idx_payload` (`payload`) USING INVERTED PROPERTIES("parser" = "unicode", "support_phrase" = "true")\n)\nENGINE = OLAP\nDUPLICATE KEY(`created_at`)\nPARTITION BY RANGE(`created_at`) ()\nDISTRIBUTED BY RANDOM BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"compaction_policy" = "time_series",\n"enable_single_replica_compaction" = "true",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.create_history_partition" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-30",\n"dynamic_partition.end" = "1",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "10",\n"dynamic_partition.replication_num" = "1"\n);\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3. Filebeat \u914d\u7f6e")),(0,r.yg)("p",null,"\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6\u548c\u4e4b\u524d TEXT \u65e5\u5fd7\u91c7\u96c6\u4e0d\u540c\u7684\u6709\u4e0b\u9762\u51e0\u70b9\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u6ca1\u6709\u7528 processors\uff0c\u56e0\u4e3a\u4e0d\u9700\u8981\u989d\u5916\u7684\u5904\u7406\u8f6c\u6362"),(0,r.yg)("li",{parentName:"ol"},"output \u4e2d\u7684 codec_format_string \u5f88\u7b80\u5355\uff0c\u76f4\u63a5\u8f93\u51fa\u6574\u4e2a message\uff0c\u4e5f\u5c31\u662f\u539f\u59cb\u5185\u5bb9")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'# input\nfilebeat.inputs:\n- type: log\n  enabled: true\n  paths:\n    - /path/to/your/log\n\n# queue and batch\nqueue.mem:\n  events: 1000000\n  flush.min_events: 100000\n  flush.timeout: 10s\n\n# output\noutput.doris:\n  fenodes: [ "http://fehost1:http_port", "http://fehost2:http_port", "http://fehost3:http_port" ]\n  user: "your_username"\n  password: "your_password"\n  database: "your_db"\n  table: "your_table"\n  # output string format\n  ## \u76f4\u63a5\u628a\u539f\u59cb\u6587\u4ef6\u6bcf\u4e00\u884c\u7684 message \u539f\u6837\u8f93\u51fa\uff0c\u7531\u4e8e headers \u6307\u5b9a\u4e86 format: "json"\uff0cStream Load \u4f1a\u81ea\u52a8\u89e3\u6790 JSON \u5b57\u6bb5\u5199\u5165\u5bf9\u5e94\u7684 Doris \u8868\u7684\u5b57\u6bb5\u3002\n  codec_format_string: \'%{[message]}\'\n  headers:\n    format: "json"\n    read_json_by_line: "true"\n    load_to_single_tablet: "true"\n\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"4. \u8fd0\u884c Filebeat")," "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"./filebeat-doris -f config/filebeat_github_events.yml\n")))}u.isMDXComponent=!0}}]);