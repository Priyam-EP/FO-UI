(function(){function c(t,n){A[g]=t,A[g+1]=n,2===(g+=2)&&r()}function f(t){return"function"==typeof t}function t(){for(var t=0;t<g;t+=2)(0,A[t])(A[t+1]),A[t]=void 0,A[t+1]=void 0;g=0}function u(){}function a(t,n){if(t===n)l(t,new TypeError("You cannot resolve a promise with itself"));else if("function"==typeof n||"object"==typeof n&&null!==n)if(n.constructor===t.constructor)r=t,1===(s=n).a?h(r,s.b):2===r.a?l(r,s.b):p(s,void 0,function(t){a(r,t)},function(t){l(r,t)});else{var e;try{e=n.then}catch(t){E.error=t,e=E}e===E?l(t,E.error):void 0===e?h(t,n):f(e)?(o=n,i=e,c(function(n){var e=!1,t=function(t,n,e,o){try{t.call(n,e,o)}catch(t){return t}}(i,o,function(t){e||(e=!0,o!==t?a(n,t):h(n,t))},function(t){e||(e=!0,l(n,t))});!e&&t&&(e=!0,l(n,t))},t)):h(t,n)}else h(t,n);var o,i,r,s}function e(t){t.f&&t.f(t.b),s(t)}function h(t,n){void 0===t.a&&(t.b=n,t.a=1,0!==t.e.length&&c(s,t))}function l(t,n){void 0===t.a&&(t.a=2,t.b=n,c(e,t))}function p(t,n,e,o){var i=t.e,r=i.length;t.f=null,i[r]=n,i[r+1]=e,i[r+2]=o,0===r&&t.a&&c(s,t)}function s(t){var n=t.e,e=t.a;if(0!==n.length){for(var o,i,r=t.b,s=0;s<n.length;s+=3)o=n[s],i=n[s+e],o?d(e,o,i,r):i(r);t.e.length=0}}function n(){this.error=null}function d(t,n,e,o){var i,r,s,c,u=f(e);if(u){try{i=e(o)}catch(t){T.error=t,i=T}if(i===T?(c=!0,r=i.error,i=null):s=!0,n===i)return void l(n,new TypeError("A promises callback cannot return that same promise."))}else i=o,s=!0;void 0===n.a&&(u&&s?a(n,i):c?l(n,r):1===t?h(n,i):2===t&&l(n,i))}function o(t,n,e,o){this.n=t,this.c=new t(u,o),this.i=e,this.o(n)?(this.m=n,this.d=this.length=n.length,this.l(),0===this.length?h(this.c,this.b):(this.length=this.length||0,this.k(),0===this.d&&h(this.c,this.b))):l(this.c,this.p())}function i(t){if(0,this.b=this.a=void 0,this.e=[],u!==t){if(!f(t))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof i))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");!function(n,t){try{t(function(t){a(n,t)},function(t){l(n,t)})}catch(t){l(n,t)}}(this,t)}}var r,v,y,w,m,b=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},g=0,P=(j="undefined"!=typeof window?window:{}).MutationObserver||j.WebKitMutationObserver,j="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,A=Array(1e3);r="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?function(){process.nextTick(t)}:P?(y=0,w=new P(t),m=document.createTextNode(""),w.observe(m,{characterData:!0}),function(){m.data=y=++y%2}):j?((v=new MessageChannel).port1.onmessage=t,function(){v.port2.postMessage(0)}):function(){setTimeout(t,1)};var E=new n,T=new n;o.prototype.o=function(t){return b(t)},o.prototype.p=function(){return Error("Array Methods must be provided an Array")},o.prototype.l=function(){this.b=Array(this.length)},o.prototype.k=function(){for(var t=this.length,n=this.c,e=this.m,o=0;void 0===n.a&&o<t;o++)this.j(e[o],o)},o.prototype.j=function(t,n){var e=this.n;"object"==typeof t&&null!==t?t.constructor===e&&void 0!==t.a?(t.f=null,this.g(t.a,n,t.b)):this.q(e.resolve(t),n):(this.d--,this.b[n]=this.h(t))},o.prototype.g=function(t,n,e){var o=this.c;void 0===o.a&&(this.d--,this.i&&2===t?l(o,e):this.b[n]=this.h(e)),0===this.d&&h(o,this.b)},o.prototype.h=function(t){return t},o.prototype.q=function(t,n){var e=this;p(t,void 0,function(t){e.g(1,n,t)},function(t){e.g(2,n,t)})};i.all=function(t,n){return new o(this,t,!0,n).c},i.race=function(t,n){function e(t){a(i,t)}function o(t){l(i,t)}var i=new this(u,n);if(!b(t))return l(i,new TypeError("You must pass an array to race.")),i;for(var r=t.length,s=0;void 0===i.a&&s<r;s++)p(this.resolve(t[s]),void 0,e,o);return i},i.resolve=function(t,n){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(u,n);return a(e,t),e},i.reject=function(t,n){var e=new this(u,n);return l(e,t),e},i.prototype={constructor:i,then:function(t,n){var e=this.a;if(1===e&&!t||2===e&&!n)return this;var o=new this.constructor(u),i=this.b;if(e){var r=arguments[e-1];c(function(){d(e,o,r,i)})}else p(this,o,t,n);return o},catch:function(t){return this.then(null,t)}};var M={Promise:i,polyfill:function(){var t,n;"Promise"in(t="undefined"!=typeof global?global:"undefined"!=typeof window&&window.document?window:self)&&"resolve"in t.Promise&&"reject"in t.Promise&&"all"in t.Promise&&"race"in t.Promise&&(new t.Promise(function(t){n=t}),f(n))||(t.Promise=i)}};"function"==typeof define&&define.amd?define(function(){return M}):"undefined"!=typeof module&&module.exports?module.exports=M:void 0!==this&&(this.ES6Promise=M)}).call(window),window&&window.ES6Promise.polyfill();