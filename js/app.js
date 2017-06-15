'use strict';
const render = (root, data)=>{
	root.empty();
	const wrapper = $("<div class='wrapper'></div>");

	wrapper.append(Pokedex(data));

	root.append(wrapper);
};

$(_=>{
	getPokedex((error,data)=>{
		if(error) console.log("hubo un error");
		console.log(data.pokemon_entries);
		const root = $(".root");
		render(root, data);
	});
	
});