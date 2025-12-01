async function buscarPokemon(id) {
    try {
        if (!id || isNaN(id) || id <= 0) {
            throw new Error("ID inválido: Debes ingresar un número positivo");
        }
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

        if (!resp.ok) {
            throw new Error("Pokémon no encontrado, " + resp.status);
        }

        const data = await resp.json();

        console.log("Nombre del Pokémon: " + data.name);
        console.log("Altura: " + data.height + " | Peso: " + data.weight);

    } catch (error) {
        console.log("Error: " + error.message);
    }
}

const id = prompt("Ingresa el ID del Pokémon:");
buscarPokemon(id);