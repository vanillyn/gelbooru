const header = document.getElementById("header");
export const headerState = "on"

import { applyAccent } from "src/script/colors/accents.js";
import { listeners } from "../elements.js";


export function showHeader() {
        fetch("/element/header.html")
        .then((response) => response.text())
        .then((data) => {
            header.innerHTML = data;
            applyAccent();
            listeners();
        });
};

export function removeHeader() {
        header.innerHTML = "";
};

export function changeHeader() {
    const headerState = localStorage.getItem("headerState");
    console.log(headerState);
    if (headerState == "on") {
        removeHeader();
        const headerState = "off"
        localStorage.setItem("headerState", headerState)
    } else {
        showHeader();
        const headerState = "on"
        localStorage.setItem("headerState", headerState)
    }

}
