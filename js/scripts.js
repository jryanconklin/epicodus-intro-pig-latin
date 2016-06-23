// Business End Logic

var vowels = ["a", "e", "i", "o", "u"];
var input = "egg";

function vowelCheck() {
  vowels.forEach(function(vowel) {
    if (input.charAt(0) === vowel) {
      input =  input + "ay";
    }
  });
}
vowelCheck();

// User End Logic
