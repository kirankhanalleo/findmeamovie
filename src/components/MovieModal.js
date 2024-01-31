import { React, useState, useEffect } from "react";
import "./MovieModal.css";
import requests from "../Request";
import axios from "../axios";
import { CgClose } from "react-icons/cg";
function MovieModal() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.fetchActionMovies ||
          requests.fetchAdventure ||
          requests.fetchComedyMovies ||
          requests.fetchCrime ||
          requests.fetchDocumentaries ||
          requests.fetchDrama ||
          requests.fetchFantasy ||
          requests.fetchHorrorMovies ||
          requests.fetchNetflixOriginals ||
          requests.fetchRomanceMovies ||
          requests.fetchThriller
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  }
  const refreshPage = () => {
    window.location.reload(false);
  };
  // console.log(movie);
  return (
    <div className="moviemodal">
      <div className="topModalContent">
        <h1 className="moviemodal__h1">Here's a movie for you:</h1>
        <CgClose className="close" onClick={refreshPage} />
      </div>
      <div className="moviemodal__contents">
        <img
          className="movie__banner"
          src={"https://image.tmdb.org/t/p/original/" + movie?.poster_path}
        />
        <div className="movie__desc">
          <h3 className="movie__title">
            {movie?.name || movie?.title || movie?.original_name}
          </h3>
          <p className="movie__description">{truncate(movie?.overview, 150)}</p>
          <p className="movie_releaseDate">
            <b>Released Date: </b>
            {movie?.release_date}
          </p>
          <p className="movie__language">
            <b>Original Language: </b>
            <span className="uppercase">{movie?.original_language}</span>
          </p>
          <p className="average__vote">
            <b>Average Vote: </b>
            {movie?.vote_average}
          </p>
          <button className="try_again">Recommend Next Movie</button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
