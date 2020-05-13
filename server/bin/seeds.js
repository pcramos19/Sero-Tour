// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js
require('dotenv').config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Tour = require("../models/Tour");
const TourComment = require("../models/TourComment");
const UserComment = require("../models/UserComment");


const bcryptSalt = 10;

mongoose
  .connect(`${process.env.DB_URL}`, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    username: "pedro",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    img: "./IMG-20171229-WA0003.jpg",
    name: "Pedro Castañeda",
    email: "perico@gmail.com",
    description: "Llevo más de 10 años viviendo en Marid, apasionado de su trabajo y de viajar. Me encanta conocer gente y transmitir mi pasión por viajar.",
    fav: [],
    historic: [],
    toursCreated: [],
    comments: []
  },
  {
    username: "sara",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    img: "https://randomuser.me/api/portraits/women/95.jpg",
    name: "Sara Venegas",
    email: "sarita@gmail.com",
    description: "Soy una artista, he recorrido muchisimos sitios por el mundo y me encanta transmitir mi pasión por el arte.",
    fav: [],
    historic: [],
    toursCreated: [],
    comments: []
  },
  {
    username: "alex",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    img: "https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg",
    name: "Alejandro Sanchez",
    email: "alex@gmail.com",
    description: "Llevo más de 5 años realizando experiencias increibles en Madrid , Paris y Londres. Me encanta transmitir mi pasión por descubrir ciudades!",
    fav: [],
    historic: [],
    toursCreated: [],
    comments: []
  },
  {
    username: "cesar",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    img: "https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg",
    name: "Cesar Val",
    email: "cesar@gmail.com",
    description: "Soy argentino que llevo desde hace un año en Madrid y me apasiona Madrid y descubrir cualquier rincon de esta ciudad y compartirlo con más gente.",
    fav: [],
    historic: [],
    toursCreated: [],
    comments: []
  },
  {
    username: "jota",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    img: "https://pbs.twimg.com/profile_images/1000050491970260993/FJkauyEa.jpg",
    name: "Juan Carlos Mateo",
    email: "jota@gmail.com",
    description: "Soy un apasionado del fútbol americano y todo lo relacionado con el mundo yankee. Me encanta viajar y descubrir nuevos mundos para trasmitirlo a mis seguidores",
    fav: [],
    historic: [],
    toursCreated: [],
    comments: []
  },
  {
    username: "jose",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    img: "https://tinyfac.es/data/avatars/AEF44435-B547-4B84-A2AE-887DFAEE6DDF-200w.jpeg",
    name: "Jose Henche",
    email: "josefin@gmail.com",
    description: "Aquí combino mis diversos conocimientos con una ubicación única para ofrecer una experiencia igualmente única y transformadora que no dejará a nadie indiferente.",
    fav: [],
    historic: [],
    toursCreated: [],
    comments: []
  },
  {
    username: "pablo",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BOWViYjUzOWMtMzRkZi00MjNkLTk4M2ItMTVkMDg5MzE2ZDYyXkEyXkFqcGdeQXVyODQwNjM3NDA@._V1_UY256_CR36,0,172,256_AL_.jpg",
    name: "Pablo Carceller",
    email: "pablitoclavo@gmail.com",
    description: "Me encantan los trabalenguas desde siempre, mi preferido es Pablito clavó un clavito, ¿qué clavito clavó Pablito?, el clavito que Pablito clavó, era el clavito de Pablito",
    fav: [],
    historic: [],
    toursCreated: [],
    comments: []
  },
  {
    username: "cris",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    img: "https://randomuser.me/api/portraits/women/36.jpg",
    name: "Cristina Suarez",
    email: "cris@gmail.com",
    description: "Hola, soy un joven fotógrafo profesional con años de experiencia al que le apasiona su trabajo. Me encargaré de que tengas hermosos recuerdos de tu estancia en esta gran ciudad. Haré que sea una experiencia inolvidable.",
    fav: [],
    historic: [],
    toursCreated: [],
    comments: []
  },
  {
    username: "maria",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDc2M2NkMTctNmQ0MS00MjQxLWFkMGItNGY1Y2Y3NzYzZjg1XkEyXkFqcGdeQXVyNjAzMTgxNjY@._V1_UY256_CR74,0,172,256_AL_.jpg",
    name: "Maria Simo",
    email: "msimo@gmail.com",
    description: "Nacida en Madrid y tras vivir en Europa y USA durante varios años, decidí regresar a esta ciudad tan maravillosa para compartir momentos únicos con los viajeros.",
    fav: [],
    historic: [],
    toursCreated: [],
    comments: []
  },
  {
    username: "luciano",
    password: bcrypt.hashSync("123", bcrypt.genSaltSync(bcryptSalt)),
    img: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Luciano Ramos",
    email: "lucit@gmail.com",
    description: "Con un diploma como guía turístico de la reconocida Escuela de Turismo Grand Sud de Toulouse, estudié para comprender y compartir con todos la historia de las Artes, desde sus inicios hasta nuestros días.",
    fav: [],
    historic: [],
    toursCreated: [],
    comments: []
  }
]

