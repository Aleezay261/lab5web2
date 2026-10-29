var pages = document.querySelectorAll(".page");
var navLinks = document.querySelectorAll(".nav-link");
var buttons = document.querySelectorAll("[data-page]");

function showPage(id) {
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove("active");
  }
  for (var j = 0; j < navLinks.length; j++) {
    navLinks[j].classList.remove("active");
    if (navLinks[j].getAttribute("data-page") == id) {
      navLinks[j].classList.add("active");
    }
  }
  document.getElementById(id).classList.add("active");
}

for (var k = 0; k < buttons.length; k++) {
  buttons[k].addEventListener("click", function (e) {
    e.preventDefault();
    showPage(this.getAttribute("data-page"));
  });
}

var form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  form.reset();
});