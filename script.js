window.onload = function () {
  const sections = document.querySelectorAll("section");
  const navA = document.querySelectorAll(".navbar .nav-container a");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navA.forEach((a) => {
      a.classList.remove("active");
      if (a.classList.contains(current)) {
        a.classList.add("active");
      }
    });
  });

  $("div.project-navigation > a").click(function() {
    $("div.project-navigation > a").removeClass("active");
    $(this).addClass('active');
  });
};



function projectActive(){
  const navA = document.querySelectorAll(".project-navigation a");
  navA.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
}

function projectToggle(className){
  console.log(className);
  $(".project-cards a").hide();
  if(className == "all"){
    $(".project-cards a").show();
  }
  else{
    $(".project-cards ." + className).show();
  }
}

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