window.onload = function() {
    let imagen = document.getElementById("imagenSust");
    imagen.addEventListener('click', cambiarImagen);
}

function cambiarImagen() {
    let imagen = document.getElementById("imagenSust");
    if (imagen.getAttribute("src") === "img/pic_bulbon.gif") {
        imagen.src = "img/pic_bulboff.gif";
    }
    else {
        imagen.src = "img/pic_bulbon.gif";
    }
}