!function(t){t.fn.NiceIt=function(n){function a(n,a){for(var e=0;e<a.length;e++){var i=t(a[e]);t(i).attr("id")||t(i).attr("id","fm-"+e),t(i).fnReplaceCheckBoxes(),t(i).fnReplaceRadioButtons()}}n=jQuery.extend({Version:"1.0"},n);var e=this;a(this,e)},t.fn.setTabIndexes=function(){t(this).find("select, input:not(:hidden), textarea, button").each(function(n,a){t(a).attr("tabindex",n+1)})},t.fn.fnReplaceCheckBoxes=function(){var n=this;t(n).find('input[type="checkbox"]').each(function(a,e){t(e).hide();var i="fmCbx-"+t(n).attr("id")+"-"+(a+1);t(e).attr("id")&&(i="fmChbx-"+t(e).attr("id")),t(e).after('<b class="fmCheckbox'+(t(e).attr("checked")?" checked":"")+'" id="'+i+'">&nbsp;</b>');var s=t("#"+i);return t(e).attr("disabled")?void t(s).addClass("chbx-disabled"):void t(e).click(function(){targetInputID="b#fmChbx-"+t(e).attr("id"),t(targetInputID).hasClass("checked")?(t(targetInputID).removeClass("checked").attr("checked",!1),t(e).prop("checked",!1)):(t(targetInputID).addClass("checked").attr("checked",!0),t(e).prop("checked",!0))})})},t.fn.fnReplaceRadioButtons=function(){var n=this;t(n).find('input[type="radio"]').each(function(a,e){t(e).hide();var i="fmRbtn-"+t(n).attr("id")+"-"+(a+1);t(e).attr("id")&&(i="fmRbtn-"+t(e).attr("id")),t(e).after('<a rel="'+t(e).attr("name")+'" class="fmRadio'+(t(e).attr("checked")?" checked":"")+'" id="'+i+'">&nbsp;</a>');var s=t("#"+i);return t(e).attr("disabled")?void t(s).addClass("rbtn-disabled"):(t(e).bind("click",function(){t('.fmRadio[rel="'+t(e).attr("name")+'"]').removeClass("checked"),t('input[name="'+t(s).attr("rel")+'"]').prop("checked",!1),t(s).addClass("checked"),t(this).prop("checked",!0)}),void t(s).bind("click",function(){return t('.fmRadio[rel="'+t(s).attr("rel")+'"]').removeClass("checked"),t('input[name="'+t(s).attr("rel")+'"]').prop("checked",!1),t(this).addClass("checked"),t(e).prop("checked",!0),!1}))})},t.fn.fnReplaceInputBoxes=function(){var n=this;t(n).find('input[type="text"],input[type="password"]').each(function(a,e){var i="50%";"auto"!=t(e).css("width")&&"auto"!=t(e).parent().css("width")&&(i=Math.ceil(100*parseFloat(t(e).css("width"))/parseFloat(t(e).parent().css("width")))+"%");var s="fmInp-"+t(n).attr("id")+"-"+(a+1);t(e).attr("id")&&(s="fmInp-"+t(e).attr("id")),t(e).width("100%"),t(e).wrap('<span class="fmInput" id="'+s+'"><span></span></span>');var d=t("#"+s);t(d).width(i),t(e).attr("disabled")&&t(d).addClass("disabled"),t(d).swapStyles(t(e)),t(e).bind("focus",function(){t(e).val()==t(e).attr("title")&&t(e).val(""),t(d).CtrlInFocus()}),t(e).bind("blur",function(){""==t(e).val()&&t(e).val(t(e).attr("title")),t(d).CtrlOutFocus()})})},t.fn.fnReplaceSelectBoxes=function(){var n=this,a="strong span cite";t(n).find("select").each(function(e,i){if(!t(i).attr("multiple")){var s="50%";"auto"!=t(i).css("width")&&"auto"!=t(i).parent().css("width")&&(s=Math.ceil(100*parseFloat(t(i).css("width"))/parseFloat(t(i).parent().css("width")))+"%");var d="fmCbox-"+t(n).attr("id")+"-"+(e+1);t(i).attr("id")&&(d=t(i).attr("id"),t(i).attr("id","")),t(i).width("100%");var c=""!=t(i).find("option:selected").text()?t(i).find("option:selected").text():"&nbsp;";t(i).before('<div class="fmSelect" tabindex="'+t(i).attr("tabindex")+'" id="'+d+'"><strong><span><cite>'+c+"</cite></span></strong><ul></ul></div>"),t(i).attr("tabindex",""),t(i).hide();var r=t("#"+d);t(r).width(s),t(r).swapStyles(t(i)),t(r).bind("click",function(){t(this).find("ul").show()}),t(r).bind("mouseleave",function(){t(this).find("ul").hide()}),t(r).bind("focus",function(){t("body").focus(),t(".fmSelect").css("z-index","100"),t(r).css("z-index","1500"),t(this).CtrlInFocus()}),t(r).bind("blur",function(){t(this).CtrlOutFocus()}),t(i).find("option").each(function(n,a){r.find("ul").append('<li option="'+t(a).attr("value")+'">'+t(a).text()+"</li>")}),r.find("li").each(function(n,e){t(e).bind("mouseenter",function(){t(this).addClass("active")}),t(e).bind("mouseout",function(){t(this).removeClass("active")}),t(e).bind("click",function(){r.find(a).text(t(this).text()),t(i).val(t(this).attr("option")),r.find("ul").fadeOut()})}),r.bind("keydown",function(n){var e=t(i).find("option:selected");return t(r).find("ul").hide(),38==n.keyCode?(e.val()!=t(i).find("option:first").val()&&(e.prev().attr("selected",!0),t(r).find(a).text(e.prev().text())),!1):40==n.keyCode?(e.val()!=t(i).find("option:last").val()&&(e.next().attr("selected",!0),t(r).find(a).text(e.next().text())),!1):33==n.keyCode?(t(i).find("option:first").attr("selected",!0),t(r).find(a).text(t(i).find("option:first").text()),!1):34==n.keyCode?(t(i).find("option:last").attr("selected",!0),t(r).find(a).text(t(i).find("option:last").text()),!1):void 0}),t(i).bind("change",function(){r.find(a).text(t(this).find("option:selected").text())})}})},t.fn.fnReplaceSelectboxesM=function(){var n=this;t(n).find("select[multiple]").each(function(a,e){var i="100%",s=t(e).height();"auto"!=t(e).css("width")&&"auto"!=t(e).parent().css("width")&&(i=Math.ceil(100*parseFloat(t(e).css("width"))/parseFloat(t(e).parent().css("width")))+"%");var d="fmMsel-"+t(n).attr("id")+"-"+(a+1);t(e).attr("id")&&(d=t(e).attr("id"),t(e).attr("id","")),t(e).wrap('<span class="fmMultipleSelect" id="'+d+'"><span><span><span></span></span></span></span>');var c=t("#"+d);t(c).width(i),t(e).width("96%"),t(e).height(s),t(e).bind("focus",function(){t(c).CtrlInFocus()}),t(e).bind("blur",function(){t(c).CtrlOutFocus()})})},t.fn.fnReplaceTextareas=function(){var n=this;t(n).find("textarea").each(function(a,e){var i="50%",s=t(e).height();"auto"!=t(e).css("width")&&"auto"!=t(e).parent().css("width")&&(i=Math.ceil(100*parseFloat(t(e).css("width"))/parseFloat(t(e).parent().css("width")))+"%");var d="fmTarea-"+t(n).attr("id")+"-"+(a+1);t(e).attr("id")&&(d="fmTarea-"+t(e).attr("id")),t(e).wrap('<span class="fmTextarea" id="'+d+'"><span><span><span></span></span></span></span>');var c=t("#"+d);t(c).width(i),t(e).height(s),t(e).attr("disabled")&&t(c).addClass("tx-disabled"),t(e).bind("focus",function(){t(c).CtrlInFocus()}),t(e).bind("blur",function(){t(c).CtrlOutFocus()})})},t.fn.fnReplaceButtons=function(){var n=this;t(n).find("button:not(.fmButton)").each(function(n,a){t(a).addClass("fmButton"),"submit"==t(a).attr("type").toLowerCase()?t(a).wrapInner("<strong><span></span></strong>"):t(a).wrapInner("<span><span></span></span>"),t(a).bind("focus",function(){t(a).CtrlInFocus()}),t(a).bind("blur",function(){t(a).CtrlOutFocus()})})},t.fn.fnReplaceFiles=function(){var n=this;t(n).find('input[type="file"]').each(function(a,e){var i="50%";"auto"!=t(e).css("width")&&"auto"!=t(e).parent().css("width")&&(i=Math.ceil(100*parseFloat(t(e).css("width"))/parseFloat(t(e).parent().css("width")))+"%");var s="fmFinp-"+t(n).attr("id")+"-"+(a+1);t(e).attr("id")&&(s="fmFinp-"+t(e).attr("id")),t(e).before('<a tabindex="'+t(e).attr("tabindex")+'" class="fnFileInput" id="'+s+'"><span><cite>Not Selected ...</cite><strong>'+(""!=t(e).attr("title")?t(e).attr("title"):"Browse ...")+"</strong></span></a>"),t(e).attr("tabindex",0),t(e).addClass("fnFileHidden");var d=t("#"+s);t(e).appendTo("#"+s+" span strong"),t(d).width(i),t(e).attr("disabled")&&t(d).addClass("disabled"),t(e).bind("change",function(){t(d).find("cite").text(t(this).attr("value"))}),t(d).bind("focus",function(){t(d).CtrlInFocus()}),t(d).bind("blur",function(){t(d).CtrlOutFocus()})})},t.fn.swapStyles=function(n){var a=new Array("margin-left","margin-right","margin-top","margin-bottom");t(a).each(function(a,e){t(this).css(e,t(n).css(e))}),t(n).addClass("fmZero")},t.fn.CtrlInFocus=function(){t(this).addClass("fmInFocus")},t.fn.CtrlOutFocus=function(){t(this).removeClass("fmInFocus")}}(jQuery);