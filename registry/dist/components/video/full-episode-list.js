!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/full-episode-list"]=e():t["video/full-episode-list"]=e()}(self,(function(){return function(){var t,e,n={618:function(t,e,n){var o=n(355)((function(t){return t[1]}));o.push([t.id,".video-sections-content-list {\n  max-height: unset !important;\n  height: auto !important;\n}\n.video-sections-content-list .video-section-list {\n  height: auto !important;\n}",""]),t.exports=o},355:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var u=this[i][0];null!=u&&(r[u]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},380:function(t,e,n){var o=n(618);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},599:function(t){function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=599,t.exports=e},284:function(t){"use strict";t.exports="总是完全展开视频选集列表, 注意对番剧无效.\n"}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var u={};t=t||[null,e({}),e([]),e(e)];for(var c=2&o&&n;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((function(t){u[t]=function(){return n[t]}}));return u.default=function(){return n},r.d(i,u),i},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return o}});var t=coreApis.componentApis.define,e=coreApis.utils.urls;const n="fullEpisodeTitle",o=(0,t.defineComponentMetadata)({name:n,instantStyles:[{name:n,style:()=>Promise.resolve().then(r.t.bind(r,380,23))}],entry:none,displayName:"展开选集列表",tags:[componentsTags.video,componentsTags.style],urlInclude:e.videoUrls,commitHash:"24964766add7bb8e358d9bc16a09e01d78677b59",coreVersion:"2.5.0",description:(()=>{const t=r(599);return{...Object.fromEntries(t.keys().map((e=>[e.match(/index\.(.+)\.md$/)[1],t(e)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,284,17)).then((t=>t.default))}})()})}(),i=i.component}()}));