
        /* COSAS QUE FALTAN: 
        - ACOMODAR EL ESTILO DE LA FOTO
        - ACOMODOAR EL ESTULO DEL TEXTO 
        - ACOMODAR FLEXBOX
        - ACOMODAR EL ESTILO DE LAS REVIEWS */


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
        console.log("Se detecto un error", error)
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
        precio.innerText = `$${data.price}`;

        let foto = document.querySelector(".foto12");
        foto.src = data.thumbnail;

        let fotoHidden = document.querySelector(".fotohidden");
        fotoHidden.src = data.thumbnail;

        let categoria = document.querySelector(".categ");
        categoria.innerText = `${data.category}`;

        let stock = document.querySelector(".ultdispo");
        stock.innerText = `Stock disponible: ${data.stock}`;

        /* tags */
        let tagsLista = data.tags;
        let tags = document.querySelector(".tagsjs");
        let tags2 = "";
        
        for (let i = 0; i < data.tags.length; i++) {
            console.log(data.tags);
            tags2 += `<p class="tags">${data.tags[i]}</p>`
        }
        console.log(tags2);
        tags.innerHTML = tags2;

        /* reviews */

        let reseñasLista = data.reviews;
        let reseñas = document.querySelector(".resenas");
        let reseñas2 = "";
        
        for (let i = 0; i < data.reviews.length; i++) {
            console.log(data.reviews);
            reseñas2 += `<img class="sinfoto" src="./img/12225881.png" alt="sinfoto">
                <p class="nombre"> ${data.reviews[i].reviewerName} ⭐️⭐️⭐️⭐️⭐︎</p>
                <p> ${data.reviews[i].rating} </p>
                <p class="fecha">${data.reviews[i].date}</p> 
                <p>${data.reviews[i].comment}</p>`
        }
        console.log(reseñas2);
        reseñas.innerHTML = reseñas2;


    })
    .catch(function (error) {
        console.log("Se detecto un error", error)
    })
