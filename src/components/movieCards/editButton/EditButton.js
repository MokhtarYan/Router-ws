import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const EditButton = ({ el, edit }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState(el.Name);
  const [pic, setPic] = useState(el.pic);
  const [rating, setRating] = useState(el.rating);
  const [genre, setGenre] = useState(el.genre);
  const [year, setYear] = useState(el.year);
  const handleChange1 = (e) => {
    setName(e.target.value);
  };

  const handleChange2 = (e) => {
    setPic(e.target.value);
  };

  const handleChange3 = (e) => {
    setGenre(e.target.value);
  };

  const handleChange4 = (e) => {
    setRating(e.target.value);
  };

  const handleChange5 = (e) => {
    setYear(e.target.value);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    const editedMovie = {
      id: el.id,
      Name: name,
      pic: pic,
      rating: rating,
      genre: genre,
      year: year,
    };
    if (name && pic && rating && genre && year) {
      edit(editedMovie);

      handleClose();
    } else {
      alert("Add valid text!");
    }
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ width: "70px", marginTop: "20px" }}
      >
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Movie's details:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleEdit}
            action=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="">Title:</label>
            <input type="text" value={name} onChange={handleChange1} />
            <label htmlFor="">Poster:</label>
            <input type="text" value={pic} onChange={handleChange2} />
            <label htmlFor="">Rating:</label>
            <input type="text" value={rating} onChange={handleChange4} />
            <label htmlFor="">Genre:</label>
            <input type="text" value={genre} onChange={handleChange3} />

            <label htmlFor="">Year:</label>
            <input type="text" value={year} onChange={handleChange5} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(handleClose, handleEdit)}>
            Save the changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditButton;
