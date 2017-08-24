var current = document.querySelector(".screen span"); //The current value, shown on the screen
var numBtn = document.querySelectorAll(".num"); //Selector, all elements with class of num (Number Buttons)
var operBtn = document.querySelectorAll(".operator"); //Selects the operator buttons "+,-,*,/"
var equalsBtn = document.querySelector(".equals"); //Selects the equals "=" button
var decimalBtn = document.querySelector(".decimal"); //Selects the decimal "." button
var clearAll = document.querySelector(".clearAll");
var clearLast = document.querySelector(".clearLast");
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
    operBtn[i].addEventListener("click", operBtnEvent);
}

//Equals button click listener, runs the equality function on click
equalsBtn.addEventListener("click", equality);

decimalBtn.addEventListener("click", decimalFunc);

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
      }
      //Push(add) the value of numBtn[i] to the end of the numButtons array, each time a button is pressed.
      numButtonsOne.push(this.value);
      //Update the display to show the current value, converted to a string and without the commas.
      numOne = numButtonsOne.toString().replace(/,/g,"");
      current.textContent = numOne;
    } else {
      resetDecimal();
      //If there is not an operator, add number clicks to Number One, else add them to Number Two
      if(decimal.length === 1) {
        //If there is a decimal point, add it in.
        numButtonsTwo.push(".");
      }
      numButtonsTwo.push(this.value);
      numTwo = numButtonsTwo.toString().replace(/,/g,"");
      current.textContent = numTwo;
    }
  });
}

clearLast.addEventListener("click", clearLastItem);

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
  decimal += ".";
}

function resetDecimal(){
  if(decimal.length > 0){
    decimal = "";
  }
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

function clearLastItem() {
  if(numOne.length <= 1){
    reset();
    current.textContent = 0;
  }
  //clear last value in numOne
  //if there is no operator, clear numOne
  if(oper.length === 0 && numOne.length > 0){
    numButtonsOne.pop();
    numOne = numButtonsOne.toString().replace(/,/g,"");
    current.textContent = numOne;
  }
  //clear the operator value
  //if there is an operator, but numTwo is empty, clear operator
  if(oper.length === 1 && numTwo.length === 0){
    operButtons.pop();
    oper = operButtons.toString().replace(/,/g, "");
    current.textContent = numOne;
  }
  //clear last value in numTwo
  //if numTwo.length > 0, clear numTwo
  if(numTwo.length > 0){
    numButtonsTwo.pop();
    numTwo = numButtonsTwo.toString().replace(/,/g,"");
    current.textContent = numTwo;
    if(numTwo.length === 0){
      current.textContent = oper;
    }
  }
}



//PROBLEM: multiple decimals still works. I.e. 3.1.4.5.9.2.6.5
//How to fix?


//Bug Fix 1: Fixed issue where clear last on operator would remove the operator, but failed to return/show to numOne
//Bug Fix 2: Fixed issue where clearLast on the inital screen would clear away the 0.
