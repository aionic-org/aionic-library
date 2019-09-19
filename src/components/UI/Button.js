import React from 'react';

import Spinner from './Spinner';

const Button = (props) => {
	const { block, icon, isLoading, label, onClickHandler, small, type } = props;

	const getButtonClasses = () => {
		const buttonClasses = ['button', `button-${type}`];

		if (block) {
			buttonClasses.push('btn-block');
		}

		if (small) {
			buttonClasses.push('btn-sm');
		}

		return buttonClasses.join(' ');
	};

	if (isLoading) {
		return (
			<button type="button" className={getButtonClasses()}>
				<Spinner onBtn={true} />
			</button>
		);
	}

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
	isLoading: false,
	label: '',
	small: false,
	type: 'primary'
};

export default Button;
