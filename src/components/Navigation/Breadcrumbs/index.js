/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = (props) => {
	const { breadcrumbs } = props;

	return (
		<div className="Breadcrumbs">
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb">
					{breadcrumbs.map((breadcrumb, i) => {
						if (i === breadcrumbs.length - 1) {
							return (
								<li className="breadcrumb-item active" aria-current="page" key={i}>
									{breadcrumb.title}
								</li>
							);
						}
						return (
							<li className="breadcrumb-item" key={i}>
								<Link to={breadcrumb.link}>{breadcrumb.title}</Link>
							</li>
						);
					})}
				</ol>
			</nav>
		</div>
	);
};

Breadcrumbs.defaultProps = {
	breadcrumbs: []
};

export default Breadcrumbs;
