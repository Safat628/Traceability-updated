
// // Dark Mode Toggle start

// // Back to Top Button Functionality start
// const backToTop = document.querySelector(".back-to-top");

// // Show the Back to Top button when the user scrolls down
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 100) {
//     document.body.classList.add("scrolled");
//   } else {
//     document.body.classList.remove("scrolled");
//   }
// });

// // Custom easing function (ease-out for slow-to-fast effect)
// function easeOutQuad(t) {
//   return t * (2 - t);
// }

// // Smooth scroll to the top with easing
// backToTop.addEventListener("click", () => {
//   const start = window.scrollY;
//   const duration = 800; // duration of the animation in milliseconds
//   const startTime = performance.now();

//   function scrollAnimation(currentTime) {
//     const elapsed = currentTime - startTime;
//     const progress = Math.min(elapsed / duration, 1); // Normalize to a 0-1 range
//     const easedProgress = easeOutQuad(progress);

//     window.scrollTo(0, start * (1 - easedProgress));

//     if (progress < 1) {
//       requestAnimationFrame(scrollAnimation);
//     }
//   }

//   requestAnimationFrame(scrollAnimation);
// });

// // Back to Top Button Functionality end


// // slider start

// document.addEventListener("DOMContentLoaded", function() {
//   const slides = document.querySelectorAll('.img-slider .slide');
//   const prevBtn = document.querySelector('.img-slider .prev-btn');
//   const nextBtn = document.querySelector('.img-slider .next-btn');
//   let currentIndex = 0;
//   const slideInterval = 10000; // 10 seconds

//   // Initially show the first slide and hide others
//   slides[0].style.display = 'block';
//   slides[0].classList.add('active');

//   // Show the next slide
//   nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   });

//   // Show the previous slide
//   prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   });

//   // Automatically switch slides after a few seconds
//   setInterval(() => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }, slideInterval);

//   function showSlide(index) {
//     slides.forEach((slide, idx) => {
//       slide.style.display = 'none';
//       slide.classList.remove('active');
//     });

//     slides[index].style.display = 'block';
//     slides[index].classList.add('active');
//   }
// });


// // slider end


// // // Dark mode Start//


// // // document.addEventListener("DOMContentLoaded", function() {
// //    const darkModeToggle = document.querySelector("#darkModeToggle"); // Update with your dark mode toggle element selector
// //    const body = document.body;

// //    // Check saved mode from localStorage
// //    const darkMode = localStorage.getItem("darkMode");

// //   if (darkMode === "enabled") {
// //        body.classList.add("dark-mode");
// //   }

// //   // Toggle dark mode
// //   darkModeToggle.addEventListener("click", () => {
// //      if (body.classList.contains("dark-mode")) {        
// //         body.classList.remove("dark-mode");         
// //           localStorage.setItem("darkMode", "disabled");
// //     } else {
// //            body.classList.add("dark-mode");
// //          localStorage.setItem("darkMode", "enabled");
// //       }
// //    });



// document.addEventListener("DOMContentLoaded", function () {
//   const darkModeToggle = document.querySelector("#darkModeToggle");
//   const body = document.body;

//   // Check saved mode from localStorage and apply it
//   const savedMode = localStorage.getItem("darkMode");
//   const isDarkMode = savedMode === "enabled";

//   // Apply the saved mode (default to light mode)
//   body.classList.toggle("dark-mode", isDarkMode);

//   // Set up the toggle button functionality
//   darkModeToggle.addEventListener("click", () => {
//     const darkModeActive = body.classList.toggle("dark-mode");
//     localStorage.setItem("darkMode", darkModeActive ? "enabled" : "disabled");
//   });
// });





// Dark Mode Toggle start

// Back to Top Button Functionality start
const backToTop = document.querySelector(".back-to-top");

// Show the Back to Top button when the user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

// Custom easing function (ease-out for slow-to-fast effect)
function easeOutQuad(t) {
  return t * (2 - t);
}

// Smooth scroll to the top with easing
backToTop.addEventListener("click", () => {
  const start = window.scrollY;
  const duration = 800; // duration of the animation in milliseconds
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); // Normalize to a 0-1 range
    const easedProgress = easeOutQuad(progress);

    window.scrollTo(0, start * (1 - easedProgress));

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  requestAnimationFrame(scrollAnimation);
});

// Back to Top Button Functionality end


// // slider start

// document.addEventListener("DOMContentLoaded", function() {
//   const slides = document.querySelectorAll('.img-slider .slide');
//   const prevBtn = document.querySelector('.img-slider .prev-btn');
//   const nextBtn = document.querySelector('.img-slider .next-btn');
//   let currentIndex = 0;
//   const slideInterval = 10000; // 10 seconds

//   // Initially show the first slide and hide others
//   slides[0].style.display = 'block';
//   slides[0].classList.add('active');

//   // Show the next slide
//   nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   });

//   // Show the previous slide
//   prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   });

//   // Automatically switch slides after a few seconds
//   setInterval(() => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }, slideInterval);

//   function showSlide(index) {
//     slides.forEach((slide, idx) => {
//       slide.style.display = 'none';
//       slide.classList.remove('active');
//     });

//     slides[index].style.display = 'block';
//     slides[index].classList.add('active');
//   }
// });

// // slider end


// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeIcon = document.getElementById("darkModeIcon");

// Check if dark mode is already enabled
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeIcon.classList.replace("fa-moon", "fa-sun"); // Show sun when in dark mode
}

// Toggle dark mode
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkModeIcon.classList.replace("fa-moon", "fa-sun"); // Switch to sun icon
        localStorage.setItem("darkMode", "enabled"); // Save state
    } else {
        darkModeIcon.classList.replace("fa-sun", "fa-moon"); // Switch to moon icon
        localStorage.setItem("darkMode", "disabled"); // Save state
    }
});

// ✅ FIXED: Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        this.classList.toggle('active'); // Toggle active class
        navLinks.classList.toggle('active');

        // ✅ Toggle text between ☰ (hamburger) and ✖ (close icon)
        if (this.classList.contains('active')) {
            this.innerHTML = "✖"; // Change to X when menu is open
        } else {
            this.innerHTML = "☰"; // Change back to ☰ when closed
        }
    });
});

// ✅ Show More Box Animation
document.getElementById("show-boxes").addEventListener("click", function () {
    const infoBoxes = document.getElementById("info-boxes");
    infoBoxes.style.display = "grid"; // Show the boxes

    // Animate each box appearing smoothly
    const boxes = document.querySelectorAll(".info-box");
    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.classList.add("show"); // Make visible
        }, index * 200); // Delayed animation for each box
    });

    // Hide the button after clicking
    this.style.display = "none";
});

