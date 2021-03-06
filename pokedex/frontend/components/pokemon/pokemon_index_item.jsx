import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
  return (
    <li> 
      <Link to= {`/pokemon/${pokemon.id}`}>
        {pokemon.name} 
        <img src={pokemon.image_url} height="20px" width="20px" />
      </Link>
    </li>
  )
}

export default PokemonIndexItem;
