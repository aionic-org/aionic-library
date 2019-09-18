var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import { create } from 'axios';

import Session from './session';

// default config
var axios = create({
	baseURL: process.env.REACT_APP_CORE_URL
});

var Api = function () {
	function Api() {
		_classCallCheck(this, Api);
	}

	_createClass(Api, null, [{
		key: 'validateResponse',
		value: function validateResponse(res) {
			if (res.data.status < 200 || res.data.status >= 300) {
				return Promise.reject(res);
			}
			return Promise.resolve(res.data.data);
		}
	}, {
		key: 'fetchData',
		value: function fetchData(endpoint) {
			var _this = this;

			var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var config = { headers: { Authorization: 'Bearer ' + Session.getToken() }, params: params };

			return axios.get(endpoint, config).then(function (res) {
				return _this.validateResponse(res);
			}).catch(function (err) {
				return Promise.reject(err);
			});
		}
	}, {
		key: 'deleteData',
		value: function deleteData(endpoint) {
			var _this2 = this;

			var config = { headers: { Authorization: 'Bearer ' + Session.getToken() } };

			return axios.delete(endpoint, config).then(function (res) {
				return _this2.validateResponse(res);
			}).catch(function (err) {
				return Promise.reject(err);
			});
		}
	}, {
		key: 'postData',
		value: function postData(endpoint, data) {
			var _this3 = this;

			var authorize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

			var config = {};
			if (authorize === true) {
				config.headers = { Authorization: 'Bearer ' + Session.getToken() };
			}

			return axios.post(endpoint, data, config).then(function (res) {
				return _this3.validateResponse(res);
			}).catch(function (err) {
				return Promise.reject(err);
			});
		}
	}, {
		key: 'putData',
		value: function putData(endpoint, data) {
			var _this4 = this;

			var authorize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

			var config = {};
			if (authorize === true) {
				config.headers = { Authorization: 'Bearer ' + Session.getToken() };
			}

			return axios.put(endpoint, data, config).then(function (res) {
				return _this4.validateResponse(res);
			}).catch(function (err) {
				return Promise.reject(err);
			});
		}
	}, {
		key: 'handleHttpError',
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

export default Api;