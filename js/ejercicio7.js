window.onload = function() {
    // Obtener los botones
    const botonEnviar = document.getElementById("enviar");
    // Asignar evento al botón enviar
    botonEnviar.addEventListener("click", mostrar);
}

function mostrar() {
    let campos = document.getElementsByName("menu");
    campos.forEach(function(v) {
        if (v.checked)
            alert("Elegiste: " + v.value);
    });
}