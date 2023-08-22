const products = [
    {
        name: "Giấy dán tường cao cấp",
        image: "./assets/images/anh1.jpg",
        code: "702281",
        price: "400.000 đ"
    },
    {
        name: "Giấy dán tường cao cấp",
        image: "./assets/images/anh2.jpg",
        code: "702294",
        price: "600.000 đ"
    },
    {
        name: "Giấy dán tường cao cấp",
        image: "./assets/images/anh3.jpg",
        code: "702298",
        price: "300.000 đ"
    },
    {
        name: "Giấy dán tường cao cấp",
        image: "./assets/images/anh4.jpg",
        code: "686868",
        price: "300.000 đ"
    },
    {
        name: "Giấy dán tường vân gỗ",
        image: "./assets/images/anh5.jpg",
        code: "702299",
        price: "400.000 đ"
    },
    {
        name: "Giấy dán tường vân gỗ",
        image: "./assets/images/anh6.jpg",
        code: "702300",
        price: "600.000 đ"
    },
    {
        name: "Giấy dán tường vân gỗ",
        image: "./assets/images/anh7.jpg",
        code: "7023001",
        price: "300.000 đ"
    },
    {
        name: "Giấy dán tường vân gỗ",
        image: "./assets/images/anh8.jpg",
        code: "7012236",
        price: "300.000 đ"
    },
    {
        name: "Giấy dán tường giả đá",
        image: "./assets/images/anh9.jpg",
        code: "704001",
        price: "300.000 đ"
    },
    {
        name: "Giấy dán tường giả đá",
        image: "./assets/images/anh10.jpg",
        code: "704002",
        price: "300.000 đ"
    },
    {
        name: "Giấy dán tường giả đá",
        image: "./assets/images/anh11.jpg",
        code: "704003",
        price: "400.000 đ"
    },
    {
        name: "Giấy dán tường giả đá",
        image: "./assets/images/anh12.jpg",
        code: "704004",
        price: "600.000 đ"
    },
    {
        name: "Giấy dán tường trơn",
        image: "./assets/images/anh13.jpg",
        code: "704005",
        price: "300.000 đ"
    },
    {
        name: "Giấy dán tường trơn",
        image: "./assets/images/anh14.jpg",
        code: "704226",
        price: "300.000 đ"
    },
    {
        name: "Giấy dán tường trơn",
        image: "./assets/images/anh15.jpg",
        code: "709225",
        price: "300.000 đ"
    },
    {
        name: "Giấy dán tường trơn",
        image: "./assets/images/anh16.jpg",
        code: "795812",
        price: "300.000 đ"
    }
]


const renderProduct = (product) => {
    const { name, price, image, code } = product

    return `
        <div class="col" >
            <div class="card  overflow-hidden">
                <img src="${image}" height="210px" width="100%" class="product-item object-cover" />
                <div class="d-flex flex-column p-3">
                    <h5>${name}</h5>
                    <p class="mb-0 fw-500">${price}</p>
                    <p class="mb-0"><span class="fw-500">Mã SP:</span> ${code}</p>

                    <div class="d-flex gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ee4d2d"
                            class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ee4d2d"
                            class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ee4d2d"
                            class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ee4d2d"
                            class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ee4d2d"
                            class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>

                    <button type="button" class="mt-4 btn btn-primary">Mua</button>
                </div>
            </div>
        </div >
    `
}


const renderCart = () => {
    const items = JSON.parse(localStorage.getItem("cart"))

    if (!Array.isArray(items) || items.length === 0) {
        document.getElementById("cart-items").innerHTML = `<p style="text-align: center; margin: 0;">Chưa có sản phẩm nào!</p>`
        document.getElementById("cart-badge").innerHTML = ""
        return
    }


    document.getElementById("cart-badge").innerHTML = `
        <div style="width: 16px; height: 16px; font-size: 12px; z-index: 10;" class="position-absolute start-50  bg-danger rounded-circle text-white d-flex justify-content-center align-items-end">
           <span>${items.length}</span>
        </div>
    `

    const elements = items.map(
        product => `
            <li>
                <div class="d-flex gap-2 py-1 px-2">
                    <img src="${product.image}" height="50px" width="100px" class="object-cover rounded">
                    <div class="flex-lg-grow-1">
                        <h5>${product.name}</h5>
                        <p class="mb-0 fw-500">${product.price}</p>
                    </div>
                </div>
            </li>
        `
    )

    if (elements.length > 0) {
        elements.push(
            `
                <button type="button" id="remove-cart" class="d-block mx-auto mt-4 btn btn-danger">Xoá Giỏ Hàng</button>
            `
        )

        document.getElementById("cart-items").innerHTML = elements.join("")
        document.getElementById("remove-cart").addEventListener(
            "click",
            () => {
                localStorage.removeItem("cart")
                renderCart()
            }
        )
        return
    }

}


const addToCart = (product) => {
    let items = JSON.parse(localStorage.getItem("cart"))

    if (!Array.isArray(items)) {
        items = []
    }

    if (!items.find(item => item.code === product.code)) {
        items.push(product)
    }


    localStorage.setItem("cart", JSON.stringify(items))
    renderCart()
}

const renderProducts = () => {
    const node = document.getElementById("products")
    node.innerHTML = products.map(product => renderProduct(product)).join("")
    const items = Array.from(node.querySelectorAll(".card"))

    items.forEach(
        (item, key) => {
            const product = products[key]
            item.querySelector("button").onclick = () => addToCart(product);
        }
    )
}

localStorage.removeItem("cart")
renderProducts()
