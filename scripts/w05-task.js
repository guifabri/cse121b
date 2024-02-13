/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.createElement('div');

/* async displayTemples Function */

let = templelist = [];

/* async getTemples Function using fetch()*/

const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement ('article');
                
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        
        let img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        
        article.appendChild(h3)
        article.appendChild('img')
    });
}

/* reset Function */


/* filterTemples Function */


getTemples();

/* Event Listener */
