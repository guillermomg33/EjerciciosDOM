window.onload = function() {
    // Obtener el botón
    const boton = document.getElementById('btn');

    // Asignar evento al botón
    boton.addEventListener('click', colorear);
}

function colorear() {
    var cabs = document.querySelectorAll("h2, h2");
    cabs.forEach(function(v){v.style.color = "red"});
}