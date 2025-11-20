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
        console.log("Se detecto un error", error)
    })



let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let valorBus = queryStringObj.get('buscador');

let resultadosProd = document.querySelector(".buscar");
let tituloNoResul = document.querySelector(".titulogeneral");
let articulos = document.querySelector(".titulogeneral");
tituloResultados.innerText = `resultados de busqueda para: ${valorBuscado}`




