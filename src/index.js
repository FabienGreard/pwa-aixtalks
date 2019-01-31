document.getElementById('app').innerHTML = `
<h1 class="title">DogFinder</h1>
<img class="dog-image" src="https://images.dog.ceo/breeds/shiba/shiba-6.jpg" alt="dog"/>
<button id="fetch" class="button">Fetch a doggy !</button>
`;

const dogElement = document.querySelector('.dog-image');

document.querySelector('#fetch').addEventListener('click', async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const { message } = await response.json();
  dogElement.src = message;
});
