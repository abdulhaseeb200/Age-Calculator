function calculatage() {
var birthdateInput = document.getElementById("birthdate").value;
var birthdate =  new Date(birthdateInput);
var today = new Date();

var age = Math.floor((today - birthdate) / (365.25 * 24 * 60 * 60 * 1000));
document.getElementById("result").innerHTML = "Your age is: " + age;

}

