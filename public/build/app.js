(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tom_select_dist_css_tom_select_bootstrap5_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tom-select/dist/css/tom-select.bootstrap5.css */ "./node_modules/tom-select/dist/css/tom-select.bootstrap5.css");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-autocomplete--autocomplete': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-autocomplete/dist/controller.js */ "./vendor/symfony/ux-autocomplete/assets/dist/controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toasts */ "./assets/toasts.js");
/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toasts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _javascript_distance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript/distance.js */ "./assets/javascript/distance.js");
/* harmony import */ var _javascript_distance_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_javascript_distance_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _javascript_job_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./javascript/job.js */ "./assets/javascript/job.js");
/* harmony import */ var _javascript_job_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_javascript_job_js__WEBPACK_IMPORTED_MODULE_4__);
// const $ = require('jquery');
// global.$ = global.jQuery = $;
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application

// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");




// $(document).ready(function() {
//     // you may need to change this code if you are not using Bootstrap Datepicker
//     $('.js-datepicker').datepicker({
//         format: 'yyyy-mm-dd'
//     });
// });

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/javascript/distance.js":
/*!***************************************!*\
  !*** ./assets/javascript/distance.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
function distanceCalc(lat1, lon1, lat2, lon2, unit) {
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    return dist;
  }
}

// Select elements by their data attribute
var positions = document.querySelectorAll('[data-entry-info]');

// Map over each element and extract the data value
var infoPositions = Array.from(positions).map(function (item) {
  return JSON.parse(item.dataset.entryInfo);
});
infoPositions.map(function (infoPosition) {
  var distance = distanceCalc(infoPosition.userLatitude, infoPosition.userLongitude, infoPosition.businessLatitude, infoPosition.businessLongitude, 'K');
  var distanceRounded = Math.round(distance * 1) / 1;
  var distanceElement = document.getElementById(infoPosition.id);
  distanceElement.innerHTML = distanceRounded + ' km';
});

/***/ }),

/***/ "./assets/javascript/job.js":
/*!**********************************!*\
  !*** ./assets/javascript/job.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
$("#stopJob").hide();
$("#job_tags_1").on("click", function () {
  if ($(this).is(":checked")) {
    $("#stopJob").show();
  } else {
    $("#stopJob").hide();
  }
});

// // div address
// $("#address").hide();
// $( "#job_checkbox_address" ).on("click", function() {
//     if($(this).val() == "Oui") {
//         $("#address").hide();
//     }else{
//         $("#address").show();
//     }
// });

/***/ }),

/***/ "./assets/toasts.js":
/*!**************************!*\
  !*** ./assets/toasts.js ***!
  \**************************/
/***/ (() => {

var toastLiveExample = document.getElementById('liveToast');
if (toastLiveExample) {
  toastLiveExample.classList.add('show');
}

/***/ }),

