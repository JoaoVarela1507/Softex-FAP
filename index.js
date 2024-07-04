// var prompt = require("prompt-sync")();

// const name = prompt("Digite o seu nome: ");
// const peso = prompt(`Olá ${name}, Digite o seu peso: `);
// const altura = prompt(`${name} agora digite a sua altura: `);
// const imc = peso / altura**2

// console.log(`O IMC de ${name} é : ${imc.toFixed(2)}`);

var prompt = require("prompt-sync")();


function showData() {

    const name = prompt("Digite o seu nome: ");
    const peso = prompt(`Olá ${name}, Digite o seu peso: `);
    const altura = prompt(`${name}, agora digite a sua altura: `);
    const imc = peso / altura**altura
    if (imc <= 18.5){
        console.log(`O IMC de ${name} é : ${imc.toFixed(2)}, Você possui magreza!`)
    }if (imc > 18.5 && imc < 24.9){
        console.log(`O IMC de ${name} é : ${imc.toFixed(2)}, Você é Normal!`)
    }if (imc > 24.9){
        console.log(`O IMC de ${name} é : ${imc.toFixed(2)}, Você possui Obesidade!`)
    }

}

function verifycnh(){
    const name = prompt("Digite seu nome: ");
    const age = prompt(`Olá ${name}, digite sua idade: `)

    if (age >= 18) {
        console.log(`Olá ${name}, você pode tirar a Habilitação!`);
    } else {
        console.log(`Olá ${name}, você NÃO pode tirar a Habilitação!`);
    }
}

// verifycnh()
showData()