// Función para navegar a una sección específica
function navigateToSection(section) {
    window.location.href = section + '.html'; // Cambia la URL para navegar a la sección
}

// Función para intentar navegar a una sección después de validar el formulario
function attemptNavigateToSection(section) {
    const form = document.getElementById('vinculacion-form'); // Obtiene el formulario por su ID
    if (form.checkValidity()) { // Verifica si el formulario es válido
        saveData(null, section); // Guarda los datos y navega a la sección
    } else {
        alert('Por favor, completa todos los campos obligatorios antes de continuar.'); // Muestra una alerta si hay campos obligatorios vacíos
        highlightEmptyFields(form); // Resalta los campos vacíos
    }
}

// Función para resaltar los campos obligatorios vacíos
function highlightEmptyFields(form) {
    const requiredFields = form.querySelectorAll('[required]'); // Selecciona todos los campos requeridos
    requiredFields.forEach(field => { // Itera sobre cada campo
        if (!field.value) { // Si el campo está vacío
            field.style.borderColor = 'red'; // Cambia el borde a rojo
        }
    });
}

// Función para mostrar u ocultar la sección de afinidad
function toggleAfinidad(hasRelation) {
    document.getElementById('afinidad-si').style.display = hasRelation ? 'block' : 'none'; // Muestra u oculta la sección de afinidad
}

// Función para mostrar el tooltip de un campo específico
function showTooltip(field) {
    document.getElementById('tooltip-' + field).style.display = 'block'; // Muestra el tooltip del campo
}

// Función para ocultar el tooltip de un campo específico
function hideTooltip(field) {
    document.getElementById('tooltip-' + field).style.display = 'none'; // Oculta el tooltip del campo
}

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Expresión regular para validar el correo
    return re.test(String(email).toLowerCase()); // Devuelve true si el correo es válido
}

// Función para guardar los datos del formulario en el almacenamiento local
function saveData(event, nextSection = null) {
    if (event) {
        event.preventDefault(); // Previene la acción predeterminada del formulario
    }

    // Crea un objeto con los datos del formulario
    const formData = {
        primerApellido: document.getElementById('primer-apellido').value,
        segundoApellido: document.getElementById('segundo-apellido').value,
        primerNombre: document.getElementById('primer-nombre').value,
        segundoNombre: document.getElementById('segundo-nombre').value,
        tipoId: document.getElementById('tipo-id').value,
        numeroId: document.getElementById('numero-id').value,
        fechaExpedicionId: document.getElementById('fecha-expedicion-id').value,
        nacionalidad: document.getElementById('nacionalidad').value,
        fechaNacimiento: document.getElementById('fecha-nacimiento').value,
        lugarNacimiento: document.getElementById('lugar-nacimiento').value,
        sexo: document.getElementById('sexo').value,
        estadoCivil: document.getElementById('estado-civil').value,
        nivelEstudios: document.getElementById('nivel-estudios').value,
        profesion: document.getElementById('profesion').value,
        celular: document.getElementById('celular').value,
        correo: document.getElementById('correo').value,
        direccionResidencia: document.getElementById('direccion-residencia').value,
        ciudadResidencia: document.getElementById('ciudad-residencia').value,
        deptoResidencia: document.getElementById('depto-residencia').value,
        paisResidencia: document.getElementById('pais-residencia').value,
        telefonoResidencia: document.getElementById('telefono-residencia').value,
        ocupacion: document.getElementById('ocupacion').value,
        ocupacionOtra: document.getElementById('ocupacion-otra-text').value,
        actividadEconomica: document.getElementById('actividad-economica').value,
        tiempoActividad: document.getElementById('tiempo-actividad').value,
        codigoCiiu: document.getElementById('codigo-ciiu').value,
        afinidadGSC: document.querySelector('input[name="afinidad-gsc"]:checked').value,
        parentesco: document.getElementById('parentesco').value,
        nombreFuncionario: document.getElementById('nombre-funcionario').value,
        deptoLaboral: document.getElementById('depto-laboral').value,
        ciudadLaboral: document.getElementById('ciudad-laboral').value,
        direccionLaboral: document.getElementById('direccion-laboral').value,
        telefonoLaboral: document.getElementById('telefono-laboral').value
    };

    if (!validateEmail(formData.correo)) { // Verifica si el correo electrónico es válido
        alert('Por favor, ingresa un correo electrónico válido.'); // Muestra una alerta si el correo es inválido
        return; // Sale de la función sin guardar los datos
    }

    localStorage.setItem('formDataSection1', JSON.stringify(formData)); // Guarda los datos en el almacenamiento local
    alert('Datos guardados correctamente'); // Muestra una alerta de confirmación

    const completedSections = JSON.parse(localStorage.getItem('completedSections')) || []; // Obtiene las secciones completadas
    if (!completedSections.includes('section-1')) { // Si la sección 1 no está marcada como completada
        completedSections.push('section-1'); // La añade a la lista de secciones completadas
        localStorage.setItem('completedSections', JSON.stringify(completedSections)); // Guarda la lista actualizada en el almacenamiento local
    }

    if (nextSection) { // Si se proporciona una sección siguiente
        navigateToSection(nextSection); // Navega a la siguiente sección
    }
}

