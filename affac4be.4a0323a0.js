(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),i=(r(0),r(93)),c={id:"process",title:"The Scraping Process",sidebar_title:"Scraping Process"},o={unversionedId:"scraping/process",id:"scraping/process",isDocsHomePage:!1,title:"The Scraping Process",description:"Consider the database starts empty...",source:"@site/docs/scraping/process.md",permalink:"/dependencies-hub/docs/scraping/process",editUrl:"https://github.com/gioragutt/dependencies-hub/edit/master/docs/docs/scraping/process.md",sidebar:"docs",previous:{title:"Scraping Artifactory",permalink:"/dependencies-hub/docs/scraping/artifactory"},next:{title:"Configuration",permalink:"/dependencies-hub/docs/scraping/configuration"}},s=[{value:"Triggers",id:"triggers",children:[]},{value:"Scrape Scope",id:"scrape-scope",children:[{value:"Single Commit Scrape",id:"single-commit-scrape",children:[]},{value:"Full Scrape",id:"full-scrape",children:[]}]},{value:"Flow of a scrape",id:"flow-of-a-scrape",children:[{value:"Differentiating a library from service",id:"differentiating-a-library-from-service",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Consider the database starts empty..."),Object(i.b)("p",null,"What triggers are there to populate the database, and what data is scraped for each trigger?"),Object(i.b)("h2",{id:"triggers"},"Triggers"),Object(i.b)("p",null,"First, there are git triggers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Pushes (to master branch)"),Object(i.b)("li",{parentName:"ul"},"Tags (library/service releases)")),Object(i.b)("p",null,"Further more, there can be any number of triggers we create, such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cron Jobs (nightly scrapes, etc)"),Object(i.b)("li",{parentName:"ul"},"Manually scrape a certain branch on user request, etc.")),Object(i.b)("h2",{id:"scrape-scope"},"Scrape Scope"),Object(i.b)("p",null,"Each of the triggers described above may collect different amounts of data."),Object(i.b)("p",null,"There could be a full scrape, that would scrape all repositories, and in every repository it would scrape all tags, and so on."),Object(i.b)("p",null,"On the other hand, there could be smaller scrapes that scrape a single branch/tag."),Object(i.b)("p",null,"Summerizing, it seems that there are two types of scrapes:"),Object(i.b)("h3",{id:"single-commit-scrape"},"Single Commit Scrape"),Object(i.b)("p",null,"A scrape that spans just one commit, be it a branch or a tag. It will insert the ",Object(i.b)("inlineCode",{parentName:"p"},"LibraryVersion/ServiceVersion"),"s of scraped modules, and any ",Object(i.b)("inlineCode",{parentName:"p"},":DEPENDS_ON")," relationships related to that version."),Object(i.b)("p",null,"Except for the master branch scrape, which will override previous data, commit scrapes should be idempotent: when run several times, there should be no duplicate date in the database."),Object(i.b)("h3",{id:"full-scrape"},"Full Scrape"),Object(i.b)("p",null,"Scrape all repositories, and within those, all tags, and the master branch (unless configured otherwise)."),Object(i.b)("p",null,"This can be triggered nightly, or even more frequently, depending on how lengthy the process will be."),Object(i.b)("p",null,"Basically it means running the ",Object(i.b)("inlineCode",{parentName:"p"},"Single Commit Scrape")," for many many commits."),Object(i.b)("h2",{id:"flow-of-a-scrape"},"Flow of a scrape"),Object(i.b)("p",null,"So consider the scrape is a ",Object(i.b)("inlineCode",{parentName:"p"},"Single Commit Scrape"),", as it seems that it's the building block of scrapes."),Object(i.b)("p",null,"We start by using the ",Object(i.b)("inlineCode",{parentName:"p"},"TFS Api")," to find the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./tfs#files-that-were-interested-in-scraping"}),"files we're interested in")," from a repository."),Object(i.b)("p",null,"From there, we analyze what modules we have, what type each module is (library or service)."),Object(i.b)("p",null,"For each module, we go over it's dependencies, and create:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"LibraryVersion")," nodes"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},":DEPENDS_ON")," relations"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Library")," nodes"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},":VERSION_OF")," relations")),Object(i.b)("p",null,"It could be that when we scrape a module, the libraries it depends on have not yet been saved,\nbe it the specific version of the library, or maybe it's the first time we encounter the library and it's not saved at all (does not have a ",Object(i.b)("inlineCode",{parentName:"p"},"Library")," node)."),Object(i.b)("p",null,"If we later scrape the repository that contains that library, what should happen is that it's nodes should just be updated with more properties and relations, but there shouldn't be neither a conflict or duplicate nodes."),Object(i.b)("h3",{id:"differentiating-a-library-from-service"},"Differentiating a library from service"),Object(i.b)("p",null,"For existing libraries that would be easy - scrape ",Object(i.b)("inlineCode",{parentName:"p"},"Artifactory")," and check if the library is already there."),Object(i.b)("p",null,"For new libraries, that do not yet have a published version, it gets a little bit trickier."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"TODO"),": Find out more attributes that differentiate between libraries and services")))))}p.isMDXComponent=!0},93:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),u=a,h=b["".concat(c,".").concat(u)]||b[u]||d[u]||i;return r?n.a.createElement(h,o(o({ref:t},l),{},{components:r})):n.a.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);