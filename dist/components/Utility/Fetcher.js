var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import Api from '../../services/api';

import Error from '../UI/Error';
import Spinner from '../UI/Spinner';

var Fetcher = function (_Component) {
	_inherits(Fetcher, _Component);

	function Fetcher(props) {
		var _this2 = this;

		_classCallCheck(this, Fetcher);

		var _this = _possibleConstructorReturn(this, (Fetcher.__proto__ || Object.getPrototypeOf(Fetcher)).call(this, props));

		_this.componentDidMount = function () {
			_this.fetchData();
		};

		_this.fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
			var data;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.prev = 0;

							_this.setState({ isLoading: true });

							_context.next = 4;
							return Api.fetchData(_this.props.url, _this.props.params);

						case 4:
							data = _context.sent;

							_this.setState({ isLoading: false, data: data });
							_context.next = 11;
							break;

						case 8:
							_context.prev = 8;
							_context.t0 = _context['catch'](0);

							_this.setState({ isLoading: false, msg: Api.handleHttpError(_context.t0) });

						case 11:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this2, [[0, 8]]);
		}));


		_this.state = {
			isLoading: true,
			msg: null,
			data: []
		};
		return _this;
	}

	_createClass(Fetcher, [{
		key: 'render',
		value: function render() {
			var showSpinnerPadding = this.props.showSpinnerPadding;
			var _state = this.state,
			    isLoading = _state.isLoading,
			    msg = _state.msg,
			    data = _state.data;


			if (isLoading) {
				return React.createElement(Spinner, { showPadding: showSpinnerPadding });
			}

			if (msg) {
				return React.createElement(Error, { message: msg });
			}

			return this.props.children(data, this.fetchData);
		}
	}]);

	return Fetcher;
}(Component);

Fetcher.defaultProps = {
	showSpinnerPadding: false,
	params: {}
};

export default Fetcher;