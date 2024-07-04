// Escreva um código que simula um Chat. Nesse código, o usuário 
// criará um menu interativo com 3 opções de resposta. Em cada resposta terá 
// que haver outras formas de interação final. Antes de terminar, o código 
// deve informar que irá ser encerrado.

const prompt = require("prompt-sync")();

console.log("\nOlá bem-vindo a sua assistente interativa de jogos!!\n")

const name = (prompt("Qual é o seu nome? "))

const op1 = (prompt(`\nCerto ${name} qual tipo de jogo você está procurando ?\n\nFPS \nBATTLE ROYALE \nRPG \nFPA \nMOBA \n: `));

if (op1 == 'fps') {
    console.log(`\nBoa escolha ${name}, então você gosta de jogos de tiro, aqui estão alugmas opcões para esse estilo:\n\nCounter-Strike \nCall of Duty \nBattlefield \nValorant\n`);
} else if (op1 == 'battle royale') {
    console.log(`\nÓtima escolha ${name}, então você quer ser o primeiro do lobby, aqui estão alugmas opcões para esse estilo:\n\nPUBG: Battlegrounds \nFortnite \nCall of Duty Warzone \nGarena Free Fire\n`);
} else if (op1 == 'rpg') {
    console.log(`\nBem ${name} se você prefere aventuras épicas e histórias profundas, aqui estão algumas opções no estilo RPG para você explorar:\n\nThe Witcher 3: Wild Hunt \nSkyrim \nFinal Fantasy XV \nDark Souls\n`);
} else if (op1 == 'fpa') {
    console.log(`\nCerto ${name}, se você curte ação intensa na primeira pessoa, confira essas opções:\n\nDoom Eternal \nHalo Infinite \nFar Cry 6 \nTitanfall 2\n`);
} else if (op1 == 'moba') {
    console.log(`\nOk ${name} aparentemnete você gosta de estratégia e ação competitiva em equipe, esses são alguns dos melhores jogos MOBA disponíveis:\n\nLeague of Legends \nDota 2 \nHeroes of the Storm \nSmite\n`);
}