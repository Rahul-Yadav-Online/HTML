const showMoreBtn = document.getElementById("show-more-btn");
const hiddenProjects = document.querySelectorAll(".project:nth-of-type(n+7)");

hiddenProjects.forEach((project) => {
  project.classList.add("hidden");
});

showMoreBtn.addEventListener("click", () => {
  hiddenProjects.forEach((project) => {
    project.classList.toggle("hidden");
  });
  showMoreBtn.textContent =
    showMoreBtn.textContent === "Show More" ? "Show Less" : "Show More";
});