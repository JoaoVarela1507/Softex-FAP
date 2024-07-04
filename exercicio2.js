const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite o número: "))
const calc = num1 % 2

if (calc == 0){
    console.log("O número é par")
} else{
    console.log("O número é ímpar")
}



