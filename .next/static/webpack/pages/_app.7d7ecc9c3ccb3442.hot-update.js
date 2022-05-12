"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/ProductosProvider.jsx":
/*!***************************************!*\
  !*** ./context/ProductosProvider.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductosProvider\": function() { return /* binding */ ProductosProvider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_strapi_ecommerce_tienda_sum_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Administrador_Desktop_Proyectos_REACT_strapi_ecommerce_tienda_sum_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Administrador_Desktop_Proyectos_REACT_strapi_ecommerce_tienda_sum_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductosContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nvar ProductosProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), productos = ref[0], setProductos = ref[1];\n    var consultarProductos = function() {\n        var _ref = _asyncToGenerator(C_Users_Administrador_Desktop_Proyectos_REACT_strapi_ecommerce_tienda_sum_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(datos) {\n            var url, data;\n            return C_Users_Administrador_Desktop_Proyectos_REACT_strapi_ecommerce_tienda_sum_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        url = \"http://localhost:1337/productos?categorias=\".concat(datos);\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default()(url);\n                    case 4:\n                        data = _ctx.sent.data;\n                        setProductos(data);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function consultarProductos(datos) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ProductosContext.Provider, {\n        value: {\n            consultarProductos: consultarProductos,\n            productos: productos\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\context\\\\ProductosProvider.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this));\n};\n_s(ProductosProvider, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = ProductosProvider;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductosContext);\nvar _c;\n$RefreshReg$(_c, \"ProductosProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1Byb2R1Y3Rvc1Byb3ZpZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsR0FBSyxDQUFDSSxnQkFBZ0IsaUJBQUdGLG9EQUFhO0FBQ3RDLEdBQUssQ0FBQ0csaUJBQWlCLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDbkMsR0FBSyxDQUE0Qk4sR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUFyQ08sU0FBUyxHQUFpQlAsR0FBWSxLQUE1QlEsWUFBWSxHQUFJUixHQUFZO0lBRTdDLEdBQUssQ0FBQ1Msa0JBQWtCOzhOQUFHLFFBQVEsU0FBRkMsS0FBSyxFQUFHLENBQUM7Z0JBRWhDQyxHQUFHLEVBQ0ZDLElBQUk7Ozs7O3dCQURMRCxHQUFHLEdBQUksQ0FBMkMsNkNBQVEsT0FBTkQsS0FBSzs7K0JBQzFDUCw0Q0FBSyxDQUFDUSxHQUFHOzt3QkFBdkJDLElBQUksYUFBSkEsSUFBSTt3QkFDWEosWUFBWSxDQUFDSSxJQUFJOzs7Ozs7d0JBRWpCQyxPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O1FBRWYsQ0FBQzt3QkFSS0wsa0JBQWtCLENBQVNDLEtBQUs7Ozs7SUFXdEMsTUFBTSw2RUFDSE4sZ0JBQWdCLENBQUNXLFFBQVE7UUFDdEJDLEtBQUssRUFBRSxDQUFDO1lBQ05QLGtCQUFrQixFQUFsQkEsa0JBQWtCO1lBQ2xCRixTQUFTLEVBQVRBLFNBQVM7UUFDWCxDQUFDO2tCQUNBRCxRQUFROzs7Ozs7QUFHakIsQ0FBQztHQXZCS0QsaUJBQWlCO0tBQWpCQSxpQkFBaUI7QUF5Qk07QUFFN0IsK0RBQWVELGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvUHJvZHVjdG9zUHJvdmlkZXIuanN4P2NjOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IFByb2R1Y3Rvc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuY29uc3QgUHJvZHVjdG9zUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RvcyxzZXRQcm9kdWN0b3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBjb25zdWx0YXJQcm9kdWN0b3MgPSBhc3luYyBkYXRvcyA9PntcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wcm9kdWN0b3M/Y2F0ZWdvcmlhcz0ke2RhdG9zfWA7XHJcbiAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zKHVybCk7XHJcbiAgICAgIHNldFByb2R1Y3RvcyhkYXRhKVxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm9kdWN0b3NDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgIGNvbnN1bHRhclByb2R1Y3RvcyxcclxuICAgICAgICAgIHByb2R1Y3Rvc1xyXG4gICAgICAgIH19PiAgICAgXHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Qcm9kdWN0b3NDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCB7IFByb2R1Y3Rvc1Byb3ZpZGVyIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0b3NDb250ZXh0O1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUNvbnRleHQiLCJheGlvcyIsIlByb2R1Y3Rvc0NvbnRleHQiLCJQcm9kdWN0b3NQcm92aWRlciIsImNoaWxkcmVuIiwicHJvZHVjdG9zIiwic2V0UHJvZHVjdG9zIiwiY29uc3VsdGFyUHJvZHVjdG9zIiwiZGF0b3MiLCJ1cmwiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/ProductosProvider.jsx\n");

/***/ })

});