let tours = [
  {
    img: "https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/MataderoMadrid_1409744527.422.jpg?itok=KUpHM0tk",
    audio: "",
    title: "Tour Matadero Madrid",
    rates: 9,
    description: "Matadero Madrid se define en su plan maestro como un gran laboratorio de creación interdisciplinaria de vanguardia vinculado a la ciudad. Es un espacio general para compartir ideas sobre la cultura y los valores de la sociedad contemporánea. Abierto a todos los campos de la creación, su misión es fomentar la interacción y el diálogo entre los creadores y con el público. Fue fundada en 2006 por el Ayuntamiento de Madrid para promover la investigación, la producción, la formación, la difusión de la creación y el pensamiento contemporáneo en todas sus formas. Sus áreas de actividad incluyen artes visuales y escénicas, literatura y lectura, filosofía, música y arte sonoro, cine, diseño, moda, arquitectura, planificación urbana y paisajismo, todo con el fin de fomentar un enfoque integral y multidisciplinario de la creación. Abierto al público desde 2007, su evolución ha estado y sigue estando marcada por la participación de los principales agentes e instituciones de la ciudad que trabajan en las diversas áreas de la creación cultural. Este compromiso toma la forma de una asociación público-privada que promueve la participación pública en el proyecto y garantiza su pluralidad, independencia y viabilidad.",
    languages: ["Espanol"],
    duration: 90,
    location: {
        lat: 40.3912893, 
        lng: -3.7021164 
    },
    comments: [],
    route: [
      {
        number: 1,
        image: "https://www.madridiario.es/fotos/1/140139_9f5345954f5b581522b953330ca2dad5.jpeg",
        audio: "",
        name: "Naves del Español",
        description:"Con la apertura de las Naves del Español se inauguró una nueva era en la producción y exhibición de las artes escénicas en Madrid. Las Naves se presentaron como un espacio abierto a la reflexión y experimentación a todas las propuestas más vanguardistas atendiendo a sus espacios configurables. Un espacio teatral conformado por las naves: 10, 11 y 12, unidas entre sí. En la Nave 12 se encuentra el Café teatro donde se puede disfrutar de la programación de espectáculos musicales de pequeño formato y además sirve de foyer o vestíbulo de entrada a la Nave 11 donde se ubica la Sala Fernando Arrabal. Una sala polivalente con más de 600 localidades entorno a la cual se disponen camerinos, salas de trabajo técnico y almacenes. La Nave 10 se inauguró en septiembre de 2010, en ella se alberga, un gran espacio expositivo, dos espléndidas salas de ensayos y la Sala Max Aub, un espacio escénico plurivalente con capacidad para más de 300 butacas.",
        location: {
          lat: 40.3921668, 
          lng: -3.6976931 
        }
      },
      {
        number: 2,
        image: "https://2.bp.blogspot.com/-wkmrxwhtoeA/UKPRGWIcLkI/AAAAAAAACOI/MFpjbcJZvuI/s1600/2012-11-13+13.47.33.jpg",
        audio: "",
        name: "Casa del Lector",
        description:"Casa del Lector es un lugar desde el que experimentar con la lectura, sus nuevas manifestaciones, su promoción, o la formación de sus intermediarios. Un espacio en el que compaginar el público general y el mundo profesional; el adulto, el joven y el niño; la palabra, la imagen y el arte. No hay manifestación cultural que, para su conocimiento y disfrute, no requiera de un ejercicio pleno de lectura. Exposiciones, conferencias, cursos formativos, talleres de creación y fomento de la lectura, y artes escénicas, junto a investigaciones aplicadas, contribuyen, entre otras muchas propuestas, a la consecución de un lector que comprende, asimila, comparte e interpreta el mundo, la sociedad y su tiempo, porque lee.",
        location: {
          lat: 40.3926635, 
          lng: -3.7006314
        }
      },
      {
        number: 3,
        image: "https://www.plataformadeartecontemporaneo.com/pac/wp-content/uploads/2014/02/Factor%C3%ADa-Cultural-1.jpg",
        audio: "",
        name: "Central de Diseño",
        description:"Matadero cuenta con un espacio de referencia para la difusión y promoción del diseño, concebido como una disciplina equidistante entre la economía y la cultura: diseño gráfico, diseño de producto y diseño de espacios, entendidos desde la perspectiva de una cultura transversal capaz de introducir valores creativos en la actividad económica. Proyectada como una pieza integral, la Central de Diseño incluye desde aspectos más experimentados hasta actividades formativas, divulgativas y de creatividad cotidiana, convirtiéndose en un potente generador de servicios internos y externos en el conjunto de Matadero Madrid. El espacio de la Central de Diseño, ubicado en la nave 17 desde noviembre de 2007, ha sido rehabilitado por el arquitecto José Antonio García Roldán.",
        location: {
          lat: 40.3923033, 
          lng: -3.6996187
        }
      },
      {
        number: 4,
        image: "https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/cinetecamadrid2_1403033068.884.jpg?itok=YbWmzIur",
        audio: "",
        name: "Cineteca Madrid",
        description:"Nacida como una sala especializada en el cine de no ficción, Cineteca Madrid es actualmente un espacio moderno y vivo que acoge una programación atenta a las nuevas formas audiovisuales, prestando especial atención al cine independiente, alternativo, y de no ficción, y con un fuerte acento en el apoyo al pensamiento, la creación y la formación crítica y audiovisual a través de un programa estable de talleres, seminarios, y festivales, tanto de producción propia como los nacidos en el tejido cultural madrileño. Cineteca cuenta con tres salas de proyección, Azcona (224 butacas), Plató (129 butacas) y Borau (65 butacas), así como varios espacios polivalentes - Archivo, Vestíbulo, Cantina, Patio, fruto de cinco años de trabajos de rehabilitación y remodelación, según el proyecto desarrollado por los arquitectos José María Churtichaga y Cayetana de la Quadra-Salcedo, que transformaron las antiguas neveras y la caldera del matadero municipal en Cineteca Madrid, inaugurada el 21 de septiembre de 2011.",
        location: {
          lat: 40.3915302, 
          lng: -3.6985782
        }
      },
      {
        number: 5,
        image: "https://www.mataderomadrid.org/sites/default/files/media/image/2018/03/espana-disena.jpg",
        audio: "",
        name: "Extensión AVAM",
        description:"Un espacio que se construye como nodo conector entre los artistas visuales y la sociedad en general, para la mejor comprensión y participación de la actividad creativa. Un medio para la participación, la generación de tejido y conocimiento como motor de riqueza social, cultural y económica. Extensión AVAM es un espacio gestionado por Artistas Visuales Asociados de Madrid que ofrece a los artistas la posibilidad de presentar sus proyectos en un entorno abierto a la creación de nuevas redes, convirtiéndose en una plataforma de visibilidad e intercambio para el creador. La ventana de AVAM es una caja de luz a modo de escaparate para el trabajo de los socios, que permite intervenciones de pequeño formato. Estas intervenciones deben ajustarse a las siguientes medidas: Alto 95 cm x Ancho 80 cm x Fondo 16 cm. El tipo de intervención podrá ser fotografía, escultura, instalación, collage, etc. Cada proyecto se expondrá durante un mes, en el horario habitual de apertura del centro. La ventana de AVAM está situada en el acceso de entrada a Extensión AVAM.",
        location: {
          lat: 40.3923143, 
          lng: -3.6996187
        }
      },
      {
        number: 6,
        image: "https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/04_matadero_navesgeneral_0.jpg?itok=sUNLSZ_h",
        audio: "",
        name: "Naves Matadero",
        description:"Naves Matadero - Centro Internacional de Artes Vivas tiene como objetivo generar un espacio de creación y pensamiento contemporáneos -prestando especial atención a los nuevos lenguajes escénicos y a los territorios de transversalidad- para que funcione como un catalizador entre creadores y ciudadanos. Un espacio en el que las artes escénicas, visuales, la literatura, la filosofía, el cine, la música y las actividades transmedia se interconectan en un programa interdisciplinar. La investigación es una herramienta fundamental de trabajo, convirtiéndose en uno de los ejes vertebrales del proyecto, estando presente tanto en las producciones propias como en los proyectos compartidos con las demás estructuras que conforman Matadero Madrid y otros espacios e instituciones. Propicia proyectos innovadores que permiten transformar nuestra relación con el hecho artístico, repensar el proceso, las estrategias y el impacto creativo. Trabaja en red con agentes e instituciones nacionales e internacionales, vinculando artistas, colectivos, comisarios, agentes culturales independientes, etc. La curiosidad por el teatro, danza, nuevo circo, música, artes visuales, performance y las formas híbridas no identificadas, permite definir Naves Matadero - Centro Internacional de Artes Vivas como un espacio en expansión que desde su entorno más cercano llega a la ciudad y se convierte en un centro excepcional capacitado para abordar proyectos de ámbito nacional e internacional.",
        location: {
          lat: 40.3921739, 
          lng: -3.6995827
        }
      }
    ]
  },
  {
    img: "https://dam.ngenespanol.com/wp-content/uploads/2019/11/Museo-del-Prado.jpg",
    audio: "",
    title: "Madrid Cultural",
    rates: 7,
    description: "No hay mejor manera de descubrir una de las ciudades grandes y más interesantes del mundo que a través de nuestro Free Tour Cultural. Tenemos a nuestra disposición 3 horas para explorar y descubrir los secretos de esta gran ciudad. ¡Tantos secretos y tantas historias! ¿Qué se esconde detrás de todas sus calles y obras maestras? Ven con nosotros al Tour Cultural para sorprenderte y emocionarte. ¡Te encantará!",
    languages: ["Ingles"],
    duration: 180,
    location: {
      lat: 40.4137818, 
      lng: -3.6921271
    },
    comments: [],
    route: [
      {
        number: 1,
        image: "https://madridsecreto.co/wp-content/uploads/2018/10/plaza-colon-estatua.jpg",
        audio: "",
        name: "Plaza de Colón",
        description:"Nuestro recorrido comienza en la Plaza de Colón, un enclave de gran interés turístico dado a las diversas atracciones que la rodean. Además es un buen punto de partida para recorrer el barrio de Salamanca, ya que en la Plaza de Colón comienza las calles Goya y Serrano, entre las más conocidas por sus aceras repletas de escaparates de tiendas de las mejores firmas de moda como Pedro del Hierro, Carolina Herrera, Diesel, Prada o Yves Saint Laurent. La Plaza de Colón en sí misma se reconoce por la disposición en su centro del monumento al descubridor de América, Cristóbal Colón, en estilo neogótico que consta de una base cuadrada y un pilar que soporta una estatua de tres metros de altura esculpida en mármol, alcanzando el monumento una altura total de diecisiete metros. Si nos orientamos con dirección al Paseo de Recoletos, desde el Monumento a Colón podemos visualizar de derecha a izquierda los siguientes puntos de interés: las Torres de Colón, en la acera de enfrente el Museo de Cera, al otro lado de la vía los Jardines del Descubrimiento y en su sótano el Teatro Fernán Gómez. Las Torres de Colón son dos rascacielos gemelos que con sus 116 metros de altura y 23 plantas se consagran como los novenos edificios más altos de Madrid. Son fácilmente reconocibles por su fachada acristalada de color salmón y su cúpula verdosa. En los bajos del edificio de enfrente a las Torres de Colón encontramos el Museo de Cera, un museo muy entretenido en el que es posible contemplar las esculturas de cera de diferentes personajes de varias temáticas, desde reyes y presidentes del gobierno hasta afamados deportistas, literatos, actores o protagonistas de películas de terror o películas infantiles. Los Jardines del Descubrimiento sirven en su mayor parte de superficie de techo al Teatro Fernán Gómez. Lo más destacado de estos jardines son el Monumento al Descubrimiento de América, fabricado en hormigón en diferentes bloques dedicado cada uno de ellos a un aspecto del Descubrimiento, y que presiden el lado oriental de los jardines en su confluencia con la calle Serrano, y la bandera de España más alta del mundo con un mástil de cincuenta metros de altura. ",
        location: {
          lat: 40.4251223, 
          lng: -3.6924296
        }
      },
      {
        number: 2,
        image: "https://miviaje.com/wp-content/uploads/2018/12/plaza-cibeles-en-madrid.jpg",
        audio: "",
        name: "Plaza de Cibeles",
        description:"La Plaza de Cibeles es un enclave turístico que no debe faltar en ninguna visita de Madrid, ya que en ella confluyen varios de los edificios más emblemáticos y de mayor belleza arquitectónica de la capital. La fuente de Cibeles queda situada en el centro y da nombre a la plaza, aunque antiguamente esta recibió otras denominaciones. La fuente es diseño del arquitecto Ventura Rodríguez y se construyó en época de Carlos III. En ella podemos advertir a una diosa griega Cibeles cabalgando en un carro tirado por leones. En la parte posterior del carro, más recientemente se añadieron dos nuevas esculturas en forma de amorcillos y se realizaron mejoras en los juegos de agua. Según hemos desembocado en la plaza por el Paseo de Recoletos, podemos contemplar los siguientes edificios siguiendo la mirada de derecha a izquierda: primeramente encontramos el Palacio de Buenavista o Cuartel General del Ejército y en frente de él la sede central del Banco de España, cruzando el Paseo del Prado le sigue el Palacio de Telecomunicaciones y al otro lado de la acera el Palacio de Linares o Casa de América. El edificio del Banco de España es de estilo ecléctico y ha sufrido varias remodelaciones desde que Alfonso XII colocara su primera piedra. Lo identificaremos bien por la bola dorada que sobresale de su tejado. El Palacio de Buenavista fue en su origen residencia de la familia de los duques de Alba, pero tras varias expropiaciones cayó en manos de la Casa Real, quien finalmente lo cedió al ejército. Al otro de la plaza, se levanta de forma vigorosa el Palacio de Telecomunicaciones, en la actualidad sede de la Alcaldía de Madrid. El edificio, cuya torre principal mide más de sesenta metros de altura, es obra del arquitecto Antonio Palacios y durante muchos años fue sede de la Sociedad de Correos y Telégrafos de España. En su blanca fachada de piedra de Novelda se pueden apreciar un sinfín de detalles ornamentales dignos de admirar con atención. El último edificio que cierra la plaza de Cibeles es el Palacio de Linares, actual Casa de América, institución que se encarga de fomentar las relaciones entre España y los países latinoamericanos. La Plaza de Cibeles es conocida también por ser el lugar de celebración de las victorias del equipo de fútbol Real Madrid.",
        location: {
          lat: 40.4193967, 
          lng: -3.6952124 
        }
      },
      {
        number: 3,
        image: "https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/cba_1412705304.206.jpg?itok=cOBOusuj",
        audio: "",
        name: "Círculo de Bellas Artes",
        description:"El edifico sede del Círculo de Bellas Artes, situado en la calle de Alcalá esquina con la calle del Marqués de Casa Riera, es otra de las magníficas obras del arquitecto Antonio Palacios, y fue declarado Monumento Histórico Artístico Nacional en los años 80 del siglo XX. Actualmente, el Círculo de Bellas Artes es un centro cultural multidisciplinar de carácter privado y sin ánimo de lucro, y es considerado como un “Centro de Protección de las Bellas Artes y de Utilidad Pública”. La misión fundamental de este centro es llevar a cabo actividades culturales tales como exposiciones, conferencias, seminarios, mesas redondas, talleres, conciertos, etc., que fomenten la divulgación y el desarrollo cultural, no solo en el campo pictórico y literario, sino además de la ciencia, la filosofía o las artes escénicas. Una de las actividades con más larga tradición en la historia del Círculo son los Bailes de Máscaras, para los cuales se celebraban unos concursos de carteles en los que se elegía el que iba a ser la imagen de ese año; artistas como Rafael de Penagos (creador de la ilustración Art Déco en España) fueron habituales participantes de estos concursos. Por su directiva han pasado personajes tan relevantes como el escritor premio Nobel Jacinto Benavente, y sus talleres de pintura contarían con la presencia de Picasso cuando aún era un alumno. Sus salones, que pueden visitarse en su interior, antiguamente eran un punto de reunión de literatos y eruditos, y hoy disponen de una terraza en su exterior que permanece abierta todo el año. Si se dispone de tiempo, no hay que dejar de visitar la azotea del edificio, que conduce a la cafetería-restarante La Pecera, y desde la que es posible disfrutar de una de las vistas más espectaculares de la capital. Justo en la acera de enfrente, también podemos observar la sede del Instituto Cervantes, otro centro cultural dedicado en esta ocasión a la difusión de nuestro idioma por todo el mundo. El edificio, conocido como Edificio de las Cariátides, bien merece nuestra atención por su gusto arquitectónico.",
        location: {
          lat: 40.4183042, 
          lng: -3.698722
        }
      },
      {
        number: 4,
        image: "https://www.agroclm.com/wp-content/uploads/2017/09/congreso-diputados.jpg",
        audio: "",
        name: "Congreso de los Diputados",
        description:"Entre la Carrera de San Jerónimo y la Plaza de las Cortes se ubica el Palacio de las Cortes, que es el edificio que alberga el Congreso de los Diputados. El Palacio de estilo neoclásico fue diseñado y construido por el arquitecto Narciso Pascual Colomer y lo inauguró la reina Isabel II. Lo que más destaca de su fachada es la entrada monumental que consiste en un pórtico de seis columnas de estilo corintio que soportan un frontón triangular, en el que es posible observar un bajorrelieve que representa España con la Constitución, junto con otras imágenes que idealizan la Fortaleza, la Justicia, el Valor, las Ciencias, la Armonía, las Bellas Artes, la Agricultura, el Comercio, los Ríos, la Abundancia y la Paz. El pórtico se alcanza gracias a una escalera flanqueada por dos leones que apoyan una de sus patas sobre los cañones capturados al enemigo en la Guerra de África de mediados del siglo XIX. No obstante, esta entrada solo se utiliza cuando el Rey realiza la solemne apertura de sesiones del Congreso, quedando la entrada lateral por la calle Floriblanca como acceso habitual de los diputados al edificio. El Congreso de los Diputados es el órgano constitucional que representa al pueblo español y en la actualidad lo integran 350 diputados. Las sesiones de control al gobierno tienen lugar todos los miércoles del mes y en ellas cada uno de los grupos parlamentarios interceptan sus preguntas y aclaraciones al partido gobernante para que explique el contenido de sus actuaciones a la ciudadanía. El Congreso de los Diputados ofrece visitas individuales y en grupo todos los sábados por la mañana, excepto en el mes de agosto y los sábados festivos. En esta visita aún es posible visualizar, entre otras cosas, los agujeros de bala que causó el intento de golpe de estado orquestado por el general Tejero en 1981 y que casi pone fin a la Democracia recientemente inaugurada en el país tras la muerte del dictador Francisco Franco. La Carrera de San Jerónima termina en la Plaza de las Cortes, y en ella podemos observar una estatua del escritor español Miguel de Cervantes, así como la entrada principal al Hotel Palace, del que hablaremos en nuestra siguiente parada.",
        location: {
          lat: 40.4163972, 
          lng: -3.6987904
        }
      },
      {
        number: 5,
        image: "https://dam.ngenespanol.com/wp-content/uploads/2019/11/Museo-del-Prado.jpg",
        audio: "",
        name: "Museo Nacional del Prado",
        description:"Encontrándonos en el Paseo del Prado no es difícil adivinar que nuestra próxima parada vaya a ser el Museo del Prado. Emplazado en el Edificio Villanueva, el Museo Nacional del Prado podría considerarse el museo más importante del mundo en relación a su volumen de obras europeas, ya que es excepcionalmente rico en pinturas de artistas europeos de los siglos del XVI-XIX, entre los que destacan Goya, Velázquez, El Greco, Rubens, El Bosco, Murillo, Ribera, Zurbarán, Rafael, Veronese, Tintoretto o Van Dyck. El Museo del Prado es también uno de los museos más visitados con más de mil obras expuestas en las diferentes salas en que se estructuran sus instalaciones. La colección en propiedad de este museo se compone de las obras de las Colección Real y de las procedentes de los ya no existentes Museo de la Trinidad y Museo de Arte Moderno. La Colección Real refleja en sumo grado el gusto personal de los diferentes reyes españoles durante las sucesivas dinastías gobernantes. Este hecho hace que, a diferencia de otros museos como el Louvre de París, el Museo del Prado no sea un museo enciclopédico que disponga de obras de prácticamente todas las épocas y estilos, limitaciones que han ido subsanándose con las posteriores adquisiciones de obras de arte. Entre los cuadros más famosos de esta Colección Real se encuentra Las Meninas de Velázquez. El Museo de la Trinidad aportó a la colección del Museo del Prado tan solo unas 200 obras, completando la colección de pinturas de carácter religioso con obras como las series de la Vida de San Pedro Mártir y de Santo Domingo de Guzmán, de Pedro Berruguete. El Museo de Arte Moderno fue absorbido por el Museo del Prado, cuyas obras del siglo XIX pasaron a su haber, y por el Museo Reina Sofía, el cual conservó las pinturas más actuales del siglo XX. Gracias a ello, es posible observar varias obras impresionistas del español Joaquín Sorolla en el Museo del Prado. Entre las nuevas adquisiciones y legados se encuentran artistas como Picasso, Matisse, Manet o Renoir. Además de la exhibición de pinturas, este museo también acoge dentro de su colección esculturas de gran calado, dibujos, grabados, artes decorativas, medallas y monedas. Al margen de la visita interior del museo es muy recomendable visitar los exteriores del edificio, donde podrás contemplar los detalles de su arquitectura así como una escultura de Velázquez.",
        location: {
          lat: 40.4137818, 
          lng: -3.6921271
        }
      },
      {
        number: 6,
        image: "https://www.fundacioncarolina.es/wp-content/uploads/2018/04/Jard%C3%ADn-Bot%C3%A1nico-Google-623x321.jpg",
        audio: "",
        name: "El Real Jardín Botánico",
        description:"",
        location: {
          lat: 40.4111064, 
          lng: -3.6933154
        }
      },
    ]
  },
  {
    img: "https://cdn.nattivus.com/img/actividades/1_Visitas_a_Pie/7_Madrid_de_los_Austrias/visita-austrias-A.jpg",
    audio: "",
    title: "Tour Madrid Austrias",
    rates: 8,
    description: "Por Madrid de los Austrias se entiende aquella parte de la ciudad que tuvo una especial relevancia, y que floreció gracias a la presencia de la corte, durante los casi dos siglos que duró la dinastía de los Habsburgo en España, desde que en 1516 Carlos I fue reconocido como rey hasta la muerte de Carlos II en 1700. En términos turísticos, el Madrid de los Austrias es una zona que abarca algunos puntos claves del centro histórico de la ciudad. La Plaza Mayor, la Plaza de Oriente y la Plaza de la Villa son sus núcleos centrales. Es cierto que Madrid en los siglos XVI y XVII abarcaba mucho más. Por el norte, hasta la plaza de Santa Bárbara, y por el este hasta el Paseo del Prado (el Parque del Retiro era el límite por este lado). Pero quedaban un poco a las afueras y conocieron épocas de esplendor en tiempos posteriores. Por donde ahora está la Gran Vía, por ejemplo, discurría una calle estrecha llamada San Miguel, de escasa importancia, y no fue hasta principios de siglo XX que se convirtió en la gran avenida que es hoy.",
    languages: ["Espanol"],
    duration: 120,
    location: {
      lat: 40.4169019, 
      lng: -3.7056721 
    },
    comments: [],
    route: [
      {
        number: 1,
        image: "https://www.viajarmadrid.com/wp-content/uploads/plaza-puerta-sol.jpg",
        audio: "",
        name: "Puerta del Sol",
        description:"La  puerta del es una plaza de Madrid que en sus origenes fue uno delos accesos de la muralla que rodeaba madrid en el siglo XV. Su nombre proviene por estar orientada hacia Levante, por  donde sale el sol.vEn ella se encuentra des de 1550 el denominado KM 0 de las carreteras radiales del pais. El edificio mas antiguo de la puerta del sol es la Casa de Correos i en ella destaca el reloj de torre que fue construido i donado en el XIX por José Rodrigez de Losada, i cuyas campanadas de las 12:00 del 31 de diciembre marcan la tradicional toma de las 12 uvas a la grab mayoria de los Españoles.",
        location: {
          lat: 40.4169019, 
          lng: -3.7056721
        }
      },
      {
        number: 2,
        image: "https://madridsecreto.co/wp-content/uploads/2019/10/shutterstock_507446725-1.jpg",
        audio: "",
        name: "Plaza Mayor",
        description:"La plaza Mayor está situada en el centro de Madrid, a pocos metros de la plaza de la Puerta del Sol, y junto a la calle Mayor. Sus origenes en el  S 16 cuando Felipe II encargó el proyecto de remodelación de la plaza a Juan de Herrera. La plaza Mayor ha sufrido tres grandes incendios en su historia, el primero de ellos en 1631,  El segundo de los incendios ocurrió en 1670. El último de los incendios, que arrasó un tercio de la plaza, tuvo lugar en 1790, dirigiendo las labores de extinción Sabatini. Se encargó la reconstrucción a Juan de Villanueva,",
        location: {
          lat: 40.415511, 
          lng: -3.7095896
        }
      },
      {
        number: 3,
        image: "https://mywowo.net/media/images/cache/madrid_catedral_de_la_almudena_01_esterno_jpg_640_336_cover_70.jpg",
        audio: "",
        name: "Catedral de la Almudena",
        description:"La Santa Iglesia Catedral Metropolitana de Santa María la Real de la Almudena, conocida simplemente como Catedral de la Almudena, es un templo catedralicio de culto católico, dedicado a la Virgen Maríabajo la advocación de la Almudena. La catedral está ubicada en el centro histórico de Madrid; la fachada principal se encuentra frente al Palacio Real. Es el principal templo de la Archidiócesis de Madrid, sede del arzobispo y del capítulo metropolitano. Se trata de un edificio de 102 metros de longitud y 73 de altura máxima, construido desde finales del siglo XIX a finales del XX, en diferentes estilos arquitectónicos: neoclásico en el exterior, neogótico en el interior y neorrománico en la cripta.",
        location: {
          lat: 40.415651, 
          lng: -3.7167407
        }
      },
      {
        number: 4,
        image: "https://okdiario.com/img/2015/12/PalacioRealOk-e1483429204506-655x368.jpg",
        audio: "",
        name: "Palacio Real",
        description:"El Palacio Real de Madrid es la residencia oficial del rey de España; no obstante, los actuales reyes no habitan en él, sino en el Palacio de la Zarzuela, por lo que es utilizado para ceremonias de Estado y actos solemnes. Es el palacio real más grande de Europa Occidental, y uno de los más grandes del mundo.  Alberga un valioso patrimonio histórico-artístico. El palacio fue construido por orden del rey Felipe V, y destruido casi del todo por un incendio en 1734. El último monarca que vivió en palacio fue Alfonso 13. En 2016, el Palacio Real recibió más de 1,4 millón de visitantes, siendo el séptimo monumento más visitado de España.",
        location: {
          lat: 40.417955, 
          lng: -3.7165007
        }
      }
    ]
  },
  {
    img: "https://www.mipetitmadrid.com/web_mipetitmadrid/docs/edificiografitti.jpg",
    audio: "",
    title: "Madrid City Tour",
    rates: 6,
    description: "Si paseando por el centro de Madrid das con la reconocida plaza de la Puerta del Sol, podrás decir que te situas justo al centro de la ciudad. Y a la vez, es el sitio dónde da inicio a esta guía. Su forma es semicircular y de ella confluyen varias de las calles históricas y más transitadas de la ciudad, por este motivo, se encuentra la placa de “kilómetro 0”. Concentra varios elementos representativos, por ejemplo, el famoso reloj de la Casa de Correos, por ella se inició la construcción de esta plaza. Principalmente, es famosa ya que cada 31 de diciembre marca las doce campanadas del nuevo año. En la plaza, también hallamos la estatua del Oso y el Madroño, la qual fue construida en 1967.",
    languages: ["Espanol"],
    duration: 120,
    location: {
      lat: 40.4067853, 
      lng: -3.7092771
    },
    comments: [],
    route: [
      {
        number: 1,
        image: "https://www.viajarmadrid.com/wp-content/uploads/plaza-puerta-sol.jpg",
        audio: "",
        name: "Puerta del Sol",
        description:"La  puerta del es una plaza de Madrid que en sus origenes fue uno delos accesos de la muralla que rodeaba madrid en el siglo XV. Su nombre proviene por estar orientada hacia Levante, por  donde sale el sol.vEn ella se encuentra des de 1550 el denominado KM 0 de las carreteras radiales del pais. El edificio mas antiguo de la puerta del sol es la Casa de Correos i en ella destaca el reloj de torre que fue construido i donado en el XIX por José Rodrigez de Losada, i cuyas campanadas de las 12:00 del 31 de diciembre marcan la tradicional toma de las 12 uvas a la grab mayoria de los Españoles.",
        location: {
          lat: 40.4169019, 
          lng: -3.7056721
        }
      },
      {
        number: 2,
        image: "https://madridsecreto.co/wp-content/uploads/2019/10/shutterstock_507446725-1.jpg",
        audio: "",
        name: "Plaza Mayor",
        description:"La plaza Mayor está situada en el centro de Madrid, a pocos metros de la plaza de la Puerta del Sol, y junto a la calle Mayor. Sus origenes en el  S 16 cuando Felipe II encargó el proyecto de remodelación de la plaza a Juan de Herrera. La plaza Mayor ha sufrido tres grandes incendios en su historia, el primero de ellos en 1631,  El segundo de los incendios ocurrió en 1670. El último de los incendios, que arrasó un tercio de la plaza, tuvo lugar en 1790, dirigiendo las labores de extinción Sabatini. Se encargó la reconstrucción a Juan de Villanueva,",
        location: {
          lat: 40.415511, 
          lng: -3.7095896
        }
      },
      {
        number: 3,
        image: "https://mywowo.net/media/images/cache/madrid_catedral_de_la_almudena_01_esterno_jpg_640_336_cover_70.jpg",
        audio: "",
        name: "Catedral de la Almudena",
        description:"La Santa Iglesia Catedral Metropolitana de Santa María la Real de la Almudena, conocida simplemente como Catedral de la Almudena, es un templo catedralicio de culto católico, dedicado a la Virgen Maríabajo la advocación de la Almudena. La catedral está ubicada en el centro histórico de Madrid; la fachada principal se encuentra frente al Palacio Real. Es el principal templo de la Archidiócesis de Madrid, sede del arzobispo y del capítulo metropolitano. Se trata de un edificio de 102 metros de longitud y 73 de altura máxima, construido desde finales del siglo XIX a finales del XX, en diferentes estilos arquitectónicos: neoclásico en el exterior, neogótico en el interior y neorrománico en la cripta.",
        location: {
          lat: 40.415651, 
          lng: -3.7167407
        }
      },
      {
        number: 4,
        image: "https://okdiario.com/img/2015/12/PalacioRealOk-e1483429204506-655x368.jpg",
        audio: "",
        name: "Palacio Real",
        description:"El Palacio Real de Madrid es la residencia oficial del rey de España; no obstante, los actuales reyes no habitan en él, sino en el Palacio de la Zarzuela, por lo que es utilizado para ceremonias de Estado y actos solemnes. Es el palacio real más grande de Europa Occidental, y uno de los más grandes del mundo.  Alberga un valioso patrimonio histórico-artístico. El palacio fue construido por orden del rey Felipe V, y destruido casi del todo por un incendio en 1734. El último monarca que vivió en palacio fue Alfonso 13. En 2016, el Palacio Real recibió más de 1,4 millón de visitantes, siendo el séptimo monumento más visitado de España.",
        location: {
          lat: 40.417955, 
          lng: -3.7165007
        }
      }
    ]
  },
  {
    img: "https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/editorial/Madrid_undia_1397223554.735.jpg?itok=FshHM2Gd",
    audio: "",
    title: "Audioguia Madrid",
    rates: 8,
    description: "Si paseando por el centro de Madrid das con la reconocida plaza de la Puerta del Sol, podrás decir que te situas justo al centro de la ciudad. Y a la vez, es el sitio dónde da inicio a esta guía. Su forma es semicircular y de ella confluyen varias de las calles históricas y más transitadas de la ciudad, por este motivo, se encuentra la placa de “kilómetro 0”. Concentra varios elementos representativos, por ejemplo, el famoso reloj de la Casa de Correos, por ella se inició la construcción de esta plaza. Principalmente, es famosa ya que cada 31 de diciembre marca las doce campanadas del nuevo año. En la plaza, también hallamos la estatua del Oso y el Madroño, la qual fue construida en 1967.",
    languages: ["Espanol"],
    duration: 180,
    location: {
          lat: 40.3940798, 
          lng: -3.6989931
    },
    comments: [],
    route: [
      {
        number: 1,
        image: "https://www.viajarmadrid.com/wp-content/uploads/plaza-puerta-sol.jpg",
        audio: "",
        name: "Puerta del Sol",
        description:"La  puerta del es una plaza de Madrid que en sus origenes fue uno delos accesos de la muralla que rodeaba madrid en el siglo XV. Su nombre proviene por estar orientada hacia Levante, por  donde sale el sol.vEn ella se encuentra des de 1550 el denominado KM 0 de las carreteras radiales del pais. El edificio mas antiguo de la puerta del sol es la Casa de Correos i en ella destaca el reloj de torre que fue construido i donado en el XIX por José Rodrigez de Losada, i cuyas campanadas de las 12:00 del 31 de diciembre marcan la tradicional toma de las 12 uvas a la grab mayoria de los Españoles.",
        location: {
          lat: 40.4169019, 
          lng: -3.7056721 
        }
      },
      {
      number: 2,
        image: "https://madridsecreto.co/wp-content/uploads/2019/10/shutterstock_507446725-1.jpg",
        audio: "",
        name: "Plaza Mayor",
        description:"La plaza Mayor está situada en el centro de Madrid, a pocos metros de la plaza de la Puerta del Sol, y junto a la calle Mayor. Sus origenes en el  S 16 cuando Felipe II encargó el proyecto de remodelación de la plaza a Juan de Herrera. La plaza Mayor ha sufrido tres grandes incendios en su historia, el primero de ellos en 1631,  El segundo de los incendios ocurrió en 1670. El último de los incendios, que arrasó un tercio de la plaza, tuvo lugar en 1790, dirigiendo las labores de extinción Sabatini. Se encargó la reconstrucción a Juan de Villanueva,",
        location: {
          lat: 40.415511, 
          lng: -3.7095896
        },
      },
      {
         number: 3,
        image: "https://mywowo.net/media/images/cache/madrid_catedral_de_la_almudena_01_esterno_jpg_640_336_cover_70.jpg",
        audio: "",
        name: "Catedral de la Almudena",
        description:"La Santa Iglesia Catedral Metropolitana de Santa María la Real de la Almudena, conocida simplemente como Catedral de la Almudena, es un templo catedralicio de culto católico, dedicado a la Virgen Maríabajo la advocación de la Almudena. La catedral está ubicada en el centro histórico de Madrid; la fachada principal se encuentra frente al Palacio Real. Es el principal templo de la Archidiócesis de Madrid, sede del arzobispo y del capítulo metropolitano. Se trata de un edificio de 102 metros de longitud y 73 de altura máxima, construido desde finales del siglo XIX a finales del XX, en diferentes estilos arquitectónicos: neoclásico en el exterior, neogótico en el interior y neorrománico en la cripta.",
        location: {
          lat: 40.415651, 
          lng: -3.7167407
        },
      },
      {
         number: 4,
        image: "https://okdiario.com/img/2015/12/PalacioRealOk-e1483429204506-655x368.jpg",
        audio: "",
        name: "Palacio Real",
        description:"El Palacio Real de Madrid es la residencia oficial del rey de España; no obstante, los actuales reyes no habitan en él, sino en el Palacio de la Zarzuela, por lo que es utilizado para ceremonias de Estado y actos solemnes. Es el palacio real más grande de Europa Occidental, y uno de los más grandes del mundo.  Alberga un valioso patrimonio histórico-artístico. El palacio fue construido por orden del rey Felipe V, y destruido casi del todo por un incendio en 1734. El último monarca que vivió en palacio fue Alfonso 13. En 2016, el Palacio Real recibió más de 1,4 millón de visitantes, siendo el séptimo monumento más visitado de España.",
        location: {
          lat: 40.417955, 
          lng: -3.7165007
        },
      }
    ]
  },
  {
    img: "https://pesweb.azureedge.net/spimg/geographicimages/madrid.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=50&w=480&h=480&mode=crop ",
    audio: "",
    title: "Madrid 2019",
    rates: 8,
    description: "Si paseando por el centro de Madrid das con la reconocida plaza de la Puerta del Sol, podrás decir que te situas justo al centro de la ciudad. Y a la vez, es el sitio dónde da inicio a esta guía. Su forma es semicircular y de ella confluyen varias de las calles históricas y más transitadas de la ciudad, por este motivo, se encuentra la placa de “kilómetro 0”. Concentra varios elementos representativos, por ejemplo, el famoso reloj de la Casa de Correos, por ella se inició la construcción de esta plaza. Principalmente, es famosa ya que cada 31 de diciembre marca las doce campanadas del nuevo año. En la plaza, también hallamos la estatua del Oso y el Madroño, la qual fue construida en 1967.",
    languages: ["Espanol"],
    duration: 150,
    location: {
      lat: 40.3931483, 
      lng: -3.7026731 
    },
    comments: [],
    route: [
      {
        number: 1,
        image: "https://www.viajarmadrid.com/wp-content/uploads/plaza-puerta-sol.jpg",
        audio: "",
        name: "Puerta del Sol",
        description:"La  puerta del es una plaza de Madrid que en sus origenes fue uno delos accesos de la muralla que rodeaba madrid en el siglo XV. Su nombre proviene por estar orientada hacia Levante, por  donde sale el sol.vEn ella se encuentra des de 1550 el denominado KM 0 de las carreteras radiales del pais. El edificio mas antiguo de la puerta del sol es la Casa de Correos i en ella destaca el reloj de torre que fue construido i donado en el XIX por José Rodrigez de Losada, i cuyas campanadas de las 12:00 del 31 de diciembre marcan la tradicional toma de las 12 uvas a la grab mayoria de los Españoles.",
        location: {
          lat: 40.4169019, 
          lng: -3.7056721
        },
      },
      {
        number: 2,
        image: "https://madridsecreto.co/wp-content/uploads/2019/10/shutterstock_507446725-1.jpg",
        audio: "",
        name: "Plaza Mayor",
        description:"La plaza Mayor está situada en el centro de Madrid, a pocos metros de la plaza de la Puerta del Sol, y junto a la calle Mayor. Sus origenes en el  S 16 cuando Felipe II encargó el proyecto de remodelación de la plaza a Juan de Herrera. La plaza Mayor ha sufrido tres grandes incendios en su historia, el primero de ellos en 1631,  El segundo de los incendios ocurrió en 1670. El último de los incendios, que arrasó un tercio de la plaza, tuvo lugar en 1790, dirigiendo las labores de extinción Sabatini. Se encargó la reconstrucción a Juan de Villanueva,",
        location: {
          lat: 40.415511, 
          lng: -3.7095896
        },
      },
      {
        number: 3,
        image: "https://mywowo.net/media/images/cache/madrid_catedral_de_la_almudena_01_esterno_jpg_640_336_cover_70.jpg",
        audio: "",
        name: "Catedral de la Almudena",
        description:"La Santa Iglesia Catedral Metropolitana de Santa María la Real de la Almudena, conocida simplemente como Catedral de la Almudena, es un templo catedralicio de culto católico, dedicado a la Virgen Maríabajo la advocación de la Almudena. La catedral está ubicada en el centro histórico de Madrid; la fachada principal se encuentra frente al Palacio Real. Es el principal templo de la Archidiócesis de Madrid, sede del arzobispo y del capítulo metropolitano. Se trata de un edificio de 102 metros de longitud y 73 de altura máxima, construido desde finales del siglo XIX a finales del XX, en diferentes estilos arquitectónicos: neoclásico en el exterior, neogótico en el interior y neorrománico en la cripta.",
        location: {
          lat: 40.415651, 
          lng: -3.7167407
        },
      },
      {
        number: 4,
        image: "https://okdiario.com/img/2015/12/PalacioRealOk-e1483429204506-655x368.jpg",
        audio: "",
        name: "Palacio Real",
        description:"El Palacio Real de Madrid es la residencia oficial del rey de España; no obstante, los actuales reyes no habitan en él, sino en el Palacio de la Zarzuela, por lo que es utilizado para ceremonias de Estado y actos solemnes. Es el palacio real más grande de Europa Occidental, y uno de los más grandes del mundo.  Alberga un valioso patrimonio histórico-artístico. El palacio fue construido por orden del rey Felipe V, y destruido casi del todo por un incendio en 1734. El último monarca que vivió en palacio fue Alfonso 13. En 2016, el Palacio Real recibió más de 1,4 millón de visitantes, siendo el séptimo monumento más visitado de España.",
        location: {
          lat: 40.417955, 
          lng: -3.7165007 
        },
      }
    ]
  },
  {
    img: "https://global-uploads.webflow.com/58fde55b3df4dd7655b16b81/5cafb88c80467d0da966a9ad_Mercado-De-San-Miguel.jpeg",
    audio: "",
    title: "La Eterna Juventud",
    rates: 9,
    description: "Si paseando por el centro de Madrid das con la reconocida plaza de la Puerta del Sol, podrás decir que te situas justo al centro de la ciudad. Y a la vez, es el sitio dónde da inicio a esta guía. Su forma es semicircular y de ella confluyen varias de las calles históricas y más transitadas de la ciudad, por este motivo, se encuentra la placa de “kilómetro 0”. Concentra varios elementos representativos, por ejemplo, el famoso reloj de la Casa de Correos, por ella se inició la construcción de esta plaza. Principalmente, es famosa ya que cada 31 de diciembre marca las doce campanadas del nuevo año. En la plaza, también hallamos la estatua del Oso y el Madroño, la qual fue construida en 1967.",
    languages: ["Espanol"],
    duration: 180,
    location: {
      lat: 40.3891116, 
      lng: -3.7004844
    },
    comments: [],
     route: [
      {
        number: 1,
        image: "https://www.viajarmadrid.com/wp-content/uploads/plaza-puerta-sol.jpg",
        audio: "",
        name: "Puerta del Sol",
        description:"La  puerta del es una plaza de Madrid que en sus origenes fue uno delos accesos de la muralla que rodeaba madrid en el siglo XV. Su nombre proviene por estar orientada hacia Levante, por  donde sale el sol.vEn ella se encuentra des de 1550 el denominado KM 0 de las carreteras radiales del pais. El edificio mas antiguo de la puerta del sol es la Casa de Correos i en ella destaca el reloj de torre que fue construido i donado en el XIX por José Rodrigez de Losada, i cuyas campanadas de las 12:00 del 31 de diciembre marcan la tradicional toma de las 12 uvas a la grab mayoria de los Españoles.",
        location: {
          lat: 40.4169019, 
          lng: -3.7056721
        },
      },
      {
      number: 2,
        image: "https://madridsecreto.co/wp-content/uploads/2019/10/shutterstock_507446725-1.jpg",
        audio: "",
        name: "Plaza Mayor",
        description:"La plaza Mayor está situada en el centro de Madrid, a pocos metros de la plaza de la Puerta del Sol, y junto a la calle Mayor. Sus origenes en el  S 16 cuando Felipe II encargó el proyecto de remodelación de la plaza a Juan de Herrera. La plaza Mayor ha sufrido tres grandes incendios en su historia, el primero de ellos en 1631,  El segundo de los incendios ocurrió en 1670. El último de los incendios, que arrasó un tercio de la plaza, tuvo lugar en 1790, dirigiendo las labores de extinción Sabatini. Se encargó la reconstrucción a Juan de Villanueva,",
        location: {
          lat: 40.415511, 
          lng: -3.7095896
        },
      },
      {
         number: 3,
        image: "https://mywowo.net/media/images/cache/madrid_catedral_de_la_almudena_01_esterno_jpg_640_336_cover_70.jpg",
        audio: "",
        name: "Catedral de la Almudena",
        description:"La Santa Iglesia Catedral Metropolitana de Santa María la Real de la Almudena, conocida simplemente como Catedral de la Almudena, es un templo catedralicio de culto católico, dedicado a la Virgen Maríabajo la advocación de la Almudena. La catedral está ubicada en el centro histórico de Madrid; la fachada principal se encuentra frente al Palacio Real. Es el principal templo de la Archidiócesis de Madrid, sede del arzobispo y del capítulo metropolitano. Se trata de un edificio de 102 metros de longitud y 73 de altura máxima, construido desde finales del siglo XIX a finales del XX, en diferentes estilos arquitectónicos: neoclásico en el exterior, neogótico en el interior y neorrománico en la cripta.",
        location: {
          lat: 40.415651, 
          lng: -3.7167407
        },
      },
      {
         number: 4,
        image: "https://okdiario.com/img/2015/12/PalacioRealOk-e1483429204506-655x368.jpg",
        audio: "",
        name: "Palacio Real",
        description:"El Palacio Real de Madrid es la residencia oficial del rey de España; no obstante, los actuales reyes no habitan en él, sino en el Palacio de la Zarzuela, por lo que es utilizado para ceremonias de Estado y actos solemnes. Es el palacio real más grande de Europa Occidental, y uno de los más grandes del mundo.  Alberga un valioso patrimonio histórico-artístico. El palacio fue construido por orden del rey Felipe V, y destruido casi del todo por un incendio en 1734. El último monarca que vivió en palacio fue Alfonso 13. En 2016, el Palacio Real recibió más de 1,4 millón de visitantes, siendo el séptimo monumento más visitado de España.",
        location: {
          lat: 40.417955, 
          lng: -3.7165007
        },
      }
    ]
  },
  {
    img: "https://img.europapress.es/fotoweb/fotonoticia_20200229104447_770x452_0_0_0_0_bg000.jpg",
    audio: "",
    title: "75 Aniversario de Rosales",
    rates: 8,
    description: "Si paseando por el centro de Madrid das con la reconocida plaza de la Puerta del Sol, podrás decir que te situas justo al centro de la ciudad. Y a la vez, es el sitio dónde da inicio a esta guía. Su forma es semicircular y de ella confluyen varias de las calles históricas y más transitadas de la ciudad, por este motivo, se encuentra la placa de “kilómetro 0”. Concentra varios elementos representativos, por ejemplo, el famoso reloj de la Casa de Correos, por ella se inició la construcción de esta plaza. Principalmente, es famosa ya que cada 31 de diciembre marca las doce campanadas del nuevo año. En la plaza, también hallamos la estatua del Oso y el Madroño, la qual fue construida en 1967.",
    languages: ["Espanol"],
    duration: 180,
    location: {
      lat: 40.3930012, 
      lng: -3.7056772
    },
    comments: [],
    route: [
      {
        number: 1,
        image: "https://www.viajarmadrid.com/wp-content/uploads/plaza-puerta-sol.jpg",
        audio: "",
        name: "Puerta del Sol",
        description:"La  puerta del es una plaza de Madrid que en sus origenes fue uno delos accesos de la muralla que rodeaba madrid en el siglo XV. Su nombre proviene por estar orientada hacia Levante, por  donde sale el sol.vEn ella se encuentra des de 1550 el denominado KM 0 de las carreteras radiales del pais. El edificio mas antiguo de la puerta del sol es la Casa de Correos i en ella destaca el reloj de torre que fue construido i donado en el XIX por José Rodrigez de Losada, i cuyas campanadas de las 12:00 del 31 de diciembre marcan la tradicional toma de las 12 uvas a la grab mayoria de los Españoles.",
        location: {
          lat: 40.4169019, 
          lng: -3.7056721
        },
      },
      {
      number: 2,
        image: "https://madridsecreto.co/wp-content/uploads/2019/10/shutterstock_507446725-1.jpg",
        audio: "",
        name: "Plaza Mayor",
        description:"La plaza Mayor está situada en el centro de Madrid, a pocos metros de la plaza de la Puerta del Sol, y junto a la calle Mayor. Sus origenes en el  S 16 cuando Felipe II encargó el proyecto de remodelación de la plaza a Juan de Herrera. La plaza Mayor ha sufrido tres grandes incendios en su historia, el primero de ellos en 1631,  El segundo de los incendios ocurrió en 1670. El último de los incendios, que arrasó un tercio de la plaza, tuvo lugar en 1790, dirigiendo las labores de extinción Sabatini. Se encargó la reconstrucción a Juan de Villanueva,",
        location: {
          lat: 40.415511, 
          lng: -3.7095896
        },
      },
      {
         number: 3,
        image: "https://mywowo.net/media/images/cache/madrid_catedral_de_la_almudena_01_esterno_jpg_640_336_cover_70.jpg",
        audio: "",
        name: "Catedral de la Almudena",
        description:"La Santa Iglesia Catedral Metropolitana de Santa María la Real de la Almudena, conocida simplemente como Catedral de la Almudena, es un templo catedralicio de culto católico, dedicado a la Virgen Maríabajo la advocación de la Almudena. La catedral está ubicada en el centro histórico de Madrid; la fachada principal se encuentra frente al Palacio Real. Es el principal templo de la Archidiócesis de Madrid, sede del arzobispo y del capítulo metropolitano. Se trata de un edificio de 102 metros de longitud y 73 de altura máxima, construido desde finales del siglo XIX a finales del XX, en diferentes estilos arquitectónicos: neoclásico en el exterior, neogótico en el interior y neorrománico en la cripta.",
        location: {
          lat: 40.415651, 
          lng: -3.7167407
        },
      },
      {
         number: 4,
        image: "https://okdiario.com/img/2015/12/PalacioRealOk-e1483429204506-655x368.jpg",
        audio: "",
        name: "Palacio Real",
        description:"El Palacio Real de Madrid es la residencia oficial del rey de España; no obstante, los actuales reyes no habitan en él, sino en el Palacio de la Zarzuela, por lo que es utilizado para ceremonias de Estado y actos solemnes. Es el palacio real más grande de Europa Occidental, y uno de los más grandes del mundo.  Alberga un valioso patrimonio histórico-artístico. El palacio fue construido por orden del rey Felipe V, y destruido casi del todo por un incendio en 1734. El último monarca que vivió en palacio fue Alfonso 13. En 2016, el Palacio Real recibió más de 1,4 millón de visitantes, siendo el séptimo monumento más visitado de España.",
        location: {
          lat: 40.417955, 
          lng: -3.7165007
        },
      }
    ]
  },
  {
    img: "https://www.hostalbuenosaires-madrid.com/wp-content/blogs.dir/1668/files/headers/xheader-home.jpg.pagespeed.ic.zEkqwaEKWA.jpg",
    audio: "",
    title: "El Madrid más Tradicional",
    rates: 7,
    description: "Si paseando por el centro de Madrid das con la reconocida plaza de la Puerta del Sol, podrás decir que te situas justo al centro de la ciudad. Y a la vez, es el sitio dónde da inicio a esta guía. Su forma es semicircular y de ella confluyen varias de las calles históricas y más transitadas de la ciudad, por este motivo, se encuentra la placa de “kilómetro 0”. Concentra varios elementos representativos, por ejemplo, el famoso reloj de la Casa de Correos, por ella se inició la construcción de esta plaza. Principalmente, es famosa ya que cada 31 de diciembre marca las doce campanadas del nuevo año. En la plaza, también hallamos la estatua del Oso y el Madroño, la qual fue construida en 1967.",
    languages: ["Espanol"],
    duration: 180,
    location: {
      lat: 40.4036394, 
      lng: -3.7041322
    },
    comments: [],
      route: [
      {
        number: 1,
        image: "https://www.viajarmadrid.com/wp-content/uploads/plaza-puerta-sol.jpg",
        audio: "",
        name: "Puerta del Sol",
        description:"La  puerta del es una plaza de Madrid que en sus origenes fue uno delos accesos de la muralla que rodeaba madrid en el siglo XV. Su nombre proviene por estar orientada hacia Levante, por  donde sale el sol.vEn ella se encuentra des de 1550 el denominado KM 0 de las carreteras radiales del pais. El edificio mas antiguo de la puerta del sol es la Casa de Correos i en ella destaca el reloj de torre que fue construido i donado en el XIX por José Rodrigez de Losada, i cuyas campanadas de las 12:00 del 31 de diciembre marcan la tradicional toma de las 12 uvas a la grab mayoria de los Españoles.",
        location: {
          lat: 40.4169019, 
          lng: -3.7056721
        },
      },
      {
      number: 2,
        image: "https://madridsecreto.co/wp-content/uploads/2019/10/shutterstock_507446725-1.jpg",
        audio: "",
        name: "Plaza Mayor",
        description:"La plaza Mayor está situada en el centro de Madrid, a pocos metros de la plaza de la Puerta del Sol, y junto a la calle Mayor. Sus origenes en el  S 16 cuando Felipe II encargó el proyecto de remodelación de la plaza a Juan de Herrera. La plaza Mayor ha sufrido tres grandes incendios en su historia, el primero de ellos en 1631,  El segundo de los incendios ocurrió en 1670. El último de los incendios, que arrasó un tercio de la plaza, tuvo lugar en 1790, dirigiendo las labores de extinción Sabatini. Se encargó la reconstrucción a Juan de Villanueva,",
        location: {
          lat: 40.415511, 
          lng: -3.7095896
        },
      },
      {
         number: 3,
        image: "https://mywowo.net/media/images/cache/madrid_catedral_de_la_almudena_01_esterno_jpg_640_336_cover_70.jpg",
        audio: "",
        name: "Catedral de la Almudena",
        description:"La Santa Iglesia Catedral Metropolitana de Santa María la Real de la Almudena, conocida simplemente como Catedral de la Almudena, es un templo catedralicio de culto católico, dedicado a la Virgen Maríabajo la advocación de la Almudena. La catedral está ubicada en el centro histórico de Madrid; la fachada principal se encuentra frente al Palacio Real. Es el principal templo de la Archidiócesis de Madrid, sede del arzobispo y del capítulo metropolitano. Se trata de un edificio de 102 metros de longitud y 73 de altura máxima, construido desde finales del siglo XIX a finales del XX, en diferentes estilos arquitectónicos: neoclásico en el exterior, neogótico en el interior y neorrománico en la cripta.",
        location: {
          lat: 40.415651, 
          lng: -3.7167407 
        },
      },
      {
         number: 4,
        image: "https://okdiario.com/img/2015/12/PalacioRealOk-e1483429204506-655x368.jpg",
        audio: "",
        name: "Palacio Real",
        description:"El Palacio Real de Madrid es la residencia oficial del rey de España; no obstante, los actuales reyes no habitan en él, sino en el Palacio de la Zarzuela, por lo que es utilizado para ceremonias de Estado y actos solemnes. Es el palacio real más grande de Europa Occidental, y uno de los más grandes del mundo.  Alberga un valioso patrimonio histórico-artístico. El palacio fue construido por orden del rey Felipe V, y destruido casi del todo por un incendio en 1734. El último monarca que vivió en palacio fue Alfonso 13. En 2016, el Palacio Real recibió más de 1,4 millón de visitantes, siendo el séptimo monumento más visitado de España.",
        location: {
          lat: 40.417955, 
          lng: -3.7165007
        },
      }
    ]
  },
  {
    img: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/06/03/15595921036180.jpg",
    audio: "",
    title: "Madrid Moderno",
    rates: 9,
    description: "Si paseando por el centro de Madrid das con la reconocida plaza de la Puerta del Sol, podrás decir que te situas justo al centro de la ciudad. Y a la vez, es el sitio dónde da inicio a esta guía. Su forma es semicircular y de ella confluyen varias de las calles históricas y más transitadas de la ciudad, por este motivo, se encuentra la placa de “kilómetro 0”. Concentra varios elementos representativos, por ejemplo, el famoso reloj de la Casa de Correos, por ella se inició la construcción de esta plaza. Principalmente, es famosa ya que cada 31 de diciembre marca las doce campanadas del nuevo año. En la plaza, también hallamos la estatua del Oso y el Madroño, la qual fue construida en 1967.",
    languages: ["Espanol"],
    duration: 180,
    location: {
      lat: 40.4065315, 
      lng: -3.700463
    },
    comments: [],
    route: [
      {
        number: 1,
        image: "https://www.viajarmadrid.com/wp-content/uploads/plaza-puerta-sol.jpg",
        audio: "",
        name: "Puerta del Sol",
        description:"La  puerta del es una plaza de Madrid que en sus origenes fue uno delos accesos de la muralla que rodeaba madrid en el siglo XV. Su nombre proviene por estar orientada hacia Levante, por  donde sale el sol.vEn ella se encuentra des de 1550 el denominado KM 0 de las carreteras radiales del pais. El edificio mas antiguo de la puerta del sol es la Casa de Correos i en ella destaca el reloj de torre que fue construido i donado en el XIX por José Rodrigez de Losada, i cuyas campanadas de las 12:00 del 31 de diciembre marcan la tradicional toma de las 12 uvas a la grab mayoria de los Españoles.",
        location: {
          lat: 40.4169019, 
          lng: -3.7056721
        },
      },
      {
      number: 2,
        image: "https://madridsecreto.co/wp-content/uploads/2019/10/shutterstock_507446725-1.jpg",
        audio: "",
        name: "Plaza Mayor",
        description:"La plaza Mayor está situada en el centro de Madrid, a pocos metros de la plaza de la Puerta del Sol, y junto a la calle Mayor. Sus origenes en el  S 16 cuando Felipe II encargó el proyecto de remodelación de la plaza a Juan de Herrera. La plaza Mayor ha sufrido tres grandes incendios en su historia, el primero de ellos en 1631,  El segundo de los incendios ocurrió en 1670. El último de los incendios, que arrasó un tercio de la plaza, tuvo lugar en 1790, dirigiendo las labores de extinción Sabatini. Se encargó la reconstrucción a Juan de Villanueva,",
        location: {
          lat: 40.415511, 
          lng: -3.7095896
        },
      },
      {
         number: 3,
        image: "https://mywowo.net/media/images/cache/madrid_catedral_de_la_almudena_01_esterno_jpg_640_336_cover_70.jpg",
        audio: "",
        name: "Catedral de la Almudena",
        description:"La Santa Iglesia Catedral Metropolitana de Santa María la Real de la Almudena, conocida simplemente como Catedral de la Almudena, es un templo catedralicio de culto católico, dedicado a la Virgen Maríabajo la advocación de la Almudena. La catedral está ubicada en el centro histórico de Madrid; la fachada principal se encuentra frente al Palacio Real. Es el principal templo de la Archidiócesis de Madrid, sede del arzobispo y del capítulo metropolitano. Se trata de un edificio de 102 metros de longitud y 73 de altura máxima, construido desde finales del siglo XIX a finales del XX, en diferentes estilos arquitectónicos: neoclásico en el exterior, neogótico en el interior y neorrománico en la cripta.",
        location: {
          lat: 40.415651, 
          lng: -3.7167407
        },
      },
      {
         number: 4,
        image: "https://okdiario.com/img/2015/12/PalacioRealOk-e1483429204506-655x368.jpg",
        audio: "",
        name: "Palacio Real",
        description:"El Palacio Real de Madrid es la residencia oficial del rey de España; no obstante, los actuales reyes no habitan en él, sino en el Palacio de la Zarzuela, por lo que es utilizado para ceremonias de Estado y actos solemnes. Es el palacio real más grande de Europa Occidental, y uno de los más grandes del mundo.  Alberga un valioso patrimonio histórico-artístico. El palacio fue construido por orden del rey Felipe V, y destruido casi del todo por un incendio en 1734. El último monarca que vivió en palacio fue Alfonso 13. En 2016, el Palacio Real recibió más de 1,4 millón de visitantes, siendo el séptimo monumento más visitado de España.",
        location: {
          lat: 40.417955, 
          lng: -3.7165007
        },
      }
    ]
  },
]

