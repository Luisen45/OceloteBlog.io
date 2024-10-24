window.onload = function() {
    // Conexión a la base de datos Firestore
    const db = firebase.firestore();
    
    // Referencia al documento "contador" dentro de la colección "visitas"
    const docRef = db.collection('visitas').doc('contador');

    // Obtener el valor del contador desde Firestore
    docRef.get().then((doc) => {
        if (doc.exists) {
            // Obtener el valor del campo "contador"
            const data = doc.data();
            const contador = data.contador;
            // Mostrar el valor en el elemento con id "contador"
            document.getElementById("contador").textContent = contador;
        } else {
            console.log("El documento no existe.");
        }
    }).catch((error) => {
        console.log("Error al obtener el documento:", error);
    });

    // Función para incrementar el contador y actualizar Firestore
    function incrementarContador() {
        docRef.get().then((doc) => {
            if (doc.exists) {
                const data = doc.data();
                let contador = data.contador;
                contador++;  // Incrementar el contador

                // Actualizar el valor del contador en Firestore
                docRef.update({ contador: contador })
                    .then(() => {
                        // Actualizar el valor en la página
                        document.getElementById("contador").textContent = contador;
                    })
                    .catch((error) => {
                        console.log("Error al actualizar el documento:", error);
                    });
            }
        }).catch((error) => {
            console.log("Error al obtener el documento:", error);
        });
    }

    // Asignar la función al botón de visitas
    document.getElementById("contadorBtn").addEventListener("click", incrementarContador);
};
