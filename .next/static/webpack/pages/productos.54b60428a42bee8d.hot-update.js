"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/productos",{

/***/ "./pages/productos.js":
/*!****************************!*\
  !*** ./pages/productos.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Listado__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Listado */ \"./components/Listado.js\");\n\n\n\nvar _this = undefined;\nvar Productos = function(param) {\n    var productos = param.productos;\n    console.log(productos);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        pagina: \"Productos\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"contenedor\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"heading\",\n                    children: \"Nuestra coleccion de Productos\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\pages\\\\productos.js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Listado__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    productos: productos\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\pages\\\\productos.js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\pages\\\\productos.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\pages\\\\productos.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, _this));\n};\n_c = Productos;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Productos);\nvar _c;\n$RefreshReg$(_c, \"Productos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0b3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlDO0FBQ0U7O0FBRTNDLEdBQUssQ0FBQ0UsU0FBUyxHQUFHLFFBQVEsUUFBUyxDQUFDO1FBQWhCQyxTQUFTLFNBQVRBLFNBQVM7SUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixTQUFTO0lBQ3JCLE1BQU0sNkVBQ0RILDBEQUFNO1FBQ1BNLE1BQU0sRUFBQyxDQUFXOzhGQUViQyxDQUFJO1lBQUNDLFNBQVMsRUFBQyxDQUFZOzs0RkFDdkJDLENBQUU7b0JBQUNELFNBQVMsRUFBQyxDQUFTOzhCQUFDLENBQThCOzs7Ozs7NEZBQ3JEUCwyREFBTztvQkFDUkUsU0FBUyxFQUFJQSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QyxDQUFDO0tBYktELFNBQVM7O0FBZ0NmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdG9zLmpzP2ZlYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IExpc3RhZG8gZnJvbSAnLi4vY29tcG9uZW50cy9MaXN0YWRvJztcclxuXHJcbmNvbnN0IFByb2R1Y3RvcyA9ICh7cHJvZHVjdG9zfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdG9zKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8TGF5b3V0IFxyXG4gICAgICAgIHBhZ2luYT1cIlByb2R1Y3Rvc1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250ZW5lZG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPk51ZXN0cmEgY29sZWNjaW9uIGRlIFByb2R1Y3RvczwvaDE+ICAgIFxyXG4gICAgICAgICAgICAgICAgPExpc3RhZG9cclxuICAgICAgICAgICAgICAgIHByb2R1Y3RvcyA9IHtwcm9kdWN0b3N9Lz4gIFxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgey8qIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9L3Byb2R1Y3Rvc2A7Ki99XHJcbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9wcm9kdWN0b3NcIjsgXHJcbiAgICBjb25zdCByZXNwdWVzdGEgPSBhd2FpdCBmZXRjaCh1cmwpXHJcbiAgICBjb25zdCBwcm9kdWN0b3MgPSBhd2FpdCByZXNwdWVzdGEuanNvbigpXHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwcm9kdWN0b3NcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0b3M7Il0sIm5hbWVzIjpbIkxheW91dCIsIkxpc3RhZG8iLCJQcm9kdWN0b3MiLCJwcm9kdWN0b3MiLCJjb25zb2xlIiwibG9nIiwicGFnaW5hIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/productos.js\n");

/***/ })

});