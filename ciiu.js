const dataciiu = {
    "actividad": [
        { "nombre": "0145 - Cría de aves de corral", "codigo": "0145" },
        { "nombre": "0161 - Actividades de apoyo a la agricultura", "codigo": "0161" },
        { "nombre": "0210 - Silvicultura y otras actividades forestales", "codigo": "0210" },
        // Agrega más actividades según sea necesario
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    const ciiuInput = document.getElementById('codigo-ciiu');
    const ciiuDatalist = document.getElementById('ciiu-codes');

    dataciiu.actividad.forEach(activity => {
        const option = document.createElement('option');
        option.value = activity.nombre;
        ciiuDatalist.appendChild(option);
    });

    ciiuInput.addEventListener('input', function() {
        const inputVal = ciiuInput.value.toLowerCase();
        const matchedActivities = dataciiu.actividad.filter(activity => activity.nombre.toLowerCase().includes(inputVal));
        
        ciiuDatalist.innerHTML = '';
        matchedActivities.forEach(activity => {
            const option = document.createElement('option');
            option.value = activity.nombre;
            ciiuDatalist.appendChild(option);
        });
    });
});
