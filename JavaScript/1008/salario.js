let input = require('fs').readFileSync('1008/stdin' , 'utf8');
let lines = input.split('\n');

const numFuncionario = Number(lines[0]);
const horasTrabalhada = Number(lines[1]);
const valorHora = Number(lines[2]);
const salario = horasTrabalhada * valorHora;

console.log(`NUMBER = ${numFuncionario}`);
console.log(`SALARY = U$ ${(salario).toFixed(2)}`);
