const nav = document.querySelector(".Navbar")
const body = document.querySelector("body")
let lastScrollY = window.scrollY

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    nav.classList.add("HiddenNavbar");
    //body.style.paddingTop = "0rem";
  } else {
    nav.classList.remove("HiddenNavbar")
    //body.style.paddingTop = "4rem";
  }
  lastScrollY = window.scrollY;
})