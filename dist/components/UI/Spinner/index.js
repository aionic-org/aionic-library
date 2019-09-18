import React from 'react';

import './Spinner.scss';

var Spinner = function Spinner(props) {
	var onBtn = props.onBtn,
	    showPadding = props.showPadding;


	return React.createElement(
		'div',
		{ className: 'Spinner ' + (onBtn ? 'onBtn' : '') + ' ' + (showPadding ? 'showPadding' : '') },
		React.createElement('div', { className: 'bounce1' }),
		React.createElement('div', { className: 'bounce2' }),
		React.createElement('div', { className: 'bounce3' })
	);
};

Spinner.defaultProps = {
	onBtn: false,
	showPadding: false
};

export default Spinner;