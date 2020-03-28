"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Error.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Error = function Error(props) {
  var message = props.message,
      assignedClasses = props.assignedClasses,
      showIcon = props.showIcon;
  var icon = showIcon ? _react["default"].createElement("i", {
    className: "fas fa-exclamation-triangle d-block text-center"
  }) : null;
  return _react["default"].createElement("div", {
    className: "Error ".concat(assignedClasses.join(' '))
  }, icon, _react["default"].createElement("p", {
    className: "text-center text-danger mt-2 mb-0"
  }, message));
};

Error.defaultProps = {
  assignedClasses: [],
  showIcon: true
};
var _default = Error;
exports["default"] = _default;