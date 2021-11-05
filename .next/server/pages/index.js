"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state_users_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/users/action */ "./src/state/users/action.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\www\\nodeJs\\crm-soraya\\src\\pages\\index.js";





const App = ({
  UserFetchAction
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("main", {
      id: "main-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "content",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "block",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "block-header block-header-default",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
              className: "block-title",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("small", {
                children: "Get Started"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 57
              }, undefined), " Blank"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 29
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "block-options pl-0",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                type: "button",
                className: "btn-block-option"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                type: "button",
                className: "btn-block-option",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                  className: "si si-pin"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                type: "button",
                className: "btn-block-option",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                  className: "si si-refresh"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                type: "button",
                className: "btn-block-option bg-primery"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 33
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                type: "button",
                className: "btn-block-option",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                  className: "si si-close"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 37
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "block-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              children: "Create your own awesome project"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

async function getServerSideProps({
  req
}) {
  if (!req.auth) {
    return req.redirectTo('/login');
  }

  return {
    props: {}
  };
}

const mapDispatchToProps = dispatch => {
  return {
    UserFetchAction: userId => dispatch((0,_state_users_action__WEBPACK_IMPORTED_MODULE_1__.UserFetchAction)(userId))
  };
};

const getStateToProps = state => ({
  users: state.users
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(getStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/state/users/action-type.js":
/*!****************************************!*\
  !*** ./src/state/users/action-type.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USER_FETCH_SUCCEEDED": () => (/* binding */ USER_FETCH_SUCCEEDED),
/* harmony export */   "USER_FETCH_REQUESTED": () => (/* binding */ USER_FETCH_REQUESTED),
/* harmony export */   "USER_FETCH_FAILED": () => (/* binding */ USER_FETCH_FAILED)
/* harmony export */ });
const USER_FETCH_SUCCEEDED = 'USER_ACTION_USER_FETCH_SUCCEEDED';
const USER_FETCH_REQUESTED = 'USER_ACTION_USER_FETCH_REQUESTED';
const USER_FETCH_FAILED = 'USER_ACTION_USER_FETCH_FAILED';

/***/ }),

/***/ "./src/state/users/action.js":
/*!***********************************!*\
  !*** ./src/state/users/action.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserFetchAction": () => (/* binding */ UserFetchAction),
/* harmony export */   "UserFetchSuccesAction": () => (/* binding */ UserFetchSuccesAction),
/* harmony export */   "UserFetchErrorAction": () => (/* binding */ UserFetchErrorAction)
/* harmony export */ });
/* harmony import */ var _action_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-type */ "./src/state/users/action-type.js");

