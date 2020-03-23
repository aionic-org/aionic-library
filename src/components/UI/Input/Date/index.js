import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import './Date.scss';

const InputDate = (props) => {
	const { startDate, name, updateParent } = props;

	const [date, setDate] = useState(startDate);

	const handleChange = (newDate) => {
		setDate(newDate);
		updateParent(newDate);
	};

	return (
		<div className="InputDate">
			<DatePicker
				className="form-control"
				selected={new Date(date)}
				onChange={handleChange}
				dateFormat="yyyy-MM-dd"
				name={name}
				autoComplete="false"
			/>
		</div>
	);
};

InputDate.defaultProps = {
	startDate: new Date()
};

export default InputDate;
