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
    var confirmedCriteria = passwordCriteria();
    var passwordText = document.querySelector("#password");
    
      if (confirmedCriteria){
        var password = generatePassword();
        
        passwordText.value = password;
  }
}

function generatePassword() {
    var passwordCreated = ""
        for (var i=0; i< passwordsLength; i++) {
       var randomPassword = Math.floor(Math.random() * randomCharacters.length);
       passwordCreated = passwordCreated + randomCharacters[randomPassword];
        }
    return passwordCreated;
  }






  // 1. Presented with password criteria
  //  a.length of password 8<128
function passwordCriteria() {
  passwordsLength= +prompt("How many characters would you like your password to have?");
if (passwordsLength<8 || passwordsLength>128 || passwordsLength===" ") {
    alert("Re-enter valid entry. It has to be between 8 and 128 characters long");
    return false


}
  




  //  b.confirm if lower case or not
  if (confirm("Click OK to confirm lowercase letters")) {
    randomCharacters=(randomCharacters.concat(lowerCase))
      }
  //  c.confirm if upper or lower case
  if (confirm("Click OK to confirm uppercase letters")) {
    randomCharacters=(randomCharacters.concat(upperCase))
    }
  //  d. numeric characters or not
  if (confirm("Click OK to confirm numbers in your password")) {
    randomCharacters=(randomCharacters.concat(numbers))
   }
  //  e. special characters or no
  if (confirm("Click OK to confirm special characters ")) {
    randomCharacters=(randomCharacters.concat(specialCharacters))
   }

   return true 
}
  // 2. Validate input and at least 1 character type included
  // 3. Generate password based on criteria
  // 4. Password is displayed 



  






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
