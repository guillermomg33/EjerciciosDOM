window.onload = function() {
    let contador = 0;
    const btn = document.getElementById('contadorBtn');

    btn.addEventListener('click', () => {
        contador++;
        btn.textContent = "Click: " + contador;
    });
}