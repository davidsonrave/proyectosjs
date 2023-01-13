// const txt1= document.getElementById("n1");

// const txt2 = document.getElementById("n2");

// const respuesta = document.getElementById("resp");

// const btncalcular = document.getElementById("calcular");



// btncalcular.addEventListener("click", calcular);

// function calcular(){

//     const n1 = parseFloat(txt1.value);
//     const n2 = parseFloat(txt2.value);

//     let resp = n1 + n2;

//     respuesta.innerText = `La media aritmetica es ${resp}`;
// }

// const respuesta = document.getElementById('resp')
// const btnejecutar = document.getElementById('ejecuta')
// btnejecutar.addEventListener('click', iniciar)

// let frutas = ["Manzana", "Banana", "fresa", "pera"]
// function iniciar() {
    
//     // respuesta.innerText=frutas.length
//     // respuesta.innerText=frutas[1]
//     // respuesta.innerText=frutas[frutas.length-1]

//     frutas.forEach((item,index, array)=> {
//         respuesta.innerText=item
//         respuesta.innerText=index
//         respuesta.innerText=array

//     });
//}

//funciones asincronicas
/*fetch proporciona una interfaz JavaScript para acceder 
y manipular partes del canal HTTP, tales como peticiones 
y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red*/ 
async function obtenerData() {
    // const response = await fetch("http://127.0.0.1:5500/teoria/data.json")
    // const response = await fetch("https://api.github.com/repos/hadley/ggplot2/commits")// consumir directamente desde un link
    // const json = await response.text();//esta en texto
    // console.log(JSON.parse(json))//convertirlo texto a json 

    // const json = await response.json()
    // console.log(json)

    await fetch("https://api.github.com/repos/hadley/ggplot2/commits")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log('soliciutd fallida', err))//me va msotrat que el error si este ocurre


}

obtenerData();