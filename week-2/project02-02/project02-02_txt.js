/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: John Kuronya
      Date: 1/16/25

      Filename: project02-02.js
 */

// verifyForm function
function verifyForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

// conditional operator to check if name, email, and phone are truthy
  name && email && phone
     ? window.alert("Thank you!")
     : window.alert("Please fill in all fields");
}

// event listener for the id "submit"
document.getElementById("submit").addEventListener("click", verifyForm);