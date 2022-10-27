const displayMenuBtn = document.querySelector(".toggle-on");
const menuContent = document.querySelector(".dropdown-content");
const menuClasses = menuContent.classList;

const projectData = {

projects: [
{

}
}

}

displayMenuBtn.addEventListener("click", function () {
  
  menuClasses.contains("toggle") ? menuClasses.remove ("toggle") : menuClasses.add("toggle");
});
