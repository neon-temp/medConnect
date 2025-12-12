const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const gloginBtn = document.getElementById("gloginBtn");

hamburger.addEventListener("click", () => {
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";

    if (gloginBtn.style.display === "flex") {
      mobileMenu.style.display = "none";
    }
  } else {
    mobileMenu.style.display = "flex";
    mobileMenu.style.flexDirection = "row";
    mobileMenu.style.gap = "8px";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");

  function setDarkMode() {
    // All elements except buttons
    const allElements = document.querySelectorAll("*:not(button)");
    allElements.forEach((el) => {
      el.style.backgroundColor = "#1e1e1e"; // soft dark background
      el.style.color = "white";
    });

    themeToggle.setAttribute("name", "moon-outline");
    localStorage.setItem("theme", "dark");
  }

  function setLightMode() {
    // Reset all elements except buttons
    const allElements = document.querySelectorAll("*:not(button)");
    allElements.forEach((el) => {
      el.style.backgroundColor = "";
      el.style.color = "";
    });

    themeToggle.setAttribute("name", "contrast-outline");
    localStorage.setItem("theme", "light");
  }

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }

  // Toggle on click
  themeToggle.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  });
});

window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  const body = document.body;

  setTimeout(() => {
    splash.classList.add("fade-out");
    body.classList.add("show-main");
  }, 3000);
});
