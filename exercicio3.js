const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite o 1º número: "))
const num2 = Number(prompt("Digite o 2ª número: "))

if (num1 > num2){
    console.log("O primeiro númmero é maior!!")
} else if (num1 == num2) {
    console.log("O primeiro é igual ao segundo númmero!!")
} else {
    console.log("O segundo número é maior!!")
}