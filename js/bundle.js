/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/scripts/open-item-inners-props.js":
/*!**************************************************!*\
  !*** ./source/scripts/open-item-inners-props.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ openItemInnersProps; }
/* harmony export */ });
function openItemInnersProps() {
  const showItemButton = document.querySelectorAll('.item-list__open-button');
  const showElements = document.querySelectorAll('.item-list__content');
  let tabName;

  function selectTabNav() {
    tabName = this.getAttribute('data-inner-name');
    this.querySelector('.item-list__open-icon').classList.toggle('item-list__open-icon--open');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    showElements.forEach(item => {
      if (item.classList.contains(tabName)) {
        item.classList.toggle('item-list__content--open');
      }
    });
  }

  showItemButton.forEach(btn => {
    btn.addEventListener('click', selectTabNav);
  });
}

/***/ }),

/***/ "./source/scripts/show-menu-items.js":
/*!*******************************************!*\
  !*** ./source/scripts/show-menu-items.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ showMenuItems; }
/* harmony export */ });
function showMenuItems() {
  const showItemButton = document.querySelectorAll('.menu__button');
  const showElements = document.querySelectorAll('.menu__item-content');
  let tabName;

  function selectTabNav() {
    tabName = this.getAttribute('data-tab-name');
    this.querySelector('.menu__button-icon').classList.toggle('menu__button-icon--open');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    showElements.forEach(item => {
      if (item.classList.contains(tabName)) {
        item.classList.toggle('menu__item-content--open');
      }
    });
  }

  showItemButton.forEach(btn => {
    btn.addEventListener('click', selectTabNav);
  });
}
;

/***/ }),

/***/ "./source/scripts/show-mobile-menu.js":
/*!********************************************!*\
  !*** ./source/scripts/show-mobile-menu.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ showMobileMenu; }
/* harmony export */ });
function showMobileMenu() {
  const navBtn = document.querySelector('.nav__btn');
  const navBtnBurger = document.querySelector('.nav__btn-burger');
  const menu = document.querySelector('.menu');
  let navOpen = false;
  navBtn.addEventListener('click', () => {
    if (!navOpen) {
      openNavigation();
    } else {
      closeNavigation();
    }
  });

  function openNavigation() {
    navBtn.classList.add('nav__btn--open');
    navBtnBurger.classList.add('nav__btn-burger--open');
    menu.classList.add('menu--open');
    navOpen = true;
  }

  ;

  function closeNavigation() {
    navBtn.classList.remove('nav__btn--open');
    navBtnBurger.classList.remove('nav__btn-burger--open');
    menu.classList.remove('menu--open');
    navOpen = false;
  }

  ;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************!*\
  !*** ./source/scripts/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-menu-items */ "./source/scripts/show-menu-items.js");
/* harmony import */ var _show_mobile_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-mobile-menu */ "./source/scripts/show-mobile-menu.js");
/* harmony import */ var _open_item_inners_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./open-item-inners-props */ "./source/scripts/open-item-inners-props.js");



window.addEventListener('DOMContentLoaded', () => {
  (0,_show_menu_items__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_show_mobile_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_open_item_inners_props__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map