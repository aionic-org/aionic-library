import React from 'react';

var Button = function Button(props) {
	var block = props.block,
	    icon = props.icon,
	    label = props.label,
	    onClickHandler = props.onClickHandler,
	    type = props.type;


	var getButtonClasses = function getButtonClasses() {
		var buttonClasses = ['button', 'button-' + type];

		if (block) {
			buttonClasses.push('btn-block');
		}

		return buttonClasses.join(' ');
	};

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
	label: '',
	type: 'primary'
};

export default Button;