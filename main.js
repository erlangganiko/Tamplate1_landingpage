/* Nav Button gambar */
const cards = document.querySelectorAll(".card");
let currentIndex = Array.from(cards).findIndex((card) =>
  card.classList.contains("active")
);

function showCard(index) {
  cards[currentIndex].classList.remove("active");
  cards[index].classList.add("active");
  currentIndex = index;
}

document.querySelector(".nav-button.left").addEventListener("click", () => {
  const newIndex = (currentIndex - 1 + cards.length) % cards.length;
  showCard(newIndex);
});

document.querySelector(".nav-button.right").addEventListener("click", () => {
  const newIndex = (currentIndex + 1) % cards.length;
  showCard(newIndex);
});

/* Whatsapp Sticky*/
const waSticky = document.getElementById("waSticky");
const stickyOffset = waSticky.offsetTop;

window.addEventListener("scroll", function () {
  if (window.scrollY > stickyOffset + 50) {
    waSticky.classList.add("fixed");
  } else {
    waSticky.classList.remove("fixed");
  }
});
