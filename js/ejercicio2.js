window.onload = function() {
    crearContenido();
}

function crearContenido() {
    let nodoTitle = document.createElement("title");
    let txtTitle = document.createTextNode("Mi página dinámica");
    nodoTitle.appendChild(txtTitle);
    document.head.appendChild(nodoTitle);

    // Crear la cabecera h1
    let titularH1 = document.createElement("h1");
    let txtTitular = document.createTextNode("Página creada on line");
    titularH1.appendChild(txtTitular);
    document.body.appendChild(titularH1);

    // Crear el párrafo
    let parrafoCur = document.createElement("p");
    parrafoCur.setAttribute("style", "font-style: italic");
    let txtParrafo = document.createTextNode("Ese es el contenido de mi párrafo. Está puesto en cursiva");
    parrafoCur.appendChild(txtParrafo);
    document.body.appendChild(parrafoCur);
}
