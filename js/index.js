/* Header */

const buscador = document.querySelector(".buscador");

if (buscador == ""){
    alert = "El campo se encuentra vacio, para realizar la busqueda, ingrese un producto";
} else if (buscador.length < 3){
    alert = "El producto ingresado es menor de tres caracteres, ingrese otro producto";
} 