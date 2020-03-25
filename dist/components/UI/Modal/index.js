"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactModal = _interopRequireDefault(require("react-modal"));

require("./Modal.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Modal = function Modal(props) {
  var title = props.title,
      children = props.children,
      isOpen = props.isOpen,
      large = props.large,
      handleClose = props.handleClose;
  return _react["default"].createElement(_reactModal["default"], {
    isOpen: isOpen,
    contentLabel: "Minimal Modal Example",
    className: "Modal ".concat(large ? 'large' : ''),
    overlayClassName: "Modal-Overlay"
  }, _react["default"].createElement("div", {
    className: "modal-header"
  }, _react["default"].createElement("h5", {
    className: "modal-title"
  }, title), _react["default"].createElement("button", {
    type: "button",
    className: "close",
    "aria-label": "Close",
    onClick: handleClose
  }, _react["default"].createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), _react["default"].createElement("div", {
    className: "modal-body"
  }, children));
};

Modal.defaultProps = {
  isOpen: false,
  large: false
};
var _default = Modal;
exports["default"] = _default;