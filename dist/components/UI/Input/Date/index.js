var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import './Date.scss';

var InputDate = function InputDate(props) {
	var startDate = props.startDate,
	    name = props.name,
	    updateParent = props.updateParent;

	var _useState = useState(startDate),
	    _useState2 = _slicedToArray(_useState, 2),
	    date = _useState2[0],
	    setDate = _useState2[1];

	var handleChange = function handleChange(newDate) {
		setDate(newDate);
		updateParent(newDate);
	};

	return React.createElement(
		'div',
		{ className: 'InputDate' },
		React.createElement(DatePicker, {
			className: 'form-control',
			selected: new Date(date),
			onChange: handleChange,
			dateFormat: 'yyyy-MM-dd hh:mm a',
			showTimeSelect: true,
			timeFormat: 'HH:mm',
			timeIntervals: 60,
			name: name
		})
	);
};

InputDate.defaultProps = {
	startDate: new Date()
};

export default InputDate;