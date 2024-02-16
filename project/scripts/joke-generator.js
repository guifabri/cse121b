const url =
  "https://webknox-jokes.p.rapidapi.com/jokes/search?keywords=kick%2C%20hard&numJokes=5&category=Chuck%20Norris&minRating=5";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "webknox-jokes.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
