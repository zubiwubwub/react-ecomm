webpackHotUpdate_N_E("pages/reset",{

/***/ "./components/Reset.js":
/*!*****************************!*\
  !*** ./components/Reset.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Reset; });\n/* harmony import */ var _Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/zubenko/code/projects/React/WESBOS/Advanced-React-master 2/sick-fits/frontend/components/Reset.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([\"\\n  mutation RESET_MUTATION(\\n    $email: String!\\n    $password: String!\\n    $token: String!\\n  ) {\\n    redeemUserPasswordResetToken(\\n      email: $email\\n      token: $token\\n      password: $password\\n    ) {\\n      code\\n      message\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar RESET_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());\nfunction Reset(_ref) {\n  _s();\n\n  var _data$redeemUserPassw;\n\n  var token = _ref.token;\n\n  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n    email: '',\n    password: '',\n    token: token\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      resetForm = _useForm.resetForm;\n\n  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useMutation\"])(RESET_MUTATION, {\n    variables: inputs\n  }),\n      _useMutation2 = Object(_Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_useMutation, 2),\n      reset = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      data = _useMutation2$.data,\n      loading = _useMutation2$.loading,\n      error = _useMutation2$.error;\n\n  var successfulError = data !== null && data !== void 0 && (_data$redeemUserPassw = data.redeemUserPasswordResetToken) !== null && _data$redeemUserPassw !== void 0 && _data$redeemUserPassw.code ? data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken : undefined;\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = Object(_Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var res;\n      return _Users_zubenko_code_projects_React_WESBOS_Advanced_React_master_2_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault(); // stop the form from submitting\n\n              console.log(inputs);\n              _context.next = 4;\n              return reset()[\"catch\"](console.error);\n\n            case 4:\n              res = _context.sent;\n              console.log(res);\n              console.log({\n                data: data,\n                loading: loading,\n                error: error\n              });\n              resetForm(); // send the email and password to graphql api\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles_Form__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    method: \"POST\",\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n      children: \"Reset your password\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      error: error || successfulError\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"fieldset\", {\n      children: [(data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken) === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n        children: \"Success! You can now Sing in\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"email\",\n        children: [\"Email\", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          name: \"email\",\n          placeholder: \"You Email Address\",\n          autoComplete: \"email\",\n          value: inputs.email,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"password\",\n        children: [\"Password\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"Password\",\n          autoComplete: \"password\",\n          value: inputs.password,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"Request Reset\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Reset, \"V41hVDGgWP3GnYUjY22mSjPOBv0=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _apollo_client__WEBPACK_IMPORTED_MODULE_6__[\"useMutation\"]];\n});\n\n_c = Reset;\n\nvar _c;\n\n$RefreshReg$(_c, \"Reset\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXNldC5qcz9hMDgwIl0sIm5hbWVzIjpbIlJFU0VUX01VVEFUSU9OIiwiZ3FsIiwiUmVzZXQiLCJ0b2tlbiIsInVzZUZvcm0iLCJlbWFpbCIsInBhc3N3b3JkIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZXNldCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzZnVsRXJyb3IiLCJyZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuIiwiY29kZSIsInVuZGVmaW5lZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxrREFBSCxtQkFBcEI7QUFpQmUsU0FBU0MsS0FBVCxPQUEwQjtBQUFBOztBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFBQSxpQkFDS0MsNERBQU8sQ0FBQztBQUNsREMsU0FBSyxFQUFFLEVBRDJDO0FBRWxEQyxZQUFRLEVBQUUsRUFGd0M7QUFHbERILFNBQUssRUFBTEE7QUFIa0QsR0FBRCxDQURaO0FBQUEsTUFDL0JJLE1BRCtCLFlBQy9CQSxNQUQrQjtBQUFBLE1BQ3ZCQyxZQUR1QixZQUN2QkEsWUFEdUI7QUFBQSxNQUNUQyxTQURTLFlBQ1RBLFNBRFM7O0FBQUEscUJBTUdDLGtFQUFXLENBQUNWLGNBQUQsRUFBaUI7QUFDcEVXLGFBQVMsRUFBRUo7QUFEeUQsR0FBakIsQ0FOZDtBQUFBO0FBQUEsTUFNaENLLEtBTmdDO0FBQUE7QUFBQSxNQU12QkMsSUFOdUIsa0JBTXZCQSxJQU51QjtBQUFBLE1BTWpCQyxPQU5pQixrQkFNakJBLE9BTmlCO0FBQUEsTUFNUkMsS0FOUSxrQkFNUkEsS0FOUTs7QUFTdkMsTUFBTUMsZUFBZSxHQUFHSCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDZCQUFBQSxJQUFJLENBQUVJLDRCQUFOLHdFQUFvQ0MsSUFBcEMsR0FDcEJMLElBRG9CLGFBQ3BCQSxJQURvQix1QkFDcEJBLElBQUksQ0FBRUksNEJBRGMsR0FFcEJFLFNBRko7O0FBVHVDLFdBYXhCQyxZQWJ3QjtBQUFBO0FBQUE7O0FBQUE7QUFBQSwyYUFhdkMsaUJBQTRCQyxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUEsZUFBQyxDQUFDQyxjQUFGLEdBREYsQ0FDc0I7O0FBQ3BCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlqQixNQUFaO0FBRkY7QUFBQSxxQkFHb0JLLEtBQUssV0FBTCxDQUFjVyxPQUFPLENBQUNSLEtBQXRCLENBSHBCOztBQUFBO0FBR1FVLGlCQUhSO0FBSUVGLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUMsR0FBWjtBQUNBRixxQkFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRVgsb0JBQUksRUFBSkEsSUFBRjtBQUFRQyx1QkFBTyxFQUFQQSxPQUFSO0FBQWlCQyxxQkFBSyxFQUFMQTtBQUFqQixlQUFaO0FBQ0FOLHVCQUFTLEdBTlgsQ0FPRTs7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWJ1QztBQUFBO0FBQUE7O0FBdUJ2QyxzQkFDRSxxRUFBQyxvREFBRDtBQUFNLFVBQU0sRUFBQyxNQUFiO0FBQW9CLFlBQVEsRUFBRVcsWUFBOUI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMscURBQUQ7QUFBTyxXQUFLLEVBQUVMLEtBQUssSUFBSUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBQSxpQkFDRyxDQUFBSCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUksNEJBQU4sTUFBdUMsSUFBdkMsaUJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUtFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSw0QkFDUSxHQURSLGVBRUU7QUFDRSxjQUFJLEVBQUMsT0FEUDtBQUVFLGNBQUksRUFBQyxPQUZQO0FBR0UscUJBQVcsRUFBQyxtQkFIZDtBQUlFLHNCQUFZLEVBQUMsT0FKZjtBQUtFLGVBQUssRUFBRVYsTUFBTSxDQUFDRixLQUxoQjtBQU1FLGtCQUFRLEVBQUVHO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQWdCRTtBQUFPLGVBQU8sRUFBQyxVQUFmO0FBQUEsNENBRUU7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGNBQUksRUFBQyxVQUZQO0FBR0UscUJBQVcsRUFBQyxVQUhkO0FBSUUsc0JBQVksRUFBQyxVQUpmO0FBS0UsZUFBSyxFQUFFRCxNQUFNLENBQUNELFFBTGhCO0FBTUUsa0JBQVEsRUFBRUU7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRixlQTJCRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUNEOztHQTFEdUJOLEs7VUFDc0JFLG9ELEVBS0ZNLDBEOzs7S0FOcEJSLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc2V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xuaW1wb3J0IEVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcblxuY29uc3QgUkVTRVRfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIFJFU0VUX01VVEFUSU9OKFxuICAgICRlbWFpbDogU3RyaW5nIVxuICAgICRwYXNzd29yZDogU3RyaW5nIVxuICAgICR0b2tlbjogU3RyaW5nIVxuICApIHtcbiAgICByZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuKFxuICAgICAgZW1haWw6ICRlbWFpbFxuICAgICAgdG9rZW46ICR0b2tlblxuICAgICAgcGFzc3dvcmQ6ICRwYXNzd29yZFxuICAgICkge1xuICAgICAgY29kZVxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXQoeyB0b2tlbiB9KSB7XG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICB0b2tlbixcbiAgfSk7XG4gIGNvbnN0IFtyZXNldCwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFJFU0VUX01VVEFUSU9OLCB7XG4gICAgdmFyaWFibGVzOiBpbnB1dHMsXG4gIH0pO1xuICBjb25zdCBzdWNjZXNzZnVsRXJyb3IgPSBkYXRhPy5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuPy5jb2RlXG4gICAgPyBkYXRhPy5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuXG4gICAgOiB1bmRlZmluZWQ7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHN0b3AgdGhlIGZvcm0gZnJvbSBzdWJtaXR0aW5nXG4gICAgY29uc29sZS5sb2coaW5wdXRzKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCByZXNldCgpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgY29uc29sZS5sb2coeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KTtcbiAgICByZXNldEZvcm0oKTtcbiAgICAvLyBzZW5kIHRoZSBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gZ3JhcGhxbCBhcGlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gbWV0aG9kPSdQT1NUJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxoMj5SZXNldCB5b3VyIHBhc3N3b3JkPC9oMj5cbiAgICAgIDxFcnJvciBlcnJvcj17ZXJyb3IgfHwgc3VjY2Vzc2Z1bEVycm9yfSAvPlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICB7ZGF0YT8ucmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbiA9PT0gbnVsbCAmJiAoXG4gICAgICAgICAgPHA+U3VjY2VzcyEgWW91IGNhbiBub3cgU2luZyBpbjwvcD5cbiAgICAgICAgKX1cblxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPlxuICAgICAgICAgIEVtYWlseycgJ31cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nWW91IEVtYWlsIEFkZHJlc3MnXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9J2VtYWlsJ1xuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3Bhc3N3b3JkJz5cbiAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+UmVxdWVzdCBSZXNldDwvYnV0dG9uPlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Reset.js\n");

/***/ })

})