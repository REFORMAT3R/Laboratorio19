let listaPokemon = [];
let indiceActual = 0; // Para mostrar de 3 en 3

async function cargarPokemon() {
    const contenedor = document.getElementById("contenedor");

    for (let id = 1; id <= 12; id++) {
        try {
            const resp = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
            if (!resp.ok) 
                throw new Error("Error al obtener Pokémon con ID " + id);
            const p = await resp.json();
            listaPokemon.push(p);
        } catch (error) {
            console.log(error.message);
        }
    }

    mostrarPokemon();
}

function mostrarPokemon() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    const grupo = listaPokemon.slice(indiceActual, indiceActual + 3);

    grupo.forEach(p => {
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
    });
}

document.getElementById("siguiente").addEventListener("click", () => {
    if (indiceActual + 3 < listaPokemon.length) {
        indiceActual += 3;
        mostrarPokemon();
    }
});

document.getElementById("anterior").addEventListener("click", () => {
    if (indiceActual - 3 >= 0) {
        indiceActual -= 3;
        mostrarPokemon();
    }
});

cargarPokemon();