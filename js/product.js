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
                <a href="./category.html?id=${data[i].name}">${data[i].name}</a>
            </li>`
        }
        console.log(categorias)
        ul.innerHTML = categorias
    })
    .catch(function (error) {
        console.log("Se detecto un error")
    })

/* detalle de cada producto */

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let producto = queryStringObj.get('id')

fetch(`https://dummyjson.com/products/${producto}`)

    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        let nombre = document.querySelector(".h3t");
        nombre.innerText = `${data.title}`;

        let marca = document.querySelector(".h3tt");
        marca.innerText = `${data.brand}`;

        let descripcion = document.querySelector(".descrip");
        descripcion.innerText = `${data.description}`;

        let precio = document.querySelector(".preciop");
        precio.innerText = `${data.price}`;

        let foto = document.querySelector(".foto12");
        foto.innerHTML = `${data.images[1]}`;

        let fotoHidden = document.querySelector(".fotohidden");
        fotoHidden.innerHTML = `${data.images[2, 3]}`;


        let categoria = document.queryString(".categ");
        categoria.innerText = `${data.category}`;

        let stock = document.querySelector(".ultdispo");
        stock.innerText = `${data.stock}`;

        let tags = document.querySelector(".tags");
        tags.innerText = `${data.tags}`;





    })
    .catch(function (error) {
        console.log("Se detecto un error")
    })


