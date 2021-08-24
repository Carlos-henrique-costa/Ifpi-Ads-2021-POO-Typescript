const prompt = require('prompt-sync')()

function main(){
    const numero1 = prompt('Digite o primeiro numero: ')
    const numero2 = prompt('Digite o segundo numero: ')
    const numero3 = prompt('Digite o terceiro numero: ')

    let menor = numero1

    if(numero2 < menor){
        menor = numero2
    }else if(numero3 < menor){
        menor = numero3
    }

    console.log(`O menor numero é: ${menor}`)
}

main()