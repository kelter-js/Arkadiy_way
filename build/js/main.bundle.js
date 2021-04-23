/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHOW_MODAL_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODALS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_buy_js__ = __webpack_require__(1);


const CLOSE_BUTTONS = [...document.querySelectorAll('.modal__close-modal')];
const SHOW_MODAL_CLASS = 'show-modal';
const MODALS = [...document.querySelectorAll('.modal')];

CLOSE_BUTTONS.map(button => button.addEventListener('click', function () {
  this.parentElement.classList.remove(SHOW_MODAL_CLASS);
}))

const onKeyCloaseModal = (evt) => {
  if(evt.code == 'Escape') {
    const modal = document.querySelector('.show-modal');
    if (!modal) return;
    modal.classList.remove('show-modal');
  }
}

document.addEventListener('keydown', onKeyCloaseModal)

const onClickOutOfModal = (evt) => {
  const target = evt.target;
  const currentElemModal = MODALS.includes(target) || MODALS.map((modal) => modal.contains(target)).includes(true);
  const isntModalButton = __WEBPACK_IMPORTED_MODULE_0__modal_buy_js__["a" /* BUY_BUTTONS */].includes(target);
  if (currentElemModal || isntModalButton) return;
  const modalIsActive = MODALS.map((modal) => modal.classList.contains(SHOW_MODAL_CLASS)).includes(true);
  if(!currentElemModal && modalIsActive && !isntModalButton) {
    MODALS.map((modal) => modal.classList.remove(SHOW_MODAL_CLASS));
  };
}

document.addEventListener('click', onClickOutOfModal);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BUY_BUTTONS; });
/* unused harmony export MODAL_ELEMENT_BUY */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__close_modal_js__ = __webpack_require__(0);


const MODAL_ELEMENT_BUY = document.querySelector('.modal-buy');
const BUY_BUTTONS = [...document.querySelectorAll('.button-buy')];

BUY_BUTTONS.map((button) => button.addEventListener('click', () => {
  __WEBPACK_IMPORTED_MODULE_0__close_modal_js__["a" /* MODALS */].map((modal) => modal.classList.remove(__WEBPACK_IMPORTED_MODULE_0__close_modal_js__["b" /* SHOW_MODAL_CLASS */]));
  MODAL_ELEMENT_BUY.classList.add(__WEBPACK_IMPORTED_MODULE_0__close_modal_js__["b" /* SHOW_MODAL_CLASS */]);
}))




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debouncer; });
const debouncer = (func, delay) => {
  let condition = false;
  let timer;
  return (arg) => {
    if (condition) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        condition = false;
      }, delay);
      return;
    }
    func(arg);
    condition = true;
    timer = setTimeout(() => condition = false, delay);
  }
}




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_buy_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__close_modal_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__navigation_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__send_form_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tour_tabs_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tour_tabs_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__tour_tabs_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__move_tabs_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__debouncer_js__ = __webpack_require__(2);









