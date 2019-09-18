import React from 'react';

var Footer = function Footer() {
	return React.createElement(
		"div",
		{ className: "Footer mt-5" },
		React.createElement(
			"div",
			{ className: "container" },
			React.createElement("hr", { className: "featurette-divider" }),
			React.createElement(
				"a",
				{
					href: "https://aionic-apps.com",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "text-muted d-block text-center"
				},
				"Aionic Apps"
			)
		)
	);
};

export default Footer;