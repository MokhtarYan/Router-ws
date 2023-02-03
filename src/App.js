import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./components/headerNav/HeaderNav";
import { useState } from "react";
import { movieList } from "./Data";
import MovieList from "./components/movieList/MovieList";
import AddMovie from "./components/addMovie/AddMovie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieTrailer from "./components/movieTrailer/MovieTrailer";

function App() {
  const [movie, setMovie] = useState(movieList);
  const [title, setTitle] = useState("");
  const [ratefil, setRatefil] = useState(1);
  const handleChange = (e) => setTitle(e.target.value);
  const handleDelete = (taskID) => {
    setMovie(movie.filter((el) => el.id !== taskID));
  };
  const handleAdd1 = (newMovie) => {
    setMovie([...movie, newMovie]);
  };
  const handleEddit = (editedMovie) => {
    setMovie([...movie, editedMovie]);
  };
  const handleRating = (x) => setRatefil(x);
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav
          handleChange={handleChange}
          search={title}
          handleRating={handleRating}
          ratefil={ratefil}
        />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movie={movie.filter(
                  (el) =>
                    el.rating >= ratefil &&
                    el.Name.trim()
                      .toUpperCase()
                      .includes(title.trim().toUpperCase())
                )}
                del={handleDelete}
                edit={handleEddit}
                handleAdd1={handleAdd1}
              />
            }
          ></Route>
          <Route
            path="/movieTrailer/:id"
            element={<MovieTrailer movie={movie} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
