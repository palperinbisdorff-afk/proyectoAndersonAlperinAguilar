let usuario = localStorage.getItem("usuario");

let menu = document.querySelector(".log");

if (usuario.value =! ""){
    menu.innerHTML = `<li class="botonheader"><a href="./login.html">Bienvenido ${usuario}</a></li>
                <li class="botonheader"><a href="./register.html"></a></li>` 
}