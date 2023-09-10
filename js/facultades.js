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
        Duracion: '5 años',
        Descripcion: 'Escuela de Arquitectura especializada en diseño y planificación de edificios.'
    },
    'E.T.S. de Edificación': {
        Nombre: 'E.T.S. de Edificación',
        Duracion: '4 años',
        Descripcion: 'Escuela de Edificación centrada en técnicas de construcción y gestión de proyectos.'
    },
    'E.T.S. de Ingeniería Aeronáutica y del Espacio': {
        Nombre: 'E.T.S. de Ingeniería Aeronáutica y del Espacio',
        Duracion: '4 años',
        Descripcion: 'Escuela de Ingeniería Aeronáutica enfocada en tecnología aeroespacial.'
    },
    'E.T.S. de Ingeniería Agronómica, Alimentaría y de Biosistemas': {
        Nombre: 'E.T.S. de Ingeniería Agronómica, Alimentaría y de Biosistemas',
        Duracion: '4 años',
        Descripcion: 'Escuela de Ingeniería Agronómica que se especializa en alimentos y biosistemas.'
    },
    'E.T.S. de Ingeniería de Montes, Forestal y del Medio Natural': {
        Nombre: 'E.T.S. de Ingeniería de Montes, Forestal y del Medio Natural',
        Duracion: '4 años',
        Descripcion: 'Escuela de Ingeniería enfocada en la gestión de recursos forestales y medio ambiente.'
    },
    'E.T.S. de Ingenieros de Caminos, Canales y Puertos': {
        Nombre: 'E.T.S. de Ingenieros de Caminos, Canales y Puertos',
        Duracion: '4 años',
        Descripcion: 'Escuela de Ingenieros especializada en infraestructuras civiles.'
    },
    'E.T.S de Ingenieros de Telecomunicación': {
        Nombre: 'E.T.S de Ingenieros de Telecomunicación',
        Duracion: '4 años',
        Descripcion: 'Escuela de Ingenieros dedicada a la tecnología de telecomunicación.'
    },
    'E.T.S. de Ingenieros Navales': {
        Nombre: 'E.T.S. de Ingenieros Navales',
        Duracion: '4 años',
        Descripcion: 'Escuela de Ingenieros Navales que se enfoca en la construcción naval y la ingeniería marina.'
    },
    'Facultad de Ciencias de la Actividad Física y del Deporte (INFEF)': {
        Nombre: 'Facultad de Ciencias de la Actividad Física y del Deporte (INFEF)',
        Duracion: '4 años',
        Descripcion: 'Facultad dedicada a la formación en ciencias del deporte y la actividad física.'
    },
    'Rectorado': {
        Nombre: 'Rectorado',
        Duracion: 'Varía',
        Descripcion: 'Sede del Rectorado de la Universidad Politécnica de Madrid.'
    },
    'Instituto de Energía Solar': {
        Nombre: 'Instituto de Energía Solar',
        Duracion: 'Varía',
        Descripcion: 'Instituto de investigación dedicado a la energía solar y las tecnologías renovables.'
    },
    'Instituto de Sistemas Optoelectrónicos y Microtecnología': {
        Nombre: 'Instituto de Sistemas Optoelectrónicos y Microtecnología',
        Duracion: 'Varía',
        Descripcion: 'Instituto de investigación enfocado en sistemas optoelectrónicos y microtecnología.'
    },
    'Instituto de Ciencias de la Educación (ICE)': {
        Nombre: 'Instituto de Ciencias de la Educación (ICE)',
        Duracion: 'Varía',
        Descripcion: 'Instituto dedicado a la investigación en ciencias de la educación y pedagogía.'
    },
    'E.T.S. de Ingeniería Civil': {
        Nombre: 'E.T.S. de Ingeniería Civil',
        Duracion: '4 años',
        Descripcion: 'Escuela de Ingeniería Civil enfocada en la planificación y construcción de infraestructuras.'
    },
    'E.T.S. de Ingeniería y Diseño Industrial': {
        Nombre: 'E.T.S. de Ingeniería y Diseño Industrial',
        Duracion: '4 años',
        Descripcion: 'Escuela de Ingeniería y Diseño Industrial centrada en la innovación y la producción.'
    },
    'E.T.S. de Ingenieros de Minas y Energía': {
        Nombre: 'E.T.S. de Ingenieros de Minas y Energía',
        Duracion: '4 años',
        Descripcion: 'Escuela de Ingenieros de Minas y Energía dedicada a la explotación de recursos naturales y energía.'
    },
    'E.T.S. de Ingenieros Industriales': {
        Nombre: 'E.T.S. de Ingenieros Industriales',
        Duracion: '4 años',
        Descripcion: 'Escuela de Ingenieros Industriales especializada en procesos de manufactura y producción.'
    },
    'Instituto de Fusión Nuclear': {
        Nombre: 'Instituto de Fusión Nuclear',
        Duracion: 'Varía',
        Descripcion: 'Instituto de investigación en el campo de la fusión nuclear y la energía de fusión.'
    },
    'E.T.S. de Ingenieros Informáticos': {
        Nombre: 'E.T.S. de Ingenieros Informáticos',
        Duracion: '4 años',
        Descripcion: 'Escuela de Ingenieros Informáticos centrada en tecnologías de la información y la informática.'
    },
    'Centro de Inv. en Biotecnología y Genómica de Plantas (CBGP)': {
        Nombre: 'Centro de Inv. en Biotecnología y Genómica de Plantas (CBGP)',
        Duracion: 'Varía',
        Descripcion: 'Centro de investigación en biotecnología y genómica vegetal.'
    },
    'Centro de Tecnología Biomédica (CTB)': {
        Nombre: 'Centro de Tecnología Biomédica (CTB)',
        Duracion: 'Varía',
        Descripcion: 'Centro de investigación en tecnología biomédica y salud.'
    },
    'Instituto Universitario de Microgravedad "Ignacio Da Riva"': {
        Nombre: 'Instituto Universitario de Microgravedad "Ignacio Da Riva"',
        Duracion: 'Varía',
        Descripcion: 'Instituto dedicado a la investigación en microgravedad y tecnologías espaciales.'
    },
    'Centro de Domótica Integral (CeDINT-UMP)': {
        Nombre: 'Centro de Domótica Integral (CeDINT-UMP)',
        Duracion: 'Varía',
        Descripcion: 'Centro de investigación en domótica y automatización del hogar.'
    },
    'E.T.S. de Ingeniería de Sistemas Informáticos': {
        Nombre: 'E.T.S. de Ingeniería de Sistemas Informáticos',
        Duracion: '4 años',
        Descripcion: 'Escuela de Ingeniería especializada en sistemas informáticos y software.'
    },
    'E.T.S. de Ingeniería de Sistemas Telecomunicación': {
        Nombre: 'E.T.S. de Ingeniería de Sistemas Telecomunicación',
        Duracion: '4 años',
        Descripcion: 'Escuela de Ingeniería de Telecomunicación centrada en sistemas de comunicación.'
    },
    'E.T.S. de Ingenieros en Topografía, Geodesia y Cartografía': {
        Nombre: 'E.T.S. de Ingenieros en Topografía, Geodesia y Cartografía',
        Duracion: '4 años',
        Descripcion: 'Escuela de Ingenieros especializada en topografía, geodesia y cartografía.'
    },
    'Instituto de Investigación del Automóvil (INSIA)': {
        Nombre: 'Instituto de Investigación del Automóvil (INSIA)',
        Duracion: 'Varía',
        Descripcion: 'Instituto de investigación en tecnología automotriz y seguridad vial.'
    },
    'Centro Superior de Diseño de Moda de Madrid (centro adscrito a la UPM)': {
        Nombre: 'Centro Superior de Diseño de Moda de Madrid (centro adscrito a la UPM)',
        Duracion: 'Varía',
        Descripcion: 'Centro de diseño de moda adscrito a la Universidad Politécnica de Madrid.'
    },
    'Centro de Inv. en Tecnologías Sw y Sis. Multimedia para la sostenibilidad.': {
        Nombre: 'Centro de Inv. en Tecnologías Sw y Sis. Multimedia para la sostenibilidad.',
        Duracion: 'Varía',
        Descripcion: 'Centro de investigación en tecnologías de software y sistemas multimedia sostenibles.'
    },
};



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
        { transform: 'translate(100vw)'}
    ], { 
        // timing options
        duration: 1000,
        iterations: 1,
        fill: 'forwards'
    });

    animation.onfinish = function() {
        aside.style.display = 'none';
    };
}