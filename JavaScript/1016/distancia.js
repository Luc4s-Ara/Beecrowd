let input = require('fs').readFileSync('1016/stdin' , 'utf8');
let lines = input.split('\n');

const km = Number(lines[0]);
const distancia = km * 2;

console.log(`${distancia} minutos`);