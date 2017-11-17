function debounce(e,a,n){var t;return function(){var i=this,o=arguments;clearTimeout(t),t=setTimeout(function(){t=null,n||e.apply(i,o)},a),n&&!t&&e.apply(i,o)}}var searchVisible=0,transparent=!0,transparentDemo=!0,fixedTop=!1,mobile_menu_visible=0,mobile_menu_initialized=!1,toggle_initialized=!1,bootstrap_nav_initialized=!1,$sidebar;!!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)||$("body").addClass("windows-os"),$(document).ready(function(){window_width=$(window).width(),$sidebar=$(".sidebar"),lbd.checkSidebarImage(),window_width<=991&&(0!=$sidebar.length?lbd.initSidebarMenu():lbd.initBootstrapNavbarMenu()),$(".form-control").on("focus",function(){$(this).parent(".input-group").addClass("input-group-focus")}).on("blur",function(){$(this).parent(".input-group").removeClass("input-group-focus")}),lbd.initCollapseArea(),$('[rel="tooltip"]').tooltip(),$('[data-toggle="tooltip"]').tooltip(),$('[data-toggle="popover"]').popover(),0!=$(".tagsinput").length&&$(".tagsinput").tagsInput(),0!=$(".selectpicker").length&&$(".selectpicker").selectpicker()}),$(window).resize(function(){$(window).width()<=991&&(0!=$sidebar.length?lbd.initSidebarMenu():lbd.initBootstrapNavbarMenu())}),lbd={checkSidebarImage:function(){$sidebar=$(".sidebar"),image_src=$sidebar.data("image"),void 0!==image_src&&(sidebar_container='<div class="sidebar-background" style="background-image: url('+image_src+') "/>',$sidebar.append(sidebar_container))},checkFullPageBackgroundImage:function(){$page=$(".full-page"),image_src=$page.data("image"),void 0!==image_src&&(image_container='<div class="full-page-background" style="background-image: url('+image_src+') "/>',$page.append(image_container))},initSidebarMenu:debounce(function(){$sidebar_wrapper=$(".sidebar-wrapper"),mobile_menu_initialized?$(window).width>991&&($sidebar_wrapper.find(".navbar-form").remove(),$sidebar_wrapper.find(".nav-mobile-menu").remove(),mobile_menu_initialized=!1):($navbar=$("nav").find(".navbar-collapse").first().clone(!0),nav_content="",mobile_menu_content="",$navbar.children("ul").each(function(){content_buff=$(this).html(),nav_content+=content_buff}),nav_content='<ul class="nav nav-mobile-menu">'+nav_content+"</ul>",$navbar_form=$("nav").find(".navbar-form").clone(!0),$sidebar_nav=$sidebar_wrapper.find(" > .nav"),$navbar_form.insertBefore($sidebar_nav),$navbar_form.after(nav_content),$(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function(e){e.stopPropagation()}),mobile_menu_initialized=!0),toggle_initialized||($toggle=$(".navbar-toggle"),$toggle.click(function(){1==mobile_menu_visible?($("html").removeClass("nav-open"),$(".close-layer").remove(),setTimeout(function(){$toggle.removeClass("toggled")},400),mobile_menu_visible=0):(setTimeout(function(){$toggle.addClass("toggled")},430),main_panel_height=$(".main-panel")[0].scrollHeight,$layer=$('<div class="close-layer"></div>'),$layer.css("height",main_panel_height+"px"),$layer.appendTo(".main-panel"),setTimeout(function(){$layer.addClass("visible")},100),$layer.click(function(){$("html").removeClass("nav-open"),mobile_menu_visible=0,$layer.removeClass("visible"),setTimeout(function(){$layer.remove(),$toggle.removeClass("toggled")},400)}),$("html").addClass("nav-open"),mobile_menu_visible=1)}),toggle_initialized=!0)},500),initBootstrapNavbarMenu:debounce(function(){bootstrap_nav_initialized||($navbar=$("nav").find(".navbar-collapse").first().clone(!0),nav_content="",mobile_menu_content="",$navbar.children("ul").each(function(){content_buff=$(this).html(),nav_content+=content_buff}),nav_content='<ul class="nav navbar-nav">'+nav_content+"</ul>",$navbar.html(nav_content),$navbar.addClass("bootstrap-navbar"),$("body").append($navbar),$toggle=$(".navbar-toggle"),$navbar.find("a").removeClass("btn btn-round btn-default"),$navbar.find("button").removeClass("btn-round btn-fill btn-info btn-primary btn-success btn-danger btn-warning btn-neutral"),$navbar.find("button").addClass("btn-simple btn-block"),$toggle.click(function(){1==mobile_menu_visible?($("html").removeClass("nav-open"),$(".close-layer").remove(),setTimeout(function(){$toggle.removeClass("toggled")},400),mobile_menu_visible=0):(setTimeout(function(){$toggle.addClass("toggled")},430),$layer=$('<div class="close-layer"></div>'),$layer.appendTo(".wrapper-full-page"),setTimeout(function(){$layer.addClass("visible")},100),$layer.click(function(){$("html").removeClass("nav-open"),mobile_menu_visible=0,$layer.removeClass("visible"),setTimeout(function(){$layer.remove(),$toggle.removeClass("toggled")},400)}),$("html").addClass("nav-open"),mobile_menu_visible=1)}),bootstrap_nav_initialized=!0)},500),initCollapseArea:function(){$('[data-toggle="collapse-hover"]').each(function(){var e=$(this).attr("data-target");$(e).addClass("collapse-hover")}),$('[data-toggle="collapse-hover"]').hover(function(){var e=$(this).attr("data-target");$(this).hasClass("state-open")||($(this).addClass("state-hover"),$(e).css({height:"30px"}))},function(){var e=$(this).attr("data-target");$(this).removeClass("state-hover"),$(this).hasClass("state-open")||$(e).css({height:"0px"})}).click(function(e){e.preventDefault();var a=$(this).attr("data-target"),n=$(a).children(".panel-body").height();$(this).hasClass("state-open")?($(a).css({height:"0px"}),$(this).removeClass("state-open")):($(a).css({height:n+30}),$(this).addClass("state-open"))})}};