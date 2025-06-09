/* Navbar tombol tombol */
const cards = Array.from(document.querySelectorAll(".card"));

function switchCard(direction) {
  const currentIndex = cards.findIndex((card) =>
    card.classList.contains("active")
  );

  let targetIndex;
  if (direction === "left") {
    targetIndex = (currentIndex - 1 + cards.length) % cards.length;
  } else {
    targetIndex = (currentIndex + 1) % cards.length;
  }

  cards[currentIndex].classList.remove("active");
  cards[targetIndex].classList.add("active");
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-button")) {
    if (e.target.classList.contains("left")) {
      switchCard("left");
    } else if (e.target.classList.contains("right")) {
      switchCard("right");
    }
  }
});
// 🔐 Nomor WA dalam base64
const encoded = "MDgxMjIwODY5NjAz"; // base64
const phone = atob(encoded); // decode

$(function () {
  $("#WAButton").floatingWhatsApp({
    phone: phone, //WhatsApp Business phone number International format-
    headerTitle: "Chat with us on WhatsApp!", //Popup Title
    popupMessage: "Hello, how can we help you?", //Popup Message
    showPopup: true, //Enables popup display
    buttonImage:
      '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
    position: "right",
    autoOpenTimeout: 1,
  });
});
/*** Animation on scroll function and init*/
function aosInit() {
  AOS.init({
    duration: 600,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
window.addEventListener("load", aosInit);

/**
  Scroll top button
 */
let scrollTop = document.querySelector(".scroll-top");

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  }
}
scrollTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("load", toggleScrollTop);
document.addEventListener("scroll", toggleScrollTop);
Preloader;
const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}
