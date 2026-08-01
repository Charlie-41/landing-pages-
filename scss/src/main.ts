import { GestorContactos } from "./formulario.js";

// Inicializa el menú hamburguesa (si existe el botón)
const boton = document.getElementById('menuBtn');
const links = document.querySelector('.nav__links');

if (boton && links) {
    boton.addEventListener('click', () => {
        links.classList.toggle('in-open');
    });
}

// Inicializa el gestor de contactos POO en la página
const gestor = new GestorContactos("#formulario", "#error", "#lista-contactos");

const btnGuardar = document.querySelector("#guardar") as HTMLButtonElement;
btnGuardar?.addEventListener("click", () => gestor.guardarJSON());

console.log('TypeScript y POO cargados correctamente en Emprende');