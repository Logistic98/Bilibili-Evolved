!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["style/scrollbar"]=n():t["style/scrollbar"]=n()}(self,(function(){return function(){var t,n,r={858:function(t,n,r){var e=r(645)((function(t){return t[1]}));e.push([t.id,"html ::-webkit-scrollbar {\n  width: 5px !important;\n  height: 5px !important;\n}\nhtml ::-webkit-scrollbar-corner,\nhtml ::-webkit-scrollbar-track {\n  background: transparent !important;\n}\nhtml ::-webkit-resizer,\nhtml ::-webkit-scrollbar-thumb {\n  background: #aaa;\n  border-radius: 3px;\n}\nhtml ::-webkit-scrollbar-thumb:hover {\n  background: #888;\n}\nhtml,\nhtml * {\n  scrollbar-color: #aaa transparent;\n  scrollbar-width: thin !important;\n}",""]),t.exports=e},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var r=t(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},
// eslint-disable-next-line func-names
n.i=function(t,r,e){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var o={};if(e)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);e&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),n.push(u))}},n}},227:function(t,n,r){var e=r(858);t.exports="string"==typeof e?e:e.toString()}},e={};function o(t){var n=e[t];if(void 0!==n)return n.exports;var a=e[t]={id:t,exports:{}};return r[t](a,a.exports,o),a.exports}n=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},o.t=function(r,e){if(1&e&&(r=this(r)),8&e)return r;if("object"==typeof r&&r){if(4&e&&r.__esModule)return r;if(16&e&&"function"==typeof r.then)return r}var a=Object.create(null);o.r(a);var i={};t=t||[null,n({}),n([]),n(n)];for(var c=2&e&&r;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){i[t]=function(){return r[t]}}));return i.default=function(){return r},o.d(a,i),a},o.d=function(t,n){for(var r in n)o.o(n,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};return function(){"use strict";o.d(a,{component:function(){return t}});const t={name:"elegantScrollbar",entry:none,displayName:"使用细滚动条",tags:[componentsTags.style,componentsTags.general],instantStyles:[{name:"elegant-scrollbar",style:()=>Promise.resolve().then(o.t.bind(o,227,23))}]}}(),a=a.component}()}));