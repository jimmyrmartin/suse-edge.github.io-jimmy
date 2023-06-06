"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[122],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:5,title:"*Draft* Edge Site Installation"},a="SUSE Adaptive Telco Infrastructure Platform (ATIP)",s={unversionedId:"product/atip/edge-site",id:"product/atip/edge-site",title:"*Draft* Edge Site Installation",description:"SUSE ATIP is a platform designed for hosting modern, cloud native, Telco applications at scale from core to edge.",source:"@site/docs/product/atip/edge-site.md",sourceDirName:"product/atip",slug:"/product/atip/edge-site",permalink:"/product/atip/edge-site",draft:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/product/atip/edge-site.md",tags:[],version:"current",lastUpdatedBy:"Kristian Zhelyazkov",lastUpdatedAt:1686055229,formattedLastUpdatedAt:"Jun 6, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"*Draft* Edge Site Installation"},sidebar:"docs",previous:{title:"*Draft* Management Cluster Setup",permalink:"/product/atip/management-cluster"},next:{title:"*Draft* Feature Configuration",permalink:"/product/atip/features"}},l={},c=[{value:"Edge site definition",id:"edge-site-definition",level:2},{value:"Installation process",id:"installation-process",level:2},{value:"Cluster Commissioning",id:"cluster-commissioning",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"suse-adaptive-telco-infrastructure-platform-atip"},"SUSE Adaptive Telco Infrastructure Platform (ATIP)"),(0,i.kt)("p",null,"SUSE ATIP is a platform designed for hosting modern, cloud native, Telco applications at scale from core to edge. "),(0,i.kt)("p",null,"This page documents the creation of edge sites using the management cluster created in the previous section"),(0,i.kt)("h2",{id:"edge-site-definition"},"Edge site definition"),(0,i.kt)("p",null,"Defining an initial or new edge site"),(0,i.kt)("h2",{id:"installation-process"},"Installation process"),(0,i.kt)("p",null,"Process of installation"),(0,i.kt)("h2",{id:"cluster-commissioning"},"Cluster Commissioning"),(0,i.kt)("p",null,"Commissioning RKE2 cluster once nodes installed"))}d.isMDXComponent=!0}}]);