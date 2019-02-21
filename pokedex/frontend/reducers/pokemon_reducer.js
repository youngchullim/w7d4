import { receiveAllPokemon, RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokeReducer = (state={},action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      const newState = merge({}, state);
      action.pokemon.forEach( poke => {
        newState[poke.id] = poke;
      })
      return newState;
    default:
      return state;
  }
}

export default pokeReducer;