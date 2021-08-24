const prompt = require('prompt-sync')();

const dolar = Number(prompt('Informe o valor em dolar: '))

const real = (dolar * 5.42).toFixed(2)

console.log(`O valor em real(R$) é: ${real}`)