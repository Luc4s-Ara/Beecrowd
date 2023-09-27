let input = require ("fs").readFileSync("1021/stdin", "utf8");
let lines = input.split("\n");

let money = Number(lines[0] * 100);

const note100 = Math.trunc(money / 10000);
money %= 10000;
const note50 = Math.trunc(money / 5000);
money %= 5000;
const note20 = Math.trunc(money / 2000);
money %= 2000;
const note10 = Math.trunc(money / 1000);
money %= 1000;
const note5 = Math.trunc(money / 500);
money %= 500;
const note2 = Math.trunc(money / 200);
money %= 200;

const coin1 = Math.trunc(money / 100);
money %= 100;
const coin50 = Math.trunc(money / 50);
money %= 50;
const coin25 = Math.trunc(money / 25);
money %= 25;
const coin10 = Math.trunc(money / 10);
money %= 10;
const coin5 = Math.trunc(money / 5);
money %= 5;
const coin01 = Math.trunc(money / 1);

console.log(`NOTAS:
${note100} nota(s) de R$ 100.00
${note50} nota(s) de R$ 50.00
${note20} nota(s) de R$ 20.00
${note10} nota(s) de R$ 10.00
${note5} nota(s) de R$ 5.00
${note2} nota(s) de R$ 2.00
MOEDAS:
${coin1} moeda(s) de R$ 1.00
${coin50} moeda(s) de R$ 0.50
${coin25} moeda(s) de R$ 0.25
${coin10} moeda(s) de R$ 0.10
${coin5} moeda(s) de R$ 0.05
${coin01} moeda(s) de R$ 0.01`);


