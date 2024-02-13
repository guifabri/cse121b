/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");

var templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
  temples.forEach((temple) => {
    let article = document.createElement("article");

    let h3 = document.createElement("h3");
    h3.textContent = temple.templeName;

    let img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.location;

    article.appendChild(h3);
    article.appendChild(img);

    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  templeList = await response.json();
  displayTemples(templeList);
};

/* reset Function */

const reset = () => {
  templesElement.innerHTML = "";
};

/* filterTemples Function */

const filterTemples = function (temples = []) {
  reset();
  let filter = document.querySelector("#filtered").value;
  let templeValue;
  if (filter == "utah") {
    templeValue = temples.filter((temple) =>
      temple.location.toLowerCase().includes("utah")
    );
  } else if (filter == "notutah") {
    templeValue = temples.filter(
      (temple) => !temple.location.toLowerCase().includes("utah")
    );
  } else if (filter == "older") {
    templeValue = temples.filter(
      (temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)
    );
  } else {
    templeValue = temples;
  }
  displayTemples(templeValue);
};

getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {
  filterTemples(templeList);
});
