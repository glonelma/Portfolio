let scrollContainer = document.querySelector(".gallery");
let nextBtn = document.getElementById("next-btn");
let backBtn = document.getElementById("back-btn");
scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});
nextBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 900;
  scrollContainer.style.scrollBehavior = "smooth";
});
backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 900;
  scrollContainer.style.scrollBehavior = "smooth";
});
backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 900;
  scrollContainer.style.scrollBehavior = "smooth";
});
