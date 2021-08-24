const prompt = require("prompt-sync")()

function main(){

    const frase = prompt("Digite uma frase: ")
    const a = prompt("Informe um caractere da frase: ")
    const b = prompt("Informe um novo caractere: ")
    let nova_frase = ''

    for(let i = 0; i < frase.length; i++){
        if(frase[i] === a){
            nova_frase = nova_frase + b
        }else{
            nova_frase = nova_frase + frase[i]
        }
    }
    console.log(`Nova frase: ${nova_frase}`)
}
main()