    window.onload = function () {

        let productos = []

        let productosDeEstaCategoria = ''

        let productosEnVista = document.getElementById("products-container")

        let categoria = document.getElementById("categoria")
        let button = document.getElementById("allProducts")
        axios.get(`http://localhost:3000/api/products/categories/${categoria.value}`)

            .then(function (res) {
                if (res.data.meta.status == 201) {

                    for (let i = 0; i < res.data.data.category.products.length; i++) {

                        productos = res.data.data.category.products

                        let producto = ''

                        producto = '<div class="col-12 col-sm-6 col-lg-4">' +

                            '<section class="product-box">' +

                            '<a href="/products/detail/' + productos[i].id + '">' +

                            '<figure class="product-box_image">' +

                            '<img src="/images/products/' + productos[i].image + '" alt="' + productos[i].name + '">' +

                            '</figure>' +

                            '<article class="product-box_data">' +

                            '<h2>$' + productos[i].price + '</h2>' +

                            '<span>' + productos[i].discount + '% OFF</span>' +

                            '<p>' + productos[i].name + '</p>' +

                            '<i class="fas fa-truck"></i>' +

                            '</article>' +

                            '</a>' +

                            '</section>' +

                            '</div>'

                        productosDeEstaCategoria += producto

                    }

                    productosEnVista.innerHTML = productosDeEstaCategoria

                } else if (res.data.meta.status == 200) {

                    for (let i = 0; i < res.data.data.products.length; i++) {

                        productos = res.data.data.products

                        let producto = ''

                        producto = '<div class="col-12 col-sm-6 col-lg-4">' +

                            '<section class="product-box">' +

                            '<a href="/products/detail/' + productos[i].id + '">' +

                            '<figure class="product-box_image">' +

                            '<img src="/images/products/' + productos[i].image + '" alt="' + productos[i].name + '">' +

                            '</figure>' +

                            '<article class="product-box_data">' +

                            '<h2>$' + productos[i].price + '</h2>' +

                            '<span>' + productos[i].discount + '% OFF</span>' +

                            '<p>' + productos[i].name + '</p>' +

                            '<i class="fas fa-truck"></i>' +

                            '</article>' +

                            '</a>' +

                            '</section>' +

                            '</div>'

                        productosDeEstaCategoria += producto

                    }

                    productosEnVista.innerHTML = productosDeEstaCategoria

                } else {
                    console.log(res)
                }

            })
            .catch(e => console.log(e))
        button.addEventListener("click", (function () {
            window.location.href = "http://localhost:3000/products/categories"
        }))
    }