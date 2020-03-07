"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Progress.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Progress = function Progress(props) {
  var progress = props.progress,
      showPercent = props.showPercent;
  return _react["default"].createElement("div", {
    className: "progress"
  }, _react["default"].createElement("div", {
    className: "progress-bar",
    role: "progressbar",
    style: {
      width: "".concat(progress, "%")
    },
    "aria-valuenow": progress,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, showPercent ? "".concat(progress, "%") : null));
};

Progress.defaultProps = {
  showPercent: false
};
var _default = Progress;
exports["default"] = _default;