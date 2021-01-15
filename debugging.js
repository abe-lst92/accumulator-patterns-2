//Change me to ES6 syntax

//1
let shoppingDone = false;
childAllowane = 0;

let shopping = (shoppingDone == true) ? childAllowane = 10 : childAllowane = 5;
console.log(shopping);

// if (shoppingDone === true) {
//   let childsAllowance = 10;
// } else {
//   let childsAllowance = 5;
// }


//2 

const time= new Date().toLocaleString();
let str = 'Hello';
let name= "April";

document.write(` ${str} ${name} it is currently ${time}`); 

//3

function sample (a){
  return( a + 100);
  
}
  console.log(sample(15));
//function with parameters
// ES5
// var multiplyES5 = function(x, y) {
//   return x * y;
// };
// console.log(multiplyES5());
// ES6
//  🌺

const multiplyES5 = (x, y) => {
  return x * y
}

console.log(multiplyES5(15, 10));


//Debug ME//

//  person; // does not belong to nothing no declaration

//  let data = {};// no key-value pairs empty object
//  data.displayInfo();

//  let data = {}; 
//  data.displayInfo.foo = "bar"; //foo is undefined it doesn't belong to anything

//  function data(){
//      let thing = "foo";
//  }


//  data();
//  thing; // scoping issue


 for(let i=0; i < 5; i++){
     console.log(i);
 }

function addIfEven(num){
   if(num % 2 === 0){
       return num + 5;
   }
   return num;
 }

 function loopToFive(){
    for(let i=0; i < 5; i++){
         console.log(i);
     }
 }

 function displayEvenNumbers(){
        let numbers = [1,2,3,4,5,6,7,8];
   let evenNumbers = [];
     for(let i=0; i < numbers.length-1; i++){
         if(numbers % 2 === 0); {
             evenNumbers.push(i);
         }
         return evenNumbers;
     }
 }
 displayEvenNumbers();