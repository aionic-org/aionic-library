"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InputSelect = function InputSelect(_ref) {
  var optionList = _ref.optionList,
      name = _ref.name,
      classes = _ref.classes,
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      required = _ref.required,
      showDefault = _ref.showDefault;
  return _react["default"].createElement("select", {
    name: name,
    className: "InputSelect form-control ".concat(classes.join(' ')),
    defaultValue: defaultValue,
    value: value,
    onChange: onChange,
    disabled: disabled,
    required: required
  }, showDefault ? _react["default"].createElement("option", {
    value: ""
  }, "-") : null, optionList.map(function (option, i) {
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