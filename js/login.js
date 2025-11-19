let formLogin = document.querySelector(".forms");
let emaillogin = document.querySelector(".mailog");
let contralog = document.querySelector(".contralog");

formLogin.addEventListener('submit', function(event) {
    event.preventDefault();
    let valoremail = emaillogin.value;
    let contrasena = contralog.value;
    
    if (valoremail === ""){
         return alert("Este campo no puede estar vacio");
    } 

    if (contrasena == "" || contrasena.length < 6) {
        return alert("Este campo debe contener al menos 6 caracteres")
    } 

    localStorage.setItem("usuario", valoremail);
    formLogin.submit();
})  
