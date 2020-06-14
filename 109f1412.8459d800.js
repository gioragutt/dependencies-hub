(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),i=(r(0),r(134)),o={id:"motivation",title:"Motivation",sidebar_label:"Motivation"},c={id:"motivation",title:"Motivation",description:"We've moved to Java development around the end of 2018.",source:"@site/docs/motivation.md",permalink:"/dependencies-hub/docs/motivation",editUrl:"https://github.com/gioragutt/dependencies-hub/edit/master/docs/docs/motivation.md",sidebar_label:"Motivation",sidebar:"docs",previous:{title:"Architecture",permalink:"/dependencies-hub/docs/architecture"},next:{title:"Neo4j and Cypher",permalink:"/dependencies-hub/docs/database/neo4j"}},b=[{value:"Upgrade process",id:"upgrade-process",children:[{value:"Solution: <code>increment_library_middle_version.sh</code>",id:"solution-increment_library_middle_versionsh",children:[]},{value:"Real motivation: as much automation and insight as possible!",id:"real-motivation-as-much-automation-and-insight-as-possible",children:[]}]}],l={rightToc:b};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We've moved to Java development around the end of 2018."),Object(i.b)("p",null,"I don't know all the considerations for doing it the way we did, but we moved from a mono-repo C++ repository, to a multi-repo setup."),Object(i.b)("p",null,"Older C++ modules were kept in a trimmed down C++ only repository, for reasons \ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f."),Object(i.b)("p",null,"Before long, we had over a dozen java libraries shared between teams."),Object(i.b)("p",null,"Some of them were wrappers around services we use (such as Kafka), some were client libraries for rest-apis, and the majority of them were schema libraries (Avro)."),Object(i.b)("p",null,"Needless to say, after being about two years into this architecture, managing library dependencies is a pain in the ass."),Object(i.b)("h2",{id:"upgrade-process"},"Upgrade process"),Object(i.b)("p",null,"One of the biggest pain points about managing java libraries, more so in a multi-repo setup, is keeping projects up to date when releasing new versions."),Object(i.b)("p",null,"In the earlier days of the project, we'd sit together as a team, and plan, using a whiteboard, what libraries and services do we need to release for the next version."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Current Version"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Next Version"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"schema-lib1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.3.0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.4.0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"schema-lib2"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.2.0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.3.0")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"client-lib1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"..."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"...")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"infra-lib1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"..."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"...")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"service1"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"..."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"...")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"service2"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"..."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"...")))),Object(i.b)("p",null,"For every line in the table, we'd have to figure out what library/service dependends on it, and iteratively release new library and service versions."),Object(i.b)("p",null,"This was ",Object(i.b)("em",{parentName:"p"},"borderline")," acceptable when there weren't too many services. Like any project, things began growing, there were more services spawning, more libraries, etc."),Object(i.b)("p",null,"This process became hell."),Object(i.b)("h3",{id:"solution-increment_library_middle_versionsh"},"Solution: ",Object(i.b)("inlineCode",{parentName:"h3"},"increment_library_middle_version.sh")),Object(i.b)("p",null,"This is the script that we use until today to update library versions across projects and repositories."),Object(i.b)("p",null,"It works by cloning ",Object(i.b)("em",{parentName:"p"},"all")," of our repositories (the first time), reseting to master (every time), and scanning ",Object(i.b)("inlineCode",{parentName:"p"},"build.gradle")," files to find dependents of the library."),Object(i.b)("p",null,"You first pick a library, release a new version, and then get prompted to pick which projects you want to upgrade."),Object(i.b)("p",null,"For each project picked, a commit that updates the build.gradle file is pushed to a branch, and a PR is created."),Object(i.b)("p",null,"Although this has helped us a lot, often you have to review and merge dozens of PRs, which is still a process which can go sideways, very easily."),Object(i.b)("p",null,"Keep in mind, that this is done by many teams, across many shared repositories \ud83d\ude35."),Object(i.b)("h3",{id:"real-motivation-as-much-automation-and-insight-as-possible"},"Real motivation: as much automation and insight as possible!"),Object(i.b)("p",null,"I want to create our version of github's ",Object(i.b)("inlineCode",{parentName:"p"},"dependabot"),"!"),Object(i.b)("p",null,"I envision not having to run a single script."),Object(i.b)("p",null,"All you'll have to do to release a new version of the library, would be to go to ",Object(i.b)("inlineCode",{parentName:"p"},"Jenkins"),", go to the ",Object(i.b)("inlineCode",{parentName:"p"},"Release Library")," job for your library, and let jenkins do the job."),Object(i.b)("p",null,"It would:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Build a temporary library"),Object(i.b)("li",{parentName:"ul"},"For each dependent library/process, run a CI pipeline for the dependent, with the temporary library version"),Object(i.b)("li",{parentName:"ul"},"Based on the outcome, you could decide wether to continue with the release or not, and whether the version is a minor or major"),Object(i.b)("li",{parentName:"ul"},"If you decide to continue with the release (nothing breaks, or breaks but intentionally), PRs are created for all dependants.")),Object(i.b)("p",null,"All while visualizing the process and acting automatically based on data about dependency relationships from our repositories."))}s.isMDXComponent=!0},134:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);