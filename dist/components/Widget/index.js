"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./Widget.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Widget = function Widget(props) {
  var title = props.title,
      icon = props.icon,
      link = props.link,
      iconBackground = props.iconBackground,
      iconColor = props.iconColor,
      margin = props.margin;

  var content = _react["default"].createElement("div", {
    className: "Widget"
  }, _react["default"].createElement("div", {
    className: "border rounded shadow-sm ".concat(margin ? 'margin' : '')
  }, _react["default"].createElement("i", {
    className: "".concat(icon, " w-100 fa-2x text-center py-4"),
    style: {
      background: iconBackground,
      color: iconColor
    }
  }), _react["default"].createElement("div", {
    className: "p-3 text-center font-weight-bold"
  }, _react["default"].createElement("span", null, title))));

  return link.length ? _react["default"].createElement(_reactRouterDom.Link, {
    className: "card-link-custom",
    to: link
  }, content) : content;
};

Widget.defaultProps = {
  title: '',
  icon: '',
  link: '',
  iconColor: 'white',
  margin: true
};
var _default = Widget;
exports["default"] = _default;