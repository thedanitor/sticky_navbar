const nav = document.querySelector(".nav");

// listen for scroll on window, call fixNav
window.addEventListener("scroll", fixNav);

function fixNav() {
  // if window scrolled down more than 150px past nav
  if (window.scrollY > nav.offsetHeight + 150) {
    // add active class to nav
    nav.classList.add("active");
    // otherwise
  } else {
    // remove active class to nav
    nav.classList.remove("active");
  }
}
