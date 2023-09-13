let input = require('fs').readFileSync('1020/stdin' , 'utf8');
let lines = input.split('\n');


let num = Number(lines[0]);

const ano = num / 365;
num %= 365;
const mes = num / 30;
num %= 30;

console.log(`${Math. trunc(ano)} ano(s)`);
console.log(`${Math. trunc(mes)} mes(es)`);
console.log(`${Math. trunc(num)} dia(s)`);
