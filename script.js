import { pokemonArray } from "./data/pokemon.js";

// Variables

const pokemonCardsContainer = document.querySelector(".card-container");

// Functions

const insertPokemonHtml = (e) => {
  pokemonCardsContainer.innerHTML = "";
  pokemonArray.forEach((element) => {
    return (pokemonCardsContainer.innerHTML += `
    <img src =${element.sprite}>
		<div>
			<h3>name: ${element.name}</h3>
			<p> ${element.name}(#${element.id}) is a ${element.types[0]} & ${element.types[1]} type Pokemon</p	
		</div>`);
  });
};
// Event Listener

pokemonCardsContainer.addEventListener("click", insertPokemonHtml);
