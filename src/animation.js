export const initializeAdvancedAnimations = () => {
  // Smooth scroll reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-reveal');
        
        // Add staggered animation for feature cards
        if (entry.target.classList.contains('feature-card')) {
          const cards = document.querySelectorAll('.feature-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-stagger');
            }, index * 150);
          });
        }
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  document.querySelectorAll('.feature-card, .hero-content, .features-heading').forEach(el => {
    revealObserver.observe(el);
  });

  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-section::before');
    
    parallaxElements.forEach(element => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Dynamic navbar background
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Magnetic effect for buttons
  document.querySelectorAll('.hero-cta-primary, .submit-button').forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0px, 0px) scale(1)';
    });
  });

  // Floating particles animation
  createFloatingParticles();
};

const createFloatingParticles = () => {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'floating-particles';
  particleContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  `;
  
  document.body.appendChild(particleContainer);
  
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: rgba(0, 255, 127, ${Math.random() * 0.5 + 0.2});
      border-radius: 50%;
      animation: floatUp ${Math.random() * 10 + 10}s linear infinite;
      left: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 10}s;
    `;
    
    particleContainer.appendChild(particle);
  }
};
