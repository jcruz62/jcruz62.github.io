// ============================================================
// theme.js  —  the dark mode button
// Every page loads this file.
// ============================================================

// 1. Find the button on the page.
const themeButton = document.getElementById("theme-button");

// 2. A function that switches the page to "dark" or "light".
function setTheme(theme) {
  // This adds data-theme="dark" (or "light") to the <html> tag.
  // style.css has a [data-theme="dark"] section that swaps the colors.
  document.documentElement.setAttribute("data-theme", theme);

  // Change the button icon: moon in light mode, sun in dark mode.
  themeButton.textContent = theme === "dark" ? "☀" : "☾";

  // Remember the choice for next time (saved in the browser).
  // "try" means: attempt this, and if the browser blocks saving, just skip it.
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    // saving isn't allowed here (for example, a private window), so do nothing
  }
}

// 3. When the page loads, use the saved choice.
//    If there isn't one, match the computer's own dark mode setting.
let saved = null;
try {
  saved = localStorage.getItem("theme");
} catch (error) {
  saved = null;
}
const computerIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (saved) {
  setTheme(saved);
} else if (computerIsDark) {
  setTheme("dark");
} else {
  setTheme("light");
}

// 4. When someone clicks the button, flip to the other theme.
themeButton.addEventListener("click", function () {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});
