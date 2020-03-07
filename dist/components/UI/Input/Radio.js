"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InputRadio = function InputRadio(props) {
  return _react["default"].createElement("div", {
    className: "InputRadio form-check form-check-inline"
  }, _react["default"].createElement("input", {
    type: "radio",
    name: "priority",
    className: "form-check-input",
    value: props.value,
    defaultChecked: props.defaultChecked === props.value ? 'checked' : '',
    onChange: props.onChange
  }), _react["default"].createElement("label", {
    className: "form-check-label"
  }, props.title));
};

var _default = InputRadio;
exports["default"] = _default;