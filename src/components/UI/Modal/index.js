import React from 'react';
import ReactModal from 'react-modal';

import './Modal.scss';

const Modal = ({ title, children, isOpen, large, handleClose }) => (
	<ReactModal
		isOpen={isOpen}
		contentLabel="Minimal Modal Example"
		className={`Modal ${large ? 'large' : ''}`}
		overlayClassName="Modal-Overlay"
	>
		<div className="modal-header">
			<h5 className="modal-title">{title}</h5>
			<button type="button" className="close" aria-label="Close" onClick={handleClose}>
				<span aria-hidden="true">×</span>
			</button>
		</div>
		<div className="modal-body">{children}</div>
	</ReactModal>
);

Modal.defaultProps = {
	isOpen: false,
	large: false
};

export default Modal;
