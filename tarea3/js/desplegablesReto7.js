$("#r0").click(function() {
    Swal.fire({
        imageUrl: 'imagenes/reto7Casco-min.jpg',
        title: 'Casco de Seguridad',
        text: 'La utilización del casco es obligatorio para la operación del canopy pues este protege eficazmente la cabeza en caso de golpe y mantiene el cabello aislado para evitar que se enrede con la polea. Es necesario que se encuentre debidamente ajustado al contorno de la cabeza y las hebillas ajustadas.',
    });
});

$("#r1").click(function() {
    Swal.fire({
        imageUrl: 'imagenes/reto7Arnes-min.jpg',
        title: 'Arnes de Seguridad',
        text: 'Equipo de uso personal y obligatorio , por medio de este nuestro cuerpo es sujetada para ser anclado mediante el punto de conexión hacia el sistema de poleas. Este arnés de cintura modelo Aspir viene en dos diferentes tallas, su modelo acolchado permite mayor comodidad.',
    });
});

$("#r2").click(function() {
    Swal.fire({
        imageUrl: 'imagenes/reto7Mosquetones-min.jpg',
        title: 'Mosquetones',
        text: 'Los mosquetones son anillas metálicas que tienen una abertura móvil para poder utilizarlas como punto de sujeción, se clasifican por su forma y su material, los más comunes son de acero inox o aluminio aeronáutico (duraluminio o zicral). Su función fundamental en este caso es la de servir como conector para la línea de vida. Es el modelo OK con seguro automático el empleado para esta función.',
    });
});

$("#r3").click(function() {
    Swal.fire({
        imageUrl: 'imagenes/reto7LineaSeguridad-min.jpg',
        title: 'Linea de Seguridad',
        text: 'La línea de seguridad es un elemento muy importante dentro de la cadena de seguridad pues su función es unir el punto de conexión del arnés al sistema de pola. Para operar con seguridad el canopy se utiliza obligatoriamente dos líneas de vida, la una de tamaño fijo y la otra regulable para posicionar dependiendo el tamaño de la persona que va a deslizarse por el cable. Se une al punto de conexión del arnés por medio de un nudo de alondra y se lo retira unicamente para mantenimiento o verificación de la integridad de sus partes.',
    });
});

$("#r4").click(function() {
    Swal.fire({
        imageUrl: 'imagenes/reto7Guantes-min.jpg',
        title: 'Guantes',
        text: 'Los guantes de seguridad son una parte importante del equipo necesario para hacer Zipline/Canopy, ya que protegen frente a diversos tipos de riesgos, como el frío, el calor, cortes, o golpes',
    });
});

/*
$("#r1").click(function() {
    Swal.fire({
        title: 'Atención usuario',
        textAlign: 'right',
        icon: 'question',
        iconColor: '#eea025',
        position: 'center',
        confirmButtonColor: '#eea025',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,
        customClass: 'recuerde1',
        showClass: {
            popup: 'animated bounceIn',
        },
        hideClass: {
            popup: 'animated bounceOut',
        },
        showCloseButton: true,
        html: '<strong>El término pared que ahora vamos a analizar hay que exponer, en primer lugar, que deriva del latín. Emana concretamente de la palabra “paries”, que puede traducirse como “pared”.</strong> ' +
            '<br><br><br>' +
            '<p class=""> - La pared de Shakira.</p>' +
            '<br>' +
            '<p class=""> - Contra la pared” de Jiggy Drama. </p>' +
            '<br>' +
            '<p class=""> - La pared de José Manuel Soto. </p>'
    });
});



$("#r2").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Información general',
        showClass: {
            popup: 'animated zoomIn',
        },
        hideClass: {
            popup: 'animated zoomOut',
        },
        text: 'El suelo es la parte inferior de ciertas construcciones o cosas. Puede decirse que el término, con origen etimológico en el latín solum, refiere a la superficie de la Tierra (la parte exterior de la corteza terrestre) y donde se plantan las semillas para las actividades agrícolas.',
        footer: '<a href="https://definicion.de/suelo" target="blank">Leer más</a>'
    });
});




$("#r3").click(function() {
    Swal.fire({
        title: 'Atención usuario',
        imageUrl: 'imagenes/reto7-min.jpg',
        position: 'center',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,
        customClass: 'recuerde1',
        showClass: {
            popup: 'animated fadeInDown',
        },
        hideClass: {
            popup: 'animated fadeOutUp',
        },
        showCloseButton: true,
        html: '<strong> ¡Más tarjetas de crédito es sinónimo de más deudas! </strong> ' +
            '<br><br><br>' +
            '<p class="aliizq">- Es por eso que antes de adquirir una tarjeta de crédito en estos momentos, le aconsejamos analizar si realmente la requiere. </p>' +
            '<br>' +
            '<p class="aliizq">- La tarjeta de crédito puede ser un instrumento útil siempre y cuando se tenga claro cómo funciona y desde luego, pueda manejarla. </p>'
    });
});





$("#r4").click(function() {
    Swal.fire({
        title: 'Información',
        text: 'Framework CSS.',
        imageUrl: 'imagenes/logo1.png',
        imageWidth: 500,
        imageHeight: 400,
        imageAlt: 'Logo',
    });
});



$("#r5").click(function() {
    Swal.fire({
        title: 'Atención Amigo!',
        text: 'Esta ventana va a cerrarse en 3 segundos',
        icon: 'info',
        timer: 3000,
        onOpen: function() {
            swal.showLoading()
        }
    }).then(
        function() {},
        function(dismiss) {
            if (dismiss === 'timer') {
                console.log('Desplegable cerrada')
            }
        }
    )
});
*/