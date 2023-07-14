let input = require('fs').readFileSync('1001/stdin', 'utf8');
let lines = input.split('\n');

let n1 = Number(lines[0]);
let n2 = Number(lines[1]);
console.log(`X = ${n1 + n2}`);