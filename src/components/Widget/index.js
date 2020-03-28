import React from 'react';
import { Link } from 'react-router-dom';

import './Widget.scss';

const Widget = (props) => {
	const { title, icon, link, iconBackground, iconColor, margin } = props;

	const content = (
		<div className="Widget">
			<div className={`border rounded shadow-sm ${margin ? 'margin' : ''}`}>
				<i
					className={`${icon} w-100 fa-2x text-center py-4`}
					style={{ background: iconBackground, color: iconColor }}
				/>
				<div className="p-3 text-center font-weight-bold">
					<span>{title}</span>
				</div>
			</div>
		</div>
	);

	return link.length ? (
		<Link className="card-link-custom" to={link}>
			{content}
		</Link>
	) : (
		content
	);
};

Widget.defaultProps = {
	title: '',
	icon: '',
	link: '',
	iconColor: 'white',
	margin: true
};

export default Widget;
