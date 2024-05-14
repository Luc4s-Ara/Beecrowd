let input = require("fs").readFileSync("1114/stdin", "utf8");
let lines = input.split("\n").map(parseInt);

function senhaFixa() {
  let senha = 2002;

  while (senha !== lines[0]) {
    console.log("Senha Invalida");
    break;
  }

  if (senha === lines[0]) {
    console.log("Acesso Permitido");
  }
}

senhaFixa();

