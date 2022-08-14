/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    height: 100vh;\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\nmain {\n    height: 100%;\n    display: flex;\n}\ndiv.projects-bar {\n    width: 230px;\n    background-color: #1caefc;\n}\ndiv.projects-bar > h1 {\n    margin: 0;\n    text-align: center;\n    margin-top: 20px;\n    color: #fff;\n}\ndiv.projects-bar > .projects {\n    display: flex;\n    flex-direction: column;\n    margin: 20px;\n}\ndiv.projects-bar > .projects > .project {\n    text-align: center;\n    display: inline-block;\n    outline: 0;\n    cursor: pointer;\n    border: none;\n    padding: 0 56px;\n    margin-bottom: 10px;\n    height: 45px;\n    line-height: 45px;\n    border-radius: 7px;\n    background-color: #0070f3;\n    color: white;\n    font-weight: 400;\n    font-size: 16px;\n    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);\n    transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;\n}\ndiv.projects-bar > .projects > .project:hover{\n    background: rgba(0,118,255,0.9);\n    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);\n}\ndiv.projects-bar > .btn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\ndiv.projects-bar > .btn > #add-project {\n    margin: auto;\n    display: inline-block;\n    outline: 0;\n    cursor: pointer;\n    border: none;\n    padding: 0 56px;\n    height: 45px;\n    line-height: 45px;\n    border-radius: 7px;\n    font-weight: 400;\n    font-size: 16px;\n    background: #fff;\n    color: #696969;\n    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);\n    transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;\n}\ndiv.projects-bar > .btn > #add-project:hover{\n    background: rgba(255,255,255,0.9);\n    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);\n}\n\n\n\n\ndiv.content {\n    flex-grow: 1;\n}\ndiv.content > #project-name {\n    text-align: center;\n    margin: 20px 0;\n}\ndiv.content > .tasks {\n    background-color: #1caefc;\n    min-height: calc(100vh - 98px);\n    margin: 20px;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\ndiv.content > .tasks > .task {\n    width: 95%;\n    height: 50px;\n    background-color: #0070f3;\n    margin-top: 15px;\n    border-radius: 5px;\n    display: flex;\n    color: #fff;\n    text-align: left;\n    box-shadow: 0 6.4px 14.4px 0 rgb(0 0 0 / 13%), 0 1.2px 3.6px 0 rgb(0 0 0 / 11%);\n}\ndiv.content > .tasks > .task > #title {\n    margin-left: 20px;\n    margin-right: 30px;\n}\ndiv.content > .tasks > .task > #description {\n    margin-left: 20px;\n    margin-right: auto;\n}\ndiv.content > .tasks > .task > #date {\n    margin-right: 50px;\n}\ndiv.content > .tasks > .task > .remove-task {\n    margin-right: 10px;\n    cursor: pointer;\n}\ndiv.content > .tasks > #add-task {\n    margin-top: 30px;\n    display: inline-block;\n    outline: 0;\n    cursor: pointer;\n    border: none;\n    padding: 0 56px;\n    height: 45px;\n    line-height: 45px;\n    border-radius: 7px;\n    font-weight: 400;\n    font-size: 16px;\n    background: #fff;\n    color: #696969;\n    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);\n    transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;\n}\ndiv.content > .tasks > #add-task:hover{\n    background: rgba(255,255,255,0.9);\n    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);\n}\n\n#add-task-popup {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    width: 300px;\n    height: 400px;\n    border-radius: 10px;\n}\n#add-task-popup > h1 {\n    text-align: center;\n\n}\n#add-task-popup > .inputs {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#add-task-popup > .inputs > input:not([type=\"button\"]) {\n    \n    display: inline-block;\n    padding: 0 16px 0 12px;\n    outline: none;\n    width: 100%;\n    line-height: 30px;\n    height: 32px;\n    border: 1px solid #dddbda;\n    border-radius: 4px;\n    background-color: #fff;\n    color: rgb(8, 7, 7);\n    transition: border .1s linear,background-color .1s linear;\n    width: 230px;\n    margin: 15px 0;\n\n}\n#add-task-popup > .inputs > input:focus:not([type=\"button\"]) {\n    border-color: #1b96ff;\n    color: var(--sds-c-input-text-color-focus);\n    box-shadow: rgb(1, 118, 211) 0px 0px 3px 0px;\n}\n#add-task-popup > .inputs > input[type=\"button\"] {\n    \n    display: inline-block;\n    outline: 0;\n    cursor: pointer;\n    border: none;\n    padding: 0 56px;\n    height: 45px;\n    line-height: 45px;\n    border-radius: 7px;\n    background-color: #0070f3;\n    color: white;\n    font-weight: 400;\n    font-size: 16px;\n    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);\n    width: 200px;\n    transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;    \n}\n#add-task-popup > .inputs > input[type=\"button\"]:hover{\n    background: rgba(0,118,255,0.9);\n    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);\n}\n\n#add-project-popup {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    width: 300px;\n    height: 300px;\n    border-radius: 10px;\n}\n\n#add-project-popup > h1 {\n    text-align: center;\n\n}\n#add-project-popup > .inputs {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#add-project-popup > .inputs > input:not([type=\"button\"]) {\n    \n    display: inline-block;\n    padding: 0 16px 0 12px;\n    outline: none;\n    width: 100%;\n    line-height: 30px;\n    height: 32px;\n    border: 1px solid #dddbda;\n    border-radius: 4px;\n    background-color: #fff;\n    color: rgb(8, 7, 7);\n    transition: border .1s linear,background-color .1s linear;\n    width: 230px;\n    margin: 15px 0;\n\n}\n#add-project-popup > .inputs > input:focus:not([type=\"button\"]) {\n    border-color: #1b96ff;\n    color: var(--sds-c-input-text-color-focus);\n    box-shadow: rgb(1, 118, 211) 0px 0px 3px 0px;\n}\n#add-project-popup > .inputs > input[type=\"button\"] {\n    \n    display: inline-block;\n    outline: 0;\n    cursor: pointer;\n    border: none;\n    padding: 0 56px;\n    height: 45px;\n    line-height: 45px;\n    border-radius: 7px;\n    background-color: #0070f3;\n    color: white;\n    font-weight: 400;\n    font-size: 16px;\n    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);\n    width: 200px;\n    transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;    \n}\n#add-project-popup > .inputs > input[type=\"button\"]:hover{\n    background: rgba(0,118,255,0.9);\n    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n\nbody {\n    height: 100vh;\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\nmain {\n    height: 100%;\n    display: flex;\n}\ndiv.projects-bar {\n    width: 230px;\n    background-color: #1caefc;\n}\ndiv.projects-bar > h1 {\n    margin: 0;\n    text-align: center;\n    margin-top: 20px;\n    color: #fff;\n}\ndiv.projects-bar > .projects {\n    display: flex;\n    flex-direction: column;\n    margin: 20px;\n}\ndiv.projects-bar > .projects > .project {\n    text-align: center;\n    display: inline-block;\n    outline: 0;\n    cursor: pointer;\n    border: none;\n    padding: 0 56px;\n    margin-bottom: 10px;\n    height: 45px;\n    line-height: 45px;\n    border-radius: 7px;\n    background-color: #0070f3;\n    color: white;\n    font-weight: 400;\n    font-size: 16px;\n    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);\n    transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;\n}\ndiv.projects-bar > .projects > .project:hover{\n    background: rgba(0,118,255,0.9);\n    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);\n}\ndiv.projects-bar > .btn {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\ndiv.projects-bar > .btn > #add-project {\n    margin: auto;\n    display: inline-block;\n    outline: 0;\n    cursor: pointer;\n    border: none;\n    padding: 0 56px;\n    height: 45px;\n    line-height: 45px;\n    border-radius: 7px;\n    font-weight: 400;\n    font-size: 16px;\n    background: #fff;\n    color: #696969;\n    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);\n    transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;\n}\ndiv.projects-bar > .btn > #add-project:hover{\n    background: rgba(255,255,255,0.9);\n    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);\n}\n\n\n\n\ndiv.content {\n    flex-grow: 1;\n}\ndiv.content > #project-name {\n    text-align: center;\n    margin: 20px 0;\n}\ndiv.content > .tasks {\n    background-color: #1caefc;\n    min-height: calc(100vh - 98px);\n    margin: 20px;\n    border-radius: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n}\ndiv.content > .tasks > .task {\n    width: 95%;\n    height: 50px;\n    background-color: #0070f3;\n    margin-top: 15px;\n    border-radius: 5px;\n    display: flex;\n    color: #fff;\n    text-align: left;\n    box-shadow: 0 6.4px 14.4px 0 rgb(0 0 0 / 13%), 0 1.2px 3.6px 0 rgb(0 0 0 / 11%);\n}\ndiv.content > .tasks > .task > #title {\n    margin-left: 20px;\n    margin-right: 30px;\n}\ndiv.content > .tasks > .task > #description {\n    margin-left: 20px;\n    margin-right: auto;\n}\ndiv.content > .tasks > .task > #date {\n    margin-right: 50px;\n}\ndiv.content > .tasks > .task > .remove-task {\n    margin-right: 10px;\n    cursor: pointer;\n}\ndiv.content > .tasks > #add-task {\n    margin-top: 30px;\n    display: inline-block;\n    outline: 0;\n    cursor: pointer;\n    border: none;\n    padding: 0 56px;\n    height: 45px;\n    line-height: 45px;\n    border-radius: 7px;\n    font-weight: 400;\n    font-size: 16px;\n    background: #fff;\n    color: #696969;\n    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);\n    transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;\n}\ndiv.content > .tasks > #add-task:hover{\n    background: rgba(255,255,255,0.9);\n    box-shadow: 0 6px 20px rgb(93 93 93 / 23%);\n}\n\n#add-task-popup {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    width: 300px;\n    height: 400px;\n    border-radius: 10px;\n}\n#add-task-popup > h1 {\n    text-align: center;\n\n}\n#add-task-popup > .inputs {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#add-task-popup > .inputs > input:not([type=\"button\"]) {\n    \n    display: inline-block;\n    padding: 0 16px 0 12px;\n    outline: none;\n    width: 100%;\n    line-height: 30px;\n    height: 32px;\n    border: 1px solid #dddbda;\n    border-radius: 4px;\n    background-color: #fff;\n    color: rgb(8, 7, 7);\n    transition: border .1s linear,background-color .1s linear;\n    width: 230px;\n    margin: 15px 0;\n\n}\n#add-task-popup > .inputs > input:focus:not([type=\"button\"]) {\n    border-color: #1b96ff;\n    color: var(--sds-c-input-text-color-focus);\n    box-shadow: rgb(1, 118, 211) 0px 0px 3px 0px;\n}\n#add-task-popup > .inputs > input[type=\"button\"] {\n    \n    display: inline-block;\n    outline: 0;\n    cursor: pointer;\n    border: none;\n    padding: 0 56px;\n    height: 45px;\n    line-height: 45px;\n    border-radius: 7px;\n    background-color: #0070f3;\n    color: white;\n    font-weight: 400;\n    font-size: 16px;\n    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);\n    width: 200px;\n    transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;    \n}\n#add-task-popup > .inputs > input[type=\"button\"]:hover{\n    background: rgba(0,118,255,0.9);\n    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);\n}\n\n#add-project-popup {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    width: 300px;\n    height: 300px;\n    border-radius: 10px;\n}\n\n#add-project-popup > h1 {\n    text-align: center;\n\n}\n#add-project-popup > .inputs {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#add-project-popup > .inputs > input:not([type=\"button\"]) {\n    \n    display: inline-block;\n    padding: 0 16px 0 12px;\n    outline: none;\n    width: 100%;\n    line-height: 30px;\n    height: 32px;\n    border: 1px solid #dddbda;\n    border-radius: 4px;\n    background-color: #fff;\n    color: rgb(8, 7, 7);\n    transition: border .1s linear,background-color .1s linear;\n    width: 230px;\n    margin: 15px 0;\n\n}\n#add-project-popup > .inputs > input:focus:not([type=\"button\"]) {\n    border-color: #1b96ff;\n    color: var(--sds-c-input-text-color-focus);\n    box-shadow: rgb(1, 118, 211) 0px 0px 3px 0px;\n}\n#add-project-popup > .inputs > input[type=\"button\"] {\n    \n    display: inline-block;\n    outline: 0;\n    cursor: pointer;\n    border: none;\n    padding: 0 56px;\n    height: 45px;\n    line-height: 45px;\n    border-radius: 7px;\n    background-color: #0070f3;\n    color: white;\n    font-weight: 400;\n    font-size: 16px;\n    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);\n    width: 200px;\n    transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;    \n}\n#add-project-popup > .inputs > input[type=\"button\"]:hover{\n    background: rgba(0,118,255,0.9);\n    box-shadow: 0 6px 20px rgb(0 118 255 / 23%);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_funcs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/funcs */ "./src/modules/funcs.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup */ "./src/modules/popup.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_popup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");






let projects = [];
let currentProject = null;


window.addEventListener("load", () => {
    const projectsJson = JSON.parse(localStorage.getItem("projects"));
    if (projectsJson == null) {
        projects.push(new _modules_project__WEBPACK_IMPORTED_MODULE_0__.Project("default"));
        (0,_modules_funcs__WEBPACK_IMPORTED_MODULE_1__.updateStorage)()
    }
    else {
        projects = projectsJson;
    }
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i]
        project.addTask = _modules_project__WEBPACK_IMPORTED_MODULE_0__.Project.prototype.addTask;
        project.removeTask = _modules_project__WEBPACK_IMPORTED_MODULE_0__.Project.prototype.removeTask;
        (0,_modules_funcs__WEBPACK_IMPORTED_MODULE_1__.addProject)(project);
        const projectDiv = document.querySelector(".projects div:last-child");
        projectDiv.addEventListener("click", () => {
            currentProject = project;
            (0,_modules_project__WEBPACK_IMPORTED_MODULE_0__.loadProject)(projects[projects.indexOf(currentProject)]);
        });

        // when dbl click the project will be removed
        projectDiv.addEventListener("dblclick", (e) => {
            if (projects.length <= 1) {
                alert("You Can't Remove All Projects");
                return;
            }
            projects.splice(projects.indexOf(project), 1);
            const projectsDiv = document.querySelector("body > main > div.projects-bar > div.projects");
            projectsDiv.removeChild(projectDiv);
            (0,_modules_project__WEBPACK_IMPORTED_MODULE_0__.loadProject)(projects[0]);
            (0,_modules_funcs__WEBPACK_IMPORTED_MODULE_1__.updateStorage)()
        });
    }
    currentProject = projects[0];
    (0,_modules_project__WEBPACK_IMPORTED_MODULE_0__.loadProject)(projects[projects.indexOf(currentProject)]);
});

