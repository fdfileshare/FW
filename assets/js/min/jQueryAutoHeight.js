!function(e){e.fn.autoHeight=function(t){var n,r=e.extend({column:0,clear:0,height:"minHeight",reset:"",descend:function(e,t){return t-e}},t||{}),c=e(this),o=0,i=new Array,h=new Array;h[o]=0,c.each(function(t){"reset"==r.reset&&e(this).removeAttr("style");var n=e(this).height();i[t]=n,r.column>1&&(n>h[o]&&(h[o]=n),t>0&&(t+1)%r.column==0&&(o++,h[o]=0))}),i=i.sort(r.descend),n=i[0];var s="undefined"==typeof window.addEventListener&&"undefined"==typeof document.documentElement.style.maxHeight;if(r.column>1)for(var u=0;u<h.length;u++)for(var l=0;l<r.column;l++)s?c.eq(u*r.column+l).height(h[u]):c.eq(u*r.column+l).css(r.height,h[u]),0==l&&0!=r.clear&&c.eq(u*r.column+l).css("clear","both");else s?c.height(n):c.css(r.height,n)}}(jQuery);