webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/cartState */ \"./lib/cartState.js\");\n/* harmony import */ var _CartCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartCount */ \"./components/CartCount.js\");\n/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignOut */ \"./components/SignOut.js\");\n/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/NavStyles */ \"./components/styles/NavStyles.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\n\nvar _jsxFileName = \"/Users/zubenko/code/projects/React/WESBOS/Advanced-React-master 2/sick-fits/frontend/components/Nav.js\",\n    _s = $RefreshSig$();\n\n/* eslint-disable prettier/prettier */\n\n\n\n\n\n\nfunction Nav() {\n  _s();\n\n  var user = Object(_User__WEBPACK_IMPORTED_MODULE_6__[\"useUser\"])();\n\n  var _useCart = Object(_lib_cartState__WEBPACK_IMPORTED_MODULE_2__[\"useCart\"])(),\n      openCart = _useCart.openCart;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/products\",\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/sell\",\n        children: \"Sell\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/orders\",\n        children: \"Orders\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/account\",\n        children: \"Account\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SignOut__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        onClick: openCart,\n        children: [\"My Cart\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_CartCount__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          count: user.cart.reduce(function (tally, cartItem) {\n            return tally + cartItem.quantity;\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true), !user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/signin\",\n        children: \"Sign in\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }, this)\n    }, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Nav, \"86KsfHpdJ0mvqtyipp2mMpkUFQs=\", false, function () {\n  return [_User__WEBPACK_IMPORTED_MODULE_6__[\"useUser\"], _lib_cartState__WEBPACK_IMPORTED_MODULE_2__[\"useCart\"]];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJOYXYiLCJ1c2VyIiwidXNlVXNlciIsInVzZUNhcnQiLCJvcGVuQ2FydCIsImNhcnQiLCJyZWR1Y2UiLCJ0YWxseSIsImNhcnRJdGVtIiwicXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULEdBQWU7QUFBQTs7QUFDNUIsTUFBTUMsSUFBSSxHQUFHQyxxREFBTyxFQUFwQjs7QUFENEIsaUJBRVBDLDhEQUFPLEVBRkE7QUFBQSxNQUVwQkMsUUFGb0IsWUFFcEJBLFFBRm9COztBQUc1QixzQkFDRSxxRUFBQyx5REFBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHSCxJQUFJLGlCQUNIO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUUscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUVHLFFBQS9CO0FBQUEsMkNBRUUscUVBQUMsa0RBQUQ7QUFDRSxlQUFLLEVBQUVILElBQUksQ0FBQ0ksSUFBTCxDQUFVQyxNQUFWLENBQ0wsVUFBQ0MsS0FBRCxFQUFRQyxRQUFSO0FBQUEsbUJBQXFCRCxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsUUFBdEM7QUFBQSxXQURLO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBLG9CQUhKLEVBa0JHLENBQUNSLElBQUQsaUJBQ0M7QUFBQSw2QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYscUJBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEJEOztHQTdCdUJELEc7VUFDVEUsNkMsRUFDUUMsc0Q7OztLQUZDSCxHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi9saWIvY2FydFN0YXRlJztcbmltcG9ydCBDYXJ0Q291bnQgZnJvbSAnLi9DYXJ0Q291bnQnO1xuaW1wb3J0IFNpZ25PdXQgZnJvbSAnLi9TaWduT3V0JztcbmltcG9ydCBOYXZTdHlsZXMgZnJvbSAnLi9zdHlsZXMvTmF2U3R5bGVzJztcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XG4gIGNvbnN0IHsgb3BlbkNhcnQgfSA9IHVzZUNhcnQoKTtcbiAgcmV0dXJuIChcbiAgICA8TmF2U3R5bGVzPlxuICAgICAgPExpbmsgaHJlZj0nL3Byb2R1Y3RzJz5Qcm9kdWN0czwvTGluaz5cbiAgICAgIHt1c2VyICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGluayBocmVmPScvc2VsbCc+U2VsbDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPScvb3JkZXJzJz5PcmRlcnM8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj0nL2FjY291bnQnPkFjY291bnQ8L0xpbms+XG4gICAgICAgICAgPFNpZ25PdXQgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgb25DbGljaz17b3BlbkNhcnR9PlxuICAgICAgICAgICAgTXkgQ2FydFxuICAgICAgICAgICAgPENhcnRDb3VudFxuICAgICAgICAgICAgICBjb3VudD17dXNlci5jYXJ0LnJlZHVjZShcbiAgICAgICAgICAgICAgICAodGFsbHksIGNhcnRJdGVtKSA9PiB0YWxseSArIGNhcnRJdGVtLnF1YW50aXR5XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7IXVzZXIgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy9zaWduaW4nPlNpZ24gaW48L0xpbms+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L05hdlN0eWxlcz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})