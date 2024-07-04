function menu() {
    let seleccion = document.getElementById('opciones').value;

    //usamos switch de js para eligir las opciones deseadas
    //window.open() es un metodo al que se pasa una url para abrir en una nueva ventana
    //window.location.href = "servicios.html" ejecuta la pagina web directamente;

    switch (seleccion) {
        case 'A':
            Swal.fire({
                icon: "success",
                title: "Caminata Observacion de Aves",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "reto3ObservacionAves.html";
            });
            return;

        case 'B':
            Swal.fire({
                icon: "success",
                title: "Caminata Nocturna",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "reto3CaminataNocturna.html";
            });
            return;

        case 'C':
            Swal.fire({
                icon: "success",
                title: "Cabalgata",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "reto3Cabalgata.html";
            });
            return;

        case 'D':
            Swal.fire({
                icon: "success",
                title: "Cuadraciclos",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "reto3Cuadraciclos.html";
            });
            return;
        case 'E':
            Swal.fire({
                icon: "success",
                title: "Canopy / Zipline",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.location.href = "reto3Canopy.html";
            });
            return;
    }
}