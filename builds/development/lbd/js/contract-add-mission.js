function fnEditorialtotech(e){var t=e.value;"services"==t?($(".prod_mission_deatils").addClass("hidden"),$(".tech_mission").removeClass("hidden"),$("#tech_product option[value='superadmin']").attr("disabled",!1),$("#tech_product option[value='sales']").attr("disabled",!1),$("#tech_product option[value='seo']").attr("disabled",!1),$("#tech_product option[value='multimedia']").attr("disabled",!0),$("#tech_product").val(""),$("#tech_product").trigger("chosen:updated"),$("#tech_product_chosen").removeClass("hidden")):"crea"==t?($(".prod_mission_deatils").addClass("hidden"),$(".tech_mission").removeClass("hidden"),$("#tech_product").val(""),$("#tech_product option[value='superadmin']").attr("disabled",!0),$("#tech_product option[value='sales']").attr("disabled",!0),$("#tech_product option[value='seo']").attr("disabled",!0),$("#tech_product option[value='multimedia']").attr("disabled",!1),$("#tech_product").trigger("chosen:updated"),$("#tech_product_chosen").removeClass("hidden")):($(".prod_mission_deatils").removeClass("hidden"),$(".tech_mission").addClass("hidden"))}function techtitlelist(e,t){var a="",l=e;$("#team").val(),$("#tech_product").html();$("#tech_title").val(""),t&&(a="&typeid="+t);var o="/quote-new/tech-title-select?tech_type="+l+a;$.post(o,function(e){$("#tech_title").empty().html(e),$("#tech_title").trigger("chosen:updated"),"integration"==$("#tech_product option:selected").val()?$("#working_days").closest("div.form-group").addClass("hidden"):$("#working_days").closest("div.form-group").removeClass("hidden")})}function techtitleDetails(e,t){$("#addmission").attr("action","/contractmission/save-tech-mission"),techval=e,title=$("#tech_title option:selected").text(),title?$("#tech_type").val(title):$("#tech_type").val($("#producttype_1_chosen").find("a span").text()),$("#tech_type").attr("rel",techval);var a="/contractmission/tech-delivery-mission?title_id="+techval;$.post(a,function(e){var a=e.split("-");if(type=a[3].trim(),"multimedia"==type?($("input[type='radio'][name='oneshot']").each(function(){"no"==$(this).val()&&$(this).attr("disabled",!0)}),""==t&&($("#volume").val(a[5].trim()),$("#mission_length_1").val(parseInt(a[0].trim())),$("#working_days").val(a[4].trim()),$("#internalcost").val(a[2].trim())),$("#volume").attr("data-thesholdvolume",a[5].trim()),"superadmin"!=$("#mission_length_1").attr("data-usertype")&&$("#mission_length_1").attr("readonly",!0),$("#mission_length_1").attr("data-days",a[0].trim()),$("#working_days").closest(".form-group").addClass("hidden"),$("#working_days").attr("data-work",a[4].trim())):(""==$("#mission_length_1").val()&&$("#mission_length_1").val(parseInt(a[0].trim())),$("#mission_length_option_1").val(a[1].trim()),""==t&&$("#internalcost").val(a[2].trim()),""==$("#working_days").val()&&$("#working_days").val(a[0].trim()),$("#working_days").attr("data-default-cost",a[2].trim()),$("#working_days").attr("data-config",a[0].trim()),"edito"!=type&&"integration"!=type&&""==$("#working_days").val()?$("#mission_length_1").attr("min",a[0].trim()):"edito"!=type&&"integration"!=type||($("#mission_length_1").attr("min","1"),$("#working_days").closest("div.form-group").addClass("hidden"))),""==t){"sales"==type||"multimedia"==type?$("#margin_percentage").val(0):$("#margin_percentage").val(60),volume=parseInt($("#volume").val()),internalcost=parseFloat($("#internalcost").val()),margin_percentage=parseFloat($("#margin_percentage").val());var l=(internalcost/(1-margin_percentage/100)).toFixed(5);if($("#unit_price").val(l),"yes"==$("input[name=free_mission]:checked").val())o=0;else if("multimedia"==type){theshold=parseInt($("#volume").attr("data-thesholdvolume")),range=Math.ceil(volume/theshold);o=(range*l).toFixed(2)}else var o=(volume*l).toFixed(2);var s=o.replace(".",",");$("#mission_turnover").val(o),$("#mission_turnover_text").html("<b>"+s+"</b>"),total_turnover_org=$("#total_turnover_org").val(),total_turnover=parseFloat(total_turnover_org)+parseFloat(o),$("#total_turnover").val(total_turnover);var i=total_turnover.toFixed(2);$("#total_turnover_text").text(i)}"multimedia"!=type&&techoneshotVolume("change")})}function techoneshotVolume(e){var t=$("input:radio[name=oneshot]:checked").val(),a=$("#producttype_1").find(":selected").attr("assign");if("no"==t)if("integration"!=a&&(duration_missionval=parseInt($("#mission_length_1").val())),totalvolumeval=$("#volume").val(),volumeMax=$("#volume_max_1").val(),tempotype=$("#tempo_type_1").val(),deleveryvolumeoption=$("#delivery_volume_option_1").val(),tempoLength=$("#tempo_length_1").val(),tempoLengthoption=$("#tempo_length_option_1").val(),$("body").find(".alert-danger").remove(),"days"==tempoLengthoption?tempo_callenth=tempoLength:"week"==tempoLengthoption?tempo_callenth=7*tempoLength:"month"==tempoLengthoption?tempo_callenth=30*tempoLength:"year"==tempoLengthoption&&(tempo_callenth=365*tempoLength),caltotval=Math.round(duration_missionval/tempo_callenth*volumeMax),duration_missionval=Math.round(totalvolumeval*tempo_callenth/volumeMax),"integration"==a){if("change"==e&&$.isNumeric(caltotval)&&0!=caltotval&&($("#volume").val(caltotval),totalvolumeval=$("#volume").val()),caltotval!=totalvolumeval&&$.isNumeric(caltotval))return $(document).find("#tempo_details").after("<div class='alert-danger span10' style='padding:0 5px;float:right;'>Le tempo indiqu&#233; ne correspond pas au volume et &#224; la  dur&#233;e de la mission</div>"),volume_error=!1,!1;volume_error=!0}else $.isNumeric(duration_missionval)&&$("#mission_length_1").val(duration_missionval);else $(".moverightduration").removeClass("hidden");return!0}function round5num(e){return Math.round(1e5*e)/1e5}function technewcaltotal(e){var t=parseInt($("#volume").val()),a=$("#tech_product option:selected").val();if("sales"==a||"seo"==a||"superadmin"==a){if($("#working_days").val())var l=$("#working_days").val();var o=parseFloat($("#working_days").attr("data-config")),s=parseFloat($("#working_days").attr("data-default-cost"))/o,i=parseInt(l)*parseFloat(s);$.isNumeric(i)&&$("#internalcost").val(i)}var n=(parseFloat($("#internalcost").val())/(1-parseFloat($("#margin_percentage").val())/100)).toFixed(5);if("unit"==e&&""!=e||isNaN(n)||$("#unit_price").val(n),"yes"==$("[name=free_mission]:checked").val())var r=0,d=0;else{if("multimedia"==a)var m=parseInt($("#volume").attr("data-thesholdvolume")),r=(Math.ceil(t/m)*n).toFixed(2);else r=(t*n).toFixed(2);d=r.replace(".",",")}isNaN(r)||"total"==e&&""!=e||($("#mission_turnover").val(r),$("#mission_turnover_text").html("<b>"+d+"</b>"));var p=parseFloat($("#total_turnover_org").val());"add"==$("#reqaction").val()&&(p+=parseFloat(r)),$("#total_turnover").val(p);var v=p;$.isNumeric(p)&&$("#total_turnover_text").text(v)}function addmissiontitleupdate(){$("#tech_product").val();$("#tech_title").val()&&($("#margin_percentage").removeClass("validate[required,minWriters[0.01],maxWriters[99.99]]"),$("#margin_percentage").addClass("validate[required,minWriters[0.00],maxWriters[99.99]]"));var e=$("#mission_name").val(),t=$("#mission_turnover").val(),a=$("#volume").val(),l=$("#mission_length_1").val(),o=$("#language_1_chosen a span").text();if(!$.isNumeric(t)||"0.00"==t&&"yes"!=$("input[name=free_mission]:checked").val()||("yes"==$("input[name=free_mission]:checked").val()&&(t=0),$("#mission_turnover_details").html(t+"&"+$("#mcurrency").val()+";")),$("#custom_name").html(e),"redaction"!=$("#product_1").val()&&"translation"!=$("#product_1").val()||""!=$("#tech_title").val()&&"editorial"!=$("#team").val()){if("services"!=$("#team").val()||""!=$("#tech_title").val()){if($("#price_label").text("Selling price"),$("#step4label").text("Prices"),$("#tech_product").val()&&"services"==$("#team").val())s=$("#tech_product_chosen a span").text();else var s=$("#product_1_chosen a span").text();var i=$("#tech_title_chosen a span").text();val_mission=a?s+" / "+a+" "+i+" / "+o:s+" / "+i+" / "+o,$("#add_mission_details").html(val_mission)}}else{$("#price_label").text("Price/art"),$("#step4label").text("Prices");var n=$("#product_1_chosen a span").text(),r=$("#producttype_1_chosen a span").text(),o=$("#language_1_chosen a span").text(),d=$("#nb_words_1").val();if("Traduction"==n)m=$("#languagedest_1_chosen a span").text();else var m="";val_mission=a?n+" "+a+" / "+r+" / "+o+" "+m+" "+d+" words":n+" / "+r+" / "+o+" "+m+" "+d+" words",$("#add_mission_details").html(val_mission)}l&&$("#mission_duration").html(l+" days mission")}function addWeekdays(e,t){var t=parseInt(t),a=new Date(e),l=t;for(i=1;t>=i;)0!==(a=new Date(a.getTime()+864e5)).getDay()&&6!==a.getDay()||(t+=1),i++;var o=new Date(e),s=new Date(a),n=Math.abs(s.getTime()-o.getTime()),r=Math.ceil(n/864e5);return Math.abs(r-l)}function betweendateweekday(e,t){var e=new Date(e),t=new Date(t),a=Math.abs(t.getTime()-e.getTime()),l=Math.ceil(a/864e5),o=e;for(leavedays=0,i=1;i<=l;i++)0!==(o=new Date(o.getTime()+864e5)).getDay()&&6!==o.getDay()||leavedays++;return l-leavedays}function mission_lenth_change(){if(volume=$("#volume").val(),nbwords=$("#nb_words_1").val(),configprod=$("#producttype_1 option:selected").attr("configwords"),prodval=$("#producttype_1 option:selected").val(),durationVal=$("#mission_length_1").val(),required_writer=Math.ceil(nbwords*volume/(durationVal*configprod)),(required_writer<=0||isNaN(required_writer))&&(required_writer=1),"autre"!=prodval){$("#prod_mission_writing_staff").val();$("#mission_writers").val(required_writer),$("#prod_mission_writing_staff").val(required_writer),$("#prod_mission_writing_staff").removeClass(),$("#prod_mission_writing_staff").attr("class"," validate[required,custom[number],minWriters["+required_writer+"]] form-control")}}$(document).ready(function(){var e=$("#quote_id").val(),t=$("#product_1 option").length;$("#newMissionStep0Btn").on("click",function(){$(this).html("Please wait.."),e&&(mentionComments.bousersInmention(),mentionComments.mentionhashtag(e),$("textarea").hashtags()),$(".fulltoptitle").removeClass("hidden"),$(".modal-title").html("Edit Mission"),$("#newMissionStep2").removeClass("show"),$("#newMissionStep0").removeClass("show"),$(this).html("Edit"),$("#newMissionStep1").addClass("show animated bounceInRight"),$("#edit_details").removeClass("hidden"),$(".modalFullStep1").addClass("modalFullStepActive"),$(".modalFullStep2").removeClass("modalFullStepActive"),$(".modalFullStep3").removeClass("modalFullStepActive"),$(".modalFullStep4").removeClass("modalFullStepActive"),$(".modalFullStep5").removeClass("modalFullStepActive")}),$("#newMissionStep1Btn").on("click",function(){if($(".has-error").remove(),"editorial"==$("#team option:selected").val()){""==(l=$("#language_1 option:selected").val())&&$("#language_1").parent("div").append('<div id="languange-error" class="has-error error">Please select the languange </div>');var e=$("#product_1 option:selected").val();if(""==e)$("#product_1").parent("div").append('<div id="product-error" class="has-error error">Please select the type</div>');else if("translation"==e){var t=$("#languagedest_1 option:selected").val();if(""==t)$("#languagedest_1").parent("div").append('<div id="languagedest_1-error" class="has-error error">Please select the languange2 </div>');else if(l==t)return $("#languagedest_1").parent("div").append('<div id="languagedest_1-error" class="has-error error">Please select the different languange </div>'),!1}else"editorical"==e&&$("#working_days").closest(".form-group").addClass("hidden");""==(a=$("#producttype_1 option:selected").val())&&$("#producttype_1").parent("div").append('<div id="producttype-error" class="has-error error">Please select the product type</div>')}else if("services"==$("#team option:selected").val()||"crea"==$("#team option:selected").val()){var a=$("#tech_title option:selected").val();""==a&&$("#tech_title_1").parent("div").append('<div id="tech_title-error" class="has-error error">Please select the product type</div>');var l=$("#language_1 option:selected").val();""==l&&$("#language_1").parent("div").append('<div id="languange-error" class="has-error error">Please select the languange </div>')}1==$("#addmission").validationEngine("validate")&&("add"==$("#reqaction").val()&&($("#add_details").removeClass("hidden"),addmissiontitleupdate(),$("#mission_duration").addClass("hidden")),$("#newMissionStep3").removeClass("show"),$("#newMissionStep1").removeClass("show"),$("#newMissionStep2").addClass("show animated bounceInRight"),$(".modalFullStep2").addClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive"),$(".modalFullStep3").removeClass("modalFullStepActive"),$(".modalFullStep4").removeClass("modalFullStepActive"),$(".modalFullStep5").removeClass("modalFullStepActive"))}),$("#newMissionStep2Btn").on("click",function(){var e=$("#addmission").validationEngine("validate");if("disabled"==$(this).attr("disabled"))$("#newMissionStep3").removeClass("show"),$("#newMissionStep1").removeClass("show"),$("#newMissionStep2").addClass("show animated bounceInRight"),$(".modalFullStep2").addClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive"),$(".modalFullStep3").removeClass("modalFullStepActive"),$(".modalFullStep4").removeClass("modalFullStepActive"),$(".modalFullStep5").removeClass("modalFullStepActive");else if(1==e)if("add"==$("#reqaction").val()&&($("#add_details").removeClass("hidden"),addmissiontitleupdate(),$("#mission_duration").removeClass("hidden")),"editorial"==$("#team option:selected").val()&&$("#producttype_1").val()){var a=$("#product_1 option:selected").val(),l=$("#language_1 option:selected").val(),o=$("#languagedest_1 option:selected").val(),s=$("#producttype_1 option:selected").val(),i=$("#nb_words_1").val(),n=$("#volume").val(),r=$("#mclient_id").val(),d=$("#mcurrency").val(),m=$("#conversion").val(),p=$("#sales_suggested_missions").val(),v=$("#showtheorical_val").val();$.get("/contractmission/get-hoq-prices",{product:a,showtheorical:v,selected_mission:p,language:l,volume:n,conversion:m,client_id:r,currency:d,languagedest:o,producttype:s,nb_words:i},function(e){""==e?$("#history_deals").html("<h3>No History Deals</h3>"):$("#history_deals").html(e)}),$("#newMissionStep4").removeClass("show"),$("#newMissionStep2").removeClass("show"),$("#newMissionStep3").addClass("show animated bounceInRight"),$(".modalFullStep3").addClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive"),$(".modalFullStep2").removeClass("modalFullStepActive"),$(".modalFullStep4").removeClass("modalFullStepActive"),$(".modalFullStep5").removeClass("modalFullStepActive")}else"edit"!=$("#reqaction").val()&&"6"!=t||"services"!=$("#team option:selected").val()?($("#newMissionStep3").removeClass("show"),$("#newMissionStep2").removeClass("show"),$("#newMissionStep4").addClass("show animated bounceInRight"),$(".modalFullStep4").addClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive"),$(".modalFullStep3").removeClass("modalFullStepActive"),$(".modalFullStep2").removeClass("modalFullStepActive"),$(".modalFullStep5").removeClass("modalFullStepActive")):($("#newMissionStep4").removeClass("show"),$("#newMissionStep2").removeClass("show"),$("#newMissionStep3").addClass("show animated bounceInRight"),$(".modalFullStep3").addClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive"),$(".modalFullStep2").removeClass("modalFullStepActive"),$(".modalFullStep4").removeClass("modalFullStepActive"),$(".modalFullStep5").removeClass("modalFullStepActive"))}),$("#newMissionSte3Btn").on("click",function(){1==$("#addmission").validationEngine("validate")&&("add"==$("#reqaction").val()&&"6"==t&&($(this).html("Please wait.."),mentionComments.bousersInmention(),mentionComments.mentionhashtag(e),$("textarea").hashtags()),$("#newMissionStep5").removeClass("show"),$("#newMissionStep3").removeClass("show"),$("#newMissionStep4").addClass("show animated bounceInRight"),$(this).html("Next"),$(".modalFullStep4").addClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive"),$(".modalFullStep3").removeClass("modalFullStepActive"),$(".modalFullStep2").removeClass("modalFullStepActive"),$(".modalFullStep5").removeClass("modalFullStepActive"))}),$("#newMissionSte4Btn").on("click",function(){var t=$("#addmission").validationEngine("validate");"add"==$("#reqaction").val()&&($("#add_details").removeClass("hidden"),addmissiontitleupdate(),$(this).html("Please wait.."),mentionComments.bousersInmention(),mentionComments.mentionhashtag(e),$("textarea").hashtags()),1==t&&($("#newMissionStep4").removeClass("show"),$("#newMissionStep5").addClass("show animated bounceInRight"),$(this).html("Next"),$(".modalFullStep5").addClass("modalFullStepActive"),$(".modalFullStep4").removeClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive"),$(".modalFullStep3").removeClass("modalFullStepActive"),$(".modalFullStep2").removeClass("modalFullStepActive"))}),$("#newMissionStep1BtnPrev").on("click",function(){"add"==$("#reqaction").val()&&($("#add_details").removeClass("hidden"),addmissiontitleupdate()),$("#newMissionStep1").addClass("show animated bounceInRight"),$("#newMissionStep2").removeClass("show"),$(".modalFullStep2").removeClass("modalFullStepActive"),$(".modalFullStep1").addClass("modalFullStepActive"),$(".modalFullStep3").removeClass("modalFullStepActive"),$(".modalFullStep4").removeClass("modalFullStepActive"),$(".modalFullStep5").removeClass("modalFullStepActive")}),$("#newMissionStep4BtnPrev").on("click",function(){$("#newMissionStep5").removeClass("show"),$("#newMissionStep3").removeClass("show"),$("#newMissionStep4").addClass("show animated bounceInRight"),$(".modalFullStep4").addClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive"),$(".modalFullStep3").removeClass("modalFullStepActive"),$(".modalFullStep2").removeClass("modalFullStepActive"),$(".modalFullStep5").removeClass("modalFullStepActive")}),$("#newMissionStep3BtnPrev").on("click",function(){"editorial"==$("#team option:selected").val()&&$("#producttype_1").val()||"edit"==$("#reqaction").val()?($("#newMissionStep4").removeClass("show"),$("#newMissionStep2").removeClass("show"),$("#newMissionStep3").addClass("show animated bounceInRight"),$(".modalFullStep3").addClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive"),$(".modalFullStep2").removeClass("modalFullStepActive"),$(".modalFullStep4").removeClass("modalFullStepActive"),$(".modalFullStep5").removeClass("modalFullStepActive")):($("#newMissionStep4").removeClass("show"),$("#newMissionStep3").removeClass("show"),$("#newMissionStep2").addClass("show animated bounceInRight"),$(".modalFullStep2").addClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive"),$(".modalFullStep3").removeClass("modalFullStepActive"),$(".modalFullStep4").removeClass("modalFullStepActive"),$(".modalFullStep5").removeClass("modalFullStepActive"))}),$("#newMissionStep2BtnPrev").on("click",function(){$("#newMissionStep3").removeClass("show"),$("#newMissionStep1").removeClass("show"),$("#newMissionStep2").addClass("show animated bounceInRight"),$(".modalFullStep2").addClass("modalFullStepActive"),$(".modalFullStep1").removeClass("modalFullStepActive"),$(".modalFullStep3").removeClass("modalFullStepActive"),$(".modalFullStep4").removeClass("modalFullStepActive"),$(".modalFullStep5").removeClass("modalFullStepActive")}),$("#newMissionStep0BtnPrev").on("click",function(){$(".fulltoptitle").addClass("hidden"),$(".modal-title").html($("#Mission_name").text()),$("#newMissionStep3").removeClass("show"),$("#newMissionStep1").removeClass("show"),$("#newMissionStep0").addClass("show animated bounceInRight"),$("#edit_details").addClass("hidden"),$(".modalFullStep1").addClass("modalFullStepActive"),$(".modalFullStep2").removeClass("modalFullStepActive"),$(".modalFullStep3").removeClass("modalFullStepActive"),$(".modalFullStep4").removeClass("modalFullStepActive"),$(".modalFullStep5").removeClass("modalFullStepActive")}),$(document).on("change",".prod_mission_selected",function(e){"no"==this.value?$(".prod_mission_linked").addClass("hidden"):($(".prod_mission_linked").removeClass("hidden"),$("#prodmissionslist").chosen({allow_single_deselect:!1,search_contains:!0}),$("#prodmissionslist").removeClass("hidden"),$("#prodmissionslist_chosen").css("width","267px"))}),$(document).on("change","#language_1,#languagedest_1",function(){var e=$("#team").val(),t=$(this).val();t&&"editorial"==e&&$.get("/contractmission/get-staff-details",{language:t},function(e){e&&$("#staff_time").val(e.trim())})}),$(document).on("change keyup keypress","#mission_turnover",function(){var e=parseFloat($(this).val().replace(",",".")),t=$("input[type='radio'][name='free_mission']:checked").val();if("yes"==t&&($(this).val("0"),e=0),$.isNumeric(e)&&$("#producttype_1 option:selected").val()&&"editorial"==$("#team option:selected").val()&&"yes"!=t){var a=$("#volume").val(),l=$("#internalcost").val(),o=round5num(e/a);$.isNumeric(o)&&(Math.floor(o),$("#unit_price").val(o));var s=100-100*l/o;$.isNumeric(s)&&(Math.floor(s),$("#margin_percentage").val(s)),setTimeout(function(){fnCalTotalCosts("total")},800)}}),$(document).on("change keyup keypress","#unit_price",function(){if(unitprice=parseFloat($(this).val().replace(",",".")),$.isNumeric(unitprice)&&$("#producttype_1 option:selected").val()&&"editorial"==$("#team option:selected").val()){$("#volume").val(),$("#nb_words_1").val();var e=100-100*$("#internalcost").val()/unitprice;$.isNumeric(e)&&(Math.floor(e),$("#margin_percentage").val(e)),setTimeout(function(){fnCalTotalCosts("unit")},800)}}),$(document).on("change keyup keypress","#working_days",function(){if(tech_product=$("#tech_product option:selected").val(),tech_product||(tech_product=$("#product_1 option:selected").val()),"sales"==tech_product||"seo"==tech_product||"superadmin"==tech_product){var e=parseInt($(this).val()),t=$("#working_days").attr("data-config"),a=parseFloat($("#working_days").attr("data-default-cost"));$("#mission_length_1").removeClass(),$("#mission_length_1").attr("class","form-control validate[required,minWriters["+e+"]]");var l=a/parseFloat(t);internal_val=l*e,$("#internalcost").val(internal_val),$("#tech_product option:selected").val()?technewcaltotal(""):techtotalcal("")}}),$(document).on("change keyup keypress","#price_per_word",function(){if(price_per_word=parseFloat($(this).val().replace(",",".")),$.isNumeric(price_per_word)&&$("#producttype_1 option:selected").val()&&"editorial"==$("#team option:selected").val()){$("#volume").val();var e=$("#nb_words_1").val(),t=$("#internalcost").val(),a=round5num(e*price_per_word);$.isNumeric(a)&&(Math.floor(a),$("#unit_price").val(a));var l=100-100*t/a;$.isNumeric(l)&&(Math.floor(l),$("#margin_percentage").val(l)),setTimeout(function(){fnCalTotalCosts("word")},800)}}),$(document).on("change keyup keypress","#prod_mission_writing_staff",function(){var e=$(this).val();volume=$("#volume").val(),nbwords=$("#nb_words_1").val(),configprod=$("#producttype_1 option:selected").attr("configwords"),prodval=$("#producttype_1 option:selected").val(),durationVal=Math.ceil(nbwords*volume/(e*configprod)),durationVal<0&&(durationVal=1),"autre"!=prodval&&$("#mission_length_1").val(durationVal),change_enddate()}),$("#mission_length_1").on("change keyup keypress",function(){"no"==$("input:radio[name=oneshot]:checked").val()&&($("#volume_max_1").val(""),$("#tempo_length_1").val(""),$("#tempo_type_1").val("fix"),$("#delivery_volume_option_1").val("every"),$("#tempo_type_1,#delivery_volume_option_1").trigger("chosen:updated"))})});