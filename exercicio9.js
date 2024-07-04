const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite o 1º número: "))
const num2 = Number(prompt("Digite o 2ª número: "))
const num3 = Number(prompt("Digite o 3ª número: "))


if (num1 > num2 && num1 > num3 && num2 > num3){
    console.log("O primeiro númmero é maior e o terceiro é o menor!!")
} else if (num1 > num2 && num1 > num3 && num3 > num2){
    console.log("O primeiro númmero é maior e o segundo é o menor!!")
} else if (num2 > num1 && num2 > num3 && num1 > num3 ) {
    console.log("O segundo númmero é maior e o terceiro é o menor!!")
} else if (num2 > num1 && num2 > num3 && num3 > num1 ) {
    console.log("O segundo númmero é maior e o primeiro é o menor!!")
} else if (num3 > num1 && num3 > num2 && num2 > num1 ) {
    console.log("O terceiro númmero é maior e o primeiro é o menor!!")
} else if (num3 > num1 && num3 > num2 && num1 > num2 ) {
    console.log("O terceiro númmero é maior e o segundo é o menor!!")
} else {
    console.log("Todos os números são iguais!!")
}
const media = (num1 + num2 + num3) / 3
console.log(media.toFixed(2))