// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("process")):"function"==typeof define&&define.amd?define(["process"],r):(t="undefined"!=typeof globalThis?globalThis:t||self).IS_TOUCH_DEVICE=r(t.require$$0)}(this,(function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,o=Object.defineProperty,n=Object.prototype,u=n.toString,c=n.__defineGetter__,i=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?o:function(t,r,e){var o,l,s,p;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(t,r)||f.call(t,r)?(o=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=o):t[r]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&c&&c.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t};var l=e;function s(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&j.call(t,r)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var m=b()?function(t){var r,e,o;if(null==t)return v.call(t);e=t[g],r=d(t,g);try{t[g]=void 0}catch(r){return v.call(t)}return o=v.call(t),r?t[g]=e:delete t[g],o}:function(t){return v.call(t)},_=Boolean.prototype.toString;var w=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function O(t){return p(t)||h(t)}function S(){return new Function("return this;")()}s(O,"isPrimitive",p),s(O,"isObject",h);var P,T="object"==typeof self?self:null,E="object"==typeof window?window:null,A="object"==typeof global?global:null;function x(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(T)return T;if(E)return E;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}P=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};var B=P;var F=/./,C=x(),V=C.document&&C.document.childNodes,k=Int8Array;function D(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;function I(t){return null!==t&&"object"==typeof t}s(D,"REGEXP",G);var L=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,o;if(!B(r))return!1;if(0===(e=r.length))return!1;for(o=0;o<e;o++)if(!1===t(r[o]))return!1;return!0}}(I);function M(t){var r,e,o,n;if(("Object"===(e=m(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(o=t.constructor).name)return o.name;if(r=G.exec(o.toString()))return r[1]}return I(n=t)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":e}s(I,"isObjectLikeArray",L);var q="function"==typeof F||"object"==typeof k||"function"==typeof V?function(t){return M(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?M(t).toLowerCase():r};function U(t){return"function"===q(t)}var $,H=Object.getPrototypeOf;$=U(Object.getPrototypeOf)?H:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===m(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var N=$;var R=Object.prototype;function X(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!B(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),N(t))}(t),!r||!d(t,"constructor")&&d(r,"constructor")&&U(r.constructor)&&"[object Function]"===m(r.constructor)&&d(r,"isPrototypeOf")&&U(r.isPrototypeOf)&&(r===R||function(t){var r;for(r in t)if(!d(t,r))return!1;return!0}(t)))}function z(t){return"string"==typeof t}var J=String.prototype.valueOf;var K=b();function Q(t){return"object"==typeof t&&(t instanceof String||(K?function(t){try{return J.call(t),!0}catch(t){return!1}}(t):"[object String]"===m(t)))}function W(t){return z(t)||Q(t)}s(W,"isPrimitive",z),s(W,"isObject",Q);var Y=Object.prototype.toString;var Z=new Function("try {return this === global;} catch ( err ) {return false;}")(),tt=t,rt=x(),et=/node|io\.js/;var ot,nt="object"==typeof global&&global===rt&&rt===rt.global&&("[object global]"===m(rt)||"[object Object]"===m(rt))&&!0===Z&&"object"==typeof tt&&"[object process]"===(ot=tt,Y.call(ot))&&X(tt.versions)&&z(tt.versions.node)&&(void 0===tt.release||X(tt.release)&&z(tt.release.name)&&et.test(tt.release.name));var ut=new Function("try {return this === window;} catch ( err ) {return false;}")(),ct=x();var it=!1===nt&&"object"==typeof window&&window===ct&&!0===ut,at=x();return function(){return!!it&&!!("ontouchstart"in at||at.DocumentTouch&&at.document&&at.document instanceof at.DocumentTouch||at.navigator&&(at.navigator.maxTouchPoints>0||at.navigator.msMaxTouchPoints>0))}}));
//# sourceMappingURL=index.js.map
