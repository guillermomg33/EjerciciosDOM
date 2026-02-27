window.onload = function() {
    // Obtener los botones
    const botonCopiar = document.getElementById("copiar");
    
    // Asignar evento al botón copiar
    botonCopiar.addEventListener("click", fCopiar);
}

function fCopiar() {
    // Contenido a copiar
    let textoParaCopiar = document.getElementById(".texto").textContent;

    // Elemento donde tengo que copiar el contenido
    let destino = document.querySelector("p");
    destino.textContent = textoParaCopiar;
}