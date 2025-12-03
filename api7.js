document.getElementById("buscar").addEventListener("click", async () => {
    const id = document.getElementById("pokeId").value;
    const img = document.getElementById("pokeImg");
    const nombre = document.getElementById("nombre");
    const idP = document.getElementById("idP");
    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");
    const habilidades = document.getElementById("habilidades");

    if (!id) {
        nombre.textContent = "Ingresa un ID.";
        return;
    }

    try {
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);

        if (!resp.ok) {
            throw new Error("Pokémon no encontrado: " + resp.status);
        }

        const data = await resp.json();

        let textoHabs = "";
        data.abilities.forEach(a => textoHabs += a.ability.name + ", ");

        img.src = data.sprites.front_default;
        nombre.textContent = "Nombre: " + data.name;
        idP.textContent = "ID: " + data.id;
        peso.textContent = "Peso: " + data.weight;
        altura.textContent = "Altura: " + data.height;
        habilidades.textContent = "Habilidades: " + textoHabs;

    } 
    catch (error) {
        nombre.textContent = "Error: " + error.message;
        img.src = "";
        idP.textContent = "";
        peso.textContent = "";
        altura.textContent = "";
        habilidades.textContent = "";
    }
});

