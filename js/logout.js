
window.addEventListener("load", function(){
  let logoutBot = this.document.querySelector(".log")  

  logoutBot.addEventListener("click", function(){
    localStorage.clear();

    let usuario = document.querySelector(".usuario")
    usuario.style.display ="none"

    let usuarionav = document.querySelector(".log")
    usuarionav.style.display = "flex";

  })
})  
