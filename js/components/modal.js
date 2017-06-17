'use strict';
const getHabilidades = (array)=>{
	const habilidades = $("<div></div>");
	const subtitulo = $("<p class='subtitulo'>Habilidades</p>");

	habilidades.append(subtitulo);
	array.forEach((obj)=>{
		let p = $("<p></p>");
		p.text(obj.ability.name);
		habilidades.append(p);
	});

	return habilidades;
};

const getDescripcion = (id)=>{
	const descripcion = $("<div></div>");
	$.getJSON("https://pokeapi.co/api/v2/pokemon-species/"+id+"/", (json)=>{		
		
		const p = $("<p></p>");
		p.text(json.flavor_text_entries[11].flavor_text);
		descripcion.append(p);		
		
	}

	);
	return descripcion;
};

const Modal = ()=>{
	const modal = $("<div class='modal'></div>");
	const cuadro = $("<div class='cuadro_modal'></div>");
	var docFragment = $(document.createDocumentFragment());

	getPokemon((error,data)=>{
		if(error) console.log(error.message);	
		
		console.log(data);
		docFragment.append(getDescripcion(data.id));
		docFragment.append(getHabilidades(data.abilities));
		cuadro.append(docFragment);
	}, state.pokemonSelected);

	
	modal.append(cuadro);
	return modal
};
