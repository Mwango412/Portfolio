// =====================================================
// MOBILE MENU
// =====================================================

const menuIcon = document.getElementById("menu-icon");

const navLinks = document.getElementById("nav-links");


menuIcon.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    menuIcon.classList.toggle("fa-bars");

    menuIcon.classList.toggle("fa-xmark");

});


// =====================================================
// CLOSE MENU WHEN A LINK IS CLICKED
// =====================================================

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");

    });

});


// =====================================================
// CONTACT FORM
// =====================================================

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    formMessage.textContent =
        "Thank you! Your message has been submitted.";

    formMessage.style.color = "rgb(0, 157, 255)";


    contactForm.reset();

});