// ARRAYS FOR CRITERIA SELECTION
// SPECIAL CHARTACTERS ARRAY
  var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '`', '|', '~'];

// LOWERCASE ARRAY
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// UPPERCASE ARRAY
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// NUMBER ARRAY
  var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


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
    var includeSpecialCharacters = confirm(
      'Do you want to include a special character? Click OK for yes, CANCEL for no.'
    );

// PASSWORD LOWERCASE PROMPT
    var includeLowercaseCharacters = confirm(
      'Do you want to include a lowercase letter? Click OK for yes, CANCEL for no.'
    );

// PASSWORD UPPERCASE PROMPT
    var includeUppercaseCharacters = confirm(
      'Do you want to include an uppercase letter? Click OK for yes, CANCEL for no.'
    );

// PASSWORD NUMBER PROMPT
    var includeNumberCharacters = confirm(
      'Do you want to include a number? Click OK for yes, CANCEL for no.'
    );

// PASSWORD CRITERIA SELECTION VALIDATION - user must choose atleast one to generate password
    if (
      includeSpecialCharacters == false &&
      includeLowercaseCharacters == false &&
      includeUppercaseCharacters == false &&
      includeNumberCharacters == false
    ) {
      alert ('Please say yes to atleast one of the password criterias to continue.');
      return;
    }

// USER CRITERIA SELECTION STORING

    var passwordCriterias = {
      length: length,
      includeSpecialCharacters: includeSpecialCharacters,
      includeLowercaseCharacters: includeLowercaseCharacters,
      includeUppercaseCharacters: includeUppercaseCharacters,
      includeNumberCharacters: includeNumberCharacters
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

  if (options.includeSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacter);
    guaranteedCharacters.push(getRandomCriteriaElement(specialCharacters));
  }

  if (options.includeLowercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
    guaranteedCharacters.push(getRandomCriteriaElement(lowercaseCharacters));
  }

  if (options.includeUppercaseCharacters) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
    guaranteedCharacters.push(getRandomCriteriaElement(uppercaseCharacters));
  }

  if (options.includeNumberCharacters) {
    possibleCharacters = possibleCharacters.concat(numberCharacters);
    guaranteedCharacters.push(getRandomCriteriaElement(numberCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandomCriteriaElement(possibleCharacters);
    result.push(possibleCharacter);
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