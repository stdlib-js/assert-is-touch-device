// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("process")):"function"==typeof define&&define.amd?define(["process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).IS_TOUCH_DEVICE=r(e.require$$0)}(this,(function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(e){return"number"==typeof e}function o(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+o(i):o(i)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(e){var r,t,o;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===e.specifier||10!==r)&&(o=4294967295+o+1),o<0?(t=(-o).toString(r),e.precision&&(t=i(t,e.precision,e.padRight)),t="-"+t):(t=o.toString(r),o||e.precision?e.precision&&(t=i(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===c.call(e.specifier)?c.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,t,o=parseFloat(e.arg);if(!isFinite(o)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);o=e.arg}switch(e.specifier){case"e":case"E":t=o.toExponential(e.precision);break;case"f":case"F":t=o.toFixed(e.precision);break;case"g":case"G":s(o)<1e-4?((r=e.precision)>0&&(r-=1),t=o.toExponential(r)):t=o.toPrecision(e.precision),e.alternate||(t=p.call(t,w,"$1e"),t=p.call(t,v,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,d,"e-0$1"),e.alternate&&(t=p.call(t,b,"$1."),t=p.call(t,y,"$1.e")),o>=0&&e.sign&&(t=e.sign+t),t=e.specifier===f.call(e.specifier)?f.call(t):l.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,S=Array.isArray;function E(e){return e!=e}function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,o,a,c,s,l,f,p,g,d,b;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",s=1,l=0;l<e.length;l++)if(n=e[l],"string"==typeof n)c+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+j(b):j(b)+p)),c+=n.arg||"",s+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,n,o;for(t=[],o=0,n=T.exec(e);n;)(r=e.slice(o,T.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),o=T.lastIndex,n=T.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function A(e){var r,t;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[P(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var F,V=Object.prototype,$=V.toString,C=V.__defineGetter__,I=V.__defineSetter__,B=V.__lookupGetter__,R=V.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(B.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=V,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(e,r,t.get),a&&I&&I.call(e,r,t.set),e};var L=F;function G(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Z(e){return"boolean"==typeof e}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function U(){return M&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;function X(e,r){return null!=e&&D.call(e,r)}var q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"";var H=U()?function(e){var r,t,n;if(null==e)return W.call(e);t=e[z],r=X(e,z);try{e[z]=void 0}catch(r){return W.call(e)}return n=W.call(e),r?e[z]=t:delete e[z],n}:function(e){return W.call(e)},N=Boolean,J=Boolean.prototype.toString;var K=U();function Q(e){return"object"==typeof e&&(e instanceof N||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function Y(e){return Z(e)||Q(e)}G(Y,"isPrimitive",Z),G(Y,"isObject",Q);var ee,re="object"==typeof self?self:null,te="object"==typeof window?window:null,ne="object"==typeof global?global:null,oe="object"==typeof globalThis?globalThis:null;function ie(e){if(arguments.length){if(!Z(e))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(oe)return oe;if(re)return re;if(te)return te;if(ne)return ne;throw new Error("unexpected error. Unable to resolve global object.")}ee=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};var ae=ee;var ce=/./,ue=ie(),se=ue.document&&ue.document.childNodes,le=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var pe=/^\s*function\s*([^(]*)/i;function ge(e){return null!==e&&"object"==typeof e}G(fe,"REGEXP",pe);var de=function(e){if("function"!=typeof e)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ae(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ge);function be(e){var r,t,n,o;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=pe.exec(n.toString()))return r[1]}return ge(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(ge,"isObjectLikeArray",de);var ye="function"==typeof ce||"object"==typeof le||"function"==typeof se?function(e){return be(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?be(e).toLowerCase():r};function he(e){return"function"===ye(e)}var ve,we=Object,me=Object.getPrototypeOf;ve=he(Object.getPrototypeOf)?me:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===H(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var je=ve;var _e=Object.prototype;function Se(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ae(e)}(e)&&(r=function(e){return null==e?null:(e=we(e),je(e))}(e),!r||!X(e,"constructor")&&X(r,"constructor")&&he(r.constructor)&&"[object Function]"===H(r.constructor)&&X(r,"isPrototypeOf")&&he(r.isPrototypeOf)&&(r===_e||function(e){var r;for(r in e)if(!X(e,r))return!1;return!0}(e)))}function Ee(e){return"string"==typeof e}var Oe=String.prototype.valueOf;var xe=U();function Te(e){return"object"==typeof e&&(e instanceof String||(xe?function(e){try{return Oe.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function ke(e){return Ee(e)||Te(e)}G(ke,"isPrimitive",Ee),G(ke,"isObject",Te);var Pe=Object.prototype.toString;var Ae=new Function("try {return this === global;} catch ( err ) {return false;}")(),Fe=e,Ve=ie(),$e=/node|io\.js/;var Ce,Ie="object"==typeof global&&global===Ve&&Ve===Ve.global&&("[object global]"===H(Ve)||"[object Object]"===H(Ve))&&!0===Ae&&"object"==typeof Fe&&"[object process]"===(Ce=Fe,Pe.call(Ce))&&Se(Fe.versions)&&Ee(Fe.versions.node)&&(void 0===Fe.release||Se(Fe.release)&&Ee(Fe.release.name)&&$e.test(Fe.release.name));var Be=new Function("try {return this === window;} catch ( err ) {return false;}")(),Re=ie();var Le=!1===Ie&&"object"==typeof window&&window===Re&&!0===Be,Ge=ie();return function(){return!!Le&&!!("ontouchstart"in Ge||Ge.DocumentTouch&&Ge.document&&Ge.document instanceof Ge.DocumentTouch||Ge.navigator&&(Ge.navigator.maxTouchPoints>0||Ge.navigator.msMaxTouchPoints>0))}}));
//# sourceMappingURL=index.js.map
