// Просто данные
const listProduct1 = {
    "categories": [
        {
            "name": "Краситель",
            "products": [
                {
                    "code": "21011",
                    "volume": "100"
                },
                {
                    "code": "23411",
                    "volume": "100"
                },
                {
                    "code": "9341",
                    "volume": "100"
                }
            ]
        }
    ]
}

const listProduct2 = {
    "categories": [
        {
            "name": "Краситель",
            "products": [
                {
                    "code": "212u941720481-2",
                    "volume": "100"
                },
                {
                    "code": "23411",
                    "volume": "100"
                },
                {
                    "code": "931241",
                    "volume": "10000"
                },
                {
                    "code": "9312561667941",
                    "volume": "12"
                },
                {
                    "code": "932341",
                    "volume": "115"
                }

            ]
        },
        {
            "name": "Уходовая продукция",
            "products": [
                {
                    "code": "01 SHAMPOO THE DOCTOR",
                    "valume": "20"
                },
                {
                    "code": "03 SHAMPOO SILVER HAIR",
                    "valume": "1000"
                },
                {
                    "code": "09 asf;jpiwegsko;ijdchnhveadf",
                    "valume": "1000"
                },
                {
                    "code": "10 a213asduohjpowrpR",
                    "valume": "1000"
                }
            ]
        }
    ]
}

const listProduct3 = {
    "categories": [
        {
            "name": "Краситель",
            "products": [
                {
                    "code": "212u941720481-2",
                    "volume": "100"
                }

            ]
        },
        {
            "name": "Уходовая продукция",
            "products": [
                {
                    "code": "01 SHAMPOO THE DOCTOR",
                    "volume": "20"
                },
                {
                    "code": "03 SHAMPOO SILVER HAIR",
                    "volume": "1000"
                }
            ]
        },
        {
            "name": "ывзфоцвфцв",
            "products": [
                {
                    "code": "Что",
                    "volume": "1"
                },
                {
                    "code": "фыв2",
                    "volume": "9999999"
                }
            ]
        },
        {
            "name": "ывзфоцвфцв",
            "products": [
                {
                    "code": "Что",
                    "volume": "1"
                },
                {
                    "code": "фыв2",
                    "volume": "9999999"
                }
            ]
        },
        {
            "name": "ывзфоцвфцв",
            "products": [
                {
                    "code": "Что",
                    "volume": "1"
                },
                {
                    "code": "фыв2",
                    "volume": "9999999"
                }
            ]
        },
        {
            "name": "ывзфоцвфцв",
            "products": [
                {
                    "code": "Что",
                    "volume": "1"
                },
                {
                    "code": "фыв2",
                    "volume": "9999999"
                },
                {
                    "code": "Что",
                    "volume": "1"
                },
                {
                    "code": "фыв2",
                    "volume": "9999999"
                }
            ]
        },
        {
            "name": "ывзфоцвфцв",
            "products": [
                {
                    "code": "Что",
                    "volume": "1"
                },
                {
                    "code": "фыв2",
                    "volume": "9999999"
                }
            ]
        },
        {
            "name": "ывзфоцвфцв",
            "products": [
                {
                    "code": "Что",
                    "volume": "1"
                },
                {
                    "code": "фыв2",
                    "volume": "9999999"
                }
            ]
        },
        {
            "name": "ывзфоцвфцв",
            "products": [
                {
                    "code": "Что",
                    "volume": "1"
                },
                {
                    "code": "фыв2",
                    "volume": "9999999"
                }
            ]
        },
        {
            "name": "ывзфоцвфцв",
            "products": [
                {
                    "code": "Что",
                    "volume": "1"
                },
                {
                    "code": "фыв2",
                    "volume": "9999999"
                },
                {
                    "code": "Что",
                    "volume": "1"
                },
                {
                    "code": "фыв2",
                    "volume": "9999999"
                }
            ]
        },
        {
            "name": "ывзфоцвфцв",
            "products": [
                {
                    "code": "Что",
                    "volume": "1"
                },
                {
                    "code": "фыв2",
                    "volume": "9999999"
                },
                {
                    "code": "Что",
                    "volume": "1"
                },
                {
                    "code": "фыв2",
                    "volume": "9999999"
                }
            ]
        },
        {
            "name": "Hello WORLD",
            "products": [
                {
                    "code": "123",
                    "volume": "10"
                },
                {
                    "code": "124afsgr",
                    "volume": "9999999"
                },
                {
                    "code": "Poswd2",
                    "volume": "19566"
                },
                {
                    "code": "asdw",
                    "volume": "9"
                }
            ]
        },
    ]
}

