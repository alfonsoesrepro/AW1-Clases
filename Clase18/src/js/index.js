import productosMascotas from "./productos.js" // No nombrada
// import {productosMascotas} from "./productos.js" // Nombrada
import { filtrarPorTalle, renderizarCatalogo } from "./funcion.js"

// Utilizar un objeto para acceder al HTML
// Se refencia un elemento
const contenedorProductos = document.getElementById("contenedor-productos")

// console.log(contenedorProductos)

//contenedorProductos.textContent = '<h3>Producto 1</h3>'
//contenedorProductos.innerHTML = '<h3>Producto 1</h3>'

// contenedorProductos.innerHTML= ``

const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')

renderizarCatalogo(contenedorProductos, productosFiltrados)