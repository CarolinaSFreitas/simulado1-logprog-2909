const prompt = require("prompt-sync")()

const cidade = prompt("Qual o nome da cidade? ")
const avenidas = Number(prompt("Quantas avenidas a cidade possui? "))

console.log(`A cidade de ${cidade} possui ${avenidas} avenidas.`)