/*=========================================
            TYPING ANIMATION
=========================================*/

const typingElement = document.getElementById("typing");

const roles = [
    "Data Analyst",
    "SQL Developer",
    "Python Developer",
    "Power BI Developer",
    "Tableau Developer",
    "Business Intelligence Analyst"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent = currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent = currentRole.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


/*=========================================
            MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}


/*=========================================
            BACK TO TOP
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    topBtn.style.display = window.scrollY > 500 ? "block" : "none";

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/*=========================================
            SCROLL PROGRESS BAR
=========================================*/

const progress = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let percent = (scrollTop / scrollHeight) * 100;

    progress.style.width = percent + "%";

});


/*=========================================
            LOADER
=========================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 800);

});


/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(
".project-card, .skill-card, .service-card, .timeline-card, .stat-box, .contact-card"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".stat-box h2");

let started = false;

window.addEventListener("scroll", () => {

    const about = document.querySelector("#about");

    if (window.scrollY > about.offsetTop - 300 && !started) {

        started = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const target = parseFloat(text);

            if (isNaN(target)) return;

            let count = 0;

            const speed = target / 80;

            const update = () => {

                count += speed;

                if (count < target) {

                    if (text.includes(".")) {

                        counter.innerText = count.toFixed(1);

                    } else if (text.includes("%")) {

                        counter.innerText = Math.floor(count) + "%";

                    } else if (text.includes("+")) {

                        counter.innerText = Math.floor(count) + "+";

                    } else {

                        counter.innerText = Math.floor(count);

                    }

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = text;

                }

            };

            update();

        });

    }

});

/*=========================================
        FLOATING PROFILE IMAGE
=========================================*/

const profile = document.querySelector(".profile-wrapper");

if (profile) {

    window.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.pageX) / 40;
        const y = (window.innerHeight / 2 - e.pageY) / 40;

        profile.style.transform =
            `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;

    });

}


/*=========================================
        CURRENT YEAR
=========================================*/

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} Peddirajulu. All Rights Reserved.`;

}


/*=========================================
        NAVBAR SCROLL EFFECT
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/*=========================================
        THEME SWITCHER
=========================================*/

const themeBtn = document.querySelector(".theme-toggle");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("light")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

        }

    });

}


/*=========================================
        CURSOR GLOW
=========================================*/

const glow = document.getElementById("cursor-glow");

if (glow) {

    window.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

}