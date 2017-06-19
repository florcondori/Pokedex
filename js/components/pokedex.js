'use strict';
const rellenarCeros = (id)=>{
	if(id<10){
		return "00"+id;
	}
	else if(id<100){
		return "0"+id;
	}else if(id<1000){
		return id;
	}

};

const itemPokemon = (data, update)=>{
	let id = data.entry_number;
	
	const url = "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
	const png = ".png";

	const div = $("<div class='pokemon bg-gris-claro'></div>");
	const imgPokemon = $("<img src="+url+rellenarCeros(id)+png+">");
	const divTrapecio = $("<div class='trapecio'></div>");
	const divIcon =$("<div class='flex-center'></div>");
	const ancla = $("<a href='#'></a>");
	const iconPokebola = $("<i class='icon pokebola'></i>");
	const iconCorazon = $("<i class='icon heart'></i>");
	const iconFlecha = $("<i class='icon flecha'></i>");	
	const nombre = $("<p class='text-center text-capitalize'>"+data.pokemon_species.name+"</p>");
	
	ancla.on("click", (e)=>{
		e.preventDefault();
		getPokemon((error,data)=>{
			if(error) console.log(error.message);	
			
			console.log(data);
			state.pokemonSelected = data;
			update();
		}, id);
		
	});

	ancla.append(iconPokebola);

	divIcon.append(ancla);
	divIcon.append(iconCorazon);
	divIcon.append(iconFlecha);

	divTrapecio.append(divIcon);
	divTrapecio.append(nombre);

	div.append(imgPokemon);
	div.append(divTrapecio);
	
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

	/*state.pokedex.forEach((obj,i)=>{
		if(i<=10){
			let name = obj.pokemon_species.name;
			let id = obj.entry_number;
			pokedex.append(itemPokemon(obj, update));			
		}
	});*/


	divFiltro.append(input);
	divFiltro.append(button);

	div.append(divFiltro);
	div.append(pokedex);

	return div;	
};