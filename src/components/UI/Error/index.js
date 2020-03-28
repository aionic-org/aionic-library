import React from 'react';

import './Error.scss';

const Error = (props) => {
	const { message, assignedClasses, showIcon } = props;

	const icon = showIcon ? <i className="fas fa-exclamation-triangle d-block text-center" /> : null;

	return (
		<div className={`Error ${assignedClasses.join(' ')}`}>
			{icon}
			<p className="text-center text-danger mt-2 mb-0">{message}</p>
		</div>
	);
};

Error.defaultProps = {
	assignedClasses: [],
	showIcon: true
};

export default Error;
