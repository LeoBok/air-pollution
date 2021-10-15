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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/patternpad.svg */ \"./src/images/patternpad.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/position.svg */ \"./src/images/position.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center center fixed;\\r\\n    -webkit-background-size: cover;\\r\\n    -moz-background-size: cover;\\r\\n    -o-background-size: cover;\\r\\n    background-size: cover;\\r\\n}\\r\\n\\r\\n.container {\\r\\n    max-width: 60%;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    font-weight: 300;\\r\\n    font-style: italic;\\r\\n}\\r\\n\\r\\np {\\r\\n    font-weight: 300;\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.paragraph-info span {\\r\\n    font-weight: 400;\\r\\n    margin: 0 5px;\\r\\n}\\r\\n\\r\\n.input-group-text {\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat center;\\r\\n    padding: 20px;\\r\\n}\\r\\n\\r\\n.paragraph-info-show {\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.paragraph-info-hide {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.err-paragraph-show {\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.err-paragraph-hide {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.form-control {\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.button {\\r\\n    font-weight: 400;\\r\\n}\\r\\n\\r\\n.aqi-color-good {\\r\\n    background-color: #198754;\\r\\n    color: #f0f8ff;\\r\\n    padding: 5px 10px;\\r\\n    border-radius: 6px;\\r\\n    box-shadow: 0px 2px 3px 2px #3D3D3D;\\r\\n}\\r\\n\\r\\n.aqi-color-moderate {\\r\\n    background-color: #f1dc1f;\\r\\n    color: #272727;\\r\\n    padding: 5px 10px;\\r\\n    border-radius: 6px;\\r\\n    box-shadow: 0px 2px 3px 2px #3D3D3D;\\r\\n}\\r\\n\\r\\n.aqi-color-unhealthy-for-sensitive-groups {\\r\\n    background-color: #f58b34;\\r\\n    color: #f0f8ff;\\r\\n    padding: 5px 10px;\\r\\n    border-radius: 6px;\\r\\n    box-shadow: 0px 2px 3px 2px #3D3D3D;\\r\\n}\\r\\n\\r\\n.aqi-color-unhealthy {\\r\\n    background-color: #c21b45;\\r\\n    color: #272727;\\r\\n    padding: 5px 10px;\\r\\n    border-radius: 6px;\\r\\n    box-shadow: 0px 2px 3px 2px #3D3D3D;\\r\\n}\\r\\n\\r\\n.aqi-color-very-unhealthy {\\r\\n    background-color: #7b26db;\\r\\n    color: #f0f8ff;\\r\\n    padding: 5px 10px;\\r\\n    border-radius: 6px;\\r\\n    box-shadow: 0px 2px 3px 2px #3D3D3D;\\r\\n}\\r\\n\\r\\n.aqi-color-hazardous {\\r\\n    background-color: #772338;\\r\\n    color: #f0f8ff;\\r\\n    padding: 5px 10px;\\r\\n    border-radius: 6px;\\r\\n    box-shadow: 0px 2px 3px 2px #3D3D3D;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://air-pollution-project/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://air-pollution-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://air-pollution-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://air-pollution-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://air-pollution-project/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://air-pollution-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://air-pollution-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://air-pollution-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://air-pollution-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://air-pollution-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://air-pollution-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/javascript/dom.js":
/*!*******************************!*\
  !*** ./src/javascript/dom.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"container\": () => (/* binding */ container),\n/* harmony export */   \"infoContainer\": () => (/* binding */ infoContainer),\n/* harmony export */   \"errParagraph\": () => (/* binding */ errParagraph),\n/* harmony export */   \"latitudeInput\": () => (/* binding */ latitudeInput),\n/* harmony export */   \"longitudeInput\": () => (/* binding */ longitudeInput),\n/* harmony export */   \"btn\": () => (/* binding */ btn),\n/* harmony export */   \"cityInput\": () => (/* binding */ cityInput),\n/* harmony export */   \"cityName\": () => (/* binding */ cityName),\n/* harmony export */   \"temperature\": () => (/* binding */ temperature),\n/* harmony export */   \"airQuality\": () => (/* binding */ airQuality),\n/* harmony export */   \"AQIcolor\": () => (/* binding */ AQIcolor),\n/* harmony export */   \"airborneParticulate25\": () => (/* binding */ airborneParticulate25),\n/* harmony export */   \"cityNameValue\": () => (/* binding */ cityNameValue),\n/* harmony export */   \"temperatureValue\": () => (/* binding */ temperatureValue),\n/* harmony export */   \"airQualityValue\": () => (/* binding */ airQualityValue),\n/* harmony export */   \"pm25Value\": () => (/* binding */ pm25Value)\n/* harmony export */ });\nconst container = document.querySelector('.container');\r\n\r\nconst title = document.createElement('h1');\r\ntitle.innerText = 'Check your Air Pollution:';\r\ncontainer.appendChild(title);\r\n\r\nconst coordInputContainer = document.querySelector('.coord-input-container');\r\ncoordInputContainer.classList.add('.coord-input-container');\r\ncontainer.appendChild(coordInputContainer);\r\n\r\nconst latitudeInput = document.createElement('input');\r\nlatitudeInput.classList.add('form-control');\r\nlatitudeInput.placeholder = 'Your current latitude';\r\ncoordInputContainer.appendChild(latitudeInput);\r\n\r\nconst longitudeInput = document.createElement('input');\r\nlongitudeInput.classList.add('form-control');\r\nlongitudeInput.placeholder = 'Your current longitude';\r\ncoordInputContainer.appendChild(longitudeInput);\r\n\r\nconst getPosBtn = document.querySelector('.get-position-btn');\r\ncontainer.appendChild(getPosBtn);\r\n\r\nconst iconBox = document.createElement('span');\r\niconBox.classList.add('input-group-text');\r\ngetPosBtn.appendChild(iconBox);\r\n\r\nconst btn = document.createElement('button');\r\nbtn.classList.add('form-control', 'button');\r\nbtn.innerText = 'Get your current position';\r\ngetPosBtn.appendChild(btn);\r\n\r\nconst cityInputContainer = document.querySelector('.city-input-container');\r\ncontainer.appendChild(cityInputContainer);\r\n\r\nconst cityInput = document.createElement('input');\r\ncityInput.classList.add('form-control');\r\ncityInput.placeholder = 'Look for a city';\r\ncityInputContainer.appendChild(cityInput);\r\n\r\nconst infoContainer = document.querySelector('.paragraph-info');\r\ninfoContainer.classList.add('paragraph-info-show');\r\ncontainer.appendChild(infoContainer);\r\n\r\nconst errParagraph = document.createElement('p');\r\n\r\nconst cityName = document.createElement('p');\r\nconst cityNameValue = document.createElement('span');\r\n\r\nconst temperature = document.createElement('p')\r\nconst temperatureValue = document.createElement('span');\r\n\r\nconst airQuality = document.createElement('p');\r\nconst airQualityValue = document.createElement('span');\r\n\r\nconst airborneParticulate25 = document.createElement('p');\r\nconst pm25Value = document.createElement('span');\r\n\r\nconst AQIcolor = document.createElement('span');\r\n\r\n\n\n//# sourceURL=webpack://air-pollution-project/./src/javascript/dom.js?");

