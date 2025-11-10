// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach((link) => {
    link.addEventListener('click', () => {
        if (navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        
        // Show success message
        alert('ขอบคุณสำหรับข้อความของคุณ! เราจะติดต่อกลับโดยเร็วที่สุด');
        
        // Reset form
        contactForm.reset();
    });
}

// Import Anime.js v4
import { animate, stagger, createDraggable, utils } from 'animejs';

// SplitText fallback implementation
const splitText = (selector, options = {}) => {
    const element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!element) return { chars: [], words: [] };
    
    const text = element.textContent || '';
    const chars = [];
    element.innerHTML = '';
    
    text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        element.appendChild(span);
        chars.push(span);
    });
    
    return { chars, words: [] };
};

console.log('✅ Anime.js v4 loaded successfully!');

// Floating Shapes Animation with Anime.js
const initFloatingShapes = () => {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        animate(shape, {
            translateX: [
                { value: 0, duration: 0 },
                { value: 30, duration: 2500 },
                { value: -20, duration: 2500 },
                { value: 0, duration: 2000 }
            ],
            translateY: [
                { value: 0, duration: 0 },
                { value: -30, duration: 2500 },
                { value: 20, duration: 2500 },
                { value: 0, duration: 2000 }
            ],
            rotate: [
                { value: 0, duration: 0 },
                { value: 120, duration: 2500 },
                { value: 240, duration: 2500 },
                { value: 360, duration: 2000 }
            ],
            delay: index * 500,
            duration: 9000,
            ease: 'inOutSine',
            loop: true
        });
    });
};

// Hero Content Animation (Subtitle and Buttons only, Title handled separately)
const initHeroAnimation = () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroSubtitle && heroButtons) {
        animate(heroSubtitle, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            ease: 'outExpo'
        });
        animate(heroButtons, {
            opacity: [0, 1],
            translateY: [30, 0],
            delay: 100,
            duration: 600,
            ease: 'outExpo'
        });
    }
};

// Intersection Observer for fade-in animations with Anime.js
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
        animate(entry.target, {
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 500,
            ease: 'outExpo'
        });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.feature-card, .service-card').forEach((card) => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Button hover effects with Anime.js
document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('mouseenter', function() {
        animate(this, {
            translateY: -2,
            scale: 1.05,
            duration: 200,
            ease: 'outQuad'
        });
    });
    
    btn.addEventListener('mouseleave', function() {
        animate(this, {
            translateY: 0,
            scale: 1,
            duration: 200,
            ease: 'outQuad'
        });
    });
});

// Add click animation to buttons with Anime.js
document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        animate(ripple, {
            scale: 4,
            opacity: [0.6, 0],
            duration: 400,
            ease: 'outExpo',
            complete: () => {
                ripple.remove();
            }
        });
    });
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// Logo Animation
const initLogoAnimation = () => {
    const logo = document.querySelector('.logo');
    if (logo) {
        animate(logo, {
            scale: [1, 1.1, 1],
            duration: 1200,
            ease: 'inOutQuad',
            loop: true
        });
    }
};

// Navbar Animation on Scroll
const initNavbarAnimation = () => {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (navbar) {
            if (currentScroll > 50) {
                animate(navbar, {
                    translateY: [0, 0],
                    scale: [1, 1],
                    duration: 300,
                    ease: 'outQuad'
                });
            }
        }
        lastScroll = currentScroll;
    });
};

// Navigation Menu Items Animation
const initNavMenuAnimation = () => {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(-20px)';
        
        animate(link, {
            opacity: [0, 1],
            translateY: [-20, 0],
            delay: 150 + (index * 50),
            duration: 400,
            ease: 'outExpo'
        });
    });
};

// Hero Title Character Animation with splitText
const initHeroTitleAnimation = () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        try {
            const { chars } = splitText(heroTitle, { words: false, chars: true });
            
            animate(chars, {
                // Property keyframes - bounce up then down
                y: [
                    { to: '-2.75rem', ease: 'outExpo', duration: 600 },
                    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
                ],
                // Property specific parameters
                rotate: {
                    from: '-1turn',
                    delay: 0
                },
                opacity: [0, 1],
                delay: stagger(30),
                ease: 'inOutCirc'
            });
        } catch (error) {
            console.warn('SplitText animation failed, using fallback:', error);
            // Fallback animation
            const text = heroTitle.textContent || '';
            heroTitle.innerHTML = '';
            
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.display = 'inline-block';
                span.style.opacity = '0';
                heroTitle.appendChild(span);
                
                animate(span, {
                    opacity: [0, 1],
                    translateY: [50, 0],
                    delay: index * 15,
                    duration: 500,
                    ease: 'outExpo'
                });
            });
        }
    }
};