const UserFetchAction = userId => ({
  type: _action_type__WEBPACK_IMPORTED_MODULE_0__.USER_FETCH_REQUESTED,
  payload: userId
});
const UserFetchSuccesAction = user => ({
  type: _action_type__WEBPACK_IMPORTED_MODULE_0__.USER_FETCH_SUCCEEDED,
  payload: user
});
const UserFetchErrorAction = error => ({
  type: _action_type__WEBPACK_IMPORTED_MODULE_0__.USER_FETCH_FAILED,
  payload: error
});

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIsR0FBRywrQkFBMUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7QUFFTyxNQUFNZixlQUFlLEdBQUlTLE1BQUQsS0FBYTtBQUN4Q08sRUFBQUEsSUFBSSxFQUFFRiw4REFEa0M7QUFFeENHLEVBQUFBLE9BQU8sRUFBRVI7QUFGK0IsQ0FBYixDQUF4QjtBQUlBLE1BQU1TLHFCQUFxQixHQUFJQyxJQUFELEtBQVc7QUFDNUNILEVBQUFBLElBQUksRUFBRUgsOERBRHNDO0FBRTVDSSxFQUFBQSxPQUFPLEVBQUVFO0FBRm1DLENBQVgsQ0FBOUI7QUFJQSxNQUFNQyxvQkFBb0IsR0FBSUMsS0FBRCxLQUFZO0FBQzVDTCxFQUFBQSxJQUFJLEVBQUVELDJEQURzQztBQUU1Q0UsRUFBQUEsT0FBTyxFQUFFSTtBQUZtQyxDQUFaLENBQTdCOzs7Ozs7Ozs7O0FDVlA7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NybS1zb3JheWEvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3JtLXNvcmF5YS8uL3NyYy9zdGF0ZS91c2Vycy9hY3Rpb24tdHlwZS5qcyIsIndlYnBhY2s6Ly9jcm0tc29yYXlhLy4vc3JjL3N0YXRlL3VzZXJzL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly9jcm0tc29yYXlhL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9jcm0tc29yYXlhL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBVc2VyRmV0Y2hBY3Rpb24gfSBmcm9tIFwiLi4vc3RhdGUvdXNlcnMvYWN0aW9uXCI7XHJcblxyXG5jb25zdCBBcHAgPSAoeyBVc2VyRmV0Y2hBY3Rpb24gfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPG1haW4gaWQ9XCJtYWluLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jay1oZWFkZXIgYmxvY2staGVhZGVyLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJibG9jay10aXRsZVwiPjxzbWFsbD5HZXQgU3RhcnRlZDwvc21hbGw+IEJsYW5rPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stb3B0aW9ucyBwbC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuLWJsb2NrLW9wdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuLWJsb2NrLW9wdGlvblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic2kgc2ktcGluXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4tYmxvY2stb3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNpIHNpLXJlZnJlc2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0bi1ibG9jay1vcHRpb24gYmctcHJpbWVyeVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuLWJsb2NrLW9wdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzaSBzaS1jbG9zZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2stY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q3JlYXRlIHlvdXIgb3duIGF3ZXNvbWUgcHJvamVjdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxIH0pIHtcclxuICAgIGlmICghcmVxLmF1dGgpIHtcclxuICAgICAgICByZXR1cm4gcmVxLnJlZGlyZWN0VG8oJy9sb2dpbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHt9LFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgVXNlckZldGNoQWN0aW9uOiAodXNlcklkKSA9PiBkaXNwYXRjaChVc2VyRmV0Y2hBY3Rpb24odXNlcklkKSksXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAgIHVzZXJzOiBzdGF0ZS51c2Vyc1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoZ2V0U3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7IiwiZXhwb3J0IGNvbnN0IFVTRVJfRkVUQ0hfU1VDQ0VFREVEID0gJ1VTRVJfQUNUSU9OX1VTRVJfRkVUQ0hfU1VDQ0VFREVEJztcclxuZXhwb3J0IGNvbnN0IFVTRVJfRkVUQ0hfUkVRVUVTVEVEID0gJ1VTRVJfQUNUSU9OX1VTRVJfRkVUQ0hfUkVRVUVTVEVEJztcclxuZXhwb3J0IGNvbnN0IFVTRVJfRkVUQ0hfRkFJTEVEID0gJ1VTRVJfQUNUSU9OX1VTRVJfRkVUQ0hfRkFJTEVEJzsiLCJpbXBvcnQgeyBVU0VSX0ZFVENIX1NVQ0NFRURFRCwgVVNFUl9GRVRDSF9GQUlMRUQsIFVTRVJfRkVUQ0hfUkVRVUVTVEVEIH0gZnJvbSBcIi4vYWN0aW9uLXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyRmV0Y2hBY3Rpb24gPSAodXNlcklkKSA9PiAoe1xyXG4gICAgdHlwZTogVVNFUl9GRVRDSF9SRVFVRVNURUQsXHJcbiAgICBwYXlsb2FkOiB1c2VySWRcclxufSk7XHJcbmV4cG9ydCBjb25zdCBVc2VyRmV0Y2hTdWNjZXNBY3Rpb24gPSAodXNlcikgPT4gKHtcclxuICAgIHR5cGU6IFVTRVJfRkVUQ0hfU1VDQ0VFREVELFxyXG4gICAgcGF5bG9hZDogdXNlclxyXG59KTtcclxuZXhwb3J0IGNvbnN0IFVzZXJGZXRjaEVycm9yQWN0aW9uID0gKGVycm9yKSA9PiAoe1xyXG4gICAgdHlwZTogVVNFUl9GRVRDSF9GQUlMRUQsXHJcbiAgICBwYXlsb2FkOiBlcnJvclxyXG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbImNvbm5lY3QiLCJVc2VyRmV0Y2hBY3Rpb24iLCJBcHAiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJhdXRoIiwicmVkaXJlY3RUbyIsInByb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ1c2VySWQiLCJnZXRTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJzIiwiVVNFUl9GRVRDSF9TVUNDRUVERUQiLCJVU0VSX0ZFVENIX1JFUVVFU1RFRCIsIlVTRVJfRkVUQ0hfRkFJTEVEIiwidHlwZSIsInBheWxvYWQiLCJVc2VyRmV0Y2hTdWNjZXNBY3Rpb24iLCJ1c2VyIiwiVXNlckZldGNoRXJyb3JBY3Rpb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=