/***/ }),

/***/ "./src/javascript/get_position.js":
/*!****************************************!*\
  !*** ./src/javascript/get_position.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPosition\": () => (/* binding */ getPosition)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/javascript/dom.js\");\n\r\n\r\n\r\nfunction getPosition() {\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.btn.addEventListener('click', ()=>{\r\n        if (navigator.geolocation) {\r\n            navigator.geolocation.getCurrentPosition(success, error);\r\n        }\r\n    });\r\n}\r\n\r\nfunction error() {\r\n    \r\n    if (_dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.classList.contains('paragraph-info-show')) {\r\n        \r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.classList.remove('paragraph-info-show')\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.classList.add('paragraph-info-hide')\r\n\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.errParagraph.classList.add('err-paragraph-show')\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.errParagraph.innerText = 'Please enable your geolocation'\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.errParagraph)\r\n    }\r\n\r\n}\r\n\r\nfunction success(pos) {\r\n\r\n    if (_dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.classList.contains('paragraph-info-hide')) {\r\n        \r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.classList.remove('paragraph-info-hide')\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.errParagraph.classList.remove('err-paragraph-show')\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.classList.add('paragraph-info-show')\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.errParagraph.classList.add('err-paragraph-hide')\r\n    }\r\n\r\n    const crd = pos.coords;\r\n\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.latitudeInput.value = crd.latitude;\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.longitudeInput.value = crd.longitude;\r\n\r\n    getCityData()\r\n\r\n    async function getCityData() {\r\n\r\n        const response = await fetch(`https://api.waqi.info/feed/geo:${_dom_js__WEBPACK_IMPORTED_MODULE_0__.latitudeInput.value};${_dom_js__WEBPACK_IMPORTED_MODULE_0__.longitudeInput.value}/?token=${\"c2554421637d86cf799eb20429c81d88c99331d3\"}`);\r\n        const jsonData = await response.json();\r\n\r\n        const city = jsonData.data.city.name;\r\n        const aqi = jsonData.data.aqi;\r\n        const temp = jsonData.data.iaqi.t.v;\r\n        const pm25 = jsonData.data.iaqi.pm25.v;\r\n\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.cityName.innerText = 'Your location is: ';\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.cityNameValue.innerText = `${city}`;\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.cityName.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.cityNameValue);\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.cityName);\r\n        \r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.airQuality.innerText = 'Air Quality: ';\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.airQuality.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor);\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.airQuality);\r\n\r\n        if (aqi <= 50) {\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.remove('aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.add('aqi-color-good');\r\n    \r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.innerText = `${aqi}. Air quality is considered satisfactory 👍🏼`;\r\n        }\r\n        else if (aqi > 50 && aqi <= 100) {\r\n            \r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.remove('aqi-color-good', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.add('aqi-color-moderate');\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.innerText = `${aqi}. Air quality is acceptable 👌🏼`;\r\n        }\r\n        else if (aqi > 100 && aqi <= 150) {\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.add('aqi-color-unhealthy-for-sensitive-groups');\r\n    \r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.innerText = `${aqis}. Members of sensitive groups may experience health effects. 👎🏼`;\r\n        }\r\n        else if (aqi > 150 && aqi <= 200) {\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.add('aqi-color-unhealthy');\r\n    \r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.innerText = `${aqis}. Everyone may begin to experience health effects. 👎🏼`; \r\n        }\r\n        else if (aqi > 200 && aqi <= 300) {\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-hazardous')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.add('aqi-color-very-unhealthy'); \r\n    \r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.innerText = `${aqi}. Health warnings of emergency conditions. 👎🏼`;\r\n        }\r\n        else if (aqi > 300) {\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.add('aqi-color-hazardous');\r\n    \r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.innerText = `${aqi}. Health alert: everyone may experience more serious health effects. 👎🏼`;\r\n        }\r\n\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.airborneParticulate25.innerText = 'Airborne particulate matter(PM2.5): ';\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.pm25Value.innerText = `${pm25}`;\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.airborneParticulate25.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.pm25Value);\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.airborneParticulate25);\r\n\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.temperature.innerText = 'Temperature: ';\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.temperatureValue.innerText = `${temp} °C`;\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.temperature.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.temperatureValue)\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.temperature);\r\n    }\r\n}\n\n//# sourceURL=webpack://air-pollution-project/./src/javascript/get_position.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _get_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_position */ \"./src/javascript/get_position.js\");\n/* harmony import */ var _search_city_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search_city.js */ \"./src/javascript/search_city.js\");\n\r\n\r\n\r\n\r\n(0,_get_position__WEBPACK_IMPORTED_MODULE_1__.getPosition)();\r\n(0,_search_city_js__WEBPACK_IMPORTED_MODULE_2__.getCityAQI)();\n\n//# sourceURL=webpack://air-pollution-project/./src/javascript/index.js?");

