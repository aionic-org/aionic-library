var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-undef */
import decode from 'jwt-decode';

import Api from './api';

var Session = function () {
	function Session() {
		_classCallCheck(this, Session);
	}

	_createClass(Session, null, [{
		key: 'registerUser',
		value: function registerUser(user, registerHash) {
			var _this = this;

			// register user
			return Api.postData('auth/register/' + registerHash, user, false).then(function () {
				// signin user
				return _this.signinUser(user).then(function (res) {
					return Promise.resolve(res);
				}).catch(function (err) {
					return Promise.reject(err);
				});
			}).catch(function (err) {
				return Promise.reject(err);
			});
		}
	}, {
		key: 'signinUser',
		value: function signinUser(user) {
			return Api.postData('auth/signin', user, false).then(function (res) {
				return Promise.resolve(res);
			}).catch(function (err) {
				return Promise.reject(err);
			});
		}
	}, {
		key: 'getConfig',
		value: function getConfig() {
			return JSON.parse(localStorage.getItem('config'));
		}
	}, {
		key: 'setConfig',
		value: function setConfig(config) {
			localStorage.setItem('config', JSON.stringify(config));
		}
	}, {
		key: 'getToken',
		value: function getToken() {
			return localStorage.getItem('token');
		}
	}, {
		key: 'setToken',
		value: function setToken(token) {
			localStorage.setItem('token', token);
		}
	}, {
		key: 'getUser',
		value: function getUser() {
			return JSON.parse(localStorage.getItem('user'));
		}
	}, {
		key: 'setUser',
		value: function setUser(user) {
			localStorage.setItem('user', JSON.stringify(user));
		}
	}, {
		key: 'clearUser',
		value: function clearUser() {
			localStorage.removeItem('config');
			localStorage.removeItem('token');
			localStorage.removeItem('user');
		}
	}, {
		key: 'isAdmin',
		value: function isAdmin() {
			return Session.getUser().userRole.name === 'Admin';
		}
	}, {
		key: 'isLoggedIn',
		value: function isLoggedIn() {
			var token = this.getToken();

			return token !== null && token.length && this.isValidToken(token);
		}
	}, {
		key: 'isValidToken',
		value: function isValidToken(encodedToken) {
			var token = decode(encodedToken);

			if (!token.exp || !token.iss || !token.aud) {
				return false;
			}

			var expDate = new Date(0);
			expDate.setUTCSeconds(token.exp);

			var validDetails = expDate > new Date() && token.iss === 'aionic-core' && token.aud === 'aionic-client';

			return validDetails;
		}
	}]);

	return Session;
}();

export default Session;