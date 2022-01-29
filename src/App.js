import React, { useState } from "react";
import "./App.css";
import Row from "./Components/Row";
import { requests } from "./requests";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import YouTube from "react-youtube";

function App() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [movieID, setMovieID] = useState("");

  return (
    <div className="App">
      <Navbar />

      <Banner />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLarge={true}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
        movieID={movieID}
        setMovieID={setMovieID}
      />
      {trailerUrl && (
        <YouTube
          className="video"
          videoId={trailerUrl}
          opts={{
            height: "750",
            width: "100%",
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
              origin: "https://www.youtube.com/embed/",
            },
          }}
        />
      )}
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Top Action" fetchUrl={requests.fetchAction} />
      <Row title="Top Adventure" fetchUrl={requests.fetchAdventure} />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Top Comedy" fetchUrl={requests.fetchComedy} />
      <Row title="Top Horror" fetchUrl={requests.fetchHorror} />
    </div>
  );
}

export default App;
