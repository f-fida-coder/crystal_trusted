(self.webpackChunkscnsoft_website=self.webpackChunkscnsoft_website||[]).push([[3279],{62705:(t,e,r)=>{var n=r(55639).Symbol;t.exports=n},44239:(t,e,r)=>{var n=r(62705),o=r(89607),i=r(2333),u=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):i(t)}},27561:(t,e,r)=>{var n=r(67990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(o,""):t}},31957:(t,e,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=n},89607:(t,e,r)=>{var n=r(62705),o=Object.prototype,i=o.hasOwnProperty,u=o.toString,a=n?n.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),r=t[a];try{t[a]=void 0;var n=!0}catch(t){}var o=u.call(t);return n&&(e?t[a]=r:delete t[a]),o}},2333:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},55639:(t,e,r)=>{var n=r(31957),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},67990:t=>{var e=/\s/;t.exports=function(t){for(var r=t.length;r--&&e.test(t.charAt(r)););return r}},23279:(t,e,r)=>{var n=r(13218),o=r(7771),i=r(14841),u=Math.max,a=Math.min;t.exports=function(t,e,r){var c,f,s,v,l,p,b=0,x=!1,d=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var r=c,n=f;return c=f=void 0,b=e,v=t.apply(n,r)}function j(t){return b=t,l=setTimeout(h,e),x?g(t):v}function m(t){var r=t-p;return void 0===p||r>=e||r<0||d&&t-b>=s}function h(){var t=o();if(m(t))return O(t);l=setTimeout(h,function(t){var r=e-(t-p);return d?a(r,s-(t-b)):r}(t))}function O(t){return l=void 0,y&&c?g(t):(c=f=void 0,v)}function T(){var t=o(),r=m(t);if(c=arguments,f=this,p=t,r){if(void 0===l)return j(p);if(d)return clearTimeout(l),l=setTimeout(h,e),g(p)}return void 0===l&&(l=setTimeout(h,e)),v}return e=i(e)||0,n(r)&&(x=!!r.leading,s=(d="maxWait"in r)?u(i(r.maxWait)||0,e):s,y="trailing"in r?!!r.trailing:y),T.cancel=function(){void 0!==l&&clearTimeout(l),b=0,c=p=f=l=void 0},T.flush=function(){return void 0===l?v:O(o())},T}},13218:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},37005:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},33448:(t,e,r)=>{var n=r(44239),o=r(37005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},7771:(t,e,r)=>{var n=r(55639);t.exports=function(){return n.Date.now()}},14841:(t,e,r)=>{var n=r(27561),o=r(13218),i=r(33448),u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var r=a.test(t);return r||c.test(t)?f(t.slice(2),r?2:8):u.test(t)?NaN:+t}}}]);