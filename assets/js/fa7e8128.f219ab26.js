"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[2290],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=i,p=u["".concat(o,".").concat(h)]||u[h]||m[h]||r;return a?n.createElement(p,s(s({ref:t},d),{},{components:a})):n.createElement(p,s({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3058:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r={slug:"Linkerd",title:"Edge Computing Reference Architecture with Rancher and Linkerd",authors:{name:"Vince Matev",title:"Partner Alliance Manager",url:"https://github.com/vmatev",image_url:"github.com/vmatev.png"},tags:["edge","linkerd","rancher"]},s="Edge Computing Reference Architecture with Rancher and Linkerd",l={permalink:"/blog/Linkerd",source:"@site/blog/2023-10-26-edge-computing-reference-architecture-with-rancher-and-linkerd.md",title:"Edge Computing Reference Architecture with Rancher and Linkerd",description:"With the exponential growth of connected devices, Edge computing is becoming a game changer. Edge computing is a model that processes data near the network edge where data is generated. It addresses the issues of latency, bandwidth, and data privacy more effectively than centralized cloud architectures. However, managing and orchestrating applications and services at the Edge is no easy task. Robust, lightweight, and reliable tools are needed \u2014 a challenge some open source tools are prepared to tackle. By combining Rancher Prime, Buoyant\u2019s Linkerd, RKE2, and K3s, users get a state-of-the-art, highly secure, highly performant solution for unique edge requirements.",date:"2023-10-26T00:00:00.000Z",formattedDate:"October 26, 2023",tags:[{label:"edge",permalink:"/blog/tags/edge"},{label:"linkerd",permalink:"/blog/tags/linkerd"},{label:"rancher",permalink:"/blog/tags/rancher"}],readingTime:9.945,hasTruncateMarker:!1,authors:[{name:"Vince Matev",title:"Partner Alliance Manager",url:"https://github.com/vmatev",image_url:"github.com/vmatev.png",imageURL:"github.com/vmatev.png"}],frontMatter:{slug:"Linkerd",title:"Edge Computing Reference Architecture with Rancher and Linkerd",authors:{name:"Vince Matev",title:"Partner Alliance Manager",url:"https://github.com/vmatev",image_url:"github.com/vmatev.png",imageURL:"github.com/vmatev.png"},tags:["edge","linkerd","rancher"]},nextItem:{title:"Deploying Intel FlexRan on the SUSE Adaptive Telco Infrastructure Platform",permalink:"/blog/Flexran"}},o={authorsImageUrls:[void 0]},c=[{value:"Introducing the architecture",id:"introducing-the-architecture",level:2},{value:"Why Rancher and Buoyant&#39;s Linkerd?",id:"why-rancher-and-buoyants-linkerd",level:2},{value:"Seamless Integration",id:"seamless-integration",level:3},{value:"Reliability and Robustness",id:"reliability-and-robustness",level:3},{value:"Lightweight and Resource Efficient",id:"lightweight-and-resource-efficient",level:3},{value:"Comprehensive Observability",id:"comprehensive-observability",level:3},{value:"Operational Simplicity",id:"operational-simplicity",level:3},{value:"Edge computing use case examples",id:"edge-computing-use-case-examples",level:2},{value:"Accelerate time-to-value with the Rancher and Buoyant teams",id:"accelerate-time-to-value-with-the-rancher-and-buoyant-teams",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With the exponential growth of connected devices, Edge computing is becoming a game changer. Edge computing is a model that processes data near the network edge where data is generated. It addresses the issues of latency, bandwidth, and data privacy more effectively than centralized cloud architectures. However, managing and orchestrating applications and services at the Edge is no easy task. Robust, lightweight, and reliable tools are needed \u2014 a challenge some open source tools are prepared to tackle. By combining Rancher Prime, Buoyant\u2019s Linkerd, RKE2, and K3s, users get a state-of-the-art, highly secure, highly performant solution for unique edge requirements."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1902).Z,width:"1808",height:"284"})),(0,i.kt)("h2",{id:"introducing-the-architecture"},"Introducing the architecture"),(0,i.kt)("p",null,"Before we get into the \"how,\" let's introduce the edge computing stack and examine why these tools work so well together for an edge computing scenario. If you are running Rancher, we recommend combining Rancher Prime, Buoyant's Linkerd, RKE2, and K3s (for an overview of what each piece does, please refer to the table below)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2381).Z,width:"914",height:"507"})),(0,i.kt)("p",null,"Why this stack for edge computing? First and foremost, they integrate seamlessly, which will save you a lot of headaches. Additionally, Linkerd and RKE2 significantly improve security, while Linkerd provides an additional layer of reliability. This stack is lightweight and resource efficient, making it ideal for resource-constrained environments. And lastly, all these tools focus on operational simplicity. And when it comes to edge computing, that is incredibly important. With multiple disparate devices, you need a unified way to operate them all."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Project Name"),(0,i.kt)("th",{parentName:"tr",align:null},"What it is"),(0,i.kt)("th",{parentName:"tr",align:null},"Why for the edge?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://buoyant.io/cloud"},"Buoyant\u2019s Linkerd")),(0,i.kt)("td",{parentName:"tr",align:null},"Open-source, security-first service mesh for Kubernetes"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides security, reliability, and observability without any code changes. Is ultra-lightweight and easy to install with a small runtime footprint (this is key in edge computing where managing communication must be efficient)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.rancher.com/products/rancher"},"Rancher Prime")),(0,i.kt)("td",{parentName:"tr",align:null},"Open-source multi-cluster Kubernetes orchestration platform"),(0,i.kt)("td",{parentName:"tr",align:null},"Flexible and compatible with any CNCF Kubernetes distribution, including K3s and RKE2, Rancher Prime proactively monitors cluster health and performance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.rke2.io/"},"RKE2")),(0,i.kt)("td",{parentName:"tr",align:null},"CNCF-certified Kubernetes distribution optimized for air-gapped, offline, or edge environments deployed at the core or near the edge."),(0,i.kt)("td",{parentName:"tr",align:null},"Fully CNCF-certified, RKE2 improves security and simplicity of your Kubernetes deployment. It is designed to be secure, reliable, and lightweight, ideal for general-purpose computing and near-edge use cases.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://docs.rke2.io/"},"K3s")),(0,i.kt)("td",{parentName:"tr",align:null},"CNCF-certified ultra-lightweight Kubernetes distribution providing the best choice for clusters running at the edge."),(0,i.kt)("td",{parentName:"tr",align:null},"Ideal for edge applications, allowing for simple deployment and management while still fully CNCF-certified. It is ultra-lightweight and optimized for resource-constrained environments and functions even in remote and disconnected areas.")))),(0,i.kt)("p",null,"Security, reliability, and observability are all critical concerns for edge computing, and it\u2019s therefore important to choose an architecture that helps, rather than hinders, accomplishing these goals. An effective architecture will be simple to deploy and operate, using technologies in ways that play to their strengths, as described above. With Rancher and Linkerd, we can adopt an extremely simple architecture that nevertheless brings an enormous amount of functionality to the table:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6766).Z,width:"1039",height:"470"})),(0,i.kt)("p",null,"Here, our instruments (on the left of the diagram) are connected to IoT \u201cgateway\u201d systems running Linux. By deploying k3s clusters with Linkerd all the way out on the edge gateways, we can use Linkerd\u2019s secure multicluster capabilities to extend the secure service mesh all the way from the central cluster (shown on the right, running RKE) to the edge gateways themselves."),(0,i.kt)("p",null,"These tools all integrate seamlessly, providing a secure, reliable, observable edge platform that is lightweight and resource efficient. Now let's explore why we believe these technologies are a perfect match for the edge."),(0,i.kt)("h2",{id:"why-rancher-and-buoyants-linkerd"},"Why Rancher and Buoyant's Linkerd?"),(0,i.kt)("h3",{id:"seamless-integration"},"Seamless Integration"),(0,i.kt)("p",null,"One of the most significant advantages of combining Rancher Prime, Linkerd, RKE2, and K3s is their compatibility. These tools are designed to work hand-in-hand, providing a seamless experience. Rancher provides the overarching platform to manage your Kubernetes clusters, including RKE2, K3s, EKS, AKS, GKE, etc. And Linkerd easily integrates with any Kubernetes distribution, adding a service mesh layer to your Rancher-managed clusters."),(0,i.kt)("h3",{id:"reliability-and-robustness"},"Reliability and Robustness"),(0,i.kt)("p",null,"Linkerd adds a layer of reliability and robustness to your Kubernetes clusters by providing traffic splitting, retries, and timeouts capabilities for your applications. With its fault-tolerance feature, Linkerd ensures your applications continue running smoothly, even in the event of a network failure."),(0,i.kt)("p",null,"RKE2 takes Kubernetes security to the next level. It includes several enhancements like CIS benchmark compliance, security by default, and defense in depth. These features, along with Linkerd's ability to automate mutual TLS for all service-to-service communication, provide a secure environment for your Edge computing needs."),(0,i.kt)("h3",{id:"lightweight-and-resource-efficient"},"Lightweight and Resource Efficient"),(0,i.kt)("p",null,"Edge environments often have limited resources. K3s is designed explicitly for such situations. It is a fully compliant Kubernetes distribution with a significantly smaller footprint, consuming less than half the memory of a typical Kubernetes installation. This lightweight nature extends to Linkerd as well, which maintains a small runtime footprint, making it an ideal service mesh for Edge environments."),(0,i.kt)("h3",{id:"comprehensive-observability"},"Comprehensive Observability"),(0,i.kt)("p",null,"With numerous devices and applications running in various locations, clearly understanding their performance and issues is vital. The Rancher Prime, Linkerd, RKE2, and K3s stack addresses that by providing comprehensive observability capabilities."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Rancher")," enables users to monitor and manage clusters from a unified interface, regardless of where they are deployed. With built-in monitoring and alerting tools, users get detailed insight into cluster health, allowing for quick identification and resolution of potential issues. ",(0,i.kt)("strong",{parentName:"p"},"Linkerd")," provides deep real-time data into your applications' performance and includes features such as request volume, success rates, and latency distributions for all meshed services. Users get a more granular level of observability into microservices communication, which is crucial in Edge computing scenarios where the network is notorious for being unstable and latency-sensitive. Linkerd also automatically adds mTLS to all service-to-service communication, adding security with no code changes, which is particularly valuable in Edge computing."),(0,i.kt)("h3",{id:"operational-simplicity"},"Operational Simplicity"),(0,i.kt)("p",null,"When it comes to Edge computing, operational simplicity is key. Edge environments involve managing numerous devices, often spread across multiple geographical locations, making traditional management methods impractical. Rancher simplifies Kubernetes cluster management with an intuitive user interface and robust API. ",(0,i.kt)("strong",{parentName:"p"},"Rancher")," allows users to manage all their Kubernetes clusters from a single control point, whether in the cloud, data center, or Edge environments. This unified approach simplifies operations and reduces the complexity of managing multiple clusters. "),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Linkerd")," service mesh requires minimal configuration and comes with zero-config features such as load balancing, retries, timeouts, and more. With no time-consuming setup, developers have more time to build business logic. That being said, edge devices will require some initial setup work and configuration. Due to their resource limitations, these devices typically require deployment optimization to ensure they run efficiently."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Linkerd Architecture:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7155).Z,width:"528",height:"682"})),(0,i.kt)("p",null,"The Linkerd architecture is fairly simple. The Linkerd control plane manages Linkerd\u2019s operation; it also has a CLI that the user can use to configure, and examine, the mesh. Application Pods that are part of the mesh have the ultra-fast, ultra-lightweight Linkerd proxy, purpose-built in Rust, injected into them as a sidecar container. Once the proxy is injected, all application communication goes through the proxy, which manages mTLS, workload authentication and authorization, retries, circuit breaking, metrics collection, and much more. Having these critical features uniformly applied across the entire application at the platform level eliminates the need to change the application itself, meaning that the application developers are free to focus on the business needs of the application rather than on the complexities of the network."),(0,i.kt)("h2",{id:"edge-computing-use-case-examples"},"Edge computing use case examples"),(0,i.kt)("p",null,"Industries such as manufacturing, healthcare, transportation, retail, and energy are all increasingly taking advantage of edge computing to optimize their operations. Let's look at some examples. But keep in mind that the stack is vertical agnostic. The role of Rancher, Linkerd, K3s, and RKE2 is always the same. The examples below put them in industry-specific context. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Industry Use Case"),(0,i.kt)("th",{parentName:"tr",align:null},"Retail Industry - Point of Sale (POS) Systems"),(0,i.kt)("th",{parentName:"tr",align:null},"Manufacturing - Predictive Maintenance"),(0,i.kt)("th",{parentName:"tr",align:null},"Healthcare - Remote Patient Monitoring"),(0,i.kt)("th",{parentName:"tr",align:null},"Transportation - Fleet Management"),(0,i.kt)("th",{parentName:"tr",align:null},"Summing it up"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Specific challenge")),(0,i.kt)("td",{parentName:"tr",align:null},"In retail environments the people setting up and maintaining the physical devices are more likely to be store managers than technicians. This leads to fragile physical systems."),(0,i.kt)("td",{parentName:"tr",align:null},"Predictive maintenance is often critical. Manufacturing equipment sensors send data to the central system that predicts potential equipment failures."),(0,i.kt)("td",{parentName:"tr",align:null},"In remote patient monitoring scenarios, patient health data is often collected by various devices and sent to a central system for analysis and monitoring."),(0,i.kt)("td",{parentName:"tr",align:null},"Modern fleet management uses real-time vehicle data for route optimization, improved fuel efficiency, and predictive maintenance."),(0,i.kt)("td",{parentName:"tr",align:null},"Edge devices must process and analyze data in real-time to ensure business continuity (manufacturing, transportation), save lives (healthcare), or save money (retail).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Rancher")),(0,i.kt)("td",{parentName:"tr",align:null},"Multi-cluster management enables easy containerized app deployment and management across stores in various geo locations\u200b\u200b."),(0,i.kt)("td",{parentName:"tr",align:null},"Manages edge deployments, providing a central point of control for all the clusters running on the factory floor."),(0,i.kt)("td",{parentName:"tr",align:null},"Helps manage the deployment of these applications across various devices and locations, ensuring uniformity and ease of management."),(0,i.kt)("td",{parentName:"tr",align:null},"Manages edge deployments across various vehicles, providing a central point of control for all the clusters."),(0,i.kt)("td",{parentName:"tr",align:null},"Centralized management of distributed containerized apps on the edge.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Linkerd")),(0,i.kt)("td",{parentName:"tr",align:null},"Guarantees secure, reliable communication between store POS systems and cloud-based central inventory management systems. Provides real-time inventory updates and transaction processing. Seamlessly merges multiple clusters into a single secure mesh."),(0,i.kt)("td",{parentName:"tr",align:null},"Guarantees secure, reliable communication between sensors and the applications processing the data. Seamlessly merges multiple clusters into a single secure mesh."),(0,i.kt)("td",{parentName:"tr",align:null},"Guarantees secure and reliable communication between patient devices and central health monitoring system. Seamlessly merges multiple clusters into a single secure mesh."),(0,i.kt)("td",{parentName:"tr",align:null},"Guarantees secure and reliable communication between the onboard devices and the central fleet management system. Seamlessly merges multiple clusters into a single secure mesh."),(0,i.kt)("td",{parentName:"tr",align:null},"Guarantees secure and reliable communication from the edge to the central processing and analysis system.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"RKE2")),(0,i.kt)("td",{parentName:"tr",align:null},"For store backend systems, ensuring reliable and secure operation of the POS system."),(0,i.kt)("td",{parentName:"tr",align:null},"Provides secure, reliable Kubernetes runtime for the central systems processing and analyzing the sensor data."),(0,i.kt)("td",{parentName:"tr",align:null},"Provides secure, reliable Kubernetes runtime for central health monitoring systems, so patient data is processed accurately and securely."),(0,i.kt)("td",{parentName:"tr",align:null},"Provides secure, reliable Kubernetes runtime for central fleet management systems, ensuring real-time fleet data is processed accurately and securely."),(0,i.kt)("td",{parentName:"tr",align:null},"Provides secure, reliable Kubernetes runtime for the central system.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"K3s")),(0,i.kt)("td",{parentName:"tr",align:null},"Efficiently deploy and manage containerized apps across multiple stores."),(0,i.kt)("td",{parentName:"tr",align:null},"Run data processing apps at the edge, close to data source, reducing latency and network load\u200b\u200b."),(0,i.kt)("td",{parentName:"tr",align:null},"Efficiently processes data at the edge, reducing latency and ensuring timely alerts in case of any health anomalies\u200b."),(0,i.kt)("td",{parentName:"tr",align:null},"Processes data at the edge, providing real-time insights and reducing network load\u200b\u200b."),(0,i.kt)("td",{parentName:"tr",align:null},"Efficiently processes data at the edge.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Edge Computing stack:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2055).Z,width:"1247",height:"648"})),(0,i.kt)("h2",{id:"accelerate-time-to-value-with-the-rancher-and-buoyant-teams"},"Accelerate time-to-value with the Rancher and Buoyant teams"),(0,i.kt)("p",null,"As Edge computing use cases rapidly expand, the Rancher Prime, Linkerd, RKE2, and K3s toolkit offers a state-of-the-art, highly secure, and highly performant to these unique challenges. It provides organizations and developers with the tools and strategies they need to deliver fast, reliable performance and robust, secure communication between microservices and applications, all while efficiently managing and orchestrating Kubernetes clusters."),(0,i.kt)("p",null,"Practical use cases showcase how these open source tools synergize to create robust, efficient, and flexible Edge computing solutions. From Retail industry POS systems to remote patient healthcare monitoring, this stack has clear advantages. An easy integration streamlines your Edge computing implementation, and enables you to process data at the Edge, while ensuring reliable and secure data transfer, reducing latency, and providing scalability and flexibility. "),(0,i.kt)("p",null,"As with any implementation, there are some challenges, however. The initial setup and configuration on the edge can be complex. A deep understanding of these tools and Kubernetes is required. If you need help and want to accelerate your time-to-value, the Buoyant and SUSE teams can help. Reach out, and let's chat!"),(0,i.kt)("p",null,"Contact the Buoyant team at: ",(0,i.kt)("a",{parentName:"p",href:"https://buoyant.io/contact"},"https://buoyant.io/contact")),(0,i.kt)("p",null,"Contact the SUSE team at: ",(0,i.kt)("a",{parentName:"p",href:"https://www.suse.com/contact/"},"https://www.suse.com/contact/")),(0,i.kt)("p",null,"To sum it up, combining ",(0,i.kt)("strong",{parentName:"p"},"Rancher Prime"),", ",(0,i.kt)("strong",{parentName:"p"},"Linkerd"),", ",(0,i.kt)("strong",{parentName:"p"},"RKE2"),", and ",(0,i.kt)("strong",{parentName:"p"},"K3s")," delivers a robust, observable, and easy-to-manage Edge computing solution. Organizations gain a powerful set of capabilities to improve edge computing performance and tackle the complexities and challenges of managing edge environments. As edge computing applications across  industries continue to proliferate, these tools will play an increasingly critical role in shaping the future of how we process, manage, and utilize data in an increasingly decentralized world."))}m.isMDXComponent=!0},2381:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Buoyant-SUSE-Edge-Computing-fbfe7a87141d5cd5062111fa3b32cd7d.png"},6766:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Buoyant-SUSE-Joint-reference-architecture-1-fc6a321363abe740c2715efd748ace9a.png"},2055:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Buoyant-SUSE-Joint-reference-architecture-2-aa72b05f1d1c7c79b20acb06e785f9af.png"},7155:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Buoyant-SUSE-Linkerd-architecture-8509c72ae1829e63ab4ceacdb3a21d69.png"},1902:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Buoyant-SUSE-logo-bf9dcd47e85ef0054a06176989c6d779.png"}}]);