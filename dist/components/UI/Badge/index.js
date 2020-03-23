"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Badge.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Badge = function Badge(props) {
  var label = props.label,
      info = props.info,
      type = props.type,
      margin = props.margin;

  var getBadgeClasses = function getBadgeClasses() {
    var badgeClasses = ['badge', "badge-".concat(type)];

    if (margin) {
      badgeClasses.push('badge-margin');
    }

    return badgeClasses.join(' ');
  };

  return _react["default"].createElement("div", {
    className: "Badge text-lowercase"
  }, _react["default"].createElement("span", {
    className: getBadgeClasses(),
    title: info
  }, label));
};

Badge.defaultProps = {
  info: '',
  margin: false,
  type: 'primary'
};
var _default = Badge;
exports["default"] = _default;