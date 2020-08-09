(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{78:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return p}));var t=r(2),o=r(6),i=(r(0),r(93)),a={id:"configuration",title:"Configuration",sidebar_label:"Configuration"},c={unversionedId:"scraping/configuration",id:"scraping/configuration",isDocsHomePage:!1,title:"Configuration",description:"There are always edge cases, things we want to avoid or configure.",source:"@site/docs/scraping/configuration.md",permalink:"/dependencies-hub/docs/scraping/configuration",editUrl:"https://github.com/gioragutt/dependencies-hub/edit/master/docs/docs/scraping/configuration.md",sidebar_label:"Configuration",sidebar:"docs",previous:{title:"The Scraping Process",permalink:"/dependencies-hub/docs/scraping/process"},next:{title:"Possible Caveats",permalink:"/dependencies-hub/docs/scraping/possible-caveats"}},u=[],s={rightToc:u};function p(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are always edge cases, things we want to avoid or configure."),Object(i.b)("p",null,"There are two ways to congfigure such a service:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Service level configuration, via some interface"),Object(i.b)("li",{parentName:"ol"},"Repo level configuration, where configuration files sit in the repo (such as Jenkinsfile)")),Object(i.b)("p",null,"..."))}p.isMDXComponent=!0},93:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),d=t,b=l["".concat(a,".").concat(d)]||l[d]||f[d]||i;return r?o.a.createElement(b,c(c({ref:n},s),{},{components:r})):o.a.createElement(b,c({ref:n},s))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);