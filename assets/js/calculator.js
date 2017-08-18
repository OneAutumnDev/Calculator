//Click listeners to listen for a click on one of the number buttons or action buttons
//When I click a button, it updates the field at the top. (Shows 8 + 8 until I click equals)
//Once I click the equals sign, or extend beyond 2 numbers (8 + 3 - 4), it will compute those.
//When I click a back button it removes the most recent sign or number added
//when I click a clear button, it wipes the entire field and resets the screen to 0
//document.getElementByClassName("").addEventListener("onclick",function(){....});
//Object that stores the values of 1-9 + 0, for onkeypress events. Functionality for users to type inputs into the
    //keyboard instead of only click listeners.

var inp1 = "";
var inpSign = "";
var inp2 = "";
var total = ""; //initial total. Changes when calculation run
var current = document.querySelector(".screen span"); //The current value, shown on the screen
var numButtons = [];//Arry that number button clicks are stored in.
var signButtons = [];
var numBtn = document.querySelectorAll(".one"); //Selector, all elements with class of "one" (placeholder)
var signBtn = document.querySelectorAll(".sign");



//Loop through all of the buttons (querySelectorAll stores them in a pseudo Array)
for(var i = 0; i < numBtn.length; i++){
  //At numBtn[i] (pseudo Array) add a click listener that takes an anonymous function.
  numBtn[i].addEventListener("click", function(){
    //Push(add) the value of numBtn[i] to the end of the numButtons array, each time a button is pressed.
    numButtons.push(this.value);
    if (inpSign.length === 0) {
      //Update the display to show the current value, converted to a string and without the commas.
      inp1 = numButtons.toString().replace(/,/g,"");
      current.textContent = inp1;
      total = inp1 + inpSign + inp2;
    } else {
      inp2 = numButtons.toString().replace(/,/g,"");
      current.textContent = inp2;
      total = inp1 + inpSign + inp2;
    }
  });
}


for(var i = 0; i < signBtn.length; i++){
  signBtn[i].addEventListener("click", function(){
    signButtons.push(this.value);
    inpSign = signButtons.toString().replace(/,/g, "");
    current.textContent = inpSign;
    total = inp1 + inpSign + inp2;
  });
}

//reset function: after input 1, reset to empty. Save next inputs to a new variable.
function reset(){
  
}
