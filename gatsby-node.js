exports.createPages = async ({ actions: { createPage } }) => {
  // `getPokemonData` is a function that fetches our data
  const allPokemon = ["pikachu", "charizard", "squirtle"]

  // Create a page that lists all Pokémon.
  createPage({
    path: `/test`,
    component: require.resolve("./src/templates/blog.js"),
    context: { allPokemon },
  })

  // Create a page for each Pokémon.
  // allPokemon.forEach(pokemon => {
  //   createPage({
  //     path: `/pokemon/${pokemon.name}/`,
  //     component: require.resolve("./src/templates/pokemon.js"),
  //     context: { pokemon },
  //   })
  // })
}