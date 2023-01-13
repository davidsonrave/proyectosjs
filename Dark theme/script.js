const body = document.querySelector('body');
const toggle = document.querySelector('#toggle');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');//. active creada con js para que en css pueda aplicarse las porpeidades al dar click activar y desactivar
    body.classList.toggle('active');//por defecto esta en off la dar click se activa on
})
