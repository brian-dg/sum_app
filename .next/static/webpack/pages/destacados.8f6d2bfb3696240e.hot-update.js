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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ \"./helpers/index.js\");\n/* harmony import */ var _styles_Entrada_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Entrada.module.css */ \"./styles/Entrada.module.css\");\n/* harmony import */ var _styles_Entrada_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Entrada_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _this = undefined;\nvar Entrada = function(param) {\n    var entrada = param.entrada;\n    var nombre = entrada.nombre, descripcion = entrada.descripcion, imagen = entrada.imagen, published_at = entrada.published_at, id = entrada.id, url = entrada.url;\n    var arrayImagen = [];\n    var arrayImagen = imagen.map(function(ima) {\n        return ima;\n    });\n    console.log(arrayImagen.url);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Entrada_module_css__WEBPACK_IMPORTED_MODULE_4___default().contenido),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: nombre\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Entrada.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_Entrada_module_css__WEBPACK_IMPORTED_MODULE_4___default().fecha),\n                    children: (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.formatearFecha)(published_at)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Entrada.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_Entrada_module_css__WEBPACK_IMPORTED_MODULE_4___default().resumen),\n                    children: descripcion\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Entrada.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Entrada.js\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Entrada.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this));\n};\n_c = Entrada;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entrada);\nvar _c;\n$RefreshReg$(_c, \"Entrada\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0VudHJhZGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEI7QUFDRTtBQUNZO0FBQ007O0FBRWhELEdBQUssQ0FBQ0ksT0FBTyxHQUFHLFFBQVEsUUFBTyxDQUFDO1FBQWRDLE9BQU8sU0FBUEEsT0FBTztJQUNyQixHQUFLLENBQUVDLE1BQU0sR0FBNkNELE9BQU8sQ0FBMURDLE1BQU0sRUFBQ0MsV0FBVyxHQUFpQ0YsT0FBTyxDQUFuREUsV0FBVyxFQUFDQyxNQUFNLEdBQTBCSCxPQUFPLENBQXZDRyxNQUFNLEVBQUNDLFlBQVksR0FBYUosT0FBTyxDQUFoQ0ksWUFBWSxFQUFDQyxFQUFFLEdBQVVMLE9BQU8sQ0FBbkJLLEVBQUUsRUFBRUMsR0FBRyxHQUFLTixPQUFPLENBQWZNLEdBQUc7SUFDckQsR0FBRyxDQUFDQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLEdBQUcsQ0FBQ0EsV0FBVyxHQUFHSixNQUFNLENBQUNLLEdBQUcsQ0FBQyxRQUFRLENBQUNDLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sQ0FBQ0EsR0FBRztJQUNkLENBQUM7SUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLFdBQVcsQ0FBQ0QsR0FBRztJQUUzQixNQUFNLDZFQUNETSxDQUFPOzhGQUVIQyxDQUFHO1lBQUNDLFNBQVMsRUFBRWhCLDZFQUFlOzs0RkFDMUJrQixDQUFFOzhCQUFFZixNQUFNOzs7Ozs7NEZBQ1ZnQixDQUFDO29CQUFDSCxTQUFTLEVBQUVoQix5RUFBVzs4QkFBR0Qsd0RBQWMsQ0FBQ08sWUFBWTs7Ozs7OzRGQUN0RGEsQ0FBQztvQkFBQ0gsU0FBUyxFQUFFaEIsMkVBQWE7OEJBQUdJLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pELENBQUM7S0FyQktILE9BQU87QUF1QmIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0VudHJhZGEuanM/ODgyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7Zm9ybWF0ZWFyRmVjaGEgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3N0eWxlcy9FbnRyYWRhLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBFbnRyYWRhID0gKHtlbnRyYWRhfSkgPT4ge1xyXG4gICAgY29uc3Qge25vbWJyZSxkZXNjcmlwY2lvbixpbWFnZW4scHVibGlzaGVkX2F0LGlkLCB1cmwgfSA9IGVudHJhZGFcclxuICAgIHZhciBhcnJheUltYWdlbiA9IFtdO1xyXG4gICAgdmFyIGFycmF5SW1hZ2VuID0gaW1hZ2VuLm1hcChmdW5jdGlvbihpbWEpIHtcclxuICAgICAgICByZXR1cm4gaW1hXHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coYXJyYXlJbWFnZW4udXJsKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGFydGljbGU+ICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgey8qICA8SW1hZ2UgcHJpb3JpdHk9J3RydWUnIGxheW91dD1cInJlc3BvbnNpdmVcIiB3aWR0aD17ODAwfSBoZWlnaHQ9ezYwMH0gc3JjPXthcnJheUltYWdlbi51cmx9IGFsdCA9IHtgaW1hZ2VuIGRlc3RhY2FkbyAke25vbWJyZX1gfS8+ICovIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRlbmlkb30+XHJcbiAgICAgICAgICAgICAgICA8aDM+e25vbWJyZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5mZWNoYX0+e2Zvcm1hdGVhckZlY2hhKHB1Ymxpc2hlZF9hdCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS5yZXN1bWVufT57ZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKjxMaW5rIGhyZWY9e2AvYmxvZy8ke3VybH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZS5lbmxhY2V9PkxlZXIgZW50cmFkYTwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4qL31cclxuICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICA8L2FydGljbGU+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVudHJhZGE7Il0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsImZvcm1hdGVhckZlY2hhIiwic3R5bGUiLCJFbnRyYWRhIiwiZW50cmFkYSIsIm5vbWJyZSIsImRlc2NyaXBjaW9uIiwiaW1hZ2VuIiwicHVibGlzaGVkX2F0IiwiaWQiLCJ1cmwiLCJhcnJheUltYWdlbiIsIm1hcCIsImltYSIsImNvbnNvbGUiLCJsb2ciLCJhcnRpY2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVuaWRvIiwiaDMiLCJwIiwiZmVjaGEiLCJyZXN1bWVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Entrada.js\n");

/***/ })

});