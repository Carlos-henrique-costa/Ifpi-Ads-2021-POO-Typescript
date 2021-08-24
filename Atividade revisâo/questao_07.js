const prompt = require('prompt-sync')()

function main(){

    const n = 5
    const vetor = Array(n)

    for( let i = 0; i < n; i++){
        vetor[i] = Number(prompt(`Posição : ${i}: `))
    }
    console.log(`Elementos: ${vetor}`)
}

main()