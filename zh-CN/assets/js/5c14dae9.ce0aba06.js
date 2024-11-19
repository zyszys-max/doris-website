"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[201843],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>u});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},y=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),g=m(t),d=r,u=g["".concat(p,".").concat(d)]||g[d]||s[d]||l;return t?a.createElement(u,i(i({ref:n},y),{},{components:t})):a.createElement(u,i({ref:n},y))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},819721:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=t(58168),r=(t(296540),t(15680));const l={title:"FQDN",language:"zh-CN"},i=void 0,o={unversionedId:"admin-manual/cluster-management/fqdn",id:"version-3.0/admin-manual/cluster-management/fqdn",title:"FQDN",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/cluster-management/fqdn.md",sourceDirName:"admin-manual/cluster-management",slug:"/admin-manual/cluster-management/fqdn",permalink:"/zh-CN/docs/3.0/admin-manual/cluster-management/fqdn",draft:!1,tags:[],version:"3.0",frontMatter:{title:"FQDN",language:"zh-CN"},sidebar:"docs",previous:{title:"\u65f6\u533a",permalink:"/zh-CN/docs/3.0/admin-manual/cluster-management/time-zone"},next:{title:"\u6570\u636e\u5907\u4efd",permalink:"/zh-CN/docs/3.0/admin-manual/data-admin/backup"}},p={},m=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u65b0\u96c6\u7fa4\u542f\u7528 FQDN",id:"\u65b0\u96c6\u7fa4\u542f\u7528-fqdn",level:3},{value:"K8s \u90e8\u7f72 Doris",id:"k8s-\u90e8\u7f72-doris",level:3},{value:"\u670d\u52a1\u5668\u53d8\u66f4 IP",id:"\u670d\u52a1\u5668\u53d8\u66f4-ip",level:3},{value:"\u65e7\u96c6\u7fa4\u542f\u7528 FQDN",id:"\u65e7\u96c6\u7fa4\u542f\u7528-fqdn",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],y={toc:m},g="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u542f\u7528\u57fa\u4e8e FQDN\uff08Fully Qualified Domain Name\uff0c\u5b8c\u5168\u9650\u5b9a\u57df\u540d\uff09\u4f7f\u7528 Apache Doris\u3002FQDN \u662f Internet \u4e0a\u7279\u5b9a\u8ba1\u7b97\u673a\u6216\u4e3b\u673a\u7684\u5b8c\u6574\u57df\u540d\u3002"),(0,r.yg)("p",null,"Doris \u652f\u6301 FQDN \u4e4b\u540e\uff0c\u5404\u8282\u70b9\u4e4b\u95f4\u901a\u4fe1\u5b8c\u5168\u57fa\u4e8e FQDN\u3002\u6dfb\u52a0\u5404\u7c7b\u8282\u70b9\u65f6\u5e94\u76f4\u63a5\u6307\u5b9a FQDN\uff0c\u4f8b\u5982\u6dfb\u52a0 BE \u8282\u70b9\u7684\u547d\u4ee4\u4e3a",(0,r.yg)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD BACKEND "be_host:heartbeat_service_port"'),"\uff0c"),(0,r.yg)("p",null,'"be_host" \u6b64\u524d\u662f BE \u8282\u70b9\u7684 IP\uff0c\u542f\u52a8 FQDN \u540e\uff0cbe_host \u5e94\u6307\u5b9a BE \u8282\u70b9\u7684 FQDN\u3002'),(0,r.yg)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"fe.conf \u6587\u4ef6 \u8bbe\u7f6e ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_fqdn_mode = true"),"\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u673a\u5668\u90fd\u5fc5\u987b\u914d\u7f6e\u6709\u4e3b\u673a\u540d\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5fc5\u987b\u5728\u96c6\u7fa4\u4e2d\u6bcf\u53f0\u673a\u5668\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/hosts")," \u6587\u4ef6\u4e2d\u6307\u5b9a\u96c6\u7fa4\u4e2d\u5176\u4ed6\u673a\u5668\u5bf9\u5e94\u7684 IP \u5730\u5740\u548c FQDN\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"/etc/hosts \u6587\u4ef6\u4e2d\u4e0d\u80fd\u6709\u91cd\u590d\u7684 IP \u5730\u5740\u3002"))),(0,r.yg)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,r.yg)("h3",{id:"\u65b0\u96c6\u7fa4\u542f\u7528-fqdn"},"\u65b0\u96c6\u7fa4\u542f\u7528 FQDN"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u51c6\u5907\u673a\u5668\uff0c\u4f8b\u5982\u60f3\u90e8\u7f72 3FE 3BE \u7684\u96c6\u7fa4\uff0c\u53ef\u4ee5\u51c6\u5907 6 \u53f0\u673a\u5668\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6bcf\u53f0\u673a\u5668\u6267\u884c",(0,r.yg)("inlineCode",{parentName:"p"},"host"),"\u8fd4\u56de\u7ed3\u679c\u90fd\u552f\u4e00\uff0c\u5047\u8bbe\u516d\u53f0\u673a\u5668\u7684\u6267\u884c\u7ed3\u679c\u5206\u522b\u4e3a fe1,fe2,fe3,be1,be2,be3\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728 6 \u53f0\u673a\u5668\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/hosts")," \u4e2d\u914d\u7f6e 6 \u4e2a FQDN \u5bf9\u5e94\u7684\u771f\u5b9e IP\uff0c\u4f8b\u5982\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"172.22.0.1 fe1\n172.22.0.2 fe2\n172.22.0.3 fe3\n172.22.0.4 be1\n172.22.0.5 be2\n172.22.0.6 be3\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u9a8c\u8bc1\uff1a\u53ef\u4ee5\u5728 FE1 \u4e0a ",(0,r.yg)("inlineCode",{parentName:"p"},"ping fe2")," \u7b49\uff0c\u80fd\u89e3\u6790\u51fa\u6b63\u786e\u7684 IP \u5e76\u4e14\u80fd Ping \u901a\uff0c\u4ee3\u8868\u7f51\u7edc\u73af\u5883\u53ef\u7528\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6bcf\u4e2a FE \u8282\u70b9\u7684 fe.conf \u8bbe\u7f6e ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_fqdn_mode = true"),"\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"../../install/cluster-deployment/standard-deployment"},"\u624b\u52a8\u90e8\u7f72"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6309\u9700\u5728\u516d\u53f0\u673a\u5668\u4e0a\u9009\u62e9\u51e0\u53f0\u673a\u5668\u90e8\u7f72 broker\uff0c\u6267\u884c",(0,r.yg)("inlineCode",{parentName:"p"},'ALTER SYSTEM ADD BROKER broker_name "fe1:8000","be1:8000",...;'),"\u3002"))),(0,r.yg)("h3",{id:"k8s-\u90e8\u7f72-doris"},"K8s \u90e8\u7f72 Doris"),(0,r.yg)("p",null,"Pod \u610f\u5916\u91cd\u542f\u540e\uff0cK8s \u4e0d\u80fd\u4fdd\u8bc1 Pod \u7684 IP \u4e0d\u53d1\u751f\u53d8\u5316\uff0c\u4f46\u662f\u80fd\u4fdd\u8bc1\u57df\u540d\u4e0d\u53d8\uff0c\u57fa\u4e8e\u8fd9\u4e00\u7279\u6027\uff0cDoris \u5f00\u542f FQDN \u65f6\uff0c\u80fd\u4fdd\u8bc1 Pod \u610f\u5916\u91cd\u542f\u540e\uff0c\u8fd8\u80fd\u6b63\u5e38\u63d0\u4f9b\u670d\u52a1\u3002"),(0,r.yg)("p",null,"K8s \u90e8\u7f72 Doris \u7684\u65b9\u6cd5\u8bf7\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"../../install/cluster-deployment/k8s-deploy/install-doris-cluster"},"K8s \u90e8\u7f72 Doris")),(0,r.yg)("h3",{id:"\u670d\u52a1\u5668\u53d8\u66f4-ip"},"\u670d\u52a1\u5668\u53d8\u66f4 IP"),(0,r.yg)("p",null,"\u6309\u7167'\u65b0\u96c6\u7fa4\u542f\u7528 FQDN'\u90e8\u7f72\u597d\u96c6\u7fa4\u540e\uff0c\u5982\u679c\u60f3\u53d8\u66f4\u673a\u5668\u7684 IP\uff0c\u65e0\u8bba\u662f\u5207\u6362\u7f51\u5361\uff0c\u6216\u8005\u662f\u66f4\u6362\u673a\u5668\uff0c\u53ea\u9700\u8981\u66f4\u6539\u5404\u673a\u5668\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/hosts"),"\u5373\u53ef\u3002"),(0,r.yg)("h3",{id:"\u65e7\u96c6\u7fa4\u542f\u7528-fqdn"},"\u65e7\u96c6\u7fa4\u542f\u7528 FQDN"),(0,r.yg)("p",null,"\u524d\u63d0\u6761\u4ef6\uff1a\u5f53\u524d\u7a0b\u5e8f\u652f\u6301",(0,r.yg)("inlineCode",{parentName:"p"},'ALTER SYSTEM MODIFY FRONTEND "<fe_ip>:<edit_log_port>" HOSTNAME "<fe_hostname>"'),"\u8bed\u6cd5\uff0c\n\u5982\u679c\u4e0d\u652f\u6301\uff0c\u9700\u8981\u5347\u7ea7\u5230\u652f\u6301\u8be5\u8bed\u6cd5\u7684\u7248\u672c"),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a"),(0,r.yg)("p",{parentName:"admonition"},"\u81f3\u5c11\u6709\u4e09\u53f0 follower \u624d\u80fd\u8fdb\u884c\u5982\u4e0b\u64cd\u4f5c\uff0c\u5426\u5219\u4f1a\u9020\u6210\u96c6\u7fa4\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8")),(0,r.yg)("p",null,"\u63a5\u4e0b\u6765\u6309\u7167\u5982\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. \u9010\u4e00\u5bf9 Follower\u3001Observer \u8282\u70b9\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c (\u6700\u540e\u64cd\u4f5c Master \u8282\u70b9)\uff1a")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u505c\u6b62\u8282\u70b9\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u68c0\u67e5\u8282\u70b9\u662f\u5426\u505c\u6b62\u3002\u901a\u8fc7 MySQL \u5ba2\u6237\u7aef\u6267\u884c",(0,r.yg)("inlineCode",{parentName:"p"},"show frontends"),"\uff0c\u67e5\u770b\u8be5 FE \u8282\u70b9\u7684 Alive \u72b6\u6001\u76f4\u81f3\u53d8\u4e3a false")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4e3a\u8282\u70b9\u8bbe\u7f6e FQDN: ",(0,r.yg)("inlineCode",{parentName:"p"},'ALTER SYSTEM MODIFY FRONTEND "<fe_ip>:<edit_log_port>" HOSTNAME "<fe_hostname>"'),"\uff08\u505c\u6389 master \u540e\uff0c\u4f1a\u9009\u4e3e\u51fa\u65b0\u7684 master \u8282\u70b9\uff0c\u7528\u65b0\u7684 master \u8282\u70b9\u6765\u6267\u884c sql \u8bed\u53e5\uff09")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539\u8282\u70b9\u914d\u7f6e\u3002\u4fee\u6539 FE \u6839\u76ee\u5f55\u4e2d\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"conf/fe.conf"),"\u6587\u4ef6\uff0c\u6dfb\u52a0\u914d\u7f6e\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"enable_fqdn_mode = true"),"\u3002\u5982\u679c\u5728\u521a\u505c\u6b62\u7684\u8282\u70b9\u5bf9\u5e94 fe.conf \u6dfb\u52a0\u4e86\u914d\u7f6e\u540e\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8\uff0c\u8bf7\u5728\u6240\u6709 fe.conf \u4e2d\u6dfb\u52a0\u914d\u7f6e",(0,r.yg)("inlineCode",{parentName:"p"},"enable_fqdn_mode = true"),"\u540e\u518d\u542f\u52a8\u521a\u521a\u505c\u6b62\u7684 fe \u8282\u70b9")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u542f\u52a8\u8282\u70b9\u3002"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. BE \u8282\u70b9\u542f\u7528 FQDN \u53ea\u9700\u8981\u901a\u8fc7 MySQL \u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4e0d\u9700\u8981\u5bf9 BE \u6267\u884c\u91cd\u542f\u64cd\u4f5c\u3002")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},'ALTER SYSTEM MODIFY BACKEND "<backend_ip>:<HeartbeatPort>" HOSTNAME "<be_hostname>"'),"\uff0c\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u7aef\u53e3 HeartbeatPort \u662f\u591a\u5c11\uff0c\u8bf7\u4f7f\u7528 show backends \u547d\u4ee4\u6765\u5e2e\u52a9\u5bfb\u627e\u6b64\u7aef\u53e3;"),(0,r.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u914d\u7f6e\u9879 enable_fqdn_mode \u53ef\u4ee5\u968f\u610f\u66f4\u6539\u4e48\uff1f"),(0,r.yg)("p",{parentName:"li"},"\u4e0d\u80fd\u968f\u610f\u66f4\u6539\uff0c\u66f4\u6539\u8be5\u914d\u7f6e\u8981\u6309\u7167'\u65e7\u96c6\u7fa4\u542f\u7528 FQDN'\u8fdb\u884c\u64cd\u4f5c\u3002"))))}s.isMDXComponent=!0}}]);