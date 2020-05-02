(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),a=(n(0),n(133)),i={id:"ans-2",title:"Getting Started",sidebar_label:"Getting Started"},c={id:"ans-2",title:"Getting Started",description:"## Introduction\r",source:"@site/docs\\ans-2.md",permalink:"/unreal-docs-v2/docs/ans-2",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ans-2.md",sidebar_label:"Getting Started",sidebar:"firstSidebar",previous:{title:"Intro to Nvidia's Ansel Photography Plugin",permalink:"/unreal-docs-v2/docs/ans-1"},next:{title:"Style Guide",permalink:"/unreal-docs-v2/docs/doc1"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Initialization",id:"initialization",children:[]},{value:"Usage",id:"usage",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"Nvidia's Ansel plugin offers a variety of useful tools for recording pictures of in-game footage not limited to stereo-images and panorama or 360\xb0 shots."),Object(a.b)("h2",{id:"initialization"},"Initialization"),Object(a.b)("p",null,'Make sure you have Nvidia GeForce Game Ready Driver installed on your system.\n(In Unreal Engine)  go to Plugins and activate Ansel. You can find Ansel near the bottom in the "Photography" category.\nIf prompted, restart the Unreal Engine.'),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"Run the Ansel configuration application. You can usually find it under"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"C:\\Program Files\\NVIDIA Corporation\\Ansel\\Tools\\NvCameraConfiguration.exe\n")),Object(a.b)("p",null,'Run your game in UE as "standalone".\nPress Alt+F2 to activate the Ansel overlay.'))}s.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return n?o.a.createElement(b,c({ref:t},u,{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);