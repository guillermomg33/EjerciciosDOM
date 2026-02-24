window.onload = function() {
    let boton = document.getElementById("btnMenu");
    let menu = document.getElementById("menu");

    boton.addEventListener("click", function() {
        menu.classList.toggle("mostrar");
    })
}