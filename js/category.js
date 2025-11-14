/*Capturar id despues hacer un fetch con ese name/id y dsp modifcar el endpoit el name aparezca en la busqueda 
despues hacer un bucle y mostrar los productos de esa categoria*/

/* navegaciond e forma vertical */

let ul = document.querySelector(".categoriasJS")
let categorias = "";

fetch('https://dummyjson.com/products/categories')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            categorias += `<li>
                <a href="./category.html?id=${data[i].name}">${data[i].name}</a>
            </li>`
        }
        console.log(categorias)
        ul.innerHTML = categorias
    })
    .catch(function(error){
        console.log("Se detecto un error")
    })