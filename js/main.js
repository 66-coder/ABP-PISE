/* ==========================================================================
   Componentes de la Página
   ========================================================================== */

// Lógica para el botón "Volver Arriba"
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.querySelector('.back-to-top');

    // Muestra u oculta el botón dependiendo del scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Muestra el botón después de bajar 300px
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Hace que el scroll hacia arriba sea suave al hacer clic
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Lógica para resaltar el enlace de la sección activa en el menú
// Lógica para resaltar el enlace de la sección activa en el menú
const sections = document.querySelectorAll('.emergency-section');
const navLinks = document.querySelectorAll('.emergency-nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    // Zona neutral en la parte superior
    if (pageYOffset < 250) {
        current = '';
    }

    // Bucle corregido para aplicar la clase 'active'
    navLinks.forEach(link => {
        link.classList.remove('active');
        // ESTA ES LA LÍNEA CORREGIDA:
        // Solo añade la clase si 'current' NO está vacío.
        if (current && link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});