let input = require('fs').readFileSync('1004/stdin' , 'utf8');
let lines = input.split('\n');

const n1 = Number(lines[0]);
const n2 = Number(lines[1]);

console.log(`PROD = ${n1 * n2}`);