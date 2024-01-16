/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = 'Erick Scala';
let currentYear = new Date().getFullYear();
let profilePicture = "images/profile.jpg";
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const elementYear = document.querySelector('#year');
const imageElement = document.getElementById('profilePicture');
    let favoriteFood = ["Pizza", "Hot Dog", "Chop Suey", "Spaghetti", "Sandwich", "Ice cream"]

/* Step 3 - Element Variables */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
elementYear.textContent = currentYear;
imageElement.setAttribute(`src`,profilePicture);
imageElement.setAttribute(`alt`,`Profile image of ${fullName}`);

/* Step 4 - Adding Content */

foodElement.innerHTML += `<br>${favoriteFood}`
let myFavoriteFood = "Lasagna";
favoriteFood.push(myFavoriteFood)
foodElement.innerHTML += `<br>${favoriteFood}`

/* Step 5 - Array */
favoriteFood.shift()
foodElement.innerHTML += `<br>${favoriteFood}`
favoriteFood.pop()
foodElement.innerHTML += `<br>${favoriteFood}`





