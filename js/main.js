// 1. Array de objetos con la información de los servicios (Declarado arriba)
const services = [
    // --- CATEGORÍA: ESTÉTICA DE UÑAS ---
    {
        title: "Esmaltado semipermanente",
        description: " Es un sistema de pintado que se cura en lámpara UV/LED. Ofrece un brillo impecable y una duración de 15 a 21 días sin saltarse ni perder el color. Ideal para quienes buscan practicidad.",
        image: "assets/manicuria.jpg", 
        category: "Manicuría: Cuidado de Uñas",
        hidden: true
    },
    {
        title: "Capping(Gel o Acrilico)",
        description: "Consiste en aplicar una fina capa de gel o acrílico sobre la uña natural (sin alargarla). Funciona como un escudo protector para evitar que las uñas finas o quebradizas se descamen o se rompan, permitiéndoles crecer sanas.",
        image: "assets/manicuria.jpg", 
        category: "Manicuría: Cuidado de Uñas",
        hidden: true
    },
    {
        title: "Soft Gel",
        description: "Es un método innovador y rápido para extensiones de uñas. Se utilizan tips hechos de gel flexible que se adhieren a la uña con una base especial y se curan en lámpara. El resultado es súper natural, ligero y mucho más rápido de aplicar que las estructuras tradicionales.",
        image: "assets/manicuria.jpg", 
        category: "Manicuría: Cuidado de Uñas",
        hidden: true
    },

    // --- CATEGORÍA: PESTAÑAS Y MIRADA ---
    {
        title: "Extensiones de pestaña",
        description: "Es una técnica que consiste en colocar pelitos individuales (de fibra sintética muy liviana) sobre cada una de las pestañas naturales mediante un adhesivo hipoalergénico. Sirve para dar volumen, longitud y curvatura, logrando una mirada impactante y efecto rímel continuo sin necesidad de maquillarse. Dependiendo de la cantidad de pelitos por pestaña natural, pueden ser Pelo a Pelo (más natural) o Volumen (más tupido).",
        image: "assets/mirada.jpg", 
        category: "Mirada: Pestañas y Cejas",
        hidden: true
    },
        {
        title: "Lifting de pestañas",
        description: " Es un tratamiento que estira, levanta y curva las pestañas naturales desde la raíz mediante moldes de silicona y productos específicos. Incluye tinte, por lo que las pestañas se ven más largas, negras y definidas de forma natural por unas 6 semanas.",
        image: "assets/mirada.jpg", 
        category: "Mirada: Pestañas y Cejas",
        hidden: true
    },
        {
        title: "Laminado de pestañas",
        description: "Un tratamiento diseñado para ordenar, alisar y fijar el vello de las cejas. Logra un efecto de ceja peinada, más tupida y definida, ideal para domar vellos rebeldes o rellenar visualmente espacios de forma semipermanente.",
        image: "assets/mirada.jpg", 
        category: "Mirada: Pestañas y Cejas",
        hidden: true
    },
    {
        title: "Laminado de cejas",
        description: "Un tratamiento diseñado para ordenar, alisar y fijar el vello de las cejas. Logra un efecto de ceja peinada, más tupida y definida, ideal para domar vellos rebeldes o rellenar visualmente espacios de forma semipermanente.",
        image: "assets/mirada.jpg", 
        category: "Mirada: Pestañas y Cejas",
        hidden: true
    },
    // --- CATEGORÍA: MASAJES ---
    {
        title: "Masajes relajantes",
        description: " Tienen como objetivo principal reducir el estrés, la ansiedad y la tensión mental. Se realizan con movimientos suaves, pausados y una presión leve a moderada para inducir un estado de calma profunda y mejorar la circulación.",
        image: "assets/masajes.jpg", 
        category: "Masajes: Recuperacion",
        hidden: true
    }
    ,
    {
        title: "Masajes descontracturantes",
        description: "Están enfocados en aliviar el dolor muscular y disolver los nudos o contracturas causados por las malas posturas, el ejercicio o la tensión acumulada. La presión es más firme, profunda y localizada en las zonas críticas (como espalda, cuello y hombros).",
        image: "assets/masajes.jpg", 
        category: "Masajes: Recuperacion",
        hidden: true
    }
    , // --- CATEGORÍA: COSMETOLOGIA ---
    {
        title: "Cosmetodologia",
        description: "Es el conjunto de tratamientos enfocados en mejorar la salud, higiene y apariencia de la piel del rostro. Incluye desde limpiezas profundas y exfoliaciones, hasta hidrataciones, peelings y tratamientos para combatir el acné o las líneas de expresión, siempre adaptándose al tipo de piel de cada persona.",
        image: "assets/cosmetodologia2.jpg", 
        category: "Piel: Cuidada tu piel",
        hidden: true
    }
     ,
     // --- CATEGORÍA: DEPILACION ---
    {
        title: "Depilacion definitiva(Laser)",
        description: "Es un tratamiento que utiliza tecnología lumínica (como el láser Soprano o similar) para destruir el folículo piloso mediante calor, impidiendo que el vello vuelva a crecer. Requiere varias sesiones, es prácticamente indoloro gracias a sus cabezales de frío y logra una piel sumamente suave y libre de vello a largo plazo.",
        image: "assets/depilacion.jpg", 
        category: "Depilacion",
        hidden: true
    }
     ,
     // --- CATEGORÍA:BRONCEADOS ---
    {
        title: "​Bronceado Sol Pleno (Sudar / DHA):",
        description: "Es un sistema de bronceado saludable que se aplica en todo el cuerpo mediante una pistola de aire (aerógrafo). Utiliza una loción a base de DHA (un derivado de la caña de azúcar) que reacciona con las proteínas de la piel para generar un tono dorado y natural en pocas horas, sin necesidad de exponerse al sol ni a los rayos UV. Es ideal para lucir un color espectacular en ocasiones especiales de forma rápida, segura y sin dañar la piel.",
        image: "assets/bronceado.jpg", 
        category: "Bronceados: Un color unico",
        hidden: true
    }
  ,// --- CATEGORÍA: PELUQUERIA ---
    {
        title: "Corte de pelo",
        description: "El servicio esencial para renovar el look, dar forma, movimiento y volumen al cabello. Se adapta a las facciones y estilo de cada clienta, eliminando además las puntas abiertas para mantener el pelo sano.",
        image: "assets/peluqueria.jpg", 
        category: "Peluqueria: Brilla",
        hidden: true
    }
      ,
    {
        title: "Color/Tinte",
        description: "Aplicación de coloración (global o de raíces) para cubrir canas, cambiar de tono o unificar el color del cabello, aportando brillo, intensidad y una cobertura perfecta.",
        image: "assets/hair2.jpg", 
        category: "Peluqueria: Brilla",
        hidden: true
    }
      ,
    {
        title: "Mechas e Iluminacion",
        description: "Técnicas de aclaración localizada (como balayage, babylights o reflejos tradicionales) que buscan dar luz, dimensión y contraste al cabello, logrando desde un efecto sutil de besado por el sol hasta rubios más globales y definidos.",
        image: "assets/hair.jpg", 
        category: "Peluqueria: Brilla",
        hidden: true
    }
 ,
    {
        title: "Alisado",
        description: "Tratamientos térmicos diseñados para modificar la estructura del cabello, eliminando el frizz y el volumen de forma duradera. Dejan la melena completamente lacia, sedosa y con un brillo espejo que facilita el peinado diario.",
        image: "assets/peluqueria.jpg", 
        category: "Peluqueria: Brilla",
        hidden: true
    }
     ,
    {
        title: "Tratamientos capilares y nutriciones",
        description: "Baños de crema, ampollas y mascarillas concentradas (hidratantes, nutritivas o reconstructoras) que devuelven los nutrientes, el agua y los aceites naturales que el pelo pierde por procesos químicos o el uso de herramientas de calor.",
        image: "assets/peluqueria2.jpg", 
        category: "Peluqueria: Brilla",
        hidden: true
    }
];

