// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});


// ================= SCROLL ANIMATION =================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .stat-card, .cert-card, .timeline-item"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition = "all 0.6s ease";

    observer.observe(card);

});


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {

            link.style.color = "#00e5ff";

        }

    });

});