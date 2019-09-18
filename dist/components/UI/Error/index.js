import React from 'react';

import './Error.scss';

var Error = function Error(props) {
	var icon = props.showIcon ? React.createElement('i', { className: 'fas fa-exclamation-triangle d-block text-center' }) : null;

	return React.createElement(
		'div',
		{ className: 'Error ' + props.assignedClasses.join(' ') },
		icon,
		React.createElement(
			'p',
			{ className: 'text-center text-danger mt-2 mb-0' },
			props.message
		)
	);
};

Error.defaultProps = {
	assignedClasses: [],
	showIcon: true
};

export default Error;