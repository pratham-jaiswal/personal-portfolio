$(function () {
    var roles = ["Student", "VITian", "ex-AGite"];
    var count = 0;
    setInterval(() => {
      $("#intro .content h2 span").fadeOut("fast", function () {
        $(this).text(roles[count++ % roles.length]);
        $(this).fadeIn("fast");
      });
    }, 1000);
    $(".navbar").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 40) {
      $(".navbar").slideDown(100);
    } else {
      $(".navbar").slideUp(100);
    }
  });
  });
  // Read More
  // function myFunction() {
  //   var dots = document.getElementById("dots");
  //   var moreText = document.getElementById("more");
  //   var btnText = document.getElementById("myBtn");
  
  //   if (dots.style.display === "none") {
  //     dots.style.display = "inline";
  //     btnText.innerHTML = "Read more";
  //     moreText.style.display = "none";
  //   } else {
  //     dots.style.display = "none";
  //     btnText.innerHTML = "Read less";
  //     moreText.style.display = "inline";
  //   }
  // }