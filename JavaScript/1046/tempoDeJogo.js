let input = require("fs").readFileSync("1046/stdin", "utf8");
let lines = input.split("\n");

let [horaInical, horaFinal] = lines[0].split(' ').map(Number);


if (horaInical < horaFinal) {
    let tempoDeJogo = horaInical - horaFinal;
    console.log(`O JOGO DUROU ${Math.abs(tempoDeJogo)} HORA(S)`);
}
else if (horaInical === horaFinal ){
    console.log(`O JOGO DUROU 24 HORA(S)`);
}
else if (horaInical > horaFinal){
    tempoDeJogo = (horaFinal + 24) - horaInical
    console.log(`O JOGO DUROU ${tempoDeJogo} HORA(S)`);
}