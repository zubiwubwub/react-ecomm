webpackHotUpdate_N_E("pages/sell",{

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateProduct; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n\n\nvar _jsxFileName = \"/Users/zubenko/code/projects/React/WESBOS/Advanced-React-master 2/sick-fits/frontend/components/CreateProduct.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction CreateProduct() {\n  _s();\n\n  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    name: 'Nice Shoes',\n    price: 34244,\n    description: 'wowo sooo cool'\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      clearForm = _useForm.clearForm,\n      resetForm = _useForm.resetForm;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      htmlFor: \"name\",\n      children: [\"Name\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        id: \"name\",\n        name: \"name\",\n        placeholder: \"Name\",\n        value: inputs.name,\n        onChange: handleChange,\n        disabled: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      htmlFor: \"price\",\n      children: [\"Price\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"number\",\n        id: \"price\",\n        name: \"price\",\n        placeholder: \"Price\",\n        value: inputs.price,\n        onChange: handleChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      type: \"submit\",\n      children: \"+ Add Product\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CreateProduct, \"LOtO0lHDV2LjftIddtYNHy++Tqs=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = CreateProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"CreateProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzP2UwNTAiXSwibmFtZXMiOlsiQ3JlYXRlUHJvZHVjdCIsInVzZUZvcm0iLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsImNsZWFyRm9ybSIsInJlc2V0Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGFBQVQsR0FBeUI7QUFBQTs7QUFBQSxpQkFDaUJDLDREQUFPLENBQUM7QUFDN0RDLFFBQUksRUFBRSxZQUR1RDtBQUU3REMsU0FBSyxFQUFFLEtBRnNEO0FBRzdEQyxlQUFXLEVBQUU7QUFIZ0QsR0FBRCxDQUR4QjtBQUFBLE1BQzlCQyxNQUQ4QixZQUM5QkEsTUFEOEI7QUFBQSxNQUN0QkMsWUFEc0IsWUFDdEJBLFlBRHNCO0FBQUEsTUFDUkMsU0FEUSxZQUNSQSxTQURRO0FBQUEsTUFDR0MsU0FESCxZQUNHQSxTQURIOztBQU10QyxzQkFDRSxxRUFBQyxvREFBRDtBQUFBLDRCQUNFO0FBQU8sYUFBTyxFQUFDLE1BQWY7QUFBQSxzQ0FFRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsVUFBRSxFQUFDLE1BRkw7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLG1CQUFXLEVBQUMsTUFKZDtBQUtFLGFBQUssRUFBRUgsTUFBTSxDQUFDSCxJQUxoQjtBQU1FLGdCQUFRLEVBQUVJLFlBTlo7QUFPRSxnQkFBUTtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWFFO0FBQU8sYUFBTyxFQUFDLE9BQWY7QUFBQSx1Q0FFRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsVUFBRSxFQUFDLE9BRkw7QUFHRSxZQUFJLEVBQUMsT0FIUDtBQUlFLG1CQUFXLEVBQUMsT0FKZDtBQUtFLGFBQUssRUFBRUQsTUFBTSxDQUFDRixLQUxoQjtBQU1FLGdCQUFRLEVBQUVHO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLGVBd0JFO0FBQVEsVUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0QkQ7O0dBbEN1Qk4sYTtVQUNpQ0Msb0Q7OztLQURqQ0QsYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ3JlYXRlUHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVByb2R1Y3QoKSB7XG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcbiAgICBuYW1lOiAnTmljZSBTaG9lcycsXG4gICAgcHJpY2U6IDM0MjQ0LFxuICAgIGRlc2NyaXB0aW9uOiAnd293byBzb29vIGNvb2wnLFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPSduYW1lJz5cbiAgICAgICAgTmFtZVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIGlkPSduYW1lJ1xuICAgICAgICAgIG5hbWU9J25hbWUnXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J05hbWUnXG4gICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8bGFiZWwgaHRtbEZvcj0ncHJpY2UnPlxuICAgICAgICBQcmljZVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgICAgaWQ9J3ByaWNlJ1xuICAgICAgICAgIG5hbWU9J3ByaWNlJ1xuICAgICAgICAgIHBsYWNlaG9sZGVyPSdQcmljZSdcbiAgICAgICAgICB2YWx1ZT17aW5wdXRzLnByaWNlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPisgQWRkIFByb2R1Y3Q8L2J1dHRvbj5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CreateProduct.js\n");

/***/ })

})