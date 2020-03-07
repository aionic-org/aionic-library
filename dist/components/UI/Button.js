"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Spinner = _interopRequireDefault(require("./Spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = function Button(props) {
  var block = props.block,
      icon = props.icon,
      isLoading = props.isLoading,
      label = props.label,
      onClickHandler = props.onClickHandler,
      small = props.small,
      type = props.type;

  var getButtonClasses = function getButtonClasses() {
    var buttonClasses = ['button', "button-".concat(type)];

    if (block) {
      buttonClasses.push('btn-block');
    }

    if (small) {
      buttonClasses.push('btn-sm');
    }

    return buttonClasses.join(' ');
  };

  if (isLoading) {
    return _react["default"].createElement("button", {
      type: "button",
      className: getButtonClasses()
    }, _react["default"].createElement(_Spinner["default"], {
      onBtn: true
    }));
  }

  return _react["default"].createElement("button", {
    type: "button",
    className: getButtonClasses(),
    onClick: onClickHandler
  }, icon ? _react["default"].createElement("i", {
    className: "".concat(icon, " ").concat(label ? 'mr-2' : '')
  }) : null, label);
};

Button.defaultProps = {
  block: false,
  icon: '',
  isLoading: false,
  label: '',
  small: false,
  type: 'primary'
};
var _default = Button;
exports["default"] = _default;