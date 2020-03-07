"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InputSelect = function InputSelect(props) {
  return _react["default"].createElement("select", {
    name: props.name,
    className: "InputSelect form-control ".concat(props.classes.join(' ')),
    defaultValue: props.defaultValue,
    onChange: props.onChange,
    disabled: props.disabled,
    required: props.required
  }, props.showDefault ? _react["default"].createElement("option", {
    value: ""
  }, "-") : null, props.optionList.map(function (option, i) {
    return _react["default"].createElement("option", {
      value: option.value,
      key: option.id || i
    }, option.title);
  }));
};

InputSelect.defaultProps = {
  classes: [],
  showDefault: true,
  disabled: false,
  required: false
};
var _default = InputSelect;
exports["default"] = _default;