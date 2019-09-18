import React from 'react';

var InputRadio = function InputRadio(props) {
	return React.createElement(
		"div",
		{ className: "InputRadio form-check form-check-inline" },
		React.createElement("input", {
			type: "radio",
			name: "priority",
			className: "form-check-input",
			value: props.value,
			defaultChecked: props.defaultChecked === props.value ? 'checked' : '',
			onChange: props.onChange
		}),
		React.createElement(
			"label",
			{ className: "form-check-label" },
			props.title
		)
	);
};

export default InputRadio;