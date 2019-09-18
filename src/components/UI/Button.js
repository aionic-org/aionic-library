import React from 'react';

const Button = (props) => {
	const { block, icon, label, onClickHandler, type } = props;

	const getButtonClasses = () => {
		const buttonClasses = ['button', `button-${type}`];

		if (block) {
			buttonClasses.push('btn-block');
		}

		return buttonClasses.join(' ');
	};

	return (
		<button type="button" className={getButtonClasses()} onClick={onClickHandler}>
			{icon ? <i className={`${icon} ${label ? 'mr-2' : ''}`} /> : null}
			{label}
		</button>
	);
};

Button.defaultProps = {
	block: false,
	icon: '',
	label: '',
	type: 'primary'
};

export default Button;
