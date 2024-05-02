let input = require("fs").readFileSync("1042/stdin", "utf8");
let lines = input.split("\n");

const numbers = lines[0].split(" ").map(Number);
const numbersSort = numbers.slice().sort((a, b) => a - b);

console.log(numbersSort.join('\n'));
console.log("");
console.log(numbers.join('\n'))