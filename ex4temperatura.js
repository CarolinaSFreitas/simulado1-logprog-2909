const prompt = require("prompt-sync")()

const ontem = Number(prompt("Temperatura de ontem: "))
const hoje = Number(prompt("Temperatura de hoje: "))

const variacao = hoje - ontem

if(ontem == hoje){
    console.log(`Não houve variação de temperatura.`)
}else{
    console.log(`Houve uma variação de ${variacao} graus.`)
}