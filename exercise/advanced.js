const carouselContainer = document.querySelector('.carousel-container');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

// Function to update carousel position
function updateCarousel(index) {
  const offset = -index * 100; // Calculate the offset for the selected item
  carouselContainer.style.transform = `translateX(${offset}%)`;

  // Update active dot
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Event listener for dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});

// Initialize carousel
updateCarousel(currentIndex);