const addProjectBtn = document.querySelector("#add-project-popup > div > input[type=button]:nth-child(2)");
addProjectBtn.addEventListener("click", () => {
    const projectName = document.querySelector("#add-project-popup > div > input[type=text]:nth-child(1)");
    if (projectName.value == "") {
        alert("You Must Provide A Project Name");
        return;
    }
    const project = new _modules_project__WEBPACK_IMPORTED_MODULE_0__.Project(projectName.value)
    ;(0,_modules_funcs__WEBPACK_IMPORTED_MODULE_1__.addProject)(project);
    const projectDiv = document.querySelector(".projects div:last-child");
    projects.push(project);
    projectDiv.addEventListener("click", () => {
        currentProject = project;
        (0,_modules_project__WEBPACK_IMPORTED_MODULE_0__.loadProject)(projects[projects.indexOf(currentProject)]);
    });

    // when dbl click the project will be removed
    projectDiv.addEventListener("dblclick", (e) => {
        if (projects.length <= 1) {
            alert("You Can't Remove All Projects");
            return;
        }
        projects.splice(projects.indexOf(project), 1);
        const projectsDiv = document.querySelector("body > main > div.projects-bar > div.projects");
        projectsDiv.removeChild(projectDiv);
        (0,_modules_project__WEBPACK_IMPORTED_MODULE_0__.loadProject)(projects[0]);
        (0,_modules_funcs__WEBPACK_IMPORTED_MODULE_1__.updateStorage)()
    });
    (0,_modules_funcs__WEBPACK_IMPORTED_MODULE_1__.updateStorage)()

    projectName.value = "";
    const projectPopup = document.querySelector("#add-project-popup");
    projectPopup.toggleAttribute("hidden");
});

