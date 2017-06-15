'use strict';
const itemPokemon = ()=>{
	const pokemon = $("<a href='#'></a>");
	const name = $("<span>"+pokemon.entry_number+"</span>");

	pokemon.append(name);
	return pokemon;
};

const Pokedex = (data)=>{
	const pokedex = $("<div class='pokedex'></div>");
	
	return pokedex;	
};