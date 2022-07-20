import React from 'react';
import Item from './Item.js'

function List(props)
{

    const {movieList, dispatch} = props;

    return [
      <div>
          {movieList.map((movie, key) => {
              return <Item key={key} movie={movie} dispatch={dispatch} />;
          })}
      </div>
    ];
}

export default List;