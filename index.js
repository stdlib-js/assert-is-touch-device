// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("process")):"function"==typeof define&&define.amd?define(["process"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).IS_TOUCH_DEVICE=r(e.require$$0)}(this,(function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,c=o.__defineSetter__,u=o.__lookupGetter__,l=o.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,f,s,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(u.call(e,r)||l.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),s="get"in t,p="set"in t,f&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(e,r,t.get),p&&c&&c.call(e,r,t.set),e};var f=t;function s(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(e){return"boolean"==typeof e}function b(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var g=b();function y(){return g&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function h(e,r){return null!=e&&v.call(e,r)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=y()?function(e){var r,t,n;if(null==e)return d.call(e);t=e[w],r=h(e,w);try{e[w]=void 0}catch(r){return d.call(e)}return n=d.call(e),r?e[w]=t:delete e[w],n}:function(e){return d.call(e)},m=Boolean.prototype.toString;var _=y();function S(e){return"object"==typeof e&&(e instanceof Boolean||(_?function(e){try{return m.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===j(e)))}function O(e){return p(e)||S(e)}function E(){return new Function("return this;")()}s(O,"isPrimitive",p),s(O,"isObject",S);var T="object"==typeof self?self:null,x="object"==typeof window?window:null,P="object"==typeof global?global:null;function k(e){return"boolean"==typeof e}var V=Boolean.prototype.toString;var F=y();function A(e){return"object"==typeof e&&(e instanceof Boolean||(F?function(e){try{return V.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===j(e)))}function B(e){return k(e)||A(e)}function C(){return new Function("return this;")()}s(B,"isPrimitive",k),s(B,"isObject",A);var $,I="object"==typeof self?self:null,G="object"==typeof window?window:null,M="object"==typeof global?global:null;$=Array.isArray?Array.isArray:function(e){return"[object Array]"===j(e)};var R=$;var U=/./;function L(e){return"boolean"==typeof e}var Z=Boolean.prototype.toString;var W=y();function D(e){return"object"==typeof e&&(e instanceof Boolean||(W?function(e){try{return Z.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===j(e)))}function N(e){return L(e)||D(e)}function X(){return new Function("return this;")()}s(N,"isPrimitive",L),s(N,"isObject",D);var q="object"==typeof self?self:null,z="object"==typeof window?window:null,H="object"==typeof global?global:null;var J=function(e){if(arguments.length){if(!L(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return X()}if(q)return q;if(z)return z;if(H)return H;throw new Error("unexpected error. Unable to resolve global object.")}(),K=J.document&&J.document.childNodes,Q=Int8Array;function Y(){return/^\s*function\s*([^(]*)/i}var ee=/^\s*function\s*([^(]*)/i;function re(e){return null!==e&&"object"==typeof e}s(Y,"REGEXP",ee);var te=function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!R(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(re);function ne(e){var r,t,n,o;if(("Object"===(t=j(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ee.exec(n.toString()))return r[1]}return re(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}s(re,"isObjectLikeArray",te);var oe="function"==typeof U||"object"==typeof Q||"function"==typeof K?function(e){return ne(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ne(e).toLowerCase():r};function ie(e){return"function"===oe(e)}var ae,ce=Object.getPrototypeOf;ae=ie(Object.getPrototypeOf)?ce:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===j(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var ue=ae;var le=Object.prototype;function fe(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!R(e)}(e)&&(r=function(e){return null==e?null:(e=Object(e),ue(e))}(e),!r||!h(e,"constructor")&&h(r,"constructor")&&ie(r.constructor)&&"[object Function]"===j(r.constructor)&&h(r,"isPrototypeOf")&&ie(r.isPrototypeOf)&&(r===le||function(e){var r;for(r in e)if(!h(e,r))return!1;return!0}(e)))}function se(e){return"string"==typeof e}var pe=String.prototype.valueOf;var be=y();function ge(e){return"object"==typeof e&&(e instanceof String||(be?function(e){try{return pe.call(e),!0}catch(e){return!1}}(e):"[object String]"===j(e)))}function ye(e){return se(e)||ge(e)}s(ye,"isPrimitive",se),s(ye,"isObject",ge);var de=Object.prototype.toString;var ve=new Function("try {return this === global;} catch ( err ) {return false;}")(),he=e,we=function(e){if(arguments.length){if(!k(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return C()}if(I)return I;if(G)return G;if(M)return M;throw new Error("unexpected error. Unable to resolve global object.")}(),je=/node|io\.js/;var me,_e="object"==typeof global&&global===we&&we===we.global&&("[object global]"===j(we)||"[object Object]"===j(we))&&!0===ve&&"object"==typeof he&&"[object process]"===(me=he,de.call(me))&&fe(he.versions)&&se(he.versions.node)&&(void 0===he.release||fe(he.release)&&se(he.release.name)&&je.test(he.release.name));var Se=new Function("try {return this === window;} catch ( err ) {return false;}")(),Oe=function(e){if(arguments.length){if(!p(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return E()}if(T)return T;if(x)return x;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}();var Ee=!1===_e&&"object"==typeof window&&window===Oe&&!0===Se,Te="function"==typeof Object.defineProperty?Object.defineProperty:null;var xe=Object.defineProperty;function Pe(e){return"number"==typeof e}function ke(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ve(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+ke(o):ke(o)+e,n&&(e="-"+e)),e}var Fe=String.prototype.toLowerCase,Ae=String.prototype.toUpperCase;function Be(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!Pe(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Ve(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Ve(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Ae.call(e.specifier)?Ae.call(t):Fe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ce(e){return"string"==typeof e}var $e=Math.abs,Ie=String.prototype.toLowerCase,Ge=String.prototype.toUpperCase,Me=String.prototype.replace,Re=/e\+(\d)$/,Ue=/e-(\d)$/,Le=/^(\d+)$/,Ze=/^(\d+)e/,We=/\.0$/,De=/\.0*e/,Ne=/(\..*[^0])0*e/;function Xe(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!Pe(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":$e(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Me.call(t,Ne,"$1e"),t=Me.call(t,De,"e"),t=Me.call(t,We,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Me.call(t,Re,"e+0$1"),t=Me.call(t,Ue,"e-0$1"),e.alternate&&(t=Me.call(t,Le,"$1."),t=Me.call(t,Ze,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ge.call(e.specifier)?Ge.call(t):Ie.call(t)}function qe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function ze(e,r,t){var n=r-e.length;return n<0?e:e=t?e+qe(n):qe(n)+e}var He=String.fromCharCode,Je=isNaN,Ke=Array.isArray;function Qe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ye(e){var r,t,n,o,i,a,c,u,l;if(!Ke(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(Ce(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=Qe(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Je(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Je(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Be(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Je(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Je(i)?String(n.arg):He(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Xe(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Ve(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ze(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var er=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function rr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function tr(e){var r,t,n,o;for(t=[],o=0,n=er.exec(e);n;)(r=e.slice(o,er.lastIndex-n[0].length)).length&&t.push(r),t.push(rr(n)),o=er.lastIndex,n=er.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function nr(e){return"string"==typeof e}function or(e){var r,t,n;if(!nr(e))throw new TypeError(or("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=tr(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return Ye.apply(null,t)}var ir,ar=Object.prototype,cr=ar.toString,ur=ar.__defineGetter__,lr=ar.__defineSetter__,fr=ar.__lookupGetter__,sr=ar.__lookupSetter__;ir=function(){try{return Te({},"x",{}),!0}catch(e){return!1}}()?xe:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===cr.call(e))throw new TypeError(or("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===cr.call(t))throw new TypeError(or("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(fr.call(e,r)||sr.call(e,r)?(n=e.__proto__,e.__proto__=ar,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ur&&ur.call(e,r,t.get),a&&lr&&lr.call(e,r,t.set),e};var pr=ir;function br(e,r,t){pr(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function gr(e){return"boolean"==typeof e}var yr=b();function dr(){return yr&&"symbol"==typeof Symbol.toStringTag}var vr=Object.prototype.toString;var hr=Object.prototype.hasOwnProperty;var wr,jr="function"==typeof Symbol?Symbol:void 0,mr="function"==typeof jr?jr.toStringTag:"";wr=dr()?function(e){var r,t,n;if(null==e)return vr.call(e);t=e[mr],r=function(e,r){return null!=e&&hr.call(e,r)}(e,mr);try{e[mr]=void 0}catch(r){return vr.call(e)}return n=vr.call(e),r?e[mr]=t:delete e[mr],n}:function(e){return vr.call(e)};var _r=wr,Sr=Boolean,Or=Boolean.prototype.toString;var Er=dr();function Tr(e){return"object"==typeof e&&(e instanceof Sr||(Er?function(e){try{return Or.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===_r(e)))}function xr(e){return gr(e)||Tr(e)}function Pr(){return new Function("return this;")()}br(xr,"isPrimitive",gr),br(xr,"isObject",Tr);var kr="object"==typeof self?self:null,Vr="object"==typeof window?window:null,Fr="object"==typeof global?global:null,Ar="object"==typeof globalThis?globalThis:null;var Br=function(e){if(arguments.length){if(!gr(e))throw new TypeError(or("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Pr()}if(Ar)return Ar;if(kr)return kr;if(Vr)return Vr;if(Fr)return Fr;throw new Error("unexpected error. Unable to resolve global object.")}();return function(){return!!Ee&&!!("ontouchstart"in Br||Br.DocumentTouch&&Br.document&&Br.document instanceof Br.DocumentTouch||Br.navigator&&(Br.navigator.maxTouchPoints>0||Br.navigator.msMaxTouchPoints>0))}}));
//# sourceMappingURL=index.js.map
