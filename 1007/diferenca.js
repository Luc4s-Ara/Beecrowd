let input = require('fs').readFileSync('1007/stdin' , 'utf8');
let lines = input.split('\n');

const a = Number(lines[0]);
const b = Number(lines[1]);
const c = Number(lines[2]);
const d = Number(lines[3]);
const diferenca = ((a * b) - (c * d));
console.log(`DIFERENCA = ${diferenca}`);