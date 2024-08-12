// Intersection Observer for scrolling animations
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Observe sections
document.querySelectorAll('.hidden').forEach(section => {
    observer.observe(section);
});

// Gallery item animations
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
    observer.observe(item);
    item.style.transitionDelay = `${index * 0.6}s`;
});
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const autoScrollInterval = 3000; // Change image every 3 seconds

// Auto-scroll functionality
function autoScroll() {
    items[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].style.opacity = 1;
    updateCarousel();
}

let autoScrollTimer = setInterval(autoScroll, autoScrollInterval);

// Manual navigation functionality
document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoScrollTimer); // Stop auto-scroll when manually navigating
    items[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].style.opacity = 1;
    updateCarousel();
    autoScrollTimer = setInterval(autoScroll, autoScrollInterval); // Restart auto-scroll
});

document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoScrollTimer); // Stop auto-scroll when manually navigating
    items[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    items[currentIndex].style.opacity = 1;
    updateCarousel();
    autoScrollTimer = setInterval(autoScroll, autoScrollInterval); // Restart auto-scroll
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

const flashyItems = document.querySelectorAll('#flashy-list li');

flashyItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.animationPlayState = 'paused';
    });

    item.addEventListener('mouseout', () => {
        item.style.animationPlayState = 'running';
    });
});
