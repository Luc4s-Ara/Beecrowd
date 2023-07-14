let input = require('fs').readFileSync('1005/stdin' , 'utf8');
let lines = input.split('\n');

const nota1 = Number(lines[0]);
const nota2 = Number(lines[1]);
const media = ((nota1 * 3.5) + (nota2 * 7.5)) / 11;
console.log(`MEDIA = ${(media).toFixed(5)}`)