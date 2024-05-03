let input = require('fs').readFileSync('1002/stdin' , 'utf8');
let lines = input.split('\n');

let raio = Number(lines[0]);

console.log(`A=${(3.14159 * (raio ** 2)).toFixed(4)}`);
