!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n){e.exports=require("electron")},function(e,n){e.exports=require("electron-is-dev")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("url")},function(e,n,t){e.exports=t(5)},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(2),i=t.n(o),u=t(3),l=t.n(u),a=t(1),c=t.n(a);let p;const f=()=>{(p=new r.BrowserWindow({width:1364,height:768,webPreferences:{nodeIntegration:!1,allowRunningInsecureContent:!c.a,webSecurity:!c.a}})).setMinimumSize(1364,768),p.loadURL(c.a?"http://localhost:3000":l.a.format({pathname:i.a.join(__dirname,"./index.html"),protocol:"file:",slashes:!0})),c.a&&p.webContents.openDevTools(),p.on("closed",()=>p=null)};r.app.on("ready",()=>{f()}),r.app.on("activate",()=>{null===p&&f()}),r.app.on("window-all-closed",()=>{"darwin"!==process.platform&&r.app.quit()})}]);
//# sourceMappingURL=electron.js.map