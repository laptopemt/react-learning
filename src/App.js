import './App.css';
import List from './List';
import Add_Movie from "./Add_Movie";
import React, {useReducer} from 'react';

export const ACTIONS = {
    ADD_MOVIE: "add-movie",
    DELETE_MOVIE: "delete-movie",
    FILTER_MOVIE: "filter-movie",
};

let idValue = 20;

function getMovieList()
{
  return [
    {
      Title: "Top Gun",
      mLength: "1H 54M",
      rating: 3,
      rDate: "Dec 16 1987",
      id: "1"
    },
    {
      Title: "Starwars: Clone Wars",
      mLength: "1H 54M",
      rating: 3,
      rDate: "Dec 16 1987",
      id: "2"
    },
    {
      Title: "Starwars: A New Hope",
      mLength: "1H 54M",
      rating: 3,
      rDate: "Dec 16 1987",
      id: "3"
    },
    {
      Title: "Star Wars Return of the Jedi",
      mLength: "1H 54M",
      rating: 3,
      rDate: "Dec 16 1987",
      id: "4"
    },
    {
      Title: "Starwars",
      mLength: "1H 54M",
      rating: 3,
      rDate: "Dec 16 1987",
      id: "5"
    },
    {
      Title: "Toy Story 4",
      mLength: "1H 54M",
      rating: 3,
      rDate: "Dec 16 1987",
      id: "6"
    },
    {
      Title: "Toy Store 3",
      mLength: "1H 54M",
      rating: 3,
      rDate: "Dec 16 1987",
      id: "7"
    },
    {
      Title: "Toy Story 2",
      mLength: "1H 54M",
      rating: 3,
      rDate: "Dec 16 1987",
      id: "8"
    },
    {
      Title: "Toy Story",
      mLength: "1H 54M",
      rating: 3,
      rDate: "Dec 16 1987",
      id: "9"
    },
    {
      Title: "Monsters Inc",
      mLength: "1H 54M",
      rating: 3,
      rDate: "Dec 16 1987",
      id: "9"
    },
    {
      Title: "Top Gun 2",
      mLength: "1H 14M",
      rating: 5,
      rDate: "Dec 16 2020",
      id: "10"
    }
  ]
}

function movieReducer(movies, action)
{
  switch (action.type) {
    case ACTIONS.ADD_MOVIE:
      const newMovie = createMovie(action.payload.name, action.payload.mLength, action.payload.rating, action.payload.rDate);
      return [...movies, newMovie];
    case ACTIONS.DELETE_MOVIE:
      return movies.filter(movie => movie.id !== action.payload.dId);
    case ACTIONS.FILTER_MOVIE:
      return movies.filter((movie) => movie.Title.toLowerCase().includes(action.payload.searchTerm.toLowerCase()));
    default: return movies;
  }
}

function createMovie(name, mLenght, rating, rDate)
{
  idValue++;

  return {
    Title: name,
    mLength: mLenght,
    rating: rating,
    rDate: rDate,
    id: idValue,
  };
}



function App() {

  const [movieList, dispatch] = React.useReducer(movieReducer, getMovieList());
  const [searchTerm, updateSearchTerm] = React.useState("");

  const handleChange = e => {
    const term = e.target.value;
    updateSearchTerm(term);
    searchMovies(term);
  }

  function searchMovies(searchTerm)
  {
    dispatch({ type: ACTIONS.FILTER_MOVIE, payload: {searchTerm: searchTerm}});
  }

  return (
      <div>
        <div>
          <Add_Movie dispatch={dispatch} />
        </div>
        <div>
          <h1>Movie Database</h1>
          <label htmlFor="searchMovie">Search: </label>
          <input type="text" placeholder="Movie Title" id="searchMovie" value={searchTerm} onChange={handleChange} />
          <hr/>
        </div>

        <List movieList={movieList} dispatch={dispatch} />
      </div>

  );
}

export default App;
