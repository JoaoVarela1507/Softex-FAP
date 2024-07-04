const prompt = require("prompt-sync")();

const val1 = Number(prompt("Qual é o primeiro valor? "));
const val2 = Number(prompt("Qual é o segundo valor? "));

const ope = Number(prompt("Qual operação você deseja fazer? \n1 - SOMA\n2 - SUBTRAÇÃO\n3 - MULTIPLICAÇÃO\n4 - DIVISÃO\n:  "));

if (ope == 1) {
    const result = val1 + val2
    console.log(result);
} else if (ope == 2) {
    const result = val1 - val2
    console.log(result);
} else if (ope == 3) {
    const result = val1*val2
    console.log(result);
} else if (ope == 4) {
    const result = val1/val2
    console.log(result);
}