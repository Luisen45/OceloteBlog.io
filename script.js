// Asegurarse de que el código se ejecute cuando la página esté cargada
window.onload = function() { 
  // Obtener el valor inicial del contador desde localStorage, o inicializar en 434 si no existe
  let contador = localStorage.getItem("contadorVisitas");

  // Si no hay un valor guardado en localStorage, inicializar el contador en 434
  if (!contador) {
      contador = 434;
  } else {
      // Convertir el valor de localStorage a número
      contador = parseInt(contador, 10);
  }

  // Mostrar el valor del contador en la página
  document.getElementById("contador").textContent = contador;

  // Función que incrementa el contador y lo guarda en localStorage
  function incrementarContador() {
      contador++;
      document.getElementById("contador").textContent = contador;
      localStorage.setItem("contadorVisitas", contador); // Guardar el contador en localStorage
  }

  // Asignar la función al botón
  document.getElementById("contadorBtn").addEventListener("click", incrementarContador);
};
