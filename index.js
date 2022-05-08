
const listProdut = {
    "categories": [
        {
            "name": "Краситель",
            "products": [
                {
                    "code": "21011",
                    "valume": "100"
                },
                {
                    "code": "23411",
                    "valume": "100"
                },
                {
                    "code": "9341",
                    "valume": "100"
                }
            ]
        },
        {
            "name": "Уходовая продукция",
            "products": [
                {
                    "code": "01 SHAMPOO THE DOCTOR",
                    "valume": "100"
                },
                {
                    "code": "06 SHAMPOO SILVER HAIR",
                    "valume": "1000"
                }
            ]
        }
    ]
}

class Product {
    constructor(data) {
        console.log(data);

    }

    _getTemplateBox() {
        const box = document.querySelector("template-box").content.querySelector(".order__product-box").cloneNode(true);

        return box;
    }

    _getTemplateProduct() {
        const product = document.querySelector("template-product").content.querySelector(".order__product-box").cloneNode(true);

        return product;
    }
};

const btn_1 = document.querySelector('.btn_1');
const btn_2 = document.querySelector('.btn_2');
const btn_3 = document.querySelector('.btn_3');

const order = document.querySelector('.form')

function renderList(data) {
    const list = new Product(data)
    console.log(list);

    return list
}

function open1List() {
    order.classList.add("form_active")
}

function open2List() {
    order.classList.add("form_active")
}

function open3List() {
    renderList(listProdut)

    order.classList.add("form_active")
}

btn_1.addEventListener("click", open1List);
btn_2.addEventListener("click", open2List);
btn_3.addEventListener("click", open3List);