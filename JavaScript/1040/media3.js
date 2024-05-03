let input = require("fs").readFileSync("1040/stdin", "utf8");
let lines = input.split("\n");

const notas = lines[0];
const exame = parseFloat(lines[1]);
const [n1, n2, n3, n4] = notas.split(" ").map(parseFloat);

const media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + n4) / 10;

console.log(`Media: ${media.toFixed(1)}`);


    if (media >= 7){
        console.log("Aluno aprovado.");
    }
    else if (media >= 5){
        console.log("Aluno em exame.");
        console.log(`Nota do exame: ${exame.toFixed(1)}`);
        const mediaFinal = (media + exame) / 2;
        if (mediaFinal > 5){
            console.log("Aluno aprovado.");
        }
        else{
            console.log("Aluno reprovado.");
        }
        console.log(`Media final: ${mediaFinal.toFixed(1)}`)
    } else{
        console.log("Aluno reprovado.");
    }
    











