const hamburger = document.getElementById("hamburger");
const menuContent = document.querySelector(".dropdown-content");

console.log(menuContent);

function toggleMenu() {
  const menuClasses = menuContent.classList;
  menuClasses.contains("toggle")
    ? menuClasses.remove("toggle")
    : menuClasses.add("toggle");
}

hamburger.addEventListener("click", toggleMenu);
