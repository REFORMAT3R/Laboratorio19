async function pokemonAleatorio() {
    try {
        const id = Math.floor(Math.random() * 898) + 1;
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);

        if (!resp.ok) {
            throw new Error("Pokémon no encontrado: " + resp.status);
        }

        const data = await resp.json();
        console.log("Pokémon aleatorio:", data.name);

    } 
    catch (error) {
        console.log("Ocurrió un error:", error.message);
    }
}

pokemonAleatorio();