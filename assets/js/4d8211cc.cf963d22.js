"use strict";(self.webpackChunkesx_docs=self.webpackChunkesx_docs||[]).push([[5130],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5968:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],c={},i="SpawnObject",u={unversionedId:"legacy/client/functions/game/spawnobject",id:"legacy/client/functions/game/spawnobject",title:"SpawnObject",description:"This function spawns an object visible to everyone on the server.",source:"@site/docs/legacy/client/functions/game/spawnobject.md",sourceDirName:"legacy/client/functions/game",slug:"/legacy/client/functions/game/spawnobject",permalink:"/docs/legacy/client/functions/game/spawnobject",editUrl:"https://github.com/esx-framework/esx-docs.github.io/tree/develop/docs/legacy/client/functions/game/spawnobject.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SpawnLocalVehicle",permalink:"/docs/legacy/client/functions/game/spawnlocalvehicle"},next:{title:"SpawnVehicle",permalink:"/docs/legacy/client/functions/game/spawnvehicle"}},p=[{value:"Arguments",id:"arguments",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"spawnobject"},"SpawnObject"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"ESX.Game.SpawnObject(modelOrHash, coords, cb)\n")),(0,l.kt)("p",null,"This function spawns an object visible to everyone on the server."),(0,l.kt)("p",null,"!!! warning\nThis is an async function because it awaits the object model to be streamed, there is an example below on how to properly utilize it."),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"modelOrHash"),(0,l.kt)("td",{parentName:"tr",align:null},"string&number"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"You can either specify a model, for example ",(0,l.kt)("inlineCode",{parentName:"td"},"prop_cs_cuffs_01"),", or a object hash")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"coords"),(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The coords where the object should be spawned. You can also parse an vector type without any issues")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cb"),(0,l.kt)("td",{parentName:"tr",align:null},"function"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The returned function when the object has been spawned. The invoked function has one argument, which is the object handle.")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"ESX.Game.SpawnObject('prop_cs_cuffs_01', vector3(120.0, -200.0, 30.0), function(object)\n  print(DoesEntityExist(object), 'this code is async!')\nend)\n\nprint('this code is sync!')\n")))}m.isMDXComponent=!0}}]);