let tourComments = [
  {
    title: "Muy buen tour, recomendable",
    description: "Tour fenomenal en un lugar ideal para pasear, ver exposiciones. Tomar algo en la cantina. Para ir con los peques. Los fines de semana por la mañana hay muchísimo ambiente. Totalmente recomendable. Muy bien comunicado para llegar en metro, bus,bicicleta o andando desde Príncipe Pío.",
    rates: 9  
  },
  {
    title: "Perfecto lugar guiados por el tour",
    description: "Lugar muy bonito, he ido muchas veces, pero no me había fijado bien en los edificios. Estupendo el tour para conocerlo mucho mejor.",
    rates: 10
  },
  {
    title: "Tour inmejorable por el lugar",
    description: "Un sitio muy recomendable aunque sólo sea como visita a un conjunto arquitectónico, pero mejor si es guiado por el tour y haciendo alguna de sus ofertas culturales.",
    rates: 9
  },
  {
    title: "Recomendable",
    description: "Sin desperdicio, muy bueno",
    rates: 8
  },
  {
    title: "No entiendo bien las explicaciones",
    description: "No entiendo la explicación. Cierto es que muchos turistas que visitan Madrid hablan inglés, francés, italiano o alemán. También es cierto que otras muchas personas, como yo, no hablamos más que español, por lo tanto no llegamos a comprender las explicaciones. Por este motivo voy a darles un 6.",
    rates: 6
  },
  {
    title: "Bueno",
    description: "Está muy bien",
    rates: 7
  },
  {
    title: "Increible",
    description: "Un gusto poder ver esta exposición, no solo por la belleza sino por la posibilidad de sumergirse en un espacio donde lo material y lo espiritual se encuentran, se mezclan y se transforman en un todo que nos incluye",
    rates: 9
  },
  {
    title: "Nici city tour",
    description: "Nice city tour. Locations and sights are great. Entrance fee roof terrace Circulo de Bellas Artes is 4 euro but absolutely worth it. Botanic garden entry fee is 6 euro.",
    rates: 9
  },
  {
    title: "Muito bonito",
    description: "Muito bonito",
    rates: 8
  },
  {
    title: "Fantastic tour",
    description: "Fantastic tour!! The information is important but easy enough for lay people (such as myself) understand the relevance of the described art pieces and their creators. It does an amazing job in connecting dots and contextualizing the moment in time for the listener. This tour not only made my trip to the museum much more amusing, but it made me feel much more knowledgeable!!",
    rates: 8
  },
  {
    title: "Muy buen tour, recomendable",
    description: "Tour fenomenal en un lugar ideal para pasear, ver exposiciones. Tomar algo en la cantina. Para ir con los peques. Los fines de semana por la mañana hay muchísimo ambiente. Totalmente recomendable. Muy bien comunicado para llegar en metro, bus,bicicleta o andando desde Príncipe Pío.",
    rates: 9  
  },
  {
    title: "Perfecto lugar guiados por el tour",
    description: "El matadero muy bonito, he ido muchas veces, pero no me había fijado bien en los edificios. Estupendo el tour para conocerlo mucho mejor.",
    rates: 10
  },
  {
    title: "Tour inmejorable por el Matadero",
    description: "Un sitio muy recomendable aunque sólo sea como visita a un conjunto arquitectónico, pero mejor si es guiado por el tour y haciendo alguna de sus ofertas culturales.",
    rates: 9
  },
  {
    title: "Recomendable",
    description: "Sin desperdicio, muy bueno",
    rates: 8
  },
  {
    title: "No entiendo bien las explicaciones",
    description: "No entiendo la explicación. Cierto es que muchos turistas que visitan Madrid hablan inglés, francés, italiano o alemán. También es cierto que otras muchas personas, como yo, no hablamos más que español, por lo tanto no llegamos a comprender las explicaciones. Por este motivo voy a darles un 6.",
    rates: 6
  },
  {
    title: "Bueno",
    description: "Está muy bien",
    rates: 7
  },
  {
    title: "Increible",
    description: "Un gusto poder ver esta exposición, no solo por la belleza sino por la posibilidad de sumergirse en un espacio donde lo material y lo espiritual se encuentran, se mezclan y se transforman en un todo que nos incluye",
    rates: 9
  },
  {
    title: "Nici city tour",
    description: "Nice city tour. Locations and sights are great. Entrance fee roof terrace Circulo de Bellas Artes is 4 euro but absolutely worth it. Botanic garden entry fee is 6 euro.",
    rates: 9
  },
  {
    title: "Muito bonito",
    description: "Muito bonito",
    rates: 8
  },
  {
    title: "Fantastic tour",
    description: "Fantastic tour!! The information is important but easy enough for lay people (such as myself) understand the relevance of the described art pieces and their creators. It does an amazing job in connecting dots and contextualizing the moment in time for the listener. This tour not only made my trip to the museum much more amusing, but it made me feel much more knowledgeable!!",
    rates: 8
  },  
  {
    title: "Muy buen tour, recomendable",
    description: "Tour fenomenal en un lugar ideal para pasear, ver exposiciones. Tomar algo en la cantina. Para ir con los peques. Los fines de semana por la mañana hay muchísimo ambiente. Totalmente recomendable. Muy bien comunicado para llegar en metro, bus,bicicleta o andando desde Príncipe Pío.",
    rates: 9  
  },
  {
    title: "Perfecto lugar guiados por el tour",
    description: "El matadero muy bonito, he ido muchas veces, pero no me había fijado bien en los edificios. Estupendo el tour para conocerlo mucho mejor.",
    rates: 10
  },
  {
    title: "Tour inmejorable por el Matadero",
    description: "Un sitio muy recomendable aunque sólo sea como visita a un conjunto arquitectónico, pero mejor si es guiado por el tour y haciendo alguna de sus ofertas culturales.",
    rates: 9
  },
  {
    title: "Recomendable",
    description: "Sin desperdicio, muy bueno",
    rates: 8
  },
  {
    title: "No entiendo bien las explicaciones",
    description: "No entiendo la explicación. Cierto es que muchos turistas que visitan Madrid hablan inglés, francés, italiano o alemán. También es cierto que otras muchas personas, como yo, no hablamos más que español, por lo tanto no llegamos a comprender las explicaciones. Por este motivo voy a darles un 6.",
    rates: 6
  },
  {
    title: "Bueno",
    description: "Está muy bien",
    rates: 7
  },
  {
    title: "Increible",
    description: "Un gusto poder ver esta exposición, no solo por la belleza sino por la posibilidad de sumergirse en un espacio donde lo material y lo espiritual se encuentran, se mezclan y se transforman en un todo que nos incluye",
    rates: 9
  },
  {
    title: "Nici city tour",
    description: "Nice city tour. Locations and sights are great. Entrance fee roof terrace Circulo de Bellas Artes is 4 euro but absolutely worth it. Botanic garden entry fee is 6 euro.",
    rates: 9
  },
  {
    title: "Muito bonito",
    description: "Muito bonito",
    rates: 8
  },
  {
    title: "Fantastic tour",
    description: "Fantastic tour!! The information is important but easy enough for lay people (such as myself) understand the relevance of the described art pieces and their creators. It does an amazing job in connecting dots and contextualizing the moment in time for the listener. This tour not only made my trip to the museum much more amusing, but it made me feel much more knowledgeable!!",
    rates: 8
  }
]

