!function(e){"use strict";if("function"==typeof define&&define.amd)define(["jquery","moment"],e);else if("object"==typeof exports)e(require("jquery"),require("moment"));else{if("undefined"==typeof jQuery)throw"bootstrap-datetimepicker requires jQuery to be loaded first";if("undefined"==typeof moment)throw"bootstrap-datetimepicker requires Moment.js to be loaded first";e(jQuery,moment)}}(function(e,t){"use strict";if(!t)throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");var n=function(n,a){var r,i,o,d,s,l,p,c={},u=!0,f=!1,m=!1,h=0,y=[{clsName:"days",navFnc:"M",navStep:1},{clsName:"months",navFnc:"y",navStep:1},{clsName:"years",navFnc:"y",navStep:10},{clsName:"decades",navFnc:"y",navStep:100}],b=["days","months","years","decades"],g=["top","bottom","auto"],w=["left","right","auto"],v=["default","top","bottom"],k={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t",delete:46,46:"delete"},C={},x=function(e){var n,r,i,o,d=!1;return void 0!==t.tz&&void 0!==a.timeZone&&null!==a.timeZone&&""!==a.timeZone&&(d=!0),void 0===e||null===e?n=d?t().tz(a.timeZone).startOf("d"):t().startOf("d"):d?(r=t().tz(a.timeZone).utcOffset(),t(e,l,a.useStrict).utcOffset()!==r?(i=t().tz(a.timeZone).format("Z"),o=t(e,l,a.useStrict).format("YYYY-MM-DD[T]HH:mm:ss")+i,n=t(o,l,a.useStrict).tz(a.timeZone)):n=t(e,l,a.useStrict).tz(a.timeZone)):n=t(e,l,a.useStrict),n},D=function(e){if("string"!=typeof e||e.length>1)throw new TypeError("isEnabled expects a single character string parameter");switch(e){case"y":return-1!==s.indexOf("Y");case"M":return-1!==s.indexOf("M");case"d":return-1!==s.toLowerCase().indexOf("d");case"h":case"H":return-1!==s.toLowerCase().indexOf("h");case"m":return-1!==s.indexOf("m");case"s":return-1!==s.indexOf("s");default:return!1}},T=function(){return D("h")||D("m")||D("s")},M=function(){return D("y")||D("M")||D("d")},S=function(){var t=e("<thead>").append(e("<tr>").append(e("<th>").addClass("prev").attr("data-action","previous").append(e("<span>").addClass(a.icons.previous))).append(e("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",a.calendarWeeks?"6":"5")).append(e("<th>").addClass("next").attr("data-action","next").append(e("<span>").addClass(a.icons.next)))),n=e("<tbody>").append(e("<tr>").append(e("<td>").attr("colspan",a.calendarWeeks?"8":"7")));return[e("<div>").addClass("datepicker-days").append(e("<table>").addClass("table-condensed").append(t).append(e("<tbody>"))),e("<div>").addClass("datepicker-months").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())),e("<div>").addClass("datepicker-years").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone())),e("<div>").addClass("datepicker-decades").append(e("<table>").addClass("table-condensed").append(t.clone()).append(n.clone()))]},O=function(){var t=e("<tr>"),n=e("<tr>"),r=e("<tr>");return D("h")&&(t.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:a.tooltips.incrementHour}).addClass("btn").attr("data-action","incrementHours").append(e("<span>").addClass(a.icons.up)))),n.append(e("<td>").append(e("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:a.tooltips.pickHour}).attr("data-action","showHours"))),r.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:a.tooltips.decrementHour}).addClass("btn").attr("data-action","decrementHours").append(e("<span>").addClass(a.icons.down))))),D("m")&&(D("h")&&(t.append(e("<td>").addClass("separator")),n.append(e("<td>").addClass("separator").html(":")),r.append(e("<td>").addClass("separator"))),t.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:a.tooltips.incrementMinute}).addClass("btn").attr("data-action","incrementMinutes").append(e("<span>").addClass(a.icons.up)))),n.append(e("<td>").append(e("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:a.tooltips.pickMinute}).attr("data-action","showMinutes"))),r.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:a.tooltips.decrementMinute}).addClass("btn").attr("data-action","decrementMinutes").append(e("<span>").addClass(a.icons.down))))),D("s")&&(D("m")&&(t.append(e("<td>").addClass("separator")),n.append(e("<td>").addClass("separator").html(":")),r.append(e("<td>").addClass("separator"))),t.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:a.tooltips.incrementSecond}).addClass("btn").attr("data-action","incrementSeconds").append(e("<span>").addClass(a.icons.up)))),n.append(e("<td>").append(e("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:a.tooltips.pickSecond}).attr("data-action","showSeconds"))),r.append(e("<td>").append(e("<a>").attr({href:"#",tabindex:"-1",title:a.tooltips.decrementSecond}).addClass("btn").attr("data-action","decrementSeconds").append(e("<span>").addClass(a.icons.down))))),d||(t.append(e("<td>").addClass("separator")),n.append(e("<td>").append(e("<button>").addClass("btn btn-info btn-round").attr({"data-action":"togglePeriod",tabindex:"-1",title:a.tooltips.togglePeriod}))),r.append(e("<td>").addClass("separator"))),e("<div>").addClass("timepicker-picker").append(e("<table>").addClass("table-condensed").append([t,n,r]))},P=function(){var t=e("<div>").addClass("timepicker-hours").append(e("<table>").addClass("table-condensed")),n=e("<div>").addClass("timepicker-minutes").append(e("<table>").addClass("table-condensed")),a=e("<div>").addClass("timepicker-seconds").append(e("<table>").addClass("table-condensed")),r=[O()];return D("h")&&r.push(t),D("m")&&r.push(n),D("s")&&r.push(a),r},E=function(){var t=[];return a.showTodayButton&&t.push(e("<td>").append(e("<a>").attr({"data-action":"today",title:a.tooltips.today}).append(e("<span>").addClass(a.icons.today)))),!a.sideBySide&&M()&&T()&&t.push(e("<td>").append(e("<a>").attr({"data-action":"togglePicker",title:a.tooltips.selectTime}).append(e("<span>").addClass(a.icons.time)))),a.showClear&&t.push(e("<td>").append(e("<a>").attr({"data-action":"clear",title:a.tooltips.clear}).append(e("<span>").addClass(a.icons.clear)))),a.showClose&&t.push(e("<td>").append(e("<a>").attr({"data-action":"close",title:a.tooltips.close}).append(e("<span>").addClass(a.icons.close)))),e("<table>").addClass("table-condensed").append(e("<tbody>").append(e("<tr>").append(t)))},H=function(){var t=e("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),n=e("<div>").addClass("datepicker").append(S()),r=e("<div>").addClass("timepicker").append(P()),i=e("<ul>").addClass("list-unstyled"),o=e("<li>").addClass("picker-switch"+(a.collapse?" accordion-toggle":"")).append(E());return a.inline&&t.removeClass("dropdown-menu"),d&&t.addClass("usetwentyfour"),D("s")&&!d&&t.addClass("wider"),a.sideBySide&&M()&&T()?(t.addClass("timepicker-sbs"),"top"===a.toolbarPlacement&&t.append(o),t.append(e("<div>").addClass("row").append(n.addClass("col-md-6")).append(r.addClass("col-md-6"))),"bottom"===a.toolbarPlacement&&t.append(o),t):("top"===a.toolbarPlacement&&i.append(o),M()&&i.append(e("<li>").addClass(a.collapse&&T()?"collapse in":"").append(n)),"default"===a.toolbarPlacement&&i.append(o),T()&&i.append(e("<li>").addClass(a.collapse&&M()?"collapse":"").append(r)),"bottom"===a.toolbarPlacement&&i.append(o),t.append(i))},I=function(){var t,r=(f||n).position(),i=(f||n).offset(),o=a.widgetPositioning.vertical,d=a.widgetPositioning.horizontal;if(a.widgetParent)t=a.widgetParent.append(m);else if(n.is("input"))t=n.after(m).parent();else{if(a.inline)return void(t=n.append(m));t=n,n.children().first().after(m)}if("auto"===o&&(o=i.top+1.5*m.height()>=e(window).height()+e(window).scrollTop()&&m.height()+n.outerHeight()<i.top?"top":"bottom"),"auto"===d&&(d=t.width()<i.left+m.outerWidth()/2&&i.left+m.outerWidth()>e(window).width()?"right":"left"),"top"===o?m.addClass("top").removeClass("bottom"):m.addClass("bottom").removeClass("top"),"right"===d?m.addClass("pull-right"):m.removeClass("pull-right"),"relative"!==t.css("position")&&(t=t.parents().filter(function(){return"relative"===e(this).css("position")}).first()),0===t.length)throw new Error("datetimepicker component should be placed within a relative positioned container");m.css({top:"top"===o?"auto":r.top+n.outerHeight(),bottom:"top"===o?r.top+n.outerHeight():"auto",left:"left"===d?t===n?0:r.left:"auto",right:"left"===d?"auto":t.outerWidth()-n.outerWidth()-(t===n?0:r.left)}),setTimeout(function(){m.addClass("open")},180)},Y=function(e){"dp.change"===e.type&&(e.date&&e.date.isSame(e.oldDate)||!e.date&&!e.oldDate)||n.trigger(e)},q=function(e){"y"===e&&(e="YYYY"),Y({type:"dp.update",change:e,viewDate:i.clone()})},B=function(e){m&&(e&&(p=Math.max(h,Math.min(3,p+e))),m.find(".datepicker > div").hide().filter(".datepicker-"+y[p].clsName).show())},j=function(){var t=e("<tr>"),n=i.clone().startOf("w").startOf("d");for(!0===a.calendarWeeks&&t.append(e("<th>").addClass("cw").text("#"));n.isBefore(i.clone().endOf("w"));)t.append(e("<th>").addClass("dow").text(n.format("dd"))),n.add(1,"d");m.find(".datepicker-days thead").append(t)},z=function(e){return!0===a.disabledDates[e.format("YYYY-MM-DD")]},F=function(e){return!0===a.enabledDates[e.format("YYYY-MM-DD")]},L=function(e){return!0===a.disabledHours[e.format("H")]},W=function(e){return!0===a.enabledHours[e.format("H")]},A=function(t,n){if(!t.isValid())return!1;if(a.disabledDates&&"d"===n&&z(t))return!1;if(a.enabledDates&&"d"===n&&!F(t))return!1;if(a.minDate&&t.isBefore(a.minDate,n))return!1;if(a.maxDate&&t.isAfter(a.maxDate,n))return!1;if(a.daysOfWeekDisabled&&"d"===n&&-1!==a.daysOfWeekDisabled.indexOf(t.day()))return!1;if(a.disabledHours&&("h"===n||"m"===n||"s"===n)&&L(t))return!1;if(a.enabledHours&&("h"===n||"m"===n||"s"===n)&&!W(t))return!1;if(a.disabledTimeIntervals&&("h"===n||"m"===n||"s"===n)){var r=!1;if(e.each(a.disabledTimeIntervals,function(){if(t.isBetween(this[0],this[1]))return r=!0,!1}),r)return!1}return!0},N=function(){for(var t=[],n=i.clone().startOf("y").startOf("d");n.isSame(i,"y");)t.push(e("<span>").attr("data-action","selectMonth").addClass("month").text(n.format("MMM"))),n.add(1,"M");m.find(".datepicker-months td").empty().append(t)},Z=function(){var t=m.find(".datepicker-months"),n=t.find("th"),o=t.find("tbody").find("span");n.eq(0).find("span").attr("title",a.tooltips.prevYear),n.eq(1).attr("title",a.tooltips.selectYear),n.eq(2).find("span").attr("title",a.tooltips.nextYear),t.find(".disabled").removeClass("disabled"),A(i.clone().subtract(1,"y"),"y")||n.eq(0).addClass("disabled"),n.eq(1).text(i.year()),A(i.clone().add(1,"y"),"y")||n.eq(2).addClass("disabled"),o.removeClass("active"),r.isSame(i,"y")&&!u&&o.eq(r.month()).addClass("active"),o.each(function(t){A(i.clone().month(t),"M")||e(this).addClass("disabled")})},V=function(){var e=m.find(".datepicker-years"),t=e.find("th"),n=i.clone().subtract(5,"y"),o=i.clone().add(6,"y"),d="";for(t.eq(0).find("span").attr("title",a.tooltips.prevDecade),t.eq(1).attr("title",a.tooltips.selectDecade),t.eq(2).find("span").attr("title",a.tooltips.nextDecade),e.find(".disabled").removeClass("disabled"),a.minDate&&a.minDate.isAfter(n,"y")&&t.eq(0).addClass("disabled"),t.eq(1).text(n.year()+"-"+o.year()),a.maxDate&&a.maxDate.isBefore(o,"y")&&t.eq(2).addClass("disabled");!n.isAfter(o,"y");)d+='<span data-action="selectYear" class="year'+(n.isSame(r,"y")&&!u?" active":"")+(A(n,"y")?"":" disabled")+'">'+n.year()+"</span>",n.add(1,"y");e.find("td").html(d)},R=function(){var e=m.find(".datepicker-decades"),n=e.find("th"),o=t({y:i.year()-i.year()%100-1}),d=o.clone().add(100,"y"),s=o.clone(),l="";for(n.eq(0).find("span").attr("title",a.tooltips.prevCentury),n.eq(2).find("span").attr("title",a.tooltips.nextCentury),e.find(".disabled").removeClass("disabled"),(o.isSame(t({y:1900}))||a.minDate&&a.minDate.isAfter(o,"y"))&&n.eq(0).addClass("disabled"),n.eq(1).text(o.year()+"-"+d.year()),(o.isSame(t({y:2e3}))||a.maxDate&&a.maxDate.isBefore(d,"y"))&&n.eq(2).addClass("disabled");!o.isAfter(d,"y");)l+='<span data-action="selectDecade" class="decade'+(o.isSame(r,"y")?" active":"")+(A(o,"y")?"":" disabled")+'" data-selection="'+(o.year()+6)+'">'+(o.year()+1)+" - "+(o.year()+12)+"</span>",o.add(12,"y");l+="<span></span><span></span><span></span>",e.find("td").html(l),n.eq(1).text(s.year()+1+"-"+o.year())},U=function(){var t,n,o,d,s=m.find(".datepicker-days"),l=s.find("th"),p=[];if(M()){for(l.eq(0).find("span").attr("title",a.tooltips.prevMonth),l.eq(1).attr("title",a.tooltips.selectMonth),l.eq(2).find("span").attr("title",a.tooltips.nextMonth),s.find(".disabled").removeClass("disabled"),l.eq(1).text(i.format(a.dayViewHeaderFormat)),A(i.clone().subtract(1,"M"),"M")||l.eq(0).addClass("disabled"),A(i.clone().add(1,"M"),"M")||l.eq(2).addClass("disabled"),t=i.clone().startOf("M").startOf("w").startOf("d"),d=0;d<42;d++)0===t.weekday()&&(n=e("<tr>"),a.calendarWeeks&&n.append('<td class="cw">'+t.week()+"</td>"),p.push(n)),o="",t.isBefore(i,"M")&&(o+=" old"),t.isAfter(i,"M")&&(o+=" new"),t.isSame(r,"d")&&!u&&(o+=" active"),A(t,"d")||(o+=" disabled"),t.isSame(x(),"d")&&(o+=" today"),0!==t.day()&&6!==t.day()||(o+=" weekend"),n.append('<td data-action="selectDay" data-day="'+t.format("L")+'" class="day'+o+'"><div>'+t.date()+"</div></td>"),t.add(1,"d");s.find("tbody").empty().append(p),Z(),V(),R()}},Q=function(){var t=m.find(".timepicker-hours table"),n=i.clone().startOf("d"),a=[],r=e("<tr>");for(i.hour()>11&&!d&&n.hour(12);n.isSame(i,"d")&&(d||i.hour()<12&&n.hour()<12||i.hour()>11);)n.hour()%4==0&&(r=e("<tr>"),a.push(r)),r.append('<td data-action="selectHour" class="hour'+(A(n,"h")?"":" disabled")+'"><div>'+n.format(d?"HH":"hh")+"</div></td>"),n.add(1,"h");t.empty().append(a)},G=function(){for(var t=m.find(".timepicker-minutes table"),n=i.clone().startOf("h"),r=[],o=e("<tr>"),d=1===a.stepping?5:a.stepping;i.isSame(n,"h");)n.minute()%(4*d)==0&&(o=e("<tr>"),r.push(o)),o.append('<td data-action="selectMinute" class="minute'+(A(n,"m")?"":" disabled")+'"><div>'+n.format("mm")+"</div></td>"),n.add(d,"m");t.empty().append(r)},J=function(){for(var t=m.find(".timepicker-seconds table"),n=i.clone().startOf("m"),a=[],r=e("<tr>");i.isSame(n,"m");)n.second()%20==0&&(r=e("<tr>"),a.push(r)),r.append('<td data-action="selectSecond" class="second'+(A(n,"s")?"":" disabled")+'"><div>'+n.format("ss")+"</div></td>"),n.add(5,"s");t.empty().append(a)},K=function(){var e,t,n=m.find(".timepicker span[data-time-component]");d||(e=m.find(".timepicker [data-action=togglePeriod]"),t=r.clone().add(r.hours()>=12?-12:12,"h"),e.text(r.format("A")),A(t,"h")?e.removeClass("disabled"):e.addClass("disabled")),n.filter("[data-time-component=hours]").text(r.format(d?"HH":"hh")),n.filter("[data-time-component=minutes]").text(r.format("mm")),n.filter("[data-time-component=seconds]").text(r.format("ss")),Q(),G(),J()},X=function(){m&&(U(),K())},$=function(e){var t=u?null:r;if(!e)return u=!0,o.val(""),n.data("date",""),Y({type:"dp.change",date:!1,oldDate:t}),void X();e=e.clone().locale(a.locale),1!==a.stepping&&e.minutes(Math.round(e.minutes()/a.stepping)*a.stepping%60).seconds(0),A(e)?(i=(r=e).clone(),o.val(r.format(s)),n.data("date",r.format(s)),u=!1,X(),Y({type:"dp.change",date:r.clone(),oldDate:t})):(a.keepInvalid||o.val(u?"":r.format(s)),Y({type:"dp.error",date:e}))},_=function(){var t=!1;return m?(m.find(".collapse").each(function(){var n=e(this).data("collapse");return!n||!n.transitioning||(t=!0,!1)}),t?c:(f&&f.hasClass("btn")&&f.toggleClass("active"),e(window).off("resize",I),m.off("click","[data-action]"),m.off("mousedown",!1),m.removeClass("open"),void setTimeout(function(){return m.hide(),m.remove(),m=!1,Y({type:"dp.hide",date:r.clone()}),o.blur(),c},400))):c},ee=function(){$(null)},te={next:function(){var e=y[p].navFnc;i.add(y[p].navStep,e),U(),q(e)},previous:function(){var e=y[p].navFnc;i.subtract(y[p].navStep,e),U(),q(e)},pickerSwitch:function(){B(1)},selectMonth:function(t){var n=e(t.target).closest("tbody").find("span").index(e(t.target));i.month(n),p===h?($(r.clone().year(i.year()).month(i.month())),a.inline||_()):(B(-1),U()),q("M")},selectYear:function(t){var n=parseInt(e(t.target).text(),10)||0;i.year(n),p===h?($(r.clone().year(i.year())),a.inline||_()):(B(-1),U()),q("YYYY")},selectDecade:function(t){var n=parseInt(e(t.target).data("selection"),10)||0;i.year(n),p===h?($(r.clone().year(i.year())),a.inline||_()):(B(-1),U()),q("YYYY")},selectDay:function(t){var n=i.clone();e(t.target).is(".old")&&n.subtract(1,"M"),e(t.target).is(".new")&&n.add(1,"M"),$(n.date(parseInt(e(t.target).text(),10))),T()||a.keepOpen||a.inline||_()},incrementHours:function(){var e=r.clone().add(1,"h");A(e,"h")&&$(e)},incrementMinutes:function(){var e=r.clone().add(a.stepping,"m");A(e,"m")&&$(e)},incrementSeconds:function(){var e=r.clone().add(1,"s");A(e,"s")&&$(e)},decrementHours:function(){var e=r.clone().subtract(1,"h");A(e,"h")&&$(e)},decrementMinutes:function(){var e=r.clone().subtract(a.stepping,"m");A(e,"m")&&$(e)},decrementSeconds:function(){var e=r.clone().subtract(1,"s");A(e,"s")&&$(e)},togglePeriod:function(){$(r.clone().add(r.hours()>=12?-12:12,"h"))},togglePicker:function(t){var n,r=e(t.target),i=r.closest("ul"),o=i.find(".in"),d=i.find(".collapse:not(.in)");if(o&&o.length){if((n=o.data("collapse"))&&n.transitioning)return;o.collapse?(o.collapse("hide"),d.collapse("show")):(o.removeClass("in"),d.addClass("in")),r.is("span")?r.toggleClass(a.icons.time+" "+a.icons.date):r.find("span").toggleClass(a.icons.time+" "+a.icons.date)}},showPicker:function(){m.find(".timepicker > div:not(.timepicker-picker)").hide(),m.find(".timepicker .timepicker-picker").show()},showHours:function(){m.find(".timepicker .timepicker-picker").hide(),m.find(".timepicker .timepicker-hours").show()},showMinutes:function(){m.find(".timepicker .timepicker-picker").hide(),m.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){m.find(".timepicker .timepicker-picker").hide(),m.find(".timepicker .timepicker-seconds").show()},selectHour:function(t){var n=parseInt(e(t.target).text(),10);d||(r.hours()>=12?12!==n&&(n+=12):12===n&&(n=0)),$(r.clone().hours(n)),te.showPicker.call(c)},selectMinute:function(t){$(r.clone().minutes(parseInt(e(t.target).text(),10))),te.showPicker.call(c)},selectSecond:function(t){$(r.clone().seconds(parseInt(e(t.target).text(),10))),te.showPicker.call(c)},clear:ee,today:function(){var e=x();A(e,"d")&&$(e)},close:_},ne=function(t){return!e(t.currentTarget).is(".disabled")&&(te[e(t.currentTarget).data("action")].apply(c,arguments),!1)},ae=function(){var t,n={year:function(e){return e.month(0).date(1).hours(0).seconds(0).minutes(0)},month:function(e){return e.date(1).hours(0).seconds(0).minutes(0)},day:function(e){return e.hours(0).seconds(0).minutes(0)},hour:function(e){return e.seconds(0).minutes(0)},minute:function(e){return e.seconds(0)}};return o.prop("disabled")||!a.ignoreReadonly&&o.prop("readonly")||m?c:(void 0!==o.val()&&0!==o.val().trim().length?$(ie(o.val().trim())):a.useCurrent&&u&&(o.is("input")&&0===o.val().trim().length||a.inline)&&(t=x(),"string"==typeof a.useCurrent&&(t=n[a.useCurrent](t)),$(t)),m=H(),j(),N(),m.find(".timepicker-hours").hide(),m.find(".timepicker-minutes").hide(),m.find(".timepicker-seconds").hide(),X(),B(),e(window).on("resize",I),m.on("click","[data-action]",ne),m.on("mousedown",!1),f&&f.hasClass("btn")&&f.toggleClass("active"),m.show(),I(),a.focusOnShow&&!o.is(":focus")&&o.focus(),Y({type:"dp.show"}),c)},re=function(){return m?_():ae()},ie=function(e){return(e=void 0===a.parseInputDate?t.isMoment(e)||e instanceof Date?t(e):x(e):a.parseInputDate(e)).locale(a.locale),e},oe=function(e){var t,n,r,i,o=null,d=[],s={},l=e.which;C[l]="p";for(t in C)C.hasOwnProperty(t)&&"p"===C[t]&&(d.push(t),parseInt(t,10)!==l&&(s[t]=!0));for(t in a.keyBinds)if(a.keyBinds.hasOwnProperty(t)&&"function"==typeof a.keyBinds[t]&&(r=t.split(" ")).length===d.length&&k[l]===r[r.length-1]){for(i=!0,n=r.length-2;n>=0;n--)if(!(k[r[n]]in s)){i=!1;break}if(i){o=a.keyBinds[t];break}}o&&(o.call(c,m),e.stopPropagation(),e.preventDefault())},de=function(e){C[e.which]="r",e.stopPropagation(),e.preventDefault()},se=function(t){var n=e(t.target).val().trim(),a=n?ie(n):null;return $(a),t.stopImmediatePropagation(),!1},le=function(){o.off({change:se,blur:blur,keydown:oe,keyup:de,focus:a.allowInputToggle?_:""}),n.is("input")?o.off({focus:ae}):f&&(f.off("click",re),f.off("mousedown",!1))},pe=function(t){var n={};return e.each(t,function(){var e=ie(this);e.isValid()&&(n[e.format("YYYY-MM-DD")]=!0)}),!!Object.keys(n).length&&n},ce=function(t){var n={};return e.each(t,function(){n[this]=!0}),!!Object.keys(n).length&&n},ue=function(){var e=a.format||"L LT";s=e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(e){return(r.localeData().longDateFormat(e)||e).replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(e){return r.localeData().longDateFormat(e)||e})}),(l=a.extraFormats?a.extraFormats.slice():[]).indexOf(e)<0&&l.indexOf(s)<0&&l.push(s),d=s.toLowerCase().indexOf("a")<1&&s.replace(/\[.*?\]/g,"").indexOf("h")<1,D("y")&&(h=2),D("M")&&(h=1),D("d")&&(h=0),p=Math.max(h,p),u||$(r)};if(c.destroy=function(){_(),le(),n.removeData("DateTimePicker"),n.removeData("date")},c.toggle=re,c.show=ae,c.hide=_,c.disable=function(){return _(),f&&f.hasClass("btn")&&f.addClass("disabled"),o.prop("disabled",!0),c},c.enable=function(){return f&&f.hasClass("btn")&&f.removeClass("disabled"),o.prop("disabled",!1),c},c.ignoreReadonly=function(e){if(0===arguments.length)return a.ignoreReadonly;if("boolean"!=typeof e)throw new TypeError("ignoreReadonly () expects a boolean parameter");return a.ignoreReadonly=e,c},c.options=function(t){if(0===arguments.length)return e.extend(!0,{},a);if(!(t instanceof Object))throw new TypeError("options() options parameter should be an object");return e.extend(!0,a,t),e.each(a,function(e,t){if(void 0===c[e])throw new TypeError("option "+e+" is not recognized!");c[e](t)}),c},c.date=function(e){if(0===arguments.length)return u?null:r.clone();if(!(null===e||"string"==typeof e||t.isMoment(e)||e instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");return $(null===e?null:ie(e)),c},c.format=function(e){if(0===arguments.length)return a.format;if("string"!=typeof e&&("boolean"!=typeof e||!1!==e))throw new TypeError("format() expects a sting or boolean:false parameter "+e);return a.format=e,s&&ue(),c},c.timeZone=function(e){return 0===arguments.length?a.timeZone:(a.timeZone=e,c)},c.dayViewHeaderFormat=function(e){if(0===arguments.length)return a.dayViewHeaderFormat;if("string"!=typeof e)throw new TypeError("dayViewHeaderFormat() expects a string parameter");return a.dayViewHeaderFormat=e,c},c.extraFormats=function(e){if(0===arguments.length)return a.extraFormats;if(!1!==e&&!(e instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");return a.extraFormats=e,l&&ue(),c},c.disabledDates=function(t){if(0===arguments.length)return a.disabledDates?e.extend({},a.disabledDates):a.disabledDates;if(!t)return a.disabledDates=!1,X(),c;if(!(t instanceof Array))throw new TypeError("disabledDates() expects an array parameter");return a.disabledDates=pe(t),a.enabledDates=!1,X(),c},c.enabledDates=function(t){if(0===arguments.length)return a.enabledDates?e.extend({},a.enabledDates):a.enabledDates;if(!t)return a.enabledDates=!1,X(),c;if(!(t instanceof Array))throw new TypeError("enabledDates() expects an array parameter");return a.enabledDates=pe(t),a.disabledDates=!1,X(),c},c.daysOfWeekDisabled=function(e){if(0===arguments.length)return a.daysOfWeekDisabled.splice(0);if("boolean"==typeof e&&!e)return a.daysOfWeekDisabled=!1,X(),c;if(!(e instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");if(a.daysOfWeekDisabled=e.reduce(function(e,t){return(t=parseInt(t,10))>6||t<0||isNaN(t)?e:(-1===e.indexOf(t)&&e.push(t),e)},[]).sort(),a.useCurrent&&!a.keepInvalid){for(var t=0;!A(r,"d");){if(r.add(1,"d"),7===t)throw"Tried 7 times to find a valid date";t++}$(r)}return X(),c},c.maxDate=function(e){if(0===arguments.length)return a.maxDate?a.maxDate.clone():a.maxDate;if("boolean"==typeof e&&!1===e)return a.maxDate=!1,X(),c;"string"==typeof e&&("now"!==e&&"moment"!==e||(e=x()));var t=ie(e);if(!t.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+e);if(a.minDate&&t.isBefore(a.minDate))throw new TypeError("maxDate() date parameter is before options.minDate: "+t.format(s));return a.maxDate=t,a.useCurrent&&!a.keepInvalid&&r.isAfter(e)&&$(a.maxDate),i.isAfter(t)&&(i=t.clone().subtract(a.stepping,"m")),X(),c},c.minDate=function(e){if(0===arguments.length)return a.minDate?a.minDate.clone():a.minDate;if("boolean"==typeof e&&!1===e)return a.minDate=!1,X(),c;"string"==typeof e&&("now"!==e&&"moment"!==e||(e=x()));var t=ie(e);if(!t.isValid())throw new TypeError("minDate() Could not parse date parameter: "+e);if(a.maxDate&&t.isAfter(a.maxDate))throw new TypeError("minDate() date parameter is after options.maxDate: "+t.format(s));return a.minDate=t,a.useCurrent&&!a.keepInvalid&&r.isBefore(e)&&$(a.minDate),i.isBefore(t)&&(i=t.clone().add(a.stepping,"m")),X(),c},c.defaultDate=function(e){if(0===arguments.length)return a.defaultDate?a.defaultDate.clone():a.defaultDate;if(!e)return a.defaultDate=!1,c;"string"==typeof e&&("now"!==e&&"moment"!==e||(e=x()));var t=ie(e);if(!t.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+e);if(!A(t))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");return a.defaultDate=t,(a.defaultDate&&a.inline||""===o.val().trim())&&$(a.defaultDate),c},c.locale=function(e){if(0===arguments.length)return a.locale;if(!t.localeData(e))throw new TypeError("locale() locale "+e+" is not loaded from moment locales!");return a.locale=e,r.locale(a.locale),i.locale(a.locale),s&&ue(),m&&(_(),ae()),c},c.stepping=function(e){return 0===arguments.length?a.stepping:(e=parseInt(e,10),(isNaN(e)||e<1)&&(e=1),a.stepping=e,c)},c.useCurrent=function(e){var t=["year","month","day","hour","minute"];if(0===arguments.length)return a.useCurrent;if("boolean"!=typeof e&&"string"!=typeof e)throw new TypeError("useCurrent() expects a boolean or string parameter");if("string"==typeof e&&-1===t.indexOf(e.toLowerCase()))throw new TypeError("useCurrent() expects a string parameter of "+t.join(", "));return a.useCurrent=e,c},c.collapse=function(e){if(0===arguments.length)return a.collapse;if("boolean"!=typeof e)throw new TypeError("collapse() expects a boolean parameter");return a.collapse===e?c:(a.collapse=e,m&&(_(),ae()),c)},c.icons=function(t){if(0===arguments.length)return e.extend({},a.icons);if(!(t instanceof Object))throw new TypeError("icons() expects parameter to be an Object");return e.extend(a.icons,t),m&&(_(),ae()),c},c.tooltips=function(t){if(0===arguments.length)return e.extend({},a.tooltips);if(!(t instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object");return e.extend(a.tooltips,t),m&&(_(),ae()),c},c.useStrict=function(e){if(0===arguments.length)return a.useStrict;if("boolean"!=typeof e)throw new TypeError("useStrict() expects a boolean parameter");return a.useStrict=e,c},c.sideBySide=function(e){if(0===arguments.length)return a.sideBySide;if("boolean"!=typeof e)throw new TypeError("sideBySide() expects a boolean parameter");return a.sideBySide=e,m&&(_(),ae()),c},c.viewMode=function(e){if(0===arguments.length)return a.viewMode;if("string"!=typeof e)throw new TypeError("viewMode() expects a string parameter");if(-1===b.indexOf(e))throw new TypeError("viewMode() parameter must be one of ("+b.join(", ")+") value");return a.viewMode=e,p=Math.max(b.indexOf(e),h),B(),c},c.toolbarPlacement=function(e){if(0===arguments.length)return a.toolbarPlacement;if("string"!=typeof e)throw new TypeError("toolbarPlacement() expects a string parameter");if(-1===v.indexOf(e))throw new TypeError("toolbarPlacement() parameter must be one of ("+v.join(", ")+") value");return a.toolbarPlacement=e,m&&(_(),ae()),c},c.widgetPositioning=function(t){if(0===arguments.length)return e.extend({},a.widgetPositioning);if("[object Object]"!=={}.toString.call(t))throw new TypeError("widgetPositioning() expects an object variable");if(t.horizontal){if("string"!=typeof t.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");if(t.horizontal=t.horizontal.toLowerCase(),-1===w.indexOf(t.horizontal))throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+w.join(", ")+")");a.widgetPositioning.horizontal=t.horizontal}if(t.vertical){if("string"!=typeof t.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");if(t.vertical=t.vertical.toLowerCase(),-1===g.indexOf(t.vertical))throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+g.join(", ")+")");a.widgetPositioning.vertical=t.vertical}return X(),c},c.calendarWeeks=function(e){if(0===arguments.length)return a.calendarWeeks;if("boolean"!=typeof e)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");return a.calendarWeeks=e,X(),c},c.showTodayButton=function(e){if(0===arguments.length)return a.showTodayButton;if("boolean"!=typeof e)throw new TypeError("showTodayButton() expects a boolean parameter");return a.showTodayButton=e,m&&(_(),ae()),c},c.showClear=function(e){if(0===arguments.length)return a.showClear;if("boolean"!=typeof e)throw new TypeError("showClear() expects a boolean parameter");return a.showClear=e,m&&(_(),ae()),c},c.widgetParent=function(t){if(0===arguments.length)return a.widgetParent;if("string"==typeof t&&(t=e(t)),null!==t&&"string"!=typeof t&&!(t instanceof e))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");return a.widgetParent=t,m&&(_(),ae()),c},c.keepOpen=function(e){if(0===arguments.length)return a.keepOpen;if("boolean"!=typeof e)throw new TypeError("keepOpen() expects a boolean parameter");return a.keepOpen=e,c},c.focusOnShow=function(e){if(0===arguments.length)return a.focusOnShow;if("boolean"!=typeof e)throw new TypeError("focusOnShow() expects a boolean parameter");return a.focusOnShow=e,c},c.inline=function(e){if(0===arguments.length)return a.inline;if("boolean"!=typeof e)throw new TypeError("inline() expects a boolean parameter");return a.inline=e,c},c.clear=function(){return ee(),c},c.keyBinds=function(e){return a.keyBinds=e,c},c.getMoment=function(e){return x(e)},c.debug=function(e){if("boolean"!=typeof e)throw new TypeError("debug() expects a boolean parameter");return a.debug=e,c},c.allowInputToggle=function(e){if(0===arguments.length)return a.allowInputToggle;if("boolean"!=typeof e)throw new TypeError("allowInputToggle() expects a boolean parameter");return a.allowInputToggle=e,c},c.showClose=function(e){if(0===arguments.length)return a.showClose;if("boolean"!=typeof e)throw new TypeError("showClose() expects a boolean parameter");return a.showClose=e,c},c.keepInvalid=function(e){if(0===arguments.length)return a.keepInvalid;if("boolean"!=typeof e)throw new TypeError("keepInvalid() expects a boolean parameter");return a.keepInvalid=e,c},c.datepickerInput=function(e){if(0===arguments.length)return a.datepickerInput;if("string"!=typeof e)throw new TypeError("datepickerInput() expects a string parameter");return a.datepickerInput=e,c},c.parseInputDate=function(e){if(0===arguments.length)return a.parseInputDate;if("function"!=typeof e)throw new TypeError("parseInputDate() sholud be as function");return a.parseInputDate=e,c},c.disabledTimeIntervals=function(t){if(0===arguments.length)return a.disabledTimeIntervals?e.extend({},a.disabledTimeIntervals):a.disabledTimeIntervals;if(!t)return a.disabledTimeIntervals=!1,X(),c;if(!(t instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter");return a.disabledTimeIntervals=t,X(),c},c.disabledHours=function(t){if(0===arguments.length)return a.disabledHours?e.extend({},a.disabledHours):a.disabledHours;if(!t)return a.disabledHours=!1,X(),c;if(!(t instanceof Array))throw new TypeError("disabledHours() expects an array parameter");if(a.disabledHours=ce(t),a.enabledHours=!1,a.useCurrent&&!a.keepInvalid){for(var n=0;!A(r,"h");){if(r.add(1,"h"),24===n)throw"Tried 24 times to find a valid date";n++}$(r)}return X(),c},c.enabledHours=function(t){if(0===arguments.length)return a.enabledHours?e.extend({},a.enabledHours):a.enabledHours;if(!t)return a.enabledHours=!1,X(),c;if(!(t instanceof Array))throw new TypeError("enabledHours() expects an array parameter");if(a.enabledHours=ce(t),a.disabledHours=!1,a.useCurrent&&!a.keepInvalid){for(var n=0;!A(r,"h");){if(r.add(1,"h"),24===n)throw"Tried 24 times to find a valid date";n++}$(r)}return X(),c},c.viewDate=function(e){if(0===arguments.length)return i.clone();if(!e)return i=r.clone(),c;if(!("string"==typeof e||t.isMoment(e)||e instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");return i=ie(e),q(),c},n.is("input"))o=n;else if(0===(o=n.find(a.datepickerInput)).size())o=n.find("input");else if(!o.is("input"))throw new Error('CSS class "'+a.datepickerInput+'" cannot be applied to non input element');if(n.hasClass("input-group")&&(f=0===n.find(".datepickerbutton").size()?n.find(".input-group-addon"):n.find(".datepickerbutton")),!a.inline&&!o.is("input"))throw new Error("Could not initialize DateTimePicker without an input element");return r=x(),i=r.clone(),e.extend(!0,a,function(){var t,r={};return(t=n.is("input")||a.inline?n.data():n.find("input").data()).dateOptions&&t.dateOptions instanceof Object&&(r=e.extend(!0,r,t.dateOptions)),e.each(a,function(e){var n="date"+e.charAt(0).toUpperCase()+e.slice(1);void 0!==t[n]&&(r[e]=t[n])}),r}()),c.options(a),ue(),o.on({change:se,blur:a.debug?"":_,keydown:oe,keyup:de,focus:a.allowInputToggle?ae:""}),n.is("input")?o.on({focus:ae}):f&&(f.on("click",re),f.on("mousedown",!1)),o.prop("disabled")&&c.disable(),o.is("input")&&0!==o.val().trim().length?$(ie(o.val().trim())):a.defaultDate&&void 0===o.attr("placeholder")&&$(a.defaultDate),a.inline&&ae(),c};e.fn.datetimepicker=function(t){return this.each(function(){var a=e(this);a.data("DateTimePicker")||(t=e.extend(!0,{},e.fn.datetimepicker.defaults,t),a.data("DateTimePicker",n(a,t)))})},e.fn.datetimepicker.defaults={timeZone:"Etc/UTC",format:!1,dayViewHeaderFormat:"MMMM YYYY",extraFormats:!1,stepping:1,minDate:!1,maxDate:!1,useCurrent:!0,collapse:!0,locale:t.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down",previous:"glyphicon glyphicon-chevron-left",next:"glyphicon glyphicon-chevron-right",today:"glyphicon glyphicon-screenshot",clear:"glyphicon glyphicon-trash",close:"glyphicon glyphicon-remove"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century",pickHour:"Pick Hour",incrementHour:"Increment Hour",decrementHour:"Decrement Hour",pickMinute:"Pick Minute",incrementMinute:"Increment Minute",decrementMinute:"Decrement Minute",pickSecond:"Pick Second",incrementSecond:"Increment Second",decrementSecond:"Decrement Second",togglePeriod:"Toggle Period",selectTime:"Select Time"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:!1,calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",showTodayButton:!1,showClear:!1,showClose:!1,widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:!1,keepOpen:!1,focusOnShow:!0,inline:!1,keepInvalid:!1,datepickerInput:".datepickerinput",keyBinds:{up:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().subtract(7,"d")):this.date(t.clone().add(this.stepping(),"m"))}},down:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().add(7,"d")):this.date(t.clone().subtract(this.stepping(),"m"))}else this.show()},"control up":function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().subtract(1,"y")):this.date(t.clone().add(1,"h"))}},"control down":function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")?this.date(t.clone().add(1,"y")):this.date(t.clone().subtract(1,"h"))}},left:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().subtract(1,"d"))}},right:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().add(1,"d"))}},pageUp:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().subtract(1,"M"))}},pageDown:function(e){if(e){var t=this.date()||this.getMoment();e.find(".datepicker").is(":visible")&&this.date(t.clone().add(1,"M"))}},enter:function(){this.hide()},escape:function(){this.hide()},"control space":function(e){e.find(".timepicker").is(":visible")&&e.find('.btn[data-action="togglePeriod"]').click()},t:function(){this.date(this.getMoment())},delete:function(){this.clear()}},debug:!1,allowInputToggle:!1,disabledTimeIntervals:!1,disabledHours:!1,enabledHours:!1,viewDate:!1}});