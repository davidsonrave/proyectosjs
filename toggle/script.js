let toggleBtn = document.querySelector(".toggleBtn");

let container = document.querySelector(".container");

toggleBtn.addEventListener("click", () => {
    container.classList.toggle("active");//activa y desactiva se creara la clase con js y en css se dara el estilo
})