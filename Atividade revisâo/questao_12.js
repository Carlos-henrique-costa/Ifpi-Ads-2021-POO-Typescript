const prompt = require('prompt-sync')()

function main(){

    const segundos = prompt('Digite a quantidade de segundos: ')

    const tempo = calcular_tempo(segundos)

    console.log(`Tempo: ${tempo}`)
}

function calcular_tempo(segundos){
    const hora = parseInt(segundos / 3600)
    const minuto = parseInt((segundos / 60) % 60)
    const segundo = segundos % 60
    const tempo = (`${hora}:${minuto}:${segundo}`)

    return tempo
}

main()