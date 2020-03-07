"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = require("axios");

var _fileSaver = require("file-saver");

var _session = _interopRequireDefault(require("./session"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// default config
var axios = (0, _axios.create)({
  baseURL: process.env.REACT_APP_AIONIC_CORE_URL,
  headers: {
    Client: process.env.REACT_APP_NAME_SHORT
  }
});

var Api = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);
  }

  _createClass(Api, null, [{
    key: "validateResponse",
    value: function validateResponse(res) {
      if (res.data.status < 200 || res.data.status >= 300) {
        return Promise.reject(res);
      }

      return Promise.resolve(res.data.data);
    }
  }, {
    key: "fetchData",
    value: function fetchData(endpoint) {
      var _this = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var config = {
        headers: {
          Authorization: "Bearer ".concat(_session["default"].getToken())
        },
        params: params
      };
      return axios.get(endpoint, config).then(function (res) {
        return _this.validateResponse(res);
      })["catch"](function (err) {
        return Promise.reject(err);
      });
    }
  }, {
    key: "deleteData",
    value: function deleteData(endpoint) {
      var _this2 = this;

      var config = {
        headers: {
          Authorization: "Bearer ".concat(_session["default"].getToken())
        }
      };
      return axios["delete"](endpoint, config).then(function (res) {
        return _this2.validateResponse(res);
      })["catch"](function (err) {
        return Promise.reject(err);
      });
    }
  }, {
    key: "postData",
    value: function postData(endpoint, data) {
      var _this3 = this;

      var authorize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var config = {};

      if (authorize === true) {
        config.headers = {
          Authorization: "Bearer ".concat(_session["default"].getToken())
        };
      }

      return axios.post(endpoint, data, config).then(function (res) {
        return _this3.validateResponse(res);
      })["catch"](function (err) {
        return Promise.reject(err);
      });
    }
  }, {
    key: "putData",
    value: function putData(endpoint, data) {
      var _this4 = this;

      var authorize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var config = {};

      if (authorize === true) {
        config.headers = {
          Authorization: "Bearer ".concat(_session["default"].getToken())
        };
      }

      return axios.put(endpoint, data, config).then(function (res) {
        return _this4.validateResponse(res);
      })["catch"](function (err) {
        return Promise.reject(err);
      });
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(endpoint) {
      var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'download.txt';
      var config = {
        headers: {
          Authorization: "Bearer ".concat(_session["default"].getToken())
        }
      };
      return axios.request(_objectSpread({}, config, {
        url: endpoint,
        method: 'get',
        responseType: 'blob'
      })).then(function (res) {
        (0, _fileSaver.saveAs)(res.data, filename);
      })["catch"](function (err) {
        return Promise.reject(err);
      });
    }
  }, {
    key: "handleHttpError",
    value: function handleHttpError(error) {
      console.log(error);

      if (error.response !== undefined && error.response.data.error !== undefined) {
        return error.response.data.error;
      }

      if (error.message !== undefined) {
        return error.message;
      }

      return 'Failed to fetch data from server!';
    }
  }]);

  return Api;
}();

exports["default"] = Api;