"use strict";(self.webpackChunkscnsoft_website=self.webpackChunkscnsoft_website||[]).push([[7260],{29427:(t,e,a)=>{var i=a(4002),r=a.n(i);r()(document).ready((()=>{var t=r()(".blog-list-page"),e=t.find(".category-title"),a=t.find(".category-description"),i=t.find(".category-filters-wrapper"),n=t.find(".articles-wrapper"),l=t.find(".more-btn-wrapper"),o=t.find(".mobile-category-filters-select");function c(t){var c=i.find('.category-filter[data-id="'+t+'"]');if(!c.hasClass("active")){i.find(".category-filter").removeClass("active"),c.addClass("active"),o.val(t);var s=d(c.data("url")),p=c.data("title"),f=c.data("description"),g=c.data("meta-title");n.addClass("loading"),"undefined"!=typeof _paq&&_paq.push(["trackEvent","Blog","Blog: click",'Blog: click: filter "'+r().trim(c.text())+'"']),r().ajax({url:s,type:"GET",data:{ajax:!0},crossDomain:!1,success:function(t){e.html(p),a.html(f),r()(document).prop("title",g),n.removeClass("loading"),n.html(t.listHtml),n.data("page",1),t.page*t.perPage>=t.total?l.hide():l.show(),function(t){if(editmode)return;history.replaceState({},null,t)}(s)}})}}function d(t){return"http:"===window.location.protocol&&(t=t.replace("https:","http:")),t}i.find(".category-filter").on("click",(function(t){t.preventDefault(),c(r()(t.currentTarget).data("id"))})),o.on("change",(function(t){c(r()(t.currentTarget).find("option:selected").data("filter-id"))})),l.find(".more-articles-btn").on("click",(function(t){t.preventDefault();var e=i.find(".category-filter.active"),a=d(e.data("url")),o=+n.data("page");l.addClass("loading"),"undefined"!=typeof _paq&&_paq.push(["trackEvent","Blog","Blog: click",'Blog: click: More button -> filter "'+r().trim(e.text())+'" Page '+(o+1)]),r().ajax({url:a,type:"GET",data:{ajax:!0,page:o+1},crossDomain:!1,success:function(t){l.removeClass("loading"),n.data("page",t.page),n.append(t.listHtml),t.page*t.perPage>=t.total&&l.hide()}})}))}))}},t=>{t.O(0,[3913],(()=>{return e=29427,t(t.s=e);var e}));t.O()}]);