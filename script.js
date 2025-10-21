  lucide.createIcons();

// Navbar Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking a link or button
        navLinks.querySelectorAll('a, button').forEach(element => {
            element.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

         if (window.innerWidth > 768) {
      document.querySelector('.hero-section').classList.add('desktop');
    }

    const text = document.querySelector('.hero-text');
    const image = document.querySelector('.hero-image');
    if (text && image) {
      text.style.animationDelay = '0.5s';
      image.style.animationDelay = '1s';
    }

 document.addEventListener('DOMContentLoaded', function() {
    const marqueeContainer = document.querySelector('.company-marquee-container');
    const marqueeContents = document.querySelectorAll('.company-marquee');
    
    // Function to adjust animation speed based on screen width
    function adjustSpeed() {
      const containerWidth = marqueeContainer.offsetWidth;
      const contentWidth = marqueeContents[0].offsetWidth;
      
      // Calculate appropriate duration based on content width
      // Faster for wider screens, slower for mobile
      const duration = Math.max(20, contentWidth / 100);
      
      marqueeContents.forEach(content => {
        content.style.animationDuration = `${duration}s`;
      });
    }
    
    // Initial adjustment
    adjustSpeed();
    
    // Adjust on window resize
    window.addEventListener('resize', adjustSpeed);
    
    // Pause animation on hover
    marqueeContainer.addEventListener('mouseenter', () => {
      marqueeContents.forEach(content => {
        content.style.animationPlayState = 'paused';
      });
    });
    
    // Resume animation when mouse leaves
    marqueeContainer.addEventListener('mouseleave', () => {
      marqueeContents.forEach(content => {
        content.style.animationPlayState = 'running';
      });
    });
  });

function showContent(type) {
            const contents = document.querySelectorAll('.content');
            const buttons = document.querySelectorAll('.tab-button');
            contents.forEach(content => content.classList.remove('active'));
            buttons.forEach(button => button.classList.remove('active'));
            document.getElementById(`${type}-content`).classList.add('active');
            document.querySelector(`.tab-button[onclick="showContent('${type}')"]`).classList.add('active');
}

// Add accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                answer.classList.remove('active');
            } else {
                item.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
});

// JavaScript to handle scroll detection
        function handleScroll() {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                
                // Check if element is in viewport
                if (rect.top <= windowHeight * 0.9) {
                    element.classList.add('visible');
                }
            });
        }

        // Add scroll and load event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll);

const track = document.getElementById('optimaTrack');
  const prev = document.getElementById('optimaPrev');
  const next = document.getElementById('optimaNext');
  const cards = document.querySelectorAll('.optima-card');
  let index = 0;

  function moveCarousel() {
    const cardWidth = cards[0].offsetWidth + 16;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  next.addEventListener('click', () => {
    index = (index + 1) % cards.length;
    moveCarousel();
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + cards.length) % cards.length;
    moveCarousel();
  });

  window.addEventListener('resize', moveCarousel);

  (function(){
    const footer = document.getElementById('optimaFooter');
    const hero = document.getElementById('optimaHero');
    let timed = null;
    const observer = new IntersectionObserver((entries)=>{
      for(const e of entries){
        if(e.isIntersecting){
          // only trigger once
          if(!hero.classList.contains('optima-hero--visible')){
            // wait 2 seconds then show
            timed = setTimeout(()=> hero.classList.add('optima-hero--visible'), 1000);
          }
        } else {
          // if user scrolls away before 2s, cancel
          if(timed){ clearTimeout(timed); timed = null; }
        }
      }
    }, { threshold: 0.2 });

    observer.observe(footer);
  })();