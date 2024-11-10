$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});

//code to filter the project category
// filter.js

document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const works = document.querySelectorAll(".works .work");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      works.forEach(work => {
        if (filter === "all" || work.classList.contains(filter)) {
          work.style.display = "block";
        } else {
          work.style.display = "none";
        }
      });
    });
  });
});

