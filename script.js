const apikey = "_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY";

const count = 10;

async function displayImages() {
    try {
        let response = await fetch(
            `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`
          );
          let data = await response.json();
          console.log(data);
          for (let imageInfo of data) {
            let a = document.createElement("a");
            a.href = `${imageInfo.links.html}`;
            a.setAttribute("target", "_blank");
            a.innerHTML = `
            <img class="displayImg" src="${imageInfo.urls.small}" alt="">
            `;
            imageContainer.append(a);
          }
    } catch (error) {
        console.log(error);
    }
  
}

window.addEventListener("scroll", () => {
  if (window.scrollY + window.innerHeight + 200 >= document.body.offsetHeight) {
    displayImages();
  }
});

displayImages();