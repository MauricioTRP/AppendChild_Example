/**
 * index.mjs — Punto de entrada (entry point)
 *
 * Usa el Import Map definido en index.html para resolver:
 *   "products" → ./src/js/products.mjs
 *   "form"     → ./src/js/form.mjs
 *   "table"    → ./src/js/uiTable.mjs
 *
 * Conecta el formulario (evento submit), el estado (array de productos) y la tabla (DOM).
 */

import { arrayOfProducts, addProduct } from "products"
import { form } from "form"
import { addListOfProductsToTable, addProductToTable } from "table"

// Referencia al <tbody>: así solo buscamos en el DOM una vez y reutilizamos el nodo
const tableBodyElement = document.getElementsByTagName("tbody")[0]

/**
 * Pobla la tabla con los productos que ya están en memoria (p. ej. al cargar la página).
 */
function populateHTML() {
    addListOfProductsToTable(arrayOfProducts, tableBodyElement)
}

// Listener del evento "submit" del formulario (parte del modelo de eventos del DOM/Window)
form.addEventListener("submit", (e) => {
    e.preventDefault() // Evita que el formulario recargue la página (comportamiento por defecto)

    // Obtenemos referencias a los inputs por id (DOM)
    const nameInput  = document.getElementById("productName")
    const skuInput   = document.getElementById("productSKU")
    const priceInput = document.getElementById("productPrice")

    const product = {
        nombre: nameInput.value,
        sku: skuInput.value,
        precio: priceInput.value
    }

    // 1) Añadimos el producto al estado en memoria (products.mjs)
    addProduct(product)

    // 2) Añadimos una fila a la tabla en el DOM para que se vea el nuevo producto
    addProductToTable(product, tableBodyElement)

    // 3) Limpiamos los campos del formulario para la siguiente entrada
    form.reset()
})

// Al cargar el módulo, rellenamos la tabla con los productos iniciales
populateHTML()
