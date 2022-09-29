const prompt = require("prompt-sync")()

const mensalidade = Number(prompt("Valor da mensalidade R$: "))
const anuidade = mensalidade * 12
const desconto = anuidade * 0.80

console.log(`Anuidade R$: ${anuidade}
Para pagamento adiantado R$: ${desconto.toFixed(2)}`)