// Feature Icons Continuous Animation
const initFeatureIconsAnimation = () => {
    const featureIcons = document.querySelectorAll('.feature-icon');
    
    featureIcons.forEach((icon, index) => {
        // Initial animation
        icon.style.opacity = '0';
        icon.style.transform = 'scale(0) rotate(0deg)';
        
        // Continuous animation
        setInterval(() => {
            animate(icon, {
                scale: [1, 1.2, 1],
                rotate: [0, 360],
                duration: 1200,
                ease: 'inOutQuad',
                delay: index * 100
            });
        }, 2000 + (index * 300));
    });
};

// Section Titles Animation with splitText
const initSectionTitlesAnimation = () => {
    const sectionTitles = document.querySelectorAll('.section-title');
    
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                try {
                    const { chars } = splitText(entry.target, { words: false, chars: true });
                    
                    animate(chars, {
                        // Bounce animation
                        y: [
                            { to: '-2rem', ease: 'outExpo', duration: 500 },
                            { to: 0, ease: 'outBounce', duration: 700, delay: 50 }
                        ],
                        rotate: {
                            from: index % 2 === 0 ? '-0.5turn' : '0.5turn',
                            delay: 0
                        },
                        opacity: [0, 1],
                        delay: stagger(40),
                        ease: 'inOutCirc'
                    });
                } catch (error) {
                    console.warn('SplitText animation failed, using fallback:', error);
                    // Fallback animation
                    animate(entry.target, {
                        opacity: [0, 1],
                        translateX: index % 2 === 0 ? [-100, 0] : [100, 0],
                        scale: [0.8, 1],
                        duration: 600,
                        ease: 'outExpo'
                    });
                }
                
                titleObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    sectionTitles.forEach(title => {
        titleObserver.observe(title);
    });
};

// Enhanced Card Animations with Rotation and Draggable
const initEnhancedCardAnimations = () => {
    const cards = document.querySelectorAll('.feature-card, .service-card');
    
    // Set initial z-index and perspective
    utils.set('.feature-card, .service-card', { z: 100 });
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                animate(entry.target, {
                    opacity: [0, 1],
                    translateY: [50, 0],
                    rotateY: [45, 0],
                    scale: [0.8, 1],
                    delay: index * 80,
                    duration: 600,
                    ease: 'outExpo'
                });
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        cardObserver.observe(card);
        
        // Hover effect
        card.addEventListener('mouseenter', function() {
            animate(this, {
                scale: 1.05,
                translateY: -10,
                rotateZ: 2,
                duration: 250,
                ease: 'outQuad'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            animate(this, {
                scale: 1,
                translateY: 0,
                rotateZ: 0,
                duration: 250,
                ease: 'outQuad'
            });
        });
    });
    
    // Initialize draggable for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length > 0) {
        featureCards.forEach((card) => {
            createDraggable(card, {
                x: { mapTo: 'rotateY' },
                y: { mapTo: 'z' },
                releaseEase: 'outExpo',
                releaseDuration: 300
            });
        });
    }
};

