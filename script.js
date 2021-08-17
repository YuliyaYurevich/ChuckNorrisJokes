const joke = document.querySelector('.joke');
const button = document.querySelector('.btn');

button.addEventListener('click', getJoke);

async function getJoke() {
  const res = await fetch('https://api.chucknorris.io/jokes/random');

  const data = await res.json();

  joke.innerHTML = data.value;
}
