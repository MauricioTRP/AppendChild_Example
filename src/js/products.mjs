/**
 * products.mjs — Estado de la aplicación (datos en memoria)
 *
 * No usa el DOM: solo mantiene un array de productos y funciones para modificarlo.
 * El DOM (tabla, formulario) se actualiza desde index.mjs y uiTable.mjs usando estos datos.
 */

/** Lista de productos en memoria. Se exporta para que la tabla pueda mostrarla al cargar. */
export let arrayOfProducts = [
    { nombre: "Lápiz",   sku: "123-123-123-123-123", precio: 1000 },
    { nombre: "Pizarra", sku: "321-321-321-321-321", precio: 20000 }
]

/**
 * Añade un producto al array en memoria.
 *
 * @param {Object} product - { nombre, sku, precio }
 * @returns {number} Nueva longitud del array (por push)
 */
export function addProduct(product) {
    return arrayOfProducts.push(product)
}

/**
 * Elimina un producto por SKU (reservado para práctica).
 *
 * @param {string} sku - SKU del producto a eliminar
 */
export function deleteProductBySKU(sku) {
    arrayOfProducts = arrayOfProducts.filter((p) => p.sku !== sku)
}
