// let soma = 0;
// const numeros = [65, 44, 12, 4];

// function minhaFuncao(item) {
//     // soma = soma + item | 0 -> 65 -> 109 -> ...
//     alert(soma += item)
// }

// numeros.forEach(minhaFuncao);

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach((nota) => {somaDasNotas += nota})

const media = somaDasNotas / notas.length;

alert(`a media é ${media}!!`)
