// Main JavaScript file for Yasaswini's Portfolio

// Global variables
let typingIndex = 0;
let textIndex = 0;
let isDeleting = false;

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    initializePortfolio();
});

// Initialize portfolio functionality
function initializePortfolio() {
    hideLoader();
    setupSmoothScrolling();
    setupResponsiveNavigation();
    addScrollEffects();
    startTypingEffect();
    startCodeEditorTyping();
    generateProjects();
    generateExperience();
    generateSkills();
    generateContact();
    setupResumeDownload();
    setupScrollAnimations();
    addPageTransitions();
    enhanceInteractivity();
}

// Hide loader after content loads
function hideLoader() {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 1500);
}

// Typing effect for hero section
function startTypingEffect() {
    const typingElement = document.getElementById('typing-text');
    if (!typingElement) return;

    function typeText() {
        const currentText = TYPING_TEXTS[textIndex];
        
        if (!isDeleting) {
            typingElement.textContent = currentText.substring(0, typingIndex + 1);
            typingIndex++;
            
            if (typingIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeText, 2000); // Pause before deleting
                return;
            }
        } else {
            typingElement.textContent = currentText.substring(0, typingIndex - 1);
            typingIndex--;
            
            if (typingIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % TYPING_TEXTS.length;
                setTimeout(typeText, 500); // Pause before next text
                return;
            }
        }
        
        setTimeout(typeText, isDeleting ? 50 : 100);
    }
    
    typeText();
}

// Code Editor Typing Animation
function startCodeEditorTyping() {
    const nameElement = document.getElementById('typing-name');
    if (!nameElement) return;

    const fullName = 'Reddimigari Yasaswini';
    let nameIndex = 0;

    function typeName() {
        if (nameIndex < fullName.length) {
            nameElement.textContent = '"' + fullName.substring(0, nameIndex + 1);
            nameIndex++;
            setTimeout(typeName, 150);
        } else {
            nameElement.textContent = '"' + fullName + '"';
            // Hide cursor after typing is complete
            setTimeout(() => {
                const cursor = document.querySelector('.cursor-code');
                if (cursor) cursor.style.display = 'none';
            }, 1000);
        }
    }

    // Start typing after a delay
    setTimeout(typeName, 2000);
}

// Generate Projects Section
function generateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    PROJECTS.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjY2IiBmb250LXNpemU9IjE0Ij5Qcm9qZWN0IEltYWdlPC90ZXh0Pgo8L3N2Zz4K'" />
                <div class="project-overlay">
                    <div class="project-links">
                        ${project.liveLink !== '#' ? `<a href="${project.liveLink}" class="project-link" target="_blank" title="Live Demo">
                            <i class="fas fa-external-link-alt"></i>
                        </a>` : ''}
                        <a href="${project.githubLink}" class="project-link" target="_blank" title="GitHub Repository">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Generate Experience Timeline
function generateExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    timeline.innerHTML = '';

    EXPERIENCE.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const markerClass = item.type === 'work' ? 'experience-marker' : 'education-marker';
        const dateRange = item.current ? `${item.startDate} - Present` : `${item.startDate} - ${item.endDate}`;
        
        let descriptionHTML = '';
        if (Array.isArray(item.description)) {
            descriptionHTML = `<ul class="timeline-description">
                ${item.description.map(desc => `<li>${desc}</li>`).join('')}
            </ul>`;
        } else {
            descriptionHTML = `<p class="timeline-description">${item.description}</p>`;
        }

        timelineItem.innerHTML = `
            <div class="timeline-marker ${markerClass}"></div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h3>${item.title}</h3>
                    <span class="timeline-date">${dateRange}</span>
                </div>
                <h4 class="timeline-company">${item.company}, ${item.location}</h4>
                ${item.grade ? `<p class="timeline-description">${item.grade}</p>` : ''}
                ${descriptionHTML}
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Generate Skills Section
function generateSkills() {
    const technicalGrid = document.querySelector('.skills-category:first-child .skills-grid');
    const softSkillsContainer = document.querySelector('.skills-category:last-child .soft-skills');
    
    if (!technicalGrid || !softSkillsContainer) return;

    // Generate Technical Skills
    technicalGrid.innerHTML = '';
    SKILLS.technical.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <span class="skill-name">${skill.name}</span>
        `;
        technicalGrid.appendChild(skillItem);
    });

    // Generate Soft Skills
    softSkillsContainer.innerHTML = '';
    SKILLS.soft.forEach(skill => {
        const softSkillItem = document.createElement('div');
        softSkillItem.className = 'soft-skill-item';
        softSkillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        `;
        softSkillsContainer.appendChild(softSkillItem);
    });
}

// Generate Contact Section
function generateContact() {
    const contactInfo = document.querySelector('.contact-info');
    const socialIcons = document.querySelector('.social-icons');
    
    if (!contactInfo || !socialIcons) return;

    // Generate Contact Info
    contactInfo.innerHTML = '';
    Object.values(CONTACT_INFO).forEach(contact => {
        const contactItem = document.createElement('div');
        contactItem.className = 'contact-item';
        
        const contactContent = contact.link 
            ? `<a href="${contact.link}">${contact.value}</a>`
            : `<span>${contact.value}</span>`;
            
        contactItem.innerHTML = `
            <div class="contact-icon">
                <i class="${contact.icon}"></i>
            </div>
            <div class="contact-details">
                <h4>${contact.label}</h4>
                ${contactContent}
            </div>
        `;
        contactInfo.appendChild(contactItem);
    });

    // Generate Social Links
    socialIcons.innerHTML = '';
    Object.values(SOCIAL_LINKS).forEach(social => {
        const socialLink = document.createElement('a');
        socialLink.href = social.url;
        socialLink.className = 'social-link';
        socialLink.target = '_blank';
        socialLink.title = social.name;
        socialLink.innerHTML = `<i class="${social.icon}"></i>`;
        socialIcons.appendChild(socialLink);
    });
}

// Setup Resume Download
function setupResumeDownload() {
    const downloadBtn = document.getElementById('download-resume');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Create a temporary link to download resume
            const link = document.createElement('a');
            link.href = PERSONAL_INFO.resumeFile;
            link.download = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Resume.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                updateActiveNavLink(targetId);
            }
        });
    });
}

// Update active navigation link
function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// Setup responsive navigation
function setupResponsiveNavigation() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Add scroll effects and animations
function addScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Add scrolled class to navbar
        if (scrolled > 50 && navbar) {
            navbar.classList.add('scrolled');
        } else if (navbar) {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateNavOnScroll();
    });
}

// Update navigation based on scroll position
function updateNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animation helper function
function animateElement(element, animationClass, duration = ANIMATIONS.medium) {
    element.classList.add(animationClass);
    
    setTimeout(() => {
        element.classList.remove(animationClass);
    }, duration);
}

// Enhanced Intersection Observer for scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate child elements with stagger effect
                const children = entry.target.querySelectorAll('.project-card, .timeline-item, .skill-item, .contact-item, .soft-skill-item');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add initial animation classes
    const animatedElements = document.querySelectorAll('.project-card, .timeline-item, .skill-item, .contact-item');
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
    });
}

// Enhanced navbar highlighting with smooth transitions
function updateNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Add smooth page transitions
function addPageTransitions() {
    // Add loading animation to page elements
    const elements = document.querySelectorAll('.hero-content, .hero-image, .section-header');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
}

// Enhanced hover effects for interactive elements
function enhanceInteractivity() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
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
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');
        
        if (heroContent && heroImage) {
            heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
            heroImage.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    });
}
