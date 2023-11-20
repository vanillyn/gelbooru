const themes = ["mocha", "macchiato", "frappe", "latte"];
let currentThemeIndex = 0;
if (localStorage.getItem("theme")) {
  const savedTheme = localStorage.getItem("theme");
  currentThemeIndex = themes.indexOf(savedTheme);
}
export function changeTheme() {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
  applyTheme();
}
export function applyTheme() {
  const theme = themes[currentThemeIndex];
  localStorage.setItem("theme", theme);
  const contentElement = document.querySelector("#content");
  contentElement.classList = "bg-base text-text " + theme;
  console.log(" • Theme changed to", theme, currentThemeIndex);
}