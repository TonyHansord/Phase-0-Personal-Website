const displayMenuBtn = document.querySelector(".toggle-on");
const hideMenuBtn = document.querySelector(".toggle-off");
const menuContent = document.querySelector(".dropdown-content");
const menuClasses = menuContent.classList;

displayMenuBtn.addEventListener("click", function () {
  menuClasses.add("toggle");
});

hideMenuBtn.addEventListener("click", function () {
  menuClasses.remove("toggle");
});
