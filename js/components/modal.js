'use strict';
const getHabilidades = (data)=>{
	const 	array = [];
	data.forEach((obj)=>{		
		array.push(obj.ability.name);
	});
	return array;
};

const getDebilidad = ()=>{

};

const getTipo = ()=>{

};

const getCaracteristicas = (data)=>{
	const caracteristicas = $("<div class='caracteristicas'></div>");
	const div1 = $("<div></div>");
	const altura = $("<p>Altura:</p>");
	const datoAltura =$("<span>"+data.height+"</span>")
	const peso = $("<p>Peso:</p>");
	const datoPeso = $("<span>"+data.weight+"</span>");
	const sexo = $("<p>Sexo:</p>");
	const datoSexo = $("<span></span>");
	const div2 = $("<div></div>");
	const categoria = $("<p>Categoria:</p>");
	const datoCategoria =$("<span></span>")
	const habilidades = $("<p>Habilidades:</p>");
	const datoHabilidades = $("<span></span>");
	datoHabilidades.text(getHabilidades(data.abilities).join(","));
	console.log(getHabilidades(data.abilities).join(","));
	div2.append(categoria);
	div2.append(datoCategoria);
	div2.append(habilidades);
	div2.append(datoHabilidades);

	div1.append(altura);
	div1.append(datoAltura);
	div1.append(peso);
	div1.append(datoPeso);
	div1.append(sexo);

	caracteristicas.append(div1);
	caracteristicas.append(div2);

	return caracteristicas;
};

const getDescripcion = (id)=>{
	const descripcion = $("<div class='descripcion'></div>");
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
		docFragment.append(getCaracteristicas(data));
		cuadro.append(docFragment);
	}, state.pokemonSelected);

	
	modal.append(cuadro);
	return modal
};
