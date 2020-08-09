(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{65:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return p}));var t=r(2),a=r(6),s=(r(0),r(93)),o={id:"sample",title:"Sample Data",sidebar_label:"Sample Data"},l={unversionedId:"database/sample",id:"database/sample",isDocsHomePage:!1,title:"Sample Data",description:"Here is a sample cypher query which you can use to populate your database:",source:"@site/docs/database/sample.md",permalink:"/dependencies-hub/docs/database/sample",editUrl:"https://github.com/gioragutt/dependencies-hub/edit/master/docs/docs/database/sample.md",sidebar_label:"Sample Data",sidebar:"docs",previous:{title:"Dependencies Hub Database Design",permalink:"/dependencies-hub/docs/database/dh"},next:{title:"Scraping TFS",permalink:"/dependencies-hub/docs/scraping/tfs"}},i=[{value:"Queries",id:"queries",children:[]},{value:"Utils",id:"utils",children:[]}],c={rightToc:i};function p(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Here is a sample cypher query which you can use to populate your database:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cypher"}),'CREATE\n  (dhs:Module { name: "dh-service" }),\n  (dhrest:Module { name: "dh-rest" }),\n\n  (dhschemas:Module { name: "dh-schemas" }),\n  (n4j:Module { name: "neo4j" }),\n  (express:Module { name: "express" }),\n  (tfsapi:Module { name: "tfs-api" }),\n  (nodefetch:Module { name: "node-fetch" }),\n\n  (dhs1:ModuleVersion { version: "1.0.0", name: "dh-service" }),\n  (dhrest1:ModuleVersion { version: "1.0.0", name: "dh-rest" }),\n  \n  (dhschemas1:ModuleVersion { version: "1.0.0", name: "dh-schemas" }),\n  (n4j1:ModuleVersion { version: "1.0.0", name: "neo4j" }),\n  (express1:ModuleVersion { version: "1.0.0", name: "express" }),\n  (tfsapi1:ModuleVersion { version: "1.0.0", name: "tfs-api" }),\n  (nodefetch1:ModuleVersion { version: "1.0.0", name: "node-fetch" }),\n  \n  (dhrepo:Repository { name: "DependenciesHub" }),\n\n  (dhs1)-[:VERSION_OF]->(dhs),\n  (dhrest1)-[:VERSION_OF]->(dhrest),\n\n  (dhschemas1)-[:VERSION_OF]->(dhschemas),\n  (n4j1)-[:VERSION_OF]->(n4j),\n  (express1)-[:VERSION_OF]->(express),\n  (tfsapi1)-[:VERSION_OF]->(tfsapi),\n  (nodefetch1)-[:VERSION_OF]->(nodefetch),\n\n  (dhs)-[:RESIDES_IN { path: "/service" }]->(dhrepo),\n  (dhrest)-[:RESIDES_IN { path: "/rest" }]->(dhrepo),\n  (dhschemas)-[:RESIDES_IN { path: "/schemas" }]->(dhrepo),\n\n  (dhs1)-[:DEPENDS_ON_LIBRARY]->(dhschemas1),\n  (dhs1)-[:DEPENDS_ON_LIBRARY]->(n4j1),\n  (dhs1)-[:DEPENDS_ON_LIBRARY]->(tfsapi1),\n  (dhs1)-[:DEPENDS_ON_LIBRARY]->(nodefetch1),\n\n  (dhrest1)-[:DEPENDS_ON_LIBRARY]->(dhschemas1),\n  (dhrest1)-[:DEPENDS_ON_LIBRARY]->(n4j1),\n  (dhrest1)-[:DEPENDS_ON_LIBRARY]->(express1),\n\n  // Just to show that libraries can depend on libraries\n  (dhschemas1)-[:DEPENDS_ON_LIBRARY]->(n4j1)\n')),Object(s.b)("h2",{id:"queries"},"Queries"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Find all services and libraries that depend on the ",Object(s.b)("inlineCode",{parentName:"li"},"neo4j")," library")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cypher"}),'MATCH (lib:Module {name: "neo4j})<-[:VERSION_OF]-(:ModuleVersion)<-[:DEPENDS_ON_LIBRARY]-()-[:VERSION_OF]->(s)\nRETURN s;\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Find all dependencies on libraries")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cypher"}),"MATCH (lib:Module)<-[:VERSION_OF]-(:ModuleVersion)<-[:DEPENDS_ON_LIBRARY]-()-[:VERSION_OF]->(s)\nRETURN s.name, collect(lib.name);\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"List all repositories, and services and libraries that reside inside them")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cypher"}),"MATCH \n    (r:Repository)<-[rel:RESIDES_IN]-(m) \nRETURN \n    r.name as repo, rel.path as path, m.name as module\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"List all modules, specifying if each module is a service or library")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cypher"}),"MATCH\n  (m:Module)\nOPTIONAL MATCH\n  (dep:Module)<-[:VERSION_OF]-(:ModuleVersion)-[:DEPENDS_ON_LIBRARY]->(:ModuleVersion)-[:VERSION_OF]->(m)\nWITH \n  m, count(dep) > 0 as isLibrary\nRETURN \n  m.name, isLibrary\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"List all modules and their repositories")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cypher"}),"MATCH (m:Module)\nOPTIONAL MATCH (m)-[rel:RESIDES_IN]->(repo:Repository)\nRETURN m.name as module, repo.name as repo, rel.path as path\n")),Object(s.b)("h2",{id:"utils"},"Utils"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Clear all")),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-cypher"}),"MATCH (n) DETACH DELETE n\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"History: ",Object(s.b)("inlineCode",{parentName:"li"},":history"))))}p.isMDXComponent=!0},93:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),b=t,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||s;return r?a.a.createElement(m,l(l({ref:n},c),{},{components:r})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,o=new Array(s);o[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);