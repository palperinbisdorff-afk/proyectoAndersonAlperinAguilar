let formulario = document.querySelector(".forms");

let campoEmail = document.querySelector(".email");
let campoPass = document.querySelector(".pass");
let campoPass2 = document.querySelector(".pass2")

let msgEmail = document.querySelector(".msg-email");
let msgPass = document.querySelector(".msg-pass");
let msgPass2 = document.querySelector(".msg-pass2")

campoEmail.addEventListener('focus', function () {
    if (msgEmail) msgEmail.innerText = "";
})

campoEmail.addEventListener('blur', function () {
    if (campoEmail.value == "" && msgEmail) {
        msgEmail.innerText = "El email es obligatorio";
    }
})

campoEmail.addEventListener('input', function () {
    if (campoEmail.value != "" && msgEmail) {
        msgEmail.innerText = "";
    }
})

campoPass.addEventListener('focus', function () {
    if (msgPass) msgPass.innerText = "";
})

campoPass.addEventListener('blur', function () {
    if (campoPass.value == "" && msgPass) {
        msgPass.innerText = "la contraseña es obligatoria";
    }
})

campoPass2.addEventListener('focus', function () {
    if (msgPass2) msgPass2.innerText = "";
})

campoPass2.addEventListener('blur', function () {
    if (campoPass2.value == "" && msgPass2) {
        msgPass2.innerText = "es un campo obligatorio";
    }
})

campoPass2.addEventListener('input', function () {
    if (campoPass2.value != "" && msgPass2) {
        msgPass2.innerText = "";
    }
})

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    if (msgEmail && campoEmail.value == "") {
       return msgEmail.innerText = "El email es obligatorio.";
    }
    if (msgPass && campoPass.value == "") {
       return msgPass.innerText = "La contraseña es obigatoria";
    }

    if (campoPass.value.length < 6) {
        return alert("la contraseña debe tener minimo 6 caracteres");
    }

    if (msgPass2 && campoPass2.value == "") {
        return msgPass2.innerText = "Repetir contraseña es obligatrio";
    }

    if (campoPass2.value != "" && campoPass.value != "" && campoPass2.value != campoPass.value) {
         return alert("las contraseñas no coinciden");
    }

    else {
        formulario.submit();
    }
    localStorage.setItem("usuarioEmail", campoEmail.value);

})

