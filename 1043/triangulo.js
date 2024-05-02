let input = require("fs").readFileSync("1043/stdin", "utf8");
let lines = input.split("\n");

const [A, B, C] = lines[0].split(" ").map(parseFloat);

if (A < B + C && B < A + C && C < A + B) {
    console.log(`Perimetro = ${(A + B + C).toFixed(1)}`);
} else {
    const area = ((A + B) * C) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
}