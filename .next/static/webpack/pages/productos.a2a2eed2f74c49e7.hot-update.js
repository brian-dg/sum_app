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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Formulario_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Formulario.module.css */ \"./styles/Formulario.module.css\");\n/* harmony import */ var _styles_Formulario_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Formulario_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useCategoria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useCategoria */ \"./hooks/useCategoria.js\");\n/* harmony import */ var _hooks_useProductos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useProductos */ \"./hooks/useProductos.js\");\n/* harmony import */ var _Categorias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Categorias */ \"./components/Categorias.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Formulario = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this1 = _this;\n    _s();\n    var ref = (0,_hooks_useCategoria__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), categorias = ref.categorias, handleClickCategoria = ref.handleClickCategoria;\n    var consultarProductos = (0,_hooks_useProductos__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().consultarProductos;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        categoria: ''\n    }), search = ref1[0], setSearch = ref1[1];\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.log(\"search:\");\n        consultarProductos(search);\n    /*consultarProductos()*/ };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_styles_Formulario_module_css__WEBPACK_IMPORTED_MODULE_5___default().flexForm),\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"categoria\",\n                children: \"Nombre Categoria\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Formulario.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                className: (_styles_Formulario_module_css__WEBPACK_IMPORTED_MODULE_5___default().select),\n                value: search.categoria,\n                id: \"categoria\",\n                name: \"categoria\",\n                onChange: function(e) {\n                    return setSearch(_objectSpread({}, search, _defineProperty({}, e.target.name, e.target.value)));\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"\",\n                        children: \"- Seleccione Categoria -\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Formulario.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    categorias.map(function(categoria) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Categorias__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            value: categoria.Nombre,\n                            categoria: categoria\n                        }, categoria.id, false, {\n                            fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Formulario.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Formulario.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                value: \"Search\",\n                onClick: function() {\n                    return handleClickCategoria(search.categoria);\n                },\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Formulario.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\components\\\\Formulario.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this));\n};\n_s(Formulario, \"BUOmhFgf+c6nOsur5Mozz34hdE8=\", false, function() {\n    return [\n        _hooks_useCategoria__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        _hooks_useProductos__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Formulario;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Formulario);\nvar _c;\n$RefreshReg$(_c, \"Formulario\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm11bGFyaW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDSjtBQUNBO0FBQ1g7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxHQUFLLENBQUNLLFVBQVUsR0FBRyxRQUFRLFNBQUM7Ozs7SUFDMUIsR0FBSyxDQUF1Q0osR0FBYyxHQUFkQSwrREFBWSxJQUFoREssVUFBVSxHQUEwQkwsR0FBYyxDQUFsREssVUFBVSxFQUFDQyxvQkFBb0IsR0FBS04sR0FBYyxDQUF2Q00sb0JBQW9CO0lBQ3ZDLEdBQUssQ0FBRUMsa0JBQWtCLEdBQUlOLCtEQUFZLEdBQWxDTSxrQkFBa0I7SUFFekIsR0FBSyxDQUFzQkosSUFFekIsR0FGeUJBLCtDQUFRLENBQUMsQ0FBQztRQUNuQ0ssU0FBUyxFQUFDLENBQUU7SUFDZCxDQUFDLEdBRk1DLE1BQU0sR0FBY04sSUFFekIsS0FGWU8sU0FBUyxHQUFJUCxJQUV6QjtJQUNGLEdBQUssQ0FBQ1EsWUFBWSxHQUFHQyxRQUNyQixDQURxQkEsQ0FBQyxFQUFHLENBQUM7UUFDeEJBLENBQUMsQ0FBQ0MsY0FBYztRQUNoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUztRQUNyQlIsa0JBQWtCLENBQUNFLE1BQU07SUFDekIsRUFBd0IsdUJBRTFCLENBQUM7SUFDRCxNQUFNLDZFQUNITyxDQUFJO1FBQ0hDLFNBQVMsRUFBRWxCLCtFQUFlO1FBQzFCb0IsUUFBUSxFQUFFUixZQUFZOzt3RkFDckJTLENBQUs7Z0JBQUNDLE9BQU8sRUFBQyxDQUFXOzBCQUFDLENBQWdCOzs7Ozs7d0ZBQzFDQyxDQUFNO2dCQUNMTCxTQUFTLEVBQUVsQiw2RUFBYTtnQkFDeEJ3QixLQUFLLEVBQUVkLE1BQU0sQ0FBQ0QsU0FBUztnQkFDdkJnQixFQUFFLEVBQUMsQ0FBVztnQkFDZEMsSUFBSSxFQUFDLENBQVc7Z0JBQ2hCQyxRQUFRLEVBQUUsUUFDakIsQ0FEa0JkLENBQUM7b0JBQ1ZGLE1BQU0sQ0FBTkEsU0FBUyxtQkFBTUQsTUFBTSxzQkFBR0csQ0FBQyxDQUFDZSxNQUFNLENBQUNGLElBQUksRUFBR2IsQ0FBQyxDQUFDZSxNQUFNLENBQUNKLEtBQUs7OztnR0FHdkRLLENBQU07d0JBQUNMLEtBQUssRUFBQyxDQUFFO2tDQUFDLENBQXdCOzs7Ozs7b0JBQ3hDbEIsVUFBVSxDQUFDd0IsR0FBRyxDQUFDLFFBQVEsQ0FBUHJCLFNBQVM7c0NBQ3hCLE1BQU0sK0RBQUxOLG1EQUFVOzRCQUVUcUIsS0FBSyxFQUFFZixTQUFTLENBQUNzQixNQUFNOzRCQUN2QnRCLFNBQVMsRUFBRUEsU0FBUzsyQkFGZkEsU0FBUyxDQUFDZ0IsRUFBRTs7Ozs7Ozs7Ozs7O3dGQU10Qk8sQ0FBTTtnQkFDTEMsSUFBSSxFQUFDLENBQVE7Z0JBQ2JULEtBQUssRUFBQyxDQUFRO2dCQUNkVSxPQUFPLEVBQUUsUUFBUTtvQkFBRjNCLE1BQU0sQ0FBTkEsb0JBQW9CLENBQUNHLE1BQU0sQ0FBQ0QsU0FBUzs7MEJBQ3JELENBRUQ7Ozs7Ozs7Ozs7OztBQUdOLENBQUM7R0E5Q0tKLFVBQVU7O1FBQzhCSiwyREFBWTtRQUMzQkMsMkRBQVk7OztLQUZyQ0csVUFBVTtBQWdEaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvcm11bGFyaW8uanM/NWNkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvRm9ybXVsYXJpby5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgdXNlQ2F0ZWdvcmlhIGZyb20gXCIuLi9ob29rcy91c2VDYXRlZ29yaWFcIjtcbmltcG9ydCB1c2VQcm9kdWN0b3MgZnJvbSBcIi4uL2hvb2tzL3VzZVByb2R1Y3Rvc1wiO1xuaW1wb3J0IENhdGVnb3JpYXMgZnJvbSBcIi4vQ2F0ZWdvcmlhc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRm9ybXVsYXJpbyA9ICh7fSkgPT4ge1xuICBjb25zdCB7IGNhdGVnb3JpYXMsaGFuZGxlQ2xpY2tDYXRlZ29yaWEgfSA9IHVzZUNhdGVnb3JpYSgpO1xuICBjb25zdCB7Y29uc3VsdGFyUHJvZHVjdG9zfSA9IHVzZVByb2R1Y3RvcygpO1xuXG4gIGNvbnN0IFtzZWFyY2gsc2V0U2VhcmNoXSA9IHVzZVN0YXRlKHtcbiAgICBjYXRlZ29yaWE6JydcbiAgfSlcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZyhcInNlYXJjaDpcIilcbiAgICBjb25zdWx0YXJQcm9kdWN0b3Moc2VhcmNoKVxuICAgIC8qY29uc3VsdGFyUHJvZHVjdG9zKCkqL1xuICAgIFxuICB9XG4gIHJldHVybiAoXG4gICAgPGZvcm0gXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Rm9ybX1cbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yaWFcIj5Ob21icmUgQ2F0ZWdvcmlhPC9sYWJlbD5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0fVxuICAgICAgICB2YWx1ZT17c2VhcmNoLmNhdGVnb3JpYX1cbiAgICAgICAgaWQ9XCJjYXRlZ29yaWFcIlxuICAgICAgICBuYW1lPVwiY2F0ZWdvcmlhXCJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgIHNldFNlYXJjaCh7IC4uLnNlYXJjaCwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj4tIFNlbGVjY2lvbmUgQ2F0ZWdvcmlhIC08L29wdGlvbj5cbiAgICAgICAge2NhdGVnb3JpYXMubWFwKChjYXRlZ29yaWEpID0+IChcbiAgICAgICAgICA8Q2F0ZWdvcmlhc1xuICAgICAgICAgICAga2V5PXtjYXRlZ29yaWEuaWR9XG4gICAgICAgICAgICB2YWx1ZT17Y2F0ZWdvcmlhLk5vbWJyZX1cbiAgICAgICAgICAgIGNhdGVnb3JpYT17Y2F0ZWdvcmlhfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICB2YWx1ZT1cIlNlYXJjaFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrQ2F0ZWdvcmlhKHNlYXJjaC5jYXRlZ29yaWEpfVxuICAgICAgPlxuICAgICAgICBTZWFyY2hcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm11bGFyaW87XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlQ2F0ZWdvcmlhIiwidXNlUHJvZHVjdG9zIiwiQ2F0ZWdvcmlhcyIsInVzZVN0YXRlIiwiRm9ybXVsYXJpbyIsImNhdGVnb3JpYXMiLCJoYW5kbGVDbGlja0NhdGVnb3JpYSIsImNvbnN1bHRhclByb2R1Y3RvcyIsImNhdGVnb3JpYSIsInNlYXJjaCIsInNldFNlYXJjaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JtIiwiY2xhc3NOYW1lIiwiZmxleEZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsInZhbHVlIiwiaWQiLCJuYW1lIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvcHRpb24iLCJtYXAiLCJOb21icmUiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Formulario.js\n");

/***/ })

});