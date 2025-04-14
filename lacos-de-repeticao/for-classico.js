
const notas = [10, 8.5, 5, 6.5, 8, 7.5]

let somaDasNotas = 0;

// for classico

// for (let i = 0; i < 5; i++) {
//     alert (`i é igual a ${i}`)
// }

// primeira expressão: executada apenas uma vez
// segunda expressão: condição de execução
// terceira expressão: executada somente ao final do bloco 

for (let indice = 0; indice < notas.length; indice++) {
    
    somaDasNotas = somaDasNotas + notas[indice]
    
    const media = (somaDasNotas / notas.length)

    alert(media)

}

