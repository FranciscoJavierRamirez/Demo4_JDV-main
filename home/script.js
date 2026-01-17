/* ==========================================
   JDV & Abogados - JavaScript v3.0
   ========================================== */

// Wait for DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // === NAVIGATION ===
    const mainNav = document.getElementById('mainNav');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Sticky Navigation on Scroll
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile Menu Toggle
    if (navToggle) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.main-nav') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // === STATS COUNTER ANIMATION ===
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    function animateStats() {
        if (statsAnimated) return;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCount = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCount);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateCount();
        });
        
        statsAnimated = true;
    }
    
    // Trigger stats animation when in viewport
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                }
            });
        }, { threshold: 0.3 });
        
        statsObserver.observe(statsSection);
    }
    
    // === SCROLL ANIMATIONS ===
    const animateOnScroll = document.querySelectorAll('.area-card, .benefit-card, .stat-item');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-50px'
    });
    
    animateOnScroll.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        scrollObserver.observe(el);
    });
    
    // === BACK TO TOP ===
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 500) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // === SMOOTH SCROLL FOR ALL ANCHORS ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // === LAZY LOADING IMAGES ===
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
});

// === MODAL FUNCTIONS ===
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

// Close modal on ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// === FORM HANDLER ===
function handleSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const form = e.target;
    const formData = new FormData(form);
    
    // Here you would send the data to your backend
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Show success message
    alert('¡Gracias por tu consulta! Te contactaremos pronto.');
    
    // Close modal and reset form
    closeModal();
    form.reset();
    
    return false;
}

// === CONSOLE BRANDING ===
console.log('%cJDV & Abogados', 'font-size: 24px; font-weight: bold; color: #C9A961;');
console.log('%cSitio Web Desarrollado con Excelencia', 'font-size: 14px; color: #0077C8;');

// ============================================
// NAVIGATION PREMIUM 2026 - MEJORAS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
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

});

// === PRO BONO MODAL ===
function openProBonoModal() {
    // Usar el modal existente pero cambiar el título y mensaje
    const modal = document.getElementById('consultaModal');
    const modalTitle = modal.querySelector('.modal-title');
    const originalTitle = modalTitle.textContent;

    // Cambiar título temporalmente
    modalTitle.textContent = 'Consultar por Servicios Pro Bono';

    // Agregar mensaje informativo si no existe
    let proBonoNotice = modal.querySelector('.probono-notice');
    if (!proBonoNotice) {
        proBonoNotice = document.createElement('div');
        proBonoNotice.className = 'probono-notice';
        proBonoNotice.innerHTML = `
            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 1rem; margin-bottom: 1.5rem; border-radius: 8px;">
                <p style="margin: 0; color: #065f46; line-height: 1.6;">
                    <strong>Evaluación Pro Bono:</strong> Por favor describe tu situación socioeconómica en el mensaje.
                    Evaluaremos tu caso y te informaremos si calificas para servicios gratuitos.
                </p>
            </div>
        `;
        const form = modal.querySelector('.consulta-form');
        form.insertBefore(proBonoNotice, form.firstChild);
    }

    // Abrir modal
    openModal();

    // Restaurar título al cerrar (agregar listener temporal)
    const restoreTitle = () => {
        modalTitle.textContent = originalTitle;
        if (proBonoNotice) {
            proBonoNotice.remove();
        }
        modal.removeEventListener('close-modal', restoreTitle);
    };

    // Trigger cuando se cierre el modal
    setTimeout(() => {
        const closeBtn = modal.querySelector('.modal-close');
        const overlay = modal.querySelector('.modal-overlay');
        if (closeBtn) closeBtn.addEventListener('click', restoreTitle, { once: true });
        if (overlay) overlay.addEventListener('click', restoreTitle, { once: true });
    }, 100);
}

// === NEWSLETTER FORM HANDLER ===
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
    // TODO: Integrar con Mailchimp, SendGrid, Brevo, etc.
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

        // Google Analytics tracking (si está configurado)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'newsletter_signup', {
                'event_category': 'footer',
                'event_label': 'newsletter_form'
            });
        }

        // Resetear después de 3 segundos
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = originalBg;
            btn.disabled = false;
            form.reset();
        }, 3000);
    }, 1500);
}

// ============================================
// FASE 1 MEJORAS - LEGAL TECH 2026
// ============================================

// === FAQ ACCORDION ===
function toggleFaq(faqNumber) {
    const faqItem = document.querySelector(`.faq-item[data-faq="${faqNumber}"]`);
    const allFaqItems = document.querySelectorAll('.faq-item');
    
    // Close all other FAQs (optional - remove if you want multiple open)
    allFaqItems.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current FAQ
    faqItem.classList.toggle('active');
    
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'faq_interaction', {
            'event_category': 'faq',
            'event_label': faqItem.querySelector('.faq-question span').textContent,
            'value': faqItem.classList.contains('active') ? 1 : 0
        });
    }
}

// === RIPPLE EFFECT ON BUTTONS ===
document.addEventListener('DOMContentLoaded', function() {
    const rippleButtons = document.querySelectorAll(
        '.btn-hero-primary, .btn-cta, .btn-nav-cta, .btn-probono, .newsletter-btn, .btn-fullscreen-cta'
    );
    
    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            // Calculate position
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            // Set ripple styles
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            // Add to button
            button.appendChild(ripple);
            
            // Remove after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// === SCROLL FADE-IN ANIMATIONS ===
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll(
        '.area-card, .benefit-card, .stat-item, .faq-item, .probono-card'
    );
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay based on index within viewport
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                
                // Stop observing once visible
                fadeObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-50px'
    });
    
    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });
    
    // Special handling for stats section with counter
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const statsItems = statsSection.querySelectorAll('.stat-item');
        
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statsItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 150);
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        statsObserver.observe(statsSection);
    }
});

// === ENHANCED SCROLL ANIMATIONS FOR HERO ELEMENTS ===
document.addEventListener('DOMContentLoaded', function() {
    // Animate hero trust items on load
    const heroTrustItems = document.querySelectorAll('.hero-trust .trust-item');
    heroTrustItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 1200 + (index * 150));
    });
    
    // Animate floating cards on load
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
        card.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        }, 1500 + (index * 300));
    });
});