const addTaskBtn = document.querySelector("#add-task-popup > div > input[type=button]:nth-child(4)");
addTaskBtn.addEventListener("click", () => {
    const title = document.querySelector("#add-task-popup > div > input[type=text]:nth-child(1)");
    const description = document.querySelector("#add-task-popup > div > input[type=text]:nth-child(2)");
    const date = document.querySelector("#add-task-popup > div > input[type=date]:nth-child(3)");
    if (title.value == "" || description.value == "" || date.value == "") {
        alert("You Must Fill all inputs");
        return;
    }
    const task = (0,_modules_funcs__WEBPACK_IMPORTED_MODULE_1__.addTask)(title.value, description.value, date.value);
    projects[projects.indexOf(currentProject)].addTask(task);
    (0,_modules_funcs__WEBPACK_IMPORTED_MODULE_1__.updateStorage)()
    ;(0,_modules_funcs__WEBPACK_IMPORTED_MODULE_1__.removeTask)(task)
    const taskPopup = document.querySelector("#add-task-popup");
    taskPopup.toggleAttribute("hidden");
    title.value = "";
    description.value = "";
    date.value = "";
});

/***/ }),

/***/ "./src/modules/funcs.js":
/*!******************************!*\
  !*** ./src/modules/funcs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
/* harmony export */   "updateStorage": () => (/* binding */ updateStorage)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _x_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../x.svg */ "./src/x.svg");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./src/index.js");





