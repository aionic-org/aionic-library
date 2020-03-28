import React from 'react';

const Alert = ({ type, dismissible, children }) => (
	<div className="Alert">
		<div
			className={`alert alert-${type} ${dismissible ? '' : 'alert-dismissible fade show'}`}
			role="alert"
		>
			{children}
			{dismissible ? (
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			) : null}
		</div>
	</div>
);

Alert.defaultProps = {
	dismissible: true
};

export default Alert;
