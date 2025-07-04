
// Custom JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    function handleNavbarScroll() {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // run on load
    
    animateStats();
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add animation to perfume image on hover
    const perfumeImage = document.querySelector('.perfume-image');
    if (perfumeImage) {
        perfumeImage.addEventListener('mouseenter', () => {
            perfumeImage.style.animation = 'float 3s ease-in-out infinite';
        });
        
        perfumeImage.addEventListener('mouseleave', () => {
            perfumeImage.style.animation = 'float 6s ease-in-out infinite';
        });
    }
});
// Form submission handling
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
e.preventDefault();
const email = this.querySelector('input').value;
console.log('Subscribed email:', email);
alert('Thank you for subscribing!');
this.querySelector('input').value = '';
});
let index = 0;

  function showSlide(i) {
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;
    index = (i + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function prevSlide() {
    showSlide(index - 1);
  }
    function openSubscription(type) {
    // Hide all cards first
    document.getElementById('singleCard').style.display = 'none';
    document.getElementById('doubleCard').style.display = 'none';
    document.getElementById('tryCard').style.display = 'none';
    
    // Show the selected card
    document.getElementById(`${type}Card`).style.display = 'block';
    
    // Reorder the navigation items
    const nav = document.getElementById('subscriptionNav');
    const items = Array.from(nav.querySelectorAll('.subscription-nav-item'));
    const selectedItem = items.find(item => item.getAttribute('onclick').includes(type));
    
    // Remove all items
    items.forEach(item => nav.removeChild(item));
    
    // Add selected item first
    nav.appendChild(selectedItem);
    
    // Add the other items after
    items.filter(item => item !== selectedItem).forEach(item => nav.appendChild(item));
}
function closeSubscription() {
    // Hide all cards
    document.getElementById('singleCard').style.display = 'none';
    document.getElementById('doubleCard').style.display = 'none';
    document.getElementById('tryCard').style.display = 'none';
    
    // Reset the navigation order
    const nav = document.getElementById('subscriptionNav');
    const items = Array.from(nav.querySelectorAll('.subscription-nav-item'));
    
    // Remove all items
    items.forEach(item => nav.removeChild(item));
    
    // Re-add in original order
    const originalOrder = ['single', 'double', 'try'];
    originalOrder.forEach(type => {
        const item = items.find(item => item.getAttribute('onclick').includes(type));
        if (item) nav.appendChild(item);
    });
}
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would typically send the email to your server
            console.log('Subscribed with email:', email);
            
            // Show success message
            alert('Thank you for subscribing!');
            this.reset();
});