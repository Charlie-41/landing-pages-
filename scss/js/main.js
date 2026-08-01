const boton = document.getElementById('menuBtn');
const links = document.querySelector('.nav__links');

if (boton) {
    boton.addEventListener('click', () => {
        links.classList.toggle('in-open');
    });
}
console.log('Script cargado correctamente');