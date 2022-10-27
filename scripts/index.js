const displayMenuBtn = document.querySelector(".toggle-on");
const menuContent = document.querySelector(".dropdown-content");
const menuClasses = menuContent.classList;

const projectType = document.querySelectorAll(".project-type");
const projectTitle = document.querySelectorAll(".project-title");
const projectDesc = document.querySelectorAll(".project-desc");
const techList = document.querySelectorAll(".tech-list");
const projectRepo = document.querySelectorAll(".repo");
const projectLink = document.querySelectorAll(".live-site");

const projectData = {
  featuredProjects: [
    {
      title: "Booklogue",
      desc: "An iOS app that allows users to track their reading progress and add notes about the books they read.",
      tech: ["Swift", "Xcode", "Cocoapods", "Firebase"],

      link: "https://apps.apple.com/us/app/booklogue/id1521788378?mt=8",
    },
  ],
  otherProjects: [
    {
      title: "NFT preview card component",
      type: "Frontend Mentor Challenge",
      description:
        "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
      tech: ["HTML", "CSS"],
      repo: "https://github.com/TonyHansord/FM-Challenges/tree/master/NFT-element",
      liveSite: "https://nft-element-tonyhansord.vercel.app",
    },
    {
      title: "NFT preview card component",
      type: "Frontend Mentor Challenge",
      description:
        "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
      tech: ["HTML", "CSS"],
      repo: "https://github.com/TonyHansord/FM-Challenges/tree/master/NFT-element",
      liveSite: "https://nft-element-tonyhansord.vercel.app",
    },
    {
      title: "NFT preview card component",
      type: "Frontend Mentor Challenge",
      description:
        "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
      tech: ["HTML", "CSS"],
      repo: "https://github.com/TonyHansord/FM-Challenges/tree/master/NFT-element",
      liveSite: "https://nft-element-tonyhansord.vercel.app",
    },
    {
      title: "NFT preview card component",
      type: "Frontend Mentor Challenge",
      description:
        "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
      tech: ["HTML", "CSS"],
      repo: "https://github.com/TonyHansord/FM-Challenges/tree/master/NFT-element",
      liveSite: "https://nft-element-tonyhansord.vercel.app",
    },
    {
      title: "NFT preview card component",
      type: "Frontend Mentor Challenge",
      description:
        "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
      tech: ["HTML", "CSS"],
      repo: "https://github.com/TonyHansord/FM-Challenges/tree/master/NFT-element",
      liveSite: "https://nft-element-tonyhansord.vercel.app",
    },
    {
      title: "NFT preview card component",
      type: "Frontend Mentor Challenge",
      description:
        "This HTML & CSS only challenge is perfect for anyone just starting out or anyone wanting a small project to play around with.",
      tech: ["HTML", "CSS"],
      repo: "https://github.com/TonyHansord/FM-Challenges/tree/master/NFT-element",
      liveSite: "https://nft-element-tonyhansord.vercel.app",
    },
  ],
};

for (let i = 0; i < projectType.length; i++) {
  projectType[i].textContent = projectData.otherProjects[i].type;
  projectTitle[i].textContent = projectData.otherProjects[i].title;
  projectDesc[i].textContent = projectData.otherProjects[i].description;
  projectRepo[i].href = projectData.otherProjects[i].repo;
  projectLink[i].href = projectData.otherProjects[i].liveSite;
  for (let j = 0; j < projectData.otherProjects[i].tech.length; j++) {
    techList[i].innerHTML += `<li>${projectData.otherProjects[i].tech[j]}</li>`;
  }
}

displayMenuBtn.addEventListener("click", function () {
  menuClasses.contains("toggle")
    ? menuClasses.remove("toggle")
    : menuClasses.add("toggle");
});
