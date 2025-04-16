
let lista = []


for (let i = 1; lista.length < 10; i++) {
    const N = parseInt(prompt(`Digite o ${i}º número: `))
    lista.push(N)
}

alert(`esta é a sua lista: ${lista}`)

negativos = []

lista.forEach((N) => {
    if (N <0) {
        negativos.push(N)
    }
})

alert(`esta é a lista só com os números negativos: ${negativos}`)