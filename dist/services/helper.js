var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import moment from 'moment';

var Helper = function () {
	function Helper() {
		_classCallCheck(this, Helper);
	}

	_createClass(Helper, null, [{
		key: 'updateObjectPropByEvent',
		value: function updateObjectPropByEvent(object, event, cb) {
			var target = event.target;
			var name = target.name;

			var value = target.type === 'checkbox' ? target.checked : target.value;

			if (object[name] !== value) {
				var newValue = null;

				// API can't handle booleans as strings
				if (value === 'true' || value === 'false') {
					newValue = JSON.parse(value);
				} else {
					newValue = value;
				}

				cb(_extends({}, object, _defineProperty({}, name, newValue)));
			}
		}
	}, {
		key: 'isJson',
		value: function isJson(string) {
			try {
				JSON.parse(string);
				return true;
			} catch (error) {
				return false;
			}
		}
	}, {
		key: 'formatDateTime',
		value: function formatDateTime(_date) {
			var date = _date ? moment(_date) : '';
			return date ? date.format('YYYY-MM-DD hh:mm a') : '-';
		}
	}, {
		key: 'formatDate',
		value: function formatDate(_date) {
			var date = _date ? moment(_date) : '';
			return date ? date.format('YYYY-MM-DD') : '-';
		}
	}, {
		key: 'getFilterLists',
		value: function getFilterLists(list) {
			var lists = {
				completeStatus: [{ value: '', title: 'Completed' }, { value: '1', title: 'Yes' }, { value: '0', title: 'No' }],
				resultLimits: [{ value: '', title: 'Results' }, { value: '1', title: '1' }, { value: '3', title: '3' }, { value: '5', title: '5' }, { value: '10', title: '10' }],
				sortDirections: [{ value: '', title: 'Direction' }, { value: 'ASC', title: 'ASC' }, { value: 'DESC', title: 'DESC' }]
			};

			return list && lists[list] ? lists[list] : lists;
		}
	}]);

	return Helper;
}();

export default Helper;