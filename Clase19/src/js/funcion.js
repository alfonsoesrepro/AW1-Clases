import {productosMascotas} from "./productos.js" 

export function renderizarCatalogo(contenedor, productos) {
    let productosHTML = ''

    productos.forEach((producto) => {
        productosHTML += `
        <article>
            <h3>${producto.nombre}</h3>
            <picture>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </picture>
            <p>${producto.descripcion}</p>
            <ul>
                <li>Talles ${producto.talles.join(' ')}</li>
                <li>Precio $ ${producto.precio}</li>
            </ul>
            <button class="boton-agregar-productos" data-id="${producto.id}">Añadir al carro</button>
        </article>
        `
    })

    contenedor.innerHTML = productosHTML
}

export function filtrarPorTalle(productos, talle) {
    return productos.filter((producto) => producto.talles.includes(talle.toUpperCase()))
}