var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import { useState, useEffect } from 'react';

import Api from '../../../services/api';

function useFetcher(url) {
	var _this = this;

	var _useState = useState(true),
	    _useState2 = _slicedToArray(_useState, 2),
	    isLoading = _useState2[0],
	    setIsLoading = _useState2[1];

	var _useState3 = useState(null),
	    _useState4 = _slicedToArray(_useState3, 2),
	    error = _useState4[0],
	    setError = _useState4[1];

	var _useState5 = useState(null),
	    _useState6 = _slicedToArray(_useState5, 2),
	    data = _useState6[0],
	    setData = _useState6[1];

	useEffect(function () {
		var fetchData = function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var result;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.prev = 0;

								setError(null);
								setIsLoading(true);

								_context.next = 5;
								return Api.fetchData(url);

							case 5:
								result = _context.sent;

								setData(result);
								setIsLoading(false);
								_context.next = 14;
								break;

							case 10:
								_context.prev = 10;
								_context.t0 = _context['catch'](0);

								setError(Api.handleHttpError(_context.t0));
								setIsLoading(false);

							case 14:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this, [[0, 10]]);
			}));

			return function fetchData() {
				return _ref.apply(this, arguments);
			};
		}();
		fetchData();
	}, []);

	return [data, isLoading, error, setData];
}

export default useFetcher;