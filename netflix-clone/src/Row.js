import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

/* Here title, fetchURL are called as props */

function Row({ title, fetchUrl, isLargeRow }) {
  /* This is a state , used to temporarily store data. 
     It disappears on refresh.
  */

  const [movies, setMovies] = useState(
    []
  ); /* Use state sets default value of variable movies */

  /*
    What are we trying to achieve by useEffect ? 
    - useEffect is a react hook to fetch data .
    Run a piece of code when the Row component loads on the screen . 
    So, when the row component loads , I basically want to make a request
    to the TMDB for the information based on the category .We get the
    category from fetchURL .

    So ,each time row component loads , this snippet of code will be executed.
  */

  useEffect(() => {
    /* 
        Because i am sending a request outside , we need to make it a asynchronous call .
        await means , when you make the request ,wait for the promise(answer) to come back 
        and then do something.
    */
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      /* It is basically calling this : https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}...... */
      /* sets the state variable movies with the data obtained by calling an API */
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  /* 
    If we leave the "[]" as empty then it means, run once when the row loads,
    and don't run it again .

    If we enter something in "[]" Eg: "[movies]" .So, it will run once when the row
    loads and then it is going to run every single time when the variable "movies" changes.
    So "[]" called as dependency .
  */

  /*
    Here we pass fetchUrl because , we want this part of code to be updated 
    every time when the fetchUrl changes .
    Thumb Rule : Whenever we use a variable in useEffect that is outside 
    of useEffect block , we need to tell useEffect , that u are using a variable
    that is outside of ur block .In this way useEffect knows , if something changes
    then this snippet of code has to be reloaded .
  */

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* several row__posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row_posterLarge"} `}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
