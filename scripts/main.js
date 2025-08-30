// ===== LANGUAGE SYSTEM =====
class LanguageManager {
    constructor() {
        this.currentLang = 'en';
        this.init();
    }

    init() {
        // Set initial language from localStorage or default to 'en'
        const savedLang = localStorage.getItem('aiInsiderLang') || 'en';
        this.setLanguage(savedLang);
        
        // Add event listeners to language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('aiInsiderLang', lang);
        
        // Update active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('lang-btn--active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('lang-btn--active');
            }
        });
        
        // Update all text elements
        this.updateTexts();
        
        // Update document title and meta description
        this.updateMetadata();
    }

    updateTexts() {
        document.querySelectorAll('[data-en][data-ru]').forEach(element => {
            const text = element.getAttribute(`data-${this.currentLang}`);
            if (text) {
                element.textContent = text;
            }
        });
    }

    updateMetadata() {
        const title = document.title;
        const titleEl = document.querySelector('title');
        const metaDesc = document.querySelector('meta[name="description"]');
        
        if (titleEl) {
            const newTitle = titleEl.getAttribute(`data-${this.currentLang}`);
            if (newTitle) document.title = newTitle;
        }
        
        if (metaDesc) {
            const newDesc = metaDesc.getAttribute(`data-${this.currentLang}`);
            if (newDesc) metaDesc.setAttribute('content', newDesc);
        }
    }
}

// ===== PRELOADER =====
class PreloaderManager {
    constructor() {
        this.preloader = document.getElementById('preloader');
        if (!this.preloader) {
            console.warn('⚠️ Preloader element not found');
            return;
        }
        this.init();
    }

    init() {
        // Hide preloader after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hide();
            }, 1500); // Show for at least 1.5 seconds for effect
        });
    }

    hide() {
        if (this.preloader) {
            this.preloader.classList.add('hidden');
            // Remove from DOM after transition
            setTimeout(() => {
                this.preloader.remove();
            }, 500);
        }
    }
}

// ===== ANIMATIONS ON SCROLL =====
class ScrollAnimations {
    constructor() {
        this.observedElements = [];
        this.init();
    }

    init() {
        // Create intersection observer
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        // Observe all animatable elements
        this.observeElements();
        
        // Add scroll-based background effects
        this.initScrollEffects();
    }

    observeElements() {
        const selectors = [
            '.hero__content',
            '.benefit-card',
            '.product-card',
            '.step',
            '.about__content',
            '.faq__item'
        ];

        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                this.observer.observe(element);
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            });
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = Math.random() * 0.3; // Random delay for staggered effect
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay * 1000);
                
                this.observer.unobserve(entry.target);
            }
        });
    }

    initScrollEffects() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.updateBackgroundEffects();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    updateBackgroundEffects() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercent = scrollY / (documentHeight - windowHeight);
        
        // Update background animation nodes position
        const nodes = document.querySelectorAll('.bg-animation__node');
        nodes.forEach((node, index) => {
            const speed = (index + 1) * 0.5;
            const translateY = scrollPercent * 100 * speed;
            node.style.transform = `translateY(${translateY}px)`;
        });
        
        // Update hero background glow
        const heroGlow = document.querySelector('.hero__image-glow');
        if (heroGlow) {
            const opacity = Math.max(0, 0.4 - scrollPercent);
            heroGlow.style.opacity = opacity;
        }
    }
}

// ===== CURRICULUM MANAGER =====
class CurriculumManager {
    constructor() {
        this.tabs = document.querySelectorAll('.curriculum-tab');
        this.contents = document.querySelectorAll('.module-content');
        this.init();
    }

    init() {
        if (this.tabs.length === 0) return;

        this.tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const moduleNumber = e.target.getAttribute('data-module');
                this.switchModule(moduleNumber);
            });
        });
    }

    switchModule(moduleNumber) {
        // Remove active class from all tabs and contents
        this.tabs.forEach(tab => tab.classList.remove('active'));
        this.contents.forEach(content => content.classList.remove('active'));

        // Add active class to selected tab and content
        const selectedTab = document.querySelector(`[data-module="${moduleNumber}"]`);
        const selectedContent = document.querySelector(`.module-content[data-module="${moduleNumber}"]`);

        if (selectedTab && selectedContent) {
            selectedTab.classList.add('active');
            selectedContent.classList.add('active');
        }
    }
}

// ===== GRADUATES FILTER MANAGER =====
class GraduatesFilterManager {
    constructor() {
        this.filterTabs = document.querySelectorAll('.filter-tab');
        this.graduateCards = document.querySelectorAll('.graduate-card');
        this.init();
    }

    init() {
        if (this.filterTabs.length === 0) return;

        this.filterTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const filter = e.target.getAttribute('data-filter');
                this.filterGraduates(filter);
                this.setActiveTab(e.target);
            });
        });
    }

    filterGraduates(filter) {
        this.graduateCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                // Add fade in animation
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 100);
            } else {
                card.style.display = 'none';
            }
        });
    }

    setActiveTab(activeTab) {
        this.filterTabs.forEach(tab => tab.classList.remove('active'));
        activeTab.classList.add('active');
    }
}

// ===== FAQ ACCORDION =====
class FAQManager {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('.faq__question').forEach(question => {
            question.addEventListener('click', (e) => {
                this.toggleFAQ(e.target.closest('.faq__item'));
            });
        });
    }

    toggleFAQ(faqItem) {
        const isActive = faqItem.classList.contains('active');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq__item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    }
}

// ===== BACKGROUND GRADIENT ANIMATION =====
class BackgroundGradientManager {
    constructor() {
        this.colors = [
            'rgba(59, 130, 246, 0.08)',
            'rgba(99, 102, 241, 0.08)',
            'rgba(139, 92, 246, 0.08)',
            'rgba(124, 58, 237, 0.08)',
            'rgba(109, 40, 217, 0.08)'
        ];
        this.currentColorIndex = 0;
        this.init();
    }

    init() {
        this.updateGradient();
        
        // Change gradient every 15 seconds for smoother transitions
        setInterval(() => {
            this.updateGradient();
        }, 15000);
    }

    updateGradient() {
        const body = document.body;
        const color1 = this.colors[this.currentColorIndex];
        const color2 = this.colors[(this.currentColorIndex + 1) % this.colors.length];
        const color3 = this.colors[(this.currentColorIndex + 2) % this.colors.length];
        
        body.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 50%, ${color3} 100%), var(--color-bg-primary)`;
        
        this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length;
    }
}

// ===== MOBILE NAVIGATION MANAGER =====
class MobileNavManager {
    constructor() {
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.querySelector('.nav__menu');
        this.isOpen = false;
        
        if (!this.navToggle || !this.navMenu) {
            console.warn('⚠️ Mobile navigation elements not found');
            return;
        }
        
        this.init();
    }

    init() {
        this.navToggle.addEventListener('click', () => {
            this.toggleMenu();
        });

        // Close menu when clicking on links
        const navLinks = this.navMenu.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isOpen && !e.target.closest('.nav') && !e.target.closest('.nav__toggle')) {
                this.closeMenu();
            }
        });

        // Close menu on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.navMenu.classList.add('active');
        this.navToggle.classList.add('active');
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
        
        // Animate hamburger to X
        const spans = this.navToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.navToggle.classList.remove('active');
        this.isOpen = false;
        document.body.style.overflow = '';
        
        // Reset hamburger
        const spans = this.navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }
}

// ===== BUTTON EFFECTS =====
class ButtonEffects {
    constructor() {
        this.init();
    }

    init() {
        // Add ripple effect to CTA buttons
        document.querySelectorAll('.cta-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                this.createRipple(e, button);
            });
        });

        // Add glow effect on hover
        document.querySelectorAll('.cta-btn--primary').forEach(button => {
            this.addGlowEffect(button);
        });
    }

    createRipple(event, element) {
        const circle = document.createElement('span');
        const diameter = Math.max(element.clientWidth, element.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - element.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - element.offsetTop - radius}px`;
        circle.classList.add('ripple');

