"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[206987],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>d});var l=n(296540);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var o=l.createContext({}),g=function(e){var a=l.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},u=function(e){var a=g(e.components);return l.createElement(o.Provider,{value:a},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},m=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=g(n),m=t,d=y["".concat(o,".").concat(m)]||y[m]||s[m]||r;return n?l.createElement(d,p(p({ref:a},u),{},{components:n})):l.createElement(d,p({ref:a},u))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,p=new Array(r);p[0]=m;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[y]="string"==typeof e?e:t,p[1]=i;for(var g=2;g<r;g++)p[g]=n[g];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},583913:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>g});var l=n(58168),t=(n(296540),n(15680));const r={title:"\u7f16\u8bd1\u90e8\u7f72",language:"zh-CN"},p=void 0,i={unversionedId:"compute-storage-decoupled/compilation-and-deployment",id:"version-3.0/compute-storage-decoupled/compilation-and-deployment",title:"\u7f16\u8bd1\u90e8\u7f72",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/compute-storage-decoupled/compilation-and-deployment.md",sourceDirName:"compute-storage-decoupled",slug:"/compute-storage-decoupled/compilation-and-deployment",permalink:"/zh-CN/docs/3.0/compute-storage-decoupled/compilation-and-deployment",draft:!1,tags:[],version:"3.0",frontMatter:{title:"\u7f16\u8bd1\u90e8\u7f72",language:"zh-CN"},sidebar:"docs",previous:{title:"Doris \u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u90e8\u7f72\u51c6\u5907",permalink:"/zh-CN/docs/3.0/compute-storage-decoupled/before-deployment"},next:{title:"\u7ba1\u7406 Storage Vault",permalink:"/zh-CN/docs/3.0/compute-storage-decoupled/managing-storage-vault"}},o={},g=[{value:"1. \u6982\u8ff0",id:"1-\u6982\u8ff0",level:2},{value:"2. \u83b7\u53d6\u4e8c\u8fdb\u5236",id:"2-\u83b7\u53d6\u4e8c\u8fdb\u5236",level:2},{value:"2.1 \u76f4\u63a5\u4e0b\u8f7d",id:"21-\u76f4\u63a5\u4e0b\u8f7d",level:3},{value:"2.2 \u7f16\u8bd1\u4ea7\u51fa (\u53ef\u9009)",id:"22-\u7f16\u8bd1\u4ea7\u51fa-\u53ef\u9009",level:3},{value:"3. Meta Service \u90e8\u7f72",id:"3-meta-service-\u90e8\u7f72",level:2},{value:"3.1 \u914d\u7f6e",id:"31-\u914d\u7f6e",level:3},{value:"3.2 \u542f\u52a8\u4e0e\u505c\u6b62",id:"32-\u542f\u52a8\u4e0e\u505c\u6b62",level:3},{value:"4. \u6570\u636e\u56de\u6536\u529f\u80fd\u72ec\u7acb\u90e8\u7f72\uff08\u53ef\u9009\uff09",id:"4-\u6570\u636e\u56de\u6536\u529f\u80fd\u72ec\u7acb\u90e8\u7f72\u53ef\u9009",level:2},{value:"5. FE \u548c BE \u7684\u542f\u52a8\u6d41\u7a0b",id:"5-fe-\u548c-be-\u7684\u542f\u52a8\u6d41\u7a0b",level:2},{value:"5.1 \u542f\u52a8\u987a\u5e8f",id:"51-\u542f\u52a8\u987a\u5e8f",level:3},{value:"5.2 \u542f\u52a8 MASTER \u89d2\u8272\u7684 FE",id:"52-\u542f\u52a8-master-\u89d2\u8272\u7684-fe",level:3},{value:"5.2.1 \u914d\u7f6e fe.conf",id:"521-\u914d\u7f6e-feconf",level:4},{value:"5.2.2 \u542f\u52a8 FE",id:"522-\u542f\u52a8-fe",level:4},{value:"5.3 \u6dfb\u52a0\u5176\u4ed6 FE \u8282\u70b9",id:"53-\u6dfb\u52a0\u5176\u4ed6-fe-\u8282\u70b9",level:3},{value:"5.4 \u6dfb\u52a0 BE \u8282\u70b9",id:"54-\u6dfb\u52a0-be-\u8282\u70b9",level:3},{value:"5.4.1 \u914d\u7f6e be.conf",id:"541-\u914d\u7f6e-beconf",level:4},{value:"5.4.1 \u542f\u52a8\u548c\u6dfb\u52a0 BE",id:"541-\u542f\u52a8\u548c\u6dfb\u52a0-be",level:4},{value:"6. \u521b\u5efa Storage Vault",id:"6-\u521b\u5efa-storage-vault",level:2},{value:"6.1 \u521b\u5efa HDFS  Storage Vault",id:"61-\u521b\u5efa-hdfs--storage-vault",level:3},{value:"6.2 \u521b\u5efa S3  Storage Vault",id:"62-\u521b\u5efa-s3--storage-vault",level:3},{value:"6.3 \u8bbe\u7f6e\u9ed8\u8ba4 Storage Vault",id:"63-\u8bbe\u7f6e\u9ed8\u8ba4-storage-vault",level:3},{value:"7. \u6ce8\u610f\u4e8b\u9879",id:"7-\u6ce8\u610f\u4e8b\u9879",level:2}],u={toc:g},y="wrapper";function s(e){let{components:a,...n}=e;return(0,t.yg)(y,(0,l.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,t.yg)("p",null,"\u672c\u6587\u6863\u8be6\u7ec6\u4ecb\u7ecd\u4e86 Doris \u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u4e0b\u7684\u7f16\u8bd1\u548c\u90e8\u7f72\u6d41\u7a0b\uff0c\u91cd\u70b9\u8bf4\u660e\u4e86\u4e0e\u5b58\u7b97\u4e00\u4f53\u6a21\u5f0f\u7684\u533a\u522b\uff0c\u7279\u522b\u662f\u65b0\u589e Meta Service (MS) \u6a21\u5757\u7684\u7f16\u8bd1\u3001\u914d\u7f6e\u548c\u7ba1\u7406\u3002"),(0,t.yg)("h2",{id:"2-\u83b7\u53d6\u4e8c\u8fdb\u5236"},"2. \u83b7\u53d6\u4e8c\u8fdb\u5236"),(0,t.yg)("h3",{id:"21-\u76f4\u63a5\u4e0b\u8f7d"},"2.1 \u76f4\u63a5\u4e0b\u8f7d"),(0,t.yg)("p",null,"\u5df2\u7f16\u8bd1\u597d\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff08\u5305\u542b\u6240\u6709 Doris \u6a21\u5757\uff09\u53ef\u4ece ",(0,t.yg)("a",{parentName:"p",href:"https://doris.apache.org/download/"},"Doris \u4e0b\u8f7d\u9875\u9762")," \u83b7\u53d6\uff08\u9009\u62e9 3.0.2 \u6216\u66f4\u9ad8\u7248\u672c\uff09\u3002"),(0,t.yg)("h3",{id:"22-\u7f16\u8bd1\u4ea7\u51fa-\u53ef\u9009"},"2.2 \u7f16\u8bd1\u4ea7\u51fa (\u53ef\u9009)"),(0,t.yg)("p",null,"\u4f7f\u7528\u4ee3\u7801\u5e93\u81ea\u5e26\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"build.sh")," \u811a\u672c\u8fdb\u884c\u7f16\u8bd1\u3002\u65b0\u589e\u7684 MS \u6a21\u5757\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"--cloud")," \u53c2\u6570\u7f16\u8bd1\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"sh build.sh --fe --be --cloud \n")),(0,t.yg)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"output")," \u76ee\u5f55\u4e0b\u4f1a\u65b0\u589e ",(0,t.yg)("inlineCode",{parentName:"p"},"ms")," \u76ee\u5f55\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"output\n\u251c\u2500\u2500 be\n\u251c\u2500\u2500 fe\n\u2514\u2500\u2500 ms\n    \u251c\u2500\u2500 bin\n    \u251c\u2500\u2500 conf\n    \u2514\u2500\u2500 lib\n")),(0,t.yg)("h2",{id:"3-meta-service-\u90e8\u7f72"},"3. Meta Service \u90e8\u7f72"),(0,t.yg)("h3",{id:"31-\u914d\u7f6e"},"3.1 \u914d\u7f6e"),(0,t.yg)("p",null,"\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"./conf/doris_cloud.conf")," \u6587\u4ef6\u4e2d\uff0c\u4e3b\u8981\u9700\u8981\u4fee\u6539\u4ee5\u4e0b\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"brpc_listen_port"),"\uff1aMeta Service \u7684\u76d1\u542c\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a 5000\u3002"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fdb_cluster"),"\uff1aFoundationDB \u96c6\u7fa4\u7684\u8fde\u63a5\u4fe1\u606f\uff0c\u90e8\u7f72 FoundationDB \u65f6\u53ef\u4ee5\u83b7\u53d6\u3002(\u5982\u679c\u4f7f\u7528 Doris \u63d0\u4f9b\u7684 fdb_ctl.sh \u90e8\u7f72\u7684\u8bdd\uff0c\u53ef\u5728 ",(0,t.yg)("inlineCode",{parentName:"li"},"$FDB_HOME/conf/fdb.cluster")," \u6587\u4ef6\u91cc\u83b7\u53d6\u8be5\u503c)\u3002")),(0,t.yg)("p",null,"\u793a\u4f8b\u914d\u7f6e\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Shell"},"brpc_listen_port = 5000\nfdb_cluster = xxx:yyy@127.0.0.1:4500\n")),(0,t.yg)("p",null,"\u6ce8\u610f\uff1a",(0,t.yg)("inlineCode",{parentName:"p"},"fdb_cluster")," \u7684\u503c\u5e94\u4e0e FoundationDB \u90e8\u7f72\u673a\u5668\u4e0a\u7684 ",(0,t.yg)("inlineCode",{parentName:"p"},"/etc/foundationdb/fdb.cluster")," \u6587\u4ef6\u5185\u5bb9\u4e00\u81f4 (\u5982\u679c\u4f7f\u7528 Doris \u63d0\u4f9b\u7684 fdb_ctl.sh \u90e8\u7f72\u7684\u8bdd\uff0c\u53ef\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"$FDB_HOME/conf/fdb.cluster")," \u6587\u4ef6\u91cc\u83b7\u53d6\u8be5\u503c)\u3002"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"\u793a\u4f8b, \u6587\u4ef6\u7684\u6700\u540e\u4e00\u884c\u5c31\u662f\u8981\u586b\u5230doris_cloud.conf \u91cc fdb_cluster \u5b57\u6bb5\u7684\u503c")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"cat /etc/foundationdb/fdb.cluster\n\n# DO NOT EDIT!\n# This file is auto-generated, it is not to be edited by hand.\ncloud_ssb:A83c8Y1S3ZbqHLL4P4HHNTTw0A83CuHj@127.0.0.1:4500\n")),(0,t.yg)("h3",{id:"32-\u542f\u52a8\u4e0e\u505c\u6b62"},"3.2 \u542f\u52a8\u4e0e\u505c\u6b62"),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"\u73af\u5883\u8981\u6c42")),(0,t.yg)("p",null,"\u786e\u4fdd\u5df2\u6b63\u786e\u8bbe\u7f6e ",(0,t.yg)("inlineCode",{parentName:"p"},"JAVA_HOME")," \u73af\u5883\u53d8\u91cf\uff0c\u6307\u5411 OpenJDK 17\uff0c\u8fdb\u5165 ",(0,t.yg)("inlineCode",{parentName:"p"},"ms")," \u76ee\u5f55\u3002"),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"\u542f\u52a8\u547d\u4ee4")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Shell"},"export JAVA_HOME=${path_to_jdk_17}\nbin/start.sh --daemon\n")),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"\u505c\u6b62\u547d\u4ee4")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"bin/stop.sh\n")),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"\u9a8c\u8bc1\u542f\u52a8")),(0,t.yg)("p",null,"\u68c0\u67e5 ",(0,t.yg)("inlineCode",{parentName:"p"},"doris_cloud.out")," \u6587\u4ef6\u4e2d\u662f\u5426\u6709 ",(0,t.yg)("inlineCode",{parentName:"p"},"successfully started")," \u7684\u8f93\u51fa\u4fe1\u606f\u3002"),(0,t.yg)("p",null,"\u751f\u4ea7\u73af\u5883\u4e2d\u8bf7\u786e\u4fdd\u81f3\u5c11\u6709 3 \u4e2a Meta Service \u8282\u70b9\u3002"),(0,t.yg)("h2",{id:"4-\u6570\u636e\u56de\u6536\u529f\u80fd\u72ec\u7acb\u90e8\u7f72\u53ef\u9009"},"4. \u6570\u636e\u56de\u6536\u529f\u80fd\u72ec\u7acb\u90e8\u7f72\uff08\u53ef\u9009\uff09"),(0,t.yg)("admonition",{type:"info"},(0,t.yg)("p",{parentName:"admonition"},"Meta Service \u672c\u8eab\u5177\u5907\u4e86\u5143\u6570\u636e\u7ba1\u7406\u548c\u56de\u6536\u529f\u80fd\uff0c\u8fd9\u4e24\u4e2a\u529f\u80fd\u53ef\u4ee5\u72ec\u7acb\u90e8\u7f72\uff0c\u5982\u679c\u4f60\u60f3\u72ec\u7acb\u90e8\u7f72\uff0c\u53ef\u4ee5\u53c2\u8003\u8fd9\u4e00\u8282\u3002")),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"\u51c6\u5907\u5de5\u4f5c")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u521b\u5efa\u65b0\u7684\u5de5\u4f5c\u76ee\u5f55\uff08\u5982 ",(0,t.yg)("inlineCode",{parentName:"p"},"recycler"),"\uff09\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u590d\u5236 ",(0,t.yg)("inlineCode",{parentName:"p"},"ms")," \u76ee\u5f55\u5185\u5bb9\u5230\u65b0\u76ee\u5f55\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"cp -r ms recycler\n")))),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"\u914d\u7f6e")),(0,t.yg)("p",null,"\u5728\u65b0\u76ee\u5f55\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u4fee\u6539 BRPC \u76d1\u542c\u7aef\u53e3 ",(0,t.yg)("inlineCode",{parentName:"p"},"brpc_listen_port")," \u548c ",(0,t.yg)("inlineCode",{parentName:"p"},"fdb_cluster")," \u7684\u503c\u3002"),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"\u542f\u52a8\u6570\u636e\u56de\u6536\u529f\u80fd")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Shell"},"export JAVA_HOME=${path_to_jdk_17}\nbin/start.sh --recycler --daemon\n")),(0,t.yg)("p",null,(0,t.yg)("em",{parentName:"p"},"\u542f\u52a8\u4ec5\u5143\u6570\u636e\u64cd\u4f5c\u529f\u80fd")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Shell"},"export JAVA_HOME=${path_to_jdk_17}\nbin/start.sh --meta-service --daemon\n")),(0,t.yg)("h2",{id:"5-fe-\u548c-be-\u7684\u542f\u52a8\u6d41\u7a0b"},"5. FE \u548c BE \u7684\u542f\u52a8\u6d41\u7a0b"),(0,t.yg)("p",null,"\u672c\u8282\u8be6\u7ec6\u8bf4\u660e\u4e86\u5728\u5b58\u7b97\u5206\u79bb\u67b6\u6784\u4e0b\u542f\u52a8 FE\uff08Frontend\uff09\u548c BE\uff08Backend\uff09\u7684\u6b65\u9aa4\u3002"),(0,t.yg)("h3",{id:"51-\u542f\u52a8\u987a\u5e8f"},"5.1 \u542f\u52a8\u987a\u5e8f"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u4ee5 MASTER \u89d2\u8272\u542f\u52a8\u5b9e\u4f8b\u7684\u7b2c\u4e00\u4e2a FE"),(0,t.yg)("li",{parentName:"ol"},"\u5411\u5b9e\u4f8b\u4e2d\u6dfb\u52a0\u5176\u4ed6 FE \u548c BE"),(0,t.yg)("li",{parentName:"ol"},"\u6dfb\u52a0\u7b2c\u4e00\u4e2a Storage Vault")),(0,t.yg)("h3",{id:"52-\u542f\u52a8-master-\u89d2\u8272\u7684-fe"},"5.2 \u542f\u52a8 MASTER \u89d2\u8272\u7684 FE"),(0,t.yg)("h4",{id:"521-\u914d\u7f6e-feconf"},"5.2.1 \u914d\u7f6e fe.conf"),(0,t.yg)("p",null,"\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"fe.conf")," \u6587\u4ef6\u4e2d\uff0c\u9700\u8981\u914d\u7f6e\u4ee5\u4e0b\u5173\u952e\u53c2\u6570\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"deploy_mode")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6307\u5b9a doris \u542f\u52a8\u6a21\u5f0f"),(0,t.yg)("li",{parentName:"ul"},"\u683c\u5f0f\uff1acloud \u8868\u793a\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\uff0c\u5176\u5b83\u5b58\u7b97\u4e00\u4f53\u6a21\u5f0f"),(0,t.yg)("li",{parentName:"ul"},"\u793a\u4f8b\uff1a",(0,t.yg)("inlineCode",{parentName:"li"},"cloud")))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"cluster_id")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5b58\u7b97\u5206\u79bb\u67b6\u6784\u4e0b\u96c6\u7fa4\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u4e0d\u540c\u7684\u96c6\u7fa4\u5fc5\u987b\u8bbe\u7f6e\u4e0d\u540c\u7684 cluster_id"),(0,t.yg)("li",{parentName:"ul"},"\u683c\u5f0f\uff1aint \u7c7b\u578b"),(0,t.yg)("li",{parentName:"ul"},"\u793a\u4f8b\uff1a",(0,t.yg)("inlineCode",{parentName:"li"},"12345678")))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"meta_service_endpoint")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aMeta Service \u7684\u5730\u5740\u548c\u7aef\u53e3"),(0,t.yg)("li",{parentName:"ul"},"\u683c\u5f0f\uff1a",(0,t.yg)("inlineCode",{parentName:"li"},"IP\u5730\u5740:\u7aef\u53e3\u53f7")),(0,t.yg)("li",{parentName:"ul"},"\u793a\u4f8b\uff1a",(0,t.yg)("inlineCode",{parentName:"li"},"127.0.0.1:5000"),", \u53ef\u4ee5\u7528\u9017\u53f7\u5206\u5272\u914d\u7f6e\u591a\u4e2ameta service\u3002")))),(0,t.yg)("h4",{id:"522-\u542f\u52a8-fe"},"5.2.2 \u542f\u52a8 FE"),(0,t.yg)("p",null,"\u542f\u52a8\u547d\u4ee4\u793a\u4f8b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start_fe.sh --daemon\n")),(0,t.yg)("p",null,"\u7b2c\u4e00\u4e2a FE \u8fdb\u7a0b\u521d\u59cb\u5316\u96c6\u7fa4\u5e76\u4ee5 FOLLOWER \u89d2\u8272\u5de5\u4f5c\u3002\u4f7f\u7528 mysql \u5ba2\u6237\u7aef\u8fde\u63a5 FE \u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"show frontends")," \u786e\u8ba4\u521a\u624d\u542f\u52a8\u7684 FE \u662f master\u3002"),(0,t.yg)("h3",{id:"53-\u6dfb\u52a0\u5176\u4ed6-fe-\u8282\u70b9"},"5.3 \u6dfb\u52a0\u5176\u4ed6 FE \u8282\u70b9"),(0,t.yg)("p",null,"\u5176\u4ed6\u8282\u70b9\u540c\u6837\u6839\u636e\u4e0a\u8ff0\u6b65\u9aa4\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u5e76\u542f\u52a8\uff0c\u4f7f\u7528 mysql \u5ba2\u6237\u7aef\u8fde\u63a5 Master \u89d2\u8272\u7684 FE\uff0c\u5e76\u7528\u4ee5\u4e0b SQL \u547d\u4ee4\u6dfb\u52a0\u989d\u5916\u7684 FE \u8282\u70b9\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM ADD FOLLOWER "host:port";\n')),(0,t.yg)("p",null,"\u5c06 ",(0,t.yg)("inlineCode",{parentName:"p"},"host:port")," \u66ff\u6362\u4e3a FE \u8282\u70b9\u7684\u5b9e\u9645\u5730\u5740\u548c\u7f16\u8f91\u65e5\u5fd7\u7aef\u53e3\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u89c1 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/3.0/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-FOLLOWER"},"ADD FOLLOWER")," \u548c ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/3.0/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-OBSERVER"},"ADD OBSERVER"),"\u3002"),(0,t.yg)("p",null,"\u751f\u4ea7\u73af\u5883\u4e2d\u8bf7\u786e\u4fdd\u5728 FOLLOWER \u89d2\u8272\u4e2d\u7684\u524d\u7aef (FE) \u8282\u70b9\u603b\u6570\uff0c\u5305\u62ec\u7b2c\u4e00\u4e2a FE\uff0c\u4fdd\u6301\u4e3a\u5947\u6570\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u4e09\u4e2a FOLLOWER \u5c31\u8db3\u591f\u4e86\u3002OBSERVER \u89d2\u8272\u7684\u524d\u7aef\u8282\u70b9\u53ef\u4ee5\u662f\u4efb\u610f\u6570\u91cf\u3002"),(0,t.yg)("h3",{id:"54-\u6dfb\u52a0-be-\u8282\u70b9"},"5.4 \u6dfb\u52a0 BE \u8282\u70b9"),(0,t.yg)("p",null,"\u8981\u5411\u96c6\u7fa4\u6dfb\u52a0 Backend \u8282\u70b9\uff0c\u8bf7\u5bf9\u6bcf\u4e2a Backend \u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,t.yg)("h4",{id:"541-\u914d\u7f6e-beconf"},"5.4.1 \u914d\u7f6e be.conf"),(0,t.yg)("p",null,"\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"be.conf")," \u6587\u4ef6\u4e2d\uff0c\u9700\u8981\u914d\u7f6e\u4ee5\u4e0b\u5173\u952e\u53c2\u6570\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"deploy_mode")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6307\u5b9a doris \u542f\u52a8\u6a21\u5f0f"),(0,t.yg)("li",{parentName:"ul"},"\u683c\u5f0f\uff1acloud \u8868\u793a\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\uff0c\u5176\u5b83\u5b58\u7b97\u4e00\u4f53\u6a21\u5f0f"),(0,t.yg)("li",{parentName:"ul"},"\u793a\u4f8b\uff1a",(0,t.yg)("inlineCode",{parentName:"li"},"cloud")))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"file_cache_path")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u63cf\u8ff0: \u7528\u4e8e\u6587\u4ef6\u7f13\u5b58\u7684\u78c1\u76d8\u8def\u5f84\u548c\u5176\u4ed6\u53c2\u6570\uff0c\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8868\u793a\uff0c\u6bcf\u4e2a\u78c1\u76d8\u4e00\u9879\u3002",(0,t.yg)("inlineCode",{parentName:"li"},"path")," \u6307\u5b9a\u78c1\u76d8\u8def\u5f84\uff0c",(0,t.yg)("inlineCode",{parentName:"li"},"total_size")," \u9650\u5236\u7f13\u5b58\u7684\u5927\u5c0f\uff1b-1 \u6216 0 \u5c06\u4f7f\u7528\u6574\u4e2a\u78c1\u76d8\u7a7a\u95f4\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u683c\u5f0f: ",'[{"path":"/path/to/file_cache","total_size":21474836480},{"path":"/path/to/file_cache2","total_size":21474836480}]'),(0,t.yg)("li",{parentName:"ul"},"\u793a\u4f8b: ",'[{"path":"/path/to/file_cache","total_size":21474836480},{"path":"/path/to/file_cache2","total_size":21474836480}]'),(0,t.yg)("li",{parentName:"ul"},"\u9ed8\u8ba4: ",'[{"path":"${DORIS_HOME}/file_cache"}]')))),(0,t.yg)("h4",{id:"541-\u542f\u52a8\u548c\u6dfb\u52a0-be"},"5.4.1 \u542f\u52a8\u548c\u6dfb\u52a0 BE"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u542f\u52a8 Backend\uff1a"),(0,t.yg)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 Backend\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start_be.sh --daemon\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5c06 Backend \u6dfb\u52a0\u5230\u96c6\u7fa4\uff1a"),(0,t.yg)("p",{parentName:"li"},"\u4f7f\u7528 MySQL \u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u4efb\u610f Frontend\uff0c\u5e76\u6267\u884c\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM ADD BACKEND "<ip>:<heartbeat_service_port>" [PROTERTIES propertires];\n')),(0,t.yg)("p",{parentName:"li"},"\u5c06 ",(0,t.yg)("inlineCode",{parentName:"p"},"<ip>")," \u66ff\u6362\u4e3a\u65b0 Backend \u7684 IP \u5730\u5740\uff0c\u5c06 ",(0,t.yg)("inlineCode",{parentName:"p"},"<heartbeat_service_port>")," \u66ff\u6362\u4e3a\u5176\u914d\u7f6e\u7684\u5fc3\u8df3\u670d\u52a1\u7aef\u53e3\uff08\u9ed8\u8ba4\u4e3a 9050\uff09\u3002"),(0,t.yg)("p",{parentName:"li"},"\u53ef\u4ee5\u901a\u8fc7 PROPERTIES \u8bbe\u7f6e BE \u6240\u5728\u7684 \u8ba1\u7b97\u7ec4\u3002"),(0,t.yg)("p",{parentName:"li"},"\u66f4\u8be6\u7ec6\u7684\u7528\u6cd5\u8bf7\u53c2\u8003 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/3.0/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BACKEND"},"ADD BACKEND")," \u548c ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/3.0/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BACKEND"},"REMOVE BACKEND"),"\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u9a8c\u8bc1 Backend \u72b6\u6001\uff1a"),(0,t.yg)("p",{parentName:"li"},"\u68c0\u67e5 Backend \u65e5\u5fd7\u6587\u4ef6\uff08",(0,t.yg)("inlineCode",{parentName:"p"},"be.log"),"\uff09\u4ee5\u786e\u4fdd\u5b83\u5df2\u6210\u529f\u542f\u52a8\u5e76\u52a0\u5165\u96c6\u7fa4\u3002"),(0,t.yg)("p",{parentName:"li"},"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b SQL \u547d\u4ee4\u68c0\u67e5 Backend \u72b6\u6001\uff1a"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW BACKENDS;\n")),(0,t.yg)("p",{parentName:"li"},"\u8fd9\u5c06\u663e\u793a\u96c6\u7fa4\u4e2d\u6240\u6709 Backend \u53ca\u5176\u5f53\u524d\u72b6\u6001\u3002"))),(0,t.yg)("h2",{id:"6-\u521b\u5efa-storage-vault"},"6. \u521b\u5efa Storage Vault"),(0,t.yg)("p",null," Storage Vault \u662f Doris \u5b58\u7b97\u5206\u79bb\u67b6\u6784\u4e2d\u7684\u91cd\u8981\u7ec4\u4ef6\u3002\u5b83\u4eec\u4ee3\u8868\u4e86\u5b58\u50a8\u6570\u636e\u7684\u5171\u4eab\u5b58\u50a8\u5c42\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 HDFS \u6216\u517c\u5bb9 S3 \u7684\u5bf9\u8c61\u5b58\u50a8\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a Storage Vault \u3002\u53ef\u4ee5\u5c06\u4e00\u4e2a Storage Vault \u8bbe\u7f6e\u4e3a\u9ed8\u8ba4 Storage Vault \uff0c\u7cfb\u7edf\u8868\u548c\u672a\u6307\u5b9a Storage Vault \u7684\u8868\u90fd\u5c06\u5b58\u50a8\u5728\u8fd9\u4e2a\u9ed8\u8ba4 Storage Vault \u4e2d\u3002\u9ed8\u8ba4 Storage Vault \u4e0d\u80fd\u88ab\u5220\u9664\u3002\u4ee5\u4e0b\u662f\u4e3a\u60a8\u7684 Doris \u96c6\u7fa4\u521b\u5efa Storage Vault \u7684\u65b9\u6cd5\uff1a"),(0,t.yg)("h3",{id:"61-\u521b\u5efa-hdfs--storage-vault"},"6.1 \u521b\u5efa HDFS  Storage Vault"),(0,t.yg)("p",null,"\u8981\u4f7f\u7528 SQL \u521b\u5efa Storage Vault \uff0c\u8bf7\u4f7f\u7528 MySQL \u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u60a8\u7684 Doris \u96c6\u7fa4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS hdfs_vault\n    PROPERTIES (\n    "type"="hdfs",\n    "fs.defaultFS"="hdfs://127.0.0.1:8020"\n    );\n')),(0,t.yg)("h3",{id:"62-\u521b\u5efa-s3--storage-vault"},"6.2 \u521b\u5efa S3  Storage Vault"),(0,t.yg)("p",null,"\u8981\u4f7f\u7528\u517c\u5bb9 S3 \u7684\u5bf9\u8c61\u5b58\u50a8\u521b\u5efa Storage Vault \uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u4f7f\u7528 MySQL \u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u60a8\u7684 Doris \u96c6\u7fa4\u3002")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u6267\u884c\u4ee5\u4e0b SQL \u547d\u4ee4\u6765\u521b\u5efa S3  Storage Vault \uff1a"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE STORAGE VAULT IF NOT EXISTS s3_vault\n    PROPERTIES (\n    "type"="S3",\n    "s3.endpoint"="s3.us-east-1.amazonaws.com",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.region" = "us-east-1",\n    "s3.root.path" = "ssb_sf1_p2_s3",\n    "s3.bucket" = "doris-build-1308700295",\n    "provider" = "S3"\n    );\n')),(0,t.yg)("p",null,"\u8981\u5728\u5176\u4ed6\u5bf9\u8c61\u5b58\u50a8\u4e0a\u521b\u5efa Storage Vault \uff0c\u8bf7\u53c2\u8003 ",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-STORAGE-VAULT"},"\u521b\u5efa Storage Vault "),"\u3002"),(0,t.yg)("h3",{id:"63-\u8bbe\u7f6e\u9ed8\u8ba4-storage-vault"},"6.3 \u8bbe\u7f6e\u9ed8\u8ba4 Storage Vault"),(0,t.yg)("p",null,"\u4f7f\u7528\u5982\u4e0b SQL \u8bed\u53e5\u8bbe\u7f6e\u4e00\u4e2a\u9ed8\u8ba4 Storage Vault \u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"SET <storage_vault_name> AS DEFAULT STORAGE VAULT\n")),(0,t.yg)("h2",{id:"7-\u6ce8\u610f\u4e8b\u9879"},"7. \u6ce8\u610f\u4e8b\u9879"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4ec5\u5143\u6570\u636e\u64cd\u4f5c\u529f\u80fd\u7684 Meta Service \u8fdb\u7a0b\u5e94\u4f5c\u4e3a FE \u548c BE \u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"meta_service_endpoint")," \u914d\u7f6e\u76ee\u6807\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u6570\u636e\u56de\u6536\u529f\u80fd\u8fdb\u7a0b\u4e0d\u5e94\u4f5c\u4e3a ",(0,t.yg)("inlineCode",{parentName:"li"},"meta_service_endpoint")," \u914d\u7f6e\u76ee\u6807\u3002")))}s.isMDXComponent=!0}}]);