const prompt = require("prompt-sync")()

const nome = prompt("Nome do aluno(a): ")
const alunos = Number(prompt("Número de alunos da turma: "))
const mensagens = Number(prompt("Número de mensagens recebidas no WhatsApp: "))
const porcentagem = alunos * 0.50

if(mensagens < porcentagem){
    console.log(`${nome}, temos que melhorar a sua popularidade.`)
}else{
    console.log(`Parabéns ${nome}! Você é bem popular na turma.`)
}