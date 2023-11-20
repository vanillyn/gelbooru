const accents = [ "rosewater", "flamingo", "pink", "mauve", "red", "maroon", "peach", "yellow", "green", "teal", "sky", "sapphire", "blue", "lavender", "text",];
const types = ["text-", "border-r-", "border-l-"];

let currentAccentIndex = 0;

if (localStorage.getItem("accent")) {
  const savedAccent = localStorage.getItem("accent");
  currentAccentIndex = accents.indexOf(savedAccent);
}

export function changeAccent() {
  currentAccentIndex = (currentAccentIndex + 1) % accents.length;
  applyAccent();
}

export function applyAccent() {
  const color = accents[currentAccentIndex];

  const changeClass = (elements, type) => {
    elements.forEach((element) => {
      const accent = type + color;
      Array.from(element.classList).forEach((className) => {
        if ( className.startsWith(type) && accents.some((currentAccent) => className.endsWith(currentAccent)) ) {
          element.classList.replace(className, accent);
        } else {
          element.classList.add(accent);
        }
      });
    });
  };

  const accentText = document.querySelectorAll(".accented");
  const accentBorder = document.querySelectorAll(".accented-border");

  changeClass(accentText, types[0]);
  changeClass(accentBorder, types[2]);

  localStorage.setItem("accent", color);
  console.log(" • Accent changed to", color, currentAccentIndex);
}
