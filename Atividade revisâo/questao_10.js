const prompt = require('prompt-sync')()

function main() {
    const frase = String(prompt('Digite um texto: '))
    frase_nova = remover_vogais(frase)

    console.log(`Nova frase ${frase_nova}`)
    
}

function remover_vogais(frases){
    const frase = frases
    let vogais_removidos = ''

    for(let i = 0; i < frase.length; i++){
        if(frase[i] === 'a' || frase[i] === 'A'){
            vogais_removidos = vogais_removidos + ''
        }else if(frase[i] === 'e' || frase[i] === 'E'){
            vogais_removidos = vogais_removidos + ''
        }else if(frase[i] === 'i' || frase[i] === 'I'){
            vogais_removidos = vogais_removidos + ''
        }else if(frase[i] === 'o' || frase[i] === 'O'){
            vogais_removidos = vogais_removidos + ''
        }else if(frase[i] === 'u' || frase[i] === 'U'){
            vogais_removidos = vogais_removidos + ''
        }else{
            vogais_removidos = vogais_removidos + frase[i]
        }
    }

    return vogais_removidos
}

main()