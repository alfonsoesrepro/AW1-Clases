import {productosMascotas} from "./productos.js" 

export function renderizarCatalogo(contenedor, productos) {
    let productosHTML = ''

    productosMascotas.forEach((producto) => {
        productosHTML += `
        <article>
            <h3>${producto.nombre}</h3>
            <picture>
                <img src=${producto.imagen} alt="Correa de cuero para perro">
                <!-- <source media="(min-width: )" srcset="" sizes=""> -->
            </picture>
            <p>
                ${producto.descripcion}
            </p>
            <ul>
                <li>
                    Talles ${producto.talles}
                </li>
                <li>
                    Precio $ ${producto.precio}
                </li>
            </ul>
            <button>Añadir al carro</button>
        </article>
    `
    })

    contenedorProductos.innerHTML = productosHTML;
}

export function filtrarPorTalle(productos, talle) {
    return productos.filter((producto) => {
        return producto.talles.includes(talle.toUpperCase())
    })
}