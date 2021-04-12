// ARRAYS FOR CRITERIA SELECTION
// SPECIAL CHARTACTERS ARRAY
  var specialCharacter = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '`', '|', '~'];

// LOWERCASE ARRAY
  var lowercaseCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// UPPERCASE ARRAY
  var uppercaseCharacter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// NUMBER ARRAY
  var numberCharacter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// USER PASSWORD CRITERIA SELECTION INPUT PROMPTS
// PASSWORD LENGTH PROMPT- user must enter a number
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
    var includeSpecialCharacter = confirm(
      'Do you want to include a special character? Click OK for yes, CANCEL for no.'
    );

// PASSWORD LOWERCASE PROMPT
    var includeLowercaseCharacter = confirm(
      'Do you want to include a lowercase letter? Click OK for yes, CANCEL for no.'
    );

// PASSWORD UPPERCASE PROMPT
    var includeUppercaseCharacter = confirm(
      'Do you want to include an uppercase letter? Click OK for yes, CANCEL for no.'
    );

// PASSWORD NUMBER PROMPT
    var includeNumberCharacter = confirm(
      'Do you want to include a number? Click OK for yes, CANCEL for no.'
    );

// PASSWORD CRITERIA SELECTION VALIDATION - user must choose atleast one to generate password
    if (
      includeSpecialCharacter == false &&
      includeLowercaseCharacter == false &&
      includeUppercaseCharacter == false &&
      includeNumberCharacter == false
    ) {
      alert ('Please say yes to atleast one of the password criterias to continue.');
      return;
    }

// USER CRITERIA SELECTION STORING

    var passwordCriterias = {
      length: length,
      includeSpecialCharacter: includeSpecialCharacter,
      includeLowercaseCharacter: includeLowercaseCharacter,
      includeUppercaseCharacter: includeUppercaseCharacter,
      includeNumberCharacter: includeNumberCharacter
    };

    return passwordCriterias;
  }


// PASSWORD WRITING
// PASSWORD CRITERIA ARRAY ELEMENT RANDOMIZATION
function getRandomCriteriaElement(criteriaArray) {
  var criteriaIndex = Math.floor(Math.random() * criteriaArray.length);
  var randomCriteriaArrayElement = criteriaArray[criteriaIndex];

  return randomCriteriaArrayElement;
}
//PASSWORD GENERATION USING USER CRITERIA INPUTS
function generatePassword () {
  var options = getPasswordCriterias ();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.includeSpecialCharacter) {
    possibleCharacters = possibleCharacters.concat(specialCharacter);
    guaranteedCharacters.push(getRandomCriteriaElement(specialCharacter));
  }

  if (options.includeLowercaseCharacter) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacter);
    guaranteedCharacters.push(getRandomCriteriaElement(lowercaseCharacter));
  }

  if (options.includeUppercaseCharacter) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacter);
    guaranteedCharacters.push(getRandomCriteriaElement(uppercaseCharacter));
  }

  if (options.includeNumberCharacter) {
    possibleCharacters = possibleCharacters.concat(numberCharacter);
    guaranteedCharacters.push(getRandomCriteriaElement(numberCharacter));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacters = getRandomCriteriaElement(possibleCharacters);
    result.push(possibleCharacters);
  }

  for (var i = 0; guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

// OTHER
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