!function(e){var t=function(t){var t=e(t),r=t[0];for(var n in r)(function(n){e.isFunction(r[n])&&(t[n]=/^get[^a-z]/.test(n)?function(){return r[n].apply(r,arguments)}:function(){var e=arguments;return t.each(function(r){var i=t[r];i[n].apply(i,e)}),t})})(n);return t};e.ex=e.ex||{},e.ex.resize=function(t,r,n){e.isFunction(n)&&(n={callback:n});var i=this,a=i.config=e.extend({},e.ex.resize.defaults,n);a.targets=r,a.target=a.watchTarget=a.targets.eq(t),a.index=t,a.oldBrowser=e.browser.msie&&(e.browser.version<8||!e.boxModel),a.key={height:"",width:""},a.contentsWatch&&i._createContentsWrapper(),a.currentSize=a.newSize=i.getSize(),a.resizeWatch&&i._resizeWatch()},e.extend(e.ex.resize.prototype,{_createContentsWrapper:function(){var e=this,t=e.config,r=t.oldBrowser?"zoom:1;display:inline":"display:inline-block";return t.watchTarget=t.target.wrapInner('<div style="'+r+";width:"+t.target.css("width")+'"/>').children(),e},_resizeWatch:function(){var e=this,t=e.config;setTimeout(function(){t.contentsWatch&&(t.watchTarget.prev().size()>0||t.watchTarget.next().size()>0||t.watchTarget.parent().get(0)!=t.target.get(0))&&(t.watchTarget.replaceWith(t.watchTarget.get(0).childNodes),e._createContentsWrapper()),e._isResize()&&(t.currentSize=t.newSize,t.callback.call(t.watchTarget.get(0),e)),e._resizeWatch()},t.resizeWatch)},_isResize:function(){var e=this,t=e.config,r=!1;t.newSize=e.getSize();for(var n in t.key)r=r||t.newSize[n]!=t.currentSize[n];return r},getTargets:function(){return this.config.targets},getTarget:function(){return this.config.target},getSize:function(){var e=this,t=e.config;t.contentsWatch&&t.watchTarget.css("width","auto");var r={};for(var n in t.key)r[n]=t.watchTarget[n]();return t.contentsWatch&&t.watchTarget.css("width",t.target.css("width")),r}}),e.ex.resize.defaults={contentsWatch:!1,resizeWatch:100,callback:function(){}},e.fn.exResize=function(r){var n=this,i=[];return n.each(function(t){var a=n.eq(t),c=a.data("ex-resize")||new e.ex.resize(t,n,r);i.push(c),a.data("ex-resize",c)}),r&&r.api?t(i):n}}(jQuery);