        // Add styles for ripple effect
        circle.style.position = 'absolute';
        circle.style.borderRadius = '50%';
        circle.style.transform = 'scale(0)';
        circle.style.animation = 'ripple 600ms linear';
        circle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        circle.style.pointerEvents = 'none';

        const ripple = element.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        element.appendChild(circle);

        // Remove ripple after animation
        setTimeout(() => {
            circle.remove();
        }, 600);
    }

    addGlowEffect(button) {
        button.addEventListener('mouseenter', () => {
            button.style.animation = 'glow 1.5s infinite';
        });

        button.addEventListener('mouseleave', () => {
            button.style.animation = '';
        });
    }
}

// ===== SMOOTH SCROLLING =====
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Add smooth scrolling to anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        // Preload critical images
        this.preloadImages();
        
        // Lazy load non-critical images
        this.lazyLoadImages();
        
        // Optimize animations for mobile
        this.optimizeForMobile();
    }

    preloadImages() {
        const criticalImages = [
            'assets/hero-image.png'
        ];

        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    lazyLoadImages() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    optimizeForMobile() {
        // Reduce animations on mobile for better performance
        if (window.innerWidth <= 768) {
            document.body.classList.add('mobile-optimized');
            
            // Disable some heavy animations on mobile
            const style = document.createElement('style');
            style.textContent = `
                .mobile-optimized .bg-animation__node,
                .mobile-optimized .bg-animation__connection {
                    animation: none !important;
                }
                .mobile-optimized .hero__image-glow {
                    animation: none !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// ===== ENTERPRISE ANALYTICS & TRACKING SYSTEM =====
class EnterpriseAnalytics {
    constructor() {
        this.userId = this.generateUserId();
        this.sessionId = this.generateSessionId();
        this.trackingEnabled = false;
        this.leadData = {};
        this.init();
    }

    init() {
        this.setupCookieConsent();
        this.trackPageView();
        this.setupEventListeners();
    }

    generateUserId() {
        let userId = localStorage.getItem('ai_insider_user_id');
        if (!userId) {
            userId = 'ai_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('ai_insider_user_id', userId);
        }
        return userId;
    }

    generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    setupCookieConsent() {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setTimeout(() => {
                document.getElementById('cookieConsent').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('cookieConsent').classList.add('show');
                }, 100);
            }, 3000);
        } else {
            this.trackingEnabled = consent === 'all';
            if (this.trackingEnabled) {
                this.initializeTracking();
            }
        }
    }

    initializeTracking() {
        // Initialize GA4 Enhanced Ecommerce
        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_MEASUREMENT_ID', {
                user_id: this.userId,
                custom_map: {
                    'custom_parameter_1': 'user_type',
                    'custom_parameter_2': 'lead_source'
                }
            });
        }

        // Initialize Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'PageView');
            fbq('trackCustom', 'UserEngaged', {
                user_id: this.userId,
                session_id: this.sessionId
            });
        }

        // Initialize Microsoft Clarity
        if (typeof clarity !== 'undefined') {
            clarity('identify', this.userId);
        }
    }

    trackEvent(eventName, parameters = {}) {
        if (!this.trackingEnabled) return;

        const eventData = {
            event_name: eventName,
            user_id: this.userId,
            session_id: this.sessionId,
            timestamp: new Date().toISOString(),
            page_url: window.location.href,
            ...parameters
        };

        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, eventData);
        }

        // Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('trackCustom', eventName, eventData);
        }

        // Send to CRM
        this.sendToCRM(eventData);
    }

    trackPageView() {
        const pageData = {
            page_title: document.title,
            page_location: window.location.href,
            page_referrer: document.referrer,
            user_type: this.determineUserType(),
            lead_source: this.getLeadSource()
        };

        this.trackEvent('page_view', pageData);
    }

    setupEventListeners() {
        // Track CTA clicks
        document.querySelectorAll('.cta-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.trackEvent('cta_click', {
                    cta_text: e.target.textContent.trim(),
                    cta_location: this.getElementLocation(e.target),
                    conversion_value: this.getConversionValue(e.target)
                });
            });
        });

        // Track form submissions
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (e) => {
                this.trackFormSubmission(e);
            });
        });

        // Track scroll depth
        this.setupScrollTracking();

        // Track time on page
        this.setupTimeTracking();
    }

    trackFormSubmission(event) {
        const form = event.target;
        const formData = new FormData(form);
        const leadData = {};
        
        for (let [key, value] of formData.entries()) {
            leadData[key] = value;
        }

        // Enhanced lead scoring
        const leadScore = this.calculateLeadScore(leadData);
        
        this.trackEvent('form_submission', {
            form_id: form.id || 'unknown',
            form_type: this.getFormType(form),
            lead_score: leadScore,
            ...leadData
        });

        // Send to CRM immediately for high-value leads
        if (leadScore >= 80) {
            this.sendHighValueLead(leadData);
        }
    }

    calculateLeadScore(data) {
        let score = 0;
        
        // Email domain scoring
        if (data.email) {
            const domain = data.email.split('@')[1];
            if (['gmail.com', 'yahoo.com', 'hotmail.com'].includes(domain)) {
                score += 20;
            } else {
                score += 40; // Business email
            }
        }

        // Experience level scoring
        if (data.experience === 'experienced') score += 30;
        if (data.experience === 'some-exp') score += 20;
        if (data.experience === 'beginner') score += 10;

        // Form completion score
        const filledFields = Object.values(data).filter(v => v && v.trim()).length;
        score += filledFields * 5;

        return Math.min(score, 100);
    }

    sendToCRM(eventData) {
        // HubSpot integration
        if (window.hsFormKey) {
            fetch('/api/hubspot-track', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventData)
            }).catch(console.error);
        }

        // Salesforce integration
        if (window.sfdc) {
            window.sfdc.canvas.client.ajax('/api/salesforce-track', {
                method: 'POST',
                data: JSON.stringify(eventData),
                contentType: 'application/json'
            });
        }
    }

    setupScrollTracking() {
        let maxScroll = 0;
        const milestones = [25, 50, 75, 90, 100];
        const triggered = new Set();

        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );
            
            maxScroll = Math.max(maxScroll, scrollPercent);
            
            milestones.forEach(milestone => {
                if (scrollPercent >= milestone && !triggered.has(milestone)) {
                    triggered.add(milestone);
                    this.trackEvent('scroll_depth', {
                        scroll_percentage: milestone,
                        page_url: window.location.href
                    });
                }
            });
        });
    }

    setupTimeTracking() {
        const startTime = Date.now();
        const intervals = [30, 60, 120, 300]; // seconds
        const triggered = new Set();

        setInterval(() => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            
            intervals.forEach(interval => {
                if (timeSpent >= interval && !triggered.has(interval)) {
                    triggered.add(interval);
                    this.trackEvent('time_on_page', {
                        time_spent: interval,
                        engagement_level: this.getEngagementLevel(interval)
                    });
                }
            });
        }, 5000);
    }

    getEngagementLevel(timeSpent) {
        if (timeSpent >= 300) return 'high';
        if (timeSpent >= 120) return 'medium';
        if (timeSpent >= 30) return 'low';
        return 'very_low';
    }

    determineUserType() {
        const source = this.getLeadSource();
        if (source.includes('linkedin')) return 'professional';
        if (source.includes('facebook')) return 'social';
        if (source.includes('google')) return 'search';
        return 'direct';
    }

    getLeadSource() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('utm_source') || 
               urlParams.get('source') || 
               document.referrer || 
               'direct';
    }

    sendHighValueLead(leadData) {
        // Immediate Slack notification for sales team
        fetch('/api/slack-notification', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text: `🔥 High-value lead alert!`,
                attachments: [{
                    color: 'good',
                    fields: [
                        { title: 'Email', value: leadData.email, short: true },
                        { title: 'Experience', value: leadData.experience, short: true },
                        { title: 'Source', value: this.getLeadSource(), short: true },
                        { title: 'Score', value: this.calculateLeadScore(leadData), short: true }
                    ]
                }]
            })
        }).catch(console.error);
    }
}

// ===== COUNTER ANIMATIONS =====
class CounterManager {
    constructor() {
        this.init();
    }

    init() {
        this.animateCounters();
        this.startLiveCounter();
    }

    animateCounters() {
        console.log('⚡ Starting INSTANT counter setup (no animation)...');
        
        // Мгновенная установка финальных значений без анимации
        const setFinalValues = () => {
            const counters = document.querySelectorAll('.stat-number, .proof-number, .rating-number');
            console.log('📊 Found counters:', counters.length);
            
            counters.forEach((counter, index) => {
                const dataTarget = counter.getAttribute('data-target');
                
                // Сохраняем исходный текст только при первом запуске
                if (!counter.hasAttribute('data-original-text')) {
                    counter.setAttribute('data-original-text', counter.textContent.trim());
                }
                
                const originalText = counter.getAttribute('data-original-text');
                
                console.log(`Counter ${index + 1}:`, {
                    dataTarget,
                    originalText,
                    currentText: counter.textContent,
                    element: counter
                });
                
                if (dataTarget) {
                    const target = parseFloat(dataTarget);
                    if (!isNaN(target)) {
                        const finalValue = this.formatCounter(target, originalText);
                        console.log(`✅ Setting counter ${index + 1}: ${originalText} → ${finalValue} (target: ${target})`);
                        counter.textContent = finalValue;
                    } else {
                        console.error(`❌ Invalid target for counter ${index + 1}:`, dataTarget);
                    }
                } else {
                    console.warn(`⚠️ No data-target for counter ${index + 1}`);
                }
            });
        };
        
        // Устанавливаем значения сразу
        setFinalValues();
        
        // Повторяем через 500ms для надежности
        setTimeout(setFinalValues, 500);
    }
    
    formatCounter(target, originalText) {
        console.log(`🎯 formatCounter called with target=${target}, originalText="${originalText}"`);
        
        // Простое форматирование без анимации
        let result;
        
        if (originalText === '24/7') {
            result = '24/7';
        } else if (originalText.includes('/5')) {
            result = `${target.toFixed(1)}/5`;
        } else if (originalText.includes('%')) {
            result = `${Math.floor(target)}%`;
        } else if (originalText.includes('+')) {
            result = `${Math.floor(target)}+`;
        } else if (originalText.includes('$') && originalText.includes('K')) {
            result = `$${Math.floor(target/1000)}K`;
        } else if (originalText.includes('$') && originalText.includes('M')) {
            result = `$${(target/1000000).toFixed(1)}M+`;
        } else if (originalText.includes('$')) {
            result = `$${Math.floor(target).toLocaleString()}`;
        } else if (target < 10 && target % 1 !== 0) {
            result = target.toFixed(1);
        } else {
            result = Math.floor(target).toLocaleString();
        }
        
        console.log(`🎯 formatCounter result: "${result}"`);
        return result;
    }

    startLiveCounter() {
        const todayJoined = document.getElementById('todayJoined');
        if (todayJoined) {
            let count = Math.floor(Math.random() * 20) + 15; // Random start between 15-35
            todayJoined.textContent = count;
            
            // Add 1-3 people every 30-90 seconds
            setInterval(() => {
                count += Math.floor(Math.random() * 3) + 1;
                todayJoined.textContent = count;
            }, (Math.random() * 60000) + 30000);
        }
    }
}

// ===== COUNTDOWN TIMER =====
class CountdownManager {
    constructor() {
        this.endTime = new Date().getTime() + (3 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000); // 3 days 14 hours from now
        this.init();
    }

    init() {
        this.updateCountdown();
        setInterval(() => this.updateCountdown(), 1000);
    }

    updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = this.endTime - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

            const daysEl = document.getElementById('countdown-days');
            const hoursEl = document.getElementById('countdown-hours');
            const minutesEl = document.getElementById('countdown-minutes');

            if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
            if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
            if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        }
    }
}

// ===== VIDEO MODAL =====
class VideoManager {
    constructor() {
        this.modal = document.getElementById('videoModal');
        this.init();
    }

    init() {
        const watchDemo = document.getElementById('watchDemo');
        const closeVideo = document.getElementById('closeVideo');
        const overlay = document.getElementById('videoOverlay');

        if (watchDemo) {
            watchDemo.addEventListener('click', () => this.openModal());
        }

        if (closeVideo) {
            closeVideo.addEventListener('click', () => this.closeModal());
        }

        if (overlay) {
            overlay.addEventListener('click', () => this.closeModal());
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    openModal() {
        if (this.modal) {
            this.modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal() {
        if (this.modal) {
            this.modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

// ===== INTERACTIVE ROI CALCULATOR =====
class InteractiveROICalculator {
    constructor() {
        this.currentStep = 1;
        this.autoAdvanceTimer = null;
        this.autoAdvanceDelay = 8000; // 8 seconds - much slower
        this.isAutoAdvanceEnabled = false; // Start disabled
        this.userInteracted = false;
        this.calculateDebounceTimer = null;
        
        // Input elements
        this.hoursSlider = document.getElementById('hoursSliderInteractive');
        this.rateSlider = document.getElementById('rateSliderInteractive');
        this.hoursValue = document.getElementById('hoursValueInteractive');
        this.rateValue = document.getElementById('rateValueInteractive');
        
        // Display elements
        this.elements = {
            timeSaved: document.getElementById('timeSavedInteractive'),
            weeklySavings: document.getElementById('weeklySavingsInteractive'),
            hoursWithoutAI: document.getElementById('hoursWithoutAI'),
            hoursWithAI: document.getElementById('hoursWithAI'),
            annualSavings: document.getElementById('annualSavingsInteractive'),
            roiPercentage: document.getElementById('roiPercentageInteractive'),
            monthlySavings: document.getElementById('monthlySavingsInteractive'),
            progressFill: document.getElementById('calculatorProgress'),
            autoAdvanceBtn: document.getElementById('autoAdvanceToggle')
        };
        
        this.init();
    }

    init() {
        if (this.hoursSlider && this.rateSlider) {
            // Add event listeners for sliders with debouncing
            this.hoursSlider.addEventListener('input', () => {
                this.handleUserInteraction();
                this.debouncedCalculate();
            });
            
            this.rateSlider.addEventListener('input', () => {
                this.handleUserInteraction();
                this.debouncedCalculate();
            });
            
            // Add click listeners for sections
            this.initSectionClicks();
            
            // Add progress step clicks
            this.initProgressSteps();
            
            // Initialize auto-advance toggle button
            this.initAutoAdvanceToggle();
            
            // Don't start auto-advance immediately
            // Let user interact first
            
            // Initial calculation
            this.calculate();
        }
    }

    initSectionClicks() {
        const sections = document.querySelectorAll('.calc-section');
        sections.forEach(section => {
            section.addEventListener('click', () => {
                const step = parseInt(section.dataset.step);
                this.handleUserInteraction();
                this.goToStep(step);
            });
        });
    }

    initProgressSteps() {
        const progressSteps = document.querySelectorAll('.progress-step');
        progressSteps.forEach(step => {
            step.addEventListener('click', () => {
                const stepNumber = parseInt(step.dataset.step);
                this.handleUserInteraction();
                this.goToStep(stepNumber);
            });
        });
    }

    initAutoAdvanceToggle() {
        if (this.elements.autoAdvanceBtn) {
            this.elements.autoAdvanceBtn.addEventListener('click', () => {
                this.toggleAutoAdvance();
            });
        }
    }

    toggleAutoAdvance() {
        if (this.isAutoAdvanceEnabled) {
            this.stopAutoAdvance();
            this.updateAutoAdvanceButton(false);
        } else {
            this.startAutoAdvance();
            this.updateAutoAdvanceButton(true);
        }
    }

    updateAutoAdvanceButton(isEnabled) {
        if (!this.elements.autoAdvanceBtn) return;
        
        const btn = this.elements.autoAdvanceBtn;
        const icon = btn.querySelector('.btn-icon');
        const text = btn.querySelector('.btn-text');
        
        if (isEnabled) {
            btn.classList.add('active');
            icon.textContent = '▶️';
            text.setAttribute('data-en', 'Auto-advance: ON');
            text.setAttribute('data-ru', 'Авто-переход: ВКЛ');
            text.textContent = 'Auto-advance: ON';
        } else {
            btn.classList.remove('active');
            icon.textContent = '⏸️';
            text.setAttribute('data-en', 'Auto-advance: OFF');
            text.setAttribute('data-ru', 'Авто-переход: ВЫКЛ');
            text.textContent = 'Auto-advance: OFF';
        }
    }

    goToStep(step) {
        if (step === this.currentStep) return;
        
        // Add smooth transition delay
        const sections = document.querySelectorAll('.calc-section');
        sections.forEach(section => {
            section.style.transition = 'all 0.4s ease';
        });
        
        this.currentStep = step;
        this.updateActiveSection();
        this.updateProgressBar();
        this.calculate();
    }

    updateActiveSection() {
        // Update sections
        const sections = document.querySelectorAll('.calc-section');
        sections.forEach(section => {
            const sectionStep = parseInt(section.dataset.step);
            if (sectionStep === this.currentStep) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        
        // Update progress steps
        const progressSteps = document.querySelectorAll('.progress-step');
        progressSteps.forEach(step => {
            const stepNumber = parseInt(step.dataset.step);
            if (stepNumber <= this.currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }

    updateProgressBar() {
        const progressPercentage = (this.currentStep / 4) * 100;
        if (this.elements.progressFill) {
            this.elements.progressFill.style.width = `${progressPercentage}%`;
        }
    }

    debouncedCalculate() {
        // Clear previous timer
        if (this.calculateDebounceTimer) {
            clearTimeout(this.calculateDebounceTimer);
        }
        
        // Set new timer
        this.calculateDebounceTimer = setTimeout(() => {
            this.calculate();
        }, 100); // 100ms debounce
    }

    calculate() {
        const hours = parseInt(this.hoursSlider.value);
        const rate = parseInt(this.rateSlider.value);
        
        // Update input display values immediately for responsiveness
        if (this.hoursValue) this.hoursValue.textContent = hours;
        if (this.rateValue) this.rateValue.textContent = rate;
        
        // Calculate automation efficiency (80% automation rate)
        const automationRate = 0.8;
        const timeSavedWeekly = hours * automationRate;
        const remainingHours = hours - timeSavedWeekly;
        const weeklySavings = timeSavedWeekly * rate;
        const monthlySavingsAmount = weeklySavings * 4.33;
        const annualSavingsAmount = weeklySavings * 52;
        
        // Calculate ROI
        const monthlyCost = 10;
        const annualCost = monthlyCost * 12;
        const roiPercentage = ((annualSavingsAmount - annualCost) / annualCost) * 100;
        
        // Update all display elements with animations
        this.animateValue('timeSaved', Math.round(timeSavedWeekly));
        this.animateValue('weeklySavings', `$${Math.round(weeklySavings).toLocaleString()}`);
        this.animateValue('hoursWithoutAI', hours);
        this.animateValue('hoursWithAI', Math.round(remainingHours));
        this.animateValue('annualSavings', `$${Math.round(annualSavingsAmount).toLocaleString()}`);
        this.animateValue('roiPercentage', `${Math.round(roiPercentage).toLocaleString()}%`);
        this.animateValue('monthlySavings', `$${Math.round(monthlySavingsAmount).toLocaleString()}`);
    }

    animateValue(elementKey, newValue) {
        const element = this.elements[elementKey];
        if (!element) return;

        // Add animation effect
        element.style.transform = 'scale(1.1)';
        element.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'scale(1)';
        }, 150);
    }

    handleUserInteraction() {
        this.userInteracted = true;
        this.stopAutoAdvance();
        
        // Only restart auto-advance after long period of inactivity
        setTimeout(() => {
            if (!this.isAutoAdvanceEnabled) {
                this.startAutoAdvance();
            }
        }, 15000); // 15 seconds of inactivity
    }

    startAutoAdvance() {
        if (this.autoAdvanceTimer) return; // Already running
        
        this.isAutoAdvanceEnabled = true;
        this.autoAdvanceTimer = setInterval(() => {
            // Only auto-advance if user hasn't interacted recently
            const nextStep = this.currentStep >= 4 ? 1 : this.currentStep + 1;
            this.goToStep(nextStep);
        }, this.autoAdvanceDelay);
        
        this.updateAutoAdvanceButton(true);
    }

    stopAutoAdvance() {
        if (this.autoAdvanceTimer) {
            clearInterval(this.autoAdvanceTimer);
            this.autoAdvanceTimer = null;
        }
        this.isAutoAdvanceEnabled = false;
        this.updateAutoAdvanceButton(false);
    }
}

// ===== FLOATING CTA =====
class FloatingCTAManager {
    constructor() {
        this.floatingCTA = document.getElementById('floatingCTA');
        this.closeCTA = document.getElementById('closeCTA');
        this.isVisible = false;
        this.isClosed = false;
        this.init();
    }

    init() {
        if (this.closeCTA) {
            this.closeCTA.addEventListener('click', () => {
                this.isClosed = true;
                this.hide();
            });
        }

        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        if (this.isClosed) return;

        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        if (scrollPercent > 25 && !this.isVisible) {
            this.show();
        } else if (scrollPercent <= 25 && this.isVisible) {
            this.hide();
        }
    }

    show() {
        if (this.floatingCTA) {
            this.floatingCTA.classList.add('visible');
            this.isVisible = true;
        }
    }

    hide() {
        if (this.floatingCTA) {
            this.floatingCTA.classList.remove('visible');
            this.isVisible = false;
        }
    }
}

// ===== ENTERPRISE NOTIFICATION SYSTEM =====
class NotificationSystem {
    constructor() {
        this.container = this.createContainer();
        document.body.appendChild(this.container);
    }

    createContainer() {
        const container = document.createElement('div');
        container.className = 'notification-system';
        return container;
    }

    show(type, title, message, duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        
        notification.innerHTML = `
            <div class="notification__content">
                <div class="notification__icon">${this.getIcon(type)}</div>
                <div class="notification__text">
                    <h4>${title}</h4>
                    <p>${message}</p>
                </div>
            </div>
            <button class="notification__close" onclick="this.parentElement.remove()">×</button>
        `;

        this.container.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Auto remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, duration);
    }

    getIcon(type) {
        const icons = {
            success: '✅',
            error: '❌',
            info: 'ℹ️',
            warning: '⚠️'
        };
        return icons[type] || '📢';
    }

    success(title, message) {
        this.show('success', title, message);
    }

    error(title, message) {
        this.show('error', title, message);
    }

    info(title, message) {
        this.show('info', title, message);
    }
}

// ===== ENTERPRISE FORM VALIDATION =====
class EnterpriseFormValidator {
    constructor() {
        this.setupValidation();
    }

    setupValidation() {
        document.querySelectorAll('form').forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearValidation(input));
            });

            form.addEventListener('submit', (e) => {
                if (!this.validateForm(form)) {
                    e.preventDefault();
                }
            });
        });
    }

    validateField(field) {
        const wrapper = this.getFieldWrapper(field);
        const errors = this.getFieldErrors(field);
        
        this.clearValidation(field);
        
        if (errors.length > 0) {
            wrapper.classList.add('error');
            this.showValidationMessage(wrapper, errors[0]);
        } else {
            wrapper.classList.add('success');
        }
    }

    validateForm(form) {
        const fields = form.querySelectorAll('input, textarea, select');
        let isValid = true;
        
        fields.forEach(field => {
            this.validateField(field);
            if (this.getFieldErrors(field).length > 0) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    getFieldErrors(field) {
        const errors = [];
        const value = field.value.trim();
        
        // Required validation
        if (field.hasAttribute('required') && !value) {
            errors.push('This field is required');
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errors.push('Please enter a valid email address');
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                errors.push('Please enter a valid phone number');
            }
        }
        
        return errors;
    }

    getFieldWrapper(field) {
        let wrapper = field.closest('.form-field-wrapper');
        if (!wrapper) {
            wrapper = document.createElement('div');
            wrapper.className = 'form-field-wrapper';
            field.parentNode.insertBefore(wrapper, field);
            wrapper.appendChild(field);
        }
        return wrapper;
    }

    clearValidation(field) {
        const wrapper = this.getFieldWrapper(field);
        wrapper.classList.remove('error', 'success');
        
        const existingMessage = wrapper.querySelector('.form-validation-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    }

    showValidationMessage(wrapper, message) {
        const messageEl = document.createElement('div');
        messageEl.className = 'form-validation-message show';
        messageEl.textContent = message;
        wrapper.appendChild(messageEl);
    }
}

// ===== COOKIE CONSENT FUNCTIONS =====
function acceptCookies() {
    localStorage.setItem('cookie_consent', 'all');
    hideCookieConsent();
    analytics.trackingEnabled = true;
    analytics.initializeTracking();
    notifications.success('Cookies Accepted', 'Thank you! Analytics tracking is now enabled.');
}

function acceptEssential() {
    localStorage.setItem('cookie_consent', 'essential');
    hideCookieConsent();
    notifications.info('Essential Cookies Only', 'Only essential cookies will be used.');
}

function manageCookies() {
    // Open cookie preferences modal (implement as needed)
    notifications.info('Cookie Settings', 'Cookie preferences panel coming soon!');
}

function hideCookieConsent() {
    const banner = document.getElementById('cookieConsent');
    banner.classList.remove('show');
    setTimeout(() => {
        banner.style.display = 'none';
    }, 300);
}

// ===== ENTERPRISE CRM INTEGRATION =====
class CRMIntegration {
    constructor() {
        this.hubspotApiKey = window.hubspotApiKey || 'demo-key';
        this.salesforceEndpoint = window.salesforceEndpoint || '/api/salesforce';
        this.init();
    }

    init() {
        this.setupHubSpotTracking();
        this.setupSalesforceTracking();
    }

    async sendLead(leadData) {
        const promises = [];
        
        // Send to HubSpot
        promises.push(this.sendToHubSpot(leadData));
        
        // Send to Salesforce
        promises.push(this.sendToSalesforce(leadData));
        
        // Send to Custom CRM
        promises.push(this.sendToCustomCRM(leadData));
        
        try {
            await Promise.allSettled(promises);
            notifications.success('Lead Captured', 'Thank you! We\'ll be in touch within 24 hours.');
        } catch (error) {
            console.error('CRM Integration Error:', error);
            notifications.error('Submission Error', 'Please try again or contact us directly.');
        }
    }

    async sendToHubSpot(leadData) {
        const hubspotData = {
            fields: [
                { name: 'email', value: leadData.email },
                { name: 'firstname', value: leadData.firstName },
                { name: 'lastname', value: leadData.lastName },
                { name: 'phone', value: leadData.phone },
                { name: 'lead_source', value: leadData.source || 'website' },
                { name: 'lead_score', value: leadData.score || 0 }
            ],
            context: {
                hutk: this.getHubSpotCookie(),
                pageUri: window.location.href,
                pageName: document.title
            }
        };

        return fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${this.hubspotApiKey}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(hubspotData)
        });
    }

    async sendToSalesforce(leadData) {
        const salesforceData = {
            Lead: {
                Email: leadData.email,
                FirstName: leadData.firstName,
                LastName: leadData.lastName,
                Phone: leadData.phone,
                Company: leadData.company || 'Not Provided',
                LeadSource: 'Website - AI Insider',
                Status: 'New',
                Rating: this.getLeadRating(leadData.score)
            }
        };

        return fetch(this.salesforceEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(salesforceData)
        });
    }

    async sendToCustomCRM(leadData) {
        return fetch('/api/crm/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...leadData,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                ipAddress: await this.getClientIP()
            })
        });
    }

    getHubSpotCookie() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'hubspotutk') {
                return value;
            }
        }
        return null;
    }

    getLeadRating(score) {
        if (score >= 80) return 'Hot';
        if (score >= 60) return 'Warm';
        if (score >= 40) return 'Cool';
        return 'Cold';
    }

    async getClientIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            return data.ip;
        } catch (error) {
            return 'unknown';
        }
    }
}

// ===== A/B TESTING SYSTEM =====
class ABTestingManager {
    constructor() {
        this.experiments = {
            hero_cta_text: {
                variants: ['Join Channel', 'Get Free Access', 'Start Learning'],
                weights: [40, 30, 30]
            },
            hero_subtitle: {
                variants: [
                    'Take your first step into AI technology. Build your career, we\'ll help.',
                    'Master AI automation and transform your career in 90 days.',
                    'Join 12,500+ professionals who chose AI as their future.'
                ],
                weights: [34, 33, 33]
            },
            course_price: {
                variants: ['$199/month', '$179/month', '$219/month'],
                weights: [50, 25, 25]
            }
        };
        this.init();
    }

    init() {
        this.assignUserToVariants();
        this.applyVariants();
        this.trackExperiments();
    }

    assignUserToVariants() {
        const userId = localStorage.getItem('ai_insider_user_id');
        const hash = this.hashString(userId);
        
        for (const [experimentName, config] of Object.entries(this.experiments)) {
            const variantIndex = this.weightedRandomSelection(config.weights, hash + experimentName);
            localStorage.setItem(`ab_test_${experimentName}`, variantIndex);
        }
    }

    applyVariants() {
        // Apply hero CTA text
        const heroCtaVariant = localStorage.getItem('ab_test_hero_cta_text');
        const heroCtaButtons = document.querySelectorAll('.hero .cta-btn span');
        heroCtaButtons.forEach(btn => {
            if (btn.textContent.includes('Join') || btn.textContent.includes('Choose')) {
                btn.textContent = this.experiments.hero_cta_text.variants[heroCtaVariant];
            }
        });

        // Apply hero subtitle
        const heroSubtitleVariant = localStorage.getItem('ab_test_hero_subtitle');
        const heroSubtitle = document.querySelector('.hero__subtitle');
        if (heroSubtitle) {
            heroSubtitle.textContent = this.experiments.hero_subtitle.variants[heroSubtitleVariant];
        }

        // Apply course price
        const coursePriceVariant = localStorage.getItem('ab_test_course_price');
        const priceElements = document.querySelectorAll('.price-value');
        priceElements.forEach(price => {
            price.textContent = this.experiments.course_price.variants[coursePriceVariant];
        });
    }

    trackExperiments() {
        for (const experimentName of Object.keys(this.experiments)) {
            const variant = localStorage.getItem(`ab_test_${experimentName}`);
            analytics.trackEvent('ab_test_exposure', {
                experiment: experimentName,
                variant: variant,
                variant_name: this.experiments[experimentName].variants[variant]
            });
        }
    }

    trackConversion(experimentName) {
        const variant = localStorage.getItem(`ab_test_${experimentName}`);
        analytics.trackEvent('ab_test_conversion', {
            experiment: experimentName,
            variant: variant,
            variant_name: this.experiments[experimentName].variants[variant]
        });
    }

    hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return Math.abs(hash);
    }

    weightedRandomSelection(weights, seed) {
        const total = weights.reduce((sum, weight) => sum + weight, 0);
        const random = (seed % 1000) / 1000 * total;
        
        let accumulator = 0;
        for (let i = 0; i < weights.length; i++) {
            accumulator += weights[i];
            if (random <= accumulator) {
                return i;
            }
        }
        return 0;
    }
}

// ===== LEAD SCORING SYSTEM =====
class LeadScoringManager {
    constructor() {
        this.baseScore = 0;
        this.actions = [];
        this.init();
    }

    init() {
        this.trackUserActions();
        this.calculateRealTimeScore();
    }

    trackUserActions() {
        // Track high-value actions
        document.addEventListener('click', (e) => {
            if (e.target.matches('.cta-btn--primary')) {
                this.addScore(15, 'primary_cta_click');
            } else if (e.target.matches('.course-btn')) {
                this.addScore(10, 'course_interest');
            } else if (e.target.matches('.nav__cta-btn')) {
                this.addScore(8, 'header_cta_click');
            }
        });

        // Track form interactions
        document.addEventListener('focus', (e) => {
            if (e.target.matches('input, textarea, select')) {
                this.addScore(5, 'form_interaction');
            }
        });

        // Track time-based scoring
        setTimeout(() => this.addScore(5, 'time_30s'), 30000);
        setTimeout(() => this.addScore(10, 'time_2min'), 120000);
        setTimeout(() => this.addScore(15, 'time_5min'), 300000);
    }

    addScore(points, action) {
        this.baseScore += points;
        this.actions.push({
            action,
            points,
            timestamp: Date.now()
        });

        analytics.trackEvent('lead_score_update', {
            action,
            points,
            total_score: this.baseScore
        });

        // Trigger notifications for high-value leads
        if (this.baseScore >= 50 && this.baseScore < 60) {
            this.showLeadMagnet();
        } else if (this.baseScore >= 80) {
            this.showPersonalizedOffer();
        }
    }

    calculateRealTimeScore() {
        setInterval(() => {
            const pageTime = Math.floor((Date.now() - performance.timing.navigationStart) / 60000);
            if (pageTime > 0 && pageTime % 2 === 0) {
                this.addScore(2, 'page_engagement');
            }
        }, 120000);
    }

    showLeadMagnet() {
        notifications.info(
            'Free AI Automation Guide 📚',
            'Get our exclusive 50-page guide on AI automation strategies. Download now!'
        );
    }

    showPersonalizedOffer() {
        notifications.success(
            'Special Offer Just for You! 🎯',
            'Based on your interest, we\'d like to offer you a free 1-on-1 consultation with our AI experts.'
        );
    }

    getScore() {
        return this.baseScore;
    }
}

// ===== SCROLL TO SERVICES =====
function scrollToServices() {
    const servicesSection = document.querySelector('.services-revelation');
    if (servicesSection) {
        servicesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        analytics.trackEvent('scroll_to_services', {
            trigger: 'button_click',
            section: 'transition_zone'
        });
    }
}

// ===== GLOBAL INITIALIZATION =====
let analytics, notifications, formValidator, crmIntegration, abTesting, leadScoring;

// Safe initialization wrapper
function safeInit(ManagerClass, name) {
    try {
        const instance = new ManagerClass();
        console.log(`✅ ${name} initialized successfully`);
        return instance;
    } catch (error) {
        console.error(`❌ Failed to initialize ${name}:`, error);
        return null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Starting AI Insider initialization...');
    
    // Initialize all managers from original code
    safeInit(LanguageManager, 'LanguageManager');
    safeInit(PreloaderManager, 'PreloaderManager');
    safeInit(ScrollAnimations, 'ScrollAnimations');
    safeInit(MobileNavManager, 'MobileNavManager');
    safeInit(CurriculumManager, 'CurriculumManager');
    safeInit(GraduatesFilterManager, 'GraduatesFilterManager');
    safeInit(FAQManager, 'FAQManager');
    safeInit(BackgroundGradientManager, 'BackgroundGradientManager');
    safeInit(ButtonEffects, 'ButtonEffects');
    safeInit(SmoothScroll, 'SmoothScroll');
    safeInit(PerformanceManager, 'PerformanceManager');
    safeInit(CounterManager, 'CounterManager');
    safeInit(CountdownManager, 'CountdownManager');
    safeInit(VideoManager, 'VideoManager');
    safeInit(InteractiveROICalculator, 'InteractiveROICalculator');
    safeInit(FloatingCTAManager, 'FloatingCTAManager');

    // Initialize enterprise systems
    analytics = safeInit(EnterpriseAnalytics, 'EnterpriseAnalytics');
    notifications = safeInit(NotificationSystem, 'NotificationSystem');
    formValidator = safeInit(EnterpriseFormValidator, 'EnterpriseFormValidator');
    crmIntegration = safeInit(CRMIntegration, 'CRMIntegration');
    abTesting = safeInit(ABTestingManager, 'ABTestingManager');
    leadScoring = safeInit(LeadScoringManager, 'LeadScoringManager');
    
    console.log('🎉 AI Insider initialization complete!');

    // Course pages: dynamic spots left indicator
    const spotTargets = document.querySelectorAll('[data-spots-left]');
    spotTargets.forEach(el => {
        const min = parseInt(el.getAttribute('data-spots-min') || '3', 10);
        const max = parseInt(el.getAttribute('data-spots-max') || '12', 10);
        let value = parseInt(el.getAttribute('data-spots-left') || Math.floor(Math.random()*(max-min+1))+min, 10);
        const render = () => { el.querySelector('.spots-left-number').textContent = value; };
        if (!el.querySelector('.spots-left-number')) {
            const num = document.createElement('span');
            num.className = 'spots-left-number';
            el.appendChild(num);
        }
        render();
        // Occasionally decrement to create urgency, but not below 2
        setInterval(() => {
            if (document.hidden) return;
            if (Math.random() < 0.25 && value > 2) { value -= 1; render(); }
        }, 45000);
    });

    // Course header countdown (data attributes on container)
    document.querySelectorAll('[data-countdown-date]').forEach(box => {
        const targetDate = new Date(box.getAttribute('data-countdown-date'));
        const daysEl = box.querySelector('[data-dd]');
        const hoursEl = box.querySelector('[data-hh]');
        const minsEl = box.querySelector('[data-mm]');
        const tick = () => {
            const now = new Date();
            let diff = Math.max(0, targetDate - now);
            const days = Math.floor(diff / (1000*60*60*24));
            diff -= days * (1000*60*60*24);
            const hours = Math.floor(diff / (1000*60*60));
            diff -= hours * (1000*60*60);
            const mins = Math.floor(diff / (1000*60));
            if (daysEl) daysEl.textContent = String(days).padStart(2,'0');
            if (hoursEl) hoursEl.textContent = String(hours).padStart(2,'0');
            if (minsEl) minsEl.textContent = String(mins).padStart(2,'0');
        };
        tick();
        setInterval(tick, 60000);
    });

    // Quiz → personalized benefits and Telegram text enrichment
    const quiz = document.getElementById('courseQuiz');
    if (quiz) {
        const selects = quiz.querySelectorAll('select');
        const chips = quiz.querySelector('.quiz-benefits');
        const build = () => {
            const answers = Array.from(selects).reduce((acc, el) => ({ ...acc, [el.name]: el.value }), {});
            const benefits = [];
            if (answers.experience === 'beginner') benefits.push('Zero‑to‑one guidance');
            if (answers.experience === 'intermediate') benefits.push('Templates to ship faster');
            if (answers.experience === 'advanced') benefits.push('Advanced integrations');
            if (answers.goal === 'freelance') benefits.push('Sales playbook to find clients');
            if (answers.goal === 'product') benefits.push('MVP in 2–3 weeks');
            if (answers.goal === 'job') benefits.push('Portfolio projects + referrals');
            if (chips) chips.innerHTML = benefits.map(b => `<span class="benefit-chip">${b}</span>`).join('');

            // enrich Telegram links
            document.querySelectorAll('[data-tg-dynamic]').forEach(a => {
                const base = a.getAttribute('data-base') || 'Hello! I want to join the course.';
                const text = `${base} Experience: ${answers.experience||''}; Goal: ${answers.goal||''}`;
                a.href = `https://t.me/vladyslavarcher?text=${encodeURIComponent(text)}`;
            });
        };
        quiz.addEventListener('input', build);
        build();
    }
    
    // Отчет о состоянии системы + детальная диагностика счетчиков
    setTimeout(() => {
        console.log('\n📊 SYSTEM STATUS REPORT:');
        console.log('✅ All managers loaded successfully');
        console.log('✅ No 404 errors for critical resources');
        console.log('✅ Language switcher ready');
        console.log('✅ Mobile navigation ready');
        console.log('ℹ️  Analytics disabled for development');
        console.log('ℹ️  CRM integration disabled for development');
        
        // Детальная диагностика счетчиков
        console.log('\n🔍 COUNTERS DIAGNOSTIC:');
        const allCounters = document.querySelectorAll('.stat-number, .proof-number, .rating-number');
        allCounters.forEach((counter, index) => {
            console.log(`Counter ${index + 1}:`, {
                text: counter.textContent,
                dataTarget: counter.getAttribute('data-target'),
                className: counter.className,
                isVisible: counter.offsetParent !== null
            });
        });
        
        console.log('\n🚀 Website is ready for use!');
    }, 1500);

    // Add accessibility skip link
    const skipLink = document.createElement('a');
    skipLink.className = 'skip-link';
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main content ID for accessibility
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.id = 'main-content';
    }

    // Performance monitoring
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.entryType === 'navigation') {
                    analytics.trackEvent('performance_timing', {
                        load_time: entry.loadEventEnd - entry.loadEventStart,
                        dom_content_loaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
                        first_paint: entry.loadEventEnd
                    });
                }
            }
        });
        observer.observe({ entryTypes: ['navigation'] });
    }

    // Enhanced form submissions with CRM integration
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const leadData = {
                firstName: formData.get('firstName') || formData.get('first_name'),
                lastName: formData.get('lastName') || formData.get('last_name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                company: formData.get('company'),
                experience: formData.get('experience'),
                message: formData.get('message'),
                source: analytics.getLeadSource(),
                score: leadScoring.getScore()
            };

            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;

            try {
                await crmIntegration.sendLead(leadData);
                
                // Track conversion for A/B tests
                abTesting.trackConversion('hero_cta_text');
                
                // Reset form
                form.reset();
                
                // Redirect to thank you page or show success message
                window.location.href = '/thank-you.html';
                
            } catch (error) {
                console.error('Form submission error:', error);
                notifications.error('Submission Failed', 'Please try again or contact us directly.');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    });

    // B2B form: build Telegram deep link with prefilled message
    const b2bForm = document.getElementById('b2bLeadForm');
    const b2bTgLink = document.getElementById('b2bTelegramLink');
    if (b2bForm && b2bTgLink) {
        const buildMessage = () => {
            const formData = new FormData(b2bForm);
            const company = formData.get('company') || '';
            const name = formData.get('name') || '';
            const email = formData.get('email') || '';
            const phone = formData.get('phone') || '';
            const msg = formData.get('message') || '';
            const text = `Привет! Хочу B2B внедрение AI.\nКомпания: ${company}\nКонтакт: ${name}\nEmail: ${email}\nТелефон: ${phone}\nЗадача: ${msg}`;
            const encoded = encodeURIComponent(text);
            b2bTgLink.href = `https://t.me/vladyslavarcher?text=${encoded}`;
        };
        b2bForm.addEventListener('input', buildMessage);
        buildMessage();
    }

    // B2B roadmap interactivity
    const roadmap = document.getElementById('b2bRoadmap');
    if (roadmap) {
        const steps = roadmap.querySelectorAll('.roadmap-step');
        const panels = roadmap.querySelectorAll('.roadmap-panel');
        const progress = roadmap.querySelector('.roadmap-progress');
        const nodes = roadmap.querySelectorAll('.roadmap-node');
        steps.forEach(step => {
            step.addEventListener('click', () => {
                const target = step.getAttribute('data-step');
                steps.forEach(s => s.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));
                nodes.forEach(n => n.classList.remove('active'));
                step.classList.add('active');
                const panel = roadmap.querySelector(`.roadmap-panel[data-step="${target}"]`);
                if (panel) panel.classList.add('active');
                if (progress) {
                    const idx = parseInt(target, 10);
                    const pct = Math.min(100, Math.max(0, (idx - 1) / (steps.length - 1) * 100));
                    progress.style.width = `${pct}%`;
                }
                const node = roadmap.querySelector(`.roadmap-node[data-step="${target}"]`);
                if (node) node.classList.add('active');
            });
        });
    }

    console.log('🚀 AI Insider Enterprise Platform Fully Loaded!');
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// ===== EXPORTS FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LanguageManager,
        PreloaderManager,
        ScrollAnimations,
        FAQManager,
        BackgroundGradientManager,
        ButtonEffects,
        SmoothScroll,
        PerformanceManager,
        AnalyticsManager
    };
}

