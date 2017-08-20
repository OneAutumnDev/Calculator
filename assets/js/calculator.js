var numOne = "";
var oper = "";
var numTwo = "";
var numThree = "";
var total = ""; //initial total. Changes when calculation run
var equals = "";
var numButtonsOne = []; //Array that number button clicks are stored in.
var numButtonsTwo = []; //Array for number button clicks, tied to numTwo
var operButtons = []; //Array for operator buttons, tied to oper
var current = document.querySelector(".screen span"); //The current value, shown on the screen
var numBtn = document.querySelectorAll(".one"); //Selector, all elements with class of "one" (placeholder)
var operBtn = document.querySelectorAll(".operator");
var equalsBtn = document.querySelector(".equals");
var calculation = {
  "+": function(a, b) { return a + b},
  "-": function(a, b) { return a - b},
  "*": function(a, b) { return a * b},
  "/": function(a, b) { return a / b}
}

//function to add operators to the signButtons array and then convert them into values for the inpSign variable. Happens during the click event.
var operBtnEvent = function() {
  if(oper.length < 1){
    operButtons.push(this.value);
    oper = operButtons.toString().replace(/,/g, "");
    current.textContent = oper;
  } else {
    //if there is already an operator, exit the loop returning "undefined"
    return;
  }
}
//Loop through all of the buttons (querySelectorAll stores them in a pseudo Array)
for(var i = 0; i < numBtn.length; i++){
  //At numBtn[i] (pseudo Array) add a click listener that takes an anonymous function.
  numBtn[i].addEventListener("click", function(){
    if (oper.length === 0) {
      //Push(add) the value of numBtn[i] to the end of the numButtons array, each time a button is pressed.
      numButtonsOne.push(this.value);
      //Update the display to show the current value, converted to a string and without the commas.
      numOne = numButtonsOne.toString().replace(/,/g,"");
      current.textContent = numOne;
    } else {
      numButtonsTwo.push(this.value);
      numTwo = numButtonsTwo.toString().replace(/,/g,"");
      current.textContent = numTwo;
    }
  });
}

//Loop to add click listeners to the operator buttons
for(var i = 0; i < operBtn.length; i++){
    operBtn[i].addEventListener("click", operBtnEvent, false);
}

equalsBtn.addEventListener("click", equality, false);

function equality() {
  equals = "=";
  numOne = Number(numOne);
  numTwo = Number(numTwo);
  calculate();
  reset();
}

//if the equals button is pressed, run the calculation. calculation[signBtn](inp1, inp2);
function reset() {
  numOne = oper = numTwo = "";
  numButtonsOne = numButtonsTwo = operButtons = [];
  current.textContent = numThree;
}

function calculate() {
  numThree = calculation[oper](numOne,numTwo);
  current.textContent = numThree;
}
