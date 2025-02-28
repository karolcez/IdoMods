
const ID = {
    POPUP: "popup",
    PRODUCTS: "products",
    MENU: "menu",
    PAGE_SIZE_SELECT: "page-size-select"
}
const CLASS = {
    TEXT_UNDERLINED: "text-underlined",
    NAVIGATION_ITEM: "navigation-item"
}

const SERVICE_ENDPOINT = 'https://brandstestowy.smallhost.pl/api/random';

class Product {
    constructor(id, text) {
        this.id = id;
        this.text = text;
    }
}

class ApiService {
    constructor(serviceEndpoint, urlBulder) {
        this.serviceEndpoint = serviceEndpoint;
        this.urlBulder = urlBulder;
        this.blockFetching = false;
    }
    fetchProducts(callback, { ...params }) {
        this.blockFetching = true;
        fetch(this.urlBulder(this.serviceEndpoint, { ...params }))
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.log(error))
            .finally(() => {
                this.blockFetching = false;
            })
    }
}

let pageNumber = 1;
let pageSize = 20;

let sections = null;
let navigations = null;

let products = null;

var buildUrl = (serviceEndpoint, params) => {
    const url = new URL(serviceEndpoint);
    for (const key in params) {
        url.searchParams.set(key, params[key]);
    }
    return url.toString();
};

const service = new ApiService(SERVICE_ENDPOINT, buildUrl);

function renderProducts(products) {
    const container = document.getElementById(ID.PRODUCTS);
    container.replaceChildren(...products.map(product => {
        const div = document.createElement("div");
        div.className = " inline-element inline-element-4 md-2-col";

        const idDiv = document.createElement("div");
        idDiv.className = "products-item";
        idDiv.innerHTML = `<div class="center products-item-text">ID: ${product.id}</div>`;

        div.appendChild(idDiv);

        div.addEventListener("click", () => showPopup(product));

        return div;
    }));
}

function parseData(data) {
    let products = [];
    if (data && data.data) {
        products = data.data.map(product => new Product(product.id, product.text));
    }
    return products;
}

const getPopupContent = (id, name) =>
    `<div class="popup-content">
                <button class="close-btn" onclick="closePopup()">x</button>
                <p>ID ${id || ''}</p>
                <br>
                <br>
                <p>Nazwa: ${name || ''}</p>
                <br>
                <br>
                <p>Wartość:</p>
                <br>
    </div>`

function toggleMenu() {
    const menu = document.getElementById(ID.MENU);
    if (menu) {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
}

function showPopup(product) {
    const popup = document.getElementById(ID.POPUP);
    if (popup) {
        popup.innerHTML = getPopupContent(product.id, product.name);
        popup.style.display = 'block';
    }
}

function closePopup() {
    const popup = document.getElementById(ID.POPUP);
    if (popup) {
        popup.innerHTML = '';
        popup.style.display = 'none';
    }
}

const productsLazyLoading = () => {
    const productsSection = document.getElementById(ID.PRODUCTS);
    if (productsSection) {
        const rect = productsSection.getBoundingClientRect();
        if ((rect.top - 100) <= window.innerHeight && rect.bottom >= 0) {
            if (!products) {
                service.fetchProducts((data) => {
                    products = parseData(data);
                    renderProducts(products);
                    pageNumber++;
                }, { pageNumber, pageSize });
            }
        }
    }
};

const changUnderlinedNavItem = () => {
    let theClosestElement = null;
    let closestDistance = Infinity;
    if (!sections) {
        sections = document.querySelectorAll("section");
    }
    if (!navigations) {
        navigations = document.getElementsByClassName(CLASS.NAVIGATION_ITEM);
    }
    for (const element of sections) {
        const distance = Math.abs(element.getBoundingClientRect().top);
        if (distance < closestDistance) {
            closestDistance = distance;
            theClosestElement = element;
        }
    }
    if (theClosestElement) {
        for (const element of navigations) {
            if (element.id === ("#" + theClosestElement.id)) {
                element.classList.add(CLASS.TEXT_UNDERLINED);
            }
            else {
                element.classList.remove(CLASS.TEXT_UNDERLINED);
            }
        }
    }
}

-function scrollBehaviour() {
    document.querySelectorAll('.navigation a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 250,
                    behavior: "smooth"
                });

                document.querySelectorAll('.navigation-item').forEach(item => item.classList.remove("active"));
                this.parentElement.classList.add("active");
            }
        });
    });
}();

-function pageSizeChange() {
    const selectElement = document.getElementById(ID.PAGE_SIZE_SELECT);
    if (selectElement) {
        selectElement.addEventListener('change', (event) => {
            pageSize = event.target.value;
            if (!products || (products.length < pageSize)) {
                service.fetchProducts((data) => {
                    products = parseData(data);
                    renderProducts(products);
                }, { pageNumber: pageNumber, pageSize: pageSize });
            }
            else {
                renderProducts(products.slice(0, pageSize));
            }
        });
    }
}()

window.addEventListener('scroll', productsLazyLoading);
window.addEventListener('scroll', changUnderlinedNavItem);
