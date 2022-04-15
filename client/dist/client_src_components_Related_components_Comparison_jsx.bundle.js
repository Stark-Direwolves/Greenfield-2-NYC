"use strict";
(self["webpackChunkstarkfront"] = self["webpackChunkstarkfront"] || []).push([["client_src_components_Related_components_Comparison_jsx"],{

/***/ "./client/src/components/Related/components/Comparison.jsx":
/*!*****************************************************************!*\
  !*** ./client/src/components/Related/components/Comparison.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/XIcon.js");
/* harmony import */ var _styles_Comparison_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Comparison.styled */ "./client/src/components/Related/styles/Comparison.styled.js");
/* harmony import */ var _styles_StyledButtons_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/StyledButtons.styled */ "./client/src/components/Related/styles/StyledButtons.styled.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Table */ "./client/src/components/Related/components/Table.jsx");







function Comparison(_ref) {
  var compare = _ref.compare,
      toggleCompare = _ref.toggleCompare,
      related = _ref.related,
      current = _ref.current;

  var filterFeatures = function filterFeatures(currentProduct, relatedProduct) {
    var features = currentProduct.features.concat(relatedProduct.features);
    var filtered = [];
    var featObj = {};

    for (var i = 0; i < features.length; i += 1) {
      var feature = features[i].feature;
      featObj[feature] = features[i];
    }

    var keys = Object.keys(featObj);

    for (var j = 0; j < keys.length; j += 1) {
      filtered.push(featObj[keys[j]]);
    }

    return filtered;
  };

  return compare ? /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_Comparison_styled__WEBPACK_IMPORTED_MODULE_2__.ComparisonBackground, {
    "data-testid": "comparison"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_Comparison_styled__WEBPACK_IMPORTED_MODULE_2__.ComparisonContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_StyledButtons_styled__WEBPACK_IMPORTED_MODULE_3__.ModalButton, {
    type: "button",
    onClick: toggleCompare,
    "data-testid": "modalButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "compare"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles_Comparison_styled__WEBPACK_IMPORTED_MODULE_2__.StyledTable, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, current.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", null, related.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, filterFeatures(current, related).map(function (feature) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: feature.value,
      feature: feature,
      related: related.features,
      current: current.features
    });
  }))))), document.body) : null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comparison);

/***/ }),

/***/ "./client/src/components/Related/components/Table.jsx":
/*!************************************************************!*\
  !*** ./client/src/components/Related/components/Table.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/CheckIcon.js");




function Table(_ref) {
  var feature = _ref.feature,
      current = _ref.current,
      related = _ref.related;

  var toggleFeature = function toggleFeature(product, features) {
    for (var i = 0; i < product.length; i += 1) {
      if (product[i].feature === features.feature && product[i].value === features.value) {
        return true;
      }
    }

    return false;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "center"
  }, toggleFeature(current, feature) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__["default"], null) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, feature.feature), feature.value ? ": ".concat(feature.value) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "center"
  }, toggleFeature(related, feature) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__["default"], null) : null));
}

Table.propTypes = {
  feature: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Object),
  current: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Object),
  related: prop_types__WEBPACK_IMPORTED_MODULE_2___default().instanceOf(Object)
};
Table.defaultProps = {
  feature: {},
  current: {},
  related: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }),

/***/ "./client/src/components/Related/styles/Comparison.styled.js":
/*!*******************************************************************!*\
  !*** ./client/src/components/Related/styles/Comparison.styled.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComparisonBackground": () => (/* binding */ ComparisonBackground),
/* harmony export */   "ComparisonContainer": () => (/* binding */ ComparisonContainer),
/* harmony export */   "StyledTable": () => (/* binding */ StyledTable)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ComparisonBackground = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Comparisonstyled__ComparisonBackground",
  componentId: "sc-bdaun9-0"
})(["top:0;left:0;display:flex;justify-content:center;align-items:center;width:100%;height:100%;position:fixed;background-color:rgba(128,128,128,0.5);z-index:500;"]);
var ComparisonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Comparisonstyled__ComparisonContainer",
  componentId: "sc-bdaun9-1"
})(["display:flex;align-items:center;font-family:\"Roboto\",sans-serif;font-size:0.8em;background:white;box-shadow:10px;flex-direction:column;position:relative;width:600px;background-color:", ";z-index:1000;h3{text-transform:uppercase;letter-spacing:5px;}@keyframes fade{from{opacity:0;}to{opacity:1;}}animation:fade 0.5s;"], function (props) {
  return props.theme.colors[0];
});
var StyledTable = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].table.withConfig({
  displayName: "Comparisonstyled__StyledTable",
  componentId: "sc-bdaun9-2"
})(["table-layout:fixed;width:100%;border-collapse:collapse;border:2px solid black;thead th:nth-child(1){width:33%;}thead th:nth-child(2){width:33%;}thead th:nth-child(3){width:33%;}th{letter-spacing:1px;}td{letter-spacing:1px;text-transform:lowercase;}tbody tr{.center{text-align:center;}}tbody tr:nth-child(odd){background-color:", ";}th,td{padding:5px;}svg{height:20px;width:20px;}"], function (props) {
  return props.theme.colors[1];
});


/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/CheckIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/CheckIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CheckIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M5 13l4 4L19 7"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/outline/esm/XIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/@heroicons/react/outline/esm/XIcon.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function XIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=client_src_components_Related_components_Comparison_jsx.bundle.js.map