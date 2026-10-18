
const PHONE_NUMBER = "551996988";


const callButtons = document.querySelectorAll(
    '.call-button, .mobile-call, .hero-buttons a[href^="tel:"], .service-card a[href^="tel:"], .how-grid a[href^="tel:"], .faq-grid a[href^="tel:"], .contact-box a[href^="tel:"]'
);

callButtons.forEach(function(button) {
    button.href = "tel:" + PHONE_NUMBER;
});


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-expanded", "true");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    }
});


navLinks.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


document.getElementById("year").textContent =
    new Date().getFullYear();

