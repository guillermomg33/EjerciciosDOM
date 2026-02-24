// Definimos e inicializamos la variable que va a controlar el desplazamiento
let desplazamiento = 0;
let desplazamiento2 = 0;

window.onload = function() {
    let fondo1 = document.getElementById("fondouno");
    let fondo2 = document.getElementById("fondodos");

    let movimiento = setInterval(function(){mover(fondo1, fondo2)}, 50);
    let reinicio = setInterval(function(){reiniciar(fondo1, fondo2)}, 2250);
}

function mover(f1, f2) {
    // Definir el desplazamiento que voy a aplicar a fondouno
    desplazamiento -= 10;
    // Definir el desplazamiento que voy a aplicar a fondodos
    desplazamiento2 = desplazamiento + 450;
    // Asocio el desplazamiento a fondouno
    f1.style.left = desplazamiento + "px";
    //Asocio el desplazamiento a fondodos
    f2.style.left = desplazamiento2 + "px";
}

function reiniciar(f1, f2) {
    f1.style.left = "0opx";
    f2.style.left = "450px";
    desplazamiento = 0;
}