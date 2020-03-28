import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

/**
 * Selfmade Modal component (old)
 */

class ModalOld extends Component {
	constructor(props) {
		super(props);
		this.el = document.createElement('div');
		this.modalRoot = null;
	}

	componentDidMount() {
		this.modalRoot = document.querySelector('body');
		this.modalRoot.appendChild(this.el);
	}

	componentWillUnmount() {
		this.modalRoot.removeChild(this.el);
	}

	render() {
		const { isOpen, children, title, handleClose, large } = this.props;

		return ReactDOM.createPortal(
			isOpen ? (
				<div className="Modal-Overlay">
					<div className={`Modal ${large ? 'large' : ''}`}>
						<div className="modal-header">
							<h5 className="modal-title">{title}</h5>
							<button type="button" className="close" aria-label="Close" onClick={handleClose}>
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="modal-body">{children}</div>
					</div>
				</div>
			) : null,
			this.el
		);
	}
}

ModalOld.defaultProps = {
	isOpen: true,
	large: false
};

export default ModalOld;
