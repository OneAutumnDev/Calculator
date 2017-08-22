var current = document.querySelector(".screen span"); //The current value, shown on the screen
var numBtn = document.querySelectorAll(".num"); //Selector, all elements with class of num (Number Buttons)
var operBtn = document.querySelectorAll(".operator"); //Selects the operator buttons "+,-,*,/"
var equalsBtn = document.querySelector(".equals"); //Selects the equals "=" button
var decimalBtn = document.querySelector(".decimal"); //Selects the decimal "." button
var clearAll = document.querySelector(".clearAll");
var calculation = {
  "+": function(a, b) { return a + b},
  "-": function(a, b) { return a - b},
  "*": function(a, b) { return a * b},
  "/": function(a, b) { return a / b}
}
var numOne = "";
var numTwo = "";
var numThree = "";
var oper = "";
var equals = "";
var decimal = "";
var numButtonsOne = []; //Array for number button clicks, tied to numOne
var numButtonsTwo = []; //Array for number button clicks, tied to numTwo
var operButtons = []; //Array for operator buttons, tied to oper

//Object that stores the potential calculations based on the oper variable.


//Loop to add click listeners to the operator buttons
for(var i = 0; i < operBtn.length; i++){
    operBtn[i].addEventListener("click", operBtnEvent, false);
}

//Equals button click listener, runs the equality function on click
equalsBtn.addEventListener("click", equality, false);

decimalBtn.addEventListener("click", decimalFunc, false);

clearAll.addEventListener("click", function(){
  reset();
  current.textContent = 0;
});

//Loop through the number Buttons, logic for Number One and Number Two
for(var i = 0; i < numBtn.length; i++){
  //Click Listener for Number Buttons
  numBtn[i].addEventListener("click", function(){
    //If there is not an operator, add number clicks to Number One, else add them to Number Two
    if (oper.length === 0) {
      //If there is a decimal point, add it in.
      if(decimal.length === 1) {
        numButtonsOne.push(".");
        resetDecimal();
      }
      //Push(add) the value of numBtn[i] to the end of the numButtons array, each time a button is pressed.
      numButtonsOne.push(this.value);
      //Update the display to show the current value, converted to a string and without the commas.
      numOne = numButtonsOne.toString().replace(/,/g,"");
      current.textContent = numOne;
    } else {
      //If there is not an operator, add number clicks to Number One, else add them to Number Two
      if(decimal.length === 1) {
        //If there is a decimal point, add it in.
        numButtonsTwo.push(".");
        resetDecimal();
      }
      numButtonsTwo.push(this.value);
      numTwo = numButtonsTwo.toString().replace(/,/g,"");
      current.textContent = numTwo;
    }
  });
}


//function to add operators to the signButtons array and then convert them into values for the inpSign variable. Happens during the click event.
function operBtnEvent() {
  if(oper.length < 1){
    operButtons.push(this.value);
    oper = operButtons.toString().replace(/,/g, "");
    current.textContent = oper;
  } else {
    //if there is already an operator, exit the loop returning "undefined"
    return;
  }
}

function decimalFunc(){
  decimal = ".";
}

function resetDecimal(){
  decimal = "";
}

//Function to calculate the total when the equals button is clicked.
function equality() {
  equals = "=";
  numOne = Number(numOne);
  numTwo = Number(numTwo);
  calculate();
  reset();
}

//Function that resets the calculator back to initial state. Saves the result of numOne and numTwo as numThree.
function reset() {
  numOne = "";
  numTwo = "";
  numThree = "";
  oper = "";
  equals = "";
  decimal = "";
  numButtonsOne = [];
  numButtonsTwo = [];
  operButtons = [];
}

//Function that actually calculates and returns the results of numOne and numTwo
function calculate() {
  numThree = calculation[oper](numOne,numTwo);
  current.textContent = numThree;
}

//If numThree != "", use numThree as numOne, and run the next calculation using numTwo.

//Do I need to divide or use modulus? Can I add a button that will return the remainder of two numbers?
