let input = require("fs").readFileSync("1038/stdin", "utf8");
let lines = input.split("\n");


const [codigo, quantidade] = lines[0].split(" ").map(Number);

const cardapio = {
    1: { nome: "Cachorro Quente", preco: 4.00 },
    2: { nome: "X-Salada", preco: 4.50 },
    3: { nome: "X-Bacon", preco: 5.00 },
    4: { nome: "Torrada Simples", preco: 2.00 },
    5: { nome: "Refrigerante", preco: 1.50 }
};

const total = cardapio[codigo].preco * quantidade;
console.log(`Total: R$ ${total.toFixed(2)}`);