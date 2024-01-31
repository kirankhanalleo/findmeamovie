import { React, useState } from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import MovieModal from "./MovieModal";
import Footer from "./Footer";

function HomeScreen() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="homescreen">
      <Nav />
      <div className="homescreen__content">
        <h1>The Best Movie Recommendation Engine</h1>
        <h2>
          Can't decide which movie to watch? pickmeamovie will choose one for
          you.
        </h2>
        <button
          className="pickmovie"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          PICK ME A MOVIE
        </button>
        {openModal && <MovieModal />}
      </div>
      <Footer />
    </div>
  );
}

export default HomeScreen;
