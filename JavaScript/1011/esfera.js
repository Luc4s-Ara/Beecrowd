let input = require('fs').readFileSync('1011/stdin' , 'utf8');
let lines = input.split('\n');

const raio = Number(lines[0]);
const esfera = (4 / 3) * 3.14159 * (Math.pow(raio, 3));

console.log(`VOLUME = ${esfera.toFixed(3)}`);