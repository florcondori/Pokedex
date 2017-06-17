const getPokedex = (callback)=>{

	const Url = 'https://pokeapi.co/api/v2/pokedex/1';

	const xhr = new XMLHttpRequest();

	xhr.addEventListener('load',_=>{
		if(xhr.status !=200) callback(new Error("Error al obtener datos"));
		callback(null,xhr.response);
	});
	
	xhr.open('GET', Url);	

	xhr.responseType ='json';
	xhr.send();

	/*$.get(Url, (data) => {
	    if (data.status != 200) callback(new Error("Error al obtener la podekex"));
	    callback(null,data);
	});*/

};

const getPokemon = (callback,id)=>{

	const Url = 'https://pokeapi.co/api/v2/pokemon/';

	const xhr = new XMLHttpRequest();

	xhr.addEventListener('load',_=>{
		if(xhr.status !=200) callback(new Error("Error al obtener pokemon"));
		callback(null,xhr.response);
	});
	
	xhr.open('GET', Url+id+"/");
	
	xhr.responseType ='json';
	xhr.send();
};

