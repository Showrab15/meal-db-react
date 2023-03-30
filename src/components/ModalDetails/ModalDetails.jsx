import React, { useEffect, useState } from 'react';
import './ModalDetails.css';
import { Button, Modal } from 'react-bootstrap';


const ModalDetails = (props) => {
  // console.log(props);
  const { strMeal, strYoutube, strIngredient1, strIngredient2, strIngredient4, strIngredient3, strIngredient5, strIngredient6, strIngredient7, strIngredient8 } = props.modal




  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="outline-info" onClick={handleShow}>
        View Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{strMeal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><span className='fw-semibold '>Ingredients</span> : {strIngredient1}, {strIngredient2}, {strIngredient3}, {strIngredient4}, {strIngredient5}, {strIngredient6}, {strIngredient7}, {strIngredient8}  <a style={{ textDecoration: 'none' }} href={strYoutube} >...more</a></p>

        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default ModalDetails;