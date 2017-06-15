'use strict';
const itemPokemon = (id,name)=>{
	let idNew;
	if(id<10){
		idNew = "00"+id;
	}
	else if(id<100){
		idNew = "0"+id;
	}

	const url = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
	const png = ".png";

	const div = $("<div class='pokemon'></div>");
	const imagen = $("<img src="+url+idNew+png+">");
	const ancla = $("<a href='#'></a>");
	const nombre = $("<span>"+name+"</span>");
	
	ancla.on("click", (e)=>{
		e.preventDefault();
		console.log(e.target);
		//state.pokemonSelect = id;
	
	});

	ancla.append(nombre);

	div.append(imagen);
	div.append(ancla);

	return div;
};

const Pokedex = (data)=>{
	const container = $("<div></div>");
	const input = $("<input></input>");
	const pokedex = $("<div class='pokedex'></div>");
	const modal = $("<div class='modal'></div>");

	data.forEach((obj,i)=>{
		if(i<=10){
			let name = obj.pokemon_species.name;
			let id = obj.entry_number;
			pokedex.append(itemPokemon(id, name));			
		}
	});

	container.append(input);
	container.append(pokedex);
	container.append(modal);

	return container;	
};