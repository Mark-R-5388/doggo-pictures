const doggos = document.querySelector(".random-doggos-container");
const randomButton = document.querySelector(".random-doggo-button");
const doggoSelectForm = document.querySelector("#doggo-select");
const selectedDoggos = document.querySelector(".selected-doggos-container");
let BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

const dogPicture = fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((dog) => {
    return dog;
  });

async function getRandomDoggo() {
  let resolve = await fetch(BREEDS_URL);
  let json = await resolve.json();
  return json;
}

async function getPicture() {
  const picture = await getRandomDoggo();
  return picture;
}

randomButton.addEventListener("click", async function () {
  let doggoList = [];
  let pictureValue = await getPicture();

  let imgEl = document.createElement("img");
  imgEl.classList.add("img-size");
  imgEl.src = `${pictureValue.message}`;

  if (doggos.children.length === 0) {
    doggoList.push(imgEl);
    console.log(doggoList);
    doggoList.forEach((doggo) => {
      doggos.append(doggo);
    });
  } else {
    doggoList.pop();
    doggoList.push(imgEl);
    console.log(doggoList);
  }
});
