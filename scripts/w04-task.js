/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Erick Scala",
    photo: "images/profile.jpg",
    favoriteFoods: ["Burger", "Chinese food", "Soup"],
    hobbies: ["Karate", "Camping", "Hiking"],
    placesLived: []
  };

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
      place: 'Ureña, VE',
      length: '18 year'
    },
    {
      place: 'Maracay, VE',
      length: '20 year'
    }
  );

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;

document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(skills => {
  let li = document.createElement('li');
  li.textContent = skills;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;
  let dd = document.createElement("dd");
  dd.textContent = place.length;
  document.querySelector("#places-lived").append(dt,dd);
});
