import { receiveAllPokemon, RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokeReducer = (state={},action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      const newState = merge({}, state);
      for (let key in action.pokemon) {
        newState[key] = action.pokemon[key]
      }
      return newState;
      // not sure
    case RECEIVE_ONE_POKEMON:
      const newState2 = merge({}, state);
      newState2[action.poke.pokemon.id] = action.poke.pokemon;
      return newState2;
    default:
      return state;
  }
}

export default pokeReducer;