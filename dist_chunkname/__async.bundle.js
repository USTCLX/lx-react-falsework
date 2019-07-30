(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["__async"],{

/***/ "./src/async/index.js":
/*!****************************!*\
  !*** ./src/async/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "./src/common/index.js");


var add = function add() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (acc, cur) {
    return acc + cur;
  });
};

console.log('asnyc');
_common__WEBPACK_IMPORTED_MODULE_0__["default"].push(add);
/* harmony default export */ __webpack_exports__["default"] = (add);

/***/ })

}]);