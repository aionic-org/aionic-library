import React from 'react';

import './Badge.scss';

const Badge = (props) => {
	const { label, info, type } = props;

	const getBadgeClasses = () => {
		const badgeClasses = ['badge', `badge-${type}`];

		return badgeClasses.join(' ');
	};

	return (
		<div className="Badge text-uppercase">
			<span className={getBadgeClasses()} title={info}>
				{label}
			</span>
		</div>
	);
};

Badge.defaultProps = {
	info: '',
	type: 'primary'
};

export default Badge;
