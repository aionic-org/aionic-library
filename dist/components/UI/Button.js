import React from 'react';

import Spinner from './Spinner';

var Button = function Button(props) {
	var block = props.block,
	    icon = props.icon,
	    isLoading = props.isLoading,
	    label = props.label,
	    onClickHandler = props.onClickHandler,
	    small = props.small,
	    type = props.type;


	var getButtonClasses = function getButtonClasses() {
		var buttonClasses = ['button', 'button-' + type];

		if (block) {
			buttonClasses.push('btn-block');
		}

		if (small) {
			buttonClasses.push('btn-sm');
		}

		return buttonClasses.join(' ');
	};

	if (isLoading) {
		return React.createElement(
			'button',
			{ type: 'button', className: getButtonClasses() },
			React.createElement(Spinner, { onBtn: true })
		);
	}

	return React.createElement(
		'button',
		{ type: 'button', className: getButtonClasses(), onClick: onClickHandler },
		icon ? React.createElement('i', { className: icon + ' ' + (label ? 'mr-2' : '') }) : null,
		label
	);
};

Button.defaultProps = {
	block: false,
	icon: '',
	isLoading: false,
	label: '',
	small: false,
	type: 'primary'
};

export default Button;