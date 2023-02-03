import React from "react";
import AddMovie from "../addMovie/AddMovie";
import HeaderNav from "../headerNav/HeaderNav";
import MovieCards from "../movieCards/MovieCards";

const MovieList = ({
  movie,
  del,
  edit,
  handleAdd1,
  handleChange,
  title,
  handleRating,
  ratefil,
}) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="welcome">Welcome to the Home of the best Movies!</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {movie.map((el) => (
            <MovieCards className="card" el={el} del={del} edit={edit} />
          ))}
        </div>
        <AddMovie add1={handleAdd1} />
      </div>
    </div>
  );
};

export default MovieList;
