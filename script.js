import pokemonArray from "./data/pokemon.js";

// Variables

const pokemonCardsContainer = document.querySelector(".card-container");

// Functions

const capitaliseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const getTypestext = (types) => {
  if (types.length === 1) {
    return types[0];
  }
  if (types.length === 2) {
    return `${types[0]} & ${types[1]} `;
  }
  console.error("unhandled type array");
};

const insertPokemonHtml = () => {
  pokemonArray.forEach((pokemon) => {
    const capitalisedName = capitaliseFirstLetter(pokemon.name);
    const typesText = getTypestext(pokemon.types);
    pokemonCardsContainer.innerHTML += `
    <img src ="${pokemon.sprite}">
		<div>
			<h2>name: ${capitalisedName}</h2>
			<p class ="card-text"> ${capitalisedName}(#${pokemon.id}) is a ${typesText} type Pokemon</p	
		</div>`;
  });
};
insertPokemonHtml();
