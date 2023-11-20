import { applyAccent, changeAccent } from "./colors/accents.js";
import { applyTheme, changeTheme } from "./colors/themes.js";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    changeAccent();
  } else if (event.key === "t") {
    changeTheme();
  }
});

export function colorListener() {
  document.querySelector("#accentSelector").addEventListener("click", changeAccent);
  document.querySelector("#themeSelector").addEventListener("click", changeTheme);
}


applyTheme();
applyAccent();
