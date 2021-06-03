const doggos = document.querySelector('.random-doggos');
const randomButton = document.querySelector('.random-doggo');
const doggoSelectForm = document.querySelector('#doggo-select');
const selectedDoggos = document.querySelector('.selected-doggos');

randomButton.addEventListener('click', function (e) {
  let BREEDS_URL = 'https://dog.ceo/api/breeds/image/random';

  let promise = fetch(BREEDS_URL);
  promise
    .then(function (response) {
      let processingPromise = response.json();

      return processingPromise;
    })
    .then(function (processedResponse) {
      let img = document.createElement('img');
      img.classList.add('img-size');
      img.src = processedResponse.message;
      img.alt = 'doggo';
      doggos.append(img);
    });
});

doggoSelectForm.addEventListener('change', function (e) {
  e.preventDefault();
  let breedSelected = e.target.value;
  let BREED_SELECT_URL = `https://dog.ceo/api/breed/${breedSelected}/images`;

  let promise = fetch(BREED_SELECT_URL);

  promise
    .then(function (response) {
      let processedResponse = response.json();
      return processedResponse;
    })
    .then(function (newResponse) {
      let randomIndexToFive = Math.floor(Math.random() * 5);
      let img = document.createElement('img');
      img.classList.add('img-size');
      img.src = newResponse.message[randomIndexToFive];
      img.alt = `doggo ${randomIndexToFive}`;
      selectedDoggos.append(img);
      e.target.value = '';
    });
});
