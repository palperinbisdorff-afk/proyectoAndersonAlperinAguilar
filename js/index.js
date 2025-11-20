/* Form buscador */

let formHeader = document.querySelector(".buscar");
let buscador = document.querySelector(".buscador");

formHeader.addEventListener("submit", function (evento) {
    evento.preventDefault();

    console.log(buscador)
    console.log(buscador.value)

    if (buscador.value == "") {
        alert("El campo se encuentra vacio, para realizar la busqueda, ingrese un producto");
    }
    else if (buscador.value.length < 3) {
        alert("El producto ingresado es menor de tres caracteres, ingrese otro producto");
    } else {
        formHeader.submit()
    }

    localStorage.setItem("usuario", buscador.value)

})

/* navegacion de forma vertical */

let ul = document.querySelector(".categoriasJS");
let categorias = "";

fetch('https://dummyjson.com/products/categories')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            categorias += `<li>
                <a href="./category.html?id=${data[i].name}">${data[i].name}</a>
            </li>`
        }
        console.log(categorias)
        ul.innerHTML = categorias
    })
    .catch(function (error) {
        console.log("Se detecto un error")
    })

/* pagina principal, seccion de productos 1*/

let seccion1 = document.querySelector(".mejprod .items");
let titulo1 = document.querySelector(".mejprod .title");
let productos = "";

fetch("https://dummyjson.com/products/category/smartphones")

    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.products);
        for (let i = 0; i < 10; i++) {
            console.log(data.products);
            productos += `<article class="artfoto">
                            <img class="foto" src="${data.products[i].thumbnail}" alt="perfume">
                            <h3>${data.products[i].title}</h3>
                            <p>${data.products[i].description}</p>
                            <p class="enstock">${data.products[i].availabilityStatus}</p>
                            <p>$${data.products[i].price}</p>
                            <button class="vermas"><a href="./product.html?id=${data.products[i].id}">Ver más</a></button>
                        </article>`
            }
            titulo1.innerHTML = data.products[0].category
            console.log(productos)
            seccion1.innerHTML = productos

    })
    .catch(function (error) {
        console.log("Se detecto un error", error)
    })

/* pagina principal, seccion de productos 2*/

let seccion2 = document.querySelector(".masprod .items");
let titulo2 = document.querySelector(".masprod .title");
let productos2 = "";

fetch("https://dummyjson.com/products/category/kitchen-accessories")

    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        for (let i = 0; i < 10; i++) {
            console.log(data.products);
            productos2 += `<article class="artfoto">
                            <img class="foto" src="${data.products[i].thumbnail}" alt = "producto">
                            <h3>${data.products[i].title}</h3>
                            <p>${data.products[i].description}</p>
                            <p class="enstock">${data.products[i].availabilityStatus}</p>
                            <p>$${data.products[i].price}</p>
                            <button class="vermas"><a href="./product.html?id=${data.products[i].id}">Ver más</a></button>
                        </article>`
            }
            titulo2.innerHTML = data.products[0].category
            console.log(productos)
            seccion2.innerHTML = productos2

    })
    .catch(function (error) {
        console.log("Se detecto un error", error)
    })