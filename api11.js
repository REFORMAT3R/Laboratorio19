document.getElementById("buscar").addEventListener("click", async () => {
    const valor = document.getElementById("pokeInput").value.toLowerCase();
    const img = document.getElementById("pokeImg");
    const nombre = document.getElementById("nombre");
    const tablaBody = document.querySelector("#statsTabla tbody");

    if (!valor) {
        nombre.textContent = "Ingresa un nombre o ID.";
        img.style.display = "none";
        tablaBody.innerHTML = "";
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

        tablaBody.innerHTML = "";

        data.stats.forEach(stat => {
            const fila = document.createElement("tr");
            const celNombre = document.createElement("td");
            const celValor = document.createElement("td");

            celNombre.textContent = stat.stat.name;
            celValor.textContent = stat.base_stat;

            fila.appendChild(celNombre);
            fila.appendChild(celValor);
            tablaBody.appendChild(fila);
        });

    } catch (error) {
        nombre.textContent = "Error: " + error.message;
        img.style.display = "none";
        tablaBody.innerHTML = "";
    }
});