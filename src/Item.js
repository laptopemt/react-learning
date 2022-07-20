import {ACTIONS} from "./App";

function Item(props)
{
    const {movie, dispatch} = props;

    function handleDelete(e)
    {
        e.preventDefault();
        dispatch({ type: ACTIONS.DELETE_MOVIE, payload: {dId: movie.id }});
    }

    return [
        <ul key={movie.id}>
            <li>Movie Title: {movie.Title}</li>
            <li>Length: {movie.mLength}</li>
            <li>Rating: {movie.rating}</li>
            <li>Release Date: {movie.rDate}</li>
            <li><button onClick={handleDelete}>Delete Movie</button></li>
        </ul>
    ];
}

export default Item;