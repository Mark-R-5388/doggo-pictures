const BREEDS_URL = 'https://dog.ceo/api/breeds/image/random';

const promise = fetch(BREEDS_URL);
const doggos = document.querySelector('.doggos');

promise
  .then(function (response) {
    const processingPromise = response.json();
    console.log(processingPromise);
    return processingPromise;
  })

  .then(function (processedResponse) {
    const img = document.createElement('img');
    img.src = processedResponse.message;
    img.alt = 'doggo';
    doggos.append(img);
  });
