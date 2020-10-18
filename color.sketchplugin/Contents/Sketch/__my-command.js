var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/my-command.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/my-command.js":
/*!***************************!*\
  !*** ./src/my-command.js ***!
  \***************************/
/*! exports provided: default, goDark, goLight, importColorV */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goDark", function() { return goDark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goLight", function() { return goLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importColorV", function() { return importColorV; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);

var Swatch = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Swatch;
var doc = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
var Library = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Library; // documentation: https://developer.sketchapp.com/reference/api/

/* harmony default export */ __webpack_exports__["default"] = (function () {
  //sketch.UI.message("测试4 🙌")
  var swatch = Swatch.from({
    name: 'Rainbow',
    color: '#333333'
  });
  doc.swatches.push(swatch);
  var libraries = Library.getLibraries(); //const librarySwatches = libraries[1].getImportableSwatchReferencesForDocument(doc)
  //const librarySwatches2 = libraries[0].getImportableSwatchReferencesForDocument(doc)
  //const singleSwatch = librarySwatches[1].import()

  var libnum = libraries.length;

  for (var i = 0; i < libnum; i++) {
    console.log(libraries[i].id);
    console.log(libraries[i].name);
  } //sketch.UI.message(libraries[0].id)


  var allLayers = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.find('*'); // TODO: optimise this query: ShapePath, SymbolMaster, Text, SymbolInstance

  allLayers.forEach(function (layer) {
    layer.style.fills.concat(layer.style.borders).filter(function (item) {
      return item.fillType == 'Color';
    }).forEach(function (item) {
      /*
      for (var i = 0; i < 3; i++){
        const comswatch = librarySwatches[i].import()
        if (item.color === comswatch.color){
          item.color = librarySwatches2[i].import().referencingColor
        }
      }
       sketch.UI.message(librarySwatches.length)
      console.log(item.color)
      console.log(item.name)
      console.log(singleSwatch.color)
      */
    }); // Previous actions don't work for Text Layer colors that are colored using TextColor, so let's fix that:
  });
});
function goDark() {
  var darklib = importColorV().dark;
  var lightlib = importColorV().light;
  var darkSwatches = darklib.getImportableSwatchReferencesForDocument(doc);
  var lightSwatches = lightlib.getImportableSwatchReferencesForDocument(doc);
  console.log(darkSwatches.length);
  console.log(lightSwatches.length); //生成对比数据

  var colorcompare = new Array();

  for (var i = 0; i < 112; i++) {
    colorcompare[i] = lightSwatches[i].import().color;
  }

  var allLayers = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.find('*'); // 开始遍历

  allLayers.forEach(function (layer) {
    layer.style.fills.concat(layer.style.borders).filter(function (item) {
      return item.fillType == 'Color';
    }).forEach(function (item) {
      for (var i = 0; i < 112; i++) {
        //const comswatch = lightSwatches[i].import()
        if (item.color === colorcompare[i]) {
          item.color = darkSwatches[i].import().referencingColor;
        }
      }
    });

    if (layer.style.textColor) {
      var layerColor = layer.style.textColor;

      for (var i = 0; i < 112; i++) {
        //const comswatch = lightSwatches[i].import()
        if (layerColor === colorcompare[i]) {
          layer.style.textColor = darkSwatches[i].import().referencingColor;
        }
      }
    }
  });
}
function goLight() {
  var darklib = importColorV().dark;
  var lightlib = importColorV().light;
  var darkSwatches = darklib.getImportableSwatchReferencesForDocument(doc);
  var lightSwatches = lightlib.getImportableSwatchReferencesForDocument(doc);
  console.log(darkSwatches.length);
  console.log(lightSwatches.length); //生成对比数据

  var colorcompare = new Array();

  for (var i = 0; i < 112; i++) {
    colorcompare[i] = darkSwatches[i].import().color;
  }

  var allLayers = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.find('*'); // 开始遍历

  allLayers.forEach(function (layer) {
    layer.style.fills.concat(layer.style.borders).filter(function (item) {
      return item.fillType == 'Color';
    }).forEach(function (item) {
      for (var i = 0; i < 112; i++) {
        //const comswatch = darkSwatches[i].import()
        if (item.color === colorcompare[i]) {
          item.color = lightSwatches[i].import().referencingColor;
        }
      }
    });

    if (layer.style.textColor) {
      var layerColor = layer.style.textColor;

      for (var i = 0; i < 112; i++) {
        //const comswatch = darkSwatches[i].import()
        if (layerColor === colorcompare[i]) {
          layer.style.textColor = lightSwatches[i].import().referencingColor;
        }
      }
    }
  });
}
function importColorV() {
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("开心 🙌"); //确认活着

  var lib = Library.getLibraries(); //引入全部Library

  var libnum = lib.length; //library 数量
  //找到并存储两个library

  for (var i = 0; i < libnum; i++) {
    if (lib[i].id === "4a8fa07e-0b06-488d-9910-5ed49dc7f450") {
      var darklib = lib[i];
    }

    if (lib[i].id === "1dacf461-18c4-4132-893a-776d8b18894e") {
      var lightlib = lib[i];
    }
  }

  return {
    dark: darklib,
    light: lightlib
  };
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['goDark'] = __skpm_run.bind(this, 'goDark');
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['goLight'] = __skpm_run.bind(this, 'goLight')

//# sourceMappingURL=__my-command.js.map