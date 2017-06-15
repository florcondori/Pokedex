'use strict';
const filterPokemon = (pokemons, query)=>{

	return pokemons.filter((pokemon)=>{
		let nombre = pokemon.pokemon_species.name.toLowerCase();
		if(nombre.indexOf(query.toLowerCase()) != -1){
			return pokemon;
		}
	});
};
