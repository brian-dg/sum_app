/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/CategoriasProvider.jsx":
/*!****************************************!*\
  !*** ./context/CategoriasProvider.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CategoriaProvider\": () => (/* binding */ CategoriaProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CategoriaContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst CategoriaProvider = ({ children  })=>{\n    const { 0: categorias , 1: setCategorias  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const obtenerCategoria = async ()=>{\n        try {\n            const url = `http://localhost:1337/categorias`;\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default()(url);\n            setCategorias(data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        obtenerCategoria();\n    }, []);\n    const handleClickCategoria = (id)=>{\n        console.log(\"id\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CategoriaContext.Provider, {\n        value: {\n            categorias,\n            handleClickCategoria\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\context\\\\CategoriasProvider.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriaContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0NhdGVnb3JpYXNQcm92aWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ2pDO0FBR3pCLEtBQUssQ0FBQ0ksZ0JBQWdCLGlCQUFHRixvREFBYTtBQUV0QyxLQUFLLENBQUNHLGlCQUFpQixJQUFJLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBRTNDLEtBQUssTUFBRUMsVUFBVSxNQUFDQyxhQUFhLE1BQUlSLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBRzlDLEtBQUssQ0FBQ1MsZ0JBQWdCLGFBQWdCLENBQUM7UUFDckMsR0FBRyxFQUFDO1lBQ0YsS0FBSyxDQUFDQyxHQUFHLElBQUksZ0NBQWdDO1lBQzdDLEtBQUssQ0FBQyxDQUFDQyxDQUFBQSxJQUFJLEdBQUMsR0FBRyxLQUFLLENBQUNSLDRDQUFLLENBQUNPLEdBQUc7WUFDOUJGLGFBQWEsQ0FBQ0csSUFBSTtRQUVwQixDQUFDLE1BQUssRUFBQ0MsS0FBSyxFQUFDLENBQUM7WUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7UUFDbkIsQ0FBQztJQUNILENBQUM7SUFDRFgsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZRLGdCQUFnQjtJQUNsQixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUosS0FBSyxDQUFDTSxvQkFBb0IsSUFBR0MsRUFBRSxHQUFJLENBQUM7UUFDbkNILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUk7SUFDakIsQ0FBQztJQUNELE1BQU0sNkVBQ0hWLGdCQUFnQixDQUFDYSxRQUFRO1FBQ3RCQyxLQUFLLEVBQUUsQ0FBQztZQUNOWCxVQUFVO1lBQ1ZRLG9CQUFvQjtRQUN0QixDQUFDO2tCQUNBVCxRQUFROzs7Ozs7QUFHakIsQ0FBQztBQUU0QjtBQUU3QixpRUFBZUYsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW1fYXBwLy4vY29udGV4dC9DYXRlZ29yaWFzUHJvdmlkZXIuanN4PzBhZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jb25zdCBDYXRlZ29yaWFDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5jb25zdCBDYXRlZ29yaWFQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuXHJcbiAgY29uc3QgW2NhdGVnb3JpYXMsc2V0Q2F0ZWdvcmlhc10gPSB1c2VTdGF0ZShbXSk7XHJcbiBcclxuXHJcbiAgY29uc3Qgb2J0ZW5lckNhdGVnb3JpYSA9ICBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjEzMzcvY2F0ZWdvcmlhc2BcclxuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3ModXJsKSAgICBcclxuICAgICAgc2V0Q2F0ZWdvcmlhcyhkYXRhKVxyXG4gICAgICBcclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgb2J0ZW5lckNhdGVnb3JpYSgpXHJcbiAgfSxbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tDYXRlZ29yaWEgPSBpZCA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKFwiaWRcIilcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXRlZ29yaWFDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgIGNhdGVnb3JpYXMsXHJcbiAgICAgICAgICBoYW5kbGVDbGlja0NhdGVnb3JpYSxcclxuICAgICAgICB9fT4gICAgIFxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2F0ZWdvcmlhQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgeyBDYXRlZ29yaWFQcm92aWRlciB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmlhQ29udGV4dDtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwiYXhpb3MiLCJDYXRlZ29yaWFDb250ZXh0IiwiQ2F0ZWdvcmlhUHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhdGVnb3JpYXMiLCJzZXRDYXRlZ29yaWFzIiwib2J0ZW5lckNhdGVnb3JpYSIsInVybCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbGlja0NhdGVnb3JpYSIsImlkIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/CategoriasProvider.jsx\n");

/***/ }),

/***/ "./context/ProductosProvider.jsx":
/*!***************************************!*\
  !*** ./context/ProductosProvider.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductosProvider\": () => (/* binding */ ProductosProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ProductosContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ProductosProvider = ({ children  })=>{\n    const { 0: productos , 1: setProductos  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const consultarProductos = async (datos)=>{\n        try {\n            const url = `http://localhost:1337/productos?categorias=${datos}`;\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default()(url);\n            setProductos(data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductosContext.Provider, {\n        value: {\n            consultarProductos,\n            productos\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\context\\\\ProductosProvider.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductosContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1Byb2R1Y3Rvc1Byb3ZpZGVyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDakM7QUFFekIsS0FBSyxDQUFDSSxnQkFBZ0IsaUJBQUdGLG9EQUFhO0FBQ3RDLEtBQUssQ0FBQ0csaUJBQWlCLElBQUksQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxHQUFLLENBQUM7SUFDM0MsS0FBSyxNQUFFQyxTQUFTLE1BQUNDLFlBQVksTUFBSVIsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFFNUMsS0FBSyxDQUFDUyxrQkFBa0IsVUFBU0MsS0FBSyxHQUFHLENBQUM7UUFDeEMsR0FBRyxFQUFDO1lBQ0YsS0FBSyxDQUFDQyxHQUFHLElBQUksMkNBQTJDLEVBQUVELEtBQUs7WUFDL0QsS0FBSyxDQUFDLENBQUNFLENBQUFBLElBQUksR0FBQyxHQUFHLEtBQUssQ0FBQ1QsNENBQUssQ0FBQ1EsR0FBRztZQUM5QkgsWUFBWSxDQUFDSSxJQUFJO1FBQ25CLENBQUMsTUFBSyxFQUFDQyxLQUFLLEVBQUMsQ0FBQztZQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSztRQUNuQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sNkVBQ0hULGdCQUFnQixDQUFDWSxRQUFRO1FBQ3RCQyxLQUFLLEVBQUUsQ0FBQztZQUNOUixrQkFBa0I7WUFDbEJGLFNBQVM7UUFDWCxDQUFDO2tCQUNBRCxRQUFROzs7Ozs7QUFHakIsQ0FBQztBQUU0QjtBQUU3QixpRUFBZUYsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdW1fYXBwLy4vY29udGV4dC9Qcm9kdWN0b3NQcm92aWRlci5qc3g/Y2M5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdG9zQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5jb25zdCBQcm9kdWN0b3NQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbcHJvZHVjdG9zLHNldFByb2R1Y3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGNvbnN1bHRhclByb2R1Y3RvcyA9IGFzeW5jIGRhdG9zID0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDoxMzM3L3Byb2R1Y3Rvcz9jYXRlZ29yaWFzPSR7ZGF0b3N9YDtcclxuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3ModXJsKTtcclxuICAgICAgc2V0UHJvZHVjdG9zKGRhdGEpXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZHVjdG9zQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICBjb25zdWx0YXJQcm9kdWN0b3MsXHJcbiAgICAgICAgICBwcm9kdWN0b3NcclxuICAgICAgICB9fT4gICAgIFxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUHJvZHVjdG9zQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgeyBQcm9kdWN0b3NQcm92aWRlciB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdG9zQ29udGV4dDtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjcmVhdGVDb250ZXh0IiwiYXhpb3MiLCJQcm9kdWN0b3NDb250ZXh0IiwiUHJvZHVjdG9zUHJvdmlkZXIiLCJjaGlsZHJlbiIsInByb2R1Y3RvcyIsInNldFByb2R1Y3RvcyIsImNvbnN1bHRhclByb2R1Y3RvcyIsImRhdG9zIiwidXJsIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/ProductosProvider.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_CategoriasProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CategoriasProvider */ \"./context/CategoriasProvider.jsx\");\n/* harmony import */ var _context_ProductosProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/ProductosProvider */ \"./context/ProductosProvider.jsx\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CategoriasProvider__WEBPACK_IMPORTED_MODULE_2__.CategoriaProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ProductosProvider__WEBPACK_IMPORTED_MODULE_3__.ProductosProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrador\\\\Desktop\\\\Proyectos\\\\REACT\\\\strapi-ecommerce\\\\tienda\\\\sum_app\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThCO0FBQ21DO0FBQ0Q7U0FFdkRFLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBRXhDLE1BQU0sNkVBQ0hKLDBFQUFpQjs4RkFDZkMseUVBQWlCO2tHQUNmRSxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBS2hDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1bV9hcHAvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBDYXRlZ29yaWFQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvQ2F0ZWdvcmlhc1Byb3ZpZGVyJztcbmltcG9ydCB7IFByb2R1Y3Rvc1Byb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9Qcm9kdWN0b3NQcm92aWRlcic7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXG4gIHJldHVybihcbiAgICA8Q2F0ZWdvcmlhUHJvdmlkZXI+XG4gICAgICA8UHJvZHVjdG9zUHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUHJvZHVjdG9zUHJvdmlkZXI+XG4gICAgPC9DYXRlZ29yaWFQcm92aWRlcj5cbiAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJDYXRlZ29yaWFQcm92aWRlciIsIlByb2R1Y3Rvc1Byb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();