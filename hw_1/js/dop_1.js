'use strict'

//exercise 1(+)
const a = 6;
const b = 10;
let result;
result = a + b;
console.log(result);
result = -a;
console.log(result);
result = a * b;
console.log(result);
result = a / b;
console.log(result);
result = b % a;
console.log(result);

//exercise 2(+)
const day = '02';
const month = '10';
const year = '2017';
const date = day + '/' + month + '/' + year;

console.log(date);

//exercise 3
const message = prompt("Enter any message:", "");

let inLowerCase = message.toLowerCase(); // -> "success: in all lowercase"
let inUpperCase = message.toUpperCase(); // -> "success: in all uppercase"
console.log(inLowerCase);
console.log(inUpperCase);
//console.log(checkCase(inLowerCase)); // success: in all lowercase
//console.log(checkCase(inUpperCase)); // success: in all uppercase

//exercise 4(+)
const name = 'Mango';
const typingSpeed = 50;

const message1 = `${name} печатает со скоростью ${typingSpeed} знаков в минуту.`;

console.log(message1);

//exercise 5(+)
const padding = "20px";
const border = "5px";
const contentWidth = "100px";
let totalWidth = parseInt(padding) + parseInt(border) + parseInt(contentWidth) + 'px';

console.log(totalWidth);

//exercise 6(+)
const padding2 = "20.25px";
const border2 = "5.15px";
const contentWidth2 = "100.45px";

let totalWidth2 = parseFloat(padding2) + parseFloat(border2) + parseFloat(contentWidth2) + 'px';

console.log(totalWidth2);

//exercise 7(+)
const one = 0.1;
const two = 0.2;
const three = 0.3;

const summ = one + two + three;

console.log(0.6 === +summ.toFixed(1));
