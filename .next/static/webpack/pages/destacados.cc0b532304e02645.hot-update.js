"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/destacados",{

/***/ "./components/Entrada.js":
/*!*******************************!*\
  !*** ./components/Entrada.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ \"./helpers/index.js\");\n/* harmony import */ var _styles_Entrada_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Entrada.module.css */ \"./styles/Entrada.module.css\");\n/* harmony import */ var _styles_Entrada_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Entrada_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _this = undefined;\nvar Entrada = function(param) {\n    var entrada = param.entrada;\n    var nombre = entrada.nombre, descripcion = entrada.descripcion, imagen = entrada.imagen, published_at = entrada.published_at, id = entrada.id, url = entrada.url;\n    var arrayImagen = imagen.forEach(function(ima) {\n        return ima;\n    });\n    console.log(arrayImagen);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Entrada_module_css__WEBPACK_IMPORTED_MODULE_4___default().contenido),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: nombre\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Entrada.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_Entrada_module_css__WEBPACK_IMPORTED_MODULE_4___default().fecha),\n                    children: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.formatearFecha)(published_at)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Entrada.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_Entrada_module_css__WEBPACK_IMPORTED_MODULE_4___default().resumen),\n                    children: descripcion\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Entrada.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Entrada.js\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Entrada.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, _this));\n};\n_c = Entrada;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entrada);\nvar _c;\n$RefreshReg$(_c, \"Entrada\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0VudHJhZGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEI7QUFDRTtBQUNZO0FBQ007O0FBRWhELEdBQUssQ0FBQ0ksT0FBTyxHQUFHLFFBQVEsUUFBTyxDQUFDO1FBQWRDLE9BQU8sU0FBUEEsT0FBTztJQUNyQixHQUFLLENBQUVDLE1BQU0sR0FBNkNELE9BQU8sQ0FBMURDLE1BQU0sRUFBQ0MsV0FBVyxHQUFpQ0YsT0FBTyxDQUFuREUsV0FBVyxFQUFDQyxNQUFNLEdBQTBCSCxPQUFPLENBQXZDRyxNQUFNLEVBQUNDLFlBQVksR0FBYUosT0FBTyxDQUFoQ0ksWUFBWSxFQUFDQyxFQUFFLEdBQVVMLE9BQU8sQ0FBbkJLLEVBQUUsRUFBRUMsR0FBRyxHQUFLTixPQUFPLENBQWZNLEdBQUc7SUFFckQsR0FBRyxDQUFDQyxXQUFXLEdBQUdKLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDLFFBQVEsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7UUFFNUMsTUFBTSxDQUFDQSxHQUFHO0lBRWQsQ0FBQztJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osV0FBVztJQUV2QixNQUFNLDZFQUNESyxDQUFPOzhGQUVIQyxDQUFHO1lBQUNDLFNBQVMsRUFBRWhCLDZFQUFlOzs0RkFDMUJrQixDQUFFOzhCQUFFZixNQUFNOzs7Ozs7NEZBQ1ZnQixDQUFDO29CQUFDSCxTQUFTLEVBQUVoQix5RUFBVzs4QkFBR0Qsd0RBQWMsQ0FBQ08sWUFBWTs7Ozs7OzRGQUN0RGEsQ0FBQztvQkFBQ0gsU0FBUyxFQUFFaEIsMkVBQWE7OEJBQUdJLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pELENBQUM7S0F2QktILE9BQU87QUF5QmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0VudHJhZGEuanM/ODgyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7Zm9ybWF0ZWFyRmVjaGEgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9FbnRyYWRhLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBFbnRyYWRhID0gKHtlbnRyYWRhfSkgPT4ge1xyXG4gICAgY29uc3Qge25vbWJyZSxkZXNjcmlwY2lvbixpbWFnZW4scHVibGlzaGVkX2F0LGlkLCB1cmwgfSA9IGVudHJhZGFcclxuICAgIFxyXG4gICAgdmFyIGFycmF5SW1hZ2VuID0gaW1hZ2VuLmZvckVhY2goZnVuY3Rpb24oaW1hKSB7XHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4gaW1hXHJcbiAgICAgICBcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhhcnJheUltYWdlbilcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxhcnRpY2xlPiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICB7LyogPEltYWdlIHByaW9yaXR5PSd0cnVlJyBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgd2lkdGg9ezgwMH0gaGVpZ2h0PXs2MDB9IHNyYz17YXJyYXlJbWFnZW4udXJsfSBhbHQgPSB7YGltYWdlbiBkZXN0YWNhZG8gJHtub21icmV9YH0vPiAgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250ZW5pZG99PlxyXG4gICAgICAgICAgICAgICAgPGgzPntub21icmV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUuZmVjaGF9Pntmb3JtYXRlYXJGZWNoYShwdWJsaXNoZWRfYXQpfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUucmVzdW1lbn0+e2Rlc2NyaXBjaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8TGluayBocmVmPXtgL2Jsb2cvJHt1cmx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGUuZW5sYWNlfT5MZWVyIGVudHJhZGE8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgICA8L0xpbms+Ki99XHJcbiAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbnRyYWRhOyJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJmb3JtYXRlYXJGZWNoYSIsInN0eWxlIiwiRW50cmFkYSIsImVudHJhZGEiLCJub21icmUiLCJkZXNjcmlwY2lvbiIsImltYWdlbiIsInB1Ymxpc2hlZF9hdCIsImlkIiwidXJsIiwiYXJyYXlJbWFnZW4iLCJmb3JFYWNoIiwiaW1hIiwiY29uc29sZSIsImxvZyIsImFydGljbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW5pZG8iLCJoMyIsInAiLCJmZWNoYSIsInJlc3VtZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Entrada.js\n");

/***/ })

});