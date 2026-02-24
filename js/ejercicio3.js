window.onload = function() {
    cargarImagen();
}

function cargarImagen() {
    // Crear imagen
    let destino = document.getElementById("imagen");

    // Si el elemento con id="imagen" no existe se cargará la imagen
    if (destino === undefined)
        alert("No existe el bloque destino");
    else {
        let nodoImg = document.createElement("img");
        nodoImg.setAttribute("src", "img/programa.jpg");
        destino.appendChild(nodoImg);
    }
}