let userComments = [
  {
    title: "Muy buen comunicador",
    description: "Encantadora voz, una explicación muy alegre que te hace ir haciendo el tour de una manera muy divertida, encantador."
  },
  {
    title: "Guía muy bueno",
    description: "Una maravilla de explicación la que hace en su Tour Matadero, si tiene mas tours no dudaré en cogerlo."
  },
  {
    title: "Bueno",
    description: "Bueno en su explicación, llevando bien los tiempos de espera."
  },
  {
    title: "Podría ser mejor",
    description: "No se le entiende demasiado bien en las explicaciones del Tour, además de bastante ruido de ambiente."
  },
  {
    title: "Algo rapido",
    description: "Un guia bueno aunque las explicaciones las hace demasiado deprisa sin pararse a dar tiempo a ver lo que está explicando"
  },
  // {
  //   title: "Muy buen comunicador",
  //   description: "Encantadora voz, una explicación muy alegre que te hace ir haciendo el tour de una manera muy divertida, encantador."
  // },
  // {
  //   title: "Guía muy bueno",
  //   description: "Una maravilla de explicación la que hace en su Tour Matadero, si tiene mas tours no dudaré en cogerlo."
  // },
  // {
  //   title: "Bueno",
  //   description: "Bueno en su explicación, llevando bien los tiempos de espera."
  // },
  // {
  //   title: "Podría ser mejor",
  //   description: "No se le entiende demasiado bien en las explicaciones del Tour, además de bastante ruido de ambiente."
  // },
  // {
  //   title: "Algo rapido",
  //   description: "Un guia bueno aunque las explicaciones las hace demasiado deprisa sin pararse a dar tiempo a ver lo que está explicando"
  // },
  // {
  //   title: "Muy buen comunicador",
  //   description: "Encantadora voz, una explicación muy alegre que te hace ir haciendo el tour de una manera muy divertida, encantador."
  // },
  // {
  //   title: "Guía muy bueno",
  //   description: "Una maravilla de explicación la que hace en su Tour Matadero, si tiene mas tours no dudaré en cogerlo."
  // },
  // {
  //   title: "Bueno",
  //   description: "Bueno en su explicación, llevando bien los tiempos de espera."
  // },
  // {
  //   title: "Podría ser mejor",
  //   description: "No se le entiende demasiado bien en las explicaciones del Tour, además de bastante ruido de ambiente."
  // },
  // {
  //   title: "Algo rapido",
  //   description: "Un guia bueno aunque las explicaciones las hace demasiado deprisa sin pararse a dar tiempo a ver lo que está explicando"
  // },
  // {
  //   title: "Muy buen comunicador",
  //   description: "Encantadora voz, una explicación muy alegre que te hace ir haciendo el tour de una manera muy divertida, encantador."
  // },
  // {
  //   title: "Guía muy bueno",
  //   description: "Una maravilla de explicación la que hace en su Tour Matadero, si tiene mas tours no dudaré en cogerlo."
  // },
  // {
  //   title: "Bueno",
  //   description: "Bueno en su explicación, llevando bien los tiempos de espera."
  // },
  // {
  //   title: "Podría ser mejor",
  //   description: "No se le entiende demasiado bien en las explicaciones del Tour, además de bastante ruido de ambiente."
  // },
  // {
  //   title: "Algo rapido",
  //   description: "Un guia bueno aunque las explicaciones las hace demasiado deprisa sin pararse a dar tiempo a ver lo que está explicando"
  // }
]

