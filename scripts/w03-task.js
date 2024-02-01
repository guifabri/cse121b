/* LESSON 3 - Programming Tasks */
/* FUNCTIONS */
function add(number1, number2) {
  return number1 + number2;
}
/* Function Definition - Add Numbers */

function addNumbers() {
  var num1 = parseFloat(document.getElementById("add1").value);
  var num2 = parseFloat(document.getElementById("add2").value);
  var sumElement = document.getElementById("sum");
  sumElement.value = add(num1, num2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */

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