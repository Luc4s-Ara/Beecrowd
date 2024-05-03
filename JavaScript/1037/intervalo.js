let input = require("fs").readFileSync("1037/stdin", "utf8");
let lines = input.split("\n");

const num = Number(lines[0]);

switch (true) {
    case num >= 0 && num <= 25:
        console.log("Intervalo [0,25]");
        break;
    case num > 25 && num <= 50:
        console.log("Intervalo (25,50]");
        break;
    case num > 50 && num <= 75:
        console.log("Intervalo (50,75]");
        break;
    case num > 75 && num <= 100:
        console.log("Intervalo (75,100]");
        break;
    default:
        console.log("Fora de intervalo");
        break;
}