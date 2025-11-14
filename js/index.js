/* Form buscador */

let formHeader = document.querySelector(".buscar");
let buscador = document.querySelector(".buscador");

formHeader.addEventListener("submit", function(evento) {
    evento.preventDefault();

    console.log(buscador)
    console.log(buscador.value)

    if(buscador.value == ""){
        return alert("El campo se encuentra vacio, para realizar la busqueda, ingrese un producto");
    }
    if (buscador.value.length < 3) {
        return alert("El producto ingresado es menor de tres caracteres, ingrese otro producto");
    } 

    localStorage.setItem("usuario", buscador.value)
})

/* navegaciond e forma vertical */

let ul = document.querySelector(".categoriasJS")
let categorias = "";

fetch('https://dummyjson.com/products/categories')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            categorias += `<li>
                <a href="./category.html?id=${data[i].name}">${data[i].name}</a>
            </li>`
        }
        console.log(categorias)
        ul.innerHTML = categorias
    })
    .catch(function(error){
        console.log("Se detecto un error")
    })