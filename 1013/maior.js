let input = require('fs').readFileSync('1013/stdin' , 'utf8');
let lines = input.split('\n');

const valores = lines[0].split(' ');
const A = Number(valores[0]);
const B = Number(valores[1]);
const C = Number(valores[2]);

const maiorAB = ((A + B) + (Math.abs(A - B))) / 2;
const maiorABC = ((C + maiorAB) + (Math.abs(C - maiorAB))) / 2;

console.log(`${maiorABC} eh o maior`);