'use strict';
const render = (root)=>{
	root.empty();
	const wrapper = $("<div class='wrapper'></div>");

	wrapper.append(Header());	
	wrapper.append(Pokedex(_ => render(root)));
	if(state.pokemonSelected != null){
		wrapper.append(Modal());
	}
	
	root.append(wrapper);
};

const state = {
	pokedex: null,
	pokemonSelected : null
}

$(_=>{

	getPokedex((error,data)=>{
		if(error) console.log("hubo un error obtener pokedex");	

		const root = $(".root");
		render(root);

		state.pokedex= data.pokemon_entries;
	});

});