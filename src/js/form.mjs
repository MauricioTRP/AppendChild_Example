/**
 * form.mjs — Módulo del formulario (DOM)
 *
 * Obtiene una referencia al elemento <form> del documento usando el DOM (Window.document).
 * Se exporta para que index.mjs pueda añadir el listener de submit sin acoplar el id en el entry point.
 *
 * Nota: Este script se ejecuta como módulo (defer implícito), así que el DOM ya está
 * parseado cuando se ejecuta y getElementById encuentra el elemento.
 */

// document es la raíz del DOM; getElementById es un método del Document
export const form = document.getElementById("productForm");
