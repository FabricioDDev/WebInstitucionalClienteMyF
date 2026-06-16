// Esperamos a que todo el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".service-overlay-card");
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    
    let currentSlide = 0;
    const slideInterval = 5000; // 5 segundos
    let autoSlide;

    // Función para cambiar de slide
    function showSlide(index) {
        // Remover clases activas de los elementos actuales
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        // Calcular el nuevo índice de manera cíclica
        currentSlide = (index + slides.length) % slides.length;

        // Añadir clases activas al nuevo slide seleccionado
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Funciones de control manual
    function nextSlide() {
        showSlide(currentSlide + 1);
        resetTimer();
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
        resetTimer();
    }

    // Reiniciar el temporizador automático al interactuar con el usuario
    function resetTimer() {
        clearInterval(autoSlide);
        startTimer();
    }

    function startTimer() {
        autoSlide = setInterval(nextSlide, slideInterval);
    }

    // Event Listeners para las Flechas del Carrusel
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }

    // Event Listeners para los Dots (Puntitos)
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetTimer();
        });
    });

    // Inicializar el carrusel automático
    if (slides.length > 0) {
        startTimer();
    }

    // Validamos que los elementos existan en la página para evitar errores (Menú Mobile)
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            // Intercambia la clase 'active' en el menú al hacer clic
            navMenu.classList.toggle("nav-menu_visible");
            
            // Opcional: Cambia el atributo aria-label para accesibilidad
            if (navMenu.classList.contains("nav-menu_visible")) {
                navToggle.setAttribute("aria-label", "Cerrar menú");
            } else {
                navToggle.setAttribute("aria-label", "Abrir menú");
            }
        });
    }

    // Lógica de Filtrado de Tarjetas de Servicios
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remover estado activo de todos los botones y ponerlo en el clickeado
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedCategory = button.getAttribute("data-category");

            // Mostrar u ocultar tarjetas según el data-cat
            cards.forEach(card => {
                if (card.getAttribute("data-cat") === selectedCategory) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });
});