const initDraggableShowcase = () => {
    const squares = document.querySelectorAll('.drag-square');
    const freeDrags = document.querySelectorAll('.free-drag');

    if (!squares.length && !freeDrags.length) {
        return;
    }

    if (squares.length) {
        utils.set('.drag-square', { z: 180 });

        squares.forEach((square) => {
            createDraggable(square, {
                x: { mapTo: 'rotateY' },
                y: { mapTo: 'rotateX' },
                releaseEase: 'outElastic(1, .6)',
                releaseDuration: 450
            });
        });
    }

    if (freeDrags.length) {
        utils.set('.free-drag', { z: 140 });

        freeDrags.forEach((drag) => {
            const container = drag.closest('.interactive-drag-layer') || document.body;
            const handle = drag.querySelector('.free-drag-handle') || undefined;
            createDraggable(drag, {
                container,
                handle,
                releaseEase: 'outQuad',
                releaseDuration: 280
            });

            const clearBtn = drag.querySelector('.free-drag-clear');
            const textarea = drag.querySelector('textarea');
            if (clearBtn && textarea) {
                clearBtn.addEventListener('click', () => {
                    textarea.value = '';
                    textarea.focus();
                });
            }

            const resizeHandle = drag.querySelector('.free-drag-resize');
            if (resizeHandle) {
                let startX;
                let startY;
                let startWidth;
                let startHeight;
                let activePointerId = null;
                let minWidthValue;
                let minHeightValue;

                const handlePointerMove = (event) => {
                    if (event.pointerId !== activePointerId) return;
                    const deltaX = event.clientX - startX;
                    const deltaY = event.clientY - startY;
                    const nextWidth = Math.max(minWidthValue, startWidth + deltaX);
                    const nextHeight = Math.max(minHeightValue, startHeight + deltaY);
                    drag.style.width = `${nextWidth}px`;
                    drag.style.height = `${nextHeight}px`;
                };

                const handlePointerUp = (event) => {
                    if (event.pointerId !== activePointerId) return;
                    resizeHandle.releasePointerCapture(activePointerId);
                    document.removeEventListener('pointermove', handlePointerMove);
                    document.removeEventListener('pointerup', handlePointerUp);
                    drag.classList.remove('is-resizing');
                    activePointerId = null;
                };

                resizeHandle.addEventListener('pointerdown', (event) => {
                    event.preventDefault();
                    activePointerId = event.pointerId;
                    startX = event.clientX;
                    startY = event.clientY;
                    startWidth = drag.offsetWidth;
                    startHeight = drag.offsetHeight;
                    minWidthValue = Math.min(220, startWidth);
                    minHeightValue = Math.min(180, startHeight);
                    drag.classList.add('is-resizing');
                    resizeHandle.setPointerCapture(activePointerId);
                    document.addEventListener('pointermove', handlePointerMove);
                    document.addEventListener('pointerup', handlePointerUp);
                });
            }

            const toggleButton = drag.querySelector('.free-drag-toggle');
            if (toggleButton) {
                toggleButton.addEventListener('click', () => {
                    const currentState = drag.getAttribute('data-state') || 'expanded';
                    const icon = toggleButton.querySelector('.toggle-icon');

                    if (currentState === 'expanded') {
                        const currentWidth = drag.style.width || `${drag.offsetWidth}px`;
                        const currentHeight = drag.style.height || `${drag.offsetHeight}px`;
                        drag.dataset.expandedWidth = currentWidth;
                        drag.dataset.expandedHeight = currentHeight;
                        drag.setAttribute('data-state', 'collapsed');
                        drag.style.width = '';
                        drag.style.height = '';
                        if (icon) {
                            icon.textContent = '+';
                        }
                    } else {
                        const restoreWidth = drag.dataset.expandedWidth || '250px';
                        const restoreHeight = drag.dataset.expandedHeight || '300px';
                        drag.style.width = restoreWidth;
                        drag.style.height = restoreHeight;
                        drag.setAttribute('data-state', 'expanded');
                        if (icon) {
                            icon.textContent = '–';
                        }
                    }
                });
            }
        });
    }
};

// Service Numbers Count Up Animation
const initServiceNumbersAnimation = () => {
    const serviceNumbers = document.querySelectorAll('.service-number');
    
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                const target = entry.target;
                const text = target.textContent || '';
                const number = parseInt(text);
                
                if (!isNaN(number)) {
                    // Note: v4 API may need different approach for count-up
                    let currentValue = 0;
                    const increment = number / 60;
                    const timer = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= number) {
                            currentValue = number;
                            clearInterval(timer);
                        }
                        target.textContent = String(Math.floor(currentValue)).padStart(2, '0');
                    }, 20);
                }
                
                // Pulse animation
                animate(target, {
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    duration: 1200,
                    ease: 'inOutQuad',
                    loop: true
                });
                
                numberObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    serviceNumbers.forEach(number => {
        numberObserver.observe(number);
    });
};

