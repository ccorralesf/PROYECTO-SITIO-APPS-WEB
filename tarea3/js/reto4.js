//evento que carga la funcion automaticamente...
window.onload = function () {
    document.getElementById("output-img").innerHTML = "<img src='imagenes/reto4/logo.png' class='img-fluid rounded' alt='logo' />";

    //evento que permite cambiar el objeto change
    document.getElementById("alojamiento").onchange = function(e) {
        //destino del valor seleccionado por el usuario
        let n = e.target.value;
        //expresiones que guardan las imagenes de los estadios y la informacion de cada uno...
        let imagen = "<img src='imagenes/reto4/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='alojamiento'/>";
        let text = ["Disponibles 15 Domos Glamping para grupos de 2 o 4 personas",
            "Excelente vista a las estrellas durante noches despejadas",
            "Excelente precio, nuestra opcion de alojamiento mas economica",
            "Perfecta opcion para parejas que busquen mas confort",
            "A un precio muy accesible y perfecta para estadias cortas",
            "Con todo lo necesario para tener una estadia tranquila y acogedora",
            "Perfecta opcion para familias numerosas, de 4 o 6 personas",
            "El hospedaje hecho para estadias largas",
            "Excelentes vistas y cercania con la naturaleza",
        ];
        //salida de las imagenes y los textos informativos...
        document.getElementById("output-img").innerHTML = imagen;
        document.getElementById("output-txt").innerHTML = text[n - 1];
    };

};

//funcion del boton Reiniciar
document.getElementById("btn-clean").onclick = function() {
    document.getElementById("output-img").innerHTML = "<img src='imagenes/reto4/logo.png' class='img-fluid rounded' alt='logo' />";
    //limpia los textos informativos de los estadios...
    document.getElementById("output-txt").innerHTML = "";
    //dejar el select con el texto por defecto...
    document.getElementById("alojamiento").value = "";
};