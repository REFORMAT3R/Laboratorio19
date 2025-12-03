async function cargar() {
    const contenedor = document.getElementById("contenedor");
    for (let id = 1; id <= 10; id++) {
        try {
            const resp = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);

            if (!resp.ok) {
                throw new Error("No se pudo obtener el Pokémon con ID " + id);
            }

            const p = await resp.json();

            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = p.sprites.front_default;

            const nombre = document.createElement("h3");
            nombre.textContent = p.name;

            const textoId = document.createElement("p");
            textoId.textContent = "ID: " + p.id;

            card.appendChild(img);
            card.appendChild(nombre);
            card.appendChild(textoId);

            contenedor.appendChild(card);

        } 
        catch (error) {
            console.log("Error al cargar Pokémon con ID " + id + ": " + error.message);
        }
    }
}

cargar();