/***/ "./vendor/symfony/ux-autocomplete/assets/dist/controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-autocomplete/assets/dist/controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! tom-select */ "./node_modules/tom-select/dist/js/tom-select.complete.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(tom_select__WEBPACK_IMPORTED_MODULE_28__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






























/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
var _default_1_instances, _default_1_getCommonConfig, _default_1_createAutocomplete, _default_1_createAutocompleteWithHtmlContents, _default_1_createAutocompleteWithRemoteData, _default_1_stripTags, _default_1_mergeObjects, _default_1_createTomSelect;
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    var _this;
    _classCallCheck(this, default_1);
    _this = _super.apply(this, arguments);
    _default_1_instances.add(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(default_1, [{
    key: "initialize",
    value: function initialize() {
      this.element.setAttribute('data-live-ignore', '');
      if (this.element.id) {
        var label = document.querySelector("label[for=\"".concat(this.element.id, "\"]"));
        if (label) {
          label.setAttribute('data-live-ignore', '');
        }
      }
    }
  }, {
    key: "connect",
    value: function connect() {
      if (this.urlValue) {
        this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocompleteWithRemoteData).call(this, this.urlValue, this.minCharactersValue);
        return;
      }
      if (this.optionsAsHtmlValue) {
        this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocompleteWithHtmlContents).call(this);
        return;
      }
      this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocomplete).call(this);
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.tomSelect.revertSettings.innerHTML = this.element.innerHTML;
      this.tomSelect.destroy();
    }
  }, {
    key: "selectElement",
    get: function get() {
      if (!(this.element instanceof HTMLSelectElement)) {
        return null;
      }
      return this.element;
    }
  }, {
    key: "formElement",
    get: function get() {
      if (!(this.element instanceof HTMLInputElement) && !(this.element instanceof HTMLSelectElement)) {
        throw new Error('Autocomplete Stimulus controller can only be used on an <input> or <select>.');
      }
      return this.element;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'autocomplete'
      });
    }
  }, {
    key: "preload",
    get: function get() {
      if (!this.hasPreloadValue) {
        return 'focus';
      }
      if (this.preloadValue == 'false') {
        return false;
      }
      if (this.preloadValue == 'true') {
        return true;
      }
      return this.preloadValue;
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_27__.Controller);
_default_1_instances = new WeakSet(), _default_1_getCommonConfig = function _default_1_getCommonConfig() {
  var _this2 = this;
  var plugins = {};
  var isMultiple = !this.selectElement || this.selectElement.multiple;
  if (!this.formElement.disabled && !isMultiple) {
    plugins.clear_button = {
      title: ''
    };
  }
  if (isMultiple) {
    plugins.remove_button = {
      title: ''
    };
  }
  if (this.urlValue) {
    plugins.virtual_scroll = {};
  }
  var render = {
    no_results: function no_results() {
      return "<div class=\"no-results\">".concat(_this2.noResultsFoundTextValue, "</div>");
    }
  };
  var config = {
    render: render,
    plugins: plugins,
    onItemAdd: function onItemAdd() {
      _this2.tomSelect.setTextboxValue('');
    },
    onInitialize: function onInitialize() {
      var tomSelect = this;
      tomSelect.wrapper.setAttribute('data-live-ignore', '');
    },
    closeAfterSelect: true
  };
  if (!this.selectElement && !this.urlValue) {
    config.shouldLoad = function () {
      return false;
    };
  }
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, config, this.tomSelectOptionsValue);
}, _default_1_createAutocomplete = function _default_1_createAutocomplete() {
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this), {
    maxOptions: this.selectElement ? this.selectElement.options.length : 50
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_createAutocompleteWithHtmlContents = function _default_1_createAutocompleteWithHtmlContents() {
  var _this3 = this;
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this), {
    maxOptions: this.selectElement ? this.selectElement.options.length : 50,
    score: function score(search) {
      var scoringFunction = _this3.tomSelect.getScoreFunction(search);
      return function (item) {
        return scoringFunction(Object.assign(Object.assign({}, item), {
          text: __classPrivateFieldGet(_this3, _default_1_instances, "m", _default_1_stripTags).call(_this3, item.text)
        }));
      };
    },
    render: {
      item: function item(_item) {
        return "<div>".concat(_item.text, "</div>");
      },
      option: function option(item) {
        return "<div>".concat(item.text, "</div>");
      }
    }
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_createAutocompleteWithRemoteData = function _default_1_createAutocompleteWithRemoteData(autocompleteEndpointUrl, minCharacterLength) {
  var _this5 = this;
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this), {
    firstUrl: function firstUrl(query) {
      var separator = autocompleteEndpointUrl.includes('?') ? '&' : '?';
      return "".concat(autocompleteEndpointUrl).concat(separator, "query=").concat(encodeURIComponent(query));
    },
    load: function load(query, callback) {
      var _this4 = this;
      var url = this.getUrl(query);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this4.setNextUrl(query, json.next_page);
        callback(json.results);
      })["catch"](function () {
        return callback();
      });
    },
    shouldLoad: function shouldLoad(query) {
      return query.length >= minCharacterLength;
    },
    score: function score(search) {
      return function (item) {
        return 1;
      };
    },
    render: {
      option: function option(item) {
        return "<div>".concat(item.text, "</div>");
      },
      item: function item(_item2) {
        return "<div>".concat(_item2.text, "</div>");
      },
      no_more_results: function no_more_results() {
        return "<div class=\"no-more-results\">".concat(_this5.noMoreResultsTextValue, "</div>");
      },
      no_results: function no_results() {
        return "<div class=\"no-results\">".concat(_this5.noResultsFoundTextValue, "</div>");
      }
    },
    preload: this.preload
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_stripTags = function _default_1_stripTags(string) {
  return string.replace(/(<([^>]+)>)/gi, '');
}, _default_1_mergeObjects = function _default_1_mergeObjects(object1, object2) {
  return Object.assign(Object.assign({}, object1), object2);
}, _default_1_createTomSelect = function _default_1_createTomSelect(options) {
  this.dispatchEvent('pre-connect', {
    options: options
  });
  var tomSelect = new (tom_select__WEBPACK_IMPORTED_MODULE_28___default())(this.formElement, options);
  this.dispatchEvent('connect', {
    tomSelect: tomSelect,
    options: options
  });
  return tomSelect;
};
default_1.values = {
  url: String,
  optionsAsHtml: Boolean,
  noResultsFoundText: String,
  noMoreResultsText: String,
  minCharacters: {
    type: Number,
    "default": 3
  },
  tomSelectOptions: Object,
  preload: String
};


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap_dist_js_boo-76a911"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxDQUFDLGFBQWEsRUFBRTtJQUFFZ0MsT0FBTyxFQUFQQTtFQUFRLENBQUMsQ0FBQztFQUM5QyxJQUFNekMsU0FBUyxHQUFHLElBQUkzQixvREFBUyxDQUFDLElBQUksQ0FBQ2tELFdBQVcsRUFBRWtCLE9BQU8sQ0FBQztFQUMxRCxJQUFJLENBQUNoQyxhQUFhLENBQUMsU0FBUyxFQUFFO0lBQUVULFNBQVMsRUFBVEEsU0FBUztJQUFFeUMsT0FBTyxFQUFQQTtFQUFRLENBQUMsQ0FBQztFQUNyRCxPQUFPekMsU0FBUztBQUNwQixDQUFDO0FBQ0RULFNBQVMsQ0FBQ3dGLE1BQU0sR0FBRztFQUNmaEIsR0FBRyxFQUFFaUIsTUFBTTtFQUNYQyxhQUFhLEVBQUVDLE9BQU87RUFDdEJDLGtCQUFrQixFQUFFSCxNQUFNO0VBQzFCSSxpQkFBaUIsRUFBRUosTUFBTTtFQUN6QkssYUFBYSxFQUFFO0lBQUVDLElBQUksRUFBRUMsTUFBTTtJQUFFLFdBQVM7RUFBRSxDQUFDO0VBQzNDQyxnQkFBZ0IsRUFBRXhDLE1BQU07RUFDeEIwQixPQUFPLEVBQUVNO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3RNRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvamF2YXNjcmlwdC9kaXN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvamF2YXNjcmlwdC9qb2IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RvYXN0cy5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1hdXRvY29tcGxldGUvYXNzZXRzL2Rpc3QvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5zY3NzPzhmNTkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiaW1wb3J0ICd0b20tc2VsZWN0L2Rpc3QvY3NzL3RvbS1zZWxlY3QuYm9vdHN0cmFwNS5jc3MnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtYXV0b2NvbXBsZXRlLS1hdXRvY29tcGxldGUnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtYXV0b2NvbXBsZXRlL2Rpc3QvY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvLyBjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vIGdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcclxuXHJcbi8vIHN0YXJ0IHRoZSBTdGltdWx1cyBhcHBsaWNhdGlvblxyXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcclxuLy8gdGhpcyBcIm1vZGlmaWVzXCIgdGhlIGpxdWVyeSBtb2R1bGU6IGFkZGluZyBiZWhhdmlvciB0byBpdFxyXG4vLyB0aGUgYm9vdHN0cmFwIG1vZHVsZSBkb2Vzbid0IGV4cG9ydC9yZXR1cm4gYW55dGhpbmdcclxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbmltcG9ydCAnLi90b2FzdHMnO1xyXG5pbXBvcnQgJy4vamF2YXNjcmlwdC9kaXN0YW5jZS5qcyc7XHJcbmltcG9ydCAnLi9qYXZhc2NyaXB0L2pvYi5qcyc7XHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuLy8gICAgIC8vIHlvdSBtYXkgbmVlZCB0byBjaGFuZ2UgdGhpcyBjb2RlIGlmIHlvdSBhcmUgbm90IHVzaW5nIEJvb3RzdHJhcCBEYXRlcGlja2VyXHJcbi8vICAgICAkKCcuanMtZGF0ZXBpY2tlcicpLmRhdGVwaWNrZXIoe1xyXG4vLyAgICAgICAgIGZvcm1hdDogJ3l5eXktbW0tZGQnXHJcbi8vICAgICB9KTtcclxuLy8gfSk7XHJcblxyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsImZ1bmN0aW9uIGRpc3RhbmNlQ2FsYyhsYXQxLCBsb24xLCBsYXQyLCBsb24yLCB1bml0KSB7XHJcbiAgICBpZiAoKGxhdDEgPT0gbGF0MikgJiYgKGxvbjEgPT0gbG9uMikpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciByYWRsYXQxID0gTWF0aC5QSSAqIGxhdDEvMTgwO1xyXG4gICAgICAgIHZhciByYWRsYXQyID0gTWF0aC5QSSAqIGxhdDIvMTgwO1xyXG4gICAgICAgIHZhciB0aGV0YSA9IGxvbjEtbG9uMjtcclxuICAgICAgICB2YXIgcmFkdGhldGEgPSBNYXRoLlBJICogdGhldGEvMTgwO1xyXG4gICAgICAgIHZhciBkaXN0ID0gTWF0aC5zaW4ocmFkbGF0MSkgKiBNYXRoLnNpbihyYWRsYXQyKSArIE1hdGguY29zKHJhZGxhdDEpICogTWF0aC5jb3MocmFkbGF0MikgKiBNYXRoLmNvcyhyYWR0aGV0YSk7XHJcbiAgICAgICAgaWYgKGRpc3QgPiAxKSB7XHJcbiAgICAgICAgICAgIGRpc3QgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXN0ID0gTWF0aC5hY29zKGRpc3QpO1xyXG4gICAgICAgIGRpc3QgPSBkaXN0ICogMTgwL01hdGguUEk7XHJcbiAgICAgICAgZGlzdCA9IGRpc3QgKiA2MCAqIDEuMTUxNTtcclxuICAgICAgICBpZiAodW5pdD09XCJLXCIpIHsgZGlzdCA9IGRpc3QgKiAxLjYwOTM0NCB9XHJcbiAgICAgICAgaWYgKHVuaXQ9PVwiTlwiKSB7IGRpc3QgPSBkaXN0ICogMC44Njg0IH1cclxuICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gU2VsZWN0IGVsZW1lbnRzIGJ5IHRoZWlyIGRhdGEgYXR0cmlidXRlXHJcbmNvbnN0IHBvc2l0aW9ucyA9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1lbnRyeS1pbmZvXScpO1xyXG5cclxuLy8gTWFwIG92ZXIgZWFjaCBlbGVtZW50IGFuZCBleHRyYWN0IHRoZSBkYXRhIHZhbHVlXHJcbmNvbnN0IGluZm9Qb3NpdGlvbnMgPVxyXG4gICAgQXJyYXkuZnJvbShwb3NpdGlvbnMpLm1hcChcclxuICAgICAgICBpdGVtID0+IEpTT04ucGFyc2UoaXRlbS5kYXRhc2V0LmVudHJ5SW5mbylcclxuICAgICk7XHJcblxyXG5pbmZvUG9zaXRpb25zLm1hcChpbmZvUG9zaXRpb24gPT4ge1xyXG4gICAgXHJcbiAgICBsZXQgZGlzdGFuY2UgPSBkaXN0YW5jZUNhbGMoaW5mb1Bvc2l0aW9uLnVzZXJMYXRpdHVkZSwgaW5mb1Bvc2l0aW9uLnVzZXJMb25naXR1ZGUsIGluZm9Qb3NpdGlvbi5idXNpbmVzc0xhdGl0dWRlLCBpbmZvUG9zaXRpb24uYnVzaW5lc3NMb25naXR1ZGUsICdLJyk7XHJcbiAgICBsZXQgZGlzdGFuY2VSb3VuZGVkID0gTWF0aC5yb3VuZChkaXN0YW5jZSAqIDEpIC8gMTtcclxuICAgIGxldCBkaXN0YW5jZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbmZvUG9zaXRpb24uaWQpO1xyXG4gICAgZGlzdGFuY2VFbGVtZW50LmlubmVySFRNTCA9IGRpc3RhbmNlUm91bmRlZCArICcga20nO1xyXG59KSIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbiQoXCIjc3RvcEpvYlwiKS5oaWRlKCk7XHJcblxyXG4kKCBcIiNqb2JfdGFnc18xXCIgKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYoJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKSB7XHJcbiAgICAgICAgJChcIiNzdG9wSm9iXCIpLnNob3coKTtcclxuICAgIH1lbHNle1xyXG4gICAgICAgICQoXCIjc3RvcEpvYlwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gLy8gZGl2IGFkZHJlc3NcclxuLy8gJChcIiNhZGRyZXNzXCIpLmhpZGUoKTtcclxuLy8gJCggXCIjam9iX2NoZWNrYm94X2FkZHJlc3NcIiApLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICBpZigkKHRoaXMpLnZhbCgpID09IFwiT3VpXCIpIHtcclxuLy8gICAgICAgICAkKFwiI2FkZHJlc3NcIikuaGlkZSgpO1xyXG4vLyAgICAgfWVsc2V7XHJcbi8vICAgICAgICAgJChcIiNhZGRyZXNzXCIpLnNob3coKTtcclxuLy8gICAgIH1cclxuLy8gfSk7IiwidmFyIHRvYXN0TGl2ZUV4YW1wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZVRvYXN0JylcclxuXHJcbmlmICh0b2FzdExpdmVFeGFtcGxlKSB7XHJcbiAgICB0b2FzdExpdmVFeGFtcGxlLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxufSIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5pbXBvcnQgVG9tU2VsZWN0IGZyb20gJ3RvbS1zZWxlY3QnO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5mdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG52YXIgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIF9kZWZhdWx0XzFfZ2V0Q29tbW9uQ29uZmlnLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZSwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhSZW1vdGVEYXRhLCBfZGVmYXVsdF8xX3N0cmlwVGFncywgX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMsIF9kZWZhdWx0XzFfY3JlYXRlVG9tU2VsZWN0O1xyXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgX2RlZmF1bHRfMV9pbnN0YW5jZXMuYWRkKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWxpdmUtaWdub3JlJywgJycpO1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3RoaXMuZWxlbWVudC5pZH1cIl1gKTtcclxuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGl2ZS1pZ25vcmUnLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVybFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9tU2VsZWN0ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEpLmNhbGwodGhpcywgdGhpcy51cmxWYWx1ZSwgdGhpcy5taW5DaGFyYWN0ZXJzVmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNBc0h0bWxWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhIdG1sQ29udGVudHMpLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b21TZWxlY3QgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGUpLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMudG9tU2VsZWN0LnJldmVydFNldHRpbmdzLmlubmVySFRNTCA9IHRoaXMuZWxlbWVudC5pbm5lckhUTUw7XHJcbiAgICAgICAgdGhpcy50b21TZWxlY3QuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNlbGVjdEVsZW1lbnQoKSB7XHJcbiAgICAgICAgaWYgKCEodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IGZvcm1FbGVtZW50KCkge1xyXG4gICAgICAgIGlmICghKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpICYmICEodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXV0b2NvbXBsZXRlIFN0aW11bHVzIGNvbnRyb2xsZXIgY2FuIG9ubHkgYmUgdXNlZCBvbiBhbiA8aW5wdXQ+IG9yIDxzZWxlY3Q+LicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAnYXV0b2NvbXBsZXRlJyB9KTtcclxuICAgIH1cclxuICAgIGdldCBwcmVsb2FkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5oYXNQcmVsb2FkVmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdmb2N1cyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByZWxvYWRWYWx1ZSA9PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJlbG9hZFZhbHVlID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlbG9hZFZhbHVlO1xyXG4gICAgfVxyXG59XHJcbl9kZWZhdWx0XzFfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcgPSBmdW5jdGlvbiBfZGVmYXVsdF8xX2dldENvbW1vbkNvbmZpZygpIHtcclxuICAgIGNvbnN0IHBsdWdpbnMgPSB7fTtcclxuICAgIGNvbnN0IGlzTXVsdGlwbGUgPSAhdGhpcy5zZWxlY3RFbGVtZW50IHx8IHRoaXMuc2VsZWN0RWxlbWVudC5tdWx0aXBsZTtcclxuICAgIGlmICghdGhpcy5mb3JtRWxlbWVudC5kaXNhYmxlZCAmJiAhaXNNdWx0aXBsZSkge1xyXG4gICAgICAgIHBsdWdpbnMuY2xlYXJfYnV0dG9uID0geyB0aXRsZTogJycgfTtcclxuICAgIH1cclxuICAgIGlmIChpc011bHRpcGxlKSB7XHJcbiAgICAgICAgcGx1Z2lucy5yZW1vdmVfYnV0dG9uID0geyB0aXRsZTogJycgfTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnVybFZhbHVlKSB7XHJcbiAgICAgICAgcGx1Z2lucy52aXJ0dWFsX3Njcm9sbCA9IHt9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVuZGVyID0ge1xyXG4gICAgICAgIG5vX3Jlc3VsdHM6ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0c1wiPiR7dGhpcy5ub1Jlc3VsdHNGb3VuZFRleHRWYWx1ZX08L2Rpdj5gO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIHJlbmRlcixcclxuICAgICAgICBwbHVnaW5zLFxyXG4gICAgICAgIG9uSXRlbUFkZDogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdC5zZXRUZXh0Ym94VmFsdWUoJycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Jbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvbVNlbGVjdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRvbVNlbGVjdC53cmFwcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1saXZlLWlnbm9yZScsICcnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlQWZ0ZXJTZWxlY3Q6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgaWYgKCF0aGlzLnNlbGVjdEVsZW1lbnQgJiYgIXRoaXMudXJsVmFsdWUpIHtcclxuICAgICAgICBjb25maWcuc2hvdWxkTG9hZCA9ICgpID0+IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBjb25maWcsIHRoaXMudG9tU2VsZWN0T3B0aW9uc1ZhbHVlKTtcclxufSwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGUgPSBmdW5jdGlvbiBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZSgpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcpLmNhbGwodGhpcyksIHtcclxuICAgICAgICBtYXhPcHRpb25zOiB0aGlzLnNlbGVjdEVsZW1lbnQgPyB0aGlzLnNlbGVjdEVsZW1lbnQub3B0aW9ucy5sZW5ndGggOiA1MCxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdCkuY2FsbCh0aGlzLCBjb25maWcpO1xyXG59LCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhIdG1sQ29udGVudHMgPSBmdW5jdGlvbiBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhIdG1sQ29udGVudHMoKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMpLmNhbGwodGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfZ2V0Q29tbW9uQ29uZmlnKS5jYWxsKHRoaXMpLCB7XHJcbiAgICAgICAgbWF4T3B0aW9uczogdGhpcy5zZWxlY3RFbGVtZW50ID8gdGhpcy5zZWxlY3RFbGVtZW50Lm9wdGlvbnMubGVuZ3RoIDogNTAsXHJcbiAgICAgICAgc2NvcmU6IChzZWFyY2gpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NvcmluZ0Z1bmN0aW9uID0gdGhpcy50b21TZWxlY3QuZ2V0U2NvcmVGdW5jdGlvbihzZWFyY2gpO1xyXG4gICAgICAgICAgICByZXR1cm4gKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY29yaW5nRnVuY3Rpb24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBpdGVtKSwgeyB0ZXh0OiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9zdHJpcFRhZ3MpLmNhbGwodGhpcywgaXRlbS50ZXh0KSB9KSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW5kZXI6IHtcclxuICAgICAgICAgICAgaXRlbTogZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj4ke2l0ZW0udGV4dH08L2Rpdj5gO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb246IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+JHtpdGVtLnRleHR9PC9kaXY+YDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfY3JlYXRlVG9tU2VsZWN0KS5jYWxsKHRoaXMsIGNvbmZpZyk7XHJcbn0sIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEgPSBmdW5jdGlvbiBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhSZW1vdGVEYXRhKGF1dG9jb21wbGV0ZUVuZHBvaW50VXJsLCBtaW5DaGFyYWN0ZXJMZW5ndGgpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcpLmNhbGwodGhpcyksIHtcclxuICAgICAgICBmaXJzdFVybDogKHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGF1dG9jb21wbGV0ZUVuZHBvaW50VXJsLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyc7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHthdXRvY29tcGxldGVFbmRwb2ludFVybH0ke3NlcGFyYXRvcn1xdWVyeT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvYWQ6IGZ1bmN0aW9uIChxdWVyeSwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocXVlcnkpO1xyXG4gICAgICAgICAgICBmZXRjaCh1cmwpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE5leHRVcmwocXVlcnksIGpzb24ubmV4dF9wYWdlKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGpzb24ucmVzdWx0cyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4gY2FsbGJhY2soKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG91bGRMb2FkOiBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5Lmxlbmd0aCA+PSBtaW5DaGFyYWN0ZXJMZW5ndGg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY29yZTogZnVuY3Rpb24gKHNlYXJjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVuZGVyOiB7XHJcbiAgICAgICAgICAgIG9wdGlvbjogZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj4ke2l0ZW0udGV4dH08L2Rpdj5gO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpdGVtOiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PiR7aXRlbS50ZXh0fTwvZGl2PmA7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5vX21vcmVfcmVzdWx0czogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibm8tbW9yZS1yZXN1bHRzXCI+JHt0aGlzLm5vTW9yZVJlc3VsdHNUZXh0VmFsdWV9PC9kaXY+YDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm9fcmVzdWx0czogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0c1wiPiR7dGhpcy5ub1Jlc3VsdHNGb3VuZFRleHRWYWx1ZX08L2Rpdj5gO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJlbG9hZDogdGhpcy5wcmVsb2FkLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfY3JlYXRlVG9tU2VsZWN0KS5jYWxsKHRoaXMsIGNvbmZpZyk7XHJcbn0sIF9kZWZhdWx0XzFfc3RyaXBUYWdzID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9zdHJpcFRhZ3Moc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyg8KFtePl0rKT4pL2dpLCAnJyk7XHJcbn0sIF9kZWZhdWx0XzFfbWVyZ2VPYmplY3RzID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMob2JqZWN0MSwgb2JqZWN0Mikge1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb2JqZWN0MSksIG9iamVjdDIpO1xyXG59LCBfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdCA9IGZ1bmN0aW9uIF9kZWZhdWx0XzFfY3JlYXRlVG9tU2VsZWN0KG9wdGlvbnMpIHtcclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgncHJlLWNvbm5lY3QnLCB7IG9wdGlvbnMgfSk7XHJcbiAgICBjb25zdCB0b21TZWxlY3QgPSBuZXcgVG9tU2VsZWN0KHRoaXMuZm9ybUVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0JywgeyB0b21TZWxlY3QsIG9wdGlvbnMgfSk7XHJcbiAgICByZXR1cm4gdG9tU2VsZWN0O1xyXG59O1xyXG5kZWZhdWx0XzEudmFsdWVzID0ge1xyXG4gICAgdXJsOiBTdHJpbmcsXHJcbiAgICBvcHRpb25zQXNIdG1sOiBCb29sZWFuLFxyXG4gICAgbm9SZXN1bHRzRm91bmRUZXh0OiBTdHJpbmcsXHJcbiAgICBub01vcmVSZXN1bHRzVGV4dDogU3RyaW5nLFxyXG4gICAgbWluQ2hhcmFjdGVyczogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDMgfSxcclxuICAgIHRvbVNlbGVjdE9wdGlvbnM6IE9iamVjdCxcclxuICAgIHByZWxvYWQ6IFN0cmluZyxcclxufTtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiZGVmYXVsdCIsInJlcXVpcmUiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCIsImRpc3RhbmNlQ2FsYyIsImxhdDEiLCJsb24xIiwibGF0MiIsImxvbjIiLCJ1bml0IiwicmFkbGF0MSIsIk1hdGgiLCJQSSIsInJhZGxhdDIiLCJ0aGV0YSIsInJhZHRoZXRhIiwiZGlzdCIsInNpbiIsImNvcyIsImFjb3MiLCJwb3NpdGlvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbmZvUG9zaXRpb25zIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiaXRlbSIsIkpTT04iLCJwYXJzZSIsImRhdGFzZXQiLCJlbnRyeUluZm8iLCJpbmZvUG9zaXRpb24iLCJkaXN0YW5jZSIsInVzZXJMYXRpdHVkZSIsInVzZXJMb25naXR1ZGUiLCJidXNpbmVzc0xhdGl0dWRlIiwiYnVzaW5lc3NMb25naXR1ZGUiLCJkaXN0YW5jZVJvdW5kZWQiLCJyb3VuZCIsImRpc3RhbmNlRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiaWQiLCJpbm5lckhUTUwiLCIkIiwiaGlkZSIsIm9uIiwiaXMiLCJzaG93IiwidG9hc3RMaXZlRXhhbXBsZSIsImNsYXNzTGlzdCIsImFkZCIsIlRvbVNlbGVjdCIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsImYiLCJUeXBlRXJyb3IiLCJoYXMiLCJjYWxsIiwiZ2V0IiwiX2RlZmF1bHRfMV9pbnN0YW5jZXMiLCJfZGVmYXVsdF8xX2dldENvbW1vbkNvbmZpZyIsIl9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlIiwiX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzIiwiX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoUmVtb3RlRGF0YSIsIl9kZWZhdWx0XzFfc3RyaXBUYWdzIiwiX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMiLCJfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdCIsImRlZmF1bHRfMSIsIl90aGlzIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImluaXRpYWxpemUiLCJzZXRBdHRyaWJ1dGUiLCJsYWJlbCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJ1cmxWYWx1ZSIsInRvbVNlbGVjdCIsIm1pbkNoYXJhY3RlcnNWYWx1ZSIsIm9wdGlvbnNBc0h0bWxWYWx1ZSIsImRpc2Nvbm5lY3QiLCJyZXZlcnRTZXR0aW5ncyIsImRlc3Ryb3kiLCJIVE1MU2VsZWN0RWxlbWVudCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJFcnJvciIsImRpc3BhdGNoRXZlbnQiLCJuYW1lIiwicGF5bG9hZCIsImRpc3BhdGNoIiwiZGV0YWlsIiwicHJlZml4IiwiaGFzUHJlbG9hZFZhbHVlIiwicHJlbG9hZFZhbHVlIiwiV2Vha1NldCIsIl90aGlzMiIsInBsdWdpbnMiLCJpc011bHRpcGxlIiwic2VsZWN0RWxlbWVudCIsIm11bHRpcGxlIiwiZm9ybUVsZW1lbnQiLCJkaXNhYmxlZCIsImNsZWFyX2J1dHRvbiIsInRpdGxlIiwicmVtb3ZlX2J1dHRvbiIsInZpcnR1YWxfc2Nyb2xsIiwicmVuZGVyIiwibm9fcmVzdWx0cyIsIm5vUmVzdWx0c0ZvdW5kVGV4dFZhbHVlIiwiY29uZmlnIiwib25JdGVtQWRkIiwic2V0VGV4dGJveFZhbHVlIiwib25Jbml0aWFsaXplIiwid3JhcHBlciIsImNsb3NlQWZ0ZXJTZWxlY3QiLCJzaG91bGRMb2FkIiwidG9tU2VsZWN0T3B0aW9uc1ZhbHVlIiwibWF4T3B0aW9ucyIsIm9wdGlvbnMiLCJsZW5ndGgiLCJfdGhpczMiLCJzY29yZSIsInNlYXJjaCIsInNjb3JpbmdGdW5jdGlvbiIsImdldFNjb3JlRnVuY3Rpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXh0Iiwib3B0aW9uIiwiYXV0b2NvbXBsZXRlRW5kcG9pbnRVcmwiLCJtaW5DaGFyYWN0ZXJMZW5ndGgiLCJfdGhpczUiLCJmaXJzdFVybCIsInF1ZXJ5Iiwic2VwYXJhdG9yIiwiaW5jbHVkZXMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2FkIiwiY2FsbGJhY2siLCJfdGhpczQiLCJ1cmwiLCJnZXRVcmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJzZXROZXh0VXJsIiwibmV4dF9wYWdlIiwicmVzdWx0cyIsIm5vX21vcmVfcmVzdWx0cyIsIm5vTW9yZVJlc3VsdHNUZXh0VmFsdWUiLCJwcmVsb2FkIiwic3RyaW5nIiwicmVwbGFjZSIsIm9iamVjdDEiLCJvYmplY3QyIiwidmFsdWVzIiwiU3RyaW5nIiwib3B0aW9uc0FzSHRtbCIsIkJvb2xlYW4iLCJub1Jlc3VsdHNGb3VuZFRleHQiLCJub01vcmVSZXN1bHRzVGV4dCIsIm1pbkNoYXJhY3RlcnMiLCJ0eXBlIiwiTnVtYmVyIiwidG9tU2VsZWN0T3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=