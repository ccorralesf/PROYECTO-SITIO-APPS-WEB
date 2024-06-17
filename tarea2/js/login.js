//Microinteracciones JSON

/*conexion con HTML usando el id btn-login y cargando la funcion llamada login */
document.getElementById("btn-login").addEventListener("click", login);


//Funcion login
function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    //declaracion de los datos usuario y password respectivamente
    let username = "cenfo";
    let password = "123";
    //identificadores de los campos username y password
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    //ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja roja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            //este es el texto que llevar el parametro de la funcion validacion_alert
            text = "Los campos requeridos NO pueden estar vacios.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    //validacion si los campos username y password son iguales
    if (error_count == 0)  {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                /*icon: "success",*/
                title: "Credenciales correctas",
                showConfirmButton: false,
                //milisegundos equivalen a 5seg
                timer: 5000,
                html: '<iframe src="https://lottie.host/embed/5eaaaf5f-8a8b-4543-9939-5d6a12d10fcd/iC4dEYTceF.json"></iframe></iframe><br><br><p>Un momento!<p>',
            }).then(() => {
                //permite ejecutar la URL
                window.location.href = "landing.html", "blank";
            });
        } else {
            text = "Usuario o contrasena incorrecta.";
            //carga la funcion de validacion de alerta
            validation_alert (text);
        }
    }
}


/*Funcion que valida el login */
function validation_alert(ptext) {
    Swal.fire({
        /*icon: "error", */
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#198754",
        /*carga de la microinteraccion1 */
        html:'<iframe src="https://lottie.host/embed/6d902f98-afcb-423b-bb75-f03af2912085/owuNQ4exdY.json"></iframe></iframe><br><p>' + ptext + "</p>",
    });
}