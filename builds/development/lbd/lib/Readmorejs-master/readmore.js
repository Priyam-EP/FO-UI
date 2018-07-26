!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){"use strict";function e(t){var e=t.clone().css({height:"auto",width:t.width(),maxHeight:"none",overflow:"hidden"}).insertAfter(t),i=e.outerHeight(),o=parseInt(e.css({maxHeight:""}).css("max-height").replace(/[^-\d\.]/g,""),10),n=t.data("defaultHeight");e.remove();var a=o||t.data("collapsedHeight")||n;t.data({expandedHeight:i,maxHeight:o,collapsedHeight:a}).css({maxHeight:"none"})}function i(e,i){this.element=e,this.options=t.extend({},n,i),function(t){if(!a[t.selector]){var e=" ";t.embedCSS&&""!==t.blockCSS&&(e+=t.selector+" + [data-readmore-toggle], "+t.selector+"[data-readmore]{"+t.blockCSS+"}"),e+=t.selector+"[data-readmore]{transition: height "+t.speed+"ms;overflow: hidden;}",function(t,e){var i=t.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),t.getElementsByTagName("head")[0].appendChild(i)}(document,e),a[t.selector]=!0}}(this.options),this._defaults=n,this._name=o,this.init(),window.addEventListener?(window.addEventListener("load",r),window.addEventListener("resize",r)):(window.attachEvent("load",r),window.attachEvent("resize",r))}var o="readmore",n={speed:100,collapsedHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,blockCSS:"display: block; width: 100%;",startOpen:!1,blockProcessed:function(){},beforeToggle:function(){},afterToggle:function(){}},a={},s=0,r=function(t,e,i){var o;return function(){var n=this,a=arguments,s=i&&!o;clearTimeout(o),o=setTimeout(function(){o=null,i||t.apply(n,a)},e),s&&t.apply(n,a)}}(function(){t("[data-readmore]").each(function(){var i=t(this),o="true"===i.attr("aria-expanded");e(i),i.css({height:i.data(o?"expandedHeight":"collapsedHeight")})})},100);i.prototype={init:function(){var i=t(this.element);i.data({defaultHeight:this.options.collapsedHeight,heightMargin:this.options.heightMargin}),e(i);var o=i.data("collapsedHeight"),n=i.data("heightMargin");if(i.outerHeight(!0)<=o+n)return this.options.blockProcessed&&"function"==typeof this.options.blockProcessed&&this.options.blockProcessed(i,!1),!0;var a=i.attr("id")||function(t){var e=++s;return String(null==t?"rmjs-":t)+e}(),r=this.options.startOpen?this.options.lessLink:this.options.moreLink;i.attr({"data-readmore":"","aria-expanded":this.options.startOpen,id:a}),i.after(t(r).on("click",function(t){return function(e){t.toggle(this,i[0],e)}}(this)).attr({"data-readmore-toggle":a,"aria-controls":a})),this.options.startOpen||i.css({height:o}),this.options.blockProcessed&&"function"==typeof this.options.blockProcessed&&this.options.blockProcessed(i,!0)},toggle:function(e,i,o){o&&o.preventDefault(),e||(e=t('[aria-controls="'+this.element.id+'"]')[0]),i||(i=this.element);var n=t(i),a="",s="",r=!1,d=n.data("collapsedHeight");n.height()<=d?(a=n.data("expandedHeight")+"px",s="lessLink",r=!0):(a=d,s="moreLink"),this.options.beforeToggle&&"function"==typeof this.options.beforeToggle&&this.options.beforeToggle(e,n,!r),n.css({height:a}),n.on("transitionend",function(i){return function(){i.options.afterToggle&&"function"==typeof i.options.afterToggle&&i.options.afterToggle(e,n,r),t(this).attr({"aria-expanded":r}).off("transitionend")}}(this)),t(e).replaceWith(t(this.options[s]).on("click",function(t){return function(e){t.toggle(this,i,e)}}(this)).attr({"data-readmore-toggle":n.attr("id"),"aria-controls":n.attr("id")}))},destroy:function(){t(this.element).each(function(){var e=t(this);e.attr({"data-readmore":null,"aria-expanded":null}).css({maxHeight:"",height:""}).next("[data-readmore-toggle]").remove(),e.removeData()})}},t.fn.readmore=function(e){var n=arguments,a=this.selector;return"object"==typeof(e=e||{})?this.each(function(){if(t.data(this,"plugin_"+o)){var n=t.data(this,"plugin_"+o);n.destroy.apply(n)}e.selector=a,t.data(this,"plugin_"+o,new i(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?this.each(function(){var a=t.data(this,"plugin_"+o);a instanceof i&&"function"==typeof a[e]&&a[e].apply(a,Array.prototype.slice.call(n,1))}):void 0}});