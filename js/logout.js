
window.addEventListener("load", function(){
  let logoutBot = this.document.querySelector(".botonheader")  

    logoutBot.addEventListener("click", function(){
    localStorage.clear();

    let usuario = document.querySelector(".usuario")
    usuario.style.display ="none"

    let usuarionav = document.querySelector(".botonheader")
    usuarionav.style.display = "flex";

  })
})  
