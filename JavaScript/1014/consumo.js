let input = require('fs').readFileSync('1014/stdin' , 'utf8');
let lines = input.split('\n');

const X = Number(lines[0]);
const Y = Number(lines[1]);
const consumo = X / Y;

console.log(`${consumo.toFixed(3)} km/l`);