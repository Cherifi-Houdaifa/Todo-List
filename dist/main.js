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
    projects = projectsJson;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLDhEQUE4RCxzQ0FBc0Msa0RBQWtELEdBQUcsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFB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Q2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZnVuY3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5tYWluIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5kaXYucHJvamVjdHMtYmFyIHtcXG4gICAgd2lkdGg6IDIzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNhZWZjO1xcbn1cXG5kaXYucHJvamVjdHMtYmFyID4gaDEge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcbmRpdi5wcm9qZWN0cy1iYXIgPiAucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcbmRpdi5wcm9qZWN0cy1iYXIgPiAucHJvamVjdHMgPiAucHJvamVjdCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMCA1NnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcwZjM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IDAgcmdiKDAgMTE4IDI1NSAvIDM5JSk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLGNvbG9yIDAuMnMgZWFzZSxib3gtc2hhZG93IDAuMnMgZWFzZTtcXG59XFxuZGl2LnByb2plY3RzLWJhciA+IC5wcm9qZWN0cyA+IC5wcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMTE4LDI1NSwwLjkpO1xcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYigwIDExOCAyNTUgLyAyMyUpO1xcbn1cXG5kaXYucHJvamVjdHMtYmFyID4gLmJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5kaXYucHJvamVjdHMtYmFyID4gLmJ0biA+ICNhZGQtcHJvamVjdCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMCA1NnB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgY29sb3I6ICM2OTY5Njk7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggMCByZ2IoMCAwIDAgLyAxMCUpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZSxjb2xvciAwLjJzIGVhc2UsYm94LXNoYWRvdyAwLjJzIGVhc2U7XFxufVxcbmRpdi5wcm9qZWN0cy1iYXIgPiAuYnRuID4gI2FkZC1wcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XFxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiKDkzIDkzIDkzIC8gMjMlKTtcXG59XFxuXFxuXFxuXFxuXFxuZGl2LmNvbnRlbnQge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcbmRpdi5jb250ZW50ID4gI3Byb2plY3QtbmFtZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxufVxcbmRpdi5jb250ZW50ID4gLnRhc2tzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjYWVmYztcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDk4cHgpO1xcbiAgICBtYXJnaW46IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5kaXYuY29udGVudCA+IC50YXNrcyA+IC50YXNrIHtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MGYzO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBib3gtc2hhZG93OiAwIDYuNHB4IDE0LjRweCAwIHJnYigwIDAgMCAvIDEzJSksIDAgMS4ycHggMy42cHggMCByZ2IoMCAwIDAgLyAxMSUpO1xcbn1cXG5kaXYuY29udGVudCA+IC50YXNrcyA+IC50YXNrID4gI3RpdGxlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuZGl2LmNvbnRlbnQgPiAudGFza3MgPiAudGFzayA+ICNkZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbmRpdi5jb250ZW50ID4gLnRhc2tzID4gLnRhc2sgPiAjZGF0ZSB7XFxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcXG59XFxuZGl2LmNvbnRlbnQgPiAudGFza3MgPiAudGFzayA+IC5yZW1vdmUtdGFzayB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5kaXYuY29udGVudCA+IC50YXNrcyA+ICNhZGQtdGFzayB7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgNTZweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBsaW5lLWhlaWdodDogNDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGNvbG9yOiAjNjk2OTY5O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNHB4IDAgcmdiKDAgMCAwIC8gMTAlKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UsY29sb3IgMC4ycyBlYXNlLGJveC1zaGFkb3cgMC4ycyBlYXNlO1xcbn1cXG5kaXYuY29udGVudCA+IC50YXNrcyA+ICNhZGQtdGFzazpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYig5MyA5MyA5MyAvIDIzJSk7XFxufVxcblxcbiNhZGQtdGFzay1wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiNhZGQtdGFzay1wb3B1cCA+IGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG4jYWRkLXRhc2stcG9wdXAgPiAuaW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2FkZC10YXNrLXBvcHVwID4gLmlucHV0cyA+IGlucHV0Om5vdChbdHlwZT1cXFwiYnV0dG9uXFxcIl0pIHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMCAxNnB4IDAgMTJweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRiZGE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgY29sb3I6IHJnYig4LCA3LCA3KTtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIC4xcyBsaW5lYXIsYmFja2dyb3VuZC1jb2xvciAuMXMgbGluZWFyO1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIG1hcmdpbjogMTVweCAwO1xcblxcbn1cXG4jYWRkLXRhc2stcG9wdXAgPiAuaW5wdXRzID4gaW5wdXQ6Zm9jdXM6bm90KFt0eXBlPVxcXCJidXR0b25cXFwiXSkge1xcbiAgICBib3JkZXItY29sb3I6ICMxYjk2ZmY7XFxuICAgIGNvbG9yOiB2YXIoLS1zZHMtYy1pbnB1dC10ZXh0LWNvbG9yLWZvY3VzKTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDEsIDExOCwgMjExKSAwcHggMHB4IDNweCAwcHg7XFxufVxcbiNhZGQtdGFzay1wb3B1cCA+IC5pbnB1dHMgPiBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDU2cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzBmMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggMCByZ2IoMCAxMTggMjU1IC8gMzklKTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZSxjb2xvciAwLjJzIGVhc2UsYm94LXNoYWRvdyAwLjJzIGVhc2U7ICAgIFxcbn1cXG4jYWRkLXRhc2stcG9wdXAgPiAuaW5wdXRzID4gaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwxMTgsMjU1LDAuOSk7XFxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiKDAgMTE4IDI1NSAvIDIzJSk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1wb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1wb3B1cCA+IGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG4jYWRkLXByb2plY3QtcG9wdXAgPiAuaW5wdXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2FkZC1wcm9qZWN0LXBvcHVwID4gLmlucHV0cyA+IGlucHV0Om5vdChbdHlwZT1cXFwiYnV0dG9uXFxcIl0pIHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMCAxNnB4IDAgMTJweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRiZGE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgY29sb3I6IHJnYig4LCA3LCA3KTtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIC4xcyBsaW5lYXIsYmFja2dyb3VuZC1jb2xvciAuMXMgbGluZWFyO1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIG1hcmdpbjogMTVweCAwO1xcblxcbn1cXG4jYWRkLXByb2plY3QtcG9wdXAgPiAuaW5wdXRzID4gaW5wdXQ6Zm9jdXM6bm90KFt0eXBlPVxcXCJidXR0b25cXFwiXSkge1xcbiAgICBib3JkZXItY29sb3I6ICMxYjk2ZmY7XFxuICAgIGNvbG9yOiB2YXIoLS1zZHMtYy1pbnB1dC10ZXh0LWNvbG9yLWZvY3VzKTtcXG4gICAgYm94LXNoYWRvdzogcmdiKDEsIDExOCwgMjExKSAwcHggMHB4IDNweCAwcHg7XFxufVxcbiNhZGQtcHJvamVjdC1wb3B1cCA+IC5pbnB1dHMgPiBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDU2cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzBmMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggMCByZ2IoMCAxMTggMjU1IC8gMzklKTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZSxjb2xvciAwLjJzIGVhc2UsYm94LXNoYWRvdyAwLjJzIGVhc2U7ICAgIFxcbn1cXG4jYWRkLXByb2plY3QtcG9wdXAgPiAuaW5wdXRzID4gaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwxMTgsMjU1LDAuOSk7XFxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiKDAgMTE4IDI1NSAvIDIzJSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw2Q0FBNkM7SUFDN0MscUVBQXFFO0FBQ3pFO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsMkNBQTJDO0FBQy9DO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7SUFD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O0lBQ1YsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDZDQUE2QztJQUM3QyxZQUFZO0lBQ1oscUVBQXFFO0FBQ3pFO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsMkNBQTJDO0FBQy9DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXG5cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcbm1haW4ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbmRpdi5wcm9qZWN0cy1iYXIge1xcbiAgICB3aWR0aDogMjMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxY2FlZmM7XFxufVxcbmRpdi5wcm9qZWN0cy1iYXIgPiBoMSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuZGl2LnByb2plY3RzLWJhciA+IC5wcm9qZWN0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuZGl2LnByb2plY3RzLWJhciA+IC5wcm9qZWN0cyA+IC5wcm9qZWN0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDU2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzBmMztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggMCByZ2IoMCAxMTggMjU1IC8gMzklKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UsY29sb3IgMC4ycyBlYXNlLGJveC1zaGFkb3cgMC4ycyBlYXNlO1xcbn1cXG5kaXYucHJvamVjdHMtYmFyID4gLnByb2plY3RzID4gLnByb2plY3Q6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwxMTgsMjU1LDAuOSk7XFxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiKDAgMTE4IDI1NSAvIDIzJSk7XFxufVxcbmRpdi5wcm9qZWN0cy1iYXIgPiAuYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmRpdi5wcm9qZWN0cy1iYXIgPiAuYnRuID4gI2FkZC1wcm9qZWN0IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwIDU2cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBjb2xvcjogIzY5Njk2OTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCAwIHJnYigwIDAgMCAvIDEwJSk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLGNvbG9yIDAuMnMgZWFzZSxib3gtc2hhZG93IDAuMnMgZWFzZTtcXG59XFxuZGl2LnByb2plY3RzLWJhciA+IC5idG4gPiAjYWRkLXByb2plY3Q6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2IoOTMgOTMgOTMgLyAyMyUpO1xcbn1cXG5cXG5cXG5cXG5cXG5kaXYuY29udGVudCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuZGl2LmNvbnRlbnQgPiAjcHJvamVjdC1uYW1lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG59XFxuZGl2LmNvbnRlbnQgPiAudGFza3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWNhZWZjO1xcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gOThweCk7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcbmRpdi5jb250ZW50ID4gLnRhc2tzID4gLnRhc2sge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDcwZjM7XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGJveC1zaGFkb3c6IDAgNi40cHggMTQuNHB4IDAgcmdiKDAgMCAwIC8gMTMlKSwgMCAxLjJweCAzLjZweCAwIHJnYigwIDAgMCAvIDExJSk7XFxufVxcbmRpdi5jb250ZW50ID4gLnRhc2tzID4gLnRhc2sgPiAjdGl0bGUge1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5kaXYuY29udGVudCA+IC50YXNrcyA+IC50YXNrID4gI2Rlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuZGl2LmNvbnRlbnQgPiAudGFza3MgPiAudGFzayA+ICNkYXRlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcbn1cXG5kaXYuY29udGVudCA+IC50YXNrcyA+IC50YXNrID4gLnJlbW92ZS10YXNrIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmRpdi5jb250ZW50ID4gLnRhc2tzID4gI2FkZC10YXNrIHtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMCA1NnB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgY29sb3I6ICM2OTY5Njk7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggMCByZ2IoMCAwIDAgLyAxMCUpO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZSxjb2xvciAwLjJzIGVhc2UsYm94LXNoYWRvdyAwLjJzIGVhc2U7XFxufVxcbmRpdi5jb250ZW50ID4gLnRhc2tzID4gI2FkZC10YXNrOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XFxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiKDkzIDkzIDkzIC8gMjMlKTtcXG59XFxuXFxuI2FkZC10YXNrLXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuI2FkZC10YXNrLXBvcHVwID4gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcbiNhZGQtdGFzay1wb3B1cCA+IC5pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jYWRkLXRhc2stcG9wdXAgPiAuaW5wdXRzID4gaW5wdXQ6bm90KFt0eXBlPVxcXCJidXR0b25cXFwiXSkge1xcbiAgICBcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAwIDE2cHggMCAxMnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGJkYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogcmdiKDgsIDcsIDcpO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjFzIGxpbmVhcixiYWNrZ3JvdW5kLWNvbG9yIC4xcyBsaW5lYXI7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgbWFyZ2luOiAxNXB4IDA7XFxuXFxufVxcbiNhZGQtdGFzay1wb3B1cCA+IC5pbnB1dHMgPiBpbnB1dDpmb2N1czpub3QoW3R5cGU9XFxcImJ1dHRvblxcXCJdKSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzFiOTZmZjtcXG4gICAgY29sb3I6IHZhcigtLXNkcy1jLWlucHV0LXRleHQtY29sb3ItZm9jdXMpO1xcbiAgICBib3gtc2hhZG93OiByZ2IoMSwgMTE4LCAyMTEpIDBweCAwcHggM3B4IDBweDtcXG59XFxuI2FkZC10YXNrLXBvcHVwID4gLmlucHV0cyA+IGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgNTZweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBsaW5lLWhlaWdodDogNDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MGYzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCAwIHJnYigwIDExOCAyNTUgLyAzOSUpO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLGNvbG9yIDAuMnMgZWFzZSxib3gtc2hhZG93IDAuMnMgZWFzZTsgICAgXFxufVxcbiNhZGQtdGFzay1wb3B1cCA+IC5pbnB1dHMgPiBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDExOCwyNTUsMC45KTtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2IoMCAxMTggMjU1IC8gMjMlKTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LXBvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LXBvcHVwID4gaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxufVxcbiNhZGQtcHJvamVjdC1wb3B1cCA+IC5pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jYWRkLXByb2plY3QtcG9wdXAgPiAuaW5wdXRzID4gaW5wdXQ6bm90KFt0eXBlPVxcXCJidXR0b25cXFwiXSkge1xcbiAgICBcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAwIDE2cHggMCAxMnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGJkYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBjb2xvcjogcmdiKDgsIDcsIDcpO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjFzIGxpbmVhcixiYWNrZ3JvdW5kLWNvbG9yIC4xcyBsaW5lYXI7XFxuICAgIHdpZHRoOiAyMzBweDtcXG4gICAgbWFyZ2luOiAxNXB4IDA7XFxuXFxufVxcbiNhZGQtcHJvamVjdC1wb3B1cCA+IC5pbnB1dHMgPiBpbnB1dDpmb2N1czpub3QoW3R5cGU9XFxcImJ1dHRvblxcXCJdKSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzFiOTZmZjtcXG4gICAgY29sb3I6IHZhcigtLXNkcy1jLWlucHV0LXRleHQtY29sb3ItZm9jdXMpO1xcbiAgICBib3gtc2hhZG93OiByZ2IoMSwgMTE4LCAyMTEpIDBweCAwcHggM3B4IDBweDtcXG59XFxuI2FkZC1wcm9qZWN0LXBvcHVwID4gLmlucHV0cyA+IGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgNTZweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBsaW5lLWhlaWdodDogNDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3MGYzO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTRweCAwIHJnYigwIDExOCAyNTUgLyAzOSUpO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLGNvbG9yIDAuMnMgZWFzZSxib3gtc2hhZG93IDAuMnMgZWFzZTsgICAgXFxufVxcbiNhZGQtcHJvamVjdC1wb3B1cCA+IC5pbnB1dHMgPiBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDExOCwyNTUsMC45KTtcXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2IoMCAxMTggMjU1IC8gMjMlKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBQcm9qZWN0LCBsb2FkUHJvamVjdCB9IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdFwiO1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgYWRkVGFzaywgcmVtb3ZlVGFzaywgdXBkYXRlU3RvcmFnZSB9IGZyb20gXCIuL21vZHVsZXMvZnVuY3NcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9wb3B1cFwiO1xuaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5cblxubGV0IHByb2plY3RzID0gW107XG5sZXQgY3VycmVudFByb2plY3QgPSBudWxsO1xuZXhwb3J0IHtcbiAgICBwcm9qZWN0cywgXG4gICAgY3VycmVudFByb2plY3Rcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0pzb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIHByb2plY3RzID0gcHJvamVjdHNKc29uO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2ldXG4gICAgICAgIHByb2plY3QuYWRkVGFzayA9IFByb2plY3QucHJvdG90eXBlLmFkZFRhc2s7XG4gICAgICAgIHByb2plY3QucmVtb3ZlVGFzayA9IFByb2plY3QucHJvdG90eXBlLnJlbW92ZVRhc2s7XG4gICAgICAgIGFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzIGRpdjpsYXN0LWNoaWxkXCIpO1xuICAgICAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgICAgICBsb2FkUHJvamVjdChwcm9qZWN0c1twcm9qZWN0cy5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB3aGVuIGRibCBjbGljayB0aGUgcHJvamVjdCB3aWxsIGJlIHJlbW92ZWRcbiAgICAgICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IENhbid0IFJlbW92ZSBBbGwgUHJvamVjdHNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IG1haW4gPiBkaXYucHJvamVjdHMtYmFyID4gZGl2LnByb2plY3RzXCIpO1xuICAgICAgICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQocHJvamVjdERpdik7XG4gICAgICAgICAgICBsb2FkUHJvamVjdChwcm9qZWN0c1swXSk7XG4gICAgICAgICAgICB1cGRhdGVTdG9yYWdlKClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbMF07XG4gICAgbG9hZFByb2plY3QocHJvamVjdHNbcHJvamVjdHMuaW5kZXhPZihjdXJyZW50UHJvamVjdCldKTtcbn0pO1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1wb3B1cCA+IGRpdiA+IGlucHV0W3R5cGU9YnV0dG9uXTpudGgtY2hpbGQoMilcIik7XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LXBvcHVwID4gZGl2ID4gaW5wdXRbdHlwZT10ZXh0XTpudGgtY2hpbGQoMSlcIik7XG4gICAgaWYgKHByb2plY3ROYW1lLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJZb3UgTXVzdCBQcm92aWRlIEEgUHJvamVjdCBOYW1lXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSlcbiAgICBhZGRQcm9qZWN0KHByb2plY3QpO1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzIGRpdjpsYXN0LWNoaWxkXCIpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIGxvYWRQcm9qZWN0KHByb2plY3RzW3Byb2plY3RzLmluZGV4T2YoY3VycmVudFByb2plY3QpXSk7XG4gICAgfSk7XG5cbiAgICAvLyB3aGVuIGRibCBjbGljayB0aGUgcHJvamVjdCB3aWxsIGJlIHJlbW92ZWRcbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91IENhbid0IFJlbW92ZSBBbGwgUHJvamVjdHNcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YocHJvamVjdCksIDEpO1xuICAgICAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5ID4gbWFpbiA+IGRpdi5wcm9qZWN0cy1iYXIgPiBkaXYucHJvamVjdHNcIik7XG4gICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKHByb2plY3REaXYpO1xuICAgICAgICBsb2FkUHJvamVjdChwcm9qZWN0c1swXSk7XG4gICAgICAgIHVwZGF0ZVN0b3JhZ2UoKVxuICAgIH0pO1xuICAgIHVwZGF0ZVN0b3JhZ2UoKVxuXG4gICAgcHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgIGNvbnN0IHByb2plY3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtcG9wdXBcIik7XG4gICAgcHJvamVjdFBvcHVwLnRvZ2dsZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcbn0pO1xuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1wb3B1cCA+IGRpdiA+IGlucHV0W3R5cGU9YnV0dG9uXTpudGgtY2hpbGQoNClcIik7XG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLXBvcHVwID4gZGl2ID4gaW5wdXRbdHlwZT10ZXh0XTpudGgtY2hpbGQoMSlcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLXBvcHVwID4gZGl2ID4gaW5wdXRbdHlwZT10ZXh0XTpudGgtY2hpbGQoMilcIik7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stcG9wdXAgPiBkaXYgPiBpbnB1dFt0eXBlPWRhdGVdOm50aC1jaGlsZCgzKVwiKTtcbiAgICBpZiAodGl0bGUudmFsdWUgPT0gXCJcIiB8fCBkZXNjcmlwdGlvbi52YWx1ZSA9PSBcIlwiIHx8IGRhdGUudmFsdWUgPT0gXCJcIikge1xuICAgICAgICBhbGVydChcIllvdSBNdXN0IEZpbGwgYWxsIGlucHV0c1wiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXNrID0gYWRkVGFzayh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGRhdGUudmFsdWUpO1xuICAgIHByb2plY3RzW3Byb2plY3RzLmluZGV4T2YoY3VycmVudFByb2plY3QpXS5hZGRUYXNrKHRhc2spO1xuICAgIHVwZGF0ZVN0b3JhZ2UoKVxuICAgIHJlbW92ZVRhc2sodGFzaylcbiAgICBjb25zdCB0YXNrUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLXBvcHVwXCIpO1xuICAgIHRhc2tQb3B1cC50b2dnbGVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XG4gICAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICBkYXRlLnZhbHVlID0gXCJcIjtcbn0pOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IGltYWdlIGZyb20gXCIuLi94LnN2Z1wiO1xuaW1wb3J0IHsgcHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4uL2luZGV4XCI7XG5cbmNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICBwcm9qZWN0c0Rpdi5pbnNlcnRCZWZvcmUocHJvamVjdERpdiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ0blwiKSk7XG59XG5jb25zdCBhZGRUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpO1xuICAgIGNvbnN0IFRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHkgPiBtYWluID4gZGl2LmNvbnRlbnQgPiBkaXZcIik7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgIGNvbnN0IHRpdGxlUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlUGFyYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpO1xuICAgIHRpdGxlUGFyYS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvblBhcmEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvblBhcmEudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgZGF0ZVBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkYXRlUGFyYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVcIik7XG4gICAgZGF0ZVBhcmEudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLXRhc2tcIik7XG4gICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWFnZSk7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlUGFyYSk7XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblBhcmEpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGF0ZVBhcmEpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIFRhc2tzRGl2Lmluc2VydEJlZm9yZSh0YXNrRGl2LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrXCIpKTtcbiAgICByZXR1cm4gdGFzaztcbn1cbmNvbnN0IHVwZGF0ZVN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNKc29uID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgcHJvamVjdHNKc29uKTtcbn1cbmNvbnN0IHJlbW92ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IG1haW4gPiBkaXYuY29udGVudCA+IGRpdiA+IGRpdjpudGgtbGFzdC1jaGlsZCgyKVwiKTtcbiAgICBjb25zdCByZW1vdmVUYXNrQnRuID0gdGFza0Rpdi5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgIHJlbW92ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IG1haW4gPiBkaXYuY29udGVudCA+IGRpdlwiKTtcbiAgICAgICAgdGFza3NEaXYucmVtb3ZlQ2hpbGQodGFza0Rpdik7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RzLmluZGV4T2YoY3VycmVudFByb2plY3QpXS5yZW1vdmVUYXNrKHRhc2spO1xuICAgICAgICB1cGRhdGVTdG9yYWdlKClcbiAgICB9KTtcbn1cbmV4cG9ydCB7XG4gICAgYWRkUHJvamVjdCxcbiAgICBhZGRUYXNrLFxuICAgIHJlbW92ZVRhc2ssXG4gICAgdXBkYXRlU3RvcmFnZVxufSIsImNvbnN0IGFkZFByb2plY3RQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuID4gI2FkZC1wcm9qZWN0XCIpO1xuYWRkUHJvamVjdFBvcHVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1wb3B1cFwiKTtcbiAgICBwcm9qZWN0UG9wdXAudG9nZ2xlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmNvbnN0IGFkZFRhc2tQb3B1cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2tcIik7XG5hZGRUYXNrUG9wdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCB0YXNrUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLXBvcHVwXCIpO1xuICAgIHRhc2tQb3B1cC50b2dnbGVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XG59KTsiLCJpbXBvcnQgeyBsb2FkVGFza3MgfSBmcm9tIFwiLi90YXNrXCI7XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG4gICAgYWRkVGFzayAodGFzaykge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICAgIFxuICAgIHJlbW92ZVRhc2sgKHRhc2spIHtcbiAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UodGhpcy50YXNrcy5pbmRleE9mKHRhc2spLCAxKTtcbiAgICB9XG59XG5cbmNvbnN0IGxvYWRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keSA+IG1haW4gPiBkaXYuY29udGVudCA+IGRpdlwiKTtcbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJib2R5ID4gbWFpbiA+IGRpdi5jb250ZW50ID4gZGl2ID4gZGl2LnRhc2s6bm90KDpudGgtY2hpbGQoMSkpXCIpO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgdGFza3NEaXYucmVtb3ZlQ2hpbGQodGFzaylcbiAgICB9KTtcbiAgICBcblxuICAgIGxvYWRUYXNrcyhwcm9qZWN0KTtcbn1cblxuZXhwb3J0IHtcbiAgICBQcm9qZWN0LFxuICAgIGxvYWRQcm9qZWN0XG59IiwiLypcbiA8ZGl2IGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInRpdGxlXCI+Q29tYjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJkZXNjcmlwdGlvblwiPkRvIHNvbWUgYnVsbCBzaGl0PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImRhdGVcIj4yMjAwLzIyLzIwPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIlwiIGlkPVwicmVtb3ZlLXRhc2tcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiovXG5cblxuaW1wb3J0IGltYWdlIGZyb20gXCIuLi94LnN2Z1wiO1xuaW1wb3J0IHsgcmVtb3ZlVGFzayB9IGZyb20gXCIuL2Z1bmNzXCI7XG5cbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfVxuICAgIFxufVxuXG5jb25zdCBsb2FkVGFza3MgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGFzayA9IHByb2plY3QudGFza3NbaV07XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVcIik7XG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIFxuICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWFnZSk7XG4gICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJlbW92ZS10YXNrXCIpO1xuXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChpbWcpO1xuXG5cbiAgICAgICAgdGFza3MuaW5zZXJ0QmVmb3JlKHRhc2tEaXYsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2tcIikpO1xuICAgICAgICByZW1vdmVUYXNrKHRhc2spO1xuICAgIH1cbn1cblxuZXhwb3J0IHtcbiAgICBUYXNrLFxuICAgIGxvYWRUYXNrc1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==