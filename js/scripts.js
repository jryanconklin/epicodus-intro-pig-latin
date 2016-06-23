// Business End Logic

var vowels = ["a", "e", "i", "o", "u"];
var input = [];
var input1;

function vowelCheck() {
  vowels.forEach(function(vowel) {
    if (input.charAt(0) === vowel) {
      input = input + "ay";
    }
  });
}

// for (i= ) {
//
// }



function consonantCheck() {
  vowels.forEach(function(vowel) {
    if (input.charAt(0) !== vowel ) {
      // var input1 = input.slice(0, 1);
      // console.log(input1);
      input = input + "ay";
    }
  });
}



// User End Logic

$(document).ready(function() {
  $("form#pigLatinInput").submit(function(event) {
    input = $("input#pigLatinText").val();

    // if (input1 === "true") {
    //   input = input + "ay";
    // }
    // if (consonantCheck() ) //This will check the function for boolean.
    
    consonantCheck();
    console.log(input);
    event.preventDefault();
  });
});
