import React from "react";
import { useParams } from "react-router-dom";
import HeaderNav from "../headerNav/HeaderNav";

const MovieTrailer = ({
  movie,
  handleChange,
  title,
  handleRating,
  ratefil,
}) => {
  const params = useParams();
  const mov = movie.find((el) => el.id === Number(params.id));
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <img src={mov.pic} alt="poster" className="poster" />
        <iframe src={mov.trailer} className="trailer"></iframe>
      </div>
    </div>
  );
};

export default MovieTrailer;
