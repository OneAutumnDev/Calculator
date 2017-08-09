//Click listeners to listen for a click on one of the number buttons or action buttons
//When I click a button, it updates the field at the top. (Shows 8 + 8 until I click equals)
//Once I click the equals sign, or extend beyond 2 numbers (8 + 3 - 4), it will compute those.
//When I click a back button it removes the most recent sign or number added
//when I click a clear button, it wipes the entire field and resets the screen to 0
//document.getElementByClassName("").addEventListener("onclick",function(){....});
//Object that stores the values of 1-9 + 0, for onkeypress events. Functionality for users to type inputs into the
    //keyboard instead of only click listeners.

var numButtons = [];
//when I click on 1, update the screen. I will need to take the value stored in 1, and "add" it to the value on the screen.
var els = document.querySelector(".one");
  els.addEventListener("click", function(){
    alert("connected");
  });

//Currently selecting only the first class named "one"; I will need a add an event listener to all of the buttons.
//Either by adding the event listener to a different class each time, or by creating a loop.
