/**
 * uiTable.mjs — Módulo de la tabla (manejo del DOM)
 *
 * Responsable de crear filas <tr>/<td> y añadirlas al <tbody>.
 * Usa document.createElement y appendChild para construir el árbol del DOM.
 */

/**
 * Crea un nodo <tr> con tres <td> (nombre, SKU, precio) para un producto.
 * No toca el documento hasta que la fila se añade al tbody.
 *
 * @param {Object} product - { nombre, sku, precio }
 * @returns {HTMLTableRowElement} fila lista para appendChild
 */
function createTableRow(product) {
    // nodos para poblar
    let elementoNombreProducto =    document.createElement("td") 
    let elementoSkuProducto =       document.createElement("td") 
    let elementoPrecioProducto =    document.createElement("td")

    // agregar contenido a los nodos
    // elementos dentro de la fila
    elementoNombreProducto.innerText = product.nombre
    elementoPrecioProducto.innerText = product.precio
    elementoSkuProducto.innerText = product.sku

    // agregamos elementos a una fila
    let filaAgregar = document.createElement("tr")
    filaAgregar.appendChild(elementoNombreProducto)
    filaAgregar.appendChild(elementoSkuProducto)
    filaAgregar.appendChild(elementoPrecioProducto)

    // retornal fila a agregar
    return filaAgregar
}



/**
 * Rellena el <tbody> con una fila por cada producto.
 *
 * @param {Array} products - Lista de objetos { nombre, sku, precio }
 * @param {HTMLTableSectionElement} tableBodyElement - El <tbody> del documento
 */
export function addListOfProductsToTable(products, tableBodyElement) {
    products.forEach(product => {
        addProductToTable(product, tableBodyElement)
    })
}

/**
 * Añade una sola fila al final del tbody para el producto dado.
 * Exportada para que index.mjs pueda añadir filas al enviar el formulario sin re-renderizar toda la tabla.
 *
 * @param {Object} product - { nombre, sku, precio }
 * @param {HTMLTableSectionElement} tableBodyElement - El <tbody>
 */
export function addProductToTable(product, tableBodyElement) {
    let htmlProduct = createTableRow(product)

    tableBodyElement.appendChild(htmlProduct)
}
