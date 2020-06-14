(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{129:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return b})),t.d(r,"rightToc",(function(){return o})),t.d(r,"default",(function(){return l}));var a=t(2),n=t(6),c=(t(0),t(134)),i={id:"dh",title:"Dependencies Hub Database Design",sidebar_label:"DH Database"},b={id:"database/dh",title:"Dependencies Hub Database Design",description:"Nodes",source:"@site/docs/database/dh.md",permalink:"/dependencies-hub/docs/database/dh",editUrl:"https://github.com/dependencies-hub/edit/master/docs/docs/database/dh.md",sidebar_label:"DH Database",sidebar:"docs",previous:{title:"Neo4j and Cypher",permalink:"/dependencies-hub/docs/database/neo4j"},next:{title:"Sample Data",permalink:"/dependencies-hub/docs/database/sample"}},o=[{value:"Nodes",id:"nodes",children:[{value:"Service",id:"service",children:[]},{value:"Library",id:"library",children:[]},{value:"ServiceVersion",id:"serviceversion",children:[]},{value:"LibraryVersion",id:"libraryversion",children:[]},{value:"Repository",id:"repository",children:[]}]},{value:"Relations",id:"relations",children:[{value:"DEPENDS_ON",id:"depends_on",children:[]},{value:"VERSION_OF",id:"version_of",children:[]},{value:"RESIDES_IN",id:"resides_in",children:[]}]}],s={rightToc:o};function l(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"nodes"},"Nodes"),Object(c.b)("h3",{id:"service"},"Service"),Object(c.b)("p",null,"Represents a module that (probably) represents a service, has a ",Object(c.b)("inlineCode",{parentName:"p"},"build.gradle"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cypher"}),'CREATE (s:Service { name: "string" })\n')),Object(c.b)("h3",{id:"library"},"Library"),Object(c.b)("p",null,"Represents a module that is a library, that can be depended on by other services or libraries."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cypher"}),'CREATE (l:Library { name: "string" })\n')),Object(c.b)("h3",{id:"serviceversion"},"ServiceVersion"),Object(c.b)("p",null,"Represents a versioned snapshot of a service"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cypher"}),'CREATE (sv:ServiceVersion { version: "string" })\n')),Object(c.b)("h3",{id:"libraryversion"},"LibraryVersion"),Object(c.b)("p",null,"Represents a certain version of a library that may be depended upon by other services or libraries."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cypher"}),'CREATE (lv:LibraryVersion { version: "string" })\n')),Object(c.b)("h3",{id:"repository"},"Repository"),Object(c.b)("p",null,"Represents a git repository that contains services and libraries"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cypher"}),"CREATE (r:Repository { ... })\n")),Object(c.b)("h2",{id:"relations"},"Relations"),Object(c.b)("h3",{id:"depends_on"},"DEPENDS_ON"),Object(c.b)("p",null,"Between ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#serviceversion"}),"ServiceVersion")," and ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#libraryversion"}),"LibraryVersion")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cypher"}),"CREATE (sv)-[:DEPENDS_ON]->(lv)\n")),Object(c.b)("p",null,"Between ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#libraryversion"}),"LibraryVersion")," and ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#libraryversion"}),"LibraryVersion")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cypher"}),"CREATE (lv1)-[:DEPENDS_ON]->(lv2)\n")),Object(c.b)("h3",{id:"version_of"},"VERSION_OF"),Object(c.b)("p",null,"Between ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#serviceversion"}),"ServiceVersion")," and ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#service"}),"Service")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cypher"}),"CREATE (sv)-[:VERSION_OF]->(s)\n")),Object(c.b)("p",null,"Between ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#libraryversion"}),"LibraryVersion")," and ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#library"}),"Library")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cypher"}),"CREATE (lv)-[:VERSION_OF]->(l)\n")),Object(c.b)("h3",{id:"resides_in"},"RESIDES_IN"),Object(c.b)("p",null,"Between ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#service"}),"Service")," and ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#repository"}),"Repository")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cypher"}),'CREATE (s)-[:RESIDES_IN { path: "/path/to/module" }]->(r)\n')),Object(c.b)("p",null,"Between ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#library"}),"Library")," and ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#repository"}),"Repository")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cypher"}),'CREATE (l)-[:RESIDES_IN { path: "/path/to/module" }]->(r)\n')))}l.isMDXComponent=!0},134:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return u}));var a=t(0),n=t.n(a);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),l=function(e){var r=n.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):b(b({},r),e)),t},p=function(e){var r=l(e.components);return n.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},O=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=l(t),O=a,u=p["".concat(i,".").concat(O)]||p[O]||d[O]||c;return t?n.a.createElement(u,b(b({ref:r},s),{},{components:t})):n.a.createElement(u,b({ref:r},s))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=O;var b={};for(var o in r)hasOwnProperty.call(r,o)&&(b[o]=r[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var s=2;s<c;s++)i[s]=t[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"}}]);