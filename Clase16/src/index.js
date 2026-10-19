// Funciones

function suma(a, b) {
    // console.log(2 + 2)
    return a + b
}

console.log(suma(2, 2))

// Flecha

const sumaFlecha = (a, b) => {
    return a + b
}

console.log(sumaFlecha(10, 5))

// Callbacks

const a = (cb) => {
    console.log('Se ejecutó a')
    cb()
}

const b = () => {
    console.log('Se ejecutó el callback b')
}

a(b)

// Operaciones con arreglos

const numeros = [10, 20, 30]
const numerosMasUno = []

numeros.forEach((numero) => {
    numerosMasUno.push(numero + 1)
})

console.log(numerosMasUno)

// Map

const numerosMasUnoMap = numeros.map((numero) => {
    return numero + 1
})

console.log(numerosMasUnoMap)

