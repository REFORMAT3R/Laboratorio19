document.getElementById("buscar").addEventListener("click", async () => {
    const valor = document.getElementById("pokeInput").value.toLowerCase();
    const img = document.getElementById("pokeImg");
    const nombre = document.getElementById("nombre");
    const tipos = document.getElementById("tipos");

    if (!valor) {
        nombre.textContent = "Ingresa un nombre o ID.";
        img.style.display = "none";
        tipos.textContent = "";
        return;
    }

    try {
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon/" + valor);
        if (!resp.ok) 
            throw new Error("Pokémon no encontrado");

        const data = await resp.json();

        nombre.textContent = "Nombre: " + data.name;

        img.src = data.sprites.front_default;
        img.style.display = "block";

        const listaTipos = data.types.map(t => t.type.name).join(", ");
        tipos.textContent = "Tipos: " + listaTipos;

    } 
    catch (error) {
        nombre.textContent = "Error: " + error.message;
        img.style.display = "none";
        tipos.textContent = "";
    }
});