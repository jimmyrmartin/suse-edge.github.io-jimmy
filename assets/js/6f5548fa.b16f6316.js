"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[897],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5,title:"Cluster API core concepts"},s="Cluster API core concepts",i={unversionedId:"misc/cluster-api-concepts",id:"misc/cluster-api-concepts",title:"Cluster API core concepts",description:"Intro",source:"@site/docs/misc/cluster-api-concepts.md",sourceDirName:"misc",slug:"/misc/cluster-api-concepts",permalink:"/docs/misc/cluster-api-concepts",draft:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/misc/cluster-api-concepts.md",tags:[],version:"current",lastUpdatedBy:"Atanas Dinov",lastUpdatedAt:1695714720,formattedLastUpdatedAt:"Sep 26, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Cluster API core concepts"},sidebar:"docs",previous:{title:"Running sushy-emulator as a container on SLES/openSUSE",permalink:"/docs/misc/sushy-emulator-sles-certificates-container"},next:{title:"Create a package (RPM or Container image) using OBS (openSUSE Build Service)",permalink:"/docs/dev_howto/create-package-obs"}},l={},c=[{value:"Intro",id:"intro",level:2},{value:"Cluster types",id:"cluster-types",level:2},{value:"Management Cluster",id:"management-cluster",level:3},{value:"Workload Cluster",id:"workload-cluster",level:3},{value:"Providers",id:"providers",level:2},{value:"Infrastructure Provider",id:"infrastructure-provider",level:3},{value:"Bootstrap Provider",id:"bootstrap-provider",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cluster-api-core-concepts"},"Cluster API core concepts"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"Via the ",(0,o.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/"},"official docs"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Cluster API is a Kubernetes sub-project focused on providing declarative APIs and tooling\nto simplify provisioning, upgrading, and operating multiple Kubernetes clusters."),(0,o.kt)("p",{parentName:"blockquote"},"Started by the Kubernetes Special Interest Group (SIG) Cluster Lifecycle,\nthe Cluster API project uses Kubernetes-style APIs and patterns\nto automate cluster lifecycle management for platform operators.\nThe supporting infrastructure, like virtual machines, networks, load balancers, and VPCs,\nas well as the Kubernetes cluster configuration are all defined in the same way\nthat application developers operate deploying and managing their workloads.\nThis enables consistent and repeatable cluster deployments across a wide variety of infrastructure environments.")),(0,o.kt)("h2",{id:"cluster-types"},"Cluster types"),(0,o.kt)("h3",{id:"management-cluster"},"Management Cluster"),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"Management")," cluster manages the state and lifecycle of ",(0,o.kt)("em",{parentName:"p"},"Workload")," clusters using components called providers.\nEach Management cluster stores and reconciles the Cluster API resources (e.g. Machine, MachineDeployment, etc.)\nof Workload clusters by running one or more providers."),(0,o.kt)("h3",{id:"workload-cluster"},"Workload Cluster"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Workload")," clusters, as the name suggests, are used to run and orchestrate the application workloads of the user.\nWorkload clusters, in the context of Cluster API, are always managed by a Management cluster."),(0,o.kt)("h2",{id:"providers"},"Providers"),(0,o.kt)("h3",{id:"infrastructure-provider"},"Infrastructure Provider"),(0,o.kt)("p",null,"Infrastructure providers are responsible for provisioning the necessary infrastructure and compute resources.\nEach node, regardless of its type (e.g. a VM or baremetal), requires specific configuration options\nwhich these providers use during the provisioning process e.g. OS image and checksum, network settings, etc."),(0,o.kt)("p",null,"A popular and widely adopted baremetal infrastructure provider is the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/metal3-io/cluster-api-provider-metal3"},"CAPM3")," project (Cluster API Provider Metal\xb3).\nIt enables users to deploy a Cluster API based cluster using Metal3."),(0,o.kt)("h3",{id:"bootstrap-provider"},"Bootstrap Provider"),(0,o.kt)("p",null,"Bootstrap providers are responsible for turning a fully provisioned server into a Kubernetes node.\nThis includes, but is not limited to, configuring, initializing and joining control plane and worker nodes,\ngenerating kubeconfig and cluster certificates, etc."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/cluster-api-provider-rke2/"},"CAPRKE2")," project\n(Cluster API Provider RKE2) aims to provide both Control Plane and Bootstrap providers for RKE2 based clusters.\nIt is currently in early development by the Rancher team."))}d.isMDXComponent=!0}}]);