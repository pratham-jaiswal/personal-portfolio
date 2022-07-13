window.onload = function () {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".navbar .nav-container a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  });
};

var theme = document.getElementsByTagName('link')[0];
/* //Change Theme based on system preference
if(window.matchMedia("(prefers-color-scheme:dark)").matches){;
  theme.setAttribute('href', 'dark.css')
}
else{
  theme.setAttribute('href', 'style.css')
}
*/

function darkToggle() {
  if (theme.getAttribute('href') == 'dark.css'){
    theme.setAttribute('href', 'style.css');
    document.getElementById("theme-icon").src = "./Assets/Icons/moon.svg";
  }
  else{
    theme.setAttribute('href', 'dark.css');
    document.getElementById("theme-icon").src = "./Assets/Icons/sun.svg";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}