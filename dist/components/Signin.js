var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Api from '../services/api';
import Session from '../services/session';

import Spinner from './UI/Spinner';
import Helper from '../services/helper';

var SigninForm = function (_Component) {
	_inherits(SigninForm, _Component);

	function SigninForm(props) {
		_classCallCheck(this, SigninForm);

		var _this = _possibleConstructorReturn(this, (SigninForm.__proto__ || Object.getPrototypeOf(SigninForm)).call(this, props));

		_this.handleInputChange = function (e) {
			Helper.updateObjectPropByEvent(_this.state.user, e, function (user) {
				_this.setState({ user: user });
			});
		};

		_this.handleSubmit = function (e) {
			e.preventDefault();

			_this.setState({
				isLoading: true,
				msg: ''
			});

			Session.signinUser({ user: _this.state.user }).then(function (res) {
				if (res.token) {
					Session.clearUser();
					Session.setToken(res.token);
					Session.setUser(res.user);
					_this.props.history.push('/');
				} else {
					_this.setState({
						isLoading: false,
						msg: Api.handleHttpError('Failed to login, no token provided!')
					});
				}
			}).catch(function (err) {
				_this.setState({
					isLoading: false,
					msg: Api.handleHttpError(err)
				});
			});
		};

		_this.state = { user: {}, isLoading: false, msg: '' };
		return _this;
	}

	_createClass(SigninForm, [{
		key: 'render',
		value: function render() {
			var _state = this.state,
			    isLoading = _state.isLoading,
			    msg = _state.msg;


			return React.createElement(
				'div',
				{ className: 'SigninForm' },
				React.createElement(
					'form',
					{ onSubmit: this.handleSubmit },
					React.createElement('input', {
						type: 'email',
						name: 'email',
						className: 'form-control mb-1',
						placeholder: 'Email address',
						onChange: this.handleInputChange,
						required: true
					}),
					React.createElement('input', {
						type: 'password',
						name: 'password',
						className: 'form-control',
						placeholder: 'Password',
						onChange: this.handleInputChange,
						required: true
					}),
					React.createElement(
						'button',
						{ className: 'button button-primary btn-block mt-3', type: 'submit' },
						isLoading ? React.createElement(Spinner, { onBtn: true }) : React.createElement(
							'div',
							null,
							React.createElement('i', { className: 'fas fa-sign-in-alt mr-1' }),
							' Sign in'
						)
					),
					msg.length ? React.createElement(
						'p',
						{ className: 'mt-3 text-danger' },
						msg
					) : null
				)
			);
		}
	}]);

	return SigninForm;
}(Component);

export default withRouter(SigninForm);