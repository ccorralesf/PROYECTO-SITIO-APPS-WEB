// Variables controladoras
var panorama, viewer, container, infospot;

// Obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#container_principal');

// Cargar la foto 360
panorama = new PANOLENS.ImagePanorama('imagenes/img1.jpg');


//El valor 100 es el radio del infospot. El infospot es un marcador interactivo que aparece en la escene y puede mostrar informacion o contenido adicional cuando el usuario interactua con el (por ejemplo, al hacer click o pasar el raton por encima).
//El radio del infospot determina el area de interaccion con el usuario.
//Crea y pega el primer infospot

//ZONA INTERACCION #1

var infospot1 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
//establecen las coordenadas x, y y z posicion tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y = 0 y z = -500
infospot1.position.set(500 ,57 , -23);
//-60 segundos indica que el texto permanecera hasta que el usuario lo cierre manualmente.
infospot1.addHoverText('Hospedajes.' -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(192, 216, 96, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 25px; width: 300px;"> Nuestras opciones de hospedaje son muy comodas y atractivas, le ofrecemos alojamientos en  cabinas simples y dobles, pero tambien disponemos del alojamiento tipo glamping. </div>';
panorama.add(infospot1)


//zona interaccion2

var infospot2 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
//pisicion en xyz sacada con el mapper.js activo
infospot2.position.set(500 ,-213 , 245);
//-60 segundos indica que el texto permanecera hasta que el usuario lo cierre manualmente.
infospot2.addHoverText('Senderos a pie' -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(192, 216, 96, 1); color:#604848; border-radius: 5px; padding: 10px; font-size: 25px; width: 300px;"> En nuestra propiedad existen alrededor de 25 kilometros de senderos debidamente rotulados y en perfectas condiciones para realizar recorridos a pie durante el dia o la noche </div>';
panorama.add(infospot2)



// Zona interacción 3

var infospot3 = new PANOLENS.Infospot(200, PANOLENS.DataImage.Info);
// Posición en coordenadas XYZ obtenidas con mapper.js activo
infospot3.position.set(-430, 50, -1000);
// Agregar texto al hover del Infospot
infospot3.addHoverText('');

// Insertar el reproductor de video de YouTube en el Infospot
var youtubeURL = 'https://www.youtube.com/embed/OO1WVCzviGw?si=uPy_bDzLOFWtoQ1i';
infospot3.element.innerHTML = `
    <div style="width: 360px; height: 240px; border-radius: 5px; padding: 10px; font-size: 25px; color:#604848; background-color: rgba(192, 216, 96, 1)"> Un total de 15 cables, entre las copas de los arboles.Viaje a traves de nuestro Cable de Canopy de 1 km de largo <iframe width="100%" height="100%" src="${youtubeURL}" frameborder="0" allowfullscreen></iframe>
    </div>
`;

// Agregar el Infospot al panorama
panorama.add(infospot3);



// Zona interacción 4

//Crea y agrega el cuarto infospot
var infospot4 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
//crea y agrega el cuarto infospot con un icono personalizado
var infospot4 = new PANOLENS.Infospot(100)
infospot4.position.set(-500 ,33 , -259);
// Evento Hover
infospot4.addHoverText('Cerca de San Jose, la ciudad capital ', -60);
infospot4.element.innerHTML = `<div style="background-color: rgba(192, 216, 96, 1); color:#604848; border-radius: 5px; padding: 10px; font-size: 25px; width: 300px;"> Cerca de San Jose, la ciudad capital. Para ir de compras, o simplemente conocer mas de la cultura costaricense </div>
`;

// Agregar el Infospot al panorama
panorama.add(infospot4);



// Zona interacción 5

//Crea y agrega el cuarto infospot
var infospot5 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
infospot5.position.set(76 ,-66 , -500);
// Evento Hover
infospot5.addHoverText('Visite el pueblo del lugar para tours culturales del cafe y el cacao', -60);
infospot5.element.innerHTML = `<div style="background-color: rgba(192, 216, 96, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 25px; width: 300px;"> Visite el pueblo del lugar para tours culturales del cafe y el cacao. Ademas es el lugar perfecto para adquirir souvenirs o recuerdos de su visita </div>
`;

// Agregar el Infospot al panorama
panorama.add(infospot5);


// Zona interacción 6
//Crea y agrega el cuarto infospot
var infospot6 = new PANOLENS.Infospot(150, PANOLENS.DataImage.Info);
infospot6.position.set(265, 50, 940);
// Evento Hover
infospot6.addHoverText('Muchas especies diferentes de aves, especialmente la oportunidad de observar o escuchar el Resplandeciente Quetzal', -60);
infospot6.element.innerHTML = `<div style="background-color: rgba(192, 216, 96, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 25px; width: 300px;">Diferentes especies de aves, oportunidad de observar o escuchar el Resplandeciente Quetzal, Caminatas naturalistas y observacion de aves <audio controls><source src="audio/audio1.mp3" type="audio/mp3"></audio></div>`;


// Agregar el Infospot al panorama
panorama.add(infospot6);


//ZONA INTERACCION #7

var infospot7 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
//establecen las coordenadas x, y y z posicion tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y = 0 y z = -500
infospot7.position.set(-329 ,-268 , -500);
//-60 segundos indica que el texto permanecera hasta que el usuario lo cierre manualmente.
infospot7.addHoverText('Muchas especies diferentes de ranas y otros mamiferos nocturnos' -60);
infospot7.element.innerHTML = '<div style="background-color: rgba(192, 216, 96, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 25px; width: 300px;">Muchas especies diferentes de ranas y otros mamiferos nocturnos se pueden conocer durante las caminatas naturalistas nocturnas que tenemos a dispocion en el hotel <audio controls><source src="audio/audio2.mp3" type="audio/mp3"></audio></div>';
panorama.add(infospot7)

var infospot8 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
//establecen las coordenadas x, y y z posicion tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y = 0 y z = -500
infospot8.position.set(305 ,-342 , -500);
//-60 segundos indica que el texto permanecera hasta que el usuario lo cierre manualmente.
infospot8.addHoverText('Caminos para cabalgatas y cuadraciclos.' -60);
infospot8.element.innerHTML = '<div style="background-color: rgba(192, 216, 96, 1); color:#604848; border-radius: 5px; padding: 10px; font-size: 25px; width: 300px;"> Contamos con caminos adaptados para cabalgatas y cuadraciclos. Un total de 60 kilometros dentro y fuera de la propiedad del hotel </div>';
panorama.add(infospot8)


// Agregar la panorámica al visor del contenedor
viewer = new PANOLENS.Viewer({ container: container }); // Corrected line
viewer.add(panorama);
