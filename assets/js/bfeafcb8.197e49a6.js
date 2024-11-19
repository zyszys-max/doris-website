"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[127286],{15680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>h});var a=o(296540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(o),c=r,h=p["".concat(s,".").concat(c)]||p[c]||g[c]||n;return o?a.createElement(h,i(i({ref:t},u),{},{components:o})):a.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<n;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},297051:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=o(58168),r=(o(296540),o(15680));const n={title:"Grouping Workload Groups",language:"en"},i=void 0,l={unversionedId:"admin-manual/resource-admin/group-workload-groups",id:"version-2.1/admin-manual/resource-admin/group-workload-groups",title:"Grouping Workload Groups",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/resource-admin/group-workload-groups.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/group-workload-groups",permalink:"/docs/admin-manual/resource-admin/group-workload-groups",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Grouping Workload Groups",language:"en"},sidebar:"docs",previous:{title:"Workload Group",permalink:"/docs/admin-manual/resource-admin/workload-group"},next:{title:"Workload Policy",permalink:"/docs/admin-manual/resource-admin/workload-policy"}},s={},d=[{value:"Recommended usage",id:"recommended-usage",level:2},{value:"Principle explanation",id:"principle-explanation",level:2},{value:"Default situation",id:"default-situation",level:3},{value:"Add a new BE cluster",id:"add-a-new-be-cluster",level:3},{value:"Grouping Workload Groups",id:"grouping-workload-groups",level:3}],u={toc:d},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Workload Group grouping function is commonly used when there are multiple physically isolated BE clusters in a Doris cluster. Workload Groups can be grouped, and different groups of Workload Groups can be bound to different BE clusters."),(0,r.yg)("h2",{id:"recommended-usage"},"Recommended usage"),(0,r.yg)("p",null,"If there are currently two isolated BE sub-clusters in the cluster, named rg1 and rg2, and these two groups are completely physically isolated, with no shared data or computation, the recommended configuration approach is as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Reduce the resource allocation for the normal group as much as possible, serving as a fallback query group. For example, if a query does not carry any Workload Group information, it will automatically use this default group to avoid query failures.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create corresponding Workload Groups for these two sub-clusters and bind them to the respective sub-clusters. For instance, create the first Workload Group named wg1 for the rg1 cluster, which includes Workload Group a and Workload Group b. Create the second Workload Group named wg2 for the rg2 cluster, which includes Workload Group c and Workload Group d."))),(0,r.yg)("p",null,"The final effect will be as follows:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"rg1_rg2_workload_group",src:o(73022).A,width:"2486",height:"952"})),(0,r.yg)("p",null,"The operating process is as follows:"),(0,r.yg)("p",null,"Step 1: Bind the data replicas to the BE nodes, which essentially completes the division of the rg1 and rg2 sub-clusters, achieving isolation of the data replicas. If the cluster has already completed the division into sub-clusters, this step can be skipped, and you can proceed directly to Step 2."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Bind the data replicas to the rg1 and rg2 clusters.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'-- When creating tables for the rg1 cluster, it is necessary to specify that the replicas are distributed to rg1.\ncreate table table1\n(k1 int, k2 int)\ndistributed by hash(k1) buckets 1\nproperties(\n    "replication_allocation"="tag.location.rg1:3"\n)\n\n-- When creating tables for the rg2 cluster, it is necessary to specify that the replicas are distributed to rg2.\ncreate table table2\n(k1 int, k2 int)\ndistributed by hash(k1) buckets 1\nproperties(\n    "replication_allocation"="tag.location.rg2:3"\n)\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Bind the BE nodes to the rg1 and rg2 clusters.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'-- Bind be1 and be2 to the rg1 cluster.\nalter system modify backend "be1:9050" set ("tag.location" = "rg1");\nalter system modify backend "be2:9050" set ("tag.location" = "rg1");\n\n-- Bind be3 and be3 to the rg2 cluster.\nalter system modify backend "be3:9050" set ("tag.location" = "rg2");\nalter system modify backend "be4:9050" set ("tag.location" = "rg2");\n')),(0,r.yg)("p",null,"Step 2: Bind the workload group to the BE nodes."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a new workload group and bind it to wg1 and wg2 respectively.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'-- Create a workload group for the wg1 group.\ncreate workload group a properties ("memory_limit"="45%","tag"="wg1")\ncreate workload group b properties ("memory_limit"="45%","tag"="wg1")\n\n-- Create a workload group for the wg2 group.\ncreate workload group c properties ("memory_limit"="45%","tag"="wg2")\ncreate workload group d properties ("memory_limit"="45%","tag"="wg2")\n')),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Bind the BE to wg1 and wg2. At this point, Workload Group a and b will only take effect on be1 and be2, while Workload Group c and d will only take effect on be3 and be4.")),(0,r.yg)("p",null,"(Note that when modifying, the tag.location is specified here because the current interface for modifying BE configurations does not support incremental updates. Therefore, when adding new attributes, you must also carry over the existing attributes.)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'-- Bind be1 and be2 to wg1.\nalter system modify backend "be1:9050" set ("tag.location" = "rg1",tag.workload_group="wg1");\nalter system modify backend "be2:9050" set ("tag.location" = "rg1",tag.workload_group="wg1");\n\n-- Bind be3 and be4 to wg2.\nalter system modify backend "be3:9050" set ("tag.location" = "rg2",tag.workload_group="wg2");\nalter system modify backend "be4:9050" set ("tag.location" = "rg2",tag.workload_group="wg2");\n')),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Reduce the resource usage of the normal workload group, serving as a fallback workload group when users do not carry Workload Group information. It can be observed that no tag attributes have been specified for the normal group, allowing it to be effective on all BE nodes.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'alter workload group normal properties("memory_limit=1%")\n')),(0,r.yg)("p",null,"To simplify maintenance, the BE's tag.location and tag.workload_group can use the same value, effectively merging rg1 with wg1 and rg2 with wg2 under a unified name. For example, set the BE's tag.workload_group to rg1, and also specify the tag for Workload Group a and b as rg1."),(0,r.yg)("h2",{id:"principle-explanation"},"Principle explanation"),(0,r.yg)("h3",{id:"default-situation"},"Default situation"),(0,r.yg)("p",null,"The user has created a new Doris cluster with only one BE (defaulting to the default group). The system typically creates a group named normal by default. The user then creates a Workload Group A, with each group allocated 50% of the memory. At this point, the distribution of Workload Groups in the cluster is as follows:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"group_wg_default",src:o(949392).A,width:"568",height:"714"})),(0,r.yg)("p",null,"If a new BE named BE2 is added at this point, the Workload Group distribution in the new BE will be as follows:\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"group_wg_add_be",src:o(986424).A,width:"1124",height:"748"})),(0,r.yg)("p",null,"The distribution of Workload Groups in the new BE is the same as in the existing BE."),(0,r.yg)("h3",{id:"add-a-new-be-cluster"},"Add a new BE cluster"),(0,r.yg)("p",null,"Doris supports the feature of physical isolation for BE nodes. When a new BE node (named BE3) is added and assigned to a separate group (the new BE group is named vip_group), the distribution of Workload Groups is as follows:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"group_wg_add_cluster",src:o(689565).A,width:"1280",height:"556"})),(0,r.yg)("p",null,"It can be seen that by default, the Workload Group in the system is effective across all sub-clusters, which may have certain limitations in some scenarios."),(0,r.yg)("h3",{id:"grouping-workload-groups"},"Grouping Workload Groups"),(0,r.yg)("p",null,"Suppose there are two physically isolated BE clusters in the cluster: vip_group and default, serving different business entities. These two entities may have different requirements for load management. For instance, vip_group may need to create more Workload Groups, and the resource configurations for each Workload Group may differ significantly from those of the default group."),(0,r.yg)("p",null,"In this case, the functionality of Workload Group grouping is needed to address this issue. For example, the vip_group cluster needs to create three Workload Groups, each of which can obtain equal resources."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"group_wg_two_group",src:o(223125).A,width:"1280",height:"519"})),(0,r.yg)("p",null,"The user has created three workload groups, named vip_wg_1, vip_wg_2, and vip_wg_3, and specified the tag for the workload groups as vip_wg. This means that these three workload groups are categorized into one group, and their combined memory resource allocation cannot exceed 100%."),(0,r.yg)("p",null,"At the same time, the tag.workload_group attribute for BE3 is set to vip_wg, meaning that only Workload Groups with the tag attribute set to vip_wg will take effect on BE3."),(0,r.yg)("p",null,"BE1 and BE2 have their tag.workload_group attribute set to default_wg, and the Workload Groups normal and A are also assigned the tag default_wg, so normal and A will only take effect on BE1 and BE2."),(0,r.yg)("p",null,"It can be simply understood that BE1 and BE2 form one sub-cluster, which has two Workload Groups: normal and A; while BE3 forms another sub-cluster, which has three Workload Groups: vip_wg_1, vip_wg_2, and vip_wg_3."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"NOTE\uff1a"),(0,r.yg)("p",{parentName:"admonition"},"It can be noted that the BE has two attributes: tag.location and tag.workload_group, which are not directly related."),(0,r.yg)("p",{parentName:"admonition"},"The tag.location is used to specify which data replica group the BE belongs to. The data replicas also have a location attribute, and the replicas are distributed to BEs with the same location attribute, thereby achieving physical resource isolation."),(0,r.yg)("p",{parentName:"admonition"},"The tag.workload_group is used to specify which Workload Group the BE belongs to. Workload Groups also have a tag attribute to indicate which group they belong to, and Workload Groups will only take effect on BEs with the specified grouping."),(0,r.yg)("p",{parentName:"admonition"},"In the Doris integrated storage and computing mode, data replicas and computation are typically bound together. Therefore, it is also recommended that the values of BE's tag.location and tag.workload_group be the same value.")),(0,r.yg)("p",null,"\"The current matching rules for the Workload Group tag and the BE's tag.workload_group are as follows:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"When the Workload Group tag is empty, this Workload Group can be sent to all BEs, regardless of whether the BE has specified a tag."),(0,r.yg)("li",{parentName:"ol"},"When the Workload Group tag is not empty, the Workload Group will only be sent to BEs with the same tag.")))}g.isMDXComponent=!0},986424:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/group_wg_add_be-6ff8cb397fc7be74c0e5659375c2b63a.png"},689565:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/group_wg_add_cluster-6f8e28d49262916ba45ad906ac2bb46f.png"},949392:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/group_wg_default-1bb5ea79d842168787cee50f8693212a.png"},223125:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/group_wg_two_group-d0ab5233963abead0106bc5a870cfaad.png"},73022:(e,t,o)=>{o.d(t,{A:()=>a});const a=o.p+"assets/images/rg1_rg2_workload_group-2bd04033f5eb9e2d17261be3dbcf69ca.png"}}]);