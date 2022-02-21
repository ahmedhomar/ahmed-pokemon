import { pokemonArray } from "./data/pokemon";

// Variables

const pokemonCardsContainer = document.querySelector(".card-container");

// Functions

const insertPokemonHtml = () => {
  pokemonCardsContainer.innerHTML = "";
  pokemonArray.forEach((element) => {
    pokemonCardsContainer.innerHTML += `
		<div>
       <img src =${sprite}>
			<h2>name: ${name}</h2>
			<p> ${name}(#${id}) is a ${types[0]} & ${types[1]} type Pokemon</p	
		</div>`;
  });
};

pokemonCardsContainer.addEventListener("click", insertPokemonHtml);
