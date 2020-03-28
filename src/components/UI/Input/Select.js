import React from 'react';

const InputSelect = ({
	optionList,
	name,
	classes,
	defaultValue,
	value,
	onChange,
	disabled,
	required,
	showDefault
}) => (
	<select
		name={name}
		className={`InputSelect form-control ${classes.join(' ')}`}
		defaultValue={defaultValue}
		value={value}
		onChange={onChange}
		disabled={disabled}
		required={required}
	>
		{showDefault ? <option value="">-</option> : null}
		{optionList.map((option, i) => (
			<option value={option.value} key={option.id || i}>
				{option.title}
			</option>
		))}
	</select>
);

InputSelect.defaultProps = {
	classes: [],
	showDefault: true,
	disabled: false,
	required: false
};

export default InputSelect;
