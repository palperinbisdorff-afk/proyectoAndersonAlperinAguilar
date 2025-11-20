/*Capturar id despues hacer un fetch con ese name/id y dsp modifcar el endpoit el name aparezca en la busqueda 
despues hacer un bucle y mostrar los productos de esa categoria*/

/* navegacion de forma vertical */

let ul = document.querySelector(".categoriasJS")
let categorias = "";

fetch('https://dummyjson.com/products/categories')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            categorias += `<li>
                <a href="./category.html?id=${data[i].slug}">${data[i].name}</a>
            </li>`
        }
        console.log(categorias)
        ul.innerHTML = categorias
    })
    .catch(function (error) {
        console.log("Se detecto un error", error)
    })

/* categoria seleccionada por usuario */

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoriaElegida = queryStringObj.get("id");

let seccion3 = document.querySelector(".mejprod .items");
let titulo3 = document.querySelector(".mejprod .title");
let productos3 = "";

fetch(`https://dummyjson.com/products/category/${categoriaElegida}`)

    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.products);
        for (let i = 0; i < data.products.length; i++) {
            productos3 += `<article class="artfoto">
                            <img class="foto" src="${data.products[i].thumbnail}" alt="producto">
                            <h3>${data.products[i].title}</h3>
                            <p>${data.products[i].description}</p>
                            <p class="enstock">${data.products[i].availabilityStatus}</p>
                            <p>$${data.products[i].price}</p>
                            <button class="vermas"><a href="./product.html?id=${data.products[i].id}">Ver más</a></button>
                        </article>`;
        }
        titulo3.innerHTML = categoriaElegida;
        console.log(productos3);
        seccion3.innerHTML = productos3;


    })
    .catch(function (error) {
        console.log("Se detecto un error", error)
    })