// Form Inputs Animation
const initFormInputsAnimation = () => {
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    inputs.forEach((input, index) => {
        input.style.opacity = '0';
        input.style.transform = 'translateX(-30px)';
        
        animate(input, {
            opacity: [0, 1],
            translateX: [-30, 0],
            delay: 100 + (index * 50),
            duration: 400,
            ease: 'outExpo'
        });
        
        // Focus animation
        input.addEventListener('focus', function() {
            animate(this, {
                scale: 1.02,
                borderColor: '#6366f1',
                duration: 200,
                ease: 'outQuad'
            });
        });
        
        input.addEventListener('blur', function() {
            animate(this, {
                scale: 1,
                duration: 200,
                ease: 'outQuad'
            });
        });
    });
};

// Info Items Animation
const initInfoItemsAnimation = () => {
    const infoItems = document.querySelectorAll('.info-item');
    
    const infoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                animate(entry.target, {
                    opacity: [0, 1],
                    translateX: [-50, 0],
                    delay: index * 100,
                    duration: 500,
                    ease: 'outExpo'
                });
                
                // Animate icon
                const icon = entry.target.querySelector('.info-icon');
                if (icon) {
                    animate(icon, {
                        scale: [0, 1.2, 1],
                        rotate: [180, 0],
                        duration: 600,
                        delay: index * 100,
                        ease: 'outElastic'
                    });
                }
                
                infoObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    infoItems.forEach(item => {
        item.style.opacity = '0';
        infoObserver.observe(item);
    });
};

// Footer Animation
const initFooterAnimation = () => {
    const footer = document.querySelector('.footer');
    
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target instanceof HTMLElement) {
                animate(entry.target, {
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 600,
                    ease: 'outExpo'
                });
                
                // Animate text
                const text = entry.target.querySelector('p');
                if (text) {
                    animate(text, {
                        scale: [0.8, 1],
                        duration: 500,
                        delay: 100,
                        ease: 'outElastic'
                    });
                }
                
                footerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (footer && footer instanceof HTMLElement) {
        footer.style.opacity = '0';
        footerObserver.observe(footer);
    }
};

// Continuous Background Animations
const initBackgroundAnimations = () => {
    // Add animated gradient to hero using CSS animation instead
    const hero = document.querySelector('.hero');
    if (hero) {
        // Create a subtle pulsing effect
        animate(hero, {
            opacity: [1, 0.98, 1],
            duration: 2500,
            ease: 'inOutSine',
            loop: true
        });
    }
};

// Hamburger Menu Animation
const initHamburgerAnimation = () => {
    const hamburger = document.querySelector('.hamburger');
    const spans = document.querySelectorAll('.hamburger span');
    
    if (hamburger && spans.length > 0) {
        hamburger.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                // Close animation
                animate(spans[0], {
                    rotate: 0,
                    translateY: 0,
                    duration: 200
                });
                animate(spans[1], {
                    opacity: 1,
                    duration: 200
                });
                animate(spans[2], {
                    rotate: 0,
                    translateY: 0,
                    duration: 200
                });
            } else {
                // Open animation
                animate(spans[0], {
                    rotate: 45,
                    translateY: 8,
                    duration: 200
                });
                animate(spans[1], {
                    opacity: 0,
                    duration: 200
                });
                animate(spans[2], {
                    rotate: -45,
                    translateY: -8,
                    duration: 200
                });
            }
        });
    }
};

// Scroll Progress Indicator
const initScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #f093fb);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        
        animate(progressBar, {
            width: `${scrolled}%`,
            duration: 100,
            ease: 'linear'
        });
    });
};

// Initialize all animations when DOM is ready
const initAllAnimations = () => {
    console.log('🎬 Initializing all animations...');
    
    initFloatingShapes();
    initHeroAnimation();
    initLogoAnimation();
    initNavbarAnimation();
    initNavMenuAnimation();
    initHeroTitleAnimation();
    initFeatureIconsAnimation();
    initSectionTitlesAnimation();
    initEnhancedCardAnimations();
    initDraggableShowcase();
    initServiceNumbersAnimation();
    initFormInputsAnimation();
    initInfoItemsAnimation();
    initFooterAnimation();
    initBackgroundAnimations();
    initHamburgerAnimation();
    initScrollProgress();
    
    console.log('✅ All animations initialized!');
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        // Wait a bit for anime.js to be fully loaded
        setTimeout(() => {
        initAllAnimations();
        }, 50);
    });
} else {
    // Wait a bit for anime.js to be fully loaded
    setTimeout(() => {
        initAllAnimations();
    }, 50);
}
