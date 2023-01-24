// Assignment code here

var password = document.getElementById("password");
var generateBtn = document.querySelector("#generate");;

function generatePassword() {
  var chars ="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*";
  var passwordLength = 15;
  var password = "";

for (let index = 0; index < passwordLength; index++) {
  var randomNumber = Math.floor(Math.random() * chars.length)
  password += chars.substring(randomNumber , randomNumber +1);
}

  document.getElementById("password").value = password; {
    return password;
  }
  
}

generateBtn.addEventListener("click", generatePassword);

 



























