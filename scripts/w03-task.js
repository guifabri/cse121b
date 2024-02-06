/* LESSON 3 - Programming Tasks */
/* FUNCTIONS */

function add(number1, number2) {
  return number1 + number2;
}
/* Function Definition - Add Numbers */

function addNumbers() {
  let num1 = parseFloat(document.getElementById("add1").value);
  let num2 = parseFloat(document.getElementById("add2").value);
  let sumElement = document.getElementById("sum");
  sumElement.value = add(num1, num2);
}
document.getElementById("addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */
function subtractNumbers() {
  let num1 = parseFloat(document.getElementById('subtract1').value);
  let num2 = parseFloat(document.getElementById('subtract2').value);
  let result = num1 - num2;
  document.getElementById('difference').value = result;
}

document.getElementById('subtractNumbers').onclick = subtractNumbers;
/* Arrow Function - Multiply Numbers */
const multiplyNumbers = () => {
  let factor1 = parseFloat(document.getElementById('factor1').value);
  let factor2 = parseFloat(document.getElementById('factor2').value);
  let product = factor1 * factor2;
  document.getElementById('product').value = product;
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
function divideNumbers() {
  let dividend = parseFloat(document.getElementById('dividend').value);
  let divisor = parseFloat(document.getElementById('divisor').value);
  let quotient = dividend / divisor;
  document.getElementById('quotient').value = quotient;
};
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', function(){
  let getTotalValue = parseFloat(document.getElementById('subtotal').value);
  let getcheckBox = document.getElementById('member');
  if (getcheckBox.checked) {
    getTotalValue -= getTotalValue * 20/100
  }
  document.getElementById('total').textContent = `$ ${getTotalValue.toFixed(2)}`});

  /* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById('array').textContent = numbersArray;
/* Output Odds Only Array */
document.getElementById('odds').textContent = numbersArray.filter(value=>value%2 !=0);
/* Output Evens Only Array */
document.getElementById('evens').textContent = numbersArray.filter(value=>value%2 ==0);
/* Output Sum of Org. Array */
document.getElementById('sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.getElementById('multiplied').textContent = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.getElementById('sumOfMultiplied').textContent = (numbersArray.map(number => number * 2)).reduce((sum, number) => sum + number);