const addProject = (project) => {
    const projectsDiv = document.querySelector(".projects");
    const projectDiv = document.createElement("div");
    
    projectDiv.classList.add("project");
    projectDiv.textContent = project.name;

    projectsDiv.insertBefore(projectDiv, document.querySelector("btn"));
}
const addTask = (title, description, date) => {
    const task = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(title, description, date);
    const TasksDiv = document.querySelector("body > main > div.content > div");
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const titlePara = document.createElement("p");
    titlePara.setAttribute("id", "title");
    titlePara.textContent = task.title;

    const descriptionPara = document.createElement("p");
    descriptionPara.setAttribute("id", "description");
    descriptionPara.textContent = task.description;

    const datePara = document.createElement("p");
    datePara.setAttribute("id", "date");
    datePara.textContent = task.dueDate;

    const img = document.createElement("img");
    img.classList.add("remove-task");
    img.setAttribute("src", _x_svg__WEBPACK_IMPORTED_MODULE_2__);

    taskDiv.appendChild(titlePara);
    taskDiv.appendChild(descriptionPara);
    taskDiv.appendChild(datePara);
    taskDiv.appendChild(img);

    TasksDiv.insertBefore(taskDiv, document.querySelector("#add-task"));
    return task;
}
const updateStorage = () => {
    const projectsJson = JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_3__.projects);
    localStorage.setItem("projects", projectsJson);
}
const removeTask = (task) => {
    const taskDiv = document.querySelector("body > main > div.content > div > div:nth-last-child(2)");
    const removeTaskBtn = taskDiv.querySelector("img");
    removeTaskBtn.addEventListener("click", () => {
        const tasksDiv = document.querySelector("body > main > div.content > div");
        tasksDiv.removeChild(taskDiv);
        _index__WEBPACK_IMPORTED_MODULE_3__.projects[_index__WEBPACK_IMPORTED_MODULE_3__.projects.indexOf(_index__WEBPACK_IMPORTED_MODULE_3__.currentProject)].removeTask(task);
        updateStorage()
    });
}


/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ (() => {

const addProjectPopupBtn = document.querySelector(".btn > #add-project");
addProjectPopupBtn.addEventListener("click", () => {
    const projectPopup = document.querySelector("#add-project-popup");
    projectPopup.toggleAttribute("hidden");
});

const addTaskPopupBtn = document.querySelector("#add-task");
addTaskPopupBtn.addEventListener("click", () => {
    const taskPopup = document.querySelector("#add-task-popup");
    taskPopup.toggleAttribute("hidden");
});

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "loadProject": () => (/* binding */ loadProject)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");


class Project {
    constructor (name) {
        this.name = name;
        this.tasks = [];
    }
    addTask (task) {
        this.tasks.push(task);
    }
    
    removeTask (task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
}

const loadProject = (project) => {
    const projectName = document.querySelector("#project-name");
    projectName.textContent = project.name;

    const tasksDiv = document.querySelector("body > main > div.content > div");
    const tasks = document.querySelectorAll("body > main > div.content > div > div.task:not(:nth-child(1))");
    tasks.forEach((task) => {
        tasksDiv.removeChild(task)
    });
    

    (0,_task__WEBPACK_IMPORTED_MODULE_0__.loadTasks)(project);
}



/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks)
/* harmony export */ });
/* harmony import */ var _x_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../x.svg */ "./src/x.svg");
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcs */ "./src/modules/funcs.js");
/*
 <div class="task">
                    <p id="title">Comb</p>
                    <p id="description">Do some bull shit</p>
                    <p id="date">2200/22/20</p>
                    <img src="" alt="" id="remove-task">
                </div>
*/





class Task {
    constructor (title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
    }
    
}

const loadTasks = (project) => {
    const tasks = document.querySelector(".tasks");

    for (let i = 0; i < project.tasks.length; i++) {
        let task = project.tasks[i];
        
        
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        const title = document.createElement("p");
        title.setAttribute("id", "title");
        title.textContent = task.title;
        const description = document.createElement("p");
        description.setAttribute("id", "description");
        description.textContent = task.description;
        const date = document.createElement("p");
        date.setAttribute("id", "date");
        date.textContent = task.dueDate;
        
        let img = document.createElement("img");
        img.setAttribute("src", _x_svg__WEBPACK_IMPORTED_MODULE_0__);
        img.setAttribute("class", "remove-task");

        taskDiv.appendChild(title);
        taskDiv.appendChild(description);
        taskDiv.appendChild(date);
        taskDiv.appendChild(img);


        tasks.insertBefore(taskDiv, document.querySelector("#add-task"));
        (0,_funcs__WEBPACK_IMPORTED_MODULE_1__.removeTask)(task);
    }
}



/***/ }),

