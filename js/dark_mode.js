// DARK MODE
var prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

var toggleDarkMode = (mediaQuery) => {
  var html = document.querySelector("html");
  var toggleButton = document.querySelector("#darkToggle");

  if (mediaQuery.matches) {
    html.setAttribute("data-bs-theme", "dark");
    toggleButton.textContent = "LIGHT";
  } else {
    html.setAttribute("data-bs-theme", "light");
    toggleButton.textContent = "DARK";
  }
};

var toggleDarkModeManually = () => {
  var html = document.querySelector("html");
  var currentTheme = html.getAttribute("data-bs-theme");
  var toggleButton = document.querySelector("#darkToggle");

  if (currentTheme === "dark") {
    html.setAttribute("data-bs-theme", "light");
    toggleButton.textContent = "DARK";
  } else {
    html.setAttribute("data-bs-theme", "dark");
    toggleButton.textContent = "LIGHT";
  }
};

var onDOMContentLoaded = () => {
  toggleDarkMode(prefersDarkScheme);
  prefersDarkScheme.addListener(toggleDarkMode);
  var toggleButton = document.querySelector("#darkToggle");
  toggleButton.addEventListener("click", toggleDarkModeManually);

  if (
    !document.querySelector("html").getAttribute("data-bs-theme") ||
    document.querySelector("html").getAttribute("data-bs-theme") === "light"
  ) {
    toggleDarkMode(prefersDarkScheme);
  }
};

window.addEventListener("DOMContentLoaded", onDOMContentLoaded);
