const campusSelect = document.getElementById('campus');
const carreraInput = document.getElementById('carrera');
const carrerasDatalist = document.getElementById('carreras');
const tablaInfo = document.getElementById('tabla-info');

// Definir carreras por campus (datos proporcionados)
const carrerasPorCampus = {
    'Campus Ciudad Universitaria': [
        'E.T.S. de Arquitectura',
        'E.T.S. de Edificación',
        'E.T.S. de Ingeniería Aeronáutica y del Espacio',
        'E.T.S. de Ingeniería Agronómica, Alimentaría y de Biosistemas',
        'E.T.S. de Ingeniería de Montes, Forestal y del Medio Natural',
        'E.T.S. de Ingenieros de Caminos, Canales y Puertos',
        'E.T.S de Ingenieros de Telecomunicación',
        'E.T.S. de Ingenieros Navales',
        'Facultad de Ciencias de la Actividad Física y del Deporte (INFEF)',
        'Rectorado',
        'Instituto de Energía Solar',
        'Instituto de Sistemas Optoelectrónicos y Microtecnología',
        'Instituto de Ciencias de la Educación (ICE)'
    ],
    'Campus Madrid Ciudad': [
        'E.T.S. de Ingeniería Civil',
        'E.T.S. de Ingeniería y Diseño Industrial',
        'E.T.S. de Ingenieros de Minas y Energía',
        'E.T.S. de Ingenieros Industriales',
        'Instituto de Fusión Nuclear'
    ],
    'Campus Montegancedo': [
        'E.T.S. de Ingenieros Informáticos',
        'Centro de Investigación en Biotecnología y Genómica de Plantas (CBGP)',
        'Centro de Tecnología Biomédica (CTB)',
        'Instituto Universitario de Microgravedad "Ignacio Da Riva"',
        'Centro de Domótica Integral (CeDINT-UMP)'
    ],
    'Campus Sur': [
        'E.T.S. de Ingeniería de Sistemas Informáticos',
        'E.T.S. de Ingeniería de Sistemas Telecomunicación',
        'E.T.S. de Ingenieros en Topografía, Geodesia y Cartografía',
        'Instituto de Investigación del Automóvil (INSIA)',
        'Centro Superior de Diseño de Moda de Madrid (centro adscrito a la UPM)',
        'Centro de Investigación en Tecnologías de Software y Sistemas Multimedia para la Sostenibilidad'
    ]
};

