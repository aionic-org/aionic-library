var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState } from 'react';

var Pills = function Pills(props) {
	var tabs = props.tabs,
	    handleClick = props.handleClick;

	var _useState = useState(null),
	    _useState2 = _slicedToArray(_useState, 2),
	    activeTab = _useState2[0],
	    setActiveTab = _useState2[1];

	var handleTabChange = function handleTabChange(e) {
		var pos = Number(e.target.dataset.pos);

		if (pos === activeTab) {
			setActiveTab(null);
			props.handleClick(null);
		} else {
			setActiveTab(pos);
			handleClick(tabs[pos].name, tabs[pos].id);
		}
	};

	return React.createElement(
		"div",
		{ className: "Pills" },
		React.createElement(
			"nav",
			{ className: "nav nav-pills" },
			tabs.map(function (tab, i) {
				return React.createElement(
					"button",
					{
						className: "btn btn-link nav-item nav-link " + (i === activeTab ? 'active' : ''),
						onClick: handleTabChange,
						type: "button",
						key: tab.id || i,
						"data-pos": i,
						"data-id": tab.id,
						disabled: tab.disabled === undefined ? false : tab.disabled
					},
					tab.name
				);
			})
		)
	);
};

Pills.defaultProps = {
	tabs: []
};

export default Pills;