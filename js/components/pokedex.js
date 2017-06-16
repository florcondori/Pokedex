'use strict';
const itemPokemon = (data, update)=>{
	let name = data.pokemon_species.name;
	let id = data.entry_number;
	let idNew;
	if(id<10){
		idNew = "00"+id;
	}
	else if(id<100){
		idNew = "0"+id;
	}else if(id<1000){
		idNew = id;
	}

	const url = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
	const png = ".png";

	const div = $("<div class='pokemon'></div>");
	const imagen = $("<img src="+url+idNew+png+">");
	const ancla = $("<a href='#'></a>");
	const nombre = $("<span>"+name+"</span>");
	
	ancla.on("click", (e)=>{
		e.preventDefault();
		state.pokemonSelected = id;	
		
		update();
	});

	ancla.append(nombre);

	div.append(imagen);
	div.append(ancla);

	return div;
};

const reRender = (container,encontrados, update)=>{
	container.empty();

	encontrados.forEach((pokemon)=>{
		container.append(itemPokemon(pokemon, update));
	});
		
};

const Pokedex = (update)=>{
	const div = $("<div></div>");
	const divFiltro = $("<div></div>");
	const input = $("<input></input>");
	const button = $("<button>A-Z</button>");
	const pokedex = $("<div class='pokedex'></div>");
	
	input.on("keyup", (e) =>{		
		const filtro = filterPokemon(state.pokedex, input.val());

		reRender(pokedex, filtro, update);
	});

	/*data.forEach((obj,i)=>{
		if(i<=10){
			let name = obj.pokemon_species.name;
			let id = obj.entry_number;
			pokedex.append(itemPokemon(id, name));			
		}
	});
*/

	divFiltro.append(input);
	divFiltro.append(button);

	div.append(divFiltro);
	div.append(pokedex);

	return div;	
};