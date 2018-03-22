(function(){var t=[].slice;!function(r,o){"use strict";var n;n=function(){function t(e,t){var i,s,o;null==t&&(t={}),this.$element=r(e),this.options=r.extend({},r.fn.bootstrapSwitch.defaults,{state:this.$element.is(":checked"),size:this.$element.data("size"),animate:this.$element.data("animate"),disabled:this.$element.is(":disabled"),readonly:this.$element.is("[readonly]"),indeterminate:this.$element.data("indeterminate"),inverse:this.$element.data("inverse"),radioAllOff:this.$element.data("radio-all-off"),onColor:this.$element.data("on-color"),offColor:this.$element.data("off-color"),onText:this.$element.data("on-text"),offText:this.$element.data("off-text"),labelText:this.$element.data("label-text"),handleWidth:this.$element.data("handle-width"),labelWidth:this.$element.data("label-width"),baseClass:this.$element.data("base-class"),wrapperClass:this.$element.data("wrapper-class")},t),this.prevOptions={},this.$wrapper=r("<div>",{class:(i=this,function(){var t;return(t=[""+i.options.baseClass].concat(i._getClasses(i.options.wrapperClass))).push(i.options.state?i.options.baseClass+"-on":i.options.baseClass+"-off"),null!=i.options.size&&t.push(i.options.baseClass+"-"+i.options.size),i.options.disabled&&t.push(i.options.baseClass+"-disabled"),i.options.readonly&&t.push(i.options.baseClass+"-readonly"),i.options.indeterminate&&t.push(i.options.baseClass+"-indeterminate"),i.options.inverse&&t.push(i.options.baseClass+"-inverse"),i.$element.attr("id")&&t.push(i.options.baseClass+"-id-"+i.$element.attr("id")),t.join(" ")})()}),this.$container=r("<div>",{class:this.options.baseClass+"-container"}),this.$on=r("<span>",{html:this.options.onText,class:this.options.baseClass+"-handle-on "+this.options.baseClass+"-"+this.options.onColor}),this.$off=r("<span>",{html:this.options.offText,class:this.options.baseClass+"-handle-off "+this.options.baseClass+"-"+this.options.offColor}),this.$label=r("<span>",{html:this.options.labelText,class:this.options.baseClass+"-label"}),this.$element.on("init.bootstrapSwitch",(s=this,function(){return s.options.onInit.apply(e,arguments)})),this.$element.on("switchChange.bootstrapSwitch",(o=this,function(t){if(!1===o.options.onSwitchChange.apply(e,arguments))return o.$element.is(":radio")?r("[name='"+o.$element.attr("name")+"']").trigger("previousState.bootstrapSwitch",!0):o.$element.trigger("previousState.bootstrapSwitch",!0)})),this.$container=this.$element.wrap(this.$container).parent(),this.$wrapper=this.$container.wrap(this.$wrapper).parent(),this.$element.before(this.options.inverse?this.$off:this.$on).before(this.$label).before(this.options.inverse?this.$on:this.$off),this.options.indeterminate&&this.$element.prop("indeterminate",!0),this._init(),this._elementHandlers(),this._handleHandlers(),this._labelHandlers(),this._formHandler(),this._externalLabelHandler(),this.$element.trigger("init.bootstrapSwitch",this.options.state)}return(t.prototype._constructor=t).prototype.setPrevOptions=function(){return this.prevOptions=r.extend(!0,{},this.options)},t.prototype.state=function(t,e){return void 0===t?this.options.state:(this.options.disabled||this.options.readonly||this.options.state&&!this.options.radioAllOff&&this.$element.is(":radio")||(this.$element.is(":radio")?r("[name='"+this.$element.attr("name")+"']").trigger("setPreviousOptions.bootstrapSwitch"):this.$element.trigger("setPreviousOptions.bootstrapSwitch"),this.options.indeterminate&&this.indeterminate(!1),t=!!t,this.$element.prop("checked",t).trigger("change.bootstrapSwitch",e)),this.$element)},t.prototype.toggleState=function(t){return this.options.disabled||this.options.readonly?this.$element:this.options.indeterminate?(this.indeterminate(!1),this.state(!0)):this.$element.prop("checked",!this.options.state).trigger("change.bootstrapSwitch",t)},t.prototype.size=function(t){return void 0===t?this.options.size:(null!=this.options.size&&this.$wrapper.removeClass(this.options.baseClass+"-"+this.options.size),t&&this.$wrapper.addClass(this.options.baseClass+"-"+t),this._width(),this._containerPosition(),this.options.size=t,this.$element)},t.prototype.animate=function(t){return void 0===t?this.options.animate:(t=!!t)===this.options.animate?this.$element:this.toggleAnimate()},t.prototype.toggleAnimate=function(){return this.options.animate=!this.options.animate,this.$wrapper.toggleClass(this.options.baseClass+"-animate"),this.$element},t.prototype.disabled=function(t){return void 0===t?this.options.disabled:(t=!!t)===this.options.disabled?this.$element:this.toggleDisabled()},t.prototype.toggleDisabled=function(){return this.options.disabled=!this.options.disabled,this.$element.prop("disabled",this.options.disabled),this.$wrapper.toggleClass(this.options.baseClass+"-disabled"),this.$element},t.prototype.readonly=function(t){return void 0===t?this.options.readonly:(t=!!t)===this.options.readonly?this.$element:this.toggleReadonly()},t.prototype.toggleReadonly=function(){return this.options.readonly=!this.options.readonly,this.$element.prop("readonly",this.options.readonly),this.$wrapper.toggleClass(this.options.baseClass+"-readonly"),this.$element},t.prototype.indeterminate=function(t){return void 0===t?this.options.indeterminate:(t=!!t)===this.options.indeterminate?this.$element:this.toggleIndeterminate()},t.prototype.toggleIndeterminate=function(){return this.options.indeterminate=!this.options.indeterminate,this.$element.prop("indeterminate",this.options.indeterminate),this.$wrapper.toggleClass(this.options.baseClass+"-indeterminate"),this._containerPosition(),this.$element},t.prototype.inverse=function(t){return void 0===t?this.options.inverse:(t=!!t)===this.options.inverse?this.$element:this.toggleInverse()},t.prototype.toggleInverse=function(){var t,e;return this.$wrapper.toggleClass(this.options.baseClass+"-inverse"),e=this.$on.clone(!0),t=this.$off.clone(!0),this.$on.replaceWith(t),this.$off.replaceWith(e),this.$on=t,this.$off=e,this.options.inverse=!this.options.inverse,this.$element},t.prototype.onColor=function(t){var e;return e=this.options.onColor,void 0===t?e:(null!=e&&this.$on.removeClass(this.options.baseClass+"-"+e),this.$on.addClass(this.options.baseClass+"-"+t),this.options.onColor=t,this.$element)},t.prototype.offColor=function(t){var e;return e=this.options.offColor,void 0===t?e:(null!=e&&this.$off.removeClass(this.options.baseClass+"-"+e),this.$off.addClass(this.options.baseClass+"-"+t),this.options.offColor=t,this.$element)},t.prototype.onText=function(t){return void 0===t?this.options.onText:(this.$on.html(t),this._width(),this._containerPosition(),this.options.onText=t,this.$element)},t.prototype.offText=function(t){return void 0===t?this.options.offText:(this.$off.html(t),this._width(),this._containerPosition(),this.options.offText=t,this.$element)},t.prototype.labelText=function(t){return void 0===t?this.options.labelText:(this.$label.html(t),this._width(),this.options.labelText=t,this.$element)},t.prototype.handleWidth=function(t){return void 0===t?this.options.handleWidth:(this.options.handleWidth=t,this._width(),this._containerPosition(),this.$element)},t.prototype.labelWidth=function(t){return void 0===t?this.options.labelWidth:(this.options.labelWidth=t,this._width(),this._containerPosition(),this.$element)},t.prototype.baseClass=function(t){return this.options.baseClass},t.prototype.wrapperClass=function(t){return void 0===t?this.options.wrapperClass:(t||(t=r.fn.bootstrapSwitch.defaults.wrapperClass),this.$wrapper.removeClass(this._getClasses(this.options.wrapperClass).join(" ")),this.$wrapper.addClass(this._getClasses(t).join(" ")),this.options.wrapperClass=t,this.$element)},t.prototype.radioAllOff=function(t){return void 0===t?this.options.radioAllOff:((t=!!t)===this.options.radioAllOff||(this.options.radioAllOff=t),this.$element)},t.prototype.onInit=function(t){return void 0===t?this.options.onInit:(t||(t=r.fn.bootstrapSwitch.defaults.onInit),this.options.onInit=t,this.$element)},t.prototype.onSwitchChange=function(t){return void 0===t?this.options.onSwitchChange:(t||(t=r.fn.bootstrapSwitch.defaults.onSwitchChange),this.options.onSwitchChange=t,this.$element)},t.prototype.destroy=function(){var t;return(t=this.$element.closest("form")).length&&t.off("reset.bootstrapSwitch").removeData("bootstrap-switch"),this.$container.children().not(this.$element).remove(),this.$element.unwrap().unwrap().off(".bootstrapSwitch").removeData("bootstrap-switch"),this.$element},t.prototype._width=function(){var t,i,s;return(t=this.$on.add(this.$off)).add(this.$label).css("width",""),i="auto"===this.options.handleWidth?Math.max(this.$on.width(),this.$off.width()):this.options.handleWidth,t.width(i),this.$label.width((s=this,function(t,e){return"auto"!==s.options.labelWidth?s.options.labelWidth:e<i?i:e})),this._handleWidth=this.$on.outerWidth(),this._labelWidth=this.$label.outerWidth(),this.$container.width(2*this._handleWidth+this._labelWidth),this.$wrapper.width(this._handleWidth+this._labelWidth)},t.prototype._containerPosition=function(e,t){var i;if(null==e&&(e=this.options.state),this.$container.css("margin-left",(i=this,function(){var t;return t=[0,"-"+i._handleWidth+"px"],i.options.indeterminate?"-"+i._handleWidth/2+"px":e?i.options.inverse?t[1]:t[0]:i.options.inverse?t[0]:t[1]})),t)return setTimeout(function(){return t()},50)},t.prototype._init=function(){var t,e,i,s;return t=function(){return i.setPrevOptions(),i._width(),i._containerPosition(null,function(){if(i.options.animate)return i.$wrapper.addClass(i.options.baseClass+"-animate")})},(i=this).$wrapper.is(":visible")?t():e=o.setInterval((s=this,function(){if(s.$wrapper.is(":visible"))return t(),o.clearInterval(e)}),50)},t.prototype._elementHandlers=function(){return this.$element.on({"setPreviousOptions.bootstrapSwitch":(a=this,function(t){return a.setPrevOptions()}),"previousState.bootstrapSwitch":(n=this,function(t){return n.options=n.prevOptions,n.options.indeterminate&&n.$wrapper.addClass(n.options.baseClass+"-indeterminate"),n.$element.prop("checked",n.options.state).trigger("change.bootstrapSwitch",!0)}),"change.bootstrapSwitch":(o=this,function(t,e){var i;if(t.preventDefault(),t.stopImmediatePropagation(),i=o.$element.is(":checked"),o._containerPosition(i),i!==o.options.state)return o.options.state=i,o.$wrapper.toggleClass(o.options.baseClass+"-off").toggleClass(o.options.baseClass+"-on"),e?void 0:(o.$element.is(":radio")&&r("[name='"+o.$element.attr("name")+"']").not(o.$element).prop("checked",!1).trigger("change.bootstrapSwitch",!0),o.$element.trigger("switchChange.bootstrapSwitch",[i]))}),"focus.bootstrapSwitch":(s=this,function(t){return t.preventDefault(),s.$wrapper.addClass(s.options.baseClass+"-focused")}),"blur.bootstrapSwitch":(i=this,function(t){return t.preventDefault(),i.$wrapper.removeClass(i.options.baseClass+"-focused")}),"keydown.bootstrapSwitch":(e=this,function(t){if(t.which&&!e.options.disabled&&!e.options.readonly)switch(t.which){case 37:return t.preventDefault(),t.stopImmediatePropagation(),e.state(!1);case 39:return t.preventDefault(),t.stopImmediatePropagation(),e.state(!0)}})});var e,i,s,o,n,a},t.prototype._handleHandlers=function(){var e,i;return this.$on.on("click.bootstrapSwitch",(e=this,function(t){return t.preventDefault(),t.stopPropagation(),e.state(!1),e.$element.trigger("focus.bootstrapSwitch")})),this.$off.on("click.bootstrapSwitch",(i=this,function(t){return t.preventDefault(),t.stopPropagation(),i.state(!0),i.$element.trigger("focus.bootstrapSwitch")}))},t.prototype._labelHandlers=function(){return this.$label.on({click:function(t){return t.stopPropagation()},"mousedown.bootstrapSwitch touchstart.bootstrapSwitch":(o=this,function(t){if(!(o._dragStart||o.options.disabled||o.options.readonly))return t.preventDefault(),t.stopPropagation(),o._dragStart=(t.pageX||t.originalEvent.touches[0].pageX)-parseInt(o.$container.css("margin-left"),10),o.options.animate&&o.$wrapper.removeClass(o.options.baseClass+"-animate"),o.$element.trigger("focus.bootstrapSwitch")}),"mousemove.bootstrapSwitch touchmove.bootstrapSwitch":(s=this,function(t){var e;if(null!=s._dragStart&&(t.preventDefault(),!((e=(t.pageX||t.originalEvent.touches[0].pageX)-s._dragStart)<-s._handleWidth||0<e)))return s._dragEnd=e,s.$container.css("margin-left",s._dragEnd+"px")}),"mouseup.bootstrapSwitch touchend.bootstrapSwitch":(i=this,function(t){var e;if(i._dragStart)return t.preventDefault(),i.options.animate&&i.$wrapper.addClass(i.options.baseClass+"-animate"),i._dragEnd?(e=i._dragEnd>-i._handleWidth/2,i._dragEnd=!1,i.state(i.options.inverse?!e:e)):i.state(!i.options.state),i._dragStart=!1}),"mouseleave.bootstrapSwitch":(e=this,function(t){return e.$label.trigger("mouseup.bootstrapSwitch")})});var e,i,s,o},t.prototype._externalLabelHandler=function(){var e,i;return(e=this.$element.closest("label")).on("click",(i=this,function(t){if(t.preventDefault(),t.stopImmediatePropagation(),t.target===e[0])return i.toggleState()}))},t.prototype._formHandler=function(){var t;if(!(t=this.$element.closest("form")).data("bootstrap-switch"))return t.on("reset.bootstrapSwitch",function(){return o.setTimeout(function(){return t.find("input").filter(function(){return r(this).data("bootstrap-switch")}).each(function(){return r(this).bootstrapSwitch("state",this.checked)})},1)}).data("bootstrap-switch",!0)},t.prototype._getClasses=function(t){var e,i,s,o;if(!r.isArray(t))return[this.options.baseClass+"-"+t];for(i=[],s=0,o=t.length;s<o;s++)e=t[s],i.push(this.options.baseClass+"-"+e);return i},t}(),r.fn.bootstrapSwitch=function(){var i,s,o;return s=arguments[0],i=2<=arguments.length?t.call(arguments,1):[],(o=this).each(function(){var t,e;if((e=(t=r(this)).data("bootstrap-switch"))||t.data("bootstrap-switch",e=new n(this,s)),"string"==typeof s)return o=e[s].apply(e,i)}),o},r.fn.bootstrapSwitch.Constructor=n,r.fn.bootstrapSwitch.defaults={state:!0,size:null,animate:!0,disabled:!1,readonly:!1,indeterminate:!1,inverse:!1,radioAllOff:!1,onColor:"primary",offColor:"default",onText:"Yes",offText:"No",labelText:"&nbsp;",handleWidth:"auto",labelWidth:"auto",baseClass:"bootstrap-switch",wrapperClass:"wrapper",onInit:function(){},onSwitchChange:function(){}}}(window.jQuery,window)}).call(this);