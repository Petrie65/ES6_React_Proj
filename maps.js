// Map: A simple key/value map

let pikachu = {
	name: 'I am pikachu',
	power: 'I can electrify',
}

let clifary = {
	name: 'I am clifary',
	power: 'I am cute',
}

let charmander = {
	name: 'I am charmander',
	power: 'I throw fire',
}

// Create map
let pokemon = new Map();

// set(key, value)
pokemon.set('pika', pikachu);
pokemon.set('cli', clifary);
pokemon.set('char', charmander);

// get size of map
console.log(pokemon.size); // 3
