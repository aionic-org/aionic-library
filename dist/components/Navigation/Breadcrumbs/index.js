import React from 'react';
import { Link } from 'react-router-dom';

var Breadcrumbs = function Breadcrumbs(props) {
	var breadcrumbs = props.breadcrumbs;


	return React.createElement(
		'div',
		{ className: 'Breadcrumbs' },
		React.createElement(
			'nav',
			{ 'aria-label': 'breadcrumb' },
			React.createElement(
				'ol',
				{ className: 'breadcrumb' },
				breadcrumbs.map(function (breadcrumb, i) {
					if (i === breadcrumbs.length - 1) {
						return (
							// eslint-disable-next-line react/no-array-index-key
							React.createElement(
								'li',
								{ className: 'breadcrumb-item active', 'aria-current': 'page', key: i },
								breadcrumb.title
							)
						);
					}
					return React.createElement(
						'li',
						{ className: 'breadcrumb-item' },
						React.createElement(
							Link,
							{ to: breadcrumb.link },
							breadcrumb.title
						)
					);
				})
			)
		)
	);
};

Breadcrumbs.defaultProps = {
	breadcrumbs: []
};

export default Breadcrumbs;