// Definir información para cada carrera (datos proporcionados)
const informacionCarreras = {
    'E.T.S. de Arquitectura': {
        Nombre: 'E.T.S. de Arquitectura',
        Descripcion: 'Escuela de Arquitectura especializada en diseño y planificación de edificios.',
        Duracion: '5 años',
        Matricula: '1200 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'E.T.S. de Edificación': {
        Nombre: 'E.T.S. de Edificación',
        Descripcion: 'Escuela de Edificación centrada en técnicas de construcción y gestión de proyectos.',
        Duracion: '4 años',
        Matricula: '1000 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'E.T.S. de Ingeniería Aeronáutica y del Espacio': {
        Nombre: 'E.T.S. de Ingeniería Aeronáutica y del Espacio',
        Descripcion: 'Escuela de Ingeniería Aeronáutica enfocada en tecnología aeroespacial.',
        Duracion: '4 años',
        Matricula: '1300 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'E.T.S. de Ingeniería Agronómica, Alimentaría y de Biosistemas': {
        Nombre: 'E.T.S. de Ingeniería Agronómica, Alimentaría y de Biosistemas',
        Descripcion: 'Escuela de Ingeniería Agronómica que se especializa en alimentos y biosistemas.',
        Duracion: '4 años',
        Matricula: '1100 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'E.T.S. de Ingeniería de Montes, Forestal y del Medio Natural': {
        Nombre: 'E.T.S. de Ingeniería de Montes, Forestal y del Medio Natural',
        Descripcion: 'Escuela de Ingeniería enfocada en la gestión de recursos forestales y medio ambiente.',
        Duracion: '4 años',
        Matricula: '1050 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'E.T.S. de Ingenieros de Caminos, Canales y Puertos': {
        Nombre: 'E.T.S. de Ingenieros de Caminos, Canales y Puertos',
        Descripcion: 'Escuela de Ingenieros especializada en infraestructuras civiles.',
        Duracion: '4 años',
        Matricula: '1200 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'E.T.S de Ingenieros de Telecomunicación': {
        Nombre: 'E.T.S de Ingenieros de Telecomunicación',
        Descripcion: 'Escuela de Ingenieros dedicada a la tecnología de telecomunicación.',
        Duracion: '4 años',
        Matricula: '1250 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'E.T.S. de Ingenieros Navales': {
        Nombre: 'E.T.S. de Ingenieros Navales',
        Descripcion: 'Escuela de Ingenieros Navales que se enfoca en la construcción naval y la ingeniería marina.',
        Duracion: '4 años',
        Matricula: '1400 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'Facultad de Ciencias de la Actividad Física y del Deporte (INFEF)': {
        Nombre: 'Facultad de Ciencias de la Actividad Física y del Deporte (INFEF)',
        Descripcion: 'Facultad dedicada a la formación en ciencias del deporte y la actividad física.',
        Duracion: '4 años',
        Matricula: '950 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'Rectorado': {
        Nombre: 'Rectorado',
        Descripcion: 'Sede del Rectorado de la Universidad Politécnica de Madrid.',
        Duracion: 'Varía',
        Matricula: 'No aplicable',
        Requisitos: 'No aplicable',
    },
    'Instituto de Energía Solar': {
        Nombre: 'Instituto de Energía Solar',
        Descripcion: 'Instituto de investigación dedicado a la energía solar y las tecnologías renovables.',
        Duracion: 'Varía',
        Matricula: 'No aplicable',
        Requisitos: 'No aplicable',
    },
    'Instituto de Sistemas Optoelectrónicos y Microtecnología': {
        Nombre: 'Instituto de Sistemas Optoelectrónicos y Microtecnología',
        Descripcion: 'Instituto de investigación enfocado en sistemas optoelectrónicos y microtecnología.',
        Duracion: 'Varía',
        Matricula: 'No aplicable',
        Requisitos: 'No aplicable',
    },
    'Instituto de Ciencias de la Educación (ICE)': {
        Nombre: 'Instituto de Ciencias de la Educación (ICE)',
        Descripcion: 'Instituto dedicado a la investigación en ciencias de la educación y pedagogía.',
        Duracion: 'Varía',
        Matricula: 'No aplicable',
        Requisitos: 'No aplicable',
    },
    'E.T.S. de Ingeniería Civil': {
        Nombre: 'E.T.S. de Ingeniería Civil',
        Descripcion: 'Escuela de Ingeniería Civil enfocada en la planificación y construcción de infraestructuras.',
        Duracion: '4 años',
        Matricula: '1150 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'E.T.S. de Ingeniería y Diseño Industrial': {
        Nombre: 'E.T.S. de Ingeniería y Diseño Industrial',
        Descripcion: 'Escuela de Ingeniería y Diseño Industrial centrada en la innovación y la producción.',
        Duracion: '4 años',
        Matricula: '1100 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'E.T.S. de Ingenieros de Minas y Energía': {
        Nombre: 'E.T.S. de Ingenieros de Minas y Energía',
        Descripcion: 'Escuela de Ingenieros de Minas y Energía dedicada a la explotación de recursos naturales y energía.',
        Duracion: '4 años',
        Matricula: '1250 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'E.T.S. de Ingenieros Industriales': {
        Nombre: 'E.T.S. de Ingenieros Industriales',
        Descripcion: 'Escuela de Ingenieros Industriales especializada en procesos de manufactura y producción.',
        Duracion: '4 años',
        Matricula: '1200 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'Instituto de Fusión Nuclear': {
        Nombre: 'Instituto de Fusión Nuclear',
        Descripcion: 'Instituto de investigación en el campo de la fusión nuclear y la energía de fusión.',
        Duracion: 'Varía',
        Matricula: 'No aplicable',
        Requisitos: 'No aplicable',
    },
    'E.T.S. de Ingenieros Informáticos': {
        Nombre: 'E.T.S. de Ingenieros Informáticos',
        Descripcion: 'Escuela de Ingenieros Informáticos centrada en tecnologías de la información y la informática.',
        Duracion: '4 años',
        Matricula: '1300 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'Centro de Inv. en Biotecnología y Genómica de Plantas (CBGP)': {
        Nombre: 'Centro de Inv. en Biotecnología y Genómica de Plantas (CBGP)',
        Descripcion: 'Centro de investigación en biotecnología y genómica vegetal.',
        Duracion: 'Varía',
        Matricula: 'No aplicable',
        Requisitos: 'No aplicable',
    },
    'Centro de Tecnología Biomédica (CTB)': {
        Nombre: 'Centro de Tecnología Biomédica (CTB)',
        Descripcion: 'Centro de investigación en tecnología biomédica y salud.',
        Duracion: 'Varía',
        Matricula: 'No aplicable',
        Requisitos: 'No aplicable',
    },
    'Instituto Universitario de Microgravedad "Ignacio Da Riva"': {
        Nombre: 'Instituto Universitario de Microgravedad "Ignacio Da Riva"',
        Descripcion: 'Instituto dedicado a la investigación en microgravedad y tecnologías espaciales.',
        Duracion: 'Varía',
        Matricula: 'No aplicable',
        Requisitos: 'No aplicable',
    },
    'Centro de Domótica Integral (CeDINT-UMP)': {
        Nombre: 'Centro de Domótica Integral (CeDINT-UMP)',
        Descripcion: 'Centro de investigación en domótica y automatización del hogar.',
        Duracion: 'Varía',
        Matricula: 'No aplicable',
        Requisitos: 'No aplicable',
    },
    'E.T.S. de Ingeniería de Sistemas Informáticos': {
        Nombre: 'E.T.S. de Ingeniería de Sistemas Informáticos',
        Descripcion: 'Escuela de Ingeniería especializada en sistemas informáticos y software.',
        Duracion: '4 años',
        Matricula: '1350 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'E.T.S. de Ingeniería de Sistemas Telecomunicación': {
        Nombre: 'E.T.S. de Ingeniería de Sistemas Telecomunicación',
        Descripcion: 'Escuela de Ingeniería de Telecomunicación centrada en sistemas de comunicación.',
        Duracion: '4 años',
        Matricula: '1400 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'E.T.S. de Ingenieros en Topografía, Geodesia y Cartografía': {
        Nombre: 'E.T.S. de Ingenieros en Topografía, Geodesia y Cartografía',
        Descripcion: 'Escuela de Ingenieros especializada en topografía, geodesia y cartografía.',
        Duracion: '4 años',
        Matricula: '1150 € por año',
        Requisitos: 'Título de bachillerato y prueba de aptitud.',
    },
    'Instituto de Investigación del Automóvil (INSIA)': {
        Nombre: 'Instituto de Investigación del Automóvil (INSIA)',
        Descripcion: 'Instituto de investigación en tecnología automotriz y seguridad vial.',
        Duracion: 'Varía',
        Matricula: 'No aplicable',
        Requisitos: 'No aplicable',
    },
    'Centro Superior de Diseño de Moda de Madrid (centro adscrito a la UPM)': {
        Nombre: 'Centro Superior de Diseño de Moda de Madrid (centro adscrito a la UPM)',
        Descripcion: 'Centro de diseño de moda adscrito a la Universidad Politécnica de Madrid.',
        Duracion: 'Varía',
        Matricula: 'No aplicable',
        Requisitos: 'No aplicable',
    },
    'Centro de Inv. en Tecnologías Sw y Sis. Multimedia para la sostenibilidad.': {
        Nombre: 'Centro de Inv. en Tecnologías Sw y Sis. Multimedia para la sostenibilidad.',
        Descripcion: 'Centro de investigación en tecnologías de software y sistemas multimedia sostenibles.',
        Duracion: 'Varía',
        Matricula: 'No aplicable',
        Requisitos: 'No aplicable',
    },
};

