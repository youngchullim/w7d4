import { combineReducers } from 'redux';
import pokeReducer from './pokemon_reducer';
import itemsReducer from './items_reducer';

const entitiesReducer = combineReducers({
  pokemon: pokeReducer,
  items: itemsReducer
});

export default entitiesReducer;