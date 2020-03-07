"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Footer = function Footer() {
  return _react["default"].createElement("div", {
    className: "Footer"
  }, _react["default"].createElement("div", {
    className: "container mt-4"
  }, _react["default"].createElement("hr", {
    className: "featurette-divider"
  }), _react["default"].createElement("a", {
    href: "https://aionic.org",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-muted d-block text-center"
  }, "Aionic")));
};

var _default = Footer;
exports["default"] = _default;