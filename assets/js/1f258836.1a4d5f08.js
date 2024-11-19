"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[39902],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(296540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=s,y=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:s,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},895387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),s=(n(296540),n(15680));const i={title:"STARTS_WITH",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/starts-with",id:"sql-manual/sql-functions/string-functions/starts-with",title:"STARTS_WITH",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/starts-with.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/starts-with",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/starts-with",draft:!1,tags:[],version:"current",frontMatter:{title:"STARTS_WITH",language:"en"},sidebar:"docs",previous:{title:"ENDS_WITH",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/ends-with"},next:{title:"TRIM",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/trim"}},a={},c=[{value:"starts_with",id:"starts_with",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,s.yg)(p,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"starts_with"},"starts_with"),(0,s.yg)("h3",{id:"description"},"Description"),(0,s.yg)("h4",{id:"syntax"},"Syntax"),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"BOOLEAN STARTS_WITH(VARCHAR str, VARCHAR prefix)")),(0,s.yg)("p",null,"It returns true if the string starts with the specified prefix, otherwise it returns false.\nIf any parameter is NULL, it returns NULL."),(0,s.yg)("h3",{id:"example"},"example"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"MySQL [(none)]> select starts_with(\"hello world\",\"hello\");\n+-------------------------------------+\n| starts_with('hello world', 'hello') |\n+-------------------------------------+\n|                                   1 |\n+-------------------------------------+\n\nMySQL [(none)]> select starts_with(\"hello world\",\"world\");\n+-------------------------------------+\n| starts_with('hello world', 'world') |\n+-------------------------------------+\n|                                   0 |\n+-------------------------------------+\n")),(0,s.yg)("h3",{id:"keywords"},"keywords"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"STARTS_WITH\n")))}f.isMDXComponent=!0}}]);