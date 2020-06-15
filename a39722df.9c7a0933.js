(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=(r(0),r(137));const i={id:"artifactory",title:"Scraping Artifactory",sidebar_label:"Artifactory"},o={id:"scraping/artifactory",title:"Scraping Artifactory",description:"What's in artifactory?",source:"@site/docs/scraping/artifactory.md",permalink:"/dependencies-hub/docs/scraping/artifactory",editUrl:"https://github.com/gioragutt/dependencies-hub/edit/master/docs/docs/scraping/artifactory.md",sidebar_label:"Artifactory",sidebar:"docs",previous:{title:"Scraping TFS",permalink:"/dependencies-hub/docs/scraping/tfs"},next:{title:"The Scraping Process",permalink:"/dependencies-hub/docs/scraping/process"}},c=[{value:"What&#39;s in artifactory?",id:"whats-in-artifactory",children:[]},{value:"Library Properties",id:"library-properties",children:[]},{value:"Other properties that might be taken about libraries:",id:"other-properties-that-might-be-taken-about-libraries",children:[]},{value:"Thoughts",id:"thoughts",children:[]}],l={rightToc:c};function p({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"whats-in-artifactory"},"What's in artifactory?"),Object(a.b)("p",null,"Artifactory has all the libraries and versions."),Object(a.b)("h2",{id:"library-properties"},"Library Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"groupId: ",Object(a.b)("inlineCode",{parentName:"li"},"org.company-name")),Object(a.b)("li",{parentName:"ul"},"artifactId: ",Object(a.b)("inlineCode",{parentName:"li"},"schemas")),Object(a.b)("li",{parentName:"ul"},"version: ",Object(a.b)("inlineCode",{parentName:"li"},"0.13.0_some_tmp_version1"))),Object(a.b)("h2",{id:"other-properties-that-might-be-taken-about-libraries"},"Other properties that might be taken about libraries:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Date library was published"),Object(a.b)("li",{parentName:"ul"},"Who was the publisher (although we use integ for everything \ud83e\udd26\ud83c\udffb\u200d\u2642\ufe0f)")),Object(a.b)("h2",{id:"thoughts"},"Thoughts"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Should we scrape everything, or just what we see in ",Object(a.b)("inlineCode",{parentName:"li"},"build.gradle"),"s?")))}p.isMDXComponent=!0},137:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?a.a.createElement(f,c(c({ref:t},p),{},{components:r})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);