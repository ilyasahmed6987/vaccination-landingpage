const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const sidenav = document.querySelector(".sidenav");

menuIcon.addEventListener("click", function () {
  sidenav.classList.add("open");
  closeIcon.classList.remove("d-none");
  menuIcon.classList.add("d-none");
});

closeIcon.addEventListener("click", function () {
  sidenav.classList.remove("open");
  closeIcon.classList.add("d-none");
  menuIcon.classList.remove("d-none");
});
