document.addEventListener('DOMContentLoaded', function() {

    var a, n; // Variables to store tipo and cantPersonas values

    // Event listener for tipo dropdown
    var tipoDropdown = document.getElementById("tipo");
    if (tipoDropdown) {
        tipoDropdown.addEventListener('change', function() {
            a = this.value; // Update 'a' with selected tipo
            updateImage(); // Call function to update image based on 'a'
        });
    }

    // Event listener for cantPersonas dropdown
    var cantPersonasDropdown = document.getElementById("cantPersonas");
    if (cantPersonasDropdown) {
        cantPersonasDropdown.addEventListener('change', function() {
            n = this.value; // Update 'n' with selected cantPersonas
        });
    }

    // Function to update image based on 'a' value
    function updateImage() {
        var imagen;
        switch (a) {
            case "Glamping":
                imagen = "imagenes/reto5Glamping.png";
                break;
            case "Single":
                imagen = "imagenes/reto5Single.png";
                break;
            case "Double":
                imagen = "imagenes/reto5Double.png";
                break;
            default:
                imagen = ""; // Default image or empty if none selected
                break;
        }
        document.getElementById("imagen").src = imagen; // Update src attribute of imagen
    }

    // Function to calculate and display SweetAlert
    function calcular() {
        if (!a || a === "Seleccione un tipo de hospedaje:" || !n || n === "Seleccione la cantidad de personas:") {
            swal.fire({
                icon: "info",
                title: "Atencion",
                text: "Seleccionar el tipo de hospedaje y la cantidad de personas"
            });
            return;
        }

        var montoCuota = 0;
        switch (a) {
            case "Glamping":
                montoCuota = (n === "1 persona") ? 13000 : 10000;
                break;
            case "Single":
                montoCuota = (n === "1 persona") ? 15000 : 13000;
                break;
            case "Double":
                montoCuota = (n === "1 persona") ? 25000 : 20000;
                break;
            default:
                break;
        }

        let imagenDireccion = `imagenes/${a.toLowerCase()}.png`;

        console.log(imagenDireccion); // Verifica la URL de la imagen en la consola

        swal.fire({
            imageUrl: imagenDireccion,
            html: "<p> Mira el precio del hospedaje " + a + " " + n +
                "<br><br> <strong>Por persona:</strong><p>" +
                "₡" + montoCuota,
            /*imagewidth: 600,*/
            imageHeight: 250,
            imageAlt: "tipo " + a
        });
    }

   // Assign calcular function to the button onclick event
var calcularButton = document.getElementById("calcularButton");
if (calcularButton) {
    calcularButton.addEventListener('click', calcular);
}

});