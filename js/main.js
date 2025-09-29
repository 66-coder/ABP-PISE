document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para el botón "Volver Arriba" ---
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
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

    if (sections.length && navLinks.length) {
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

    // --- Lógica para el desplazamiento suave (smooth scroll) con offset ---
    const navAnchorLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const navBar = document.querySelector('.emergency-nav');

    navAnchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offset = navBar.offsetHeight + 10; 
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - offset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- LÓGICA DEL MENÚ HAMBURGUESA (CORREGIDA Y SIMPLIFICADA) ---
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const allMobileNavLinks = document.querySelectorAll('.nav-links a');
    const overlay = document.querySelector('.overlay');

    // Función para cerrar el menú (la usaremos en varios lugares)
    const closeMenu = () => {
        navLinksContainer.classList.remove('active');
        overlay.classList.remove('active');
    };

    if (navToggle && navLinksContainer && overlay) {
        
        // 1. El botón hamburguesa ahora abre y cierra el menú.
        navToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        // 2. Cerramos el menú si se hace clic en un enlace.
        allMobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // 3. Cerramos el menú si se hace clic en el fondo oscuro.
        overlay.addEventListener('click', closeMenu);
    }
});