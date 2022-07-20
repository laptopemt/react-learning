import React from 'react';
import {ACTIONS} from "./App";

function Add_Movie(props)
{
    const [movieName, updateMovieName] = React.useState("");
    const [movieL, updateMovieL] = React.useState("");
    const [movieR, updateMovieR] = React.useState("");
    const [rDate, updateRDate] = React.useState("");

    function handleSubmit(e)
    {
        props.dispatch({type: ACTIONS.ADD_MOVIE, payload: {name: movieName, mLength: movieL, rating: movieR, rDate: rDate}})
        e.preventDefault();
        updateMovieName("");
        updateMovieL("");
        updateMovieR("");
        updateRDate("");
    }

    return (
      <form onSubmit={handleSubmit}>
          <input type="text" value={movieName} id="add_movie" onChange={e => updateMovieName(e.target.value)} placeholder="Name" /> <br/>
          <input type="text" value={movieL} onChange={e => updateMovieL(e.target.value)} placeholder="Movie Length" /><br/>
          <input type="text" value={movieR} onChange={e => updateMovieR(e.target.value)} placeholder="Rating" /><br/>
          <input type="text" value={rDate} onChange={e => updateRDate(e.target.value)} placeholder="Release Date" /><br/>
          <button type="submit">Add Movie</button>
      </form>
    );
}

export default Add_Movie;