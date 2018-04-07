In javascript all numbers are IEEE-754 floating point number.

console.log(300.3 * 3) // will return 900.900001, not possible to convert to a binary floating point number.
How to solve it 
1. teo fixed method (300.3*3).toFixed(2); => 900.90

Number((300.3 * 3).toFixed(2)) => 900.9
Number((300.3 * 3).toPrecision(12)) => 900.9

console.log(900.9 === 300.3 * 3);
console.log(300.3 * 3);
console.log(Number((300.3 * 3).toFixed(2)));
console.log(Number((300.3 * 3).toPrecision(12)));
console.log(((300.3 * 10) * 3) / 10);
