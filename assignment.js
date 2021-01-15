

//  1

 // Here we ask the user if they eat fish, and store the result (true/false) in a variable.
// <<<<<<< HEAD
// var eatFish = confirm("Did you eat fish?");

// if(eatFish){
//     document.write("The best Fish is ");
// } else{
    
// document.write("You must be a meat eater" + "<br>");
// }


// =======
//  var eatFish= prompt("Do you eat fish?"); 
// >>>>>>> ed5db3ce0160e45028812b0a32c84a2dde6defec

 // If the user eats fish (eatFish === true) doument.write, "Fish is rich in B12".
            // if (eatFish=== yes) {
            //     document.write("Fish is rich in B12");
            // } 
            
            // else {
            //     document.write("You must be a meatatrian"); 
            // }; 
 // If the above condition isn't met (eatFish !== true), doument.write, "You must be a meateater".
 

 // 2
 // Ask the user what year they were born, and store their response to a variable.
 

// var birthday = prompt("what year were you born");

// if(birthday >= 1997){
//     document.write(" You are in the generation Z");

// } else if(birthday <= 1997){
//     document.write(" You are a millennial!");

// }

// =======
            var birthYear= prompt("What year were you born?");
            if (birthYear > 1997 || birthYear > 2020) {
                alert("You are in Gen Z")
            } else if (birthYear < 1997 || birthYear > 1980) {
                alert("You are a millennial")
            } else {
                alert("you inched by")
            };
// >>>>>>> ed5db3ce0160e45028812b0a32c84a2dde6defec
// =======
        
// >>>>>>> 25f4a6eeb715249c745d127a2382c8776e6b8d21
 // If the user was born before 1997, alert "You are in Generation Z"
            
 // Else if the user was born after 1997, alert "You are a millennial!"
 
 // If neither of the previous conditions was true (birthYear === 1995) we alert "You inched by!"
 


// 3//

 // Create an array called  animals.
// <<<<<<< HEAD
// // <<<<<<< HEAD
 var animals = ["Pitbull", "lion", "parrot"]
// =======
 var animals= ["bird", "cat", "dog", "hamster", "turtle", "fish"];  
// >>>>>>> ed5db3ce0160e45028812b0a32c84a2dde6defec
// =======
//  var animals= ["bird", "cat", "dog", "hamster", "turtle", "fish"];  
// >>>>>>> 25f4a6eeb715249c745d127a2382c8776e6b8d21
 // Log the length of the  animals array to the document
console.log(animals.length);

// <<<<<<< HEAD
 // Log an animal in the cat family.
console.log(animals[1]);
// =======
 // Log an animal in the cat.
 
// >>>>>>> ed5db3ce0160e45028812b0a32c84a2dde6defec

 // Log the animal dog.
 console.log(animals[0]);


 // Log the animal bird.
 console.log(animals[2]);


 // Log the animal[13]. //what result do you get
 console.log(animals[13]);

 // Add an new animal to the [2] position of the array with out changing the array
// console.log(animals.splice(2, 0, "husky"));
 animals.splice(2, 0, "husky");
 console.log(animals);
 

//4//

// Created an array named myBands.
 
var myBands = ["50 cent","michael jackson","wiz khalifa"];
// Created a prompt to get the user's favorite band.
var userGuess = prompt("Who is your favorite?");
// Converts the user's answer to lowercase.
 
var userGuessLower = userGuess.toLowerCase(); 
// Now we check the myBands array to see if it contains the user's answer.
if (myBands.indexOf(userGuessLower) === -1) {
  alert("I must hear them");
}

else {
  alert("My favorite, Oh YEAH!!!!!");
}

//5//

// song-object
// Create a constructor function called Song. Song should take in two arguments, title and artist, which should both be added as properties when the Song constructor function is used. The Song function should also have a method called play on its prototype. When called, the play function should console.log the name of that specific song preceded by the word 'Playing:'.
// function should also have a method called play on its prototype. When called, the play function should console.log the name of that specific song preceded by the word 'Playing:'.

function Song(title, artist) {
    this.title = title;
    this.artist = artist;
    
  }

Song.prototype.name = function() {
    return this.title + " " + this.artist + " is Playing";
  };

  var music = new Song ("Wiz Khalifa", "Black and Yellow");

console.log(music);
/*6//
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them.

// // Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)

NOTE: always look at the test results to see further details about what the test is expecting.
For example, the tests require that to complete this challenge, your function must return
0 if the input is empty. Please see the README file for an explanation of how to expand the test
results on the index page in the browser.
*/







var numbers = [5, 2, 6, 5];

function getSum(total, num) {
  return total + num;
}
console.log(numbers.reduce(getSum, 0));



//7/*
// ----------------------------------------
// CHALLENGE
// ----------------------------------------

// Write function named doubleLetters that will take a string and double every letter in the string

// Example: if you pass it "abc" then it should return "aabbcc"
// */

function doubleLetters(array) {
    var newArray = [];
    array.forEach(function (el) { newArray.push(el, el); });    
    return newArray;
  }
  
  console.log(doubleLetters(["a","b","c"]));

/*8//
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

// Example: if you pass it [1,2,3] then it should return [2,4,6]
*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 var even = numbers.filter(function (n) {
     return (n % 2 == 0);

 });
 console.log(even);