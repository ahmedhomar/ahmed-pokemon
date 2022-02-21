import { pokemonArray } from "./data/pokemon";

// Variables

const pokemonCardsContainer = document.querySelector(".card-container");

// Functions

const insertPokemonHtml = () => {
  pokemonCardsContainer.innerHTML = "";
  pokemonArray.forEach((element) => {
    pokemonCardsContainer.innerHTML += `
		<div>
       <img src =${element.sprite}>
			<h2>name: ${element.name}</h2>
			<p> ${element.name}(#${element.id}) is a ${element.types[0]} & ${element.types[1]} type Pokemon</p	
		</div>`;
  });
};

pokemonCardsContainer.addEventListener("click", insertPokemonHtml);
