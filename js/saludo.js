let usuario = localStorage.getItem("usuarioLogin");
let navusuario = document.querySelector(".container-log")
let parrafousuario = document.querySelector(".parrafocontainer")

let menu = document.querySelector(".log");

if (usuario !== null){

    navusuario.style.display = "block";
    menu.style.display = 'none'
    parrafousuario.innerText = `Bienvenido ${usuario}`
}