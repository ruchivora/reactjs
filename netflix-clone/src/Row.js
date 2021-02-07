import React, { useEffect, useState } from 'react'

/* Here title, fetchURL are called as props */

function Row( { title  , fetchURL }){

  /* This is a state , used to temporarily store data. 
     It disappears on refresh.
  */

  const [movies , setMovies] = useState([]) ; /* Use state sets default value of variable movies */

  /*
    What are we trying to achieve by useEffect ? 
    Run a piece of code when the Row component loads on the screen . 
    So, when the row component loads , I basically want to make a request
    to the TMDB for the information based on the category .We get the
    category from fetchURL .

    So ,each time row component loads , this snippet of code will be executed.
  */

  useEffect(() =>{

  },[] ) ;  
  
  /* 
    If we leave the "[]" as empty then it means, run once when the row loads,
    and don't run it again .

    If we enter something in "[]" Eg: "[movies]" .So, it will run once when the row
    loads and then it is going to run every single time when the variable "movies" changes.
    So "[]" called as dependency .

  */

  return (
          <div>
            <h2>{ title }</h2>
            {/* title */}

            {/* container -> posters */}

          </div>
  )
}

export default Row 