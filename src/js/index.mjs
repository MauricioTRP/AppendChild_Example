import { arrayOfProducts } from "products"

console.log(arrayOfProducts)


/**
 * Agrega un nuevo producto al listado de productos
 * 
 * @param {  } product 
 * @returns length of current list of products
 */
function addProduct(product) {
    return arrayOfProduts.push(product)
}

/**
 * Función que renderiza productos en una tabla
 * 
 * @return string con el HTML de la tabla
 */

function addProductToTable() {
    let tableBody = document.getElementsByTagName("tbody")[0] // nodo target

    // nodos para poblar
    let elementoNombreProducto =    document.createElement("td") 
    let elementoSkuProducto =       document.createElement("td") 
    let elementoPrecioProducto =    document.createElement("td")

    // agregar contenido a los nodos
    // elementos dentro de la fila
    elementoNombreProducto.innerText = arrayOfProducts[0].nombre
    elementoPrecioProducto.innerText = arrayOfProducts[0].precio
    elementoSkuProducto.innerText = arrayOfProducts[0].sku

    // agregamos elementos a una fila
    let filaAgregar = document.createElement("tr")
    filaAgregar.appendChild(elementoNombreProducto)
    filaAgregar.appendChild(elementoSkuProducto)
    filaAgregar.appendChild(elementoPrecioProducto)

    console.log(filaAgregar)

    // agregamos fila al nodo del documento
    tableBody.appendChild(filaAgregar)
}

addProductToTable()
