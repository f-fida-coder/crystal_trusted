"use strict";(self.webpackChunkscnsoft_website=self.webpackChunkscnsoft_website||[]).push([[1804],{16782:(t,e,i)=>{var s=i(4002),o=i.n(s),r=i(46914),h=i(22618);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class l{constructor(t){n(this,"animationScrollingSpeed",600),n(this,"speedLettersTyping",170),n(this,"speedFirstLetterTyping",800),n(this,"timeBeforeFillingWord",1e3),n(this,"timeRemoveFilling",2e3),n(this,"timeBeforeShowNextScreen",500),n(this,"forceScrollAnimationTime",35),n(this,"topScrollThreshold",125),this.$wrapper=t,this.$actionWordBox=this.$wrapper.find(".sb-animated-word"),this.$actionWordBoxWrap=this.$wrapper.find(".sb-animated-inner"),this.$slides=this.$wrapper.find(".sb-slide"),this.$page=o()("html, body"),this.$header=o()("header.header"),this.longestWord=" ",this.currentWord=null,this.maxWordWidth=0,this.currentLetterIndex=0,this.activeSlide=0,this.isScrolling=!1,this.isScrollLogicBlocked=!1,this.initPosition(),this.initSliderParams(),this.setInputWidth(),this.initSlider(),(0,r.Z)((()=>{this.initPosition(),this.setInputWidth()}));const e=this.initAnimation.bind(this);(0,h.Z)(this.$wrapper[0],200,(t=>{t?document.addEventListener("scroll",e,{passive:!0}):document.removeEventListener("scroll",e)}))}initPosition(){this.screenHeight=o()(window).height();let t=o()(window).scrollTop();t<this.screenHeight&&0!==t&&this.$page.scrollTop(0),t>=this.screenHeight&&this.$header.removeClass("sb-header-transparent"),this.lastScrollPos=t}initAnimation(){let t=o()(window).scrollTop(),e=t<=this.lastScrollPos;if(this.lastScrollPos=t,(t<this.topScrollThreshold||t>this.screenHeight)&&(this.isScrollLogicBlocked=!1),t<this.screenHeight?this.$header.addClass("sb-header-transparent"):this.$header.removeClass("sb-header-transparent"),this.isScrolling||t>this.screenHeight||this.isScrollLogicBlocked)return;this.isScrolling=!0;let i=()=>{this.isScrollLogicBlocked=!0,this.$page.stop().clearQueue(),this.isScrolling=!1,this.$page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",i)};setTimeout((()=>{this.$page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",i)}),this.forceScrollAnimationTime),e&&t<this.topScrollThreshold||this.$page.stop().animate({scrollTop:e?0:this.screenHeight+1},this.animationScrollingSpeed,(()=>{this.isScrolling=!1,this.$page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",i)}))}initSliderParams(){this.currentWord=this.$slides[this.activeSlide].getAttribute("data-text"),this.$wrapper.find(".sb-active").removeClass("sb-active"),this.$slides.eq(this.activeSlide).addClass("sb-active"),this.$slides.each(((t,e)=>{o()(e).attr("data-text").length>this.longestWord.length&&(this.longestWord=o()(e).attr("data-text"))}))}setInputWidth(){const t=this.$actionWordBox.text();this.$actionWordBoxWrap.css("width",""),this.$actionWordBox.text(this.longestWord),this.maxWordWidth=this.$actionWordBoxWrap.outerWidth(),this.$actionWordBoxWrap.css("width",this.maxWordWidth+"px"),this.$actionWordBox.text(t)}initSlider(){this.$wrapper.find(".not-load").removeClass("not-load");const t=this.activeSlide+1>this.$slides.length-1?0:this.activeSlide+1;if(this.currentLetterIndex<=this.currentWord.length-1){const t=this.currentWord.charAt(this.currentLetterIndex);this.$actionWordBox.addClass("printed"),setTimeout((()=>{this.$actionWordBox.append(t),this.currentLetterIndex+=1,this.initSlider()}),0===this.currentLetterIndex?this.speedFirstLetterTyping:this.speedLettersTyping)}else this.$slides.eq(t).find(".sb-slide-image").hasClass("d-none")&&this.$slides.eq(t).find(".sb-slide-image").removeClass("d-none"),this.$actionWordBox.removeClass("printed"),setTimeout((()=>{this.$actionWordBox.addClass("filled")}),this.timeBeforeFillingWord),setTimeout((()=>{this.$actionWordBox.removeClass("filled"),this.activeSlide+1>this.$slides.length-1?this.activeSlide=0:this.activeSlide+=1,this.currentLetterIndex=0,this.$actionWordBox.text(""),setTimeout((()=>{this.initSliderParams(),this.initSlider()}),this.timeBeforeShowNextScreen)}),this.timeRemoveFilling)}}o()(document).ready((()=>{editmode||o()(".sb-wrapper").each(((t,e)=>{let i=o()(e);0===t?new l(i):i.addClass("d-none")}))}))}},t=>{t.O(0,[3913,3279,2618,6914],(()=>{return e=16782,t(t.s=e);var e}));t.O()}]);