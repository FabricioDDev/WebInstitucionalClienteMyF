// Esperamos a que todo el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".service-overlay-card");

    // Validamos que los elementos existan en la página para evitar errores
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
