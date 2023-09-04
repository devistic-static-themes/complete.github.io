/* rangeslider.js - v2.3.0 | (c) 2016 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(k){Number.isNaN=Number.isNaN||function(a){return"number"==typeof a&&a!=a};var q,m="rangeslider",g=0,b=((q=document.createElement("input")).setAttribute("type","range"),"text"!==q.type),i={polyfill:!0,orientation:"horizontal",isRTL:!1,rangeClass:"rangeslider",disabledClass:"rangeslider--disabled",activeClass:"rangeslider--active",horizontalClass:"rangeslider--horizontal",verticalClass:"rangeslider--vertical",fillClass:"rangeslider__fill",handleClass:"rangeslider__handle",startEvent:["mousedown","touchstart","pointerdown"],moveEvent:["mousemove","touchmove","pointermove"],endEvent:["mouseup","touchend","pointerup"]},c={orientation:{horizontal:{dimension:"width",direction:"left",directionStyle:"left",coordinate:"x"},vertical:{dimension:"height",direction:"top",directionStyle:"bottom",coordinate:"y"}}};function f(B,w){var l=function(r){for(var h,a=[],o=r.parentNode;(h=o)&&(0===h.offsetWidth||0===h.offsetHeight||!1===h.open);){a.push(o),o=o.parentNode}return a}(B),x=l.length,A=[],y=B[w];function z(a){void 0!==a.open&&(a.open=!a.open)}if(x){for(var u=0;u<x;u++){A[u]=l[u].style.cssText,l[u].style.setProperty?l[u].style.setProperty("display","block","important"):l[u].style.cssText+=";display: block !important",l[u].style.height="0",l[u].style.overflow="hidden",l[u].style.visibility="hidden",z(l[u])}y=B[w];for(var d=0;d<x;d++){l[d].style.cssText=A[d],z(l[d])}}return y}function j(h,d){var a=parseFloat(h);return Number.isNaN(a)?d:a}function p(a){return a.charAt(0).toUpperCase()+a.substr(1)}function v(o,d){if(this.$window=k(window),this.$document=k(document),this.$element=k(o),this.options=k.extend({},i,d),this.polyfill=this.options.polyfill,this.orientation=this.$element[0].getAttribute("data-orientation")||this.options.orientation,this.onInit=this.options.onInit,this.onSlide=this.options.onSlide,this.onSlideEnd=this.options.onSlideEnd,this.DIMENSION=c.orientation[this.orientation].dimension,this.DIRECTION=this.options.isRTL?"right":"left",this.DIRECTION_STYLE=this.options.isRTL?"right":"left",this.COORDINATE=c.orientation[this.orientation].coordinate,this.polyfill&&b){return !1}this.identifier="js-"+m+"-"+g++,this.startEvent=this.options.startEvent.join("."+this.identifier+" ")+"."+this.identifier,this.moveEvent=this.options.moveEvent.join("."+this.identifier+" ")+"."+this.identifier,this.endEvent=this.options.endEvent.join("."+this.identifier+" ")+"."+this.identifier,this.toFixed=(this.step+"").replace(".","").length-1,this.$fill=k('<div class="'+this.options.fillClass+'" />'),this.$handle=k('<div class="'+this.options.handleClass+'" />'),this.$range=k('<div class="'+this.options.rangeClass+(this.options.isRTL?" rangeslider-rtl ":"")+" "+this.options[this.orientation+"Class"]+'" id="'+this.identifier+'" />').insertAfter(this.$element).prepend(this.$fill,this.$handle),this.$element.css({position:"absolute",width:"1px",height:"1px",overflow:"hidden",opacity:"0"}),this.handleDown=k.proxy(this.handleDown,this),this.handleMove=k.proxy(this.handleMove,this),this.handleEnd=k.proxy(this.handleEnd,this),this.init();var a,h,l=this;this.$window.on("resize."+this.identifier,(a=function(){!function(s,r){var n=Array.prototype.slice.call(arguments,2);setTimeout(function(){return s.apply(null,n)},r)}(function(){l.update(!1,!1)},300)},h=(h=20)||100,function(){if(!a.debouncing){var e=Array.prototype.slice.apply(arguments);a.lastReturnVal=a.apply(window,e),a.debouncing=!0}return clearTimeout(a.debounceTimeout),a.debounceTimeout=setTimeout(function(){a.debouncing=!1},h),a.lastReturnVal})),this.$document.on(this.startEvent,"#"+this.identifier+":not(."+this.options.disabledClass+")",this.handleDown),this.$element.on("change."+this.identifier,function(w,s){if(!s||s.origin!==l.identifier){var r=w.target.value,u=l.getPositionFromValue(r);l.setPosition(u)}})}return v.prototype.init=function(){this.update(!0,!1),this.onInit&&"function"==typeof this.onInit&&this.onInit()},v.prototype.update=function(d,a){(d=d||!1)&&(this.min=j(this.$element[0].getAttribute("min"),0),this.max=j(this.$element[0].getAttribute("max"),100),this.value=j(this.$element[0].value,Math.round(this.min+(this.max-this.min)/2)),this.step=j(this.$element[0].getAttribute("step"),1)),this.handleDimension=f(this.$handle[0],"offset"+p(this.DIMENSION)),this.rangeDimension=f(this.$range[0],"offset"+p(this.DIMENSION)),this.maxHandlePos=this.rangeDimension-this.handleDimension,this.grabPos=this.handleDimension/2,this.position=this.getPositionFromValue(this.value),this.$element[0].disabled?this.$range.addClass(this.options.disabledClass):this.$range.removeClass(this.options.disabledClass),this.setPosition(this.position,a)},v.prototype.handleDown=function(o){if(o.preventDefault(),this.$document.on(this.moveEvent,this.handleMove),this.$document.on(this.endEvent,this.handleEnd),this.$range.addClass(this.options.activeClass),!(-1<(" "+o.target.className+" ").replace(/[\n\t]/g," ").indexOf(this.options.handleClass))){var d=this.getRelativePosition(o),a=this.$range[0].getBoundingClientRect()[this.DIRECTION],h=this.getPositionFromNode(this.$handle[0])-a,l="vertical"===this.orientation?this.maxHandlePos-(d-this.grabPos):d-this.grabPos;this.setPosition(l),h<=d&&d<h+this.handleDimension&&(this.grabPos=d-h)}},v.prototype.handleMove=function(h){h.preventDefault();var d=this.getRelativePosition(h),a="vertical"===this.orientation?this.maxHandlePos-(d-this.grabPos):d-this.grabPos;this.setPosition(a)},v.prototype.handleEnd=function(a){a.preventDefault(),this.$document.off(this.moveEvent,this.handleMove),this.$document.off(this.endEvent,this.handleEnd),this.$range.removeClass(this.options.activeClass),this.$element.trigger("change",{origin:this.identifier}),this.onSlideEnd&&"function"==typeof this.onSlideEnd&&this.onSlideEnd(this.position,this.value)},v.prototype.cap=function(h,d,a){return h<d?d:a<h?a:h},v.prototype.setPosition=function(l,d){var a,h;void 0===d&&(d=!0),a=this.getValueFromPosition(this.cap(l,0,this.maxHandlePos)),h=this.getPositionFromValue(a),this.$fill[0].style[this.DIMENSION]=h+this.grabPos+"px",this.$handle[0].style[this.DIRECTION_STYLE]=h+"px",this.setValue(a),this.position=h,this.value=a,d&&this.onSlide&&"function"==typeof this.onSlide&&this.onSlide(h,a)},v.prototype.getPositionFromNode=function(d){for(var a=0;null!==d;){a+=d.offsetLeft,d=d.offsetParent}return a},v.prototype.getRelativePosition=function(l){var d=p(this.COORDINATE),a=this.$range[0].getBoundingClientRect()[this.DIRECTION],h=0;return void 0!==l.originalEvent["client"+d]?h=l.originalEvent["client"+d]:l.originalEvent.touches&&l.originalEvent.touches[0]&&void 0!==l.originalEvent.touches[0]["client"+d]?h=l.originalEvent.touches[0]["client"+d]:l.currentPoint&&void 0!==l.currentPoint[this.COORDINATE]&&(h=l.currentPoint[this.COORDINATE]),this.options.isRTL?a-h:h-a},v.prototype.getPositionFromValue=function(d){var a;return a=(d-this.min)/(this.max-this.min),Number.isNaN(a)?0:a*this.maxHandlePos},v.prototype.getValueFromPosition=function(h){var d,a;return d=h/(this.maxHandlePos||1),a=this.step*Math.round(d*(this.max-this.min)/this.step)+this.min,Number(a.toFixed(this.toFixed))},v.prototype.setValue=function(a){a===this.value&&""!==this.$element[0].value||this.$element.val(a).trigger("input",{origin:this.identifier})},v.prototype.destroy=function(){this.$document.off("."+this.identifier),this.$window.off("."+this.identifier),this.$element.off("."+this.identifier).removeAttr("style").removeData("plugin_"+m),this.$range&&this.$range.length&&this.$range[0].parentNode.removeChild(this.$range[0])},k.fn[m]=function(a){var d=Array.prototype.slice.call(arguments,1);return this.each(function(){var h=k(this),e=h.data("plugin_"+m);e||h.data("plugin_"+m,e=new v(this,a)),"string"==typeof a&&e[a].apply(e,d)})},"rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"});(function(a){var c=a(".categories_carousel_in");c.owlCarousel({center:false,stagePadding:50,items:1,loop:false,margin:20,dots:false,nav:true,lazyLoad:true,navText:["<i class='arrow_left'></i>","<i class='arrow_right'></i>"],responsive:{0:{nav:false,dots:false,items:2},600:{nav:false,dots:false,items:2},1025:{nav:true,dots:false,items:3},1280:{nav:true,dots:false,items:4},1440:{nav:true,dots:false,items:5}}});a("#sidebar_fixed").theiaStickySidebar({minWidth:991,updateSidebarHeight:true,additionalMarginTop:25});a(".btn_map").on("click",function(){var d=a(".btn_map_txt");d.text()==d.data("text-swap")?d.text(d.data("text-original")):d.text(d.data("text-swap"));a("html, body").animate({scrollTop:a("body").offset().top},600)});a('input[type="range"]').rangeslider({polyfill:false,onInit:function(){this.output=a(".distance span").html(this.$element.val())},onSlide:function(d,e){this.output.html(e)}});var b=a(".filter_type h4 a");b.on("click",function(){a(this).toggleClass("opened")});b.on("click",function(){a(this).toggleClass("closed")});a("a.open_filters").on("click",function(){a(".filter_col").toggleClass("show");a(".layer").toggleClass("layer-is-visible")})})(window.jQuery);