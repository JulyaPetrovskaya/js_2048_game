parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";for(var e=document.querySelector(".start"),l=document.querySelector(".game-score"),t=document.querySelector(".message-lose"),n=document.querySelector(".message-win"),r=document.querySelector(".message-start"),o=document.querySelectorAll(".field-cell"),c=[],i=!1,f=0,a=0;a<16;a++)c.push({value:0});function u(){var e=c.filter(function(e){return 0===e.value});e.length>0&&(e[Math.floor(Math.random()*e.length)].value=Math.random()<.9?2:4,l.textContent=f,d())}function d(){o.forEach(function(e,l){var t=c[l].value;0!==t?(e.textContent=t,e.classList.remove("field-cell--2","field-cell--4","field-cell--8","field-cell--16","field-cell--32","field-cell--64","field-cell--128","field-cell--256","field-cell--512","field-cell--1024","field-cell--2048"),e.classList.add("field-cell--".concat(t))):(e.textContent="",e.classList.remove("field-cell--2","field-cell--4","field-cell--8","field-cell--16","field-cell--32","field-cell--64","field-cell--128","field-cell--256","field-cell--512","field-cell--1024","field-cell--2048"))})}function s(){f=0,c.forEach(function(e){e.value=0}),i=!1,l.textContent="0",t.classList.remove("show"),n.classList.remove("show"),o.forEach(function(e){e.textContent="",e.classList.remove("field-cell--2","field-cell--4","field-cell--8","field-cell--16","field-cell--32","field-cell--64","field-cell--128","field-cell--256","field-cell--512","field-cell--1024","field-cell--2048")}),u()}function v(){return c.some(function(e){return 2048===e.value})}function h(){if(0===c.filter(function(e){return 0===e.value}).length){for(var e=0;e<c.length;e++){var l=c[e];if(e%4!=3&&l.value===c[e+1].value)return!1;if(e<12&&l.value===c[e+4].value)return!1}return!0}return!1}function m(e){for(var l=e.filter(function(e){return e}),t=0;t<l.length;t++)l[t]===l[t+1]&&(l[t]*=2,f+=l[t],l.splice(t+1,1));for(;l.length<4;)l.push(0);return l}function L(){for(var e=!1,l=0;l<4;l++){for(var t=[],n=0;n<4;n++)t.push(c[4*l+n].value);for(var r=m(t),o=0;o<4;o++)c[4*l+o].value=r[o];e||r.join()===t.join()||(e=!0)}e&&y()}function g(){for(var e=!1,l=0;l<4;l++){for(var t=[],n=3;n>=0;n--)t.push(c[4*l+n].value);for(var r=m(t),o=3;o>=0;o--)c[4*l+o].value=r[3-o];e||r.join()===t.join()||(e=!0)}e&&y()}function w(){for(var e=!1,l=0;l<4;l++){for(var t=[],n=0;n<4;n++)t.push(c[4*n+l].value);for(var r=m(t),o=0;o<4;o++)c[4*o+l].value=r[o];e||r.join()===t.join()||(e=!0)}e&&y()}function y(){u(),d(),p(),h()&&x(!1),v()&&x(!0)}function j(){for(var e=!1,l=0;l<4;l++){for(var t=[],n=3;n>=0;n--)t.push(c[4*n+l].value);for(var r=m(t),o=3;o>=0;o--)c[4*o+l].value=r[3-o];e||r.join()===t.join()||(e=!0)}e&&y()}function p(){l.textContent=f}function x(e){e?n.classList.add("show"):(i=!0,t.classList.add("show"))}e.addEventListener("click",function(){s(),u(),e.textContent="Restart",e.classList.add("restart"),r.classList.add("hidden")}),document.addEventListener("keydown",function(e){i||("ArrowLeft"===e.key?L():"ArrowUp"===e.key?w():"ArrowRight"===e.key?g():"ArrowDown"===e.key&&j())});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.4a7306a1.js.map