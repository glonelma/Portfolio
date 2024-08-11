let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// information of the user

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const message = document.getElementById("message").value;

    // Prepare the data to be sent to the server
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      message: message,
    };

    // Example URL (you'll need to replace this with your actual server-side URL)
    const url = "https://yourserver.com/submit-form";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Display a success message
        document.getElementById("responseMessage").textContent =
          "Thank you for your message!";
        document.getElementById("contactForm").reset(); // Reset the form
      })
      .catch((error) => {
        // Display an error message
        document.getElementById("responseMessage").textContent =
          "Oops! Something went wrong. Please try again.";
      });
  });

// project
// let currentIndex = 0;
// const slides = document.querySelectorAll(
//   ".experience-details-container .color-container"
// );
// const totalSlides = slides.length;

// function showSlide(index) {
//   const offset = -index * 100;
//   document.querySelector(
//     ".experience-details-container"
//   ).style.transform = `translateX(${offset}%)`;
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % totalSlides;
//   showSlide(currentIndex);
// }

// function prevSlide() {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//   showSlide(currentIndex);
// }

// // Optional: Automatically move to the next slide every 5 seconds
// setInterval(nextSlide, 5000);
