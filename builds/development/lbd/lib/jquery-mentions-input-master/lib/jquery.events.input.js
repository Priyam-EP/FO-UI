!function(v){v.event.special.input={setup:function(t,n){var e,i=this,u=i.value,r=document.createElement(this.tagName),a="oninput"in r||function(t){if(t.setAttribute("oninput","return"),"function"==typeof t.oninput)return!0;try{document.createEvent("KeyboardEvent");var n=!1,e=function(t){n=!0,t.preventDefault(),t.stopPropagation()};return document.body.appendChild(t),t.addEventListener("input",e,!1),t.removeEventListener("input",e,!1),document.body.removeChild(t),n}catch(t){}}(r),o="inputEventNS"+~~(1e7*Math.random()),d=["focus","blur","paste","cut","keydown","drop",""].join("."+o+" ");function p(){var t=v(i);i.value==u||t.data("triggering.inputEvent")||(u=i.value,t.data("triggering.inputEvent",!0).trigger("input"),window.setTimeout(function(){t.data("triggering.inputEvent",!1)},0))}if(a)return!1;v(this).find("input, textarea").andSelf().filter("input, textarea").bind(d,function(t){"focus"==t.type?(p(),clearInterval(e),e=window.setInterval(p,250)):"blur"==t.type?window.clearInterval(e):window.setTimeout(p,0)}),v(this).data("inputEventHandlerNS",o)},teardown:function(){var t=v(this);t.find("input, textarea").unbind(t.data("inputEventHandlerNS")),t.data("inputEventHandlerNS","")}},v.fn.input=function(t){return t?this.bind("input",t):this.trigger("input")}}(jQuery);