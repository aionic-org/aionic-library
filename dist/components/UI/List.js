import React from 'react';

var List = function List(props) {
	var elements = props.elements,
	    capitalize = props.capitalize;


	return React.createElement(
		'ul',
		{ className: 'list-group' },
		elements.map(function (element, i) {
			return React.createElement(
				'li',
				{
					className: 'list-group-item d-flex justify-content-between align-items-center ' + (capitalize ? 'text-capitalize' : '') + ' '
					// eslint-disable-next-line react/no-array-index-key
					, key: i
				},
				element.label,
				element.badge !== undefined ? React.createElement(
					'span',
					{ className: 'badge badge-primary badge-pill' },
					element.badge
				) : null
			);
		})
	);
};

List.defaultProps = {
	elements: [],
	capitalize: false
};

export default List;