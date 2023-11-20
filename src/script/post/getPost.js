import { applyAccent } from "../colors/accents.js";
import { buildDropdown } from "../user/dropdown.js";

export function getPost() {
  fetch("/test/example.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // Limit the number of posts to load at a time
      const postsToLoad = data.post.slice(0, 15);

      // Function to load each post with a delay
      const loadPostWithDelay = (index) => {
        if (index < postsToLoad.length) {
          const post = postsToLoad[index];

          const id = post.id;
          const dimensions = post.width + "x" + post.height;
          const uploader = post.owner;

          const wrapper = document.createElement("div");
          wrapper.classList =
            "max-w-md mx-auto bg-base overflow-hidden p-16 hover:border-b-6";

          const img = document.createElement("img");
          img.classList = "w-full object-cover rounded-lg rounded-b-none";
          img.alt = "image";
          img.src = post.preview_url;
          img.title = post.tags;

          const desc = document.createElement("div");
          desc.id = `Desc${index}`;
          desc.classList =
            "post-desc p-4 bg-mantle rounded-lg rounded-t-none";
          desc.innerHTML = `
            <span class="text-sm text-subtext0" id="span">
              <span class="text-xl accented font-bold mb-2">
                <a href="https://gelbooru.com/index.php?page=post&s=view&id=${id}" target="_blank">${id}</a>
              </span> ${uploader} • ${dimensions}
            </span>`;


            const button = document.createElement("button");
            button.textContent = "view";
            button.classList = "accented hover:underline";
            button.setAttribute("post", index);
            button.addEventListener("click", (event) => {
              const index = event.target.getAttribute("post");
              const popup = document.createElement("div");
              popup.id = "postPopup";
              popup.innerHTML = `<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-auto">
                  <button class="fixed bottom-4 left-4 py-2 px-4" onclick="document.querySelector('#postPopup').remove()"><i class="fas fa-xmark accented text-3xl"></i></button>
                  <div class="rounded-md flex-col">
                    <img src="${post.file_url}" class="max-w-md rounded-lg object-cover"></img>  
                  </div>
                </div>`;
              document.body.appendChild(popup);
              console.log(popup)
            });


          wrapper.appendChild(img);
          wrapper.appendChild(desc);
          desc.appendChild(button);
          const content = document.getElementById("main");
          content.appendChild(wrapper);

          // Load the next post after a delay
          setTimeout(() => {
            loadPostWithDelay(index + 1);
            applyAccent();
          }, 50);
        }
      };

      // Start loading posts with delay
      loadPostWithDelay(0);
    })
    .catch((error) => console.error("Error fetching data:", error));

}