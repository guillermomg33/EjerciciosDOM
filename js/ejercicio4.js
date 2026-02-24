window.onload = function() {
    let enlace = document.getElementById("borrar");
    enlace.onclick = function() {
        borrarImagen("muestra");
    }
}

function borrarImagen(id) {
    let nodo = document.getElementById(id);
    nodo.remove();
}