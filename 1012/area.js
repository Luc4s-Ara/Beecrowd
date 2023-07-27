let input = require('fs').readFileSync('1012/stdin' , 'utf8');
let lines = input.split('\n');

const valores = lines[0].split(' ');
const A = Number(valores[0]);
const B = Number(valores[1]);
const C = Number(valores[2]);

const triangulo = A * C / 2;
const circulo = 3.14159 * (Math.pow(C, 2));
const trapezio = (A + B) * C / 2;
const quadrado = B * B;
const retangulo = A * B;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);

