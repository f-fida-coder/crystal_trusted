"use strict";(self.webpackChunkscnsoft_website=self.webpackChunkscnsoft_website||[]).push([[8799],{57701:(t,e,s)=>{var i=s(19135),r=s(31475),a=s(46914);function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}class l{constructor(t){n(this,"invisibleClasses",["opacity-0"]),n(this,"TEXT_CHANGE_TIME",1e4),this.wrapper=t,this.trackSource=this.wrapper.getAttribute("data-track-source"),this.answersWrap=this.wrapper.querySelector(".universal-snippet-answers"),this.answers=this.wrapper.querySelectorAll(".universal-snippet-answer"),this.activAnswer=this.answersWrap.querySelector('[data-slide="1"]'),this.slidesCount=this.answers.length,editmode||this.initSnippet(),(0,a.Z)((()=>this.checkHeightOfAnswers()))}async initSnippet(){let t=this.wrapper.dataset.allowedCountries.split(",").filter((t=>t)),e=(await i.Z.getData()).isoCode.toLowerCase();!t.length||t.includes(e)?(this.wrapper.classList.remove("opacity-0"),this.checkHeightOfAnswers(),setInterval(this.initAnimation.bind(this),this.TEXT_CHANGE_TIME),this.wrapper.addEventListener("click",(t=>{t.target.closest("a")||this.wrapper.querySelector(".js-track-click").click()}))):this.wrapper.remove()}checkHeightOfAnswers(){if(window.innerWidth>=1024&&this.wrapper.classList.contains("universal-snippet-short")){const t=getComputedStyle(this.answers[0].querySelector("p")).lineHeight.match(/\d+/)[0];this.answers.forEach((e=>{e.offsetHeight<=+t+3?e.setAttribute("style","top: 50%; transform: translateY(-50%);"):e.setAttribute("style","top: 0; transform: translateY(0);")}))}else this.answers.forEach((t=>{t.setAttribute("style","top: 0; transform: translateY(0);")}))}initAnimation(){this.activAnswer.classList.add(...this.invisibleClasses);const t=this.activAnswer.getAttribute("data-slide");t<this.slidesCount?(this.activAnswer=this.answersWrap.querySelector(`[data-slide='${+t+1}']`),this.activAnswer.classList.remove(...this.invisibleClasses)):(this.activAnswer=this.answersWrap.querySelector("[data-slide='1']"),this.activAnswer.classList.remove(...this.invisibleClasses))}}(0,r.Z)((()=>{document.querySelectorAll(".universal-snippet-wrapper").forEach((t=>new l(t)))}))}},t=>{t.O(0,[3913,3279,1475,6914,9135],(()=>{return e=57701,t(t.s=e);var e}));t.O()}]);