let input = require('fs').readFileSync('1009/stdin' , 'utf8');
let lines = input.split('\n');

const nome = lines[0];
const salario = Number(lines[1]);
const vendas = Number(lines[2]);
const total = salario + ((vendas * 15) / 100)

console.log(`TOTAL = R$ ${total.toFixed(2)}`);