export const selectAllPokemon = (state) => {
  let a = state.entities.pokemon;
  return Object.values(a);
}