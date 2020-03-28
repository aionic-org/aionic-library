import React from 'react';

import './Progress.scss';

const Progress = ({ progress, showPercent }) => (
	<div className="progress">
		<div
			className="progress-bar"
			role="progressbar"
			style={{ width: `${progress}%` }}
			aria-valuenow={progress}
			aria-valuemin={0}
			aria-valuemax={100}
		>
			{showPercent ? `${progress}%` : null}
		</div>
	</div>
);

Progress.defaultProps = {
	showPercent: false
};

export default Progress;
