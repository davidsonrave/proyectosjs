const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
    navigation.classList.toggle('open')
})

const listas = document.querySelectorAll(".list");

function activarLink() {
    listas.forEach((lista) => 
        lista.classList.remove('active')) //va recorrer todas las lista y removera toda classes que tenga como nombre active
        this.classList.add('active')//lo anterior formateo todo pero aca se activara la calse active a cada list que le demos click
}

listas.forEach((lista) => 
    lista.addEventListener('click',activarLink)//recorremos cada lista y agregamos el evento al dar click se ejecuta la funcion para 
                                  // mostrat uno por uno el active
)