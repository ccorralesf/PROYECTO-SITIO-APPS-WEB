//se ejecuta cuando el contenido esta cargado en el DOM
document.addEventListener('DOMContentLoaded', function() {
    const buscadorForm = document.getElementById('buscadorForm');
    const cedulaInput = document.getElementById('cedula');
    const resultadoContainer = document.getElementById('resultado');

    //carga de la biblioteca de eventos submit
    buscadorForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Trim para eliminar espacios en blanco al inicio y al final
        const cedula = cedulaInput.value.trim();
        // Verifica si el campo de cédula está vacío
        if (cedula.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingresa una cédula antes de buscar.'
            });
        } else
        // Verifica si el valor ingresado no es un número
        if (isNaN(cedula)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cédula ingresada no es válida...'
            });
        } else
        //cargar la función validarCedula
        if (validarCedula(cedula)) {
            //cargar la funcion que muestra los empleados por cedula
            mostrarInformacionEmpleado(cedula);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cédula ingresada no es válida...'
            });
        }
    });

    //funcion validar el campo cedula
    function validarCedula(cedula) {
        // Verifica si la cédula tiene exactamente 9 dígitos numéricos
        return /^\d{9}$/.test(cedula);
    }

    //funcion que permite almacenar los datos de los empleados
    function mostrarInformacionEmpleado(cedula) {
        //objeto empleados
        const empleados = {
            '109110338': { nombre: 'Pedro', apellidos: 'Miranda Baldez', lugar: 'San gerardo de Dota', foto: '../imagenes/reto10Uno.jpg', descripcion: 'Guia' },
            '209110338': { nombre: 'Alejandro', apellidos: 'Castro Pelaez', lugar: 'Santa Maria de Dota', foto: '../imagenes/reto10Dos.jpg', descripcion: 'Guia y Chofer' },
            '309110338': { nombre: 'Oscar', apellidos: 'Morera Soto', lugar: 'Cartago Centro', foto: '../imagenes/reto10Tres.jpg', descripcion: 'Guia' },
            '409110338': { nombre: 'Jose', apellidos: 'Suarez Alvarez', lugar: 'San Jose', foto: '../imagenes/reto10Cuatro.jpg', descripcion: 'Guia' },
            '509110338': { nombre: 'Pablo', apellidos: 'Coto Guido', lugar: 'Tres Rios', foto: '../imagenes/reto10Cinco.jpg', descripcion: 'Chofer' },
        };
        //condicional que permite validar si el usuario existe 
        if (empleados[cedula]) {
            const empleado = empleados[cedula];
            //cargar funcion que muestra el resultado final de la busqueda
            mostrarResultado(empleado);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El usuario no existe...'
            });
        }
    }

    //funcion que muestra el resultado final de la busqueda
    function mostrarResultado(empleado) {
        //permite crear contenido HTML 
        resultadoContainer.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src="imagenes/${empleado.foto}" class="card-img-top" alt="Foto del empleado">
                        <div class="card-body">
                            <h5 class="card-title">${empleado.nombre}</h5>
                            <p class="card-text">Apellidos: ${empleado.apellidos}</p>
                            <p class="card-text">Lugar: ${empleado.lugar}</p>
                            <p class="card-text">Descripcion: ${empleado.descripcion}</p>
                        </div>
                    </div>
                `;
    }
    /*cierre del evento principal */
});

function borrar() {
    document.getElementById("cedula").value = "";
    document.getElementById("resultado").innerHTML = "";
}
