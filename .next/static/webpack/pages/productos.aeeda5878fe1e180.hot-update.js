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

/***/ "./components/Formulario.js":
/*!**********************************!*\
  !*** ./components/Formulario.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Formulario_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Formulario.module.css */ \"./styles/Formulario.module.css\");\n/* harmony import */ var _styles_Formulario_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Formulario_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useCategoria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useCategoria */ \"./hooks/useCategoria.js\");\n/* harmony import */ var _hooks_useProductos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useProductos */ \"./hooks/useProductos.js\");\n/* harmony import */ var _Categorias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Categorias */ \"./components/Categorias.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Formulario = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this1 = _this;\n    _s();\n    var ref = (0,_hooks_useCategoria__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), categorias = ref.categorias, handleClickCategoria = ref.handleClickCategoria;\n    var consultarProductos = (0,_hooks_useProductos__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().consultarProductos;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        categoria: ''\n    }), search = ref1[0], setSearch = ref1[1];\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.log(\"search:\");\n        console.log(search);\n        consultarProductos();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_styles_Formulario_module_css__WEBPACK_IMPORTED_MODULE_5___default().flexForm),\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"categoria\",\n                children: \"Nombre Categoria\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Formulario.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                className: (_styles_Formulario_module_css__WEBPACK_IMPORTED_MODULE_5___default().select),\n                value: search.categoria,\n                id: \"categoria\",\n                name: \"categoria\",\n                onChange: function(e) {\n                    return setSearch(_objectSpread({}, search, _defineProperty({}, e.target.name, e.target.value)));\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        children: \"- Seleccione Categoria -\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Formulario.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    categorias.map(function(categoria) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Categorias__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            value: categoria.Nombre,\n                            categoria: categoria\n                        }, categoria.id, false, {\n                            fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Formulario.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Formulario.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                value: \"Search\",\n                onClick: function() {\n                    return handleClickCategoria(search.categoria);\n                },\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Formulario.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Formulario.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this));\n};\n_s(Formulario, \"BUOmhFgf+c6nOsur5Mozz34hdE8=\", false, function() {\n    return [\n        _hooks_useCategoria__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        _hooks_useProductos__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Formulario;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Formulario);\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm11bGFyaW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDSjtBQUNBO0FBQ1g7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxHQUFLLENBQUNLLFVBQVUsR0FBRyxRQUFRLFNBQUM7Ozs7SUFDMUIsR0FBSyxDQUF1Q0osR0FBYyxHQUFkQSwrREFBWSxJQUFoREssVUFBVSxHQUEwQkwsR0FBYyxDQUFsREssVUFBVSxFQUFDQyxvQkFBb0IsR0FBS04sR0FBYyxDQUF2Q00sb0JBQW9CO0lBQ3ZDLEdBQUssQ0FBRUMsa0JBQWtCLEdBQUlOLCtEQUFZLEdBQWxDTSxrQkFBa0I7SUFFekIsR0FBSyxDQUFzQkosSUFFekIsR0FGeUJBLCtDQUFRLENBQUMsQ0FBQztRQUNuQ0ssU0FBUyxFQUFDLENBQUU7SUFDZCxDQUFDLEdBRk1DLE1BQU0sR0FBY04sSUFFekIsS0FGWU8sU0FBUyxHQUFJUCxJQUV6QjtJQUNGLEdBQUssQ0FBQ1EsWUFBWSxHQUFHQyxRQUNyQixDQURxQkEsQ0FBQyxFQUFHLENBQUM7UUFDeEJBLENBQUMsQ0FBQ0MsY0FBYztRQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUztRQUNyQkQsT0FBTyxDQUFDQyxHQUFHLENBQUNOLE1BQU07UUFDbEJGLGtCQUFrQjtJQUVwQixDQUFDO0lBQ0QsTUFBTSw2RUFDSFMsQ0FBSTtRQUNIQyxTQUFTLEVBQUVsQiwrRUFBZTtRQUMxQm9CLFFBQVEsRUFBRVIsWUFBWTs7d0ZBQ3JCUyxDQUFLO2dCQUFDQyxPQUFPLEVBQUMsQ0FBVzswQkFBQyxDQUFnQjs7Ozs7O3dGQUMxQ0MsQ0FBTTtnQkFDTEwsU0FBUyxFQUFFbEIsNkVBQWE7Z0JBQ3hCd0IsS0FBSyxFQUFFZCxNQUFNLENBQUNELFNBQVM7Z0JBQ3ZCZ0IsRUFBRSxFQUFDLENBQVc7Z0JBQ2RDLElBQUksRUFBQyxDQUFXO2dCQUNoQkMsUUFBUSxFQUFFLFFBQ2pCLENBRGtCZCxDQUFDO29CQUNWRixNQUFNLENBQU5BLFNBQVMsbUJBQU1ELE1BQU0sc0JBQUdHLENBQUMsQ0FBQ2UsTUFBTSxDQUFDRixJQUFJLEVBQUdiLENBQUMsQ0FBQ2UsTUFBTSxDQUFDSixLQUFLOzs7Z0dBR3ZESyxDQUFNO3dCQUFDTCxLQUFLLEVBQUMsQ0FBRTtrQ0FBQyxDQUF3Qjs7Ozs7O29CQUN4Q2xCLFVBQVUsQ0FBQ3dCLEdBQUcsQ0FBQyxRQUFRLENBQVByQixTQUFTO3NDQUN4QixNQUFNLCtEQUFMTixtREFBVTs0QkFFVHFCLEtBQUssRUFBRWYsU0FBUyxDQUFDc0IsTUFBTTs0QkFDdkJ0QixTQUFTLEVBQUVBLFNBQVM7MkJBRmZBLFNBQVMsQ0FBQ2dCLEVBQUU7Ozs7Ozs7Ozs7Ozt3RkFNdEJPLENBQU07Z0JBQ0xDLElBQUksRUFBQyxDQUFRO2dCQUNiVCxLQUFLLEVBQUMsQ0FBUTtnQkFDZFUsT0FBTyxFQUFFLFFBQVE7b0JBQUYzQixNQUFNLENBQU5BLG9CQUFvQixDQUFDRyxNQUFNLENBQUNELFNBQVM7OzBCQUNyRCxDQUVEOzs7Ozs7Ozs7Ozs7QUFHTixDQUFDO0dBOUNLSixVQUFVOztRQUM4QkosMkRBQVk7UUFDM0JDLDJEQUFZOzs7S0FGckNHLFVBQVU7QUFnRGhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtdWxhcmlvLmpzPzVjZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0Zvcm11bGFyaW8ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHVzZUNhdGVnb3JpYSBmcm9tIFwiLi4vaG9va3MvdXNlQ2F0ZWdvcmlhXCI7XG5pbXBvcnQgdXNlUHJvZHVjdG9zIGZyb20gXCIuLi9ob29rcy91c2VQcm9kdWN0b3NcIjtcbmltcG9ydCBDYXRlZ29yaWFzIGZyb20gXCIuL0NhdGVnb3JpYXNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZvcm11bGFyaW8gPSAoe30pID0+IHtcbiAgY29uc3QgeyBjYXRlZ29yaWFzLGhhbmRsZUNsaWNrQ2F0ZWdvcmlhIH0gPSB1c2VDYXRlZ29yaWEoKTtcbiAgY29uc3Qge2NvbnN1bHRhclByb2R1Y3Rvc30gPSB1c2VQcm9kdWN0b3MoKTtcblxuICBjb25zdCBbc2VhcmNoLHNldFNlYXJjaF0gPSB1c2VTdGF0ZSh7XG4gICAgY2F0ZWdvcmlhOicnXG4gIH0pXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coXCJzZWFyY2g6XCIpXG4gICAgY29uc29sZS5sb2coc2VhcmNoKVxuICAgIGNvbnN1bHRhclByb2R1Y3RvcygpXG4gICAgXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZsZXhGb3JtfVxuICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImNhdGVnb3JpYVwiPk5vbWJyZSBDYXRlZ29yaWE8L2xhYmVsPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3R9XG4gICAgICAgIHZhbHVlPXtzZWFyY2guY2F0ZWdvcmlhfVxuICAgICAgICBpZD1cImNhdGVnb3JpYVwiXG4gICAgICAgIG5hbWU9XCJjYXRlZ29yaWFcIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgc2V0U2VhcmNoKHsgLi4uc2VhcmNoLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPi0gU2VsZWNjaW9uZSBDYXRlZ29yaWEgLTwvb3B0aW9uPlxuICAgICAgICB7Y2F0ZWdvcmlhcy5tYXAoKGNhdGVnb3JpYSkgPT4gKFxuICAgICAgICAgIDxDYXRlZ29yaWFzXG4gICAgICAgICAgICBrZXk9e2NhdGVnb3JpYS5pZH1cbiAgICAgICAgICAgIHZhbHVlPXtjYXRlZ29yaWEuTm9tYnJlfVxuICAgICAgICAgICAgY2F0ZWdvcmlhPXtjYXRlZ29yaWF9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIHZhbHVlPVwiU2VhcmNoXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2tDYXRlZ29yaWEoc2VhcmNoLmNhdGVnb3JpYSl9XG4gICAgICA+XG4gICAgICAgIFNlYXJjaFxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybXVsYXJpbztcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VDYXRlZ29yaWEiLCJ1c2VQcm9kdWN0b3MiLCJDYXRlZ29yaWFzIiwidXNlU3RhdGUiLCJGb3JtdWxhcmlvIiwiY2F0ZWdvcmlhcyIsImhhbmRsZUNsaWNrQ2F0ZWdvcmlhIiwiY29uc3VsdGFyUHJvZHVjdG9zIiwiY2F0ZWdvcmlhIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJjbGFzc05hbWUiLCJmbGV4Rm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwidmFsdWUiLCJpZCIsIm5hbWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9wdGlvbiIsIm1hcCIsIk5vbWJyZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Formulario.js\n");

/***/ })

});