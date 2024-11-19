"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[487038],{15680:(e,r,a)=>{a.d(r,{xA:()=>y,yg:()=>d});var t=a(296540);function i(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function n(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?n(Object(a),!0).forEach((function(r){i(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function m(e,r){if(null==e)return{};var a,t,i=function(e,r){if(null==e)return{};var a,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(i[a]=e[a]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),l=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},y=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},c="mdxType",B={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,y=m(e,["components","mdxType","originalType","parentName"]),c=l(a),p=i,d=c["".concat(s,".").concat(p)]||c[p]||B[p]||n;return a?t.createElement(d,o(o({ref:r},y),{},{components:a})):t.createElement(d,o({ref:r},y))}));function d(e,r){var a=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=p;var m={};for(var s in r)hasOwnProperty.call(r,s)&&(m[s]=r[s]);m.originalType=e,m[c]="string"==typeof e?e:i,o[1]=m;for(var l=2;l<n;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},799426:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>B,frontMatter:()=>n,metadata:()=>m,toc:()=>l});var t=a(58168),i=(a(296540),a(15680));const n={title:"Memory Log Analysis",language:"en"},o=void 0,m={unversionedId:"admin-manual/memory-management/memory-analysis/memory-log-analysis",id:"version-2.1/admin-manual/memory-management/memory-analysis/memory-log-analysis",title:"Memory Log Analysis",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/memory-management/memory-analysis/memory-log-analysis.md",sourceDirName:"admin-manual/memory-management/memory-analysis",slug:"/admin-manual/memory-management/memory-analysis/memory-log-analysis",permalink:"/docs/admin-manual/memory-management/memory-analysis/memory-log-analysis",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Memory Log Analysis",language:"en"},sidebar:"docs",previous:{title:"OOM Killer Crash Analysis",permalink:"/docs/admin-manual/memory-management/memory-analysis/oom-crash-analysis"},next:{title:"Heap Profile Memory Analysis",permalink:"/docs/admin-manual/memory-management/memory-analysis/heap-profile-memory-analysis"}},s={},l=[{value:"Process memory status log analysis",id:"process-memory-status-log-analysis",level:2},{value:"Process memory statistics log analysis",id:"process-memory-statistics-log-analysis",level:2}],y={toc:l},c="wrapper";function B(e){let{components:r,...a}=e;return(0,i.yg)(c,(0,t.A)({},y,a,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The process memory logs in ",(0,i.yg)("inlineCode",{parentName:"p"},"be/log/be.INFO")," are mainly divided into two categories. One is the process memory status log, including the process memory size and the remaining available memory size of the system. The other is a more detailed process memory statistics log, including the memory size counted by Memory Tracker."),(0,i.yg)("h2",{id:"process-memory-status-log-analysis"},"Process memory status log analysis"),(0,i.yg)("p",null,"The process memory status of Doris BE will be printed in the ",(0,i.yg)("inlineCode",{parentName:"p"},"log/be.INFO")," log every time the process memory increases or decreases by 256 MB. In addition, when the process memory is insufficient, the process memory status will also be printed along with other logs."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"os physical memory 375.81 GB. process memory used 4.09 GB(= 3.49 GB[vm/rss] - 410.44 MB[tc/jemalloc_cache] + 1 GB[reserved] + 0B[waiting_refresh]), limit 3.01 GB, soft limit 2.71 GB. sys available memory 134.41 GB(= 1 35.41 GB[proc/available] - 1 GB[reserved] - 0B[waiting_refresh]), low water mark 3.20 GB, warning water mark 6.40 GB.\n")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"os physical memory 375.81 GB")," refers to the system physical memory 375.81 GB.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"process memory used 4.09 GB (= 3.49 GB [vm/rss] - 410.44 MB [tc/jemalloc_cache] + 1 GB [reserved] + 0B [waiting_refresh])")))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Currently we think that the BE process uses 4.09 GB of memory, and the actual physical memory used by the BE process ",(0,i.yg)("inlineCode",{parentName:"li"},"vm/rss")," is 3.49 GB,"),(0,i.yg)("li",{parentName:"ul"},"410.44 MB of which is ",(0,i.yg)("inlineCode",{parentName:"li"},"tc/jemalloc_cache"),". This part of the cache will be reused first in the subsequent execution process, so it is not counted as BE process memory here."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"reserved")," is the memory reserved during the execution process. Usually, before building HashTable and other operations that consume a lot of memory, the memory of HashTable is reserved in advance to ensure that the process of building HashTable will not be terminated due to insufficient memory. This part of the reserved memory is calculated in the BE process memory, even if it has not actually been allocated."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"waiting_refresh")," is the large memory requested in the interval between two memory status refreshes. The default interval for Doris memory status refreshes is 100ms. To avoid a large number of memory requests in the interval between two memory status refreshes, the memory GC is not detected and triggered in time after the memory exceeds the limit. Therefore, the large memory requested in the interval is calculated in the BE process memory. ",(0,i.yg)("inlineCode",{parentName:"li"},"waiting_refresh")," will be cleared to 0 after each memory status refresh.")),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"sys available memory 134.41 GB (= 135.41 GB [proc/available] - 1 GB [reserved] - 0B [waiting_refresh])"))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The current remaining available memory for the BE process is 134.41 GB, and the actual memory ",(0,i.yg)("inlineCode",{parentName:"li"},"proc/available")," available to the BE process in the system is 135.41 GB."),(0,i.yg)("li",{parentName:"ul"},"1GB of the memory has been reserved, so ",(0,i.yg)("inlineCode",{parentName:"li"},"reserved")," is subtracted when calculating the remaining available memory of the BE process. Regarding ",(0,i.yg)("inlineCode",{parentName:"li"},"reserved")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"waiting_refresh")," For an introduction to ",(0,i.yg)("inlineCode",{parentName:"li"},"limit 3.01 GB, soft limit 2.71 GB")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"low water mark 3.20 GB, warning water mark 6.40 GB"),", for more information about MemLimit and WaterMark, see ","[Memory limit and watermark calculation method]",".")),(0,i.yg)("h2",{id:"process-memory-statistics-log-analysis"},"Process memory statistics log analysis"),(0,i.yg)("p",null,"When the available memory of the process is insufficient, most memory requests in BE will be aware of it and try to make a predetermined callback method, including triggering Memory GC or Cancel query, etc., and print the process memory statistics log. The default printing interval is 1s. The log is divided into two parts: ",(0,i.yg)("inlineCode",{parentName:"p"},"Process Memory Summary")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary"),". You can find it in ",(0,i.yg)("inlineCode",{parentName:"p"},"be/log/be.INFO")," to confirm whether the current process memory usage is in line with expectations."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"Process Memory Summary:\n    os physical memory 375.81 GB. process memory used 4.09 GB(= 3.49 GB[vm/rss] - 410.44 MB[tc/jemalloc_cache] + 1 GB[reserved] + 0B[waiting_refresh]), limit 3.01 GB, soft limit 2.71 GB. sys available memory 134.41 GB(= 135.41 GB[proc/available] - 1 GB[reserved] - 0B[waiting_refresh]), low water mark 3.20 GB, warning water mark 6.40 GB.\nMemory Tracker Summary:\n    MemTrackerLimiter Label=other, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=schema_change, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=compaction, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=load, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=query, Type=overview, Limit=-1.00 B(-1 B), Used=83.32 MB(87369024 B), Peak=88.33 MB(92616000 B)\n    MemTrackerLimiter Label=global, Type=overview, Limit=-1.00 B(-1 B), Used=199.37 MB(209053204 B), Peak=199.37 MB(209053204 B)\n    MemTrackerLimiter Label=tc/jemalloc_cache, Type=overview, Limit=-1.00 B(-1 B), Used=410.44 MB(430376896 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=tc/jemalloc_metadata, Type=overview, Limit=-1.00 B(-1 B), Used=144 MB(151759440 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=sum of all trackers, Type=overview, Limit=-1.00 B(-1 B), Used=114.80 MB(726799124 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=process resident memory, Type=overview, Limit=-1.00 B(-1 B), Used=3.49 GB(3743289344 B), Peak=3.49 GB(3743289344 B)\n    MemTrackerLimiter Label=reserved_memory, Type=overview, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=-1.00 B(-1 B)\n    MemTrackerLimiter Label=process virtual memory, Type=overview, Limit=-1.00 B(-1 B), Used=44.25 GB(47512956928 B), Peak=44.25 GB(47512956928 B)\n    MemTrackerLimiter Label=Orphan, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DetailsTrackerSet, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=IOBufBlockMemory, Parent Label=DetailsTrackerSet, Used=1.41 MB(1474560 B), Peak=1.41 MB(1474560 B)\n    MemTracker Label=SegmentCache[size], Parent Label=DetailsTrackerSet, Used=1.64 MB(1720543 B), Peak=18.78 MB(19691997 B)\n    MemTracker Label=SchemaCache[number], Parent Label=DetailsTrackerSet, Used=9.21 KB(9428 B), Peak=9.21 KB(9428 B)\n    MemTracker Label=TabletSchemaCache[number], Parent Label=DetailsTrackerSet, Used=9.29 MB(9738798 B), Peak=9.29 MB(9738798 B)\n    MemTracker Label=TabletMeta(experimental), Parent Label=DetailsTrackerSet, Used=25.08 MB(26303456 B), Peak=25.08 MB(26303456 B)\n    MemTracker Label=RuntimeFilterMergeControllerEntity(experimental), Parent Label=DetailsTrackerSet, Used=32.00 B(32 B), Peak=32.00 B(32 B)\n    MemTrackerLimiter Label=SegCompaction, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=PointQueryExecutor, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=BlockCompression, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=RowIdStorageReader, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=SubcolumnsTree, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=S3FileBuffer, Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=DataPageCache[size](AllocByAllocator), Type=global, Limit=-1.00 B(-1 B), Used=198.70 MB(208357157 B), Peak=198.73 MB(208381892 B)\n    MemTrackerLimiter Label=IndexPageCache[size](AllocByAllocator), Type=global, Limit=-1.00 B(-1 B), Used=679.73 KB(696047 B), Peak=679.73 KB(696047 B)\n    MemTrackerLimiter Label=PKIndexPageCache[size](AllocByAllocator), Type=global, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=Query#Id=529e3cb37dff464c-93bd9eafa8944ea6, Type=query, Limit=2.00 GB(2147483648 B), Used=83.32 MB(87369024 B), Peak=88.33 MB(92616000 B)\n    MemTrackerLimiter Label=MemTableTrackerSet, Type=load, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTrackerLimiter Label=SnapshotManager, Type=other, Limit=-1.00 B(-1 B), Used=0(0 B), Peak=0(0 B)\n    MemTracker Label=AllMemTableMemory, Parent Label=DetailsTrackerSet, Used=0(0 B), Peak=0(0 B)\n")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Process Memory Summary")," is the process memory status, refer to ","[Process Memory Status Log Analysis]"," above."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Memory Tracker Summary")," is a summary of the process Memory Tracker, including all Memory Trackers of ",(0,i.yg)("inlineCode",{parentName:"p"},"Type=overview")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"Type=global"),", to help users analyze the current memory status. Refer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/admin-manual/memory-management/overview"},"Overview")," to analyze the meaning of each part of memory."))}B.isMDXComponent=!0}}]);