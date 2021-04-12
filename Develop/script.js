// ARRAYS FOR CRITERIA SELECTION
// SPECIAL CHARTACTERS ARRAY
  var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '`', '|', '~'];

// LOWERCASE ARRAY
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// UPPERCASE ARRAY
  var uppercaseCharcters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// NUMBER ARRAY
  var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// USER CRITERIA SELECTION INPUT PROMPTS
// PASSWORD LENGTH PROMPT
  function getPasswordCriterias() {
    var length = parseInt(
      prompt ('How long do you want your password?')
    );

    if (isNaN(length) == true) {
      alert('Please enter a number');
      return;
    }

    if (length < 8) {
      alert('Password must be atleast 8 characters');
      return;
    }

    if (length > 128) {
      alert('Password must be no longer than 128 characters');
      return;
    }

// PASSWORD SPECIAL CHARACTER PROMPT
    var includeSpecialCharacters = confirm(
      'Do you want special characters? Click OK for yes, CANCEL for no.'
    );

// PASSWORD LOWERCASE PROMPT
    var includeLowerCaseCharacters = confirm(
      'Do you want lowercase letters? Click OK for yes, CANCEL for no.'
    );

// PASSWORD UPPERCASE PROMPT
    var includeUpperCaseCharacters = confirm(
      'Do you want uppercase letters? Click OK for yes, CANCEL for no.'
    );

// PASSWORD NUMBER PROMPT
    var includeNumberCharacters = confirm(
      'Do you want numbers? Click OK for yes, CANCEL for no.'
    );

// USER CRITERIA SELECTION STORING

// PASSWORD WRITING

// PASSWORD GENERATION WITH CRITERIA OUTPUT

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