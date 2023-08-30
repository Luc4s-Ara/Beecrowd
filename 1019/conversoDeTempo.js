let input = require('fs').readFileSync('1019/stdin' , 'utf8');
let lines = input.split('\n');

let tempo = Number(lines[0]);
let horas = tempo / 3600;
tempo %= 3600;
let minutos = tempo / 60;
tempo %= 60;

console.log(`${Math.trunc(horas)}:${Math.trunc(minutos)}:${Math.trunc(tempo)}`);

