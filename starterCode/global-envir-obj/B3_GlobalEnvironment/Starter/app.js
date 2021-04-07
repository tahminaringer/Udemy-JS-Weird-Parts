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

// function waitThreeSeconds() {
//   var ms = 3000 + new Date().getTime();
//   while(new Date() < ms){}
//   console.log('finished function');
// }

// function clickHandler(){
//   console.log('click event!');
// }

// //listen for the click event
// document.addEventListener('click', clickHandler);

// waitThreeSeconds();
// console.log('finished execution');

// Excercize 18
// var a = 3 + 4;
// console.log(a);

// // Excersize 22

// right to left
// var a = 3 + 4 * 5;
// console.log(a);

//right to left
// var a = 2, b = 3, c = 4;
// a = b = c;

// console.log(a);
// console.log(b);
// console.log(c);

// Excersize 25
// console.log(1 < 2 < 3); //(1 < 2 = true < 3) (true = 1 < 3) (1 < 3 = true)
// console.log(3 < 2 < 1); //(3 < 2 = false < 1) (false < 1 = true)
//Number(false) = 0
//Number(true) = 1
//Number(null) = 0
//Number(undefined) = NaN

// var a = 0
// var b = false;

// if(a == b) {
//   console.log('they are equal'); //run code get this
// } else {
//   console.log('Nope, not equal');
// }

// if(a === b) {
//   console.log('they are equal');
// } else {
//   console.log('Nope, not equal'); //run code get this
// }

// Excersise 28
// function greet(name) {
//   console.log('Hello' + name);
// }
// greet('Tahmina');

// function greet(name) {
//   name = name || '<Your name here>';
//   console.log('Hello' + name);
// }
// greet('Tahmina');
// greet();

//section 4

// Excersize 30

// var person = new Object();

// person['firstname'] = 'Tahmina';
// person['lastname'] = 'Ringer';

// var firstNameProperty = 'firstname';

// console.log(person);
// console.log(person[firstNameProperty]);

// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = '111 Main St.';
// person.address.city = 'Seattle';
// person.address.state = 'Washington';

// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person['address']['state']);

//Excersize 31 Object Litterals
// is the same as var person = new Object(); 

// var Tahmina = { 
//   firstname: 'Tahmina', 
//   lastname: 'Ringer',
//   address: {
//     street: '111 Main St.',
//     city: 'Seattle',
//     state: 'WA'
//   } 
// }; 

// function greet(person){
//   console.log('Hi ' + person.firstname);
// }
// greet(Tahmina);

// //can also pass an object when calling the function
// greet({
//   firstname: 'Mary',
//   lastname: 'Smith'
// })

// Tahmina.address2 = {
//   street: '333 Second St.'
// }

// Excersize 32

// var greet = 'Hello';
// var greet = 'Hola';

// console.log(greet);

// var english = {
//   greetings: {
//     basic: 'Hello'
//   }
// };

// var spanish = {};

// english.greetings = {};
// english.greet = 'Hello';
// spanish.greet = 'Hola';

// console.log(english);
// console.log(spanish);

// Excersize 33


var ObjectLiteral = {
  firstname: 'Tahmina',
  isAProgrammer: true
}

console.log(JSON.stringify(ObjectLiteral));

//JSON name is wrapped in quotes
var jsonValue = JSON.parse('{ "firstname": "Tahmina", "isAProgrammer": true }');
console.log(jsonValue);