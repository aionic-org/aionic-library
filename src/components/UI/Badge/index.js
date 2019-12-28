import React from 'react';

import './Badge.scss';

const Badge = (props) => {
	const { label, info, type, margin } = props;

	const getBadgeClasses = () => {
		const badgeClasses = ['badge', `badge-${type}`];

		if (margin) {
			badgeClasses.push('badge-margin');
		}

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
	margin: false,
	type: 'primary'
};

export default Badge;
