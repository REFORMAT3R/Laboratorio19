async function listarPrimeros20Pokemon() {
    try {
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        if (!resp.ok) {
            throw new Error("Error al obtener la lista de Pokémon: " + resp.status);
        }

        const data = await resp.json();
        const lista = data.results;

        for (const element of lista) {
            const pokemonResp = await fetch(element.url);
            if (!pokemonResp.ok) {
                throw new Error("Error al obtener detalles de " + element.name + " (" + pokemonResp.status + ")");
            }

            const pokemonData = await pokemonResp.json();

            console.log("Nombre del Pokémon: " + pokemonData.name);
            console.log("Altura: " + pokemonData.height + " | Peso: " + pokemonData.weight);
            console.log("URL del sprite: " + pokemonData.sprites.front_default);
            console.log("------------------------");
        }

    } catch (error) {
        console.log("Error: " + error.message);
    }
}
listarPrimeros20Pokemon();