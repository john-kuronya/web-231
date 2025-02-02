/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: John Kuronya
      Date: 1/27/25

      Filename: project03-01.js
*/

//Retrieve all elements with the class "menuItem"
let menuItems = document.getElementsByClassName("menuItem");

//for loop to iterate through the menuItems, with event listener to each item
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", calcTotal);
}

//calcTotal() function that calculates the total cost of selected menu items
function calcTotal() {
  let orderTotal = 0;

// Loop through all menu items
  for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].checked) {
          orderTotal += Number(menuItems[i].value);
      }
  }

// Update the total on the webpage using formatCurrency()
   document.getElementById("billTotal").textContent = formatCurrency(orderTotal);
  }

 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }