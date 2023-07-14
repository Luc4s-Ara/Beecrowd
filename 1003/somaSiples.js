let input = require('fs').readFileSync('1003/stdin' , 'utf8');
let lines = input.split('\n');

const n1 = Number(lines[0]);
const n2 = Number(lines[1]);

console.log(`SOMA = ${n1 + n2}`);