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



const personas = [
    {
        nombre: "Alfo",
        edad: 23
    },
    {
        nombre: "Bau",
        edad: 20
    },
    {
        nombre: "Caesar",
        edad: 21
    },
    {
        nombre: "Agu",
        edad: 19
    }
]

// For Each
personas.forEach((persona, i, arreglo) => {
    console.log(persona.edad, i, arreglo)
})

// Map
const arregloMap = personas.map((persona, i, arreglo) => {
    return {
        ...persona,
        edad: persona.edad + 1
    }
})
console.log("Map")
console.log(arregloMap)

// Filter
const arregloFilter = personas.filter((persona, i, arreglo) => {
    return persona.edad > 20
})
console.log("Filter")
console.log(arregloFilter)

// Find
const arregloFind = personas.find((persona, i, arreglo) => {
    return persona.edad > 20
})
console.log("Find")
console.log(arregloFind)