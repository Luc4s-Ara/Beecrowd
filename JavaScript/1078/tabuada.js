let input = require("fs").readFileSync("1078/stdin", "utf8");
let lines = input.split("\n");

const num = Number(lines[0]);

for(let i = 1; i <= 10; i++){
    console.log(`${i} x ${num} = ${i * num}`);
}