let allUsers = []
let allTours = []
let allToursComments = []
let allUsersComments = []

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);



User.deleteMany()
.then(() => {
  return User.create(users)
})
.then((usersCreated) => {
  usersCreated.forEach((user) => {
  allUsers.push(user._id)
  })
})


Tour.deleteMany()
.then(() => {
  return Tour.create(tours)
})
.then(toursCreated => {
  toursCreated.forEach((tour, idx) => {
    allTours.push(tour._id)
    Tour.findByIdAndUpdate(tour._id, { owner: allUsers[idx] }, { new: true })
    .then(()=> {
      console.log("Asignado Owner")
    })
    .catch(err => {
      console.log("Error dando owner a Tour")
      throw err
    })
    User.findByIdAndUpdate(allUsers[idx], { $push: { toursCreated: tour._id } })
    .then(() => {
      console.log("Pusheado Tour a User ok")
    })
    .catch(err => {
      console.log("Errol pusheando Tour a User")
      throw err
    })
    User.findByIdAndUpdate(allUsers[randomInt(0, allUsers.length-1)], { $push: { fav: tour._id } })
    .then(() => {
      console.log("Pusheado Tour a Fav ok")
    })
    .catch(err => {
      console.log("Errol pusheando Tour a User")
      throw err
    })
    User.findByIdAndUpdate(allUsers[randomInt(0, allUsers.length-1)], { $push: { historic: tour._id } })
    .then(() => {
      console.log("Pusheado Tour a Historic ok")
    })
    .catch(err => {
      console.log("Errol pusheando Tour a User")
      throw err
    })
  })
})
.catch(err => {
  console.log("Errol Tour forEach para asignarse")
  throw err
})


