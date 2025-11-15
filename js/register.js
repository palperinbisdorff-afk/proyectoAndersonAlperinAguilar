let formulario = document.querySelector(".forms");

let campoEmail = document.querySelector(".email");
let campoPass = document.querySelector(".pass");
let campoPass2 = document.querySelector(".pass2")

let msgEmail = document.querySelector(".msg-email");
let msgPass = document.querySelector(".msg-pass");
let msgPass2 = document.querySelector(".msg-pass2")

campoEmail.addEventListener('focus', function(){
    if (msgEmail) msgEmail.textContent = "";
})

campoEmail.addEventListener('blur',function(){
    if(campoEmail.value == "" && msgEmail){
        msgEmail.textContent ="El email es obligatorio";
    }
})

campoEmail.addEventListener('input', function(){
    if (campoEmail.value != "" && msgEmail){
        msgEmail.textContent ="";
    }
})

campoPass.addEventListener('focus', function(){
    if (msgPass) msgPass.textContent="";
})

campoPass.addEventListener('blur', function(){
    if (campoPass.value == "" && msgPass){
        msgPass.textContent = "la contraseña es obligatoria";
    }
})

campoPass2.addEventListener('focus', function(){
    if (msgPass2) msgPass2.textContent ="";
})

campoPass2.addEventListener('blur', function(){
    if (campoPass2.value == "" && msgPass2){
        msgPass2.textContent = "repetir contraseña es un campo obligatorio";
    }
})

campoPass2.addEventListener('input', function(){
    if (campoPass2.value != "" && msgPass2){
        msgPass2.textContent ="";
    }
})

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    if(msgEmail && campoEmail.value =="") msgEmail.textContent ="El email es obligatorio.";
    if(msgPass && campoPass.value =="") msgPass.textContent ="La contraseña es obigatoria";
    if(msgPass2 && campoPass2.value =="") msgPass2.textContent ="Repetir contraseña es obligatrio";

   if (campoPass2.value != "" && campoPass.value != "" && campoPass2.value != campoPass.value) {
     return alert("las contraseñas no coinciden");
    }

    localStorage.setItem("usuarioEmail", campoEmail.value);
    
    this.submit();
})

