const doggos = document.querySelector('.random-doggos');
const randomButton = document.querySelector('.random-doggo');

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
