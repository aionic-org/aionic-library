"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _api = _interopRequireDefault(require("../services/api"));

var _session = _interopRequireDefault(require("../services/session"));

var _Spinner = _interopRequireDefault(require("./UI/Spinner"));

var _helper = _interopRequireDefault(require("../services/helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SigninForm = /*#__PURE__*/function (_Component) {
  _inherits(SigninForm, _Component);

  function SigninForm(props) {
    var _this;

    _classCallCheck(this, SigninForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SigninForm).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (e) {
      _helper["default"].updateObjectPropByEvent(_this.state.user, e, function (user) {
        _this.setState({
          user: user
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.setState({
        isLoading: true,
        msg: ''
      });

      _session["default"].signinUser(_this.state.user).then(function (res) {
        var config = res.config,
            token = res.token,
            user = res.user;

        if (token) {
          _session["default"].clearUser();

          _session["default"].setConfig(config);

          _session["default"].setToken(token);

          _session["default"].setUser(user);

          _this.props.history.push('/');
        } else {
          _this.setState({
            isLoading: false,
            msg: _api["default"].handleHttpError('Failed to login, no token provided!')
          });
        }
      })["catch"](function (err) {
        _this.setState({
          isLoading: false,
          msg: _api["default"].handleHttpError(err)
        });
      });
    });

    _this.state = {
      user: {},
      isLoading: false,
      msg: ''
    };
    return _this;
  }

  _createClass(SigninForm, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          msg = _this$state.msg;
      return _react["default"].createElement("div", {
        className: "SigninForm"
      }, _react["default"].createElement("form", {
        onSubmit: this.handleSubmit
      }, _react["default"].createElement("input", {
        type: "email",
        name: "email",
        className: "form-control mb-1",
        placeholder: "Email address",
        onChange: this.handleInputChange,
        required: true
      }), _react["default"].createElement("input", {
        type: "password",
        name: "password",
        className: "form-control",
        placeholder: "Password",
        onChange: this.handleInputChange,
        required: true
      }), _react["default"].createElement("button", {
        className: "button button-primary btn-block mt-3",
        type: "submit"
      }, isLoading ? _react["default"].createElement(_Spinner["default"], {
        onBtn: true
      }) : _react["default"].createElement("div", null, _react["default"].createElement("i", {
        className: "fas fa-sign-in-alt mr-1"
      }), " Sign in")), msg.length ? _react["default"].createElement("p", {
        className: "mt-3 text-danger"
      }, msg) : null));
    }
  }]);

  return SigninForm;
}(_react.Component);

var _default = (0, _reactRouterDom.withRouter)(SigninForm);

exports["default"] = _default;