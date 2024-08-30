let input = require("fs").readFileSync("1045/stdin", "utf8");
let lines = input.split("\n");

let [A, B, C] = lines[0].split(" ").map((item) => parseFloat(item));

let [a, b, c] = [A, B, C].sort((a, b) => b - a);

if (a >= b + c || b >= a + c || c >= a + b) {
    console.log("NAO FORMA TRIANGULO");
} else {
    if (a ** 2 === b ** 2 + c ** 2 || b ** 2 === a ** 2 + c ** 2 || c ** 2 === a ** 2 + b ** 2) {
        console.log("TRIANGULO RETANGULO");
    }
    if (a ** 2 > b ** 2 + c ** 2 || b ** 2 > a ** 2 + c ** 2 || c ** 2 > a ** 2 + b ** 2) {
        console.log("TRIANGULO OBTUSANGULO");
    }
    if (a ** 2 < b ** 2 + c ** 2 && b ** 2 < a ** 2 + c ** 2 && c ** 2 < a ** 2 + b ** 2) {
        console.log("TRIANGULO ACUTANGULO");
    }
    if (a === b && b === c) {
        console.log("TRIANGULO EQUILATERO");
    } else if (a === b || b === c || a === c) {
        console.log("TRIANGULO ISOSCELES");
    }
}