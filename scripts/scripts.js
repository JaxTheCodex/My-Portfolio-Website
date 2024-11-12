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


//Live chat using WhatsApp

document.addEventListener('DOMContentLoaded', function () {
  const chatNowBtn = document.getElementById('chatNowBtn');
  const chatWindow = document.getElementById('chatWindow');
  const closeChat = document.getElementById('closeChat');

  chatNowBtn.addEventListener('click', () => {
    chatWindow.style.display = 'block'; // Show the chat window
  });

  closeChat.addEventListener('click', () => {
    chatWindow.style.display = 'none'; // Hide the chat window
  });
});