// Función para cargar los datos guardados del almacenamiento local
function loadData() {
    const savedData = JSON.parse(localStorage.getItem('formDataSection1')); // Obtiene los datos guardados
    if (savedData) { // Si hay datos guardados
        // Rellena los campos del formulario con los datos guardados
        document.getElementById('primer-apellido').value = savedData.primerApellido || '';
        document.getElementById('segundo-apellido').value = savedData.segundoApellido || '';
        document.getElementById('primer-nombre').value = savedData.primerNombre || '';
        document.getElementById('segundo-nombre').value = savedData.segundoNombre || '';
        document.getElementById('tipo-id').value = savedData.tipoId || '';
        document.getElementById('numero-id').value = savedData.numeroId || '';
        document.getElementById('fecha-expedicion-id').value = savedData.fechaExpedicionId || '';
        document.getElementById('nacionalidad').value = savedData.nacionalidad || '';
        document.getElementById('fecha-nacimiento').value = savedData.fechaNacimiento || '';
        document.getElementById('lugar-nacimiento').value = savedData.lugarNacimiento || '';
        document.getElementById('sexo').value = savedData.sexo || '';
        document.getElementById('estado-civil').value = savedData.estadoCivil || '';
        document.getElementById('nivel-estudios').value = savedData.nivelEstudios || '';
        document.getElementById('profesion').value = savedData.profesion || '';
        document.getElementById('celular').value = savedData.celular || '';
        document.getElementById('correo').value = savedData.correo || '';
        document.getElementById('direccion-residencia').value = savedData.direccionResidencia || '';
        document.getElementById('ciudad-residencia').value = savedData.ciudadResidencia || '';
        document.getElementById('depto-residencia').value = savedData.deptoResidencia || '';
        document.getElementById('pais-residencia').value = savedData.paisResidencia || '';
        document.getElementById('telefono-residencia').value = savedData.telefonoResidencia || '';
        document.getElementById('ocupacion').value = savedData.ocupacion || '';
        document.getElementById('ocupacion-otra-text').value = savedData.ocupacionOtra || '';
        document.getElementById('actividad-economica').value = savedData.actividadEconomica || '';
        document.getElementById('tiempo-actividad').value = savedData.tiempoActividad || '';
        document.getElementById('codigo-ciiu').value = savedData.codigoCiiu || '';
        document.querySelector(`input[name="afinidad-gsc"][value="${savedData.afinidadGSC}"]`).checked = true;
        document.getElementById('parentesco').value = savedData.parentesco || '';
        document.getElementById('nombre-funcionario').value = savedData.nombreFuncionario || '';
        document.getElementById('depto-laboral').value = savedData.deptoLaboral || '';
        document.getElementById('ciudad-laboral').value = savedData.ciudadLaboral || '';
        document.getElementById('direccion-laboral').value = savedData.direccionLaboral || '';
        document.getElementById('telefono-laboral').value = savedData.telefonoLaboral || '';

        toggleAfinidad(savedData.afinidadGSC === 'si'); // Muestra u oculta la sección de afinidad según los datos guardados
        toggleOcupacion(savedData.ocupacion); // Muestra u oculta secciones según la ocupación guardada
    }
}

// Agrega un evento para cambiar la ocupación y actualizar la interfaz en consecuencia
document.getElementById('ocupacion').addEventListener('change', function() {
    const ocupacion = document.getElementById('ocupacion').value;
    toggleOcupacion(ocupacion); // Llama a la función para actualizar la interfaz según la ocupación seleccionada
});

// Función para mostrar u ocultar secciones según la ocupación seleccionada
function toggleOcupacion(ocupacion) {
    document.getElementById('ocupacion-otra').style.display = ocupacion === 'Otro' ? 'block' : 'none'; // Muestra el campo de otra ocupación si se selecciona "Otro"
    document.getElementById('datos-laborales').style.display = ocupacion === 'Empleado' ? 'block' : 'none'; // Muestra los campos de datos laborales si se selecciona "Empleado"
    document.getElementById('actividad-independiente').style.display = ocupacion === 'Independiente' ? 'block' : 'none'; // Muestra los campos de actividad independiente si se selecciona "Independiente"
}

// Agrega eventos a los botones de radio para mostrar u ocultar la sección de afinidad
document.querySelectorAll('input[name="afinidad-gsc"]').forEach(radio => {
    radio.addEventListener('change', function() {
        toggleAfinidad(this.value === 'si'); // Muestra u oculta la sección de afinidad según el valor del botón de radio seleccionado
    });
});

// Carga los datos guardados cuando se carga el contenido de la página
document.addEventListener('DOMContentLoaded', loadData);

// Agrega un evento para guardar los datos del formulario al enviarlo
document.getElementById('vinculacion-form').addEventListener('submit', saveData);

// Agrega un evento para cambiar la ocupación y actualizar la interfaz en consecuencia
document.getElementById('ocupacion').addEventListener('change', function() {
    const ocupacion = document.getElementById('ocupacion').value;
    document.getElementById('ocupacion-otra').style.display = ocupacion === 'Otro' ? 'block' : 'none'; // Muestra el campo de otra ocupación si se selecciona "Otro"
    document.getElementById('datos-laborales').style.display = ocupacion === 'Empleado' ? 'block' : 'none'; // Muestra los campos de datos laborales si se selecciona "Empleado"
    document.getElementById('actividad-independiente').style.display = ocupacion === 'Independiente' ? 'block' : 'none'; // Muestra los campos de actividad independiente si se selecciona "Independiente"
});

// Agrega un evento para cambiar la actividad económica y actualizar la interfaz en consecuencia
document.getElementById('actividad-economica').addEventListener('change', function() {
    const actividadIndependiente = document.getElementById('actividad-economica').value;
    // Aquí puedes agregar lógica adicional si es necesario para `actividad-economica`
});

