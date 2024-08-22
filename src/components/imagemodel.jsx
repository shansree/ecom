import React from 'react';
import { Modal, Button } from 'react-bootstrap-v5';

const ImageModal = ({ show, handleClose, imageUrl, title }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className='justify-content-between '>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img src={imageUrl} alt={title} className="w-100 modal-cardimg" />
      </Modal.Body>
      <Modal.Footer>
     
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
