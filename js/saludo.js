let usuario = localStorage.getItem("usuario");

let menu = document.querySelector(".log");

if (usuario.value =! ""){
    menu.innerHTML = `<li class="botonheader"><a href="">Bienvenido ${usuario}</a></li>
                <li class="botonheader"><a href="./js/logout.js">LOGOUT</a></li>` 
}