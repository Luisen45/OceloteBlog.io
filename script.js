// Asegurarse de que el código se ejecute cuando la página esté cargada
window.onload = function() {
    // Intentamos obtener el valor del contador desde localStorage
    let contador = localStorage.getItem("contadorVisitas");

    // Si el valor del contador no está en localStorage, lo inicializamos en 434
    if (!contador) {
        contador = 0;
    } else {
        // Convertimos el valor recuperado en un número
        contador = parseInt(contador, 10);
    }

    // Mostramos el valor inicial del contador en la página
    document.getElementById("contador").textContent = contador;

    // Función para incrementar el contador y guardarlo en localStorage
    function incrementarContador() {
        contador++; // Aumentamos el contador en 1
        document.getElementById("contador").textContent = contador; // Actualizamos el contador en la página
        localStorage.setItem("contadorVisitas", contador); // Guardamos el nuevo valor en localStorage
    }

    // Asignamos la función al botón de visitas
    document.getElementById("contadorBtn").addEventListener("click", incrementarContador);
};
