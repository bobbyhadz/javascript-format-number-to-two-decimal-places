// EXAMPLE 1 - Format a number to 2 Decimal places in JavaScript

const num1 = 13.505;
const result1 = num1.toFixed(2);
console.log(result1); // 👉️ 13.51

// // ------------------------------------

// const num2 = 13.504;
// const result2 = num2.toFixed(2);
// console.log(result2); // 👉️ 13.50

// // ------------------------------------

// const str1 = '13.1';
// const result3 = parseFloat(str1).toFixed(2);
// console.log(result3); // 👉️ 13.10

// ------------------------------------------------------------------

// // EXAMPLE 2 - Use `parseFloat` to convert a string to a number before calling `toFixed`

// const str1 = '13.1';
// const result3 = parseFloat(str1).toFixed(2);
// console.log(result3); // 👉️ 13.10

// ------------------------------------------------------------------

// // EXAMPLE 3 - The `toFixed` method returns a string

// const num = 13.5;
// const str = num.toFixed(2);
// console.log(typeof str); // 👉️ string

// const result = parseFloat(str);
// console.log(result); // 👉️ 13.5
// console.log(typeof result); // 👉️ number

// ------------------------------------------------------------------

// // EXAMPLE 4 - Format a number to 2 decimal places using `Math.round()`

// function format2Decimals(str) {
//   const num = parseFloat(str);

//   return Math.round(num * 100) / 100;
// }

// console.log(format2Decimals('6.45678')); // 👉️ 6.46
// console.log(format2Decimals('7.12345')); // 👉️ 7.12
// console.log(format2Decimals('6.000')); // 👉️ 6
// console.log(format2Decimals(6)); // 👉️ 6
// console.log(format2Decimals('7.1')); // 👉️ 7.1
