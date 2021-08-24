const prompt = require("prompt-sync")()

function main(){

    const vetor = Array(20)
    let contador = 0

    for(let i = 0; i < vetor.length; i++){
        vetor[i] = Number(prompt(`Numero para a posição ${i}: `))
        if(vetor[i] % 2 === 0){
            contador++
        }
    }
    console.log(`Quantidade de números pares é: ${contador}`)
}
main()