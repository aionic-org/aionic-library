import React from 'react';

import './Toast.scss';

var Toast = function Toast(props) {
	return React.createElement(
		'div',
		{
			role: 'alert',
			'aria-live': 'assertive',
			'aria-atomic': 'true',
			className: 'toast shadow show fadeInRight',
			'data-autohide': 'false'
		},
		React.createElement(
			'div',
			{ className: 'toast-header' },
			React.createElement(
				'svg',
				{
					className: ' rounded mr-2',
					width: '20',
					height: '20',
					xmlns: 'http://www.w3.org/2000/svg',
					preserveAspectRatio: 'xMidYMid slice',
					focusable: 'false',
					role: 'img'
				},
				React.createElement('rect', { fill: '' + (props.success ? '#00b894' : '#d63031'), width: '100%', height: '100%' })
			),
			React.createElement(
				'strong',
				{ className: 'mr-auto' },
				process.env.REACT_APP_NAME
			),
			React.createElement(
				'small',
				null,
				'Just now'
			)
		),
		React.createElement(
			'div',
			{ className: 'toast-body' },
			props.msg
		)
	);
};

Toast.defaultProps = {
	success: true
};

export default Toast;