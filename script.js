function add(e, f) {
  return e + f;
}
function subtract(e, f) {
  return e - f;
}
function multiply(e, f) {
  return e * f;
}
function divide(e, f) {
  return e / f;
}
function modulus(e, f) {
  return e % f;
}

function simpleCalc() {
  var operator = prompt("CALCULATOR \n Choose  your operator e.g -,+,/,*,%");
  var e = Number(prompt("CALCULATOR \n Insert your first number:"));
  var f = Number(prompt("CALCULATOR \n Insert your second number:"));
  var result = 0;

  if (operator == "+") {
    result = add(e, f);
    alert(e + "+" + f);
  } 
  else if (operator == "-") {
    result = subtract(e, f);
    alert(e + "-" + f);
  }
  else if (operator == "*") {
    result = multiply(e, f);
    alert(e + "*" + f);
  } 
  else if (operator == "/") {
    result = divide(e, f);
    alert(e + "/" + f);
  }
  else if (operator == "%") {
    result = modulus(e, f);
    alert(e + "%" + f);
  }
  else {
    alert("Put a valid operator or number");
  }
  alert(result);
}

simpleCalc();
