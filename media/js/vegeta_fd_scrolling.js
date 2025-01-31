document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;  // Check if any part of the element is visible
    }

    // Check and add the 'visible' class when an element is in the viewport
    function handleScroll() {
        sections.forEach(section => {
            if (isElementInViewport(section) && !section.classList.contains('visible')) {
                section.classList.add('visible');
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Check on page load if any sections are already in the viewport
    handleScroll();
});
