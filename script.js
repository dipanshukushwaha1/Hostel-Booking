
// ================================
// Sticky Navbar
// ================================

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
        header.style.transition = ".3s";
    } else {
        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "none";
    }
});
// ================================
// Smooth Scroll
// ================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
// ================================
// Active Navigation Link
// ================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
// ================================
// Scroll Reveal Animation
// ================================
const revealElements = document.querySelectorAll(

    ".card,.amenity,.review,.feature,.gallery img"
);
function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(element => {
        const top = element.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            element.style.transition = ".8s ease";
        }
    });
}
// Initial State
revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
});
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
// ================================
// Hero Fade Animation
// ================================
const hero = document.querySelector(".hero-content");
window.addEventListener("load", () => {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";
    setTimeout(() => {
        hero.style.transition = "1s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 200);
});
// ================================
// Button Hover Animation
// ================================
const buttons = document.querySelectorAll(
    ".btn,.primary-btn,.secondary-btn"
);
buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});
// ================================
// Gallery Image Hover Effect
// ================================
const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach(img => {
    img.addEventListener("mouseenter", () => {
        img.style.filter = "brightness(110%)";
    });
    img.addEventListener("mouseleave", () => {
        img.style.filter = "brightness(100%)";
    });
});
// ================================
// Console Message
// ================================
console.log("Annapurna Hostel Website Loaded Successfully!");
/*=========================================
        GALLERY LIGHTBOX
=========================================*/
const galleryImages = document.querySelectorAll(".gallery img");
// Create Lightbo
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.innerHTML = `
    <span class="close-btn">&times;</span>
    <img id="lightbox-img">
`;
document.body.appendChild(lightbox);
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");
galleryImages.forEach((img)=>{
    img.addEventListener("click",()=>{
        lightbox.style.display="flex";
        lightboxImg.src=img.src;
    });
});
closeBtn.onclick=()=>{
    lightbox.style.display="none";
}
lightbox.onclick=(e)=>{
    if(e.target===lightbox){
        lightbox.style.display="none";
    }
};
/*=========================================
        FORM VALIDATION
=========================================*/
const form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const inputs=form.querySelectorAll("input");
    const name=inputs[0].value.trim();
    const phone=inputs[1].value.trim();
    if(name===""){
        alert("Please Enter Your Name");
        return;
    }
    if(phone.length!=10){
        alert("Enter Valid Mobile Number");
        return;
    }
    showToast();
    form.reset();
});
/*=========================================
        TOAST MESSAGE
=========================================*/
function showToast(){
    const toast=document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(()=>{
        toast.classList.remove("show");

    },3000);
}
/*=========================================
        SCROLL TO TOP BUTTON
=========================================*/
// Create Button
const topBtn = document.createElement("button");
topBtn.id = "topBtn";
topBtn.innerHTML = "↑";
document.body.appendChild(topBtn);
// Show Button
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});
// Scroll Top
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/*=========================================
        MOBILE MENU
=========================================*/
const menuBtn = document.createElement("div");
menuBtn.innerHTML = "☰";
menuBtn.className = "menu-btn";
document.querySelector(".navbar").prepend(menuBtn);
menuBtn.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("show");
});
/*=========================================
        DARK MODE
=========================================*/
const darkBtn = document.createElement("button");
darkBtn.innerHTML = "🌙";
darkBtn.className = "dark-mode";
document.body.appendChild(darkBtn);
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
/*=========================================
        COUNTER ANIMATION
=========================================*/
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    counter.innerText = "0";
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;
        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});
/*=========================================
        LOADING SCREEN
=========================================*/
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});