// Кнопки для имитации получения разных данных
const btn_1 = document.querySelector('.btn_1');
const btn_2 = document.querySelector('.btn_2');
const btn_3 = document.querySelector('.btn_3');

// Сборщик формы
// На вход нужно дать данные из categories
class Product {
    constructor(data, selectorBox, selectorProduct, formSelection) {
        this._data = data;
        this._selectorBox = selectorBox;
        this._selectorProduct = selectorProduct;
        this._formSelection = formSelection;
        this.value
    }

    // получает Template категории и устанавливает название раздела
    _getTemplateBox(name) {
        const element = document.querySelector(this._selectorBox).content.querySelector(".order__product-box").cloneNode(true);
        element.querySelector(".order__product-category").textContent = name;

        return element;
    }

    // получает Template продукта, устанавливает события на кнопки и название товара
    _getTemplateProduct(element) {
        const product = document.querySelector(this._selectorProduct).content.querySelector(".order__product").cloneNode(true);
        product.querySelector(".order__product-name").textContent = element.code + " " + element.volume + "ml";
        product.querySelector(".order__product-input").name = element.code;
        this._setEventListener(product);

        return product;
    };

    // устанавливает события на кнопки
    _setEventListener(element) {
        element.querySelector(".order__product-button_script_minus").addEventListener("click", () => {
            this.decreaseValume(element)
        })

        element.querySelector(".order__product-button_script_plus").addEventListener("click", () => {
            this.increaseValume(element)
        })
    };

    // Увеличивает значение на 1
    increaseValume(element) {
        this.value = element.querySelector(".order__product-input").value

        this.value = +this.value + 1;

        element.querySelector(".order__product-input").value = this.value
    }

    // уменьшает значение на 1
    decreaseValume(element) {
        this.value = element.querySelector(".order__product-input").value

        this.value = this.value != 0 ? this.value - 1 : 0;

        element.querySelector(".order__product-input").value = this.value
    }

    // Создает поле товара
    createOrder() {
        this._data.forEach(element => {
            this._TemplateBox = this._getTemplateBox(element.name);
            element.products.forEach(element => {
                this._TemplateProduct = this._getTemplateProduct(element);
                this._TemplateBox.append(this._TemplateProduct);
                document.querySelector(this._formSelection).append(this._TemplateBox);
            })
        });
        this._TemplateBox.append(this._TemplateProduct);

        document.querySelector(this._formSelection).append(this._TemplateBox);
    };
};

const submitButton = document.querySelector(".order__button-submit");

// функция отправки формы
function submitForm(e) {
    e.preventDefault();

    const inp = order.querySelectorAll(".order__product-input")
    const value = [];
    inp.forEach(e => {
        value.push({
            "code": e.name,
            "value": e.value
        });
    })
    console.log(value);

}


// Константа формы для открытия и закрытия
const order = document.querySelector('.form');

// загружает форму товаром
function renderList(data) {
    console.log(document.querySelector(".order__box").innerHTML);
    const list = new Product(data.categories, ".template-box", ".template-product", ".order__box");
    list.createOrder();

    return list;
}

function open1List() {
    document.querySelector(".order__box").innerHTML = "";
    renderList(listProduct1)

    order.classList.add("form_active");
}

function open2List() {
    document.querySelector(".order__box").innerHTML = "";
    renderList(listProduct2)

    order.classList.add("form_active");
}

function open3List() {
    document.querySelector(".order__box").innerHTML = "";
    renderList(listProduct3);

    order.classList.add("form_active");
}

submitButton.addEventListener("click", submitForm);

btn_1.addEventListener("click", open1List);
btn_2.addEventListener("click", open2List);
btn_3.addEventListener("click", open3List);