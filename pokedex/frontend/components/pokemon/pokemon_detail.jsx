import React from 'react';
import ReactDOM from 'react-dom';
import {requestOnePokemon} from '../../actions/pokemon_actions';

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // debugger
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
  }
  
  render() {
    return (
      <div>
        <ul>
          <li><img src={this.props.poke.image_url}/></li>
          <li>{this.props.poke.name}</li>
          <li>{this.props.poke.poke_type}</li>
          <li>{this.props.poke.attack}</li>
          <li>{this.props.poke.defense}</li>
          <li>{this.props.poke.moves}</li>
        </ul>
      </div>
    )
  }

}