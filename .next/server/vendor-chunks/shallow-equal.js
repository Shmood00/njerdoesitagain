"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/shallow-equal";
exports.ids = ["vendor-chunks/shallow-equal"];
exports.modules = {

/***/ "(ssr)/./node_modules/shallow-equal/dist/index.modern.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.modern.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shallowEqual: () => (/* binding */ shallowEqual),\n/* harmony export */   shallowEqualArrays: () => (/* binding */ shallowEqualArrays),\n/* harmony export */   shallowEqualObjects: () => (/* binding */ shallowEqualObjects)\n/* harmony export */ });\nfunction shallowEqualArrays(arrA, arrB) {\n  if (arrA === arrB) {\n    return true;\n  }\n  if (!arrA || !arrB) {\n    return false;\n  }\n  const len = arrA.length;\n  if (arrB.length !== len) {\n    return false;\n  }\n  for (let i = 0; i < len; i++) {\n    if (arrA[i] !== arrB[i]) {\n      return false;\n    }\n  }\n  return true;\n}\n\nfunction shallowEqualObjects(objA, objB) {\n  if (objA === objB) {\n    return true;\n  }\n  if (!objA || !objB) {\n    return false;\n  }\n  const aKeys = Object.keys(objA);\n  const bKeys = Object.keys(objB);\n  const len = aKeys.length;\n  if (bKeys.length !== len) {\n    return false;\n  }\n  for (let i = 0; i < len; i++) {\n    const key = aKeys[i];\n    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {\n      return false;\n    }\n  }\n  return true;\n}\n\nfunction shallowEqual(a, b) {\n  const aIsArr = Array.isArray(a);\n  const bIsArr = Array.isArray(b);\n  if (aIsArr !== bIsArr) {\n    return false;\n  }\n  if (aIsArr && bIsArr) {\n    return shallowEqualArrays(a, b);\n  }\n  return shallowEqualObjects(a, b);\n}\n\n\n//# sourceMappingURL=index.modern.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2hhbGxvdy1lcXVhbC9kaXN0L2luZGV4Lm1vZGVybi5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlFO0FBQ2pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3NoYWxsb3ctZXF1YWwvZGlzdC9pbmRleC5tb2Rlcm4ubWpzP2ZkZWQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2hhbGxvd0VxdWFsQXJyYXlzKGFyckEsIGFyckIpIHtcbiAgaWYgKGFyckEgPT09IGFyckIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoIWFyckEgfHwgIWFyckIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgbGVuID0gYXJyQS5sZW5ndGg7XG4gIGlmIChhcnJCLmxlbmd0aCAhPT0gbGVuKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoYXJyQVtpXSAhPT0gYXJyQltpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsT2JqZWN0cyhvYmpBLCBvYmpCKSB7XG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFvYmpBIHx8ICFvYmpCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGFLZXlzID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIGNvbnN0IGJLZXlzID0gT2JqZWN0LmtleXMob2JqQik7XG4gIGNvbnN0IGxlbiA9IGFLZXlzLmxlbmd0aDtcbiAgaWYgKGJLZXlzLmxlbmd0aCAhPT0gbGVuKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBhS2V5c1tpXTtcbiAgICBpZiAob2JqQVtrZXldICE9PSBvYmpCW2tleV0gfHwgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwoYSwgYikge1xuICBjb25zdCBhSXNBcnIgPSBBcnJheS5pc0FycmF5KGEpO1xuICBjb25zdCBiSXNBcnIgPSBBcnJheS5pc0FycmF5KGIpO1xuICBpZiAoYUlzQXJyICE9PSBiSXNBcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGFJc0FyciAmJiBiSXNBcnIpIHtcbiAgICByZXR1cm4gc2hhbGxvd0VxdWFsQXJyYXlzKGEsIGIpO1xuICB9XG4gIHJldHVybiBzaGFsbG93RXF1YWxPYmplY3RzKGEsIGIpO1xufVxuXG5leHBvcnQgeyBzaGFsbG93RXF1YWwsIHNoYWxsb3dFcXVhbEFycmF5cywgc2hhbGxvd0VxdWFsT2JqZWN0cyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubW9kZXJuLm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/shallow-equal/dist/index.modern.mjs\n");

/***/ })

};
;