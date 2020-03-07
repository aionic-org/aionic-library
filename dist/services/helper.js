"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Helper = /*#__PURE__*/function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: "updateObjectPropByEvent",
    value: function updateObjectPropByEvent(object, event, cb) {
      var target = event.target;
      var name = target.name;
      var value = target.type === 'checkbox' ? target.checked : target.value;

      if (object[name] !== value) {
        var newValue = null; // API can't handle booleans as strings

        if (value === 'true' || value === 'false') {
          newValue = JSON.parse(value);
        } else {
          newValue = value;
        }

        cb(_objectSpread({}, object, _defineProperty({}, name, newValue)));
      }
    }
  }, {
    key: "isJson",
    value: function isJson(string) {
      try {
        JSON.parse(string);
        return true;
      } catch (error) {
        return false;
      }
    }
  }, {
    key: "formatDateTime",
    value: function formatDateTime(_date) {
      var date = _date ? (0, _moment["default"])(_date) : '';
      return date ? date.format('YYYY-MM-DD hh:mm a') : '-';
    }
  }, {
    key: "formatDate",
    value: function formatDate(_date) {
      var date = _date ? (0, _moment["default"])(_date) : '';
      return date ? date.format('YYYY-MM-DD') : '-';
    }
  }, {
    key: "getFilterLists",
    value: function getFilterLists(list) {
      var lists = {
        completeStatus: [{
          value: '',
          title: 'Completed'
        }, {
          value: '1',
          title: 'Yes'
        }, {
          value: '0',
          title: 'No'
        }],
        resultLimits: [{
          value: '',
          title: 'Results'
        }, {
          value: '1',
          title: '1'
        }, {
          value: '3',
          title: '3'
        }, {
          value: '5',
          title: '5'
        }, {
          value: '10',
          title: '10'
        }],
        sortDirections: [{
          value: '',
          title: 'Direction'
        }, {
          value: 'ASC',
          title: 'ASC'
        }, {
          value: 'DESC',
          title: 'DESC'
        }]
      };
      return list && lists[list] ? lists[list] : lists;
    }
  }]);

  return Helper;
}();

exports["default"] = Helper;