TourComment.deleteMany()
.then(() => {
  return TourComment.create(tourComments)
})
.then(tourCommentsCreated => {
  User.find()
  .then((usersFound) =>{
    usersFound.forEach((userFound)=>{
      allUsers.push(userFound._id)
    })
  })
  tourCommentsCreated.forEach((tourComment,idx) => {
    console.log(tourComment._id)
    allToursComments.push(tourComment._id) 
  })
})
.then(() => {
  Tour.find()
    .then((toursFound) => {
      toursFound.forEach((tour, idx) => {
        switch (idx) {
          case 0:
            Tour.findByIdAndUpdate(tour._id, { comments: allToursComments.slice(0, 3) })
            .then()
            break;
          case 1:
            Tour.findByIdAndUpdate(tour._id, { comments: allToursComments.slice(3, 6) })
            .then()
            break;
          case 2:
            Tour.findByIdAndUpdate(tour._id, { comments: allToursComments.slice(6, 9) })
            .then()
            break;
          case 3:
            Tour.findByIdAndUpdate(tour._id, { comments: allToursComments.slice(9, 12) })
            .then()
            break;
          case 4:
            Tour.findByIdAndUpdate(tour._id, { comments: allToursComments.slice(12, 15) })
            .then()
            break;
          case 5:
            Tour.findByIdAndUpdate(tour._id, { comments: allToursComments.slice(15, 18) })
            .then()
            break;
          case 6:
            Tour.findByIdAndUpdate(tour._id, { comments: allToursComments.slice(18, 21) })
            .then()
            break;
          case 7:
            Tour.findByIdAndUpdate(tour._id, { comments: allToursComments.slice(21, 24) })
            .then()
            break;
          case 8:
            Tour.findByIdAndUpdate(tour._id, { comments: allToursComments.slice(24, 27) })
            .then()
            break;
          case 9:
            Tour.findByIdAndUpdate(tour._id, { comments: allToursComments.slice(27, 30) })
            .then()
            break;
        }
      })
    })
})
.then(()=>{
  TourComment.find()
  .then((TourCommentsFound)=>{
    TourCommentsFound.forEach((TourCommentFound,idx)=>{
      TourComment.findByIdAndUpdate(TourCommentFound._id,{author: allUsers[randomInt(0, allUsers.length-1)]}) //Solo se asigna author hasta que llegas al ultimo, y no vuelve a empezar, debe ser Random en el array
      .then()
    })
  })
})
.catch(err => {
  console.log("Errol creacion Tour comment")
  throw err
})

