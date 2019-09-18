var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

var Tabs = function Tabs(props) {
	var tabs = props.tabs,
	    handleClick = props.handleClick,
	    preselectTabIdx = props.preselectTabIdx;

	var _useState = useState(preselectTabIdx),
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
		{ className: "Tabs" },
		React.createElement(
			"ul",
			{ className: "nav nav-tabs" },
			tabs.map(function (tab, i) {
				return React.createElement(
					"li",
					{ className: "nav-item", key: i },
					React.createElement(
						"button",
						{
							type: "button",
							className: "btn btn-link nav-link " + (i === activeTab ? 'active' : ''),
							onClick: handleTabChange,
							key: i,
							"data-pos": i,
							"data-id": tab.id,
							disabled: tab.disabled === undefined ? false : tab.disabled,
							href: "#"
						},
						tab.name
					)
				);
			})
		)
	);
};

Tabs.defaultProps = {
	tabs: [],
	preselectTabIdx: null
};

export default Tabs;