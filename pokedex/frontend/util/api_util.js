import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}