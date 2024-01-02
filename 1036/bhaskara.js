let input = require("fs").readFileSync("1036/stdin", "utf8");
let lines = input.split("\n");

const [A, B, C] = lines[0].split(" ").map(parseFloat);

const delta = B ** 2 - 4 * A * C;

if (delta < 0 || A === 0) {
    console.log("Impossivel calcular");
} else {
    const raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
    const raiz2 = (-B - Math.sqrt(delta)) / (2 * A);

    console.log(`R1 = ${raiz1.toFixed(5)}`);
    console.log(`R2 = ${raiz2.toFixed(5)}`);
}
