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

/*El texto “Resultados de búsqueda para: elTérminoPuestoEnElBuscador”.

La lista de resultados que coincidan con el término buscado.

Los resultados de la búsqueda deben permitir navegación hacia sus páginas de detalle.

Si la búsqueda no trae resultados avisar al usuario por pantalla mostrando el texto “No hay resultados para el término: elTérminoPuestoEnElBuscador”.*/


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)

queryStringObj.get('buscador');



