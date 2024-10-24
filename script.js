// Asegurarse de que el código se ejecute cuando la página esté cargada
window.onload = function() {
    // Referencia a la base de datos Firestore
    const db = firebase.firestore();
    
    // Referencia al documento "contador" en la colección "visitas"
    const docRef = db.collection('visitas').doc('contador');

    // Obtener el valor actual del contador desde Firestore
    docRef.get().then((doc) => {
        if (doc.exists) {
            // Si el documento existe, obtenemos el valor del campo 'contador'
            const data = doc.data();
            const contador = data.contador;
            // Mostrar el valor del contador en el elemento con id "contador"
            document.getElementById("contador").textContent = contador;
        } else {
            console.log("No se encontró el contador en la base de datos.");
        }
    }).catch((error) => {
        console.log("Error al obtener el documento:", error);
    });

    // Función para incrementar el contador y actualizar en Firestore
    function incrementarContador() {
        // Obtener el documento actual nuevamente
        docRef.get().then((doc) => {
            if (doc.exists) {
                // Obtener el valor actual del contador
                const data = doc.data();
                let contador = data.contador;
                contador++; // Incrementar el contador

                // Actualizar el valor en Firestore
                docRef.update({ contador: contador })
                    .then(() => {
                        // Mostrar el nuevo valor del contador en la página
                        document.getElementById("contador").textContent = contador;
                    })
                    .catch((error) => {
                        console.log("Error al actualizar el contador:", error);
                    });
            } else {
                console.log("No se encontró el contador.");
            }
        }).catch((error) => {
            console.log("Error al obtener el documento:", error);
        });
    }

    // Asignar la función de incremento al botón de visitas
    document.getElementById("contadorBtn").addEventListener("click", incrementarContador);
};
