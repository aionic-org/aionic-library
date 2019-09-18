import React from 'react';

var InputSelect = function InputSelect(props) {
	return React.createElement(
		'select',
		{
			name: props.name,
			className: 'InputSelect form-control ' + props.classes.join(' '),
			defaultValue: props.defaultValue,
			onChange: props.onChange,
			disabled: props.disabled,
			required: props.required
		},
		props.showDefault ? React.createElement(
			'option',
			{ value: '' },
			'-'
		) : null,
		props.optionList.map(function (option, i) {
			return React.createElement(
				'option',
				{ value: option.value, key: option.id || i },
				option.title
			);
		})
	);
};

InputSelect.defaultProps = {
	classes: [],
	showDefault: true,
	disabled: false,
	required: false
};

export default InputSelect;