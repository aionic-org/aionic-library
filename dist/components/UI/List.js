"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var List = function List(props) {
  var elements = props.elements,
      capitalize = props.capitalize;
  return _react["default"].createElement("ul", {
    className: "list-group"
  }, elements.map(function (element, i) {
    return _react["default"].createElement("li", {
      className: "list-group-item d-flex justify-content-between align-items-center ".concat(capitalize ? 'text-capitalize' : '', " ") // eslint-disable-next-line react/no-array-index-key
      ,
      key: i
    }, element.label, element.badge !== undefined ? _react["default"].createElement("span", {
      className: "badge badge-primary badge-pill"
    }, element.badge) : null);
  }));
};

List.defaultProps = {
  elements: [],
  capitalize: false
};
var _default = List;
exports["default"] = _default;