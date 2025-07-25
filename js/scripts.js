// wwwroot/js/scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll(".scroll-reveal").forEach(elem => {
        observer.observe(elem);
    });
});
