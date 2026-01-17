/* ==========================================
   Defensa Estatutaria - Page Specific Scripts
   ========================================== */

// ============================================
// NAVIGATION PREMIUM - MENU FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('JDV & Abogados - Defensa Estatutaria Loaded');
    
    // === FULLSCREEN MENU TOGGLE ===
    const navTogglePremium = document.getElementById('navTogglePremium');
    const fullscreenMenu = document.getElementById('fullscreenMenu');
    
    if (navTogglePremium && fullscreenMenu) {
        navTogglePremium.addEventListener('click', function(e) {
            e.stopPropagation();
            navTogglePremium.classList.toggle('active');
            fullscreenMenu.classList.toggle('active');
            document.body.style.overflow = fullscreenMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu on link click
        document.querySelectorAll('.fullscreen-link').forEach(link => {
            link.addEventListener('click', function() {
                navTogglePremium.classList.remove('active');
                fullscreenMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // === MEGA MENU TOGGLE (Desktop) ===
    const hasMega = document.querySelector('.has-mega');
    const megaMenu = document.getElementById('megaMenu');
    let megaMenuTimeout;
    
    if (hasMega && megaMenu) {
        hasMega.addEventListener('mouseenter', function() {
            clearTimeout(megaMenuTimeout);
            megaMenu.classList.add('active');
        });
        
        hasMega.addEventListener('mouseleave', function() {
            megaMenuTimeout = setTimeout(() => {
                megaMenu.classList.remove('active');
            }, 300);
        });
        
        megaMenu.addEventListener('mouseenter', function() {
            clearTimeout(megaMenuTimeout);
        });
        
        megaMenu.addEventListener('mouseleave', function() {
            megaMenu.classList.remove('active');
        });
        
        // Close mega menu on link click
        document.querySelectorAll('.mega-link').forEach(link => {
            link.addEventListener('click', function() {
                megaMenu.classList.remove('active');
            });
        });
    }
    
    // === ENHANCED SCROLL BEHAVIOR ===
    let lastScrollPosition = 0;
    let ticking = false;
    
    function updateNavOnScroll() {
        const currentScroll = window.pageYOffset;
        const nav = document.getElementById('mainNav');
        
        if (!nav) return;
        
        // Add scrolled class
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Hide/Show based on scroll direction
        if (currentScroll > lastScrollPosition && currentScroll > 300) {
            // Scrolling down - hide
            nav.classList.add('hidden');
            nav.classList.remove('visible');
            // Close mega menu if open
            if (megaMenu) megaMenu.classList.remove('active');
        } else {
            // Scrolling up - show
            nav.classList.remove('hidden');
            nav.classList.add('visible');
        }
        
        lastScrollPosition = currentScroll;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateNavOnScroll);
            ticking = true;
        }
    }, { passive: true });
    
    // === CLOSE MENUS ON ESC ===
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (fullscreenMenu && fullscreenMenu.classList.contains('active')) {
                navTogglePremium.classList.remove('active');
                fullscreenMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (megaMenu && megaMenu.classList.contains('active')) {
                megaMenu.classList.remove('active');
            }
        }
    });
    
    // === CLOSE MENUS ON OUTSIDE CLICK ===
    document.addEventListener('click', function(e) {
        if (megaMenu &&
            !e.target.closest('.has-mega') &&
            !e.target.closest('.mega-menu-overlay')) {
            megaMenu.classList.remove('active');
        }
    });
    
    // ============================================
    // PAGE SPECIFIC ANIMATIONS
    // ============================================

    // Init hero animations
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 100);
    }

    // Animate problem items on scroll
    const problemItems = document.querySelectorAll('.problem-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    problemItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease-out';
        observer.observe(item);
    });
    
    // Animate result cards
    const resultCards = document.querySelectorAll('.result-card');
    resultCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + (index * 150));
    });
});

// FAQ Toggle Function
function toggleFaq(faqNumber) {
    const faqItem = document.querySelector(`.faq-item[data-faq="${faqNumber}"]`);
    if (!faqItem) return;
    
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current FAQ
    if (isActive) {
        faqItem.classList.remove('active');
    } else {
        faqItem.classList.add('active');
    }
}

// Modal Functions
function openModal() {
    const modal = document.getElementById('consultaModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('consultaModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on overlay click
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Form Submit Handler
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Get form values
    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const telefono = formData.get('telefono');
    const mensaje = formData.get('mensaje');
    
    // Basic validation
    if (!nombre || !email || !telefono) {
        alert('Por favor completa todos los campos obligatorios.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor ingresa un correo electrónico válido.');
        return;
    }
    
    // Here you would normally send to a backend
    console.log('Form submitted:', { nombre, email, telefono, mensaje });
    
    // Show success message
    alert('✅ ¡Consulta enviada con éxito!\n\nTe contactaremos en menos de 24 horas.');
    
    // Reset form and close modal
    form.reset();
    closeModal();
    
    // TODO: Integrate with actual backend/email service
    // Example: fetch('/api/consulta', { method: 'POST', body: formData })
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Newsletter Submit Handler
function handleNewsletterSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value;
    const btn = form.querySelector('.newsletter-btn');

    // Validación básica
    if (!email || !email.includes('@')) {
        alert('Por favor ingresa un email válido');
        return;
    }

    // Guardar estado original del botón
    const originalHTML = btn.innerHTML;
    const originalBg = btn.style.background;

    // Mostrar estado de carga
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Suscribiendo...';
    btn.disabled = true;

    // Simular envío (aquí integrarías con tu servicio de email marketing)
    setTimeout(() => {
        // Estado de éxito
        btn.innerHTML = '<i class="fas fa-check"></i> ¡Suscrito!';
        btn.style.background = '#10b981'; // Verde éxito

        // Logging para desarrollo
        console.log('Newsletter signup:', {
            email: email,
            timestamp: new Date().toISOString(),
            page: window.location.pathname
        });

        // Resetear después de 3 segundos
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = originalBg;
            btn.disabled = false;
            form.reset();
        }, 3000);
    }, 1500);
}
