(()=>{var e={755:()=>{$(".owl-services").owlCarousel({loop:!0,margin:10,responsiveClass:!0,navText:["<img src='img/arrow-slider.svg'>","<img src='img/arrow-slider-next.svg'>"],responsive:{0:{items:1,nav:!0},600:{items:2,nav:!1},1e3:{items:3,nav:!0,loop:!0}}}),$(".owl-specialists").owlCarousel({loop:!0,margin:10,responsiveClass:!0,navText:["<img src='img/arrow-slider.svg'>","<img src='img/arrow-slider-next.svg'>"],responsive:{0:{items:1,nav:!0},600:{items:2,nav:!1},1e3:{items:4,nav:!0,dots:!1,loop:!0}}});var e=document.querySelector("#phone");window.intlTelInput(e,{initialCountry:"ru",utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"}),document.querySelector("#phone").addEventListener("input",(function(e){this.value=this.value.replace(/[^\d.]/g,"")}));var t=document.querySelector("#phone1");window.intlTelInput(t,{initialCountry:"ru",utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"}),document.querySelector("#phone1").addEventListener("input",(function(e){this.value=this.value.replace(/[^\d.]/g,"")})),$(".owl-result").owlCarousel({loop:!0,margin:40,responsiveClass:!0,navText:["<img src='img/arrow-slider.svg'>","<img src='img/arrow-slider-next.svg'>"],responsive:{0:{items:1,nav:!0},600:{items:2,nav:!1},1e3:{items:3,nav:!0,loop:!0}}}),$(".owl-reviews").owlCarousel({loop:!0,margin:40,responsiveClass:!0,navText:["<img src='img/arrow-slider.svg'>","<img src='img/arrow-slider-next.svg'>"],responsive:{0:{items:1,nav:!0},600:{items:2,nav:!1},1e3:{items:2,nav:!0,loop:!0}}})},598:()=>{function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function d(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function r(e){t=!1}function a(){document.addEventListener("mousemove",u),document.addEventListener("mousedown",u),document.addEventListener("mouseup",u),document.addEventListener("pointermove",u),document.addEventListener("pointerdown",u),document.addEventListener("pointerup",u),document.addEventListener("touchmove",u),document.addEventListener("touchstart",u),document.addEventListener("touchend",u)}function u(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",u),document.removeEventListener("mousedown",u),document.removeEventListener("mouseup",u),document.removeEventListener("pointermove",u),document.removeEventListener("pointerdown",u),document.removeEventListener("pointerup",u),document.removeEventListener("touchmove",u),document.removeEventListener("touchstart",u),document.removeEventListener("touchend",u))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(s(e.activeElement)&&d(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",r,!0),document.addEventListener("pointerdown",r,!0),document.addEventListener("touchstart",r,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),a())}),!0),a(),e.addEventListener("focus",(function(e){var n,o,r;s(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(r=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===r&&!n.readOnly||n.isContentEditable))&&d(e.target)}),!0),e.addEventListener("blur",(function(e){var t;s(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}(()=>{"use strict";n(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};var t;console.log((t=navigator.userAgent||navigator.vendor||window.opera,/android/i.test(t)?(e.htmlEl.classList.add("page--android"),"Android"):/iPad|iPhone|iPod/.test(t)&&!window.MSStream?(e.htmlEl.classList.add("page--ios"),"iOS"):"unknown")),n(755)})()})();