window.onload = function () {

    let ultimos = []

    let ultimosProductos = '';

    let productosEnOferta = '';

    let ultimosEnVista = document.getElementById("latest-products");
    let ofertasEnVista = document.getElementById("offers-products");

    axios.get('http://localhost:3000/api/products/latest')

        .then(function (res) {
            if (res.status == 200) {

                for (let i = 0; i < 8; i++) {

                    ultimos = res.data.data.ultimos;

                    let producto = ''

                    producto = '<div class="col-12 col-sm-6 col-lg-3">' +
                        '<section class="product-box">' +
                        '<a href="/products/detail/' + ultimos[i].id + '">' +
                        '<figure class="product-box_image">' +
                        '<img src="/images/products/' + ultimos[i].image + '"' + 'alt="' + ultimos[i].name + '">' +
                        '</figure>' +
                        '<article class="product-box_data">' +
                        '<h2>' + ultimos[i].price + '</h2>' +
                        '<span>' + ultimos[i].discount + "% OFF" + '</span>' +
                        '<p>' + ultimos[i].name + '</p>' +
                        '<i class="fas fa-truck"></i>' +
                        '</article>' +
                        '</a>' +
                        '</section>' +
                        '</div>'

                    ultimosProductos += producto;
                }
                ultimosEnVista.innerHTML = ultimosProductos;

            } else {
                console.log(res.status)
            }
        })

        .catch(e => console.log(e))

    axios.get('http://localhost:3000/api/products/offers')

        .then(function (res) {
            if (res.status == 200) {
                for (let i = 0; i < 8; i++) {

                    ultimos = res.data.data.inSale;

                    let producto = '';

                    producto = '<div class="col-12 col-sm-6 col-lg-3">' +
                        '<section class="product-box">' +
                        '<a href="/products/detail/' + ultimos[i].id + '">' +
                        '<figure class="product-box_image">' +
                        '<img src="/images/products/' + ultimos[i].image + '"' + 'alt="' + ultimos[i].name + '">' +
                        '</figure>' +
                        '<article class="product-box_data">' +
                        '<h2>' + ultimos[i].price + '</h2>' +
                        '<span>' + ultimos[i].discount + "% OFF" + '</span>' +
                        '<p>' + ultimos[i].name + '</p>' +
                        '<i class="fas fa-truck"></i>' +
                        '</article>' +
                        '</a>' +
                        '</section>' +
                        '</div>'

                    productosEnOferta += producto;
                }

                ofertasEnVista.innerHTML = productosEnOferta;

            } else {
                console.log(res.status)
            }
        })
        .catch(e => console.log(e))
}