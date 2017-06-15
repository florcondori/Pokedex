const getPokedex = (callback,endpoint,id)=>{

	const Url = 'https://pokeapi.co/api/v2/';
	
	const xhr = new XMLHttpRequest();

	xhr.addEventListener('load',_=>{
		if(xhr.status !=200) callback(new Error("Error al obtener datos"));
		callback(null,xhr.response);
	});
	
	if(id==undefined || id==null){
		xhr.open('GET', Url+endpoint+"/1");
	}else{
		xhr.open('GET', Url+endpoint+"/"+id+"/");
	}	

	xhr.responseType ='json';
	xhr.send();
};