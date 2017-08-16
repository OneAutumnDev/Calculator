//Click listeners to listen for a click on one of the number buttons or action buttons
//When I click a button, it updates the field at the top. (Shows 8 + 8 until I click equals)
//Once I click the equals sign, or extend beyond 2 numbers (8 + 3 - 4), it will compute those.
//When I click a back button it removes the most recent sign or number added
//when I click a clear button, it wipes the entire field and resets the screen to 0
//document.getElementByClassName("").addEventListener("onclick",function(){....});
//Object that stores the values of 1-9 + 0, for onkeypress events. Functionality for users to type inputs into the
    //keyboard instead of only click listeners.


var current = document.querySelector(".screen span"); //The current value, should show on screen
var inputDigit = ""; //The value that is being added to the current value.
var numButtons = [];
//when I click on 1, update the screen. I will need to take the value stored in 1, and "add" it to the value on the screen.
var numBtn = document.querySelectorAll(".one");
for(var i = 0; i < numBtn.length; i++){
  numBtn[i].addEventListener("click", function(){
    numButtons.push(this.value);
    current.textContent = numButtons.toString();
  });
}
//Currently selecting only the first class named "one"; I will need a add an event listener to all of the buttons.
//Either by adding the event listener to a different class each time, or by creating a loop.
//current.textContent = numButtons;

// I need the conversion to string to run after we have click buttons, everytime we click a button it runs.
