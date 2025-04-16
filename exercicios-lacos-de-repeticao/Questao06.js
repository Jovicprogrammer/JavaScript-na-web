
let listaDeNotas = []


for (let i = 1; listaDeNotas.length < 5; i++) {
    const nota = parseFloat(prompt(`Digite a ${i}ª nota: `))
    if (nota > 10 || nota <0) {
    }
    listaDeNotas.push(nota)
}

alert(`esta é a lista de notas: ${listaDeNotas}`)

listaDeNotas.forEach((nota) => {
    if (nota >= 7) {
        alert(`com a nota ${nota} o aluno foi APROVADO!`)
    } else if (nota >= 5 && nota < 7) {
        alert(`com a nota ${nota}, o aluno ficou DE RECUPERAÇÃO!`)
    } else {
        alert(`com a nota ${nota}, o aluno foi REPROVADO!`)
    }
})

