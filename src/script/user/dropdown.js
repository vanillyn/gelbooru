
function createDropdown() {
  const dropdown = document.createElement("div");
  dropdown.classList = "relative inline-block";
  dropdown.setAttribute("x-data", "{ isOpen: false }");
    dropdown.id = "menu"
  return dropdown;
}

function createButton() {
  const dropdownButton = document.createElement("button");
  dropdownButton.setAttribute("x-on:click", "isOpen = !isOpen");
  dropdownButton.classList.add("relative", "z-10", "block", "accented", "rounded-md", "fas", "fa-bars");
    dropdownButton.id = "menuButton"
  return dropdownButton;
}

function createBorder() {
  const borderItem = document.createElement("hr");
  borderItem.classList = "border-red";

  return borderItem;
}

function createMenu() {
  const dropdownMenu = document.createElement("div");
  dropdownMenu.setAttribute("x-show", "isOpen");
  dropdownMenu.setAttribute("x-on:click.away", "isOpen = false");
  dropdownMenu.setAttribute("x-transition:enter", "transition ease-out duration-100");
  dropdownMenu.setAttribute("x-transition:enter-start", "opacity-0 scale-90");
  dropdownMenu.setAttribute("x-transition:enter-end", "opacity-100 scale-100");
  dropdownMenu.setAttribute("x-transition:leave", "transition ease-in duration-100");
  dropdownMenu.setAttribute("x-transition:leave-start", "opacity-100 scale-100");
  dropdownMenu.setAttribute("x-transition:leave-end", "opacity-0 scale-90");
  dropdownMenu.classList = "absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-mantle rounded-md";
dropdownMenu.id = "menuList"
  return dropdownMenu;
}

function createItem(itemIcon, itemContent, itemAction) {
  const dropdownItem = document.createElement("a");
  dropdownItem.classList = "flex items-center p-3 text-sm text-text transition-colors duration-300 transform";
  dropdownItem.innerHTML = `
    <i class="${itemIcon} accented"></i>
    <span class="mx-1">${itemContent}</span>
  `;
  if (typeof itemAction === "string") {
    dropdownItem.href = itemAction;
  } else if (typeof itemAction === "function") {
    dropdownItem.setAttribute("onclick", `${itemAction}`);
  }
  return dropdownItem;
}

export function buildDropdown(index) {
  function deletePost() {
    console.log("deleted post " + index);
  }
  function editPost() {
    console.log("edited post " + index);
  }
  function viewPost() {
    console.log("viewed post " + index);
  }

  const menu = createMenu();
  const button = createButton();
  const dropdown = createDropdown();

  const items = [
    { icon: "fas fa-trash-can", label: "Delete", action: deletePost },
    { icon: "fas fa-pen-to-square", label: "Edit", action: editPost },
    { icon: "fas fa-eye", label: "View", action: viewPost },
    { icon: "fas fa-terminal", label: "View Source", link: `https://blog.multiryzz.com/api/post/${index}/raw` },
    { icon: "fab fa-markdown", label: "View Markdown", link: `https://blog.multiryzz.com/api/post/${index}/markdown` }
  ];

  const dropdownList = document.createDocumentFragment();
  items.forEach((item, i) => {
    if (item.link) {
      dropdownList.appendChild(createItem(item.icon, item.label, item.link));
    } else {
      dropdownList.appendChild(createItem(item.icon, item.label, () => item.action(index)));
    }
    if (i === 2) {
      dropdownList.appendChild(createBorder());
    }
  });



  menu.appendChild(dropdownList);
  button.appendChild(menu);
  dropdown.appendChild(button);

  return dropdown;
}
