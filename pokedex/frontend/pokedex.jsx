import React from 'react';
import ReactDOM from 'react-dom';
import * as apiUtils from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
import pokeReducer from './reducers/pokemon_reducer';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  window.pokeReducer = pokeReducer;
  window.receiveAllPokemon = receiveAllPokemon;
  window.fetchAllPokemon = apiUtils.fetchAllPokemon;

  ReactDOM.render(<h1>React is broke</h1>, root);
})