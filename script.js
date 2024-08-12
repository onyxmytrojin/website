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
