"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("header-phone"),t=document.getElementById("footer-phone");void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&e&&e.addEventListener("click",function(e){e.preventDefault()}),void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&t&&t.addEventListener("click",function(e){e.preventDefault()});var n,o=document.querySelector("html");/^(\/en|\/ru)/.test(window.location.pathname)&&(n=window.location.pathname.match(/(^\/en|\/ru)/)[0].replace(/\//g,""),o.setAttribute("lang",n||"ro"));var a=document.getElementById("locale-toggle"),r=document.querySelectorAll(".locale-dropdown-menu .locale-lang");a.addEventListener("click",function(){s.classList.contains("show")||s.classList.add("show");var e=window.location.pathname.replace(/^(\/ru|\/en)/,""),t=window.location.search;_toConsumableArray(r).forEach(function(o){var a=o.getAttribute("data-lang");o.setAttribute("href","ro"===a?e?"".concat(e).concat(t):"/":"/".concat(a).concat(e).concat(t)),n&&(n===a?o.classList.add("active"):o.classList.remove("active"))})});var s=document.getElementById("locale-menu");document.body.addEventListener("click",function(){s.classList.contains("show")&&s.classList.remove("show")},!0);var c=document.getElementById("header-dropdown"),i=document.getElementById("header-static-nav");c.addEventListener("click",function(){i.classList.contains("dropdown-show")?(i.classList.remove("dropdown-show"),c.classList.add("header-dropdown-hamb"),c.classList.remove("header-dropdown-close")):(i.classList.add("dropdown-show"),c.classList.remove("header-dropdown-hamb"),c.classList.add("header-dropdown-close"))}),_toConsumableArray(document.querySelectorAll(".header-entity-nav_tab-WP")).forEach(function(e){var t=e.querySelector(".header-entity-nav_tab-content");e.addEventListener("mouseover",function(){t.classList.contains("show-submenu")&&e.classList.contains("hovered-tab")||(t.classList.add("show-submenu"),e.classList.add("hovered-tab"))}),e.addEventListener("mouseout",function(){(t.classList.contains("show-submenu")||e.classList.contains("hovered-tab"))&&(t.classList.remove("show-submenu"),e.classList.remove("hovered-tab"))})})});
//# sourceMappingURL=index.js.map