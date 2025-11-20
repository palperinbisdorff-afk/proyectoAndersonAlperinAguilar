/* navegacion de forma vertical */

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
                <a href="./category.html?id=${data[i].slug}">${data[i].name}</a>
            </li>`
        }
        console.log(categorias)
        ul.innerHTML = categorias
    })
    .catch(function(error){
        console.log("Se detecto un error", error)
    })

/* navegacion de forma vertical */

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get('buscar');

let tituloResultados = document.querySelector(".title");
let productosBuscados = document.querySelector(".items1");
let noResults = document.querySelector("#no-results");
let productosSearch = ""

fetch(`https://dummyjson.com/products/search?q=${busqueda}`)
.then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        if (data.products.length === 0){
            noResults.innerText = `No hay resultados coincidentes para "${busqueda}"`;
            noResults.style.display = "block";
                    
        }
        else{
            tituloResultados.innerText = `Resultados de su busqueda: "${busqueda}"`;
            for (let i = 0; i < data.products.length; i++) {
                productosSearch += `<article class="artfoto">
                            <img class="foto" src="${data.products[i].thumbnail}" alt="producto">
                            <h3>${data.products[i].title}</h3>
                            <p>${data.products[i].description}</p>
                            <p class="enstock">${data.products[i].availabilityStatus}</p>
                            <p>$${data.products[i].price}</p>
                            <button class="vermas"><a href="./product.html?id=${data.products[i].id}">Ver más</a></button>
                        </article>`;           
            }
            productosBuscados.innerHTML = productosSearch;

        }
    })
    .catch(function(error){
        console.log("Se detecto un error", error)
    })




