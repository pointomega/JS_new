'use strict'

const upper = 'qwertyuiop[]\\';
console.log('Upper row is "' +  upper + '".');

const middle = 'asdfghjkl;';
console.log('Middle row is "' + middle + '".');

const lower = 'zxcvbnm,./';
console.log('Lower line is "' + lower + '".');

const firstLine = upper.length;
console.log('First line length is ', firstLine + '.');

const secondLine = middle.length;
console.log('Second line length is ', secondLine  + '.');

const thirdLine = lower.length;
console.log('Third line length is ', thirdLine  + '.');

console.log('First line begin with "' + upper.charAt(0) + '" and end with "' + upper.charAt(firstLine - 1) + '".');

console.log('Second line begin with "' + middle.charAt(0) + '" and end with "' + middle.charAt(secondLine - 1) + '".');

console.log('Third line begin with "' + lower.charAt(0) + '" and end with "' + lower.charAt(thirdLine - 1) + '".');

let openingBracket = upper.indexOf('[');
console.log('Position [ in first line is ' + openingBracket + '.');

let closingBracket = upper.indexOf(']');
console.log('Position ] in first line is ' + closingBracket + '.');

console.log(`In this exersise we use such variable: upper = "${upper}", middle = "${middle}", lower = "${lower}", firstLine = ${firstLine}, secondLine = ${secondLine}, thirdLine = ${thirdLine}, openingBracket = ${openingBracket}, closingBracket = ${closingBracket}.`);
