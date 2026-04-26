// ===========================
// SCROLL REVEAL ANIMATION
// ===========================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Optionnel : arrêter d'observer une fois révélé
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer tous les éléments avec la classe scroll-reveal
document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => observer.observe(el));
});

// ===========================
// HEADER SHADOW ON SCROLL
// ===========================

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// ===========================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===========================
// PROGRESS BARS ANIMATION
// ===========================

const progressBars = document.querySelectorAll('.progress-fill');
let progressAnimated = false;

function animateProgressBars() {
    if (progressAnimated) return;
    
    const skillsSection = document.querySelector('#skills');
    const skillsSectionTop = skillsSection.offsetTop;
    const scrollY = window.pageYOffset;
    
    if (scrollY > skillsSectionTop - 400) {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
        progressAnimated = true;
    }
}

window.addEventListener('scroll', animateProgressBars);

// ===========================
// TYPING EFFECT (Optional)
// ===========================

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Décommenter pour activer l'effet de frappe sur le titre
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 80);
// }

// ===========================
// MOBILE MENU (si nécessaire)
// ===========================

// Pour ajouter un menu burger sur mobile plus tard
function createMobileMenu() {
    // TODO: Implémenter le menu mobile
}

// ===========================
// CONSOLE EASTER EGG
// ===========================

console.log('%c👋 Salut ! ', 'font-size: 20px; font-weight: bold; color: #0ea5e9;');
console.log('%cTu es curieux ? Moi aussi ! 🤖', 'font-size: 14px; color: #64748b;');
console.log('%cN\'hésite pas à checker mon GitHub : https://github.com/Charlox29', 'font-size: 12px; color: #0ea5e9;');
