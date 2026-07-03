document.addEventListener('DOMContentLoaded', () => {
    // window.history.replaceState(null, "Ashley Saunders' Portfolio", "/portfolioAS");
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < triggerBottom) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 

    const sections = document.querySelectorAll('section[id]');
    const dockItems = document.querySelectorAll('.dock-item');
    const brandLogo = document.getElementById('brandLogo');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 160; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        dockItems.forEach(item => {
            if (item.getAttribute('href')) {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${currentSectionId}`) {
                    item.classList.add('active');
                }
            }
        });

        if (currentSectionId === 'projects' || currentSectionId === 'contact') {
            brandLogo.classList.add('scrolled-accent');
        } else {
            brandLogo.classList.remove('scrolled-accent');
        }
    });

    const menuToggle = document.getElementById('menuToggle');
    const toggleIcon = menuToggle.querySelector('i');
    
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    overlay.innerHTML = `
        <a href="#about" class="menu-link">About</a>
        <a href="#skills" class="menu-link">Technical Expertise</a>
        <a href="#projects" class="menu-link">Featured Projects</a>
        <a href="#contact" class="menu-link">Inquiries</a>
        <a href="https://github.com/ash34313" target="_blank" class="menu-link"><i class="fab fa-github"></i> GitHub</a>
    `;
    document.body.appendChild(overlay);

    const menuLinks = document.querySelectorAll('.menu-link');

    menuToggle.addEventListener('click', () => {
        const isOpen = overlay.classList.toggle('open');
        menuToggle.classList.toggle('menu-active');
        
        if (isOpen) {
            toggleIcon.className = 'fas fa-times'; 
        } else {
            toggleIcon.className = 'fas fa-bars'; 
        }
    });

    menuLinks.forEach(link => link.addEventListener('click', () => {
        overlay.classList.remove('open');
        menuToggle.classList.remove('menu-active');
        toggleIcon.className = 'fas fa-bars';
    }));
});
    