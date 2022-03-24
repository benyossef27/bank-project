/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n'use strict'; ///////////////////////////////////////\n// Modal window\n\n\nconst modal = document.querySelector('.modal');\nconst overlay = document.querySelector('.overlay');\nconst btnCloseModal = document.querySelector('.btn--close-modal');\nconst btnsOpenModal = document.querySelectorAll('.btn--show-modal');\nconst header = document.querySelector('.header');\nconst logo = document.querySelector('.nav__logo');\nconst btnScrollTo = document.querySelector('.btn--scroll-to');\nconst section1 = document.querySelector('#section--1');\nconst tabs = document.querySelectorAll('.operations__tab');\nconst tabsContainer = document.querySelector('.operations__tab-container');\nconst tabsContent = document.querySelectorAll('.operations__content');\nconst nav = document.querySelector('.nav'); //popup\n\nconst openModal = function (evt) {\n  evt.preventDefault();\n  modal.classList.remove('hidden');\n  overlay.classList.remove('hidden');\n};\n\nconst closeModal = function () {\n  modal.classList.add('hidden');\n  overlay.classList.add('hidden');\n};\n\nbtnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));\nbtnCloseModal.addEventListener('click', closeModal);\noverlay.addEventListener('click', closeModal);\ndocument.addEventListener('keydown', function (e) {\n  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {\n    closeModal();\n  }\n}); // cookies message\n\nconst message = document.createElement('div');\nmessage.classList.add('cookie-message');\nmessage.innerHTML = 'We use cookies for improved functionality and analytics. <button class=\"btn btn--close-cookie\">Got it!</button>';\nheader.append(message);\ndocument.querySelector('.btn--close-cookie').addEventListener('click', function () {\n  message.remove();\n});\nmessage.style.backgroundColor = '#37383d';\nmessage.style.width = '100%';\nmessage.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px'; // orange buttons\n\ndocument.documentElement.style.setProperty('--color-primary', 'orange'); // learn more button\n\nbtnScrollTo.addEventListener('click', () => {\n  const s1coords = section1.getBoundingClientRect();\n  section1.scrollIntoView({\n    behavior: 'smooth'\n  });\n}); /// nav linking\n\ndocument.querySelectorAll('.nav__link').forEach(function (el) {\n  el.addEventListener('click', function (e) {\n    e.preventDefault();\n    const id = this.getAttribute('href');\n    document.querySelector(id).scrollIntoView({\n      behavior: 'smooth'\n    });\n  });\n}); /// operations content toggeling\n\ntabsContainer.addEventListener('click', function (e) {\n  const clicked = e.target.closest('.operations__tab');\n  if (!clicked) return;\n  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));\n  tabsContent.forEach(tabC => tabC.classList.remove('operations__content--active'));\n  clicked.classList.add('operations__tab--active');\n  document.querySelector(\".operations__content--\".concat(clicked.dataset.tab)).classList.add('operations__content--active');\n}); ///nav hovar\n\nfunction handleHover(e) {\n  if (e.target.classList.contains('nav__link')) {\n    const link = e.target;\n    const siblings = link.closest('.nav').querySelectorAll('.nav__link');\n    const logo = link.closest('.nav').querySelector('img');\n    siblings.forEach(el => {\n      if (el !== link) el.style.opacity = this;\n    });\n    logo.style.opacity = this;\n  }\n}\n\nnav.addEventListener('mouseover', handleHover.bind(0.5));\nnav.addEventListener('mouseout', handleHover.bind(1)); // stiky nav\n\nfunction stickyNav(entries) {\n  const [entry] = entries;\n  if (!entry.isIntersecting) nav.classList.add('sticky');else nav.classList.remove('sticky');\n}\n\nconst obsOptions = {\n  root: null,\n  threshold: [0, 0.2],\n  rootMargin: '-90px'\n};\nconst headerObserver = new IntersectionObserver(stickyNav, obsOptions);\nheaderObserver.observe(header);\n\nfunction stickyMessage(entries) {\n  const [entry] = entries;\n  message.classList.add('sticky');\n}\n\nconst obsOptionsM = {\n  root: null\n}; //reveal section\n\nconst allSections = document.querySelectorAll('.section');\nconst messageObserverM = new IntersectionObserver(stickyMessage, obsOptionsM);\nmessageObserverM.observe(message);\n\nfunction revealSection(entries, observer) {\n  const [entry] = entries;\n  if (!entry.isIntersecting) return;\n  entry.target.classList.remove('section--hidden');\n  observer.unobserve(entry.target);\n}\n\nconst sectionObserver = new IntersectionObserver(revealSection, {\n  root: null,\n  threshold: 0.15\n});\nallSections.forEach(section => {\n  sectionObserver.observe(section);\n  section.classList.add('section--hidden');\n}); // lazy loading imgs\n\nconst imgTargets = document.querySelectorAll('img[data-src]');\n\nfunction loadImg(entries, observer) {\n  const [entry] = entries;\n  if (!entry.isIntersecting) return;\n  entry.target.src = entry.target.dataset.src;\n  entry.target.addEventListener('load', () => {\n    entry.target.classList.remove('lazy-img');\n  });\n}\n\nconst imgObserver = new IntersectionObserver(loadImg, {\n  root: null,\n  threshold: 0.15,\n  rootMargin: '100px'\n});\nimgTargets.forEach(img => imgObserver.observe(img)); ///slidss\n\nfunction slider() {\n  const slides = document.querySelectorAll('.slide');\n  const slider = document.querySelector('.slider');\n  const sliderBtnLeft = document.querySelector('.slider__btn--left');\n  const sliderbtnRight = document.querySelector('.slider__btn--right');\n  let curSlide = 0;\n  goToSlide(0);\n  const maxSlide = slides.length;\n  sliderbtnRight.addEventListener('click', () => {\n    if (curSlide === maxSlide - 1) {\n      curSlide = 0;\n    } else {\n      curSlide++;\n    }\n\n    goToSlide(curSlide);\n    activateDot(curSlide);\n  });\n  sliderBtnLeft.addEventListener('click', () => {\n    if (curSlide === 0) {\n      curSlide = maxSlide - 1;\n    } else {\n      curSlide--;\n    }\n\n    goToSlide(curSlide);\n    activateDot(curSlide);\n  });\n\n  function goToSlide(slide) {\n    slides.forEach((s, i) => s.style.transform = \"translateX(\".concat(100 * (i - slide), \"%)\"));\n  }\n\n  const dotContainer = document.querySelector('.dots');\n\n  function createDots() {\n    slides.forEach(function (_, i) {\n      dotContainer.insertAdjacentHTML('beforeend', \"<button class=\\\"dots__dot\\\" data-slide=\\\"\".concat(i, \"\\\"></button>\"));\n    });\n  }\n\n  createDots();\n\n  function activateDot(slide) {\n    document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));\n    document.querySelector(\".dots__dot[data-slide =\\\"\".concat(slide, \"\\\"]\")).classList.add('dots__dot--active');\n  }\n\n  activateDot(0);\n  dotContainer.addEventListener('click', function (e) {\n    if (e.target.classList.contains('dots__dot')) {\n      const {\n        slide\n      } = e.target.dataset;\n      goToSlide(slide);\n      activateDot(slide);\n    }\n  });\n}\n\nslider();\ndocument.addEventListener('DOMContentLoaded', function (e) {});\n\n//# sourceURL=webpack://bank-project/./src/script.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bank-project/./src/style.css?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;