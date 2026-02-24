window.onload = function() {
    let boton = document.getElementById("btnMenu");
    let lista = document.getElementById("listaMenu");

    boton.addEventListener("click", function() {
        lista.classList.toggle("oculto");
    });
}