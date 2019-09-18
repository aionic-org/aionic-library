var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import './Markdown.scss';

var InputMarkdown = function InputMarkdown(props) {
	var content = props.content,
	    name = props.name,
	    rows = props.rows,
	    onBlurCb = props.onBlurCb;

	var _useState = useState(false),
	    _useState2 = _slicedToArray(_useState, 2),
	    edit = _useState2[0],
	    setEdit = _useState2[1];

	var toggleEdit = function toggleEdit(e, cb) {
		setEdit(!edit);

		if (typeof cb === 'function') {
			cb(e);
		}
	};

	var output = edit ? React.createElement(
		'div',
		{ className: 'EditMode form-group' },
		React.createElement('textarea', {
			name: name,
			className: 'form-control',
			rows: rows,
			defaultValue: content,
			onBlur: function onBlur(e) {
				toggleEdit(e, onBlurCb);
			}
		})
	) : React.createElement(
		'div',
		{ className: 'PreviewMode form-group', style: { cursor: 'text' } },
		React.createElement(ReactMarkdown, { source: content })
	);

	return React.createElement(
		'div',
		{ className: 'InputMarkdown' },
		React.createElement(
			'p',
			{
				className: 'text-muted font-weight-bold text-right',
				onClick: toggleEdit,
				style: { cursor: 'pointer' }
			},
			'Edit'
		),
		React.createElement('hr', { className: 'featurette-divider' }),
		output
	);
};

InputMarkdown.defaultProps = {
	rows: 5,
	onBlurCb: function onBlurCb() {}
};

export default InputMarkdown;