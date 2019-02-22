import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

// TEST
import { receiveOnePokemon} from './actions/pokemon_actions';
import { receiveAllPokemon, requestOnePokemon} from './actions/pokemon_actions';
import { fetchOnePokemon } from './util/api_util';
import pokeReducer from './reducers/pokemon_reducer';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // TEST
  window.fetchOnePokemon = fetchOnePokemon;
  window.receiveOnePokemon = receiveOnePokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.getState = store.getState
  window.pokeReducer = pokeReducer;
  window.requestOnePokemon = requestOnePokemon

  ReactDOM.render(<Root store={store}/>, root);
})