/***/ }),

/***/ "./src/javascript/search_city.js":
/*!***************************************!*\
  !*** ./src/javascript/search_city.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCityAQI\": () => (/* binding */ getCityAQI)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/javascript/dom.js\");\n\r\n\r\n\r\nfunction getCityAQI() {\r\n\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.cityInput.addEventListener('keyup', e => {\r\n\r\n        if (e.key == 'Enter' && _dom_js__WEBPACK_IMPORTED_MODULE_0__.cityInput.value != '') {\r\n            requestApi(_dom_js__WEBPACK_IMPORTED_MODULE_0__.cityInput.value);\r\n        }\r\n\r\n    });\r\n\r\n    async function requestApi(city) {\r\n        const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${\"c2554421637d86cf799eb20429c81d88c99331d3\"}`);\r\n        const jsonData = await response.json();\r\n\r\n        if (jsonData.status == 'error') {\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.classList.remove('paragraph-info-show');\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.classList.remove('err-paragraph-hide')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.classList.add('paragraph-info-hide');\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.errParagraph.classList.add('err-paragraph-show');\r\n            alert(`Sorry, ${jsonData.data}`)\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.container.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.errParagraph);\r\n        }\r\n        else if (jsonData.status == 'ok') {\r\n            \r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.classList.remove('paragraph-info-hide')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.errParagraph.classList.remove('err-paragraph-show')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.classList.add('paragraph-info-show')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.errParagraph.classList.add('err-paragraph-hide')\r\n        }\r\n\r\n        const citys = jsonData.data.city.name;\r\n        const aqis = jsonData.data.aqi;\r\n        const temps = jsonData.data.iaqi.t.v;\r\n        const pm25s = jsonData.data.iaqi.pm25.v;\r\n\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.cityName.innerText = 'Your location is: ';\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.cityNameValue.innerText = `${citys}`;\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.cityName.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.cityNameValue);\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.cityName);\r\n    \r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.airQuality.innerText = 'Air Quality: ';\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.airQuality.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor);\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.airQuality);\r\n        \r\n        if (aqis <= 50) {\r\n            \r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.remove('aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.add('aqi-color-good');\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.innerText = `${aqis}. Air quality is considered satisfactory 👍🏼`;\r\n        }\r\n    \r\n        else if (aqis > 50 && aqis <= 100) {\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.remove('aqi-color-good', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.add('aqi-color-moderate');\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.innerText = `${aqis}. Air quality is acceptable 👌🏼`;\r\n        }\r\n\r\n        else if (aqis > 100 && aqis <= 150) {\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.add('aqi-color-unhealthy-for-sensitive-groups');\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.innerText = `${aqis}. Members of sensitive groups may experience health effects. 👎🏼`;\r\n        }\r\n\r\n        else if (aqis > 150 && aqis <= 200) {\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.add('aqi-color-unhealthy');\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.innerText = `${aqis}. Everyone may begin to experience health effects. 👎🏼`;\r\n\r\n        }\r\n\r\n        else if (aqis > 200 && aqis <= 300) {\r\n        \r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-hazardous')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.add('aqi-color-very-unhealthy'); \r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.innerText = `${aqis}. Health warnings of emergency conditions. 👎🏼`;\r\n\r\n        }\r\n    \r\n        else if (aqis > 300) {\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy')\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.classList.add('aqi-color-hazardous');\r\n\r\n            _dom_js__WEBPACK_IMPORTED_MODULE_0__.AQIcolor.innerText = `${aqis}. Health alert: everyone may experience more serious health effects. 👎🏼`;\r\n\r\n        }\r\n\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.airborneParticulate25.innerText = 'Airborne particulate matter(PM2.5): ';\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.pm25Value.innerText = `${pm25s}`;\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.airborneParticulate25.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.pm25Value);\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.airborneParticulate25);\r\n    \r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.temperature.innerText = 'Temperature: ';\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.temperatureValue.innerText = `${temps} °C`;\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.temperature.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.temperatureValue)\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.infoContainer.appendChild(_dom_js__WEBPACK_IMPORTED_MODULE_0__.temperature);\r\n    }\r\n}\n\n//# sourceURL=webpack://air-pollution-project/./src/javascript/search_city.js?");

/***/ }),

/***/ "./src/images/patternpad.svg":
/*!***********************************!*\
  !*** ./src/images/patternpad.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92eb5eb9cb47f96d4611.svg\";\n\n//# sourceURL=webpack://air-pollution-project/./src/images/patternpad.svg?");

/***/ }),

/***/ "./src/images/position.svg":
/*!*********************************!*\
  !*** ./src/images/position.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"77470f6b397a9385fba5.svg\";\n\n//# sourceURL=webpack://air-pollution-project/./src/images/position.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/index.js");
/******/ 	
/******/ })()
;