let input = require("fs").readFileSync("2006/stdin", "utf8");
let lines = input.split("\n");

const cha = Number(lines[0]);
const competidores = lines[1].split(' ').map(Number);
let soma = 0;

for(let i = 0; i < competidores.length; i++){
    if(cha === competidores[i]){
        soma ++
    }
}

console.log(soma);