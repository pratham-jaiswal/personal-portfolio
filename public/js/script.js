window.onload = function() {
  const sections = document.querySelectorAll("section");
  const navA = document.querySelectorAll(".navbar .nav-container a");

  function updateActiveSection() {
    let maxVisibleArea = 0;
    let activeSection = null;

    sections.forEach((section) => {
      const visibleArea = getVisibleArea(section);

      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        activeSection = section.getAttribute("id");
      }
    });

    navA.forEach((a) => {
      a.classList.remove("active");
      if (a.classList.contains(activeSection)) {
        a.classList.add("active");
      }
    });
  }

  function getVisibleArea(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
    return visibleHeight * visibleWidth;
  }

  window.addEventListener("scroll", updateActiveSection);
  window.addEventListener("resize", updateActiveSection);

  $("div.project-navigation > a").click(function() {
    $("div.project-navigation > a").removeClass("active");
    $(this).addClass("active");
  });
};

function projectActive() {
  const navA = document.querySelectorAll(".project-navigation a");
  navA.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
}

function projectToggle(className) {
  $(".project-cards > div").hide();
  if (className == "all") {
    $(".project-cards > div").show();
  } else {
    $(".project-cards > ." + className).show();
  }
}

var theme = document.getElementsByTagName("link")[0];

function darkToggle() {
  if (theme.getAttribute("href") == "/css/dark.css") {
    theme.setAttribute("href", "/css/style.css");
    document.getElementById("theme-icon").src = "/icons/moon.svg";
  } else {
    theme.setAttribute("href", "/css/dark.css");
    document.getElementById("theme-icon").src = "/icons/sun.svg";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function flipCard(cardId) {
  var card = document.getElementById(cardId);
  if (card) {
    card.style.transform = card.style.transform + 'rotateY(180deg)';
  }
}
