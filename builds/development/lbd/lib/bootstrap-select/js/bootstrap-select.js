!function(I){"use strict";var l,e,r,t,i,d,n;String.prototype.includes||(l={}.toString,e=function(){try{var e={},t=Object.defineProperty,i=t(e,e,e)&&t}catch(e){}return i}(),r="".indexOf,t=function(e){if(null==this)throw new TypeError;var t=String(this);if(e&&"[object RegExp]"==l.call(e))throw new TypeError;var i=t.length,n=String(e),s=n.length,o=1<arguments.length?arguments[1]:void 0,a=o?Number(o):0;return a!=a&&(a=0),!(i<s+Math.min(Math.max(a,0),i))&&-1!=r.call(t,n,a)},e?e(String.prototype,"includes",{value:t,configurable:!0,writable:!0}):String.prototype.includes=t),String.prototype.startsWith||(i=function(){try{var e={},t=Object.defineProperty,i=t(e,e,e)&&t}catch(e){}return i}(),d={}.toString,n=function(e){if(null==this)throw new TypeError;var t=String(this);if(e&&"[object RegExp]"==d.call(e))throw new TypeError;var i=t.length,n=String(e),s=n.length,o=1<arguments.length?arguments[1]:void 0,a=o?Number(o):0;a!=a&&(a=0);var l=Math.min(Math.max(a,0),i);if(i<s+l)return!1;for(var r=-1;++r<s;)if(t.charCodeAt(l+r)!=n.charCodeAt(r))return!1;return!0},i?i(String.prototype,"startsWith",{value:n,configurable:!0,writable:!0}):String.prototype.startsWith=n),Object.keys||(Object.keys=function(e,t,i){for(t in i=[],e)i.hasOwnProperty.call(e,t)&&i.push(t);return i});var s={useDefault:!1,_set:I.valHooks.select.set};I.valHooks.select.set=function(e,t){return t&&!s.useDefault&&I(e).data("selected",!0),s._set.apply(this,arguments)};var w=null,o=function(){try{return new Event("change"),!0}catch(e){return!1}}();function a(e){return I.each([{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}],function(){e=e?e.replace(this.re,this.ch):""}),e}I.fn.triggerNative=function(e){var t,i=this[0];i.dispatchEvent?(o?t=new Event(e,{bubbles:!0}):(t=document.createEvent("Event")).initEvent(e,!0,!1),i.dispatchEvent(t)):i.fireEvent?((t=document.createEventObject()).eventType=e,i.fireEvent("on"+e,t)):this.trigger(e)},I.expr.pseudos.icontains=function(e,t,i){var n=I(e).find("a");return(n.data("tokens")||n.text()).toString().toUpperCase().includes(i[3].toUpperCase())},I.expr.pseudos.ibegins=function(e,t,i){var n=I(e).find("a");return(n.data("tokens")||n.text()).toString().toUpperCase().startsWith(i[3].toUpperCase())},I.expr.pseudos.aicontains=function(e,t,i){var n=I(e).find("a");return(n.data("tokens")||n.data("normalizedText")||n.text()).toString().toUpperCase().includes(i[3].toUpperCase())},I.expr.pseudos.aibegins=function(e,t,i){var n=I(e).find("a");return(n.data("tokens")||n.data("normalizedText")||n.text()).toString().toUpperCase().startsWith(i[3].toUpperCase())};var h=function(t){var i=function(e){return t[e]},e="(?:"+Object.keys(t).join("|")+")",n=RegExp(e),s=RegExp(e,"g");return function(e){return e=null==e?"":""+e,n.test(e)?e.replace(s,i):e}},E=h({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"}),c=h({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#x27;":"'","&#x60;":"`"}),p=function(e,t){s.useDefault||(I.valHooks.select.set=s._set,s.useDefault=!0),this.$element=I(e),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=t,null===this.options.title&&(this.options.title=this.$element.attr("title"));var i=this.options.windowPadding;"number"==typeof i&&(this.options.windowPadding=[i,i,i,i]),this.val=p.prototype.val,this.render=p.prototype.render,this.refresh=p.prototype.refresh,this.setStyle=p.prototype.setStyle,this.selectAll=p.prototype.selectAll,this.deselectAll=p.prototype.deselectAll,this.destroy=p.prototype.destroy,this.remove=p.prototype.remove,this.show=p.prototype.show,this.hide=p.prototype.hide,this.init()};function u(e){var o,a=arguments,l=e;[].shift.apply(a);var t=this.each(function(){var e=I(this);if(e.is("select")){var t=e.data("selectpicker"),i="object"==typeof l&&l;if(t){if(i)for(var n in i)i.hasOwnProperty(n)&&(t.options[n]=i[n])}else{var s=I.extend({},p.DEFAULTS,I.fn.selectpicker.defaults||{},e.data(),i);s.template=I.extend({},p.DEFAULTS.template,I.fn.selectpicker.defaults?I.fn.selectpicker.defaults.template:{},e.data().template,i.template),e.data("selectpicker",t=new p(this,s))}"string"==typeof l&&(o=t[l]instanceof Function?t[l].apply(t,a):t.options[l])}});return void 0!==o?o:t}p.VERSION="1.12.4",p.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(e,t){return 1==e?"{0} item selected":"{0} items selected"},maxOptionsText:function(e,t){return[1==e?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==t?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0},p.prototype={constructor:p,init:function(){var t=this,e=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.liObj={},this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement).appendTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element.removeClass("bs-select-hidden"),!0===this.options.dropdownAlignRight&&this.$menu.addClass("dropdown-menu-right"),void 0!==e&&(this.$button.attr("data-id",e),I('label[for="'+e+'"]').click(function(e){e.preventDefault(),t.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(e){t.$menuInner.attr("aria-expanded",!1),t.$element.trigger("hide.bs.select",e)},"hidden.bs.dropdown":function(e){t.$element.trigger("hidden.bs.select",e)},"show.bs.dropdown":function(e){t.$menuInner.attr("aria-expanded",!0),t.$element.trigger("show.bs.select",e)},"shown.bs.dropdown":function(e){t.$element.trigger("shown.bs.select",e)}}),t.$element[0].hasAttribute("required")&&this.$element.on("invalid",function(){t.$button.addClass("bs-invalid"),t.$element.on({"focus.bs.select":function(){t.$button.focus(),t.$element.off("focus.bs.select")},"shown.bs.select":function(){t.$element.val(t.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){this.validity.valid&&t.$button.removeClass("bs-invalid"),t.$element.off("rendered.bs.select")}}),t.$button.on("blur.bs.select",function(){t.$element.focus().blur(),t.$button.off("blur.bs.select")})}),setTimeout(function(){t.$element.trigger("loaded.bs.select")})},createDropdown:function(){var e=this.multiple||this.options.showTick?" show-tick":"",t=this.$element.parent().hasClass("input-group")?" input-group-btn":"",i=this.autofocus?" autofocus":"",n=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",s=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+E(this.options.liveSearchPlaceholder)+'"')+' role="textbox" aria-label="Search"></div>':"",o=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"",a=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"",l='<div class="btn-group bootstrap-select'+e+t+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+i+' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open" role="combobox">'+n+s+o+'<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>'+a+"</div></div>";return I(l)},createView:function(){var e=this.createDropdown(),t=this.createLi();return e.find("ul")[0].innerHTML=t,e},reloadLi:function(){var e=this.createLi();this.$menuInner[0].innerHTML=e},createLi:function(){var $=this,x=[],w=0,e=document.createElement("option"),C=-1,y=function(e,t,i,n){return"<li"+(void 0!==i&&""!==i?' class="'+i+'"':"")+(null!=t?' data-original-index="'+t+'"':"")+(null!=n?'data-optgroup="'+n+'"':"")+">"+e+"</li>"},S=function(e,t,i,n){return'<a tabindex="0"'+(void 0!==t?' class="'+t+'"':"")+(i?' style="'+i+'"':"")+($.options.liveSearchNormalize?' data-normalized-text="'+a(E(I(e).html()))+'"':"")+(void 0!==n||null!==n?' data-tokens="'+n+'"':"")+' role="option">'+e+'<span class="'+$.options.iconBase+" "+$.options.tickIcon+' check-mark"></span></a>'};if(this.options.title&&!this.multiple&&(C--,!this.$element.find(".bs-title-option").length)){var t=this.$element[0];e.className="bs-title-option",e.innerHTML=this.options.title,e.value="",t.insertBefore(e,t.firstChild),void 0===I(t.options[t.selectedIndex]).attr("selected")&&void 0===this.$element.data("selected")&&(e.selected=!0)}var k=this.$element.find("option");return k.each(function(e){var t=I(this);if(C++,!t.hasClass("bs-title-option")){var i,n=this.className||"",s=E(this.style.cssText),o=t.data("content")?t.data("content"):t.html(),a=t.data("tokens")?t.data("tokens"):null,l=void 0!==t.data("subtext")?'<small class="text-muted">'+t.data("subtext")+"</small>":"",r=void 0!==t.data("icon")?'<span class="'+$.options.iconBase+" "+t.data("icon")+'"></span> ':"",d=t.parent(),h="OPTGROUP"===d[0].tagName,c=h&&d[0].disabled,p=this.disabled||c;if(""!==r&&p&&(r="<span>"+r+"</span>"),$.options.hideDisabled&&(p&&!h||c))return i=t.data("prevHiddenIndex"),t.next().data("prevHiddenIndex",void 0!==i?i:e),void C--;if(t.data("content")||(o=r+'<span class="text">'+o+l+"</span>"),h&&!0!==t.data("divider")){if($.options.hideDisabled&&p){if(void 0===d.data("allOptionsDisabled")){var u=d.children();d.data("allOptionsDisabled",u.filter(":disabled").length===u.length)}if(d.data("allOptionsDisabled"))return void C--}var f=" "+d[0].className||"";if(0===t.index()){w+=1;var m=d[0].label,b=void 0!==d.data("subtext")?'<small class="text-muted">'+d.data("subtext")+"</small>":"";m=(d.data("icon")?'<span class="'+$.options.iconBase+" "+d.data("icon")+'"></span> ':"")+'<span class="text">'+E(m)+b+"</span>",0!==e&&0<x.length&&(C++,x.push(y("",null,"divider",w+"div"))),C++,x.push(y(m,null,"dropdown-header"+f,w))}if($.options.hideDisabled&&p)return void C--;x.push(y(S(o,"opt "+n+f,s,a),e,"",w))}else if(!0===t.data("divider"))x.push(y("",e,"divider"));else if(!0===t.data("hidden"))i=t.data("prevHiddenIndex"),t.next().data("prevHiddenIndex",void 0!==i?i:e),x.push(y(S(o,n,s,a),e,"hidden is-hidden"));else{var g=this.previousElementSibling&&"OPTGROUP"===this.previousElementSibling.tagName;if(!g&&$.options.hideDisabled&&void 0!==(i=t.data("prevHiddenIndex"))){var v=k.eq(i)[0].previousElementSibling;v&&"OPTGROUP"===v.tagName&&!v.disabled&&(g=!0)}g&&(C++,x.push(y("",null,"divider",w+"div"))),x.push(y(S(o,n,s,a),e))}$.liObj[e]=C}}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),x.join("")},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(e){var t,n=this,i=this.$element.find("option");!1!==e&&i.each(function(e){var t=n.findLis().eq(n.liObj[e]);n.setDisabled(e,this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled,t),n.setSelected(e,this.selected,t)}),this.togglePlaceholder(),this.tabIndex();var s=i.map(function(){if(this.selected){if(n.options.hideDisabled&&(this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled))return;var e,t=I(this),i=t.data("icon")&&n.options.showIcon?'<i class="'+n.options.iconBase+" "+t.data("icon")+'"></i> ':"";return e=n.options.showSubtext&&t.data("subtext")&&!n.multiple?' <small class="text-muted">'+t.data("subtext")+"</small>":"",void 0!==t.attr("title")?t.attr("title"):t.data("content")&&n.options.showContent?t.data("content").toString():i+t.html()+e}}).toArray(),o=this.multiple?s.join(this.options.multipleSeparator):s[0];if(this.multiple&&-1<this.options.selectedTextFormat.indexOf("count")){var a=this.options.selectedTextFormat.split(">");if(1<a.length&&s.length>a[1]||1==a.length&&2<=s.length){t=this.options.hideDisabled?", [disabled]":"";var l=i.not('[data-divider="true"], [data-hidden="true"]'+t).length;o=("function"==typeof this.options.countSelectedText?this.options.countSelectedText(s.length,l):this.options.countSelectedText).replace("{0}",s.length.toString()).replace("{1}",l.toString())}}null==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(o=this.options.title),o||(o=void 0!==this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",c(I.trim(o.replace(/<[^>]*>?/g,"")))),this.$button.children(".filter-option").html(o),this.$element.trigger("rendered.bs.select")},setStyle:function(e,t){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var i=e||this.options.style;"add"==t?this.$button.addClass(i):"remove"==t?this.$button.removeClass(i):(this.$button.removeClass(this.options.style),this.$button.addClass(i))},liHeight:function(e){if(e||!1!==this.options.size&&!this.sizeInfo){var t=document.createElement("div"),i=document.createElement("div"),n=document.createElement("ul"),s=document.createElement("li"),o=document.createElement("li"),a=document.createElement("a"),l=document.createElement("span"),r=this.options.header&&0<this.$menu.find(".popover-title").length?this.$menu.find(".popover-title")[0].cloneNode(!0):null,d=this.options.liveSearch?document.createElement("div"):null,h=this.options.actionsBox&&this.multiple&&0<this.$menu.find(".bs-actionsbox").length?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,c=this.options.doneButton&&this.multiple&&0<this.$menu.find(".bs-donebutton").length?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(l.className="text",t.className=this.$menu[0].parentNode.className+" open",i.className="dropdown-menu open",n.className="dropdown-menu inner",s.className="divider",l.appendChild(document.createTextNode("Inner text")),a.appendChild(l),o.appendChild(a),n.appendChild(o),n.appendChild(s),r&&i.appendChild(r),d){var p=document.createElement("input");d.className="bs-searchbox",p.className="form-control",d.appendChild(p),i.appendChild(d)}h&&i.appendChild(h),i.appendChild(n),c&&i.appendChild(c),t.appendChild(i),document.body.appendChild(t);var u=a.offsetHeight,f=r?r.offsetHeight:0,m=d?d.offsetHeight:0,b=h?h.offsetHeight:0,g=c?c.offsetHeight:0,v=I(s).outerHeight(!0),$="function"==typeof getComputedStyle&&getComputedStyle(i),x=$?null:I(i),w={vert:parseInt($?$.paddingTop:x.css("paddingTop"))+parseInt($?$.paddingBottom:x.css("paddingBottom"))+parseInt($?$.borderTopWidth:x.css("borderTopWidth"))+parseInt($?$.borderBottomWidth:x.css("borderBottomWidth")),horiz:parseInt($?$.paddingLeft:x.css("paddingLeft"))+parseInt($?$.paddingRight:x.css("paddingRight"))+parseInt($?$.borderLeftWidth:x.css("borderLeftWidth"))+parseInt($?$.borderRightWidth:x.css("borderRightWidth"))},C={vert:w.vert+parseInt($?$.marginTop:x.css("marginTop"))+parseInt($?$.marginBottom:x.css("marginBottom"))+2,horiz:w.horiz+parseInt($?$.marginLeft:x.css("marginLeft"))+parseInt($?$.marginRight:x.css("marginRight"))+2};document.body.removeChild(t),this.sizeInfo={liHeight:u,headerHeight:f,searchHeight:m,actionsHeight:b,doneButtonHeight:g,dividerHeight:v,menuPadding:w,menuExtras:C}}},setSize:function(){if(this.findLis(),this.liHeight(),this.options.header&&this.$menu.css("padding-top",0),!1!==this.options.size){var o,a,l,r,d,h,c,p,u=this,f=this.$menu,m=this.$menuInner,s=I(window),b=this.$newElement[0].offsetHeight,g=this.$newElement[0].offsetWidth,v=this.sizeInfo.liHeight,$=this.sizeInfo.headerHeight,x=this.sizeInfo.searchHeight,w=this.sizeInfo.actionsHeight,C=this.sizeInfo.doneButtonHeight,e=this.sizeInfo.dividerHeight,y=this.sizeInfo.menuPadding,S=this.sizeInfo.menuExtras,t=this.options.hideDisabled?".disabled":"",k=function(){var e,t=u.$newElement.offset(),i=I(u.options.container);u.options.container&&!i.is("body")?((e=i.offset()).top+=parseInt(i.css("borderTopWidth")),e.left+=parseInt(i.css("borderLeftWidth"))):e={top:0,left:0};var n=u.options.windowPadding;d=t.top-e.top-s.scrollTop(),h=s.height()-d-b-e.top-n[2],c=t.left-e.left-s.scrollLeft(),p=s.width()-c-g-e.left-n[1],d-=n[0],c-=n[3]};if(k(),"auto"===this.options.size){var i=function(){var e,t=function(t,i){return function(e){return i?e.classList?e.classList.contains(t):I(e).hasClass(t):!(e.classList?e.classList.contains(t):I(e).hasClass(t))}},i=u.$menuInner[0].getElementsByTagName("li"),n=Array.prototype.filter?Array.prototype.filter.call(i,t("hidden",!1)):u.$lis.not(".hidden"),s=Array.prototype.filter?Array.prototype.filter.call(n,t("dropdown-header",!0)):n.filter(".dropdown-header");k(),o=h-S.vert,a=p-S.horiz,u.options.container?(f.data("height")||f.data("height",f.height()),l=f.data("height"),f.data("width")||f.data("width",f.width()),r=f.data("width")):(l=f.height(),r=f.width()),u.options.dropupAuto&&u.$newElement.toggleClass("dropup",h<d&&o-S.vert<l),u.$newElement.hasClass("dropup")&&(o=d-S.vert),"auto"===u.options.dropdownAlignRight&&f.toggleClass("dropdown-menu-right",p<c&&a-S.horiz<r-g),e=3<n.length+s.length?3*v+S.vert-2:0,f.css({"max-height":o+"px",overflow:"hidden","min-height":e+$+x+w+C+"px"}),m.css({"max-height":o-$-x-w-C-y.vert+"px","overflow-y":"auto","min-height":Math.max(e-y.vert,0)+"px"})};i(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",i),s.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",i)}else if(this.options.size&&"auto"!=this.options.size&&this.$lis.not(t).length>this.options.size){var n=this.$lis.not(".divider").not(t).children().slice(0,this.options.size).last().parent().index(),E=this.$lis.slice(0,n+1).filter(".divider").length;o=v*this.options.size+E*e+y.vert,u.options.container?(f.data("height")||f.data("height",f.height()),l=f.data("height")):l=f.height(),u.options.dropupAuto&&this.$newElement.toggleClass("dropup",h<d&&o-S.vert<l),f.css({"max-height":o+$+x+w+C+"px",overflow:"hidden","min-height":""}),m.css({"max-height":o-y.vert+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if("auto"===this.options.width){this.$menu.css("min-width","0");var e=this.$menu.parent().clone().appendTo("body"),t=this.options.container?this.$newElement.clone().appendTo("body"):e,i=e.children(".dropdown-menu").outerWidth(),n=t.css("width","auto").children("button").outerWidth();e.remove(),t.remove(),this.$newElement.css("width",Math.max(i,n)+"px")}else"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){this.$bsContainer=I('<div class="bs-container" />');var t,i,n,s=this,o=I(this.options.container),a=function(e){s.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",e.hasClass("dropup")),t=e.offset(),o.is("body")?i={top:0,left:0}:((i=o.offset()).top+=parseInt(o.css("borderTopWidth"))-o.scrollTop(),i.left+=parseInt(o.css("borderLeftWidth"))-o.scrollLeft()),n=e.hasClass("dropup")?0:e[0].offsetHeight,s.$bsContainer.css({top:t.top-i.top+n,left:t.left-i.left,width:e[0].offsetWidth})};this.$button.on("click",function(){var e=I(this);s.isDisabled()||(a(s.$newElement),s.$bsContainer.appendTo(s.options.container).toggleClass("open",!e.hasClass("open")).append(s.$menu))}),I(window).on("resize scroll",function(){a(s.$newElement)}),this.$element.on("hide.bs.select",function(){s.$menu.data("height",s.$menu.height()),s.$bsContainer.detach()})},setSelected:function(e,t,i){i||(this.togglePlaceholder(),i=this.findLis().eq(this.liObj[e])),i.toggleClass("selected",t).find("a").attr("aria-selected",t)},setDisabled:function(e,t,i){i||(i=this.findLis().eq(this.liObj[e])),t?i.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1).attr("aria-disabled",!0):i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0).attr("aria-disabled",!1)},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var e=this;this.isDisabled()?(this.$newElement.addClass("disabled"),this.$button.addClass("disabled").attr("tabindex",-1).attr("aria-disabled",!0)):(this.$button.hasClass("disabled")&&(this.$newElement.removeClass("disabled"),this.$button.removeClass("disabled").attr("aria-disabled",!1)),-1!=this.$button.attr("tabindex")||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!e.isDisabled()})},togglePlaceholder:function(){var e=this.$element.val();this.$button.toggleClass("bs-placeholder",null===e||""===e||e.constructor===Array&&0===e.length)},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&-98!==this.$element.attr("tabindex")&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var x=this,t=I(document);t.data("spaceSelect",!1),this.$button.on("keyup",function(e){/(32)/.test(e.keyCode.toString(10))&&t.data("spaceSelect")&&(e.preventDefault(),t.data("spaceSelect",!1))}),this.$button.on("click",function(){x.setSize()}),this.$element.on("shown.bs.select",function(){if(x.options.liveSearch||x.multiple){if(!x.multiple){var e=x.liObj[x.$element[0].selectedIndex];if("number"!=typeof e||!1===x.options.size)return;var t=x.$lis.eq(e)[0].offsetTop-x.$menuInner[0].offsetTop;t=t-x.$menuInner[0].offsetHeight/2+x.sizeInfo.liHeight/2,x.$menuInner[0].scrollTop=t}}else x.$menuInner.find(".selected a").focus()}),this.$menuInner.on("click","li a",function(e){var t=I(this),i=t.parent().data("originalIndex"),n=x.$element.val(),s=x.$element.prop("selectedIndex"),o=!0;if(x.multiple&&1!==x.options.maxOptions&&e.stopPropagation(),e.preventDefault(),!x.isDisabled()&&!t.parent().hasClass("disabled")){var a=x.$element.find("option"),l=a.eq(i),r=l.prop("selected"),d=l.parent("optgroup"),h=x.options.maxOptions,c=d.data("maxOptions")||!1;if(x.multiple){if(l.prop("selected",!r),x.setSelected(i,!r),t.blur(),!1!==h||!1!==c){var p=h<a.filter(":selected").length,u=c<d.find("option:selected").length;if(h&&p||c&&u)if(h&&1==h)a.prop("selected",!1),l.prop("selected",!0),x.$menuInner.find(".selected").removeClass("selected"),x.setSelected(i,!0);else if(c&&1==c){d.find("option:selected").prop("selected",!1),l.prop("selected",!0);var f=t.parent().data("optgroup");x.$menuInner.find('[data-optgroup="'+f+'"]').removeClass("selected"),x.setSelected(i,!0)}else{var m="string"==typeof x.options.maxOptionsText?[x.options.maxOptionsText,x.options.maxOptionsText]:x.options.maxOptionsText,b="function"==typeof m?m(h,c):m,g=b[0].replace("{n}",h),v=b[1].replace("{n}",c),$=I('<div class="notify"></div>');b[2]&&(g=g.replace("{var}",b[2][1<h?0:1]),v=v.replace("{var}",b[2][1<c?0:1])),l.prop("selected",!1),x.$menu.append($),h&&p&&($.append(I("<div>"+g+"</div>")),o=!1,x.$element.trigger("maxReached.bs.select")),c&&u&&($.append(I("<div>"+v+"</div>")),o=!1,x.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){x.setSelected(i,!1)},10),$.delay(750).fadeOut(300,function(){I(this).remove()})}}}else a.prop("selected",!1),l.prop("selected",!0),x.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected",!1),x.setSelected(i,!0);!x.multiple||x.multiple&&1===x.options.maxOptions?x.$button.focus():x.options.liveSearch&&x.$searchbox.focus(),o&&(n!=x.$element.val()&&x.multiple||s!=x.$element.prop("selectedIndex")&&!x.multiple)&&(w=[i,l.prop("selected"),r],x.$element.triggerNative("change"))}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(e){e.currentTarget==this&&(e.preventDefault(),e.stopPropagation(),x.options.liveSearch&&!I(e.target).hasClass("close")?x.$searchbox.focus():x.$button.focus())}),this.$menuInner.on("click",".divider, .dropdown-header",function(e){e.preventDefault(),e.stopPropagation(),x.options.liveSearch?x.$searchbox.focus():x.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){x.$button.click()}),this.$searchbox.on("click",function(e){e.stopPropagation()}),this.$menu.on("click",".actions-btn",function(e){x.options.liveSearch?x.$searchbox.focus():x.$button.focus(),e.preventDefault(),e.stopPropagation(),I(this).hasClass("bs-select-all")?x.selectAll():x.deselectAll()}),this.$element.change(function(){x.render(!1),x.$element.trigger("changed.bs.select",w),w=null})},liveSearchListener:function(){var s=this,o=I('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api",function(){s.$menuInner.find(".active").removeClass("active"),s.$searchbox.val()&&(s.$searchbox.val(""),s.$lis.not(".is-hidden").removeClass("hidden"),o.parent().length&&o.remove()),s.multiple||s.$menuInner.find(".selected").addClass("active"),setTimeout(function(){s.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(e){e.stopPropagation()}),this.$searchbox.on("input propertychange",function(){if(s.$lis.not(".is-hidden").removeClass("hidden"),s.$lis.filter(".active").removeClass("active"),o.remove(),s.$searchbox.val()){var e,t=s.$lis.not(".is-hidden, .divider, .dropdown-header");if((e=s.options.liveSearchNormalize?t.not(":a"+s._searchStyle()+'("'+a(s.$searchbox.val())+'")'):t.not(":"+s._searchStyle()+'("'+s.$searchbox.val()+'")')).length===t.length)o.html(s.options.noneResultsText.replace("{0}",'"'+E(s.$searchbox.val())+'"')),s.$menuInner.append(o),s.$lis.addClass("hidden");else{e.addClass("hidden");var i,n=s.$lis.not(".hidden");n.each(function(e){var t=I(this);t.hasClass("divider")?void 0===i?t.addClass("hidden"):(i&&i.addClass("hidden"),i=t):t.hasClass("dropdown-header")&&n.eq(e+1).data("optgroup")!==t.data("optgroup")?t.addClass("hidden"):i=null}),i&&i.addClass("hidden"),t.not(".hidden").first().addClass("active"),s.$menuInner.scrollTop(0)}}})},_searchStyle:function(){return{begins:"ibegins",startsWith:"ibegins"}[this.options.liveSearchStyle]||"icontains"},val:function(e){return void 0!==e?(this.$element.val(e),this.render(),this.$element):this.$element.val()},changeAll:function(e){if(this.multiple){void 0===e&&(e=!0),this.findLis();var t=this.$element.find("option"),i=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),n=i.length,s=[];if(e){if(i.filter(".selected").length===i.length)return}else if(0===i.filter(".selected").length)return;i.toggleClass("selected",e);for(var o=0;o<n;o++){var a=i[o].getAttribute("data-original-index");s[s.length]=t.eq(a)[0]}I(s).prop("selected",e),this.render(!1),this.togglePlaceholder(),this.$element.triggerNative("change")}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(e){(e=e||window.event)&&e.stopPropagation(),this.$button.trigger("click")},keydown:function(t){var e,i,n,s,o=I(this),a=(o.is("input")?o.parent().parent():o.parent()).data("this"),l=":not(.disabled, .hidden, .dropdown-header, .divider)",r={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(!(s=a.$newElement.hasClass("open"))&&(48<=t.keyCode&&t.keyCode<=57||96<=t.keyCode&&t.keyCode<=105||65<=t.keyCode&&t.keyCode<=90))return a.options.container?a.$button.trigger("click"):(a.setSize(),a.$menu.parent().addClass("open"),s=!0),void a.$searchbox.focus();if(a.options.liveSearch&&/(^9$|27)/.test(t.keyCode.toString(10))&&s&&(t.preventDefault(),t.stopPropagation(),a.$menuInner.click(),a.$button.focus()),/(38|40)/.test(t.keyCode.toString(10))){if(!(e=a.$lis.filter(l)).length)return;i=a.options.liveSearch?e.index(e.filter(".active")):e.index(e.find("a").filter(":focus").parent()),n=a.$menuInner.data("prevIndex"),38==t.keyCode?(!a.options.liveSearch&&i!=n||-1==i||i--,i<0&&(i+=e.length)):40==t.keyCode&&((a.options.liveSearch||i==n)&&i++,i%=e.length),a.$menuInner.data("prevIndex",i),a.options.liveSearch?(t.preventDefault(),o.hasClass("dropdown-toggle")||(e.removeClass("active").eq(i).addClass("active").children("a").focus(),o.focus())):e.eq(i).children("a").focus()}else if(!o.is("input")){var d,h=[];(e=a.$lis.filter(l)).each(function(e){I.trim(I(this).children("a").text().toLowerCase()).substring(0,1)==r[t.keyCode]&&h.push(e)}),d=I(document).data("keycount"),d++,I(document).data("keycount",d),I.trim(I(":focus").text().toLowerCase()).substring(0,1)!=r[t.keyCode]?(d=1,I(document).data("keycount",d)):d>=h.length&&(I(document).data("keycount",0),d>h.length&&(d=1)),e.eq(h[d-1]).children("a").focus()}if((/(13|32)/.test(t.keyCode.toString(10))||/(^9$)/.test(t.keyCode.toString(10))&&a.options.selectOnTab)&&s){if(/(32)/.test(t.keyCode.toString(10))||t.preventDefault(),a.options.liveSearch)/(32)/.test(t.keyCode.toString(10))||(a.$menuInner.find(".active a").click(),o.focus());else{var c=I(":focus");c.click(),c.focus(),t.preventDefault(),I(document).data("spaceSelect",!0)}I(document).data("keycount",0)}(/(^9$|27)/.test(t.keyCode.toString(10))&&s&&(a.multiple||a.options.liveSearch)||/(27)/.test(t.keyCode.toString(10))&&!s)&&(a.$menu.parent().removeClass("open"),a.options.container&&a.$newElement.removeClass("open"),a.$button.focus())},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null,this.liObj={},this.reloadLi(),this.render(),this.checkDisabled(),this.liHeight(!0),this.setStyle(),this.setWidth(),this.$lis&&this.$searchbox.trigger("propertychange"),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};var f=I.fn.selectpicker;I.fn.selectpicker=u,I.fn.selectpicker.Constructor=p,I.fn.selectpicker.noConflict=function(){return I.fn.selectpicker=f,this},I(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',p.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input',function(e){e.stopPropagation()}),I(window).on("load.bs.select.data-api",function(){I(".selectpicker").each(function(){var e=I(this);u.call(e,e.data())})})}(jQuery);