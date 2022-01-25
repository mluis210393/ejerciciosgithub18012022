var x = prompt("Ingrese el numero de pokemon o nombre del pokemón");

var y ="https://pokeapi.co/api/v2/pokemon/" + x.toLowerCase(); + "/";

fetch(y)
.then(respuesta => respuesta.json())
.then(pokemon => {
  let element = document.getElementById('elemento')
  element.innerHTML = `<p style="text-align: center;"><img src='${pokemon.sprites.front_default}' style="height: 350px; width: 350px;" <p><br><br><br><br><br><h1 style="top: -600px; left: 0px;">Nombre: git${pokemon.name}<h1><p><h2>Altura: ${pokemon.height}<p><p>Peso: ${pokemon.weight}<p>`;
  console.log(pokemon)
})
.catch(err=>console.log(err))


