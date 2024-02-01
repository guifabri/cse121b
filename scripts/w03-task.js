/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value1);
    let addNumber2 = Number(document.querySelector('#add2').value2);
    document.querySelector('#sum').value = add(addNumber1, addNumber2)
    }
    document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subsTract = function(number1, number2) {
    return number1 - number2;
  };
const subsTractNumbers = function() {
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  document.querySelector('#difference').value = subtract (subtractNumber1, subtractNumber2);
};

/* Arrow Function - Multiply Numbers */

const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
  };

/* Open Function Use - Divide Numbers */

function divide(dividend, divisor) {
    return dividend / divisor;
  }

  const divideNumbers = function() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
  };

/* Decision Structure */

document.querySelector('#calculateTotal').addEventListener('click', function() {
  let subtotal = Number(document.querySelector('#subtotal').value);
  let membershipChecked = document.querySelector('#membership').checked;

  if (membershipChecked) {
    subtotal *= 0.8; // Apply 20% discount
  }

  document.querySelector('#total').innerText = `Total: $${subtotal.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerHTML = numbers;

/* Output Source Array */

/* Output Odds Only Array */

let odds = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').innerHTML = odds;

/* Output Evens Only Array */

let evens = numbersArray.filter(number => number % 2 === 0);
document.getElementById('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
;
/* Output Sum of Org. Array */


let sum = numbers.reduce((total, current) => total + current, 0);

document.getElementById("sumOfArray").innerText = sum;

/* Output Multiplied by 2 Array */

let multipliedArray = numbers.map(number => number * 2);

document.getElementById("multiplied").innerHTML = multipliedArray;
/* Output Sum of Multiplied by 2 Array */


multipliedArray = numbers.map(number => number * 2);

let sumOfMultiplied = multipliedArray.reduce((total, current) => total + current, 0);

document.getElementById("sumOfMultiplied").innerText = sumOfMultiplied;