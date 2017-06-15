'use strict';
const render = (root, data)=>{
	root.empty();
	const wrapper = $("<div class='wrapper'></div>");

	wrapper.append(Header());
	wrapper.append(Pokedex(data));
	//wrapper.append(Modal());

	root.append(wrapper);
};

const state = {
	pokemonSelect : null
}

$(_=>{

	getPokedex((error,data)=>{
		if(error) console.log("hubo un error");	

		const root = $(".root");
		render(root,data.pokemon_entries);

	},"pokedex");	
});