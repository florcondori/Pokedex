'use strict';

const getHabilidades = (data)=>{
	let array = [];
	data.forEach((obj)=>{
		array.push(obj.ability.name);
	});		

	return array;
};

/*const getDebilidad = (tipo)=>{
	var arrayj = [];
	$.getJSON("https://pokeapi.co/api/v2/type/"+tipo,(json)=>{	
		var array=json.damage_relations.double_damage_from;
		console.log(json.damage_relations.double_damage_from);
		 array.forEach((obj)=>{
		 	arrayj.push(obj.name);
		 });
		 console.log(arrayj);
	});
	
	
	
};*/

const getTipo = (data)=>{
	let arrayTipo = [];
	let arrayDebilidad = [];
	const tipo = $("<div class='tipo'></div>");
	const pTipo = $("<p>Tipo:</p>");
	const divTipo = $("<div></div>");
	const dDebil = $("<p>Debilidad:</p>");
	const divDebilidad = $("<div></div>");
	data.forEach((obj)=>{
		divTipo.append("<div class='caja'>"+obj.type.name+"</div>");
		arrayTipo.push(obj.type.name);
	});
	console.log(arrayTipo);
	tipo.append(pTipo);
	tipo.append(divTipo);

	
	arrayTipo.forEach(tipo=>{
		console.log(getDebilidad(tipo));
	});
	
		
	return tipo;
};

const getCaracteristicas = (data)=>{
	const caracteristicas = $("<div class='flex bg-celeste text-white p-10 mv-7'></div>");
	const div1 = $("<div class='mr-5'></div>");
	const altura = $("<p>Altura:</p>");
	const datoAltura =$("<span>"+data.height+" m</span>")
	const peso = $("<p class='mt-10'>Peso:</p>");
	const datoPeso = $("<span>"+data.weight+" Kg</span>");
	const sexo = $("<p class='mt-10'>Sexo:</p>");
	const datoSexo = $("<span></span>");
	const div2 = $("<div></div>");
	const categoria = $("<p>Categoria:</p>");
	const datoCategoria =$("<span></span>")
	const habilidades = $("<p class='mt-10'>Habilidades:</p>");
	const datoHabilidades = $("<span></span>");
	datoHabilidades.text(getHabilidades(data.abilities).join(", "));
	
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
	const cuadro = $("<div class='cuadro-modal'></div>");
	const cerrarModal = $("<a href='#'></a>");
	const nombre = $("<h1 class='text-center text-capitalize'>"+state.pokemonSelected.name+"</h1>");
	const div = $("<div class='flex space-around'></div>");
	const divImg = $("<div class='width-25 bg-gris-claro text-center'><img src=http://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+rellenarCeros(state.pokemonSelected.id)+".png></div>");
	const divContenido = $("<div class='width-60'></div>");
	var docFragment = $(document.createDocumentFragment());
		
	docFragment.append(getDescripcion(state.pokemonSelected.id));
	docFragment.append(getCaracteristicas(state.pokemonSelected));
	docFragment.append(getTipo(state.pokemonSelected.types));
	divContenido.append(docFragment);
		
	div.append(divImg);
	div.append(divContenido);

	cuadro.append(nombre);
	cuadro.append(div);
	cuadro.append(cerrarModal);
	modal.append(cuadro);

	return modal
};
