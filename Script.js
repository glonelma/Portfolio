// Select the menu icon and navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");


//hire me button
function hireMe() {
  window.location.href = "mailto:glonelma22@gmail.com?subject=Hire%20Me&body=Hello,%20I%20would%20like%20to%20hire%20you!";
}


// Highlight active section
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

// Toggle navbar visibility on menu icon click
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Function to filter projects
function filterProjects(category) {
  const projects = document.querySelectorAll(".project-item");
  projects.forEach((project) => {
    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

// Function to show project details in a modal
function showDetails(title, description, link) {
  const modal = document.getElementById("project-modal");
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-description").textContent = description;
  const modalLink = document.getElementById("modal-link");
  modalLink.setAttribute("data-link", link);
  modal.style.display = "block";
}

// Function to open the project link in a new tab
function openProject() {
  const projectLink = document.getElementById("modal-link").getAttribute("data-link");
  if (projectLink) {
    window.open(projectLink, "_blank");
  }
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.style.display = "none";
}


// information of the user
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

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
        document.getElementById("contactForm").reset(); 
      })
      .catch((error) => {
        // Display an error message
        document.getElementById("responseMessage").textContent =
          "Oops! Something went wrong. Please try again.";
      });
  });


