import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import MovieTrailer from "../movieTrailer/MovieTrailer";
import EditButton from "./editButton/EditButton";
import StarRating from "./starRating/StarRating";

const MovieCards = ({ el, del, edit }) => {
  return (
    <Card style={{ width: "18rem", height: "400px", position: "relative" }}>
      <Card.Img variant="top" src={el.pic} className="pics" />
      <Card.Body className="description">
        <Card.Title className="title">{el.Name}</Card.Title>
        <Card.Text className="desc">
          Rating : <StarRating rating={el.rating} />
        </Card.Text>
        <Card.Text className="desc">Genre : {el.genre}</Card.Text>

        <Card.Text className="desc">Year : {el.year}</Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Button variant="light" style={{ height: "40px", marginTop: "20px" }}>
            <Link
              to={`/movieTrailer/${el.id}`}
              style={{ textDecoration: "none" }}
            >
              Trailer
            </Link>
          </Button>
          <Button
            variant="danger"
            onClick={() => del(el.id)}
            style={{ marginTop: "20px", marginLeft: "15px", height: "40px" }}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCards;
