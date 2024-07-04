const prompt = require("prompt-sync")();

let numero = Number(prompt("Informe um número para a tabela: "));

for (let contador = 1; contador <= 10; contador++) {
    console.log(`${numero} X ${contador} = ${numero * contador}`);
}
