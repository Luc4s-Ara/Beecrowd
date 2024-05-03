let input = require('fs').readFileSync('1018/stdin' , 'utf8');
let lines = input.split('\n');

let notas = [100, 50, 20, 10, 5, 2, 1];
let money = Number(lines[0]);

console.log(money)

for(let i = 0; i < notas.length; i++){
    let cedula = money / notas[i];
    money %= notas[i]
    console.log(`${Math.trunc(cedula)} nota(s) de R$ ${notas[i]},00`)
}

