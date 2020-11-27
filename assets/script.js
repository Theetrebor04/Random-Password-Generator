// Special Characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numeric Characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical Characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Used for uppercase conversion
space = [];

// Converts letters to uppercase
var toUpper = function (x) {
  return x.toUpperCase();
};

// Creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

// So choices can be globally selected 
var choices;

// User Variables 
var length;
var confirmNumber;
var confirmCharacter;
var confirmLowercase;
var confirmUppercase;

// Assignment code here
var generatePassword = function() {
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

  // If user selects no criteria
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    alert("You must choose at least one criteria for your password!");
    writePassword();
  }

  // If user selects all criteria
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
   choices = character.concat(number, alpha, alpha2);
  }

   // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(alpha, alpha2);
  }

  // Else if for 2 positive options 
  else if (confirmCharacter && confirmNumber) {
      choices = character.concat(number);
  } else if (confirmCharacter && confirmLowercase) {
      choices = character.concat(alpha);
  } else if (confirmCharacter && confirmUppercase) {
      choices = character.concat(alpha2);
  }

  else if (confirmLowercase && confirmNumber) {
      choices = alpha.concat(number);
  } else if (confirmLowercase && confirmUppercase) {
      choices = alpha.concat(alpha2);
  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(alpha2);
  }

  // Else if for 1 positive option
  else if (confirmCharacter) {
      choices = character;
  }
  else if (confirmNumber) {
      choices = number;
  }
  else if (confirmLowercase) {
      choices = alpha;
  }

  // Created space variable to fill uppercase conversion
  else if (confirmUppercase) {
      choices = space.concat(alpha2);
  };

  // Array placeholder 
  var password = [];

  // Actual randomization of the password
  for (var i= 0; i < length; i++) {
    var pickChoices = choices[Math.floor(Math.random() *choices.length)];
    password.push(pickChoices);
  }

  // Converts array to a string 
  var ps = password.join("");
  UserInput(ps);
  return ps;

};

// Function to place the randomly generated password into the text box
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