// Puedes continuar agregando información a las carreras existentes según tus necesidades.




// Evento que se dispara cuando se selecciona un campus
campusSelect.addEventListener('change', actualizarCarreras);

// Evento que se dispara cuando se selecciona una carrera
carreraInput.addEventListener('input', mostrarInformacionCarrera);

// Función para actualizar las opciones del datalist
function actualizarCarreras() {
    const campusSeleccionado = campusSelect.value;
    const carreras = carrerasPorCampus[campusSeleccionado] || [];

    // Limpiar las opciones anteriores
    carrerasDatalist.innerHTML = '';

    // Llenar el datalist con las nuevas opciones
    carreras.forEach(carrera => {
        const opcion = document.createElement('option');
        opcion.value = carrera;
        carrerasDatalist.appendChild(opcion);
    });
}

// Función para mostrar la información de la carrera
function mostrarInformacionCarrera() {
    const NombreCarrera = carreraInput.value;
    const datosCarrera = informacionCarreras[NombreCarrera];

    // Limpiar la tabla
    tablaInfo.innerHTML = '';

    if (datosCarrera) {
        // Crear filas de la tabla con información de la carrera
        for (const propiedad in datosCarrera) {
            if (datosCarrera.hasOwnProperty(propiedad)) {
                const fila = document.createElement('tr');
                const celdaPropiedad = document.createElement('th');
                const celdaValor = document.createElement('td');
                console.log(propiedad);
                celdaPropiedad.textContent = propiedad;
                celdaValor.textContent = datosCarrera[propiedad];
                fila.appendChild(celdaPropiedad);
                fila.appendChild(celdaValor);
                tablaInfo.appendChild(fila);
            }
        }
    } else {
        // Mostrar un mensaje de error si la carrera no se encuentra
        tablaInfo.innerHTML = '<tr><td colspan="2">Carrera no encontrada</td></tr>';
    }
}



// Inicialmente, cargar las opciones para el primer campus
actualizarCarreras();

function closeChatbot() {
    var aside = document.querySelector('aside');
    var animation = aside.animate([
        // keyframes
        { transform: 'translate(0)' },
        { transform: 'translate(100vw)' }
    ], {
        // timing options
        duration: 1000,
        iterations: 1,
        fill: 'forwards'
    });

    animation.onfinish = function () {
        aside.style.display = 'none';
    };
}