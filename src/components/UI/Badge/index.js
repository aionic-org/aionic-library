import React from 'react';

import './Badge.scss';

const Badge = (props) => {
	const { label, info, type, margin, classes } = props;

	const getBadgeClasses = () => {
		const badgeClasses = ['badge', `badge-${type}`];

		if (margin) {
			badgeClasses.push('badge-margin');
		}

		return badgeClasses.join(' ');
	};

	return (
		<div className={`Badge text-lowercase ${classes.join(' ')}`}>
			<span className={getBadgeClasses()} title={info}>
				{label}
			</span>
		</div>
	);
};

Badge.defaultProps = {
	classes: [],
	info: '',
	margin: false,
	type: 'primary'
};

export default Badge;
