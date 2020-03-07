"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _aionicLibrary = require("aionic-library");

var _Content = _interopRequireDefault(require("./Content"));

var _Title = _interopRequireDefault(require("./Title"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Loader = function Loader(props) {
  var title = props.title,
      wrapContent = props.wrapContent,
      children = props.children;

  var content = _react["default"].createElement("div", null, title.length ? _react["default"].createElement(_Title["default"], {
    title: title
  }) : null, _react["default"].createElement("div", {
    className: "d-md-none"
  }, _react["default"].createElement(_aionicLibrary.Spinner, null)), _react["default"].createElement("div", {
    className: "d-none d-md-block"
  }, children));

  return wrapContent ? _react["default"].createElement(_Content["default"], null, content) : content;
};

Loader.defaultProps = {
  wrapContent: true,
  title: ''
};
var _default = Loader;
exports["default"] = _default;