export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  })
}

export const fetchOnePokemon = (poke) => {
  return $.ajax({
    method: "GET",
    url: `/api/pokemon/${poke}`
  })
}