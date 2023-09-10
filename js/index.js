

let currentSlide = 0; // Cambiado a 0 para mostrar la primera diapositiva
const itemContainer = document.querySelector('.carousel-item-container');
const items = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicator');

function showSlide(index) {
    currentSlide = index;
    
    // Calcular el desplazamiento basado en el índice de la diapositiva
    const offset = -currentSlide * 100;
    itemContainer.style.transform = `translateX(${offset}%)`;

    // Actualiza los indicadores de navegación
    indicators.forEach((indicator, idx) => {
        if (idx === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function prevSlide() {
    const prevSlide = (currentSlide - 1 + items.length) % items.length;
    showSlide(prevSlide);
}

function nextSlide() {
    const nextSlide = (currentSlide + 1) % items.length;
    showSlide(nextSlide);
}

// Iniciar el carrusel
showSlide(currentSlide);

// Cambiar de diapositiva automáticamente cada 3 segundos
setInterval(nextSlide, 3000);

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
