'use strict';

const Header = ()=>{
	const header = $("<header></header>");
	const title = $("<h1 class='text-center'>Pokédex</h1>");

	header.append(title);

	return header;
};