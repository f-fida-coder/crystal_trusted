"use strict";(self.webpackChunkscnsoft_website=self.webpackChunkscnsoft_website||[]).push([[4856],{44856:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(4002),r=a.n(n),i=a(83642);function o(e){return String(e).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}var s=a(39405),l=a(5504),c=a(46914);function d(e){editmode||"en"!==language||((e=e.filter(((e,t)=>!r()(t).hasClass("no-header-anchor")))).hover((e=>{let t=r()(e.currentTarget);t.find(".header-anchor").length||function(e){let t=e.find('[name][name!=""]').attr("name"),a=e.text(),n=translations["Copy link to this section"]+": "+a;t||(t=o(a));e.append(`\n        <button type="button" class="header-anchor" data-anchor="${t}" data-title="${n}">\n            <span class="header-anchor-text" aria-label="${n}"></span>\n        </button>\n    `);let s=e.find(".header-anchor"),l=s.find(".header-anchor-text"),d=r()("body");i.default.initTooltipBoundaries(l,d),(0,c.Z)((()=>i.default.initTooltipBoundaries(l,d)));let u=null;s.on("click",h),s.hover((()=>{u&&clearTimeout(u),!s.hasClass("copied")&&l.text(s.data("title")),l.addClass("active")}),(()=>{l.removeClass("active"),u=setTimeout((()=>!l.hasClass("active")&&l.text("")),1e3)}))}(t),t.find(".header-anchor").addClass("active")}),(e=>{r()(e.currentTarget).find(".header-anchor").removeClass("active")})),function(e){let t=window.location.hash.substring(1);if(!t)return;if(!r()(`a[href="#${t}"]`))return;e.each(((e,a)=>{let n=r()(a),i=o(n.text());if(t===i)return(0,l.Z)(n),!1}))}(e))}function h(e){let t=r()(e.currentTarget),a=t.find(".header-anchor-text"),n=document.location.href.split("#")[0]+"#"+t.data("anchor"),i=translations["Copied!"];(0,s.Z)(n),t.addClass("copied"),a.text(i),setTimeout((()=>t.removeClass("copied")),1700),setTimeout((()=>a.text(t.data("title"))),2200)}}}]);