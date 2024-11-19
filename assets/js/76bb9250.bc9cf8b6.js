"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[203686],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>E});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,E=m["".concat(o,".").concat(u)]||m[u]||y[u]||i;return n?a.createElement(E,s(s({ref:t},c),{},{components:n})):a.createElement(E,s({ref:t},c))}));function E(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},241238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const i={title:"CREATE-ENCRYPT-KEY",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",id:"version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",title:"CREATE-ENCRYPT-KEY",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Create",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY",draft:!1,tags:[],version:"2.1",frontMatter:{title:"CREATE-ENCRYPT-KEY",language:"en"},sidebar:"docs",previous:{title:"CREATE-POLICY",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-POLICY"},next:{title:"CREATE-RESOURCE",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-RESOURCE"}},o={},p=[{value:"CREATE-ENCRYPT-KEY",id:"create-encrypt-key",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-encrypt-key"},"CREATE-ENCRYPT-KEY"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE ENCRYPTKEY"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement creates a custom key. Executing this command requires the user to have ",(0,r.yg)("inlineCode",{parentName:"p"},"ADMIN")," privileges."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ENCRYPTKEY key_name AS "key_string"\n')),(0,r.yg)("p",null,"illustrate:"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"key_name"),": The name of the key to be created, may contain the name of the database. For example: ",(0,r.yg)("inlineCode",{parentName:"p"},"db1.my_key"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"key_string"),": The string to create the key with."),(0,r.yg)("p",null,"If ",(0,r.yg)("inlineCode",{parentName:"p"},"key_name")," contains the database name, then the custom key will be created in the corresponding database, otherwise this function will create the database in the current session. The name of the new key cannot be the same as the existing key in the corresponding database, otherwise the creation will fail."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a custom key"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE ENCRYPTKEY my_key AS "ABCD123456789";\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use a custom key"),(0,r.yg)("p",{parentName:"li"},"To use a custom key, you need to add the keyword ",(0,r.yg)("inlineCode",{parentName:"p"},"KEY"),"/",(0,r.yg)("inlineCode",{parentName:"p"},"key")," before the key, separated from the ",(0,r.yg)("inlineCode",{parentName:"p"},"key_name")," space."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT HEX(AES_ENCRYPT(\"Doris is Great\", KEY my_key));\n+------------------------------------------------+\n| hex(aes_encrypt('Doris is Great', key my_key)) |\n+------------------------------------------------+\n| D26DB38579D6A343350EDDC6F2AD47C6 |\n+------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT AES_DECRYPT(UNHEX('D26DB38579D6A343350EDDC6F2AD47C6'), KEY my_key);\n+------------------------------------------------- -------------------+\n| aes_decrypt(unhex('D26DB38579D6A343350EDDC6F2AD47C6'), key my_key) |\n+------------------------------------------------- -------------------+\n| Doris is Great |\n+------------------------------------------------- -------------------+\n1 row in set (0.01 sec)\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE, ENCRYPTKEY\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}y.isMDXComponent=!0}}]);