/***/ "./src/x.svg":
/*!*******************!*\
  !*** ./src/x.svg ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9c79e485dc3520ff23b8.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLDhEQUE4RCxzQ0FBc0Msa0RBQWtELEdBQUcsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFB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V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9mdW5jcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wb3B1cC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbmRpdi5wcm9qZWN0cy1iYXIge1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxY2FlZmM7XFxufVxcbmRpdi5wcm9qZWN0cy1iYXIgPiBoMSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuZGl2LnByb2plY3RzLWJhciA+IC5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuZGl2LnByb2plY3RzLWJhciA+IC5wcm9qZWN0cyA+IC5wcm9qZWN0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDU2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzBmMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggMCByZ2IoMCAxMTggMjU1IC8gMzklKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UsY29sb3IgMC4ycyBlYXNlLGJveC1zaGFkb3cgMC4ycyBlYXNlO1xcbn1cXG5kaXYucHJvamVjdHMtYmFyID4gLnByb2plY3RzID4gLnByb2plY3Q6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwxMTgsMjU1LDAuOSk7XFxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiKDAgMTE4IDI1NSAvIDIzJSk7XFxufVxcbmRpdi5wcm9qZWN0cy1iYXIgPiAuYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmRpdi5wcm9qZWN0cy1iYXIgPiAuYnRuID4gI2FkZC1wcm9qZWN0IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDU2cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBjb2xvcjogIzY5Njk2OTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCAwIHJnYigwIDAgMCAvIDEwJSk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLGNvbG9yIDAuMnMgZWFzZSxib3gtc2hhZG93IDAuMnMgZWFzZTtcXG59XFxuZGl2LnByb2plY3RzLWJhciA+IC5idG4gPiAjYWRkLXByb2plY3Q6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2IoOTMgOTMgOTMgLyAyMyUpO1xcbn1cXG5cXG5cXG5cXG5cXG5kaXYuY29udGVudCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuZGl2LmNvbnRlbnQgPiAjcHJvamVjdC1uYW1lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG59XFxuZGl2LmNvbnRlbnQgPiAudGFza3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNhZWZjO1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOThweCk7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcbmRpdi5jb250ZW50ID4gLnRhc2tzID4gLnRhc2sge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcwZjM7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGJveC1zaGFkb3c6IDAgNi40cHggMTQuNHB4IDAgcmdiKDAgMCAwIC8gMTMlKSwgMCAxLjJweCAzLjZweCAwIHJnYigwIDAgMCAvIDExJSk7XFxufVxcbmRpdi5jb250ZW50ID4gLnRhc2tzID4gLnRhc2sgPiAjdGl0bGUge1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5kaXYuY29udGVudCA+IC50YXNrcyA+IC50YXNrID4gI2Rlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuZGl2LmNvbnRlbnQgPiAudGFza3MgPiAudGFzayA+ICNkYXRlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbn1cXG5kaXYuY29udGVudCA+IC50YXNrcyA+IC50YXNrID4gLnJlbW92ZS10YXNrIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmRpdi5jb250ZW50ID4gLnRhc2tzID4gI2FkZC10YXNrIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMCA1NnB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgY29sb3I6ICM2OTY5Njk7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggMCByZ2IoMCAwIDAgLyAxMCUpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZSxjb2xvciAwLjJzIGVhc2UsYm94LXNoYWRvdyAwLjJzIGVhc2U7XFxufVxcbmRpdi5jb250ZW50ID4gLnRhc2tzID4gI2FkZC10YXNrOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XFxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiKDkzIDkzIDkzIC8gMjMlKTtcXG59XFxuXFxuI2FkZC10YXNrLXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuI2FkZC10YXNrLXBvcHVwID4gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcbiNhZGQtdGFzay1wb3B1cCA+IC5pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jYWRkLXRhc2stcG9wdXAgPiAuaW5wdXRzID4gaW5wdXQ6bm90KFt0eXBlPVxcXCJidXR0b25cXFwiXSkge1xcbiAgICBcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAwIDE2cHggMCAxMnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGJkYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogcmdiKDgsIDcsIDcpO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjFzIGxpbmVhcixiYWNrZ3JvdW5kLWNvbG9yIC4xcyBsaW5lYXI7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgbWFyZ2luOiAxNXB4IDA7XFxuXFxufVxcbiNhZGQtdGFzay1wb3B1cCA+IC5pbnB1dHMgPiBpbnB1dDpmb2N1czpub3QoW3R5cGU9XFxcImJ1dHRvblxcXCJdKSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzFiOTZmZjtcXG4gICAgY29sb3I6IHZhcigtLXNkcy1jLWlucHV0LXRleHQtY29sb3ItZm9jdXMpO1xcbiAgICBib3gtc2hhZG93OiByZ2IoMSwgMTE4LCAyMTEpIDBweCAwcHggM3B4IDBweDtcXG59XFxuI2FkZC10YXNrLXBvcHVwID4gLmlucHV0cyA+IGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgNTZweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBsaW5lLWhlaWdodDogNDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MGYzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCAwIHJnYigwIDExOCAyNTUgLyAzOSUpO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLGNvbG9yIDAuMnMgZWFzZSxib3gtc2hhZG93IDAuMnMgZWFzZTsgICAgXFxufVxcbiNhZGQtdGFzay1wb3B1cCA+IC5pbnB1dHMgPiBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDExOCwyNTUsMC45KTtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2IoMCAxMTggMjU1IC8gMjMlKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LXBvcHVwID4gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcbiNhZGQtcHJvamVjdC1wb3B1cCA+IC5pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jYWRkLXByb2plY3QtcG9wdXAgPiAuaW5wdXRzID4gaW5wdXQ6bm90KFt0eXBlPVxcXCJidXR0b25cXFwiXSkge1xcbiAgICBcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAwIDE2cHggMCAxMnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGJkYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogcmdiKDgsIDcsIDcpO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjFzIGxpbmVhcixiYWNrZ3JvdW5kLWNvbG9yIC4xcyBsaW5lYXI7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgbWFyZ2luOiAxNXB4IDA7XFxuXFxufVxcbiNhZGQtcHJvamVjdC1wb3B1cCA+IC5pbnB1dHMgPiBpbnB1dDpmb2N1czpub3QoW3R5cGU9XFxcImJ1dHRvblxcXCJdKSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzFiOTZmZjtcXG4gICAgY29sb3I6IHZhcigtLXNkcy1jLWlucHV0LXRleHQtY29sb3ItZm9jdXMpO1xcbiAgICBib3gtc2hhZG93OiByZ2IoMSwgMTE4LCAyMTEpIDBweCAwcHggM3B4IDBweDtcXG59XFxuI2FkZC1wcm9qZWN0LXBvcHVwID4gLmlucHV0cyA+IGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgNTZweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBsaW5lLWhlaWdodDogNDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MGYzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCAwIHJnYigwIDExOCAyNTUgLyAzOSUpO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLGNvbG9yIDAuMnMgZWFzZSxib3gtc2hhZG93IDAuMnMgZWFzZTsgICAgXFxufVxcbiNhZGQtcHJvamVjdC1wb3B1cCA+IC5pbnB1dHMgPiBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDExOCwyNTUsMC45KTtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2IoMCAxMTggMjU1IC8gMjMlKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZDQUE2QztJQUM3QyxxRUFBcUU7QUFDekU7QUFDQTtJQUNJLCtCQUErQjtJQUMvQiwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7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QiwwQ0FBMEM7SUFDMUMsNENBQTRDO0FBQ2hEO0FBQ0E7O0lBRUkscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixxRUFBcUU7QUFDekU7QUFDQTtJQUNJLCtCQUErQjtJQUMvQiwyQ0FBMkM7QUFDL0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxubWFpbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuZGl2LnByb2plY3RzLWJhciB7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjYWVmYztcXG59XFxuZGl2LnByb2plY3RzLWJhciA+IGgxIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5kaXYucHJvamVjdHMtYmFyID4gLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG5kaXYucHJvamVjdHMtYmFyID4gLnByb2plY3RzID4gLnByb2plY3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgNTZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBsaW5lLWhlaWdodDogNDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MGYzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCAwIHJnYigwIDExOCAyNTUgLyAzOSUpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZSxjb2xvciAwLjJzIGVhc2UsYm94LXNoYWRvdyAwLjJzIGVhc2U7XFxufVxcbmRpdi5wcm9qZWN0cy1iYXIgPiAucHJvamVjdHMgPiAucHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDExOCwyNTUsMC45KTtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2IoMCAxMTggMjU1IC8gMjMlKTtcXG59XFxuZGl2LnByb2plY3RzLWJhciA+IC5idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZGl2LnByb2plY3RzLWJhciA+IC5idG4gPiAjYWRkLXByb2plY3Qge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgNTZweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBsaW5lLWhlaWdodDogNDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGNvbG9yOiAjNjk2OTY5O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IDAgcmdiKDAgMCAwIC8gMTAlKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UsY29sb3IgMC4ycyBlYXNlLGJveC1zaGFkb3cgMC4ycyBlYXNlO1xcbn1cXG5kaXYucHJvamVjdHMtYmFyID4gLmJ0biA+ICNhZGQtcHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYig5MyA5MyA5MyAvIDIzJSk7XFxufVxcblxcblxcblxcblxcbmRpdi5jb250ZW50IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5kaXYuY29udGVudCA+ICNwcm9qZWN0LW5hbWUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbn1cXG5kaXYuY29udGVudCA+IC50YXNrcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxY2FlZmM7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA5OHB4KTtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuZGl2LmNvbnRlbnQgPiAudGFza3MgPiAudGFzayB7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzBmMztcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgYm94LXNoYWRvdzogMCA2LjRweCAxNC40cHggMCByZ2IoMCAwIDAgLyAxMyUpLCAwIDEuMnB4IDMuNnB4IDAgcmdiKDAgMCAwIC8gMTElKTtcXG59XFxuZGl2LmNvbnRlbnQgPiAudGFza3MgPiAudGFzayA+ICN0aXRsZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcbmRpdi5jb250ZW50ID4gLnRhc2tzID4gLnRhc2sgPiAjZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5kaXYuY29udGVudCA+IC50YXNrcyA+IC50YXNrID4gI2RhdGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxufVxcbmRpdi5jb250ZW50ID4gLnRhc2tzID4gLnRhc2sgPiAucmVtb3ZlLXRhc2sge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuZGl2LmNvbnRlbnQgPiAudGFza3MgPiAjYWRkLXRhc2sge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDU2cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBjb2xvcjogIzY5Njk2OTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCAwIHJnYigwIDAgMCAvIDEwJSk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLGNvbG9yIDAuMnMgZWFzZSxib3gtc2hhZG93IDAuMnMgZWFzZTtcXG59XFxuZGl2LmNvbnRlbnQgPiAudGFza3MgPiAjYWRkLXRhc2s6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2IoOTMgOTMgOTMgLyAyMyUpO1xcbn1cXG5cXG4jYWRkLXRhc2stcG9wdXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4jYWRkLXRhc2stcG9wdXAgPiBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuI2FkZC10YXNrLXBvcHVwID4gLmlucHV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNhZGQtdGFzay1wb3B1cCA+IC5pbnB1dHMgPiBpbnB1dDpub3QoW3R5cGU9XFxcImJ1dHRvblxcXCJdKSB7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAgMTZweCAwIDEycHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkYmRhO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGNvbG9yOiByZ2IoOCwgNywgNyk7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAuMXMgbGluZWFyLGJhY2tncm91bmQtY29sb3IgLjFzIGxpbmVhcjtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBtYXJnaW46IDE1cHggMDtcXG5cXG59XFxuI2FkZC10YXNrLXBvcHVwID4gLmlucHV0cyA+IGlucHV0OmZvY3VzOm5vdChbdHlwZT1cXFwiYnV0dG9uXFxcIl0pIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMWI5NmZmO1xcbiAgICBjb2xvcjogdmFyKC0tc2RzLWMtaW5wdXQtdGV4dC1jb2xvci1mb2N1cyk7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxLCAxMTgsIDIxMSkgMHB4IDBweCAzcHggMHB4O1xcbn1cXG4jYWRkLXRhc2stcG9wdXAgPiAuaW5wdXRzID4gaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgICBcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMCA1NnB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcwZjM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IDAgcmdiKDAgMTE4IDI1NSAvIDM5JSk7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UsY29sb3IgMC4ycyBlYXNlLGJveC1zaGFkb3cgMC4ycyBlYXNlOyAgICBcXG59XFxuI2FkZC10YXNrLXBvcHVwID4gLmlucHV0cyA+IGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMTE4LDI1NSwwLjkpO1xcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYigwIDExOCAyNTUgLyAyMyUpO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtcG9wdXAge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtcG9wdXAgPiBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuI2FkZC1wcm9qZWN0LXBvcHVwID4gLmlucHV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNhZGQtcHJvamVjdC1wb3B1cCA+IC5pbnB1dHMgPiBpbnB1dDpub3QoW3R5cGU9XFxcImJ1dHRvblxcXCJdKSB7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAgMTZweCAwIDEycHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkYmRhO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGNvbG9yOiByZ2IoOCwgNywgNyk7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlciAuMXMgbGluZWFyLGJhY2tncm91bmQtY29sb3IgLjFzIGxpbmVhcjtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBtYXJnaW46IDE1cHggMDtcXG5cXG59XFxuI2FkZC1wcm9qZWN0LXBvcHVwID4gLmlucHV0cyA+IGlucHV0OmZvY3VzOm5vdChbdHlwZT1cXFwiYnV0dG9uXFxcIl0pIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMWI5NmZmO1xcbiAgICBjb2xvcjogdmFyKC0tc2RzLWMtaW5wdXQtdGV4dC1jb2xvci1mb2N1cyk7XFxuICAgIGJveC1zaGFkb3c6IHJnYigxLCAxMTgsIDIxMSkgMHB4IDBweCAzcHggMHB4O1xcbn1cXG4jYWRkLXByb2plY3QtcG9wdXAgPiAuaW5wdXRzID4gaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgICBcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMCA1NnB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcwZjM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IDAgcmdiKDAgMTE4IDI1NSAvIDM5JSk7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UsY29sb3IgMC4ycyBlYXNlLGJveC1zaGFkb3cgMC4ycyBlYXNlOyAgICBcXG59XFxuI2FkZC1wcm9qZWN0LXBvcHVwID4gLmlucHV0cyA+IGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMTE4LDI1NSwwLjkpO1xcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYigwIDExOCAyNTUgLyAyMyUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFByb2plY3QsIGxvYWRQcm9qZWN0IH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0LCBhZGRUYXNrLCByZW1vdmVUYXNrLCB1cGRhdGVTdG9yYWdlIH0gZnJvbSBcIi4vbW9kdWxlcy9mdW5jc1wiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL3BvcHVwXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcblxuXG5sZXQgcHJvamVjdHMgPSBbXTtcbmxldCBjdXJyZW50UHJvamVjdCA9IG51bGw7XG5leHBvcnQge1xuICAgIHByb2plY3RzLCBcbiAgICBjdXJyZW50UHJvamVjdFxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzSnNvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgaWYgKHByb2plY3RzSnNvbiA9PSBudWxsKSB7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QoXCJkZWZhdWx0XCIpKTtcbiAgICAgICAgdXBkYXRlU3RvcmFnZSgpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcm9qZWN0cyA9IHByb2plY3RzSnNvbjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbaV1cbiAgICAgICAgcHJvamVjdC5hZGRUYXNrID0gUHJvamVjdC5wcm90b3R5cGUuYWRkVGFzaztcbiAgICAgICAgcHJvamVjdC5yZW1vdmVUYXNrID0gUHJvamVjdC5wcm90b3R5cGUucmVtb3ZlVGFzaztcbiAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMgZGl2Omxhc3QtY2hpbGRcIik7XG4gICAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0KHByb2plY3RzW3Byb2plY3RzLmluZGV4T2YoY3VycmVudFByb2plY3QpXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHdoZW4gZGJsIGNsaWNrIHRoZSBwcm9qZWN0IHdpbGwgYmUgcmVtb3ZlZFxuICAgICAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2plY3RzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJZb3UgQ2FuJ3QgUmVtb3ZlIEFsbCBQcm9qZWN0c1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gbWFpbiA+IGRpdi5wcm9qZWN0cy1iYXIgPiBkaXYucHJvamVjdHNcIik7XG4gICAgICAgICAgICBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAgICAgICAgIGxvYWRQcm9qZWN0KHByb2plY3RzWzBdKTtcbiAgICAgICAgICAgIHVwZGF0ZVN0b3JhZ2UoKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1swXTtcbiAgICBsb2FkUHJvamVjdChwcm9qZWN0c1twcm9qZWN0cy5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0pO1xufSk7XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LXBvcHVwID4gZGl2ID4gaW5wdXRbdHlwZT1idXR0b25dOm50aC1jaGlsZCgyKVwiKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtcG9wdXAgPiBkaXYgPiBpbnB1dFt0eXBlPXRleHRdOm50aC1jaGlsZCgxKVwiKTtcbiAgICBpZiAocHJvamVjdE5hbWUudmFsdWUgPT0gXCJcIikge1xuICAgICAgICBhbGVydChcIllvdSBNdXN0IFByb3ZpZGUgQSBQcm9qZWN0IE5hbWVcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKVxuICAgIGFkZFByb2plY3QocHJvamVjdCk7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMgZGl2Omxhc3QtY2hpbGRcIik7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgbG9hZFByb2plY3QocHJvamVjdHNbcHJvamVjdHMuaW5kZXhPZihjdXJyZW50UHJvamVjdCldKTtcbiAgICB9KTtcblxuICAgIC8vIHdoZW4gZGJsIGNsaWNrIHRoZSBwcm9qZWN0IHdpbGwgYmUgcmVtb3ZlZFxuICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgYWxlcnQoXCJZb3UgQ2FuJ3QgUmVtb3ZlIEFsbCBQcm9qZWN0c1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KSwgMSk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBtYWluID4gZGl2LnByb2plY3RzLWJhciA+IGRpdi5wcm9qZWN0c1wiKTtcbiAgICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQocHJvamVjdERpdik7XG4gICAgICAgIGxvYWRQcm9qZWN0KHByb2plY3RzWzBdKTtcbiAgICAgICAgdXBkYXRlU3RvcmFnZSgpXG4gICAgfSk7XG4gICAgdXBkYXRlU3RvcmFnZSgpXG5cbiAgICBwcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgY29uc3QgcHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1wb3B1cFwiKTtcbiAgICBwcm9qZWN0UG9wdXAudG9nZ2xlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLXBvcHVwID4gZGl2ID4gaW5wdXRbdHlwZT1idXR0b25dOm50aC1jaGlsZCg0KVwiKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stcG9wdXAgPiBkaXYgPiBpbnB1dFt0eXBlPXRleHRdOm50aC1jaGlsZCgxKVwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stcG9wdXAgPiBkaXYgPiBpbnB1dFt0eXBlPXRleHRdOm50aC1jaGlsZCgyKVwiKTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1wb3B1cCA+IGRpdiA+IGlucHV0W3R5cGU9ZGF0ZV06bnRoLWNoaWxkKDMpXCIpO1xuICAgIGlmICh0aXRsZS52YWx1ZSA9PSBcIlwiIHx8IGRlc2NyaXB0aW9uLnZhbHVlID09IFwiXCIgfHwgZGF0ZS52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiWW91IE11c3QgRmlsbCBhbGwgaW5wdXRzXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhc2sgPSBhZGRUYXNrKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgZGF0ZS52YWx1ZSk7XG4gICAgcHJvamVjdHNbcHJvamVjdHMuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLmFkZFRhc2sodGFzayk7XG4gICAgdXBkYXRlU3RvcmFnZSgpXG4gICAgcmVtb3ZlVGFzayh0YXNrKVxuICAgIGNvbnN0IHRhc2tQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stcG9wdXBcIik7XG4gICAgdGFza1BvcHVwLnRvZ2dsZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcbiAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIGRhdGUudmFsdWUgPSBcIlwiO1xufSk7IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgaW1hZ2UgZnJvbSBcIi4uL3guc3ZnXCI7XG5pbXBvcnQgeyBwcm9qZWN0cywgY3VycmVudFByb2plY3QgfSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgIHByb2plY3RzRGl2Lmluc2VydEJlZm9yZShwcm9qZWN0RGl2LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnRuXCIpKTtcbn1cbmNvbnN0IGFkZFRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSk7XG4gICAgY29uc3QgVGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IG1haW4gPiBkaXYuY29udGVudCA+IGRpdlwiKTtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gICAgY29uc3QgdGl0bGVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGVQYXJhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG4gICAgdGl0bGVQYXJhLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uUGFyYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uUGFyYS50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBkYXRlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRhdGVQYXJhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZVwiKTtcbiAgICBkYXRlUGFyYS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmUtdGFza1wiKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlKTtcblxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGVQYXJhKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYSk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRlUGFyYSk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgVGFza3NEaXYuaW5zZXJ0QmVmb3JlKHRhc2tEaXYsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2tcIikpO1xuICAgIHJldHVybiB0YXNrO1xufVxuY29uc3QgdXBkYXRlU3RvcmFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0pzb24gPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0cyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBwcm9qZWN0c0pzb24pO1xufVxuY29uc3QgcmVtb3ZlVGFzayA9ICh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gbWFpbiA+IGRpdi5jb250ZW50ID4gZGl2ID4gZGl2Om50aC1sYXN0LWNoaWxkKDIpXCIpO1xuICAgIGNvbnN0IHJlbW92ZVRhc2tCdG4gPSB0YXNrRGl2LnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gICAgcmVtb3ZlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gbWFpbiA+IGRpdi5jb250ZW50ID4gZGl2XCIpO1xuICAgICAgICB0YXNrc0Rpdi5yZW1vdmVDaGlsZCh0YXNrRGl2KTtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdHMuaW5kZXhPZihjdXJyZW50UHJvamVjdCldLnJlbW92ZVRhc2sodGFzayk7XG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UoKVxuICAgIH0pO1xufVxuZXhwb3J0IHtcbiAgICBhZGRQcm9qZWN0LFxuICAgIGFkZFRhc2ssXG4gICAgcmVtb3ZlVGFzayxcbiAgICB1cGRhdGVTdG9yYWdlXG59IiwiY29uc3QgYWRkUHJvamVjdFBvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4gPiAjYWRkLXByb2plY3RcIik7XG5hZGRQcm9qZWN0UG9wdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LXBvcHVwXCIpO1xuICAgIHByb2plY3RQb3B1cC50b2dnbGVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XG59KTtcblxuY29uc3QgYWRkVGFza1BvcHVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFza1wiKTtcbmFkZFRhc2tQb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stcG9wdXBcIik7XG4gICAgdGFza1BvcHVwLnRvZ2dsZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcbn0pOyIsImltcG9ydCB7IGxvYWRUYXNrcyB9IGZyb20gXCIuL3Rhc2tcIjtcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cbiAgICBhZGRUYXNrICh0YXNrKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgXG4gICAgcmVtb3ZlVGFzayAodGFzaykge1xuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZSh0aGlzLnRhc2tzLmluZGV4T2YodGFzayksIDEpO1xuICAgIH1cbn1cblxuY29uc3QgbG9hZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5hbWVcIik7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gbWFpbiA+IGRpdi5jb250ZW50ID4gZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJvZHkgPiBtYWluID4gZGl2LmNvbnRlbnQgPiBkaXYgPiBkaXYudGFzazpub3QoOm50aC1jaGlsZCgxKSlcIik7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICB0YXNrc0Rpdi5yZW1vdmVDaGlsZCh0YXNrKVxuICAgIH0pO1xuICAgIFxuXG4gICAgbG9hZFRhc2tzKHByb2plY3QpO1xufVxuXG5leHBvcnQge1xuICAgIFByb2plY3QsXG4gICAgbG9hZFByb2plY3Rcbn0iLCIvKlxuIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGlkPVwidGl0bGVcIj5Db21iPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImRlc2NyaXB0aW9uXCI+RG8gc29tZSBidWxsIHNoaXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiZGF0ZVwiPjIyMDAvMjIvMjA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIgaWQ9XCJyZW1vdmUtdGFza1wiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuKi9cblxuXG5pbXBvcnQgaW1hZ2UgZnJvbSBcIi4uL3guc3ZnXCI7XG5pbXBvcnQgeyByZW1vdmVUYXNrIH0gZnJvbSBcIi4vZnVuY3NcIjtcblxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9XG4gICAgXG59XG5cbmNvbnN0IGxvYWRUYXNrcyA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0gcHJvamVjdC50YXNrc1tpXTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZVwiKTtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgXG4gICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlKTtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmVtb3ZlLXRhc2tcIik7XG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGltZyk7XG5cblxuICAgICAgICB0YXNrcy5pbnNlcnRCZWZvcmUodGFza0RpdiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFza1wiKSk7XG4gICAgICAgIHJlbW92ZVRhc2sodGFzayk7XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIFRhc2ssXG4gICAgbG9hZFRhc2tzXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9