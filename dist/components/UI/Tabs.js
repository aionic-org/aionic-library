"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Tabs = function Tabs(props) {
  var tabs = props.tabs,
      handleClick = props.handleClick,
      preselectTabIdx = props.preselectTabIdx;

  var _useState = (0, _react.useState)(preselectTabIdx),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var handleTabChange = function handleTabChange(e) {
    var pos = Number(e.target.dataset.pos);

    if (pos === activeTab) {
      setActiveTab(null);
      props.handleClick(null);
    } else {
      setActiveTab(pos);
      handleClick(tabs[pos].name, tabs[pos].id);
    }
  };

  return _react["default"].createElement("div", {
    className: "Tabs"
  }, _react["default"].createElement("ul", {
    className: "nav nav-tabs"
  }, tabs.map(function (tab, i) {
    return _react["default"].createElement("li", {
      className: "nav-item",
      key: i
    }, _react["default"].createElement("button", {
      type: "button",
      className: "btn btn-link nav-link ".concat(i === activeTab ? 'active' : ''),
      onClick: handleTabChange,
      key: i,
      "data-pos": i,
      "data-id": tab.id,
      disabled: tab.disabled === undefined ? false : tab.disabled,
      href: "#"
    }, tab.name));
  })));
};

Tabs.defaultProps = {
  tabs: [],
  preselectTabIdx: null
};
var _default = Tabs;
exports["default"] = _default;