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
/* Navbar tombol tombol */
