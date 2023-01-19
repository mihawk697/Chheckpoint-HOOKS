import React, { useState } from 'react'
import { Button,Modal,Form} from 'react-bootstrap';

const AddMovie = ({add}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
    <div>
          <Button variant="primary" onClick={handleShow}>
        Add Movie </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Form.Label>MovieTitle</Form.Label>
        <Form.Control type="text" placeholder="Enter MovieTitle" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
)
}

export default AddMovie