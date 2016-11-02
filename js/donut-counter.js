//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts

var guests
var donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.

guests = prompt("How many guests?")
donuts = prompt("How many donuts?")

//use parseInt to convert the users answer from a string to an integer.

guests = parseInt(guests)
donuts = parseInt(donuts)

alertMsg = `The number of donuts is ${donuts}. The number of guests is ${guests}. `
//write a conditional to check if there are enough donuts
  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.

if (donuts < guests){
  alertMsg += "Oh no, there are not enough donuts!"
} else {
  alertMsg += "You have plenty of donuts!"
}

alert(alertMsg)

  