/***/ }),
/* 4 */
/***/ (function(module, exports) {

const NAVIGATION_ELEMENT = document.querySelector('.main-nav');
const TOGGLE_NAVIGATION_BUTTON = document.querySelector('.main-nav__toggle');

NAVIGATION_ELEMENT.classList.remove('main-nav--nojs');

const onClickToggleNavigation = () => {
  if (NAVIGATION_ELEMENT.classList.contains('main-nav--closed')) {
    NAVIGATION_ELEMENT.classList.remove('main-nav--closed');
    NAVIGATION_ELEMENT.classList.add('main-nav--opened');
    } else {
      NAVIGATION_ELEMENT.classList.add('main-nav--closed');
      NAVIGATION_ELEMENT.classList.remove('main-nav--opened');
  }
}

TOGGLE_NAVIGATION_BUTTON.addEventListener('click', onClickToggleNavigation);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__close_modal_js__ = __webpack_require__(0);


const CONTACT_FORM_ELEMENT = document.querySelector('.consulting__form');
const BUY_FORM_ELEMENT = document.querySelector('.modal-buy__form');
const SUBMIT_MODAL_ELEMENT = document.querySelector('.modal-success');

const onSubmit = (evt) => {
  evt.preventDefault();
  SUBMIT_MODAL_ELEMENT.classList.add(__WEBPACK_IMPORTED_MODULE_0__close_modal_js__["b" /* SHOW_MODAL_CLASS */]);
}

CONTACT_FORM_ELEMENT.addEventListener('submit', onSubmit);
BUY_FORM_ELEMENT.addEventListener('submit', onSubmit);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

const TOUR_LINK_ELEMENTS = [
  document.querySelector('.visit-places__tours-item--greece'),
  document.querySelector('.visit-places__tours-item--albania'),
  document.querySelector('.visit-places__tours-item--macedonia'),
  document.querySelector('.visit-places__tours-item--montenegro'),
  document.querySelector('.visit-places__tours-item--croatia')
];

const CARDS_PARENT_SECTION = document.querySelector('.tour-countries');

const COUNTRY_TABS = [
  CARDS_PARENT_SECTION.querySelector('.tour-countries__country-card--greece'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__country-card--albania'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__country-card--macedonia'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__country-card--montenegro'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__country-card--croatia')
];
const NAVIGATION_TAB_ELEMENTS = [
  CARDS_PARENT_SECTION.querySelector('.tour-countries__item--greece'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__item--albania'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__item--macedonia'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__item--montenegro'),
  CARDS_PARENT_SECTION.querySelector('.tour-countries__item--croatia')
];

const ENABLE_CARD_CLASS = "tour-countries__country-card--enabled";
const ENABLE_NAVIGATION_ITEM_CLASS = 'tour-countries__item--selected';

const enableElement = (index, className, elements) => {
  CARDS_PARENT_SECTION.querySelector(`.${className}`).classList.remove(className);
  elements[index].classList.add(className);
}

document.addEventListener('click', (evt) => {
  const target = evt.target;
  if (!TOUR_LINK_ELEMENTS.map((link) => link.contains(target)).includes(true)) return;
  const index = TOUR_LINK_ELEMENTS.map((link) => link.contains(target)).indexOf(true);
  enableElement(index, ENABLE_CARD_CLASS, COUNTRY_TABS);
  enableElement(index, ENABLE_NAVIGATION_ITEM_CLASS, NAVIGATION_TAB_ELEMENTS);
})

NAVIGATION_TAB_ELEMENTS.map((element) => element.addEventListener('click', function () {
  const index = NAVIGATION_TAB_ELEMENTS.indexOf(this);
  enableElement(index, ENABLE_CARD_CLASS, COUNTRY_TABS);
  enableElement(index, ENABLE_NAVIGATION_ITEM_CLASS, NAVIGATION_TAB_ELEMENTS);
}))


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__debouncer_js__ = __webpack_require__(2);


const TAB_NAVIGATION_ELEMENT = document.querySelector('.tour-countries__choose-list');
let startCoordinateX;

const UNIT = 'px';
const MOVE_DELAY = 500;

const NAVIGATION_WRAPPER = document.querySelector('.tour-countries__list-wrapper');
const MOBILE_WIDTH_CONTAINER = 265;

const MOBILE_MARGIN_SWAPS = [
  '0px',
  '-172px',
  '-361px',
  '-578px',
  '-632px'
];

TAB_NAVIGATION_ELEMENT.style.marginLeft = 0 + UNIT;

const onTouchStart = (evt) => {
  startCoordinateX = evt.touches[0].clientX;
}

const onTouchMove = (evt) => {
  if (!startCoordinateX) return;
  const currentCoordinates = evt.touches[0].clientX;
  const difference = currentCoordinates - startCoordinateX;

  if (difference < 0) {
    if(NAVIGATION_WRAPPER.offsetWidth === MOBILE_WIDTH_CONTAINER) {
      if(!(MOBILE_MARGIN_SWAPS.indexOf(TAB_NAVIGATION_ELEMENT.style.marginLeft) + 1 > 4)) {
        TAB_NAVIGATION_ELEMENT.style.marginLeft = MOBILE_MARGIN_SWAPS[MOBILE_MARGIN_SWAPS.indexOf(TAB_NAVIGATION_ELEMENT.style.marginLeft) + 1]
        return;
      }
      return;
    }
    TAB_NAVIGATION_ELEMENT.style.marginLeft = MOBILE_MARGIN_SWAPS[1];
  } else {
    if (getComputedStyle(TAB_NAVIGATION_ELEMENT).marginLeft === '0px') return;
    if(NAVIGATION_WRAPPER.offsetWidth === MOBILE_WIDTH_CONTAINER) {
      if(!(MOBILE_MARGIN_SWAPS.indexOf(TAB_NAVIGATION_ELEMENT.style.marginLeft) - 1 < 0)) {
        TAB_NAVIGATION_ELEMENT.style.marginLeft = MOBILE_MARGIN_SWAPS[MOBILE_MARGIN_SWAPS.indexOf(TAB_NAVIGATION_ELEMENT.style.marginLeft) - 1]
        return;
      }
      return;
    }
    TAB_NAVIGATION_ELEMENT.style.marginLeft = 0 + UNIT;
  }
  startCoordinateX = null;
}

const debouncedTouchMoveHandler = Object(__WEBPACK_IMPORTED_MODULE_0__debouncer_js__["a" /* debouncer */])(onTouchMove, MOVE_DELAY);

TAB_NAVIGATION_ELEMENT.addEventListener('touchstart', onTouchStart);

TAB_NAVIGATION_ELEMENT.addEventListener('touchmove', debouncedTouchMoveHandler)




/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map