const prompt = require("prompt-sync")();

const horas = Number(prompt("Quantas horas o funcionário trabalhou? "));
const salario = Number(prompt("Qual o salário do funcionário por hora(Sem hora extra)? "));

const sal_base = salario * 40

const horas_extras = horas - 40

if (horas_extras == 0) {
    console.log(`O funcionário receberá : ${salario}`);
} else if (horas_extras > 0) {
    const calc = salario * horas_extras
    const ope = calc * 1.5
    const final = sal_base + ope
    console.log(`Com os acréscimos ele vai receber : ${final}`);
} 