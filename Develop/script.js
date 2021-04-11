// ARRAYS FOR CRITERIA SELECTION
// SPECIAL CHARTACTERS ARRAY
  var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\", "]", "^", "_", '`', "{", '|', "}", '~'];

// LOWERCASE ARRAY
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// UPPERCASE ARRAY
  var uppercaseCharcters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// NUMBER ARRAY
  var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// USER CRITERIA SELECTION PROMPTS
// PASSWORD LENGTH PROMPT

// PASSWORD SPECIAL CHARACTER PROMPT

// PASSWORD LOWERCASE PROMPT

// PASSWORD UPPERCASE PROMPT

// PASS NUMBER PROMPT


// USER CRITERIA SELECTION STORING


// PASSWORD GENERATION WITH CRITERIA


// SHOW PASSWORD







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