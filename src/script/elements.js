import { addHelpPopup, helpListener, removeHelpPopup, } from "./elements/help.js";
import { showHeader, changeHeader, removeHeader } from "./elements/header.js";
import { colorListener } from "./colors.js";

export function listeners() {
    helpListener();
    colorListener();
}

const headerState = localStorage.getItem("headerState");

if (headerState == "on") {
  showHeader();
  listeners();
} else if (headerState == "off") {
    removeHeader();
} else {
    localStorage.setItem("headerState","on")
    showHeader();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    removeHelpPopup();
    document.querySelector('#postPopup').remove();
  } else if (event.key === "h") {
    addHelpPopup(); 
  } else if (event.key === "q") {
    changeHeader();
  }
});

listeners();
