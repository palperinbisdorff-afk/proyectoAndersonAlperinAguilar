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