// ==========================================================================
// 2. FUNCIÓN PARA RENDERIZAR LAS TARJETAS EN EL DOM
// ==========================================================================
function renderServices(servicesArray) {
    const container = document.getElementById('services-container');
    if (!container) return;

    container.innerHTML = "";

    servicesArray.forEach(service => {
        const card = document.createElement('article');
        card.classList.add('service-overlay-card');
        card.dataset.cat = service.category;

        card.innerHTML = `
            <div class="card-bg-image" style="background-image: url('${service.image}');"></div>
            <div class="card-overlay-content">
                <div class="card-top-line"></div>
                <h3 class="card-service-title">${service.title}</h3>
                <p class="card-service-description">${service.description}</p>
                <button class="toggle-description-btn">Leer más</button>
                <div class="card-footer-action">
                    <a href="#" class="card-action-btn">
                        <span>Quiero información</span>
                        <div class="arrow-circle"><i class="fas fa-arrow-right"></i></div>
                    </a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Manejo del evento de "Leer más" / "Leer menos"
    const toggleBtns = container.querySelectorAll('.toggle-description-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const descriptionElement = e.target.previousElementSibling;
            const cardContent = e.target.closest('.card-overlay-content');
            const card = e.target.closest('.service-overlay-card');

            descriptionElement.classList.toggle('expanded');
            cardContent.classList.toggle('expanded');
            card.classList.toggle('expanded');

            if (descriptionElement.classList.contains('expanded')) {
                e.target.textContent = "Leer menos";
            } else {
                e.target.textContent = "Leer más";
            }
        });
    });
}

// ==========================================================================
// 3. INICIALIZACIÓN GENERAL CUANDO EL DOM ESTÉ LISTO
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    
    // Renderizamos las tarjetas (se ven todas de forma predeterminada al cargar)
    renderServices(services);

    // Elementos del DOM generales
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    // Capturamos las tarjetas ya renderizadas
    const cards = document.querySelectorAll(".service-overlay-card");
    
    // Elementos del Carrusel
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');
    
    let currentSlide = 0;
    const slideInterval = 5000;
    let autoSlide;

    // Lógica del Carrusel
    function showSlide(index) {
        if (slides.length === 0) return;
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() { showSlide(currentSlide + 1); resetTimer(); }
    function prevSlide() { showSlide(currentSlide - 1); resetTimer(); }
    function resetTimer() { clearInterval(autoSlide); startTimer(); }
    function startTimer() { autoSlide = setInterval(nextSlide, slideInterval); }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => { showSlide(index); resetTimer(); });
    });

    if (slides.length > 0) startTimer();

    // Menú Mobile
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("nav-menu_visible");
            if (navMenu.classList.contains("nav-menu_visible")) {
                navToggle.setAttribute("aria-label", "Cerrar menú");
            } else {
                navToggle.setAttribute("aria-label", "Abrir menú");
            }
        });
    }

    // Lógica de Filtrado por Categoría (Soporta botón 'all')
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedCategory = button.getAttribute("data-category");

            cards.forEach(card => {
                // Si el botón tiene data-category="all" o coincide con la categoría de la tarjeta
                if (selectedCategory === "all" || card.getAttribute("data-cat") === selectedCategory) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });
});

// Lógica para expandir el texto corto (excerpt) en las tarjetas de Blog
const blogCards = document.querySelectorAll('.blog-card');

blogCards.forEach(card => {
    const excerpt = card.querySelector('.blog-card-excerpt');
    if (!excerpt) return;

    // 1. Creamos dinámicamente el botón "Leer más"
    const toggleBtn = document.createElement('button');
    toggleBtn.classList.add('blog-toggle-btn');
    toggleBtn.textContent = 'Leer más';
    
    // 2. Lo insertamos justo después del párrafo de texto
    excerpt.insertAdjacentElement('afterend', toggleBtn);

    // 3. Escuchamos el clic
    toggleBtn.addEventListener('click', () => {
        excerpt.classList.toggle('expanded');
        card.classList.toggle('expanded');

        if (excerpt.classList.contains('expanded')) {
            toggleBtn.textContent = 'Leer menos';
        } else {
            toggleBtn.textContent = 'Leer más';
        }
    });
});