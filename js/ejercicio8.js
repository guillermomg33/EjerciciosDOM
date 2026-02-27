window.onload = function() {
    // Obtener el botón
    const boton = document.getElementById('btn');

    // Asignar evento al botón
    boton.addEventListener('click', listar);
}

function listar() {
    let lista = document.getElementById('flores');
    let res = document.getElementById('resultado');

    // Obtenemos todos los elementos cuta clase="item"
    let items = lista.getElementsByClassName('item');

    items = Array.from(items);
    items = items.sort(function(a, b) {
        return (a.innerText > b.innerText) ? 1 : -1
    });

    let txt = '';
    for (let item of items) {
        txt += (item.innerText + '<br>');
    }
    res.innerHTML = txt;
}