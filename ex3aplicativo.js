const prompt = require("prompt-sync")()

const distancia = Number(prompt("Distância (em Km): "))
const horario = Number(prompt("Horário: "))

let valorAPagar

if(horario >=6 || horario <=19){
    valorAPagar = 2 * distancia
    console.log(`Valor a pagar R$:${valorAPagar.toFixed(2)}`)
}else{
    valorAPagar = 3 * distancia
    console.log(`Valor a pagar R$:${valorAPagar.toFixed(2)}`)
}