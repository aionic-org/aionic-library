"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Alert = function Alert(_ref) {
  var type = _ref.type,
      dismissible = _ref.dismissible,
      children = _ref.children;
  return _react["default"].createElement("div", {
    className: "Alert"
  }, _react["default"].createElement("div", {
    className: "alert alert-".concat(type, " ").concat(dismissible ? '' : 'alert-dismissible fade show'),
    role: "alert"
  }, children, dismissible ? _react["default"].createElement("button", {
    type: "button",
    "class": "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, _react["default"].createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")) : null));
};

Alert.defaultProps = {
  dismissible: true
};
var _default = Alert;
exports["default"] = _default;