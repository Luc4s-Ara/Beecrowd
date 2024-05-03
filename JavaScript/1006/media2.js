let input = require('fs').readFileSync('1006/stdin' , 'utf8');
let lines = input.split('\n');

const a = Number(lines[0]);
const b = Number(lines[1]);
const c = Number(lines[2]);
const media = ((a * 2) + (b * 3) + (c * 5)) / 10;
console.log(`MEDIA = ${(media).toFixed(1)}`);