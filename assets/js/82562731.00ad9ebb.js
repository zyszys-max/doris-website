"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[990561],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>u});var o=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),p=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(d.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,u=c["".concat(d,".").concat(m)]||c[m]||g[m]||i;return t?o.createElement(u,a(a({ref:n},s),{},{components:t})):o.createElement(u,a({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},899338:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(58168),r=(t(296540),t(15680));const i={title:"Development and Debugging of Apache Doris BE -- Clion",language:"en"},a=void 0,l={unversionedId:"developer-guide/be-clion-dev",id:"developer-guide/be-clion-dev",title:"Development and Debugging of Apache Doris BE -- Clion",description:"\x3c!--",source:"@site/community/developer-guide/be-clion-dev.md",sourceDirName:"developer-guide",slug:"/developer-guide/be-clion-dev",permalink:"/community/developer-guide/be-clion-dev",draft:!1,tags:[],version:"current",frontMatter:{title:"Development and Debugging of Apache Doris BE -- Clion",language:"en"},sidebar:"community",previous:{title:"BE development and debugging environment under Linux",permalink:"/community/developer-guide/be-vscode-dev"},next:{title:"Dev & Debug prepare on Mac",permalink:"/community/developer-guide/mac-dev/dev-prepare"}},d={},p=[{value:"Downloading and Compiling Code on Remote Server",id:"downloading-and-compiling-code-on-remote-server",level:2},{value:"Clion Installation and Configuration for Remote Development Environment",id:"clion-installation-and-configuration-for-remote-development-environment",level:2},{value:"Running and debugging Doris BE remotely in Clion",id:"running-and-debugging-doris-be-remotely-in-clion",level:2}],s={toc:p},c="wrapper";function g(e){let{components:n,...i}=e;return(0,r.yg)(c,(0,o.A)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"using-clion-for-remote-development-and-debugging-of-apache-doris-be"},"Using Clion for Remote Development and Debugging of Apache Doris BE"),(0,r.yg)("h2",{id:"downloading-and-compiling-code-on-remote-server"},"Downloading and Compiling Code on Remote Server"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Download Doris source code on the remote server, such as in the directory ",(0,r.yg)("inlineCode",{parentName:"li"},"/mnt/datadisk0/chenqi/doris"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"git clone https://github.com/apache/doris.git\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Modify the ",(0,r.yg)("inlineCode",{parentName:"p"},"env.sh")," file located in the root directory of the Doris code on the remote server.\nAdd the configuration for ",(0,r.yg)("inlineCode",{parentName:"p"},"DORIS_HOME")," at the beginning, for example, ",(0,r.yg)("inlineCode",{parentName:"p"},"DORIS_HOME=/mnt/datadisk0/chenqi/doris."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Execute commands to compile the code. The detailed compilation process ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/docs/dev/install/source-install/compilation-with-ldb-toolchain"},"compilation-with-ldb-toolchain"),"."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cd /mnt/datadisk0/chenqi/doris\n./build.sh\n")),(0,r.yg)("h2",{id:"clion-installation-and-configuration-for-remote-development-environment"},"Clion Installation and Configuration for Remote Development Environment"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download and install Clion on your local env, then import the Doris BE source code.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set up a remote development environment on your local env by navigating to ",(0,r.yg)("strong",{parentName:"p"},"Preferences -> Build, Execution, Deployment -> Deployment")," in Clion.\nAdd the connection and login information for the remote development server using ",(0,r.yg)("strong",{parentName:"p"},"SFTP")," and set the ",(0,r.yg)("strong",{parentName:"p"},"Mappings")," paths.\nFor example, where Local Path is the local path ",(0,r.yg)("inlineCode",{parentName:"p"},"/User/kaka/Programs/doris/be")," and Deployment Path is the remote server path ",(0,r.yg)("inlineCode",{parentName:"p"},"/mnt/datadisk0/chenqi/clion/doris/be"),"."))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Deployment1",src:t(655842).A,width:"2220",height:"1428"})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Deployment2",src:t(638777).A,width:"2216",height:"1426"})),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Copy the ",(0,r.yg)("inlineCode",{parentName:"li"},"gensrc")," path on the remote server, for example ",(0,r.yg)("inlineCode",{parentName:"li"},"/mnt/datadisk0/chenqi/doris/gensrc"),", to the parent directory of the ",(0,r.yg)("strong",{parentName:"li"},"Deployment Path"),".\nFor example, the final directory path on the remote server should be ",(0,r.yg)("inlineCode",{parentName:"li"},"/mnt/datadisk0/chenqi/clion/doris/gensrc"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cp -R /mnt/datadisk0/chenqi/doris/gensrc /mnt/datadisk0/chenqi/clion/doris/gensrc\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"In Clion, navigate to ",(0,r.yg)("strong",{parentName:"li"},"Preferences -> Build, Execution, Deployment -> Toolchains")," and add the necessary remote environment toolchains such as cmake, gcc, g++, gdb, etc.\n",(0,r.yg)("strong",{parentName:"li"},"The most important step is to add the path of "),"env.sh",(0,r.yg)("strong",{parentName:"li"}," on the remote server to "),"Environment file",(0,r.yg)("strong",{parentName:"li"},"."))),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Toolchains",src:t(482722).A,width:"2226",height:"1416"})),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In Clion, navigate to ",(0,r.yg)("strong",{parentName:"p"},"Preferences -> Build, Execution, Deployment -> CMake")," and add the compilation option -DDORIS_JAVA_HOME=/path/to/remote/JAVA_HOME in CMake options, set DORIS_JAVA_HOME to the JAVA_HOME path of the remote server, otherwise jni.h will not be found.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Right-click on ",(0,r.yg)("strong",{parentName:"p"},"Load Cmake Project")," in Clion. This will synchronize the code to the remote server and generate the Cmake build files."))),(0,r.yg)("h2",{id:"running-and-debugging-doris-be-remotely-in-clion"},"Running and debugging Doris BE remotely in Clion"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Configure CMake in ",(0,r.yg)("strong",{parentName:"p"},"Preferences -> Build, Execution, Deployment -> CMake"),". Different targets such as Debug / Release can be configured, and the ",(0,r.yg)("strong",{parentName:"p"},"ToolChain")," should be set to the previously configured.\nIf you want to run and debug Unit Tests, you need to add \xb7-DMAKE_TEST=ON\xb7 to CMake Options (this option is disabled by default, and needs to be enabled to compile the Test code)\nCopy the output directory in Doris source code to a separate path on the remote server, such as /mnt/datadisk0/chenqi/clion/doris/doris_be/.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy the output directory in Doris source code to a separate path on the remote server, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"/mnt/datadisk0/chenqi/clion/doris/doris_be/"),"."))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"cp -R /mnt/datadisk0/chenqi/doris/output /mnt/datadisk0/chenqi/clion/doris/doris_be\n")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Output Tree",src:t(296319).A,width:"814",height:"310"})),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Select the relevant Target for doris_be in Clion, such as Debug or Release, and configure the run.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Run Debug Conf1",src:t(289033).A,width:"2074",height:"1356"})),(0,r.yg)("p",null,"Refer to the environment variables exported in ",(0,r.yg)("inlineCode",{parentName:"p"},"be/bin/start_be.sh")," in the Doris root directory for environment variable configuration. The value of each environment variable should point to the corresponding path on the remote server.**\nEnvironment variables reference:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Run Debug Conf2",src:t(474418).A,width:"3118",height:"796"})),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Click ",(0,r.yg)("strong",{parentName:"li"},"Run")," to compile and run the BE, or click ",(0,r.yg)("strong",{parentName:"li"},"Debug")," to compile and debug the BE.")))}g.isMDXComponent=!0},655842:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/clion-deployment1-a36f51febb0818fed20a02a71b697a5a.png"},638777:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/clion-deployment2-5887d4af6d031a8b484cc0dcb6399837.png"},289033:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/clion-run-debug-conf1-e57278a1580b0b96f3a9016924613981.png"},474418:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/clion-run-debug-conf2-abdc543704be6a69328c6985b0c7a36f.png"},482722:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/clion-toolchains-6160ba355a369c4a39be6dae1bede1fb.png"},296319:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/doris-dist-output-tree-e5e484ba7fe826861a853756e9cb3cdc.png"}}]);