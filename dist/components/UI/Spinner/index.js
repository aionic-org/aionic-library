"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Spinner.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Spinner = function Spinner(_ref) {
  var onBtn = _ref.onBtn,
      showPadding = _ref.showPadding;
  return _react["default"].createElement("div", {
    className: "Spinner ".concat(onBtn ? 'onBtn' : '', " ").concat(showPadding ? 'showPadding' : '')
  }, _react["default"].createElement("div", {
    className: "bounce1"
  }), _react["default"].createElement("div", {
    className: "bounce2"
  }), _react["default"].createElement("div", {
    className: "bounce3"
  }));
};

Spinner.defaultProps = {
  onBtn: false,
  showPadding: false
};
var _default = Spinner;
exports["default"] = _default;