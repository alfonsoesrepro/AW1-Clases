/*// Variables y constantes

let a = '10'
const b = '3'

// Operadores

// Aritméticos

console.log(a + b);  // 13  (Suma)
console.log(a - b);  // 7   (Resta)
console.log(a * b);  // 30  (Multiplicación)
console.log(a / b);  // 3.3333... (División)
console.log(a % b);  // 1   (Módulo/Residuo: lo que sobra de dividir 10 entre 3)
console.log(a ** b); // 1000 (Exponenciación: 10 elevado al cubo)


// Relacionales

console.log(10 > 5);   // true
console.log(5 <= 5);   // true

// Lógicos

let tieneEntrada = true;
let esMayorDeEdad = false;

// AND (&&): Ambos deben ser verdaderos
console.log(tieneEntrada && esMayorDeEdad); // false

// OR (||): Al menos uno debe ser verdadero
console.log(tieneEntrada || esMayorDeEdad); // true

// NOT (!): Invierte el valor
console.log(!tieneEntrada); // false

// Estructura de control de flujo (condicional)
if (10 < 5){
    console.log("Es mayor")
}
else if ( 10 === '10'){
    console.log("Es 10")
}
else {
    console.log("Es menor")
}

console.log("Comparacion cesar ", true === '0'); // false*/

// Estructura de bucle

for(let i = 0; i< 10; i++) {
    console.log(i)
}

// Arreglos

const numeros = [1,2,3,4,5,6]
console.log(numeros[3])

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

// Objetos

const persona = {
    nombre: 'Andres',
    apellido: 'Calamaro',
    edad: 20,
    estudia: false,
    redes: [
        'Twitter',
        'Youtube'
    ],
    otros: {
        mascotas: 2
    }
}

console.log(persona.apellido)