// Asegurarse de que el código se ejecute cuando la página esté cargada
window.onload = function() {
  // Obtener el valor inicial del contador desde LocalStorage, o inicializar en 0 si no existe
  let contador = localStorage.getItem('contadorVisitas') || 0;

  // Mostrar el valor del contador en la página
  document.getElementById('contador').textContent = contador;

  // Función que incrementa el contador y lo guarda en LocalStorage
  function incrementarContador() {
      contador++;
      document.getElementById('contador').textContent = contador;
      localStorage.setItem('contadorVisitas', contador); // Guardar el contador en LocalStorage
  }

  // Asignar la función al botón
  document.getElementById('contadorBtn').addEventListener('click', incrementarContador);
};
