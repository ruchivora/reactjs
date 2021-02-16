import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

/* 
  The Banner image on netflix is chosen randomly
  So here we use "useEffect" to fetch the banner 
  randomly from amongst the netflix trending requests
*/

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  // The variable "movie" is an object
  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      {/* Here we write internal css because we have to change the url based on parameters */}
      <div className="banner__contents">
        {/*Here the API response is inconsistent , so to manage the
           the response we use ternary operator along with the or 
           operator
        */}
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div class="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
