import React from 'react';

import './Badge.scss';

var Badge = function Badge(props) {
	var label = props.label,
	    info = props.info,
	    type = props.type;


	var getBadgeClasses = function getBadgeClasses() {
		var badgeClasses = ['badge', 'badge-' + type];

		return badgeClasses.join(' ');
	};

	return React.createElement(
		'div',
		{ className: 'Badge text-uppercase' },
		React.createElement(
			'span',
			{ className: getBadgeClasses(), title: info },
			label
		)
	);
};

Badge.defaultProps = {
	info: '',
	type: 'primary'
};

export default Badge;