UserComment.deleteMany()
.then(() => {
  return UserComment.create(userComments)
})
.then((userCommentsCreated) => {
  userCommentsCreated.forEach((userComments) => {
  allUsersComments.push(userComments._id)
  })
})
.then(() => {
  User.find()
    .then((usersFound) => {
      usersFound.forEach((user, idx) => {
        switch (idx) {
          case 0:
            User.findByIdAndUpdate(user._id, { comments: allUsersComments.slice(0, 2) })
            .then()
            break;
          case 1:
            User.findByIdAndUpdate(user._id, { comments: allUsersComments.slice(2, 4) })
            .then()
            break;
          case 2:
            User.findByIdAndUpdate(user._id, { comments: allUsersComments.slice(4, 6) })
            .then()
            break;
          case 3:
            User.findByIdAndUpdate(user._id, { comments: allUsersComments.slice(6, 8) })
            .then()
            break;
          case 4:
            User.findByIdAndUpdate(user._id, { comments: allUsersComments.slice(8, 10) })
            .then()
            break;
          case 5:
            User.findByIdAndUpdate(user._id, { comments: allUsersComments.slice(10, 12) })
            .then()
            break;
          case 6:
            User.findByIdAndUpdate(user._id, { comments: allUsersComments.slice(12, 14) })
            .then()
            break;
          case 7:
            User.findByIdAndUpdate(user._id, { comments: allUsersComments.slice(14, 16) })
            .then()
            break;
          case 8:
            User.findByIdAndUpdate(user._id, { comments: allUsersComments.slice(16, 18) })
            .then()
            break;
          case 9:
            User.findByIdAndUpdate(user._id, { comments: allUsersComments.slice(18, 20) })
            .then()
            break;
          }
        })
    })  
}) 
.then(()=>{
  UserComment.find()
  .then((UserCommentsFound)=>{
    UserCommentsFound.forEach((UserCommentsFound,idx)=>{
      UserComment.findByIdAndUpdate(UserCommentsFound._id,{author: allUsers[randomInt(0, allUsers.length-1)]}) //Solo se asigna author hasta que llegas al ultimo, y no vuelve a empezar, debe ser Random en el array
      .then()
    })
  })
})  
.then(() => {
  console.log("Creado Seeds correctamente, ahora os tiro los Ids")
  console.log(allUsers)
  console.log(allTours)
  console.log(allToursComments)
  console.log(allUsersComments)
  // mongoose.disconnect()
})
.catch(err => {
  // mongoose.disconnect()
  throw err
});

