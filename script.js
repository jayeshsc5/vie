let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
const forgiveBtn = document.getElementById('forgiveBtn');

nextBtn.addEventListener('click', function() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
});

forgiveBtn.addEventListener('click', function() {
    alert('Thank you for forgiving me, Vie! It means a lot to me.');
    // Close the window
    window.close();
    // If the window does not close, redirect to another URL
    window.location.href = 'https://www.instagram.com/jayesh_directwavz';
});
