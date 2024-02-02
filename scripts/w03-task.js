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

/* Open Function Use - Divide Numbers */
/* Decision Structure */
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
/* Output Odds Only Array */
/* Output Evens Only Array */
/* Output Sum of Org. Array */
/* Output Multiplied by 2 Array */
/* Output Sum of Multiplied by 2 Array */