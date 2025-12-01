const id = prompt("Ingresa el ID del Pokémon:");
if (!id || isNaN(id) || id <= 0) {
    console.log("Error: ID inválido. Debes ingresar un número positivo");
} else {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id)
        .then(function(resp) {
            if (!resp.ok) {
                throw new Error("Pokémon no encontrado, " + resp.status);
            }
            return resp.json();
        })
        .then(function(data) {
            console.log("Nombre del Pokémon: " + data.name);
            console.log("Altura: " + data.height + " | Peso: " + data.weight);
        })
        .catch(function(error) {
            console.log("Error: " + error.message);
        });
}