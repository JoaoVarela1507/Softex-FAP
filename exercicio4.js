const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite a primeira nota: "));
const num2 = Number(prompt("Digite a segunda nota: "));

if (num1 >= 6 && num2 >= 6) {
    console.log("O Aluno foi aprovado nas duas notas");
} else if (num1 >= 6 && num2 < 6) {
    console.log("O Aluno foi aprovado na primeira nota e reprovado na segunda");
} else if (num1 < 6 && num2 >= 6) {
    console.log("O Aluno foi aprovado na segunda nota e reprovado na primeira");
} else if (num1 < 6 && num2 < 6) {
    console.log("O Aluno foi reprovado nas duas notas");
}
