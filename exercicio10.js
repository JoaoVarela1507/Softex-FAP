const prompt = require("prompt-sync")();

let num = 0;

while (num <= 10) {
    if (num % 2 == 0){
        console.log(num);
    }
    num = num + 1;
}