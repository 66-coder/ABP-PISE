document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para el botón "Volver Arriba" ---
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) { // Comprueba si el botón existe
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Lógica para resaltar el enlace de la sección activa en el menú ---
    const sections = document.querySelectorAll('.emergency-section');
    const navLinks = document.querySelectorAll('.emergency-nav a');

    if (sections.length && navLinks.length) { // Comprueba si existen las secciones y los links
        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });
            
            if (pageYOffset < 250) {
                current = '';
            }

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (current && link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }
});