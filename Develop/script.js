// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordsLength = 8;
var randomCharacters= [];
var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers=["1","2","3","4","5","6","7","8","9","0"];
var specialCharacters=["!","@","#","$","%","&","*","(",")","+","[","]"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  function generatePassword() {
    var passwordCreated = ""
        for (var i=0; i< passwordsLength; i++) {
       var randomPassword = Math.floor(Math.random() * randomCharacters.length);
       passwordCreated = passwordCreated + randomCharacters[randomPassword];
        }
    return passwordCreated;
  }

  function passwordCriteria() {
    passwordsLength= +prompt("How many characters would you like your password to have?");
  if (passwordsLength<8 || passwordsLength>128 || passwordsLength===" ") {
      alert("Re-enter valid entry. It has to be between 8 and 128 characters long");
      return false
  
  
  }





}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
