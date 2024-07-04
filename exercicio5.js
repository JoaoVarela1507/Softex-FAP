// 5 - Um cinema oferece aos seus clientes dois tipos de ingressos: o ingresso VIP 
// (com uma poltrona) e um ingresso standard (cadeira comum). É possível optar também por um combo 
// promocional de pipoca e refrigerante ou não. Faça um programa que solicite ao usuário o tipo de ingresso que 
// ele deseja (digitando 1 para VIP e 2 para standard), bem como se ele deseja o combo de pipoca (opção 1) ou não 
// (opção 2). O programa deverá imprimir uma mensagem para o usuário de acordo com as seguintes regras:

// Ingresso VIP sem pipoca: “Valor: 80 reais”;
// Ingresso VIP com pipoca: : “Valor: 110 reais”;
// Ingresso standard sem pipoca: “Valor: 40 reais”;
// Ingresso standard com pipoca: “Valor: 70 reais”;


const prompt = require("prompt-sync")();

const op1 = Number(prompt("QUAL TIPO DE INGRESSO:(1 para VIP e 2 para standard)   "));
const op2 = Number(prompt("VAI ACOMPANHAR PIPOCA:(DIGITE 1 PARA SIM E 2 PARA NÃO)   "));

if (op1 == 1 && op2 == 1) {
    console.log("Ingresso VIP com pipoca: : Valor: 110 reais");
} else if (op1 == 1 && op2 == 2) {
    console.log("Ingresso VIP sem pipoca: Valor: 80 reais");
} else if (op1 == 2 && op2 == 1) {
    console.log("Ingresso standard com pipoca: Valor: 70 reais");
} else if (op1 == 2 && op2 == 2) {
    console.log("Ingresso standard sem pipoca: Valor: 40 reais");
}