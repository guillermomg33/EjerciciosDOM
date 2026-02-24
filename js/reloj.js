window.onload = function() {
    // Llamamos a la función obtenerHora cada 500ms. Esto es lo que permite que el reloj se actualice
    let t = setInterval(obtenerHora, 500);
}

function obtenerHora() {
    let fecha = new Date(); // Creamos un objeto de tipo fecha

    // Extraemos la hora de la variable donde hemos guardado la fecha
    let h = fecha.getHours();

    // Si la hora no tiene dos dígitos, le añadiremos un cero delante
    if (h < 10) {
        h = "0"+ h;
    }

    // Extraemos los minutos
    let m = fecha.getMinutes();
    // Añadimos un cero si no tiene 2 dígitos
    if (m < 10) {
        m = "0" + m;
    }

    // Lo mismo con los segundos
    let s = fecha.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }

    document.getElementById("reloj").innerHTML = h + ":" + m + ":" + s;
}