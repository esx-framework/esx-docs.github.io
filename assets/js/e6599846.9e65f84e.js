"use strict";(self.webpackChunkesx_docs=self.webpackChunkesx_docs||[]).push([[3254],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return g}});var o=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=o.createContext({}),p=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=p(t.components);return o.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),f=p(n),g=i,d=f["".concat(c,".").concat(g)]||f[g]||u[g]||a;return n?o.createElement(d,r(r({ref:e},s),{},{components:n})):o.createElement(d,r({ref:e},s))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1181:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],l={},c="ShowFloatingHelpNotification",p={unversionedId:"legacy/client/functions/showfloatinghelpnotification",id:"legacy/client/functions/showfloatinghelpnotification",title:"ShowFloatingHelpNotification",description:"This function shows a help notification with a message. These help notification support displaying button inputs, see this list",source:"@site/docs/legacy/client/functions/showfloatinghelpnotification.md",sourceDirName:"legacy/client/functions",slug:"/legacy/client/functions/showfloatinghelpnotification",permalink:"/docs/legacy/client/functions/showfloatinghelpnotification",editUrl:"https://github.com/esx-framework/esx-docs.github.io/tree/develop/docs/legacy/client/functions/showfloatinghelpnotification.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ShowAdvancedNotification",permalink:"/docs/legacy/client/functions/showadvancednotification"},next:{title:"ShowHelpNotification",permalink:"/docs/legacy/client/functions/showhelpnotification"}},s=[{value:"Arguments",id:"arguments",children:[],level:2},{value:"ShowFloatingHelpNotification Example",id:"showfloatinghelpnotification-example",children:[],level:2}],u={toc:s};function f(t){var e=t.components,n=(0,i.Z)(t,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"showfloatinghelpnotification"},"ShowFloatingHelpNotification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"ESX.ShowFloatingHelpNotification(msg, coords)\n")),(0,a.kt)("p",null,"This function shows a help notification with a message. These help notification support displaying button inputs, see ",(0,a.kt)("a",{parentName:"p",href:"https://pastebin.com/HPg8pYwi"},"this list")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"msg"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"The message to display")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"coords"),(0,a.kt)("td",{parentName:"tr",align:null},"Vector3"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"The coordinates to show to notifcation at")))),(0,a.kt)("h2",{id:"showfloatinghelpnotification-example"},"ShowFloatingHelpNotification Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local coords = GetEntityCoords(PlayerPedId())\nESX.ShowFloatingHelpNotification('Your Notification', vector3(coords.x, coords.y, coords.z))\n")))}f.isMDXComponent=!0}}]);