import React from 'react';

const InputRadio = ({ title, defaultChecked, value, onChange }) => (
	<div className="InputRadio form-check form-check-inline">
		<input
			type="radio"
			name="priority"
			className="form-check-input"
			value={value}
			defaultChecked={defaultChecked === value ? 'checked' : ''}
			onChange={onChange}
		/>
		<label className="form-check-label">{title}</label>
	</div>
);

export default InputRadio;
