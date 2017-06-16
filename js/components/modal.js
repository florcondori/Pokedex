'use strict';
const Modal = ()=>{
	const modal = $("<div class='modal'></div>");


	getPokemon((error,data)=>{
		if(error) console.log("hubo un error al traer el pokemon");	
		
		console.log(data);

	}, state.pokemonSelected);

	return modal
};
/*const descripcion =(data)=>{
	const descripcion = $("<div></div>");
	data.forEach((obj)=>{
		let p = $("<p>"+obj.ability.name+"</p>");
		descripcion.append(p);
		console.log(obj.ability.name);
	7});
	return name;
};


*/

