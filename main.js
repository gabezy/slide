/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slides_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slides.js */ \"./js/slides.js\");\n\n\nconst slide = new _slides_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\".wrapper\", \".slide\").init();\n\n\n//# sourceURL=webpack://slides/./js/script.js?");

/***/ }),

/***/ "./js/slides.js":
/*!**********************!*\
  !*** ./js/slides.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slide)\n/* harmony export */ });\nclass Slide {\n  constructor(wrapper, slide) {\n    this.wrapper = document.querySelector(wrapper);\n    this.slide = document.querySelector(slide);\n    this.dist = {\n      finalPosition: 0,\n      startX: 0,\n      movement: 0,\n    };\n  }\n\n  bindEvents() {\n    this.onStart = this.onStart.bind(this);\n    this.onMove = this.onMove.bind(this);\n    this.onEnd = this.onEnd.bind(this);\n  }\n\n  onStart(e) {\n    let moveType;\n    if (e.type === \"mousedown\") {\n      e.preventDefault(); // prevent to drag the img\n      this.dist.startX = e.clientX; // get the start pointer position\n      moveType = \"mousemove\";\n    } else {\n      this.dist.startX = e.changedTouches[0].clientX;\n      moveType = \"touchmove\";\n    }\n    this.wrapper.addEventListener(moveType, this.onMove);\n  }\n  updatePosition(clientX) {\n    this.dist.movement = (this.dist.startX - clientX) * 1.4; // calculate the startX - the x pointer position during the mouse move\n    return this.dist.movement + this.dist.finalPosition;\n  }\n  moveSlide(distx) {\n    this.dist.movePosition = distx;\n    this.slide.style.transform = `translate3d(${-distx}px, 0px, 0px)`;\n  }\n\n  onMove(e) {\n    const pointerPosition =\n      e.type === \"mousemove\" ? e.clientX : e.changedTouches[0].clientX;\n    const position = this.updatePosition(pointerPosition);\n    this.moveSlide(position);\n  }\n\n  onEnd(e) {\n    const moveType = e.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\n    this.wrapper.removeEventListener(moveType, this.onMove);\n    this.dist.finalPosition = this.dist.movePosition;\n  }\n\n  addSlideEvent() {\n    this.wrapper.addEventListener(\"mousedown\", this.onStart);\n    this.wrapper.addEventListener(\"touchstart\", this.onStart);\n    this.wrapper.addEventListener(\"mouseup\", this.onEnd);\n    this.wrapper.addEventListener(\"touchend\", this.onEnd);\n  }\n\n  init() {\n    this.bindEvents();\n    this.addSlideEvent();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://slides/./js/slides.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;