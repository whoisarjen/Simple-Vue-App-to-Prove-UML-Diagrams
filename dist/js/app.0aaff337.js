(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0d77d9cf":"f9fe467a","chunk-2d216214":"a631c492","chunk-2d216257":"d9b65536","chunk-3d7e58bb":"b8e17d73","chunk-4423f20d":"1dcae8f4","chunk-2d0c11d9":"e287633f","chunk-2d0ced52":"ba8bfc79","chunk-2d0d0f19":"db6a7633","chunk-2d0e9b9c":"072938a8","chunk-2d2086b7":"e4832822"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0d77d9cf":1,"chunk-4423f20d":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0d77d9cf":"804be4e1","chunk-2d216214":"31d6cfe0","chunk-2d216257":"31d6cfe0","chunk-3d7e58bb":"31d6cfe0","chunk-4423f20d":"e344f29f","chunk-2d0c11d9":"31d6cfe0","chunk-2d0ced52":"31d6cfe0","chunk-2d0d0f19":"31d6cfe0","chunk-2d0e9b9c":"31d6cfe0","chunk-2d2086b7":"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-spacer",{staticClass:"notMobile"}),n("router-link",{staticClass:"notMobile",attrs:{to:"/"}},[e._v("Check history")]),n("v-spacer",{staticClass:"notMobile"}),n("router-link",{staticClass:"notMobile",attrs:{to:"/deposit"}},[e._v("Deposit")]),n("v-spacer",{staticClass:"notMobile"}),n("router-link",{staticClass:"notMobile",attrs:{to:"/withdraw"}},[e._v("Withdraw")]),n("v-spacer",{staticClass:"notMobile"}),n("router-link",{staticClass:"notMobile",attrs:{to:"/loan"}},[e._v("Loan")]),n("v-spacer",{staticClass:"notMobile"}),n("router-link",{staticClass:"notMobile",attrs:{to:"/transfer"}},[e._v("Transfer")]),n("v-spacer",{staticClass:"notMobile"}),n("router-link",{staticClass:"notMobile",attrs:{to:"/login"}},[e._v("Change client")]),n("v-spacer",{staticClass:"notMobile"}),n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:"",color:"primary"}},"v-btn",a,!1),r),[n("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",e._l(e.items,(function(t,r){return n("v-list-item",{key:r},[n("router-link",{attrs:{to:t.location}},[n("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1)],1),n("v-main",[n("router-view")],1)],1)},o=[],c={name:"App",data:function(){return{items:[{title:"Check history",location:"/"},{title:"Deposit",location:"/deposit"},{title:"Withdraw",location:"/withdraw"},{title:"Loan",location:"/loan"},{title:"Transfer",location:"/transfer"},{title:"Change client",location:"/login"}]}},watch:{$route:function(){window.localStorage.getItem("user_ID")||this.$router.push("login")}}},u=c,i=(n("034f"),n("2877")),s=n("6544"),l=n.n(s),d=n("7496"),p=n("40dc"),f=n("8336"),h=n("132d"),m=n("8860"),b=n("da13"),v=n("5d23"),g=n("f6c4"),w=n("e449"),k=n("2fa4"),y=Object(i["a"])(u,a,o,!1,null,null,null),x=y.exports;l()(y,{VApp:d["a"],VAppBar:p["a"],VBtn:f["a"],VIcon:h["a"],VList:m["a"],VListItem:b["a"],VListItemTitle:v["c"],VMain:g["a"],VMenu:w["a"],VSpacer:k["a"]});n("d3b7"),n("3ca3"),n("ddb0");var j=n("8c4f");r["a"].use(j["a"]);var _=[{path:"/",name:"CheckHistory",component:function(){return n.e("chunk-0d77d9cf").then(n.bind(null,"b1ae"))}},{path:"/deposit",name:"Deposit",component:function(){return Promise.all([n.e("chunk-4423f20d"),n.e("chunk-2d0ced52")]).then(n.bind(null,"60ac"))}},{path:"/withdraw",name:"Withdraw",component:function(){return Promise.all([n.e("chunk-4423f20d"),n.e("chunk-2d0c11d9")]).then(n.bind(null,"4557"))}},{path:"/loan",name:"Loan",component:function(){return Promise.all([n.e("chunk-4423f20d"),n.e("chunk-2d0e9b9c")]).then(n.bind(null,"8f80"))}},{path:"/transfer",name:"Transfer",component:function(){return Promise.all([n.e("chunk-4423f20d"),n.e("chunk-2d0d0f19")]).then(n.bind(null,"69aa"))}},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-4423f20d"),n.e("chunk-2d2086b7")]).then(n.bind(null,"a55b"))}}],C=new j["a"]({mode:"history",base:"/",routes:_}),O=C,S=n("f309");r["a"].use(S["a"]);var R=new S["a"]({}),P=n("8baf");r["a"].prototype.JSPDF=P["a"],r["a"].config.productionTip=!1,r["a"].prototype.$connectIndexedDB=function(){return window.indexedDB.open("uml")},n("ceba"),new r["a"]({router:O,vuetify:R,render:function(e){return e(x)}}).$mount("#app")},"85ec":function(e,t,n){},ceba:function(e,t,n){"use strict";n.r(t);var r=n("1da1"),a=(n("96cf"),n("d3b7"),n("25f0"),n("159b"),n("2b0e"));a["a"].prototype.$getAllIndexedDB=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].prototype.$connectIndexedDB();case 2:return n=e.sent,e.abrupt("return",new Promise((function(e){n.onsuccess=Object(r["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.result.transaction(t).objectStore(t).getAll();case 2:a=r.sent,a.onsuccess=function(){e(a.result)};case 4:case"end":return r.stop()}}),r)})))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a["a"].prototype.$getIndexedDBbyID=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].prototype.$connectIndexedDB();case 2:return o=e.sent,e.abrupt("return",new Promise((function(e){o.onsuccess=Object(r["a"])(regeneratorRuntime.mark((function a(){var c,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,o.result.transaction(t,"readwrite").objectStore(t);case 2:return c=a.sent,a.next=5,c.get(n.toString());case 5:u=a.sent,u.onsuccess=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e(u.result);case 1:case"end":return t.stop()}}),t)})));case 7:case"end":return a.stop()}}),a)})))})));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a["a"].prototype.$putIndexedDB=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n,o,c){var u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=c.toString(),e.next=3,a["a"].prototype.$connectIndexedDB();case 3:return u=e.sent,e.abrupt("return",new Promise((function(e){u.onsuccess=Object(r["a"])(regeneratorRuntime.mark((function a(){var i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,u.result.transaction(t,"readwrite").objectStore(t);case 2:return i=a.sent,a.next=5,i.get(n.toString());case 5:s=a.sent,s.onsuccess=Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.result;case 2:return n=t.sent,t.next=5,c;case 5:return n[o]=t.sent,t.next=8,i.put(n);case 8:e();case 9:case"end":return t.stop()}}),t)})));case 7:case"end":return a.stop()}}),a)})))})));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),a["a"].prototype.$deleteIndexedDB=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=n.toString(),e.next=3,a["a"].prototype.$connectIndexedDB();case 3:return o=e.sent,e.abrupt("return",new Promise((function(e){o.onsuccess=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.result.transaction(t,"readwrite").objectStore(t).delete(n);case 2:case"end":return e.stop()}}),e)}))),e()})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a["a"].prototype.$addIndexedDB=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(n&&n.length>0)){e.next=6;break}for(r=0;r<n.length;r++)n[r]._id=n[r]._id.toString();return e.next=4,a["a"].prototype.$connectIndexedDB();case 4:return o=e.sent,e.abrupt("return",new Promise((function(e){o.onsuccess=function(){var r=o.result.transaction(t,"readwrite").objectStore(t);n.forEach((function(e){r.add(e)})),e()}})));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}});
//# sourceMappingURL=app.0aaff337.js.map