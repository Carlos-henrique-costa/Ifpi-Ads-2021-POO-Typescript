const prompt = require('prompt-sync')();

const numero = Number(prompt('Digite o primeiro numero: '))

console.log(`o antececor é: ${numero - 1} e o sucessor eh: ${numero + 1}`)