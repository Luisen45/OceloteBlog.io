window.onload = function() {
    const db = firebase.firestore();
    const docRef = db.collection('visitas').doc('contador');

    // Obtener y mostrar todos los contadores al cargar la página
    docRef.get().then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            document.getElementById("contadorMarcos").textContent = data.contadorMarcos || 0;
            document.getElementById("contadorMiriam").textContent = data.contadorMiriam || 0;
            document.getElementById("contadorRamon").textContent = data.contadorRamon || 0;
            document.getElementById("contadorVisitas").textContent = data.contadorVisitas || 0;
        } else {
            console.log("No se encontró el documento.");
        }
    }).catch((error) => {
        console.log("Error al obtener el documento:", error);
    });

    // Funciones para incrementar cada contador
    function incrementarContador(campo) {
        docRef.get().then((doc) => {
            if (doc.exists) {
                let contador = doc.data()[campo] || 0;
                contador++;

                let updateObj = {};
                updateObj[campo] = contador;

                // Actualizar el contador correspondiente en Firestore
                docRef.update(updateObj)
                    .then(() => {
                        document.getElementById(campo).textContent = contador;
                    })
                    .catch((error) => {
                        console.log("Error al actualizar el contador:", error);
                    });
            } else {
                console.log("No se encontró el documento.");
            }
        }).catch((error) => {
            console.log("Error al obtener el documento:", error);
        });
    }

    // Asignar la función a cada botón
    document.getElementById("contadorBtnMarcos").addEventListener("click", () => incrementarContador("contadorMarcos"));
    document.getElementById("contadorBtnMiriam").addEventListener("click", () => incrementarContador("contadorMiriam"));
    document.getElementById("contadorBtnRamon").addEventListener("click", () => incrementarContador("contadorRamon"));
    document.getElementById("contadorBtnVisitas").addEventListener("click", () => incrementarContador("contadorVisitas"));
};
