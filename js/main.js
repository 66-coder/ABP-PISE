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
const sections = document.querySelectorAll('.emergency-section');
const navLinks = document.querySelectorAll('.emergency-nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) { // 150 es un umbral para activar el enlace un poco antes
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});