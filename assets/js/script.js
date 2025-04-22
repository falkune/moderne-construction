// Menu Burger
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const body = document.body;

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

// Fermer le menu quand on clique sur un lien
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

// Changement de couleur du header au scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Filtre des projets
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Ajouter la classe active au bouton cliqué
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Animation au défilement
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-content, .service-card, .project-item, .testimonial-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialiser les éléments comme invisibles
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.about-content, .service-card, .project-item, .testimonial-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease-out';
    });
    
    // Démarrer l'animation pour le hero
    document.querySelector('.hero-content').style.opacity = '1';
});

window.addEventListener('scroll', animateOnScroll);

// Activer l'animation au chargement pour les éléments visibles
window.addEventListener('load', animateOnScroll);