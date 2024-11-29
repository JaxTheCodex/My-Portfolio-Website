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


//gsap with scrollTrigger effect for About Section

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the image in the About section
  gsap.fromTo(
    ".about-pic",
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      rotation: 360,
      duration: 3, // Slightly longer animation for smoother effect
      ease: "power1.inOut", // Smoother easing
      scrollTrigger: {
        trigger: ".about-pic",
        start: "top 80%",
        end: "top 40%", // Extended end point for a slower scroll effect
        scrub: 2, // Lower scrub value for a smoother animation
      },
    }
  );

  // Animate the text in the About section
  gsap.from(".about-text h2, .about-text h3, .about-text p", {
    y: 50,
    opacity: 0,
    duration: 2, // Increased duration for smoother transition
    stagger: 0.5, // Slower stagger between elements
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".about-text",
      start: "top 85%",
      end: "top 60%",
      scrub: 2,
    },
  });
});

//gsap with scrollTrigger Effect for the Services Section

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the services section title
  gsap.fromTo(
    "#services .section-title",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#services .section-title",
        start: "top 90%",
        end: "top 70%",
        scrub: 2,
      },
    }
  );

  // Animate each service card
  gsap.fromTo(
    ".service",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
        onLeave: () => gsap.set(".service", { opacity: 1, y: 0 }), // Ensure cards remain visible
      },
    }
  );

  // Animate icons within each service
  gsap.fromTo(
    ".service .icon",
    { scale: 0.5, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
        onLeave: () => gsap.set(".service .icon", { opacity: 1, scale: 1 }), // Ensure icons remain visible
      },
    }
  );

  // Animate the "Know More" links
  gsap.fromTo(
    ".service .show-more",
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      stagger: 0.3,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".services",
        start: "top 75%",
        end: "top 35%",
        scrub: 2,
        onLeave: () => gsap.set(".service .show-more", { opacity: 1, y: 0 }), // Ensure links remain visible
      },
    }
  );
});


//gsap code for Education Section

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the Education & Experiences section title
  gsap.fromTo(
    "#education .section-title",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#education .section-title",
        start: "top 90%",
        end: "top 70%",
        scrub: 2,
      },
    }
  );

  // Animate the timeline blocks one by one
  gsap.fromTo(
    ".time-line .block",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".time-line",
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
        onLeave: () => gsap.set(".time-line .block", { opacity: 1, y: 0 }), // Ensure blocks remain visible
      },
    }
  );

  // Animate the percentage icons
  gsap.fromTo(
    ".perc",
    { opacity: 0, scale: 0.5 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".time-line",
        start: "top 75%",
        end: "top 35%",
        scrub: 2,
        onLeave: () => gsap.set(".perc", { opacity: 1, scale: 1 }), // Ensure percentages remain visible
      },
    }
  );
});


//gsap animation for the works section

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the section title
  gsap.fromTo(
    "#works .section-title",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#works .section-title",
        start: "top 90%",
        end: "top 70%",
        scrub: 2,
      },
    }
  );

  // Animate the filter buttons
  gsap.fromTo(
    ".filter-buttons",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".filter-buttons",
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
      },
    }
  );

  // Animate each work item as it enters the viewport
  gsap.fromTo(
    ".work",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".works",
        start: "top 80%",
        end: "top 40%",
        scrub: 2,
      },
    }
  );

  // Animation for hover effects on works
  gsap.utils.toArray('.work').forEach((work) => {
    work.addEventListener('mouseenter', function () {
      gsap.to(work.querySelector('.info'), { opacity: 1, y: 0, duration: 0.5 });
    });
    work.addEventListener('mouseleave', function () {
      gsap.to(work.querySelector('.info'), { opacity: 0, y: 50, duration: 0.5 });
    });
  });
});


//gsap animation for the works page

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the section title
  gsap.fromTo(
    "#works .section-title",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#works .section-title",
        start: "top 90%",
        end: "top 70%",
        scrub: 2,
      },
    }
  );

  // Animate the filter buttons
  gsap.fromTo(
    ".filter-buttons",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".filter-buttons",
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
      },
    }
  );

  // Animate each work item as it enters the viewport
  gsap.fromTo(
    ".work",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      stagger: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".works",
        start: "top 80%",
        end: "top 40%",
        scrub: 2,
      },
    }
  );

  // Animation for hover effects on works
  gsap.utils.toArray('.work').forEach((work) => {
    work.addEventListener('mouseenter', function () {
      gsap.to(work.querySelector('.info'), { opacity: 1, y: 0, duration: 0.5 });
    });
    work.addEventListener('mouseleave', function () {
      gsap.to(work.querySelector('.info'), { opacity: 0, y: 50, duration: 0.5 });
    });
  });
});


//gsap animtion for the contact page

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the section title
  gsap.fromTo(
    "#contact .section-title",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#contact .section-title",
        start: "top 90%",
        end: "top 70%",
        scrub: 2,
      },
    }
  );

  // Animate the contact info
  gsap.fromTo(
    "#contact .contact-info",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#contact .contact-info",
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
      },
    }
  );

  // Animate the contact form
  gsap.fromTo(
    "#contact .contact-form",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#contact .contact-form",
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
      },
    }
  );

  // Animate form buttons on hover
  gsap.utils.toArray('.form-buttons .btn').forEach((button) => {
    button.addEventListener('mouseenter', function () {
      gsap.to(button, { scale: 1.1, duration: 0.3 });
    });
    button.addEventListener('mouseleave', function () {
      gsap.to(button, { scale: 1, duration: 0.3 });
    });
  });
});





