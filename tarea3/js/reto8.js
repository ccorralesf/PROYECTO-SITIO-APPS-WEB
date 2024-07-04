// Declaracion del arreglo vacio para añadir estudiantes conforme se llenan los inputs
const participantes = [];

//funcion que permtite agregar a los estudiantes al arreglo

function agregarParticipante() {
    const nombre = document.getElementById('nombre').value.trim(),
        apellidoParticipante = document.getElementById('apellidos').value.trim(),
        // Obtener el valor del campo de entrada 'nota1,2,3' y convertirlo a un número de punto flotante (decimales).
        nota1 = parseFloat(document.getElementById('nota1').value),
        nota2 = parseFloat(document.getElementById('nota2').value),
        nota3 = parseFloat(document.getElementById('nota3').value);

    /* La validación isNan dice que si nota1,2,3 no es un número válido
     (por ejemplo, si es una cadena no numérica o si está vacía), entonces isNaN devuelve true */
    if (nombre === '' || apellidoParticipante === '' || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {

        Swal.fire({
            icon: "error",
            title: "Debe llenar todos los campos",
            showClass: {
                popup: `
                animate__animated
                animate__fadeIn
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOut
                `
            }
        });

    } else {
        //operacion para obtener la calificacion del participante
        const calificacion = (nota1 + nota2 + nota3) / 3;

        // Agregar estudiante al arreglo
        participantes.push({ nombre, apellidoParticipante, calificacion });

        // Actualizar el select de estudiantes
        const selectParticipantes = document.getElementById('seleccionarParticipante');

        //Se crear una opcion nueva o etiqueta en este caso el option
        const option = document.createElement('option');

        // Se accede a la variable que almacena la etiqueta creada y se le agrega, nombre y apellido
        option.value = nombre + ' ' + apellidoParticipante;

        // Se establece el texto visible en la etiqueta <option> con la concatenación de nombre y apellido
        option.text = nombre + ' ' + apellidoParticipante;

        // Se agrega la etiqueta option al elemento select en el documento mediante appendChild
        selectParticipantes.appendChild(option);

        // Se llama a la función para limpiar los campos una vez registrados
        limpiarDatos();

        //reporte por desplegable 
        Swal.fire({
            icon: "success",
            title: "Calificacion agregada",
            showClass: {
                popup: `
                animate__animated
                animate__fadeIn
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOut
                `
            }
        });
    }
}

// Función que almacena el código para calcular el promedio
function calcularPromedioSeleccionado() {
    // Se obtiene el valor seleccionado en el elemento select con el id 'seleccionarEstudiante'
    const nombreSeleccionado = document.getElementById('seleccionarParticipante').value;

    // Se obtiene el id del elemento 'resultado'
    const resultado = document.getElementById('resultado');

    // Busca el estudiante seleccionado en el arreglo 'estudiantes'
    // Inicializa la variable 'estudianteSeleccionado' con el valor null 
    let participanteSeleccionado = null;

    // Inicia un ciclo for que recorre cada elemento en el arreglo 'estudiantes'
    for (let i = 0; i < participantes.length; i++) {
        // Obtiene el estudiante en la posición 'i' del arreglo
        const participante = participantes[i];

        // Concatena el nombre y el apellido del estudiante para obtener el nombre completo
        const nombreCompleto = participante.nombre + ' ' + participante.apellidoParticipante;

        // Compara si el 'nombreCompleto' es igual al 'nombreSeleccionado'
        if (nombreCompleto === nombreSeleccionado) {
            // Si hay una coincidencia, asigna el objeto del estudiante a 'estudianteSeleccionado'
            participanteSeleccionado = participante;
            // Sale del bucle 'for' porque ya se encontró una coincidencia
            break;
        }
    }

    // Verifica si se ha encontrado un estudiante seleccionado (si 'estudianteSeleccionado' no es null o undefined)
    if (participanteSeleccionado) {
        // Obtiene el promedio del estudiante seleccionado
        const calificacionParticipante = participanteSeleccionado.calificacion;
        /* Actualiza el contenido del elemento con id 'resultado' concatenando el mensaje sobre el promedio del estudiante seleccionado*/
        resultado.textContent = 'La calificacion de: ' + nombreSeleccionado + '  es de: ' + calificacionParticipante;
    } else {
        // Si no se ha encontrado un estudiante seleccionado, borra el contenido del elemento con id 'resultado'
        resultado.textContent = '';
    }
}

// Función que almacena código para limpiar los campos
function limpiarDatos() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
}