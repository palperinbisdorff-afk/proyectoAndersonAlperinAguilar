let usuario = localStorage.getItem("usuarioLogin");

let menu = document.querySelector(".log");

if (usuario !== null){
    menu.innerHTML = `<li class="botonheader"><a href="">Bienvenido ${usuario}</a></li>
                <li class="botonheader"><a href="#">LOGOUT</a></li>` 
}