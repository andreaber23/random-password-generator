// Assignment Code
var generateBtn = document.querySelector("#generate");



  // 1. Presented with password criteria
  //  a.length of password 8<128
  //  b.confirm if lower case or not
  //  c.confirm if upper or lower case
  //  d. numeric characters or not
  //  e. special characters or no
  // 2. Validate input and at least 1 character type included
  // 3. Generate password based on criteria
  // 4. Password is displayed 



  






  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
