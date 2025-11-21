let logoutbtn = document.querySelector('.logout-btn')

window.addEventListener("load", function () {


  let saludo = document.querySelector(".container-log")
  let navLogin = document.querySelector(".log");

  logoutbtn.addEventListener("click", function () {
    localStorage.clear();

    saludo.style.display = 'none'
    navLogin.style.display = 'block'

  })
})  
