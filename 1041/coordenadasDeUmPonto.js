let input = require("fs").readFileSync("1041/stdin", "utf8");
let lines = input.split("\n");

const [x, y] = lines[0].split(" ").map(parseFloat);

    if(x > 0 && y > 0){
        console.log("Q1");
    }
    else if(x < 0 && y > 0) {
        console.log("Q2");
    }
    else if(x < 0 && y < 0){
        console.log("Q3");
    }
    else if(x > 0 && y < 0){
        console.log("Q4");
    }
    else if (x === 0 && y === 0){
        console.log("Origem");
    }
    else if (x === 0){
        console.log("Eixo Y");
    }
    else{
        console.log("Eixo X");
    }