// ===== AI INSIDER ENTERPRISE CONFIGURATION =====
// Этот файл содержит все настройки для enterprise-функциональности

window.AIInsiderConfig = {
    // ===== GENERAL SETTINGS =====
    version: '2.0.0-enterprise',
    environment: 'development', // 'development' | 'staging' | 'production'
    debug: true,
    
    // ===== ANALYTICS CONFIGURATION =====
    analytics: {
        enabled: true,
        
        // Google Analytics 4
        ga4: {
            measurementId: 'GA_MEASUREMENT_ID', // Замените на ваш ID
            enabled: false, // Отключено для разработки
            enhancedEcommerce: true,
            customDimensions: {
                user_type: 'custom_parameter_1',
                lead_source: 'custom_parameter_2',
                engagement_level: 'custom_parameter_3'
            }
        },
        
        // Facebook Pixel
        facebook: {
            pixelId: 'YOUR_PIXEL_ID', // Замените на ваш Pixel ID
            enabled: false, // Отключено для разработки
            trackPageView: true,
            trackCustomEvents: true
        },
        
        // Microsoft Clarity
        clarity: {
            projectId: 'CLARITY_PROJECT_ID', // Замените на ваш Project ID
            enabled: false // Отключено для разработки
        },
        
        // LinkedIn Insight Tag
        linkedin: {
            partnerId: 'LINKEDIN_PARTNER_ID', // Замените на ваш Partner ID
            enabled: false // Отключено для разработки
        },
        
        // Google Tag Manager
        gtm: {
            containerId: 'GTM-XXXXXXX', // Замените на ваш Container ID
            enabled: false // Отключено для разработки
        }
    },
    
    // ===== CRM INTEGRATION =====
    crm: {
        enabled: false, // Отключено для разработки
        
        // HubSpot Configuration
        hubspot: {
            apiKey: 'YOUR_HUBSPOT_API_KEY', // Замените на ваш API Key
            portalId: 'YOUR_PORTAL_ID', // Замените на ваш Portal ID
            formId: 'YOUR_FORM_ID', // Замените на ваш Form ID
            enabled: true,
            trackingCode: 'YOUR_TRACKING_CODE'
        },
        
        // Salesforce Configuration
        salesforce: {
            endpoint: '/api/salesforce-lead',
            orgId: 'YOUR_ORG_ID',
            enabled: true,
            webToLeadForm: true
        },
        
        // Custom CRM
        custom: {
            endpoint: '/api/crm/leads',
            apiKey: 'YOUR_CUSTOM_CRM_API_KEY',
            enabled: true
        },
        
        // Slack Notifications
        slack: {
            webhookUrl: 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL',
            channel: '#sales-alerts',
            enabled: true,
            highValueLeadThreshold: 80
        }
    },
    
    // ===== A/B TESTING CONFIGURATION =====
    abTesting: {
        enabled: true,
        
        experiments: {
            // Hero CTA Text Testing
            hero_cta_text: {
                enabled: true,
                variants: [
                    'Choose Profession',
                    'Start Learning AI',
                    'Get Free Access',
                    'Begin Your Journey'
                ],
                weights: [40, 25, 20, 15], // Процентное распределение
                conversionGoal: 'form_submission'
            },
            
            // Hero Subtitle Testing
            hero_subtitle: {
                enabled: true,
                variants: [
                    'Take your first step into AI technology. Build your career, we\'ll help.',
                    'Master AI automation and transform your career in 90 days.',
                    'Join 12,500+ professionals who chose AI as their future.',
                    'Learn AI skills that companies are hiring for right now.'
                ],
                weights: [25, 25, 25, 25],
                conversionGoal: 'course_page_visit'
            },
            
            // Course Pricing Testing
            course_price: {
                enabled: true,
                variants: ['$199/month', '$179/month', '$219/month', '$159/month'],
                weights: [40, 25, 20, 15],
                conversionGoal: 'enrollment_form_submission'
            },
            
            // Navigation CTA Testing
            nav_cta_text: {
                enabled: false, // Disabled for now
                variants: ['Join Channel', 'Get Started', 'Learn More'],
                weights: [50, 30, 20],
                conversionGoal: 'telegram_click'
            }
        }
    },
    
    // ===== LEAD SCORING CONFIGURATION =====
    leadScoring: {
        enabled: true,
        
        // Scoring Rules
        rules: {
            // Email domain scoring
            emailDomain: {
                business: 40,   // Custom domain
                personal: 20,   // Gmail, Yahoo, etc.
                education: 30   // .edu domains
            },
            
            // Experience level scoring
            experience: {
                'beginner': 10,
                'some-exp': 20,
                'experienced': 30,
                'expert': 40
            },
            
            // Form interaction scoring
            formInteraction: 5,     // Per field filled
            
            // Page engagement scoring
            timeOnPage: {
                '30s': 5,
                '2min': 10,
                '5min': 15,
                '10min': 20
            },
            
            // Click actions scoring
            actions: {
                'primary_cta_click': 15,
                'course_btn_click': 10,
                'nav_cta_click': 8,
                'video_play': 12,
                'course_page_visit': 20,
                'enrollment_form_start': 25
            }
        },
        
        // Lead Quality Thresholds
        thresholds: {
            cold: 0,      // 0-39
            cool: 40,     // 40-59
            warm: 60,     // 60-79
            hot: 80       // 80-100
        },
        
        // Actions based on score
        actions: {
            50: 'show_lead_magnet',      // Free guide offer
            70: 'show_consultation_offer', // Free consultation
            80: 'notify_sales_team',     // Immediate notification
            90: 'priority_follow_up'     // VIP treatment
        }
    },
    
    // ===== NOTIFICATION SYSTEM =====
    notifications: {
        enabled: true,
        
        // Default settings
        defaultDuration: 5000, // 5 seconds
        maxNotifications: 3,
        position: 'top-right',
        
        // Notification types
        types: {
            success: {
                icon: '✅',
                color: 'green',
                sound: false
            },
            error: {
                icon: '❌',
                color: 'red',
                sound: true
            },
            info: {
                icon: 'ℹ️',
                color: 'blue',
                sound: false
            },
            warning: {
                icon: '⚠️',
                color: 'orange',
                sound: false
            }
        }
    },
    
    // ===== COOKIE CONSENT =====
    cookieConsent: {
        enabled: true,
        
        // Display settings
        showDelay: 3000,        // 3 seconds after page load
        position: 'bottom',     // 'top' | 'bottom'
        style: 'banner',        // 'banner' | 'modal'
        
        // Cookie categories
        categories: {
            essential: {
                enabled: true,
                required: true,
                description: 'Essential for website functionality'
            },
            analytics: {
                enabled: false,
                required: false,
                description: 'Help us understand how visitors use our website'
            },
            marketing: {
                enabled: false,
                required: false,
                description: 'Used to track visitors and show relevant ads'
            }
        },
        
        // Compliance
        gdprCompliant: true,
        ccpaCompliant: true
    },
    
    // ===== PERFORMANCE SETTINGS =====
    performance: {
        // Lazy loading
        lazyLoading: true,
        
        // Image optimization
        imageOptimization: {
            webpSupport: true,
            compressionLevel: 80,
            responsiveImages: true
        },
        
        // Animation settings
        animations: {
            reducedMotion: true,  // Respect user preferences
            mobile: 'reduced',    // 'full' | 'reduced' | 'disabled'
            performance: 'auto'   // 'auto' | 'force' | 'disabled'
        },
        
        // Monitoring
        monitoring: {
            coreWebVitals: true,
            customMetrics: true,
            errorTracking: true
        }
    },
    
    // ===== SECURITY SETTINGS =====
    security: {
        // CSRF Protection
        csrf: {
            enabled: true,
            tokenName: '_csrf_token'
        },
        
        // Rate Limiting
        rateLimiting: {
            enabled: true,
            maxRequests: 100,
            windowMs: 900000 // 15 minutes
        },
        
        // Input Validation
        validation: {
            stripTags: true,
            sanitizeInput: true,
            maxFieldLength: 1000
        }
    },
    
    // ===== LOCALIZATION =====
    localization: {
        defaultLanguage: 'en',
        supportedLanguages: ['en', 'ru'],
        
        // Auto-detection settings
        autoDetect: {
            enabled: true,
            useNavigator: true,
            useGeolocation: false
        },
        
        // Fallback options
        fallback: 'en',
        rtlSupport: false
    },
    
    // ===== FEATURE FLAGS =====
    features: {
        roiCalculator: true,
        videoModal: true,
        floatingCta: true,
        graduatesFilter: true,
        courseComparison: false,
        chatWidget: false,
        darkModeToggle: false,
        socialProof: true,
        testimonialSlider: true,
        progressiveReveal: true
    },
    
    // ===== API ENDPOINTS =====
    api: {
        baseUrl: window.location.hostname === 'localhost' 
            ? 'http://localhost:3000/api' 
            : 'https://api.ai-insider.com',
        
        endpoints: {
            leads: '/leads',
            analytics: '/analytics/track',
            feedback: '/feedback',
            newsletter: '/newsletter/subscribe',
            webhook: '/webhook/slack',
            upload: '/upload',
            course: '/course/enrollment'
        },
        
        // Request settings
        timeout: 10000, // 10 seconds
        retries: 3,
        retryDelay: 1000 // 1 second
    },
    
    // ===== DEVELOPMENT TOOLS =====
    development: {
        console: {
            enabled: true,
            logLevel: 'info', // 'debug' | 'info' | 'warn' | 'error'
            showTimestamps: true
        },
        
        debugging: {
            abTesting: false,
            analytics: false,
            leadScoring: false,
            performance: false
        }
    }
};

