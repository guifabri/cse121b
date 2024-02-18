const url = "https://guifabri.github.io/cse121b/json-jokes/fun-jokes.json";

let jokesList = [];
let randomIndex;

const getJokes = async () => {
  const response = await fetch(url);
  jokesList = await response.json();
  console.log(jokesList);
  printRandomJoke();
};
const printRandomJoke = () => {
  randomIndex = Math.floor(Math.random() * jokesList.length);
  let itemJoke = jokesList[randomIndex];
  document.querySelector("#jokeContainer").textContent = itemJoke.question;
};

document.querySelector("#jokeBtn").addEventListener("click", () => {
  printRandomJoke();

  document.querySelector("#jokeAnswer").innerHTML = "";
});
document.querySelector("#btnAnswer").addEventListener("click", () => {
  let itemJoke = jokesList[randomIndex];
  document.querySelector("#jokeAnswer").textContent = itemJoke.answer;
});
getJokes();
