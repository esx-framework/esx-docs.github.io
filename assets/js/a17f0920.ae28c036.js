"use strict";(self.webpackChunkesx_docs=self.webpackChunkesx_docs||[]).push([[3303],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),g=l,d=m["".concat(i,".").concat(g)]||m[g]||p[g]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7419:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],c={},i="GetClosestVehicle",s={unversionedId:"legacy/client/functions/game/getclosestvehicle",id:"legacy/client/functions/game/getclosestvehicle",title:"GetClosestVehicle",description:"This function gets the closest vehicle.",source:"@site/docs/legacy/client/functions/game/getclosestvehicle.md",sourceDirName:"legacy/client/functions/game",slug:"/legacy/client/functions/game/getclosestvehicle",permalink:"/docs/legacy/client/functions/game/getclosestvehicle",editUrl:"https://github.com/esx-framework/esx-docs.github.io/tree/develop/docs/legacy/client/functions/game/getclosestvehicle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetClosestPlayer",permalink:"/docs/legacy/client/functions/game/getclosestplayer"},next:{title:"GetObjects",permalink:"/docs/legacy/client/functions/game/getobjects"}},u=[{value:"Arguments",id:"arguments",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getclosestvehicle"},"GetClosestVehicle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"ESX.Game.GetClosestVehicle(coords, modelFilter)\n")),(0,a.kt)("p",null,"This function gets the closest vehicle."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"coords"),(0,a.kt)("td",{parentName:"tr",align:null},"table"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"(your player ped coords)"),(0,a.kt)("td",{parentName:"tr",align:null},"Coords to search at")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"modelFilter"),(0,a.kt)("td",{parentName:"tr",align:null},"table&vector3"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"Enables whitelist mode for getting closest vehicle. The table must be key-value where the key is the model hash, and value set to true.")))))}m.isMDXComponent=!0}}]);