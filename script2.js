
var x = prompt("Ingrese el numero de pokemon o nombre del pokemón");

var y ="https://pokeapi.co/api/v2/pokemon/" + x.toLowerCase(); + "/";

fetch(y)
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('elemento')
  element.innerHTML = `<p> Nombre: ${pokemon.name}<p>
  <img src='${pokemon.sprites.front_default}'><p>${pokemon.height}<p><p>${pokemon.weight}<p>`;
  console.log(pokemon)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/8/')
.then(response => response.json())
.then(pokemon2 => {
  let element2 = document.getElementById('elemento2')
  element2.innerHTML = `<p>${pokemon2.name}<p>
  <img src='${pokemon2.sprites.front_default}'><p>${pokemon2.height}<p>`;
  console.log(pokemon2)
})
.catch(err=>console.log(err))