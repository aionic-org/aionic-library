import React from 'react';

const List = ({ elements, capitalize }) => (
	<ul className="list-group">
		{elements.map((element, i) => {
			return (
				<li
					className={`list-group-item d-flex justify-content-between align-items-center ${
						capitalize ? 'text-capitalize' : ''
					} `}
					// eslint-disable-next-line react/no-array-index-key
					key={i}
				>
					{element.label}
					{element.badge !== undefined ? (
						<span className="badge badge-primary badge-pill">{element.badge}</span>
					) : null}
				</li>
			);
		})}
	</ul>
);

List.defaultProps = {
	elements: [],
	capitalize: false
};

export default List;
