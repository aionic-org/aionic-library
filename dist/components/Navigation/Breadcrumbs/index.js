"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/no-array-index-key */
var Breadcrumbs = function Breadcrumbs(_ref) {
  var breadcrumbs = _ref.breadcrumbs;
  return _react["default"].createElement("div", {
    className: "Breadcrumbs"
  }, _react["default"].createElement("nav", {
    "aria-label": "breadcrumb"
  }, _react["default"].createElement("ol", {
    className: "breadcrumb"
  }, breadcrumbs.map(function (breadcrumb, i) {
    if (i === breadcrumbs.length - 1) {
      return _react["default"].createElement("li", {
        className: "breadcrumb-item active",
        "aria-current": "page",
        key: i
      }, breadcrumb.title);
    }

    return _react["default"].createElement("li", {
      className: "breadcrumb-item",
      key: i
    }, _react["default"].createElement(_reactRouterDom.Link, {
      to: breadcrumb.link
    }, breadcrumb.title));
  }))));
};

Breadcrumbs.defaultProps = {
  breadcrumbs: []
};
var _default = Breadcrumbs;
exports["default"] = _default;