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

    // --- NUEVO: Lógica para el desplazamiento suave (smooth scroll) con offset ---
    const navAnchorLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    const navBar = document.querySelector('.emergency-nav');

    navAnchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 1. Prevenimos el comportamiento por defecto (el salto brusco)
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // 2. Calculamos la altura de la barra de navegación + un margen extra de 20px
                const offset = navBar.offsetHeight + 10; 
                
                // 3. Obtenemos la posición de la sección a la que queremos ir
                const elementPosition = targetSection.offsetTop;
                
                // 4. Calculamos la posición final restando la altura de la barra
                const offsetPosition = elementPosition - offset;

                // 5. Hacemos el scroll suave a la posición calculada
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

// --- Lógica para el menú hamburguesa en móviles (ACTUALIZADO) ---
    const navToggle = document.querySelector('.nav-toggle');
    const navClose = document.querySelector('.nav-close');
    const navLinksContainer = document.querySelector('.nav-links');
    const allNavLinks = document.querySelectorAll('.nav-links a');
    const overlay = document.querySelector('.overlay');

    const openMenu = () => {
        navLinksContainer.classList.add('active');
        overlay.classList.add('active');
    };

    const closeMenu = () => {
        navLinksContainer.classList.remove('active');
        overlay.classList.remove('active');
    };

    if (navToggle && navLinksContainer && navClose && overlay) {
        navToggle.addEventListener('click', openMenu);
        navClose.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);

        allNavLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});