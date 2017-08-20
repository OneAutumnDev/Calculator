var inp1 = "";
var inpOp = "";
var inp2 = "";
var total = ""; //initial total. Changes when calculation run
var numButtons = []; //Array that number button clicks are stored in.
var numButtons2 = []; //Array for number button clicks, tied to inp2
var opButtons = []; //Array for operator buttons, tied to inpOp
var current = document.querySelector(".screen span"); //The current value, shown on the screen
var numBtn = document.querySelectorAll(".one"); //Selector, all elements with class of "one" (placeholder)
var opBtn = document.querySelectorAll(".operator");
var calculation = {
  "+": function(a, b) { return a + b},
  "-": function(a, b) { return a - b},
  "*": function(a, b) { return a * b},
  "/": function(a, b) { return a / b}
}

//function to add operators to the signButtons array and then convert them into values for the inpSign variable. Happens during the click event.
var opBtnEvent = function() {
  if(inpOp.length < 1){
    opButtons.push(this.value);
    inpOp = opButtons.toString().replace(/,/g, "");
    current.textContent = inpOp;
  } else {
    //if there is already an operator, exit the loop returning "undefined"
    return;
  }
}
//Loop through all of the buttons (querySelectorAll stores them in a pseudo Array)
for(var i = 0; i < numBtn.length; i++){
  //At numBtn[i] (pseudo Array) add a click listener that takes an anonymous function.
  numBtn[i].addEventListener("click", function(){
    if (inpOp.length === 0) {
      //Push(add) the value of numBtn[i] to the end of the numButtons array, each time a button is pressed.
      numButtons.push(this.value);
      //Update the display to show the current value, converted to a string and without the commas.
      inp1 = numButtons.toString().replace(/,/g,"");
      current.textContent = inp1;
    } else {
      numButtons2.push(this.value);
      inp2 = numButtons2.toString().replace(/,/g,"");
      current.textContent = inp2
    }
  });
}

//Loop to add click listeners to the operator buttons
for(var i = 0; i < opBtn.length; i++){
    opBtn[i].addEventListener("click", opBtnEvent, false);
}



//if the equals button is pressed, run the calculation. calculation[signBtn](inp1, inp2);
