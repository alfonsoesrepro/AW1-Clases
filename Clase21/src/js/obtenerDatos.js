// async/await
export async function obtenerDatos(url) {
    const respuesta = await fetch(url) // petición de recurso via HTTP
    const datos = await respuesta.json() //transformación a objeto js
    return datos // (arreglo)
}