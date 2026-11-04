// import productosMascotas from "./productos.js" // No nombrada
import {URL_PRODUCTOS} from '/config.js'
import {productosMascotas} from "./productos.js" // Nombrada
import {filtrarPorTalle, renderizarCatalogo, datosProductos} from "./funcion.js"
import { obtenerDatos } from './obtenerDatos.js'


// const productosMascotas = await obtenerDatos(URL_PRODUCTOS)

// Persistencia
localStorage.setItem('numero', 1)

// Callback
obtenerDatos(URL_PRODUCTOS).then(() => {
    
})

// Utilizar un objeto para acceder al HTML
// Se refencia un elemento
const contenedorProductos = document.getElementById("contenedor-productos")
const botonEvento = document.getElementById('boton-evento')
const dialogo = document.getElementById('dialogo')

// console.log(contenedorProductos)
//contenedorProductos.textContent = '<h3>Producto 1</h3>'
//contenedorProductos.innerHTML = '<h3>Producto 1</h3>'
// contenedorProductos.innerHTML= ``




// Obtención de datos
productosMascotas = datosProductos

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