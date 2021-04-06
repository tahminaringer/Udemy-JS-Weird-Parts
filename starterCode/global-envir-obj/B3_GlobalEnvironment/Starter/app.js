'use strict';

//excersize 9 & 10
// var a = 'Hello World!';

// function b() {
//   console.log('Called b!');
// }

// b();
// console.log(a);

//Exersize 11
// var a;
// console.log(a);

// if(a === undefined) {
//   console.log('a is undefined!');
// } else { 
//   console.log('a is defined!');
// }

// Exersize 12
// function b() {
//   console.log('Called B!');
// }

// b();

// console.log(a);

// var a = 'Hello World';

// console.log(a);

// Excersize 15
// function b() {
//   var myVar;
//   console.log(myVar);
// }

// function a() {
//   var myVar = 2;
//   console.log(myVar);
//   b();
// }

// var myVar = 1;
// console.log(myVar);
// a();
// console.log(myVar);

// Excersize 16
// function b() {
//   console.log(myVar);
// }

// function a() {
//   var myVar = 2;
//   b();
// }

// var myVar = 1;
// a();

// Excersize 18

function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while(new Date() < ms){}
  console.log('finished function');
}

function clickHandler(){
  console.log('click event!');
}

//listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');