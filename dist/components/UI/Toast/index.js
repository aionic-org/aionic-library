"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Toast.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Toast = function Toast(props) {
  return _react["default"].createElement("div", {
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    className: "toast shadow show fadeInRight",
    "data-autohide": "false"
  }, _react["default"].createElement("div", {
    className: "toast-header"
  }, _react["default"].createElement("svg", {
    className: " rounded mr-2",
    width: "20",
    height: "20",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid slice",
    focusable: "false",
    role: "img"
  }, _react["default"].createElement("rect", {
    fill: "".concat(props.success ? '#00b894' : '#d63031'),
    width: "100%",
    height: "100%"
  })), _react["default"].createElement("strong", {
    className: "mr-auto"
  }, process.env.REACT_APP_NAME), _react["default"].createElement("small", null, "Just now")), _react["default"].createElement("div", {
    className: "toast-body"
  }, props.msg));
};

Toast.defaultProps = {
  success: true
};
var _default = Toast;
exports["default"] = _default;