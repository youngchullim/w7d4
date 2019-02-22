import { connect } from 'react-redux';
import { requestOnePokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state,ownProps) => {
  // debugger
  return {poke: state.entities.pokemon[ownProps.match.params.pokemonId]}
}

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (poke) => dispatch(requestOnePokemon(poke))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);