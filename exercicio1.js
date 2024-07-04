const prompt = require("prompt-sync")();


const dolar = Number(prompt("Digite o quanto você possui(em dolares): "));
const reais = Number(prompt("Digite o quanto você possui(em reais): "));
const euro = Number(prompt("Digite o quanto você possui(em euros): "))

const cotacaodolar = 5.84
const cotacaoeuro = 6.12

const opcao = Number(prompt('1 - DOLAR -> REAL \n2 - REAL -> DOLAR \n3 - EURO -> REAL \n4 - REAL -> EURO \nQual você quer conferir? '))

switch (opcao){
    case 1:
        calculo = dolar*cotacaodolar
        console.log(`O valor que você possui em reais é: ${calculo.toFixed(2)}`)
    break;
    case 2:
        calculo = reais/cotacaodolar
        console.log(`O valor que você possui em dolares é: ${calculo.toFixed(2)}`)
    break;
    case 3:
        calculo = euro*cotacaoeuro
        console.log(`O valor que você possui em reais é: ${calculo.toFixed(2)}`)
    case 4:
        calculo = reais/cotacaoeuro
        console.log(`O valor que você possui em euros é: ${calculo.toFixed(2)}`)
    break;
    default:
        console.log('Dados inválidos')
}

