// Esperamos a que todo el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

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
});
