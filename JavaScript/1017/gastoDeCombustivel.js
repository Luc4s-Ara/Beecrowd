let input = require('fs').readFileSync('1017/stdin' , 'utf8');
let lines = input.split('\n');

const tempo = Number(lines[0]);
const velocidadeMedia = Number(lines[1]);
const litrosGastos = tempo * velocidadeMedia / 12;

console.log(`${litrosGastos.toFixed(3)}`);