// ===== ENVIRONMENT-SPECIFIC OVERRIDES =====
if (window.location.hostname === 'localhost') {
    // Development overrides
    window.AIInsiderConfig.analytics.enabled = false;
    window.AIInsiderConfig.crm.enabled = false;
    window.AIInsiderConfig.development.console.logLevel = 'debug';
    window.AIInsiderConfig.cookieConsent.showDelay = 1000;
} else if (window.location.hostname.includes('staging')) {
    // Staging overrides
    window.AIInsiderConfig.environment = 'staging';
    window.AIInsiderConfig.debug = true;
    window.AIInsiderConfig.analytics.ga4.measurementId = 'GA_STAGING_ID';
} else {
    // Production overrides
    window.AIInsiderConfig.environment = 'production';
    window.AIInsiderConfig.debug = false;
    window.AIInsiderConfig.development.console.enabled = false;
}

// ===== CONFIGURATION VALIDATION =====
window.AIInsiderConfig.validate = function() {
    const errors = [];
    
    // Check required analytics IDs
    if (this.analytics.enabled) {
        if (this.analytics.ga4.enabled && this.analytics.ga4.measurementId === 'GA_MEASUREMENT_ID') {
            errors.push('Google Analytics 4 Measurement ID not configured');
        }
        if (this.analytics.facebook.enabled && this.analytics.facebook.pixelId === 'YOUR_PIXEL_ID') {
            errors.push('Facebook Pixel ID not configured');
        }
    }
    
    // Check CRM configuration
    if (this.crm.enabled) {
        if (this.crm.hubspot.enabled && this.crm.hubspot.apiKey === 'YOUR_HUBSPOT_API_KEY') {
            errors.push('HubSpot API Key not configured');
        }
    }
    
    // Check A/B testing weights
    for (const [name, experiment] of Object.entries(this.abTesting.experiments)) {
        if (experiment.enabled) {
            const totalWeight = experiment.weights.reduce((sum, weight) => sum + weight, 0);
            if (totalWeight !== 100) {
                errors.push(`A/B test "${name}" weights don't sum to 100%`);
            }
        }
    }
    
    if (errors.length > 0) {
        console.warn('AI Insider Configuration Issues:', errors);
    } else {
        console.log('✅ AI Insider Configuration validated successfully');
    }
    
    return errors;
};

// ===== AUTO-VALIDATION =====
if (window.AIInsiderConfig.debug) {
    window.AIInsiderConfig.validate();
}

// ===== EXPORT CONFIGURATION =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.AIInsiderConfig;
} 