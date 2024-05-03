let input = require('fs').readFileSync('1010/stdin' , 'utf8');
let lines = input.split('\n');

const [codigo1, qtd1, valor1] = lines[0].split(' ');
const [codigo2, qtd2, valor2] = lines[1].split(' ');


const total = (qtd1 * valor1) + (qtd2 * valor2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
