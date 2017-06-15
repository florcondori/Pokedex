'use strict';
const itemPokemon = (data)=>{
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
		console.log(e.target);
		//state.pokemonSelect = id;
	
	});

	ancla.append(nombre);

	div.append(imagen);
	div.append(ancla);

	return div;
};

const reRender = (container,encontrados)=>{
	container.empty();

	encontrados.forEach((pokemon)=>{
		container.append(itemPokemon(pokemon));
	});
		
};

const Pokedex = (data)=>{
	const container = $("<div></div>");
	const input = $("<input></input>");
	const pokedex = $("<div class='pokedex'></div>");
	const modal = $("<div class='modal'></div>");
	
	input.on("keyup", (e) =>{		
		
		let filtro = filterPokemon(data, input.val());

		reRender(pokedex,filtro);
	});

	/*data.forEach((obj,i)=>{
		if(i<=10){
			let name = obj.pokemon_species.name;
			let id = obj.entry_number;
			pokedex.append(itemPokemon(id, name));			
		}
	});
*/
	container.append(input);
	container.append(pokedex);
	container.append(modal);

	return container;	
};