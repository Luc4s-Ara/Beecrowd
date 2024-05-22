let input = require("fs").readFileSync("1153/stdin", "utf8");
let lines = input.split("\n");

const N = Number(lines[0])
let fatorial = 1;

for (let i = 1; i <= N; i++) {
    
    fatorial *= i;
    
}
console.log(fatorial);