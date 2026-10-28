// import productosMascotas from "./productos.js" // No nombrada
import {productosMascotas} from "./productos.js" // Nombrada
import { filtrarPorTalle, renderizarCatalogo } from "./funcion.js"

// Utilizar un objeto para acceder al HTML
// Se refencia un elemento
const contenedorProductos = document.getElementById("contenedor-productos")
const botonEvento = document.getElementById('boton-evento')
const dialogo = document.getElementById('dialogo')

// console.log(contenedorProductos)

//contenedorProductos.textContent = '<h3>Producto 1</h3>'
//contenedorProductos.innerHTML = '<h3>Producto 1</h3>'

// contenedorProductos.innerHTML= ``




// Filtrado
const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')

// Renderizado
renderizarCatalogo(contenedorProductos, productosFiltrados)

// Eventos
botonEvento.addEventListener('click', (evento)=>{
    // console.log(evento)
    // dialogo.show()
    dialogo.showModal()
})

// Listeners a los botones de los productos
const botonesProducto = contenedorProductos.querySelectorAll('.boton-agregar-productos')

// console.log(botonesProducto)

botonesProducto.forEach((boton) => {
    // Callback del foreach
    boton.addEventListener('click', (evento) => {
        // Callback del listener
        const idProducto = parseInt(boton.dataset.id)
        console.log(idProducto)
    })
})