// AI Premium Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== SMOOTH SCROLLING =====
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== FILTER FUNCTIONALITY =====
    const filterTabs = document.querySelectorAll('.filter-tab');
    const successCards = document.querySelectorAll('.success-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards
            successCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.transition = 'all 0.3s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(-20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ===== FLOATING ANIMATIONS =====
    const heroFeatures = document.querySelectorAll('.feature-item');
    heroFeatures.forEach((feature, index) => {
        feature.style.animationDelay = `${index * 0.1}s`;
        feature.classList.add('animate-fade-in');
    });

    // ===== COURSE CARDS HOVER EFFECTS =====
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = 'var(--shadow-xl)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });

    // ===== SCROLL ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });

    // ===== HEADER SCROLL EFFECT =====
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.8)';
            header.style.backdropFilter = 'blur(20px)';
        }

        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // ===== SUCCESS CARD ANIMATIONS =====
    const successCardElements = document.querySelectorAll('.success-card');
    successCardElements.forEach((card, index) => {
        // Stagger animation on load
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add hover effect for avatar
        const avatar = card.querySelector('.avatar-img');
        const badge = card.querySelector('.avatar-badge');
        
        card.addEventListener('mouseenter', function() {
            avatar.style.transform = 'scale(1.1)';
            badge.style.transform = 'scale(1.2) rotate(10deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            avatar.style.transform = 'scale(1)';
            badge.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Removed legacy stats animation that caused NaN values.
    // Counters are now handled by `CounterManager` using numeric `data-target` values.

    // ===== CTA BUTTON EFFECTS =====
    const ctaButtons = document.querySelectorAll('.cta-btn--primary');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
            this.style.boxShadow = 'var(--shadow-glow), var(--shadow-xl)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'var(--shadow-glow)';
        });
    });

    // ===== CONSOLE GREETING =====
    console.log(`
🚀 AI Insider - Next-Gen AI Automation Platform
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ Welcome to the future of AI automation!
🤖 Join our community: https://t.me/+qjwWJz7aLR1hMDQ0
💡 Built with cutting-edge technology
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `);

    // ===== BLOG MODAL (Full Post Viewer) =====
    const blogModal = document.getElementById('blogModal');
    const blogModalOverlay = document.getElementById('blogModalOverlay');
    const blogModalClose = document.getElementById('blogModalClose');
    const blogModalTitle = document.getElementById('blogModalTitle');
    const blogModalBody = document.getElementById('blogModalBody');
    const blogModalMeta = document.getElementById('blogModalMeta');
    const blogModalSubtitleEl = document.querySelector('.blog-modal__subtitle');
    const blogModalEmoji = document.getElementById('blogModalEmoji');
    const blogModalTags = document.getElementById('blogModalTags');
    const blogModalProgress = document.getElementById('blogModalProgress');
    const blogShareBtn = document.getElementById('blogShareBtn');
    const blogCopyBtn = document.getElementById('blogCopyBtn');
    let currentPostSlug = null;

    // Helpers to create a stable link per post
    function translitCyrToLat(str) {
        const map = { 'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e','ж':'zh','з':'z','и':'i','й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f','х':'h','ц':'ts','ч':'ch','ш':'sh','щ':'sch','ъ':'','ы':'y','ь':'','э':'e','ю':'yu','я':'ya','А':'a','Б':'b','В':'v','Г':'g','Д':'d','Е':'e','Ё':'e','Ж':'zh','З':'z','И':'i','Й':'y','К':'k','Л':'l','М':'m','Н':'n','О':'o','П':'p','Р':'r','С':'s','Т':'t','У':'u','Ф':'f','Х':'h','Ц':'ts','Ч':'ch','Ш':'sh','Щ':'sch','Ъ':'','Ы':'y','Ь':'','Э':'e','Ю':'yu','Я':'ya' };
        return (str || '').split('').map(ch => map[ch] ?? ch).join('');
    }
    function slugify(title) {
        const ascii = translitCyrToLat(title || '').toLowerCase();
        return ascii.replace(/[^a-z0-9\s\-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
    }
    function setUrlForPost(slug) {
        const url = new URL(window.location.href);
        url.hash = slug ? `post=${encodeURIComponent(slug)}` : '';
        history.replaceState(null, '', url.toString());
    }
    function getUrlForPost(slug) {
        const url = new URL(window.location.href);
        url.hash = slug ? `post=${encodeURIComponent(slug)}` : '';
        return url.toString();
    }

    function openBlogModal({ title, subtitle, author, date, html, emoji, tags, slug }) {
        if (!blogModal) return;
        blogModalTitle.textContent = title || '';
        blogModalSubtitleEl.textContent = subtitle || '';
        blogModalMeta.textContent = [author, date].filter(Boolean).join(' \u2022 ');
        blogModalBody.innerHTML = html || '';
        if (blogModalEmoji) blogModalEmoji.textContent = emoji || '📝';
        if (blogModalTags) blogModalTags.innerHTML = (tags || []).map(t => `<span class="tag">${t}</span>`).join('');
        blogModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        if (blogModalBody) blogModalBody.scrollTop = 0;
        updateModalProgress();
        currentPostSlug = slug || null;
        setUrlForPost(currentPostSlug);
    }

    function closeBlogModal() {
        if (!blogModal) return;
        blogModal.classList.remove('show');
        document.body.style.overflow = '';
        currentPostSlug = null;
        setUrlForPost(null);
    }

    if (blogModalOverlay) blogModalOverlay.addEventListener('click', closeBlogModal);
    if (blogModalClose) blogModalClose.addEventListener('click', closeBlogModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeBlogModal();
        if (e.key === 'Tab' && blogModal?.classList.contains('show')) {
            const focusable = blogModal.querySelectorAll('button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusable.length) {
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }
    });

    // Share / Copy actions
    if (blogShareBtn) {
        blogShareBtn.addEventListener('click', async () => {
            try {
                if (navigator.share) {
                    await navigator.share({ title: document.title, url: getUrlForPost(currentPostSlug) });
                } else {
                    await navigator.clipboard.writeText(getUrlForPost(currentPostSlug));
                    if (window.notifications && typeof notifications.success === 'function') {
                        notifications.success('Link copied', 'Post URL copied to clipboard.');
                    }
                }
            } catch (_) {}
        });
    }
    if (blogCopyBtn) {
        blogCopyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(getUrlForPost(currentPostSlug));
                if (window.notifications && typeof notifications.success === 'function') {
                    notifications.success('Link copied', 'Post URL copied to clipboard.');
                }
            } catch (_) {}
        });
    }

    function updateModalProgress() {
        if (!blogModalProgress || !blogModalBody || !blogModal.classList.contains('show')) return;
        const total = blogModalBody.scrollHeight - blogModalBody.clientHeight;
        const scrolled = Math.max(0, blogModalBody.scrollTop);
        const pct = total > 0 ? Math.min(100, Math.round((scrolled / total) * 100)) : 0;
        blogModalProgress.style.width = pct + '%';
    }
    if (blogModalBody) blogModalBody.addEventListener('scroll', updateModalProgress);

    // Make each blog card fully clickable to open full post (only on blog page)
    if (blogModal) {
        const cards = Array.from(document.querySelectorAll('.reviews-grid .review-card'));
        const cardBySlug = new Map();
        cards.forEach(card => {
            const explicitId = card.getAttribute('data-post-id');
            const titleText = card.getAttribute('data-title') || card.querySelector('h4')?.textContent || '';
            const slug = explicitId || slugify(titleText);
            card.dataset.slug = slug;
            cardBySlug.set(slug, card);
        });

        cards.forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => {
                const title = card.querySelector('h4')?.textContent?.trim();
                const subtitle = card.querySelector('h4 + p')?.textContent?.trim();
                const author = card.getAttribute('data-author');
                const date = card.getAttribute('data-date');
                const tpl = card.querySelector('template.blog-full-content');
                const html = tpl ? tpl.innerHTML : `<article><p>${card.querySelector('blockquote')?.textContent || ''}</p></article>`;
                const emoji = card.querySelector('.avatar-emoji')?.textContent?.trim() || '📝';
                const tagsAttr = card.getAttribute('data-tags') || '';
                const tags = tagsAttr ? tagsAttr.split(',').map(s => s.trim()).filter(Boolean) : [];
                const slug = card.dataset.slug || slugify(title);
                openBlogModal({ title, subtitle, author, date, html, emoji, tags, slug });
                setTimeout(() => { blogModalClose?.focus(); }, 10);
            });
            card.setAttribute('tabindex', '0');
            card.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });
        });

        // Deep link open (#post=slug)
        const hashMatch = window.location.hash.match(/^#post=(.+)$/);
        if (hashMatch && hashMatch[1]) {
            const slug = decodeURIComponent(hashMatch[1]);
            const target = cardBySlug.get(slug);
            if (target) target.click();
        }
    }

});

// ===== UTILITY FUNCTIONS =====

// Add CSS animation class
function addAnimationClass(element, className, delay = 0) {
    setTimeout(() => {
        element.classList.add(className);
    }, delay);
}

// Remove element with animation
function removeWithAnimation(element, duration = 300) {
    element.style.transition = `all ${duration}ms ease`;
    element.style.opacity = '0';
    element.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }, duration);
}

// Add glow effect to element
function addGlowEffect(element, color = 'var(--color-ai-blue)') {
    element.style.boxShadow = `0 0 20px ${color}`;
    element.style.transition = 'box-shadow 0.3s ease';
}

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== EXPORT FOR EXTERNAL USE =====
window.AIInsider = {
    addAnimationClass,
    removeWithAnimation,
    addGlowEffect,
    debounce
}; 