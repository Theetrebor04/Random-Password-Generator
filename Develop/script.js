// Special Characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numeric Characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical Characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
git 
// Assignment code here
var writePassword = function() {
  var length = parseInt(prompt("How many characters would you like your password to be? Please choose a number between 8 and 128"));
  // If the prompt is left blank
  if (!length) {
    alert("This needs a value.");
    writePassword();

  // If the option chose is below 8 and above 128
  } else if (length < 8 || length > 128) {
      length = parseInt(alert("You must choose a number between 8 and 128."));
      writePassword();

  //If the option meets all criteria it will continue with further questions    
  } else {
      //This will continue your prompts for password criteria
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
