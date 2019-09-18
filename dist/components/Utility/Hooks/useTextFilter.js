var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { useState } from 'react';

function useTextFilter(key, items) {
	var _useState = useState(''),
	    _useState2 = _slicedToArray(_useState, 2),
	    filterText = _useState2[0],
	    setFilterText = _useState2[1];

	var _useState3 = useState(items),
	    _useState4 = _slicedToArray(_useState3, 2),
	    itemsFiltered = _useState4[0],
	    setItemsFiltered = _useState4[1];

	var filterByText = function filterByText(text) {
		setFilterText(text);
		if (text.length) {
			setItemsFiltered(items.filter(function (item) {
				return item[key].toLowerCase().includes(text);
			}));
		} else {
			setItemsFiltered([]);
		}
	};

	return [itemsFiltered, filterByText, filterText];
}

export default useTextFilter;