"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[3835],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39238:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"Difference Between MySQL Compatible Databases",date:new Date("2022-04-08T00:00:00.000Z"),authors:["hooopo"]},l=void 0,s={permalink:"/_blog/difference-between-mysql-compatible-databases",source:"@site/_blog/difference-between-mysql-compatible-databases.md",title:"Difference Between MySQL Compatible Databases",description:"Contributors",date:"2022-04-08T00:00:00.000Z",formattedDate:"April 8, 2022",tags:[],readingTime:.815,truncated:!0,authors:[{name:"hooopo",title:"Engineer of TiDB Community",url:"https://twitter.com/hooopo",imageURL:"https://github.com/hooopo.png",key:"hooopo"}],prevItem:{title:"Why You Should Choose TiDB",permalink:"/_blog/why-you-should-choose-tidb"}},u={authorsImageUrls:[void 0]},p=[{value:"Contributors",id:"contributors",children:[],level:2},{value:"Contributions",id:"contributions",children:[],level:2},{value:"Code",id:"code",children:[{value:"The top 10 pull request code additions+deletions of <code>percona/percona-server</code>",id:"the-top-10-pull-request-code-additionsdeletions-of-perconapercona-server",children:[],level:3}],level:2},{value:"Pull Requests",id:"pull-requests",children:[],level:2}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Contributors open pull requests, issues and comment in pr body & issue body")),(0,i.kt)("iframe",{width:"100%",height:"400",src:"/charts/tidb-vs-mysql-compatible-databases-contributor.html?theme=vintage&v=3"}),(0,i.kt)("h2",{id:"contributions"},"Contributions"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Total Number of Pull Request + Issue + Comment + Review")),(0,i.kt)("iframe",{width:"100%",height:"400",src:"/charts/tidb-vs-mysql-compatible-databases-contribution.html?theme=vintage&v=3"}),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"lines of modified code: additions + deletions")),(0,i.kt)("iframe",{width:"100%",height:"400",src:"/charts/tidb-vs-mysql-compatible-databases-code.html?theme=vintage&v=3"}),(0,i.kt)("h3",{id:"the-top-10-pull-request-code-additionsdeletions-of-perconapercona-server"},"The top 10 pull request code additions+deletions of ",(0,i.kt)("inlineCode",{parentName:"h3"},"percona/percona-server")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"gharchive_dev> select (additions+deletions) as lines_modified, concat('https://github.com/percona/percona-server/pull/', number) from github_ev\n            -> ents where repo_name = 'percona/percona-server' order by lines_modified desc limit 10;\n+----------------+-------------------------------------------------------------------+\n| lines_modified | concat('https://github.com/percona/percona-server/pull/', number) |\n+----------------+-------------------------------------------------------------------+\n| 1847591        | https://github.com/percona/percona-server/pull/3474               |\n| 1847131        | https://github.com/percona/percona-server/pull/3474               |\n| 1611523        | https://github.com/percona/percona-server/pull/3978               |\n| 1611239        | https://github.com/percona/percona-server/pull/3978               |\n| 1526190        | https://github.com/percona/percona-server/pull/4204               |\n| 1525900        | https://github.com/percona/percona-server/pull/4235               |\n| 1525495        | https://github.com/percona/percona-server/pull/4235               |\n| 1436855        | https://github.com/percona/percona-server/pull/4204               |\n| 919569         | https://github.com/percona/percona-server/pull/4407               |\n| 831538         | https://github.com/percona/percona-server/pull/3604               |\n+----------------+-------------------------------------------------------------------+\n10 rows in set\nTime: 0.168s\ngharchive_dev>\n")),(0,i.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Pull requests trend")),(0,i.kt)("iframe",{width:"100%",height:"400",src:"/charts/tidb-vs-mysql-compatible-databases-pull-request.html?theme=vintage&v=3"}))}m.isMDXComponent=!0}}]);