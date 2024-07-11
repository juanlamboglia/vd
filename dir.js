document.addEventListener('DOMContentLoaded', function() {
    // Obtener el modal y el botón de cierre
    var direccionModal = document.getElementById("direccionModal");
    var closeBtn = document.getElementsByClassName("close")[0];

    // Función para abrir el modal de dirección
    window.openDireccionModal = function() {
        direccionModal.style.display = "block";
    };

    // Función para cerrar el modal
    closeBtn.onclick = function() {
        direccionModal.style.display = "none";
    };

    // Cerrar el modal si se hace clic fuera de él
    window.onclick = function(event) {
        if (event.target == direccionModal) {
            direccionModal.style.display = "none";
        }
    };

    // Agregar un evento al botón de guardar dirección
    document.getElementById("guardarDireccionBtn").addEventListener("click", function() {
        var direccionForm = document.getElementById("direccionForm");

        if (direccionForm.checkValidity()) {
            var tipoVia = document.getElementById("tipo-via").value;
            var via = document.getElementById("via").value;
            var numero = document.getElementById("numero").value;
            var numeroComplemento = document.getElementById("numero-complemento").value;
            var complemento = document.getElementById("complemento").value;
            var datosAdicionales = document.getElementById("datos-adicionales").value;

            // Aquí puedes hacer lo que necesites con los valores obtenidos
            var direccionCompleta = tipoVia + " " + via + " #" + numero + "-" + numeroComplemento + ", " + complemento + ", " + datosAdicionales;
            document.getElementById("direccion-residencia").value = direccionCompleta;

            // Cerrar el modal
            direccionModal.style.display = "none";
        } else {
            // Mostrar mensajes de error si el formulario no es válido
            direccionForm.reportValidity();
        }
    });
});
