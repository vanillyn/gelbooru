const contentDiv = document.getElementById("helpPopup");
import { applyAccent } from "src/script/colors/accents.js";

export function helpListener() {
    const loadButton = document.getElementById("helpButton");
  loadButton.addEventListener("click", () => {
    addHelpPopup()
  });
};

export function addHelpPopup() {
    fetch("/element/help.html")
    .then((response) => response.text())
    .then((data) => {
        contentDiv.innerHTML = data;
        applyAccent();
        document.querySelector("#removeHelp").addEventListener("click", removeHelpPopup);
    });
};
export function removeHelpPopup() {
        contentDiv.innerHTML = "";
};