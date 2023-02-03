import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddMovie = ({ add1 }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");
  const [trailer, setTrailer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      Name: name,
      pic: pic,
      rating: rating,
      genre: genre,
      year: year,
      trailer: trailer,
    };
    if (name && pic && rating && genre && year && trailer) {
      add1(newMovie);
      setName("");
      setPic("");
      setRating(0);
      setGenre("");
      setYear("");
      setTrailer("");
      handleClose();
    } else {
      alert("Add valid text!");
    }
  };

  return (
    <div>
      <Button variant="dark" onClick={handleShow} style={{ marginTop: "20px" }}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie's Details:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={handleSubmit}
            action=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="">Title:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Poster:</label>
            <input
              type="text"
              value={pic}
              onChange={(e) => setPic(e.target.value)}
            />
            <label htmlFor="">Rating:</label>
            <input
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <label htmlFor="">Genre:</label>
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />

            <label htmlFor="">Year:</label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <label htmlFor="">Trailer:</label>
            <input
              type="text"
              value={trailer}
              onChange={(e) => setTrailer(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(handleClose, handleSubmit)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
