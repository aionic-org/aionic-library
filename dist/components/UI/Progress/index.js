import React from 'react';

import './Progress.scss';

var Progress = function Progress(props) {
	var progress = props.progress,
	    showPercent = props.showPercent;


	return React.createElement(
		'div',
		{ className: 'progress' },
		React.createElement(
			'div',
			{
				className: 'progress-bar',
				role: 'progressbar',
				style: { width: progress + '%' },
				'aria-valuenow': progress,
				'aria-valuemin': 0,
				'aria-valuemax': 100
			},
			showPercent ? progress + '%' : null
		)
	);
};

Progress.defaultProps = {
	